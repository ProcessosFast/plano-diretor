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
  addActionItem: (meetingId: string, data: Omit<ActionItem, "id" | "order">) => void
  updateActionItem: (meetingId: string, itemId: string, data: Partial<Omit<ActionItem, "id">>) => void
  removeActionItem: (meetingId: string, itemId: string) => void
  setActionStatus: (meetingId: string, itemId: string, status: ActionStatus) => void
  reorderActionItems: (meetingId: string, fromIndex: number, toIndex: number) => void
  addAta: (meetingId: string, data: Omit<Ata, "id">) => void
  removeAta: (meetingId: string, ataId: string) => void
}

const SEED_MEETINGS: Meeting[] = [
  {
    id: "seed-ata-01",
    date: "2026-08-25",
    time: "16:30",
    title: "Reunião do Comitê de Governança e Compliance nº 01",
    participants:
      "Letícia Werneck, Glauco de Andrade, Leonardo de Oliveira, Josélio, Guilherme, Priscilla — Presentes · Quórum atingido",
    pauta:
      "Tipo: Ordinária · Local: Miguel Pereira · Ata elaborada por: Letícia · Encerramento: 17h40\n\n" +
      "1. Apresentação do Portal de Governança e Compliance\n" +
      "2. Organograma Empresarial e Estrutura do Ecossistema Fast Atual X Plano\n" +
      "3. Regularização de Contratações com PJ\n" +
      "4. Terceirização de Galpões (estudo)\n" +
      "5. Estruturação da Equipe de Manutenção (estudo)\n" +
      "6. Indicação para Diretor do CSC\n" +
      "7. Contrato de Prestação de Serviços - CSC e Mapa de Receitas",
    decisions:
      "1. Apresentação do Portal — abertura da reunião com apresentação panorâmica do portal de trabalho de governança e compliance pelo time de comitê.\n\n" +
      "2. Organograma Empresarial — análise caso a caso das empresas do ecossistema, com revisão da localização dos funcionários conforme organograma. Necessidades identificadas: separar Fast Homes e Fast Obras e criar empresas comerciais de ambas; criar empresa do Front Office Comercial Franquias; criar empresas comerciais de Curitiba; criar empresas para Franciane e Carlos (gerentes regionais); adicionar CCN como CCN Serviços. Decisão: necessidade de correção das contratações conforme estrutura revisada — planos de ação relatados e descritos no portal. Ponto de atenção: cuidado especial para não ligar contratados pela DCS (Distribuição e Comercialização) à Casa do Montador.\n\n" +
      "3. Regularização de Contratações com PJ — necessidade de regularizar todos os contratados via PJ; conforme cada caso, transformar em CLT ou assumir condição de cotista. Prioridade dada aos impactos da Reforma Tributária 2027.\n\n" +
      "4. Terceirização de Galpões (estudo) — levantada a possibilidade de terceirização da operação de galpões. Sem conclusão nesta reunião; estudos em andamento.\n\n" +
      "5. Estruturação da Equipe de Manutenção (estudo) — proposta de tornar a equipe de manutenção (liderança atual: Antonio) uma estrutura independente e desvinculada do administrativo. Sem resolução nesta reunião; estudos em andamento.\n\n" +
      "6. Indicação para Diretor do CSC — abordada a indicação de Leonardo como novo Diretor Geral do CSC, sem decisão formal nesta reunião; pendente de deliberação.\n\n" +
      "7. Contrato de Prestação de Serviços (CSC) e Mapa de Receitas — estabelecida como prioridade a conclusão e formalização do contrato de prestação de serviço do CSC, para que a estrutura funcione como empresa totalmente independente.\n\n" +
      "8. Análise do mapa de receitas e seus registros, com leitura das informações do portal de governança, para posterior preenchimento.\n\n" +
      "Pendências e riscos registrados: alinhamento jurídico para todos os contratos societários; documento de descrição das estruturas de cada empresa com contratos e minutas; padronização entre setores/documentos e sistemas; definição de cronograma para entrada em vigor das empresas Front Office; impactos da Reforma Tributária 2027 nas contratações com PJ.\n\n" +
      "Próxima reunião: data e horário a definir.",
    actionItems: [
      { id: uid(), order: 0, description: "Separar empresas comerciais de Fast Homes e Fast Obras no organograma", responsible: "", deadline: "", status: "concluido" },
      { id: uid(), order: 1, description: "Criar empresa do Front Office Comercial Franquias", responsible: "", deadline: "", status: "concluido" },
      { id: uid(), order: 2, description: "Criar empresas comerciais de Curitiba", responsible: "", deadline: "", status: "pendente" },
      { id: uid(), order: 3, description: "Criar empresas comerciais para Franciane e Carlos (gerentes regionais)", responsible: "", deadline: "", status: "pendente" },
      { id: uid(), order: 4, description: "Adicionar CCN como CCN Serviços no organograma", responsible: "", deadline: "", status: "pendente" },
      { id: uid(), order: 5, description: "Regularizar contratações via PJ (CLT ou cotista) — prioridade Reforma Tributária 2027", responsible: "", deadline: "", status: "pendente" },
      { id: uid(), order: 6, description: "Concluir e formalizar o contrato de prestação de serviços do CSC", responsible: "", deadline: "", status: "pendente" },
      { id: uid(), order: 7, description: "Deliberar a indicação de Leonardo para Diretor Geral do CSC", responsible: "Leonardo de Oliveira", deadline: "", status: "pendente" },
      { id: uid(), order: 8, description: "Concluir estudo de terceirização da operação de galpões", responsible: "", deadline: "", status: "andamento" },
      { id: uid(), order: 9, description: "Concluir estudo de estruturação independente da equipe de manutenção (liderança: Antonio)", responsible: "Antonio", deadline: "", status: "andamento" },
      { id: uid(), order: 10, description: "Alinhamento jurídico de todos os contratos societários", responsible: "", deadline: "", status: "pendente" },
      { id: uid(), order: 11, description: "Padronizar documentos e sistemas entre setores", responsible: "", deadline: "", status: "pendente" },
      { id: uid(), order: 12, description: "Definir cronograma de entrada em vigor das empresas Front Office", responsible: "", deadline: "", status: "pendente" },
    ],
    atas: [],
  },
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
    }),
    { name: "fastPortalMeetings" }
  )
)
