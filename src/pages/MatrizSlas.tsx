import { useState } from "react"
import { FastLogo } from "@/components/shared/FastLogo"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { SLA_ROWS } from "@/data/slaContent"
import { useSlaStore } from "@/store/useSlaStore"
import { Pencil, Save, X, Check, ThumbsUp, RotateCcw } from "lucide-react"

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-2.5">
      <div className="text-[9.5px] font-extrabold uppercase tracking-wide text-muted mb-0.5">{label}</div>
      <p className="text-xs text-ink-2 leading-relaxed">{value}</p>
    </div>
  )
}

function EditableField({
  label,
  value,
  definido,
  aprovado,
  onSave,
  onApprove,
}: {
  label: string
  value: string
  definido: boolean
  aprovado: boolean
  onSave: (v: string) => void
  onApprove: (v: boolean) => void
}) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(value)

  function start() {
    setDraft(value)
    setEditing(true)
  }

  function save() {
    onSave(draft)
    setEditing(false)
  }

  return (
    <div className="mb-2.5">
      <div className="flex items-center justify-between gap-2 mb-0.5 flex-wrap">
        <div className="flex items-center gap-1.5">
          <span className="text-[9.5px] font-extrabold uppercase tracking-wide text-muted">{label}</span>
          {aprovado ? (
            <span className="inline-flex items-center gap-1 text-[9px] font-extrabold uppercase rounded-full px-1.5 py-0.5 border bg-[#E9F8F3] border-[#BFE9DA] text-back">
              <Check size={9} /> Aprovado
            </span>
          ) : (
            <span
              className={cn(
                "inline-flex items-center gap-1 text-[9px] font-extrabold uppercase rounded-full px-1.5 py-0.5 border",
                definido ? "bg-[#EAF2FA] border-[#C7DEF2] text-oper" : "bg-[#FFF8E8] border-[#EFD9A6] text-warn"
              )}
            >
              {definido ? "Pendente aprovação" : "A definir"}
            </span>
          )}
        </div>
        {!editing && (
          <div className="flex items-center gap-2">
            <button onClick={start} className="text-[10.5px] font-bold text-brand-red flex items-center gap-1 hover:underline">
              <Pencil size={10} /> {definido ? "editar" : "definir em reunião"}
            </button>
            {aprovado ? (
              <button
                onClick={() => onApprove(false)}
                className="inline-flex items-center gap-1 text-[9.5px] font-bold text-muted hover:text-brand-red"
                title="Reabrir para edição"
              >
                <RotateCcw size={10} />
              </button>
            ) : (
              <button
                onClick={() => onApprove(true)}
                disabled={!definido}
                title={!definido ? "Preencha antes de aprovar" : "Aprovar"}
                className={cn(
                  "inline-flex items-center gap-1 text-[9.5px] font-extrabold uppercase rounded-full px-2 py-0.5 border",
                  definido ? "bg-white border-line text-ink-2 hover:bg-soft cursor-pointer" : "bg-soft border-line text-muted cursor-not-allowed opacity-60"
                )}
              >
                <ThumbsUp size={10} /> Aprovar
              </button>
            )}
          </div>
        )}
      </div>
      {editing ? (
        <div className="space-y-1.5">
          <Textarea value={draft} onChange={(e) => setDraft(e.target.value)} />
          <div className="flex gap-2 justify-end">
            <Button size="sm" variant="outline" onClick={() => setEditing(false)}>
              <X size={12} /> Cancelar
            </Button>
            <Button size="sm" onClick={save}>
              <Save size={12} /> Salvar
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-xs text-ink-2 leading-relaxed">{value}</p>
      )}
    </div>
  )
}

function SlaCard({ row }: { row: (typeof SLA_ROWS)[number] }) {
  const overrides = useSlaStore((s) => s.overrides)
  const setOverride = useSlaStore((s) => s.setOverride)
  const setAprovado = useSlaStore((s) => s.setAprovado)
  const o = overrides[row.empresa]

  const prazo = o?.prazo ?? row.prazoPadrao
  const prazoDefinido = o?.prazo !== undefined || row.prazoDefinido
  const indicadores = o?.indicadores ?? row.indicadoresPadrao
  const indicadoresDefinido = o?.indicadores !== undefined || row.indicadoresDefinido

  return (
    <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden border-t-[3px] border-t-back">
      <div className="p-5">
        <b className="text-base font-extrabold text-ink block mb-3">{row.empresa}</b>
        <Field label="Escopo" value={row.escopo} />
        <EditableField
          label="Prazo (SLA)"
          value={prazo}
          definido={prazoDefinido}
          aprovado={!!o?.prazoAprovado}
          onSave={(v) => setOverride(row.empresa, { prazo: v })}
          onApprove={(v) => setAprovado(row.empresa, "prazo", v, `${row.empresa} — Prazo (SLA)`)}
        />
        <EditableField
          label="Indicadores"
          value={indicadores}
          definido={indicadoresDefinido}
          aprovado={!!o?.indicadoresAprovado}
          onSave={(v) => setOverride(row.empresa, { indicadores: v })}
          onApprove={(v) => setAprovado(row.empresa, "indicadores", v, `${row.empresa} — Indicadores`)}
        />
        <Field label="Remuneração" value={row.remuneracao} />
        <Field label="Responsabilização" value={row.responsabilizacao} />
        <Field label="Governança" value={row.governanca} />
      </div>
    </div>
  )
}

export function MatrizSlas() {
  return (
    <div className="max-w-6xl mx-auto my-8 px-4 pb-14">
      <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden mb-6">
        <div className="h-1.5 bg-gradient-to-r from-brand-red to-[#8f1116]" />
        <div className="p-6">
          <div className="flex items-center gap-3.5 mb-2">
            <FastLogo height={28} />
            <div className="border-l border-line pl-3.5">
              <div className="text-lg font-extrabold text-ink">Matriz de SLAs</div>
              <div className="text-xs text-muted">Plano Diretor · Item 9.8 (Contratos internos e SLAs)</div>
            </div>
          </div>
          <p className="text-sm text-ink-2 max-w-[75ch]">
            O Plano Diretor define que todo contrato interno entre uma Empresa Especializada e as demais empresas
            do Ecossistema deve conter seis dimensões: <b>escopo, prazo, indicadores, remuneração,
            responsabilização e governança</b>. Esta página consolida o que já está definido em cada política
            interna publicada, e deixa em aberto — editável, para preencher em reunião — o que ainda não tem
            prazo ou indicador formalizado.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-4">
        {SLA_ROWS.map((row) => (
          <SlaCard key={row.empresa} row={row} />
        ))}
      </div>

      <p className="text-[11.5px] text-muted mt-4">
        Fonte: Plano Diretor do Ecossistema FAST, Itens 9.7–9.10, 11.8–11.9 e 12.6, cruzados com as Políticas
        Internas de CSC, Unity Company, Engenharia e Log Express já publicadas neste portal.
      </p>

      <footer className="text-center text-[11px] text-muted mt-6">
        Grupo FAST · Matriz de SLAs · Documento interno e confidencial
      </footer>
    </div>
  )
}
