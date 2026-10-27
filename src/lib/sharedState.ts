import { useSyncExternalStore } from "react"
import type { StoreApi } from "zustand"

// Estado compartilhado entre todos que abrem o portal (Redis via /api/state).
// O persist do zustand (localStorage) continua como cache: a tela abre na hora
// e funciona sem rede.
//
// Cada store é quebrado em itens pequenos para o Redis, para que duas pessoas
// editando coisas diferentes ao mesmo tempo não se sobrescrevam:
//   "value" → o campo inteiro é um item            (v:<campo>)
//   "map"   → um item por chave do objeto          (m:<campo>:<chave>)
//   "list"  → um item por elemento com id + ordem  (l:<campo>:<id>, o:<campo>)
//             com sublistas opcionais também quebradas por id.

type Items = Record<string, unknown>
type Data = Record<string, Items>
type ListSpec = { kind: "list"; children?: Record<string, ListSpec> }
export type FieldSpec = "value" | "map" | ListSpec

export type SyncStatus = "carregando" | "online" | "offline"

interface Binding {
  store: StoreApi<object>
  fields: Record<string, FieldSpec>
  last: Items
}

const BACKUP_KEY = "fastPortalBackupAntesDaNuvem"

const bindings = new Map<string, Binding>()
const statusListeners = new Set<() => void>()

let status: SyncStatus = "carregando"
let started = false
let applying = false
let lastLocalWrite = 0
let pending: Data = {}
let flushTimer: ReturnType<typeof setTimeout> | undefined

function setStatus(next: SyncStatus) {
  if (status === next) return
  status = next
  statusListeners.forEach((fn) => fn())
}

function encodeList(prefix: string, list: unknown, spec: ListSpec, out: Items) {
  const arr = Array.isArray(list) ? (list as Record<string, unknown>[]) : []
  out[`o:${prefix}`] = arr.map((x) => x.id)
  for (const x of arr) {
    const rest = { ...x }
    for (const [child, childSpec] of Object.entries(spec.children ?? {})) {
      encodeList(`${prefix}:${x.id}:${child}`, x[child], childSpec, out)
      delete rest[child]
    }
    out[`l:${prefix}:${x.id}`] = rest
  }
}

function decodeList(prefix: string, items: Items, spec: ListSpec): Record<string, unknown>[] {
  const ids = [...((items[`o:${prefix}`] as string[] | undefined) ?? [])]
  // Itens que outra pessoa criou ao mesmo tempo podem não estar na ordem salva.
  const itemPrefix = `l:${prefix}:`
  for (const key of Object.keys(items)) {
    if (!key.startsWith(itemPrefix)) continue
    const id = key.slice(itemPrefix.length)
    if (!id.includes(":") && !ids.includes(id)) ids.push(id)
  }
  const result: Record<string, unknown>[] = []
  for (const id of ids) {
    const item = items[`${itemPrefix}${id}`] as Record<string, unknown> | undefined
    if (!item) continue
    const obj = { ...item }
    for (const [child, childSpec] of Object.entries(spec.children ?? {})) {
      obj[child] = decodeList(`${prefix}:${id}:${child}`, items, childSpec)
    }
    result.push(obj)
  }
  return result
}

function encode(state: Record<string, unknown>, fields: Record<string, FieldSpec>): Items {
  const out: Items = {}
  for (const [field, spec] of Object.entries(fields)) {
    const value = state[field]
    if (spec === "value") out[`v:${field}`] = value
    else if (spec === "map") {
      for (const [k, v] of Object.entries((value ?? {}) as Items)) out[`m:${field}:${k}`] = v
    } else encodeList(field, value, spec, out)
  }
  return out
}

function decode(items: Items, fields: Record<string, FieldSpec>): Record<string, unknown> {
  const state: Record<string, unknown> = {}
  for (const [field, spec] of Object.entries(fields)) {
    if (spec === "value") {
      if (`v:${field}` in items) state[field] = items[`v:${field}`]
    } else if (spec === "map") {
      const prefix = `m:${field}:`
      const map: Items = {}
      for (const [k, v] of Object.entries(items)) if (k.startsWith(prefix)) map[k.slice(prefix.length)] = v
      state[field] = map
    } else if (`o:${field}` in items) {
      state[field] = decodeList(field, items, spec)
    }
  }
  return state
}

