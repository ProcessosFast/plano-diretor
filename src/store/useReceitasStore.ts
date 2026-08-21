import { create } from "zustand"
import { persist } from "zustand/middleware"
import { useApprovalHistoryStore } from "./useApprovalHistoryStore"

export interface PendingOverride {
  percentual: string
  base: string
  aprovado?: boolean
}

export interface RateioOverride {
  decisao: string
  definido: boolean
  aprovado?: boolean
}

interface ReceitasState {
  pending: Record<string, PendingOverride>
  rateio: Record<string, RateioOverride>
  setPending: (unidade: string, data: PendingOverride) => void
  setPendingAprovado: (unidade: string, aprovado: boolean, label: string) => void
  setRateio: (item: string, data: RateioOverride) => void
  setRateioAprovado: (item: string, aprovado: boolean, label: string) => void
}

export const useReceitasStore = create<ReceitasState>()(
  persist(
    (set) => ({
      pending: {},
      rateio: {},
      setPending: (unidade, data) =>
        set((s) => ({ pending: { ...s.pending, [unidade]: data } })),
      setPendingAprovado: (unidade, aprovado, label) => {
        set((s) => ({
          pending: { ...s.pending, [unidade]: { ...(s.pending[unidade] ?? { percentual: "", base: "" }), aprovado } },
        }))
        useApprovalHistoryStore.getState().addEvent("Mapa de Receitas", label, aprovado ? "aprovado" : "reaberto")
      },
      setRateio: (item, data) =>
        set((s) => ({ rateio: { ...s.rateio, [item]: data } })),
      setRateioAprovado: (item, aprovado, label) => {
        set((s) => ({
          rateio: { ...s.rateio, [item]: { ...(s.rateio[item] ?? { decisao: "", definido: false }), aprovado } },
        }))
        useApprovalHistoryStore.getState().addEvent("Mapa de Receitas · Rateio", label, aprovado ? "aprovado" : "reaberto")
      },
    }),
    { name: "fastPortalReceitasDecisoes" }
  )
)
