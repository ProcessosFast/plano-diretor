export type Cell = { kind: "dash" } | { kind: "x" } | { kind: "value"; text: string } | { kind: "ref"; text: string }

export interface AlcadaRow {
  decisao: string
  vendedor: Cell
  gerente: Cell
  gerenteRegional: Cell
  diretorUnidade: Cell
  ceo: Cell
  conselho: Cell
}

const dash: Cell = { kind: "dash" }
const x: Cell = { kind: "x" }
const v = (text: string): Cell => ({ kind: "value", text })
const ref = (text: string): Cell => ({ kind: "ref", text })

export const ALCADAS_ROWS: AlcadaRow[] = [
  { decisao: "Compras de material para escritório e despesas operacionais", vendedor: dash, gerente: v("≥ R$150,00"), gerenteRegional: v("≤ R$150,00"), diretorUnidade: v("> R$300,00 e ≤ R$1.500,00"), ceo: v("> R$1500,00"), conselho: dash },
  { decisao: "Solicitação de Pagamento de Despesas Avulsas", vendedor: dash, gerente: v("≥ R$150,00"), gerenteRegional: v("≤ R$150,00"), diretorUnidade: v("> R$1000,00"), ceo: x, conselho: dash },
  { decisao: "Autorização de Viagem", vendedor: dash, gerente: dash, gerenteRegional: dash, diretorUnidade: x, ceo: x, conselho: dash },
  { decisao: "Reembolso de Despesas Avulsas", vendedor: dash, gerente: v("≥ R$150,00"), gerenteRegional: dash, diretorUnidade: v("> R$150,00 e ≤ R$1.500,00"), ceo: v("> R$1500,00"), conselho: dash },
  { decisao: "Reembolso de Despesas de Viagem", vendedor: ref("Considerar tabela da Política de Reembolso"), gerente: ref("Considerar tabela da Política de Reembolso"), gerenteRegional: ref("Considerar tabela da Política de Reembolso"), diretorUnidade: ref("Considerar tabela da Política de Reembolso"), ceo: x, conselho: dash },
  { decisao: "Solicitação de Pagamento de Fretes", vendedor: dash, gerente: dash, gerenteRegional: x, diretorUnidade: x, ceo: x, conselho: dash },
  { decisao: "Aquisição de Mercadorias para Revenda", vendedor: dash, gerente: dash, gerenteRegional: dash, diretorUnidade: dash, ceo: x, conselho: x },
  { decisao: "Estorno a Cliente", vendedor: dash, gerente: x, gerenteRegional: x, diretorUnidade: x, ceo: dash, conselho: dash },
  { decisao: "Devolução e Cancelamento de Vendas", vendedor: dash, gerente: v("≤ R$2.000,00"), gerenteRegional: dash, diretorUnidade: v("> R$10.000,00"), ceo: v("> R$15.000,00"), conselho: dash },
  { decisao: "Contratos com Terceiros e Prestadores de Serviço a unidades", vendedor: dash, gerente: dash, gerenteRegional: dash, diretorUnidade: x, ceo: x, conselho: dash },
  { decisao: "Margem de venda ao cliente Varejo (%)", vendedor: v("≥ 20%"), gerente: v("≥ 15% e ≤ 20%"), gerenteRegional: v("≥ 10% e ≤ 15%"), diretorUnidade: v("≥ 5% e ≤ 10%"), ceo: v("< 5%"), conselho: dash },
  { decisao: "Margem de Venda Atacado", vendedor: v("< 97%"), gerente: v("> 95% e ≤ 97%"), gerenteRegional: v("> 95% e ≤ 97%"), diretorUnidade: v("> 91% e ≤ 94%"), ceo: dash, conselho: dash },
  { decisao: "Solicitação de Contratação de Pessoal", vendedor: dash, gerente: x, gerenteRegional: x, diretorUnidade: x, ceo: dash, conselho: dash },
  { decisao: "Desligamento de Pessoal", vendedor: dash, gerente: x, gerenteRegional: x, diretorUnidade: x, ceo: x, conselho: x },
  { decisao: "Investimento / Aquisição de ativos (capex)", vendedor: dash, gerente: dash, gerenteRegional: dash, diretorUnidade: x, ceo: x, conselho: x },
  { decisao: "Empréstimos", vendedor: dash, gerente: dash, gerenteRegional: dash, diretorUnidade: dash, ceo: x, conselho: x },
  { decisao: "Mudança societária / Aquisição de empresa", vendedor: dash, gerente: dash, gerenteRegional: dash, diretorUnidade: dash, ceo: x, conselho: x },
  { decisao: "Mudança de Processo", vendedor: dash, gerente: dash, gerenteRegional: dash, diretorUnidade: x, ceo: x, conselho: x },
  { decisao: "Contratos entre empresas e filiais", vendedor: dash, gerente: dash, gerenteRegional: dash, diretorUnidade: dash, ceo: x, conselho: x },
  { decisao: "Autorização Para Faturamento", vendedor: dash, gerente: dash, gerenteRegional: dash, diretorUnidade: x, ceo: x, conselho: dash },
  { decisao: "Contratos de Aquisição de Materiais por Permuta", vendedor: dash, gerente: dash, gerenteRegional: dash, diretorUnidade: dash, ceo: x, conselho: dash },
  { decisao: "Aprovação do Fluxo de Pagamento", vendedor: dash, gerente: dash, gerenteRegional: dash, diretorUnidade: dash, ceo: x, conselho: dash },
  { decisao: "Aprovação de Campanhas de Vendas", vendedor: dash, gerente: dash, gerenteRegional: dash, diretorUnidade: x, ceo: x, conselho: dash },
]

export const ALCADAS_SIGNERS = [
  { name: "Kleber", role: "Presidente do Conselho Consultivo" },
  { name: "Josélio", role: "Conselheiro" },
  { name: "Nicole", role: "Conselheira" },
  { name: "Guilherme", role: "Conselheiro" },
  { name: "Priscila", role: "CEO" },
]
