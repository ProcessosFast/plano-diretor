import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { ActionItem, ActionStatus, Ata, Meeting } from "@/data/meetingsTypes"

function uid() {
  return Math.random().toString(36).slice(2, 10)
}

// Token mais longo que o uid() padrão — é o único "segredo" que identifica
// quem pode assinar por um participante específico (não há login no portal).
function genToken() {
  return uid() + uid()
}

interface MeetingsState {
  meetings: Meeting[]
  addMeeting: (data: Omit<Meeting, "id" | "actionItems" | "atas" | "signatures">) => void
  updateMeeting: (id: string, data: Partial<Omit<Meeting, "id" | "actionItems" | "atas" | "signatures">>) => void
  removeMeeting: (id: string) => void
  addActionItem: (meetingId: string, data: Omit<ActionItem, "id" | "order">) => void
  updateActionItem: (meetingId: string, itemId: string, data: Partial<Omit<ActionItem, "id">>) => void
  removeActionItem: (meetingId: string, itemId: string) => void
  setActionStatus: (meetingId: string, itemId: string, status: ActionStatus) => void
  reorderActionItems: (meetingId: string, fromIndex: number, toIndex: number) => void
  addAta: (meetingId: string, data: Omit<Ata, "id">) => void
  removeAta: (meetingId: string, ataId: string) => void
  addSignature: (meetingId: string, name: string) => void
  removeSignature: (meetingId: string, signatureId: string) => void
  signByToken: (meetingId: string, token: string) => boolean
  revokeSignature: (meetingId: string, signatureId: string) => void
}

// Ids de reuniões-seed removidas deliberadamente. O merge abaixo filtra esses ids
// mesmo de navegadores que já tinham a reunião persistida — só tirar do
// SEED_MEETINGS não apaga o que já foi salvo no localStorage de quem já abriu o app.
const REMOVED_SEED_IDS = ["seed-ata-01"]

const SEED_MEETINGS: Meeting[] = [
  {
    id: "seed-1",
    date: new Date().toISOString().slice(0, 10),
    time: "11:00",
    title: "Reunião do Conselho Consultivo",
    participants: "Kleber, Josélio, Nicole, Guilherme, Priscila",
    pauta: "Reunião regular de terça-feira, conforme ritual de governança do Plano Diretor (3.3/3.6).",
    decisions: "",
    actionItems: [],
    atas: [],
    signatures: [],
  },
]

export const useMeetingsStore = create<MeetingsState>()(
  persist(
    (set) => ({
      meetings: SEED_MEETINGS,

      addMeeting: (data) =>
        set((s) => ({
          meetings: [{ id: uid(), actionItems: [], atas: [], signatures: [], ...data }, ...s.meetings],
        })),

      updateMeeting: (id, data) =>
        set((s) => ({
          meetings: s.meetings.map((m) => (m.id === id ? { ...m, ...data } : m)),
        })),

      removeMeeting: (id) =>
        set((s) => ({ meetings: s.meetings.filter((m) => m.id !== id) })),

      addActionItem: (meetingId, data) =>
        set((s) => {
          const maxOrder = Math.max(0, ...s.meetings.flatMap((m) => m.actionItems.map((a) => a.order ?? 0)))
          return {
            meetings: s.meetings.map((m) =>
              m.id === meetingId
                ? { ...m, actionItems: [...m.actionItems, { id: uid(), order: maxOrder + 1, ...data }] }
                : m
            ),
          }
        }),

      updateActionItem: (meetingId, itemId, data) =>
        set((s) => ({
          meetings: s.meetings.map((m) =>
            m.id === meetingId
              ? { ...m, actionItems: m.actionItems.map((a) => (a.id === itemId ? { ...a, ...data } : a)) }
              : m
          ),
        })),

      removeActionItem: (meetingId, itemId) =>
        set((s) => ({
          meetings: s.meetings.map((m) =>
            m.id === meetingId ? { ...m, actionItems: m.actionItems.filter((a) => a.id !== itemId) } : m
          ),
        })),

      setActionStatus: (meetingId, itemId, status) =>
        set((s) => ({
          meetings: s.meetings.map((m) =>
            m.id === meetingId
              ? { ...m, actionItems: m.actionItems.map((a) => (a.id === itemId ? { ...a, status } : a)) }
              : m
          ),
        })),

      reorderActionItems: (meetingId, fromIndex, toIndex) =>
        set((s) => ({
          meetings: s.meetings.map((m) => {
            if (m.id !== meetingId) return m
            const items = [...m.actionItems]
            const [moved] = items.splice(fromIndex, 1)
            items.splice(toIndex, 0, moved)
            return { ...m, actionItems: items.map((a, i) => ({ ...a, order: i })) }
          }),
        })),

      addAta: (meetingId, data) =>
        set((s) => ({
          meetings: s.meetings.map((m) =>
            m.id === meetingId ? { ...m, atas: [...(m.atas ?? []), { id: uid(), ...data }] } : m
          ),
        })),

      removeAta: (meetingId, ataId) =>
        set((s) => ({
          meetings: s.meetings.map((m) =>
            m.id === meetingId ? { ...m, atas: (m.atas ?? []).filter((a) => a.id !== ataId) } : m
          ),
        })),

      addSignature: (meetingId, name) =>
        set((s) => ({
          meetings: s.meetings.map((m) =>
            m.id === meetingId
              ? {
                  ...m,
                  signatures: [...(m.signatures ?? []), { id: uid(), name, token: genToken(), signedAt: null }],
                }
              : m
          ),
        })),

      removeSignature: (meetingId, signatureId) =>
        set((s) => ({
          meetings: s.meetings.map((m) =>
            m.id === meetingId
              ? { ...m, signatures: (m.signatures ?? []).filter((sig) => sig.id !== signatureId) }
              : m
          ),
        })),

      signByToken: (meetingId, token) => {
        let found = false
        set((s) => ({
          meetings: s.meetings.map((m) => {
            if (m.id !== meetingId) return m
            const signatures = (m.signatures ?? []).map((sig) => {
              if (sig.token !== token) return sig
              found = true
              return sig.signedAt ? sig : { ...sig, signedAt: new Date().toISOString() }
            })
            return { ...m, signatures }
          }),
        }))
        return found
      },

      revokeSignature: (meetingId, signatureId) =>
        set((s) => ({
          meetings: s.meetings.map((m) =>
            m.id === meetingId
              ? {
                  ...m,
                  signatures: (m.signatures ?? []).map((sig) =>
                    sig.id === signatureId ? { ...sig, signedAt: null } : sig
                  ),
                }
              : m
          ),
        })),
    }),
    {
      name: "fastPortalMeetings",
      // Navegadores que já tinham dados salvos não recebem automaticamente novas atas
      // adicionadas ao SEED_MEETINGS (o localStorage persistido prevalece). Este merge
      // reintroduz qualquer reunião "seed" que ainda não exista no estado salvo do
      // usuário, preservando tudo o que ele já criou/editou.
      merge: (persistedState, currentState) => {
        const persisted = persistedState as Partial<MeetingsState> | undefined
        const persistedMeetings = (persisted?.meetings ?? []).filter(
          (m) => !REMOVED_SEED_IDS.includes(m.id)
        )
        const missingSeeds = SEED_MEETINGS.filter(
          (seed) => !persistedMeetings.some((m) => m.id === seed.id)
        )
        return {
          ...currentState,
          ...persisted,
          meetings: [...missingSeeds, ...persistedMeetings],
        }
      },
    }
  )
)
