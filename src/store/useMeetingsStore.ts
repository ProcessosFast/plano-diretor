import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { ActionItem, ActionStatus, Ata, Meeting } from "@/data/meetingsTypes"

function uid() {
  return Math.random().toString(36).slice(2, 10)
}

interface MeetingsState {
  meetings: Meeting[]
  addMeeting: (data: Omit<Meeting, "id" | "actionItems" | "atas">) => void
  updateMeeting: (id: string, data: Partial<Omit<Meeting, "id" | "actionItems" | "atas">>) => void
  removeMeeting: (id: string) => void
  addActionItem: (meetingId: string, data: Omit<ActionItem, "id">) => void
  updateActionItem: (meetingId: string, itemId: string, data: Partial<Omit<ActionItem, "id">>) => void
  removeActionItem: (meetingId: string, itemId: string) => void
  setActionStatus: (meetingId: string, itemId: string, status: ActionStatus) => void
  addAta: (meetingId: string, data: Omit<Ata, "id">) => void
  removeAta: (meetingId: string, ataId: string) => void
}

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
  },
]

export const useMeetingsStore = create<MeetingsState>()(
  persist(
    (set) => ({
      meetings: SEED_MEETINGS,

      addMeeting: (data) =>
        set((s) => ({
          meetings: [{ id: uid(), actionItems: [], atas: [], ...data }, ...s.meetings],
        })),

      updateMeeting: (id, data) =>
        set((s) => ({
          meetings: s.meetings.map((m) => (m.id === id ? { ...m, ...data } : m)),
        })),

      removeMeeting: (id) =>
        set((s) => ({ meetings: s.meetings.filter((m) => m.id !== id) })),

      addActionItem: (meetingId, data) =>
        set((s) => ({
          meetings: s.meetings.map((m) =>
            m.id === meetingId ? { ...m, actionItems: [...m.actionItems, { id: uid(), ...data }] } : m
          ),
        })),

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
    }),
    { name: "fastPortalMeetings" }
  )
)
