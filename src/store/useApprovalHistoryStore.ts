import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface ApprovalEvent {
  id: string
  timestamp: string
  area: string
  item: string
  action: "aprovado" | "reaberto"
}

function uid() {
  return Math.random().toString(36).slice(2, 10)
}

interface ApprovalHistoryState {
  events: ApprovalEvent[]
  addEvent: (area: string, item: string, action: ApprovalEvent["action"]) => void
}

export const useApprovalHistoryStore = create<ApprovalHistoryState>()(
  persist(
    (set) => ({
      events: [],
      addEvent: (area, item, action) =>
        set((s) => ({
          events: [{ id: uid(), timestamp: new Date().toISOString(), area, item, action }, ...s.events],
        })),
    }),
    { name: "fastPortalAprovacoes" }
  )
)
