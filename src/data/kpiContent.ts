export interface KpiItem {
  id: string
  indicador: string
  fonte: string
  frequenciaPadrao: string
}

export interface KpiArea {
  area: string
  subtitulo: string
  items: KpiItem[]
}

export const KPI_AREAS: KpiArea[] = [
  {
    area: "Comercial",
    subtitulo: "Plano Diretor 8.13 · Política Comercial e de Vendas — FAST Homes, Parte 10",
    items: [
      { id: "com-01", indicador: "Faturamento de vendas", fonte: "Plano Diretor 8.13 / Política Comercial FAST Homes", frequenciaPadrao: "Mensal" },
      { id: "com-02", indicador: "Margem bruta e margem de contribuição", fonte: "Plano Diretor 8.13", frequenciaPadrao: "Mensal" },
      { id: "com-03", indicador: "Ticket médio e mix por cliente", fonte: "Plano Diretor 8.13 / Política Comercial FAST Homes", frequenciaPadrao: "Mensal" },
      { id: "com-04", indicador: "Taxa de conversão", fonte: "Plano Diretor 8.13 / Política Comercial FAST Homes", frequenciaPadrao: "Semanal" },
      { id: "com-05", indicador: "Ciclo médio de venda", fonte: "Plano Diretor 8.13 / Política Comercial FAST Homes", frequenciaPadrao: "Mensal" },
      { id: "com-06", indicador: "Clientes ativos, novos clientes e recorrência", fonte: "Plano Diretor 8.13", frequenciaPadrao: "Mensal" },
      { id: "com-07", indicador: "Produtividade por vendedor", fonte: "Plano Diretor 8.13", frequenciaPadrao: "Mensal" },
      { id: "com-08", indicador: "Inadimplência, devoluções e cancelamentos", fonte: "Plano Diretor 8.13", frequenciaPadrao: "Mensal" },
      { id: "com-09", indicador: "Satisfação e retenção de clientes", fonte: "Plano Diretor 8.13", frequenciaPadrao: "Mensal" },
      { id: "com-10", indicador: "Número de propostas e taxa de fechamento", fonte: "Política Comercial FAST Homes, Parte 10", frequenciaPadrao: "Semanal" },
      { id: "com-11", indicador: "Forecast x realizado", fonte: "Política Comercial FAST Homes, Parte 10", frequenciaPadrao: "Semanal" },
    ],
  },
  {
    area: "Operacional",
    subtitulo: "Plano Diretor 7.9 e 10.14 · Política de Abastecimento de Lojas — DCS-CM, Parte 16",
    items: [
      { id: "op-01", indicador: "Faturamento e margem por empresa, filial e canal", fonte: "Plano Diretor 7.9", frequenciaPadrao: "Mensal" },
      { id: "op-02", indicador: "EBITDA e geração de caixa", fonte: "Plano Diretor 7.9", frequenciaPadrao: "Mensal" },
      { id: "op-03", indicador: "Giro e cobertura de estoque · acuracidade de inventário", fonte: "Plano Diretor 7.9 / 10.14", frequenciaPadrao: "Mensal" },
      { id: "op-04", indicador: "Produtividade por colaborador", fonte: "Plano Diretor 7.9", frequenciaPadrao: "Mensal" },
      { id: "op-05", indicador: "Nível de serviço e prazo de entrega (OTIF)", fonte: "Plano Diretor 7.9 / 10.14", frequenciaPadrao: "Semanal" },
      { id: "op-06", indicador: "Perdas, avarias, devoluções e retrabalho", fonte: "Plano Diretor 7.9 / 10.14", frequenciaPadrao: "Mensal" },
      { id: "op-07", indicador: "% de abastecimentos realizados dentro da grade", fonte: "Política de Abastecimento DCS-CM, Parte 16", frequenciaPadrao: "Semanal" },
      { id: "op-08", indicador: "% de rupturas de estoque", fonte: "Política de Abastecimento DCS-CM, Parte 16", frequenciaPadrao: "Semanal" },
      { id: "op-09", indicador: "% de entregas realizadas no prazo", fonte: "Política de Abastecimento DCS-CM, Parte 16", frequenciaPadrao: "Semanal" },
      { id: "op-10", indicador: "Quantidade de não conformidades no processo", fonte: "Política de Abastecimento DCS-CM, Parte 16", frequenciaPadrao: "Mensal" },
    ],
  },
  {
    area: "Financeiro Corporativo",
    subtitulo: "Plano Diretor 11.14",
    items: [
      { id: "fin-01", indicador: "Liquidez e capital de giro", fonte: "Plano Diretor 11.14", frequenciaPadrao: "Mensal" },
      { id: "fin-02", indicador: "Margem bruta, margem operacional e EBITDA", fonte: "Plano Diretor 11.14", frequenciaPadrao: "Mensal" },
      { id: "fin-03", indicador: "ROE e ROA", fonte: "Plano Diretor 11.14", frequenciaPadrao: "Mensal" },
      { id: "fin-04", indicador: "Giro de estoques e ciclo financeiro", fonte: "Plano Diretor 11.14", frequenciaPadrao: "Mensal" },
      { id: "fin-05", indicador: "Faturamento consolidado e crescimento da receita", fonte: "Plano Diretor 11.14", frequenciaPadrao: "Mensal" },
      { id: "fin-06", indicador: "Participação de mercado", fonte: "Plano Diretor 11.14", frequenciaPadrao: "Trimestral" },
    ],
  },
  {
    area: "Back Office · Serviços Compartilhados",
    subtitulo: "Plano Diretor 9.9",
    items: [
      { id: "bo-01", indicador: "Cumprimento dos SLAs", fonte: "Plano Diretor 9.9", frequenciaPadrao: "Mensal" },
      { id: "bo-02", indicador: "Prazo médio de atendimento", fonte: "Plano Diretor 9.9", frequenciaPadrao: "Mensal" },
      { id: "bo-03", indicador: "Custo por serviço", fonte: "Plano Diretor 9.9", frequenciaPadrao: "Mensal" },
      { id: "bo-04", indicador: "Qualidade, conformidade e retrabalho", fonte: "Plano Diretor 9.9", frequenciaPadrao: "Mensal" },
      { id: "bo-05", indicador: "Satisfação dos clientes internos", fonte: "Plano Diretor 9.9", frequenciaPadrao: "Trimestral" },
    ],
  },
  {
    area: "Marketing",
    subtitulo: "Política Interna de Marketing — Unity Company, Parte 6",
    items: [
      { id: "mkt-01", indicador: "Alcance, engajamento e conversões por canal", fonte: "Política Interna de Marketing, Parte 6", frequenciaPadrao: "Mensal" },
      { id: "mkt-02", indicador: "Budget de marketing versus planejado", fonte: "Política Interna de Marketing, Parte 6", frequenciaPadrao: "Mensal" },
    ],
  },
]
