import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { KpiItem } from "@/data/kpiContent"
import { useApprovalHistoryStore } from "./useApprovalHistoryStore"

export interface KpiOverride {
  meta: string
  frequencia: string
  responsavel: string
  aprovado: boolean
}

function uid() {
  return Math.random().toString(36).slice(2, 10)
}

interface KpiState {
  overrides: Record<string, KpiOverride>
  customItems: Record<string, KpiItem[]>
  setOverride: (id: string, data: KpiOverride) => void
  setAprovado: (id: string, aprovado: boolean, label: string) => void
  addCustomItem: (area: string, data: { indicador: string; fonte: string; frequenciaPadrao: string }) => void
  removeCustomItem: (area: string, id: string) => void
}

export const useKpiStore = create<KpiState>()(
  persist(
    (set) => ({
      overrides: {},
      customItems: {},
      setOverride: (id, data) => set((s) => ({ overrides: { ...s.overrides, [id]: data } })),
      setAprovado: (id, aprovado, label) => {
        set((s) => {
          const current: KpiOverride = s.overrides[id] ?? { meta: "", frequencia: "", responsavel: "", aprovado: false }
          return { overrides: { ...s.overrides, [id]: { ...current, aprovado } } }
        })
        useApprovalHistoryStore.getState().addEvent("KPI", label, aprovado ? "aprovado" : "reaberto")
      },
      addCustomItem: (area, data) =>
        set((s) => ({
          customItems: {
            ...s.customItems,
            [area]: [...(s.customItems[area] ?? []), { id: uid(), ...data }],
          },
        })),
      removeCustomItem: (area, id) =>
        set((s) => ({
          customItems: { ...s.customItems, [area]: (s.customItems[area] ?? []).filter((i) => i.id !== id) },
        })),
    }),
    { name: "fastPortalKpiDecisoes" }
  )
)
