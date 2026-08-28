export type ActionStatus = "pendente" | "andamento" | "concluido"

export interface ActionItem {
  id: string
  description: string
  responsible: string
  deadline: string
  status: ActionStatus
  order: number
}

export interface Ata {
  id: string
  titulo: string
  data: string
  link: string
  observacao: string
}

export interface Signature {
  id: string
  name: string
  token: string
  signedAt: string | null
}

export interface Meeting {
  id: string
  date: string
  time: string
  title: string
  participants: string
  pauta: string
  decisions: string
  actionItems: ActionItem[]
  atas: Ata[]
  signatures: Signature[]
}

export const ACTION_STATUS_LABEL: Record<ActionStatus, string> = {
  pendente: "Pendente",
  andamento: "Em andamento",
  concluido: "Concluído",
}
