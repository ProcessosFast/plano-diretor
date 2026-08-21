import { create } from "zustand"
import { persist } from "zustand/middleware"
import { useApprovalHistoryStore } from "./useApprovalHistoryStore"

export interface SlaOverride {
  prazo?: string
  indicadores?: string
  prazoAprovado?: boolean
  indicadoresAprovado?: boolean
}

interface SlaState {
  overrides: Record<string, SlaOverride>
  setOverride: (empresa: string, data: SlaOverride) => void
  setAprovado: (empresa: string, campo: "prazo" | "indicadores", aprovado: boolean, label: string) => void
}

export const useSlaStore = create<SlaState>()(
  persist(
    (set) => ({
      overrides: {},
      setOverride: (empresa, data) =>
        set((s) => ({ overrides: { ...s.overrides, [empresa]: { ...s.overrides[empresa], ...data } } })),
      setAprovado: (empresa, campo, aprovado, label) => {
        set((s) => ({
          overrides: {
            ...s.overrides,
            [empresa]: {
              ...s.overrides[empresa],
              [campo === "prazo" ? "prazoAprovado" : "indicadoresAprovado"]: aprovado,
            },
          },
        }))
        useApprovalHistoryStore.getState().addEvent("SLA", label, aprovado ? "aprovado" : "reaberto")
      },
    }),
    { name: "fastPortalSlaDecisoes" }
  )
)