function diff(prev: Items, next: Items): Items {
  const patch: Items = {}
  for (const key of Object.keys(next)) {
    if (JSON.stringify(prev[key]) !== JSON.stringify(next[key])) patch[key] = next[key]
  }
  for (const key of Object.keys(prev)) {
    if (!(key in next)) patch[key] = null
  }
  return patch
}

function backupLocal(local: Data) {
  try {
    if (window.localStorage.getItem(BACKUP_KEY) === null) {
      window.localStorage.setItem(BACKUP_KEY, JSON.stringify({ savedAt: new Date().toISOString(), data: local }))
    }
  } catch {
    // storage unavailable — ignore
  }
}

function applyServerData(data: Data) {
  applying = true
  try {
    bindings.forEach((binding, name) => {
      const next = decode(data[name] ?? {}, binding.fields)
      const encoded = encode({ ...binding.store.getState(), ...next }, binding.fields)
      // Sem mudança real não mexe no store, para não re-renderizar a tela à toa.
      if (!Object.keys(diff(binding.last, encoded)).length) return
      binding.store.setState(next)
      binding.last = encoded
    })
  } finally {
    applying = false
  }
}

async function pull() {
  const startedAt = Date.now()
  try {
    const res = await fetch("/api/state", { cache: "no-store" })
    if (!res.ok) throw new Error(String(res.status))
    let payload = (await res.json()) as { initialized: boolean; data: Data }

    const local: Data = {}
    bindings.forEach((binding, name) => {
      local[name] = binding.last
    })

    if (!payload.initialized) {
      const init = await fetch("/api/state", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ init: local }),
      })
      if (!init.ok) throw new Error(String(init.status))
      payload = await init.json()
    }

    // Ignora a leitura se houve edição local enquanto ela estava em andamento.
    if (startedAt >= lastLocalWrite && Object.keys(pending).length === 0) {
      backupLocal(local)
      applyServerData(payload.data)
    }
    setStatus("online")
  } catch {
    setStatus("offline")
  }
}

async function flush() {
  flushTimer = undefined
  const patches = pending
  pending = {}
  if (!Object.keys(patches).length) return
  try {
    const res = await fetch("/api/state", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ patches }),
    })
    if (!res.ok) throw new Error(String(res.status))
    lastLocalWrite = Date.now()
    setStatus("online")
  } catch {
    // Devolve para a fila e tenta de novo depois.
    for (const [name, items] of Object.entries(patches)) {
      pending[name] = { ...items, ...pending[name] }
    }
    setStatus("offline")
    flushTimer = setTimeout(flush, 10_000)
  }
}

function queue(name: string, patch: Items) {
  lastLocalWrite = Date.now()
  pending[name] = { ...pending[name], ...patch }
  if (flushTimer) clearTimeout(flushTimer)
  flushTimer = setTimeout(flush, 400)
}

/** Liga um store do zustand ao banco compartilhado. Chamar antes de startSharedSync(). */
export function shareStore<S extends object>(name: string, store: StoreApi<S>, fields: Record<string, FieldSpec>) {
  const binding: Binding = {
    store: store as unknown as StoreApi<object>,
    fields,
    last: encode(store.getState() as Record<string, unknown>, fields),
  }
  bindings.set(name, binding)
  store.subscribe((state) => {
    const next = encode(state as Record<string, unknown>, fields)
    if (applying) {
      binding.last = next
      return
    }
    const patch = diff(binding.last, next)
    binding.last = next
    if (Object.keys(patch).length) queue(name, patch)
  })
}

export function startSharedSync() {
  if (started) return
  started = true
  void pull()
  setInterval(() => {
    if (document.visibilityState === "visible") void pull()
  }, 20_000)
  window.addEventListener("focus", () => void pull())
}

export function useSyncStatus() {
  return useSyncExternalStore(
    (fn) => {
      statusListeners.add(fn)
      return () => statusListeners.delete(fn)
    },
    () => status
  )
}
