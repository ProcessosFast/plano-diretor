export interface RevenueCard {
  title: string
  subtitle: string
  accent: "front" | "oper" | "back" | "fran" | "warn" | "muted"
  kv: { label: string; value: string; pend?: boolean }[]
  note?: string
}

export const FRONT_OFFICE_CARDS: RevenueCard[] = [
  { title: "FAST Atacado", subtitle: "Diretoria: Poliana", accent: "front", kv: [
    { label: "Canal", value: "Atacado" },
    { label: "Receita gerada", value: "Venda de produtos (atacado)" },
    { label: "Registra em", value: "SUPPLY-LM — operacional atacadista" },
    { label: "Remuneração", value: "Comissão sobre a receita do atacado" },
  ]},
  { title: "FAST Varejo", subtitle: "Diretoria: Denise", accent: "front", kv: [
    { label: "Canal", value: "Varejo" },
    { label: "Receita gerada", value: "Venda de produtos (varejo)" },
    { label: "Registra em", value: "DCS-CM — Casa do Montador" },
    { label: "Remuneração", value: "Comissão sobre a receita do varejo" },
  ]},
  { title: "FAST Obras", subtitle: "Diretoria: Fabio Furtado", accent: "front", kv: [
    { label: "Canal", value: "Obras / institucional" },
    { label: "Receita gerada", value: "Venda de soluções para grandes obras" },
    { label: "Registra em", value: "Operacional do canal atendido" },
    { label: "Remuneração", value: "Comissão sobre a receita do projeto" },
  ]},
  { title: "FAST Homes", subtitle: "Diretoria: Fabio Furtado", accent: "front", kv: [
    { label: "Canal", value: "Light Steel Frame" },
    { label: "Receita gerada", value: "Venda de casas e edificações em LSF" },
    { label: "Registra em", value: "Operacional do canal atendido" },
    { label: "Remuneração", value: "Comissão sobre a receita da venda" },
  ]},
  { title: "Atacado para Franqueados", subtitle: "Diretoria: Leandro — frente B", accent: "front", kv: [
    { label: "Canal", value: "Franquias" },
    { label: "Receita gerada", value: "Venda de produtos ao franqueado" },
    { label: "Registra em", value: "SUPPLY-LM — operacional atacadista" },
    { label: "Remuneração", value: "Comissão sobre a receita do atacado" },
  ]},
  { title: "Comércio Digital", subtitle: "Diretoria: Auren", accent: "front", kv: [
    { label: "Canal", value: "Digital" },
    { label: "Receita gerada", value: "Venda em e-commerce e marketplaces" },
    { label: "Registra em", value: "Operacional do canal — varejo ou atacado" },
    { label: "Remuneração", value: "Comissão sobre a receita digital" },
  ]},
  { title: "FAST Importação", subtitle: "Sem diretor designado — Conselho provisório", accent: "warn", kv: [
    { label: "Canal", value: "Importação" },
    { label: "Receita gerada", value: "Promoção comercial das importações" },
    { label: "Registra em", value: "MaxSteel · DCS-CM · SUPPLY-LM — operacional que executa" },
    { label: "Remuneração", value: "Comissão / serviço a definir", pend: true },
  ], note: "Observação: Modelo Embrionário, aguardando consolidação." },
]

export const OPERACIONAIS_CARDS: RevenueCard[] = [
  { title: "MaxSteel", subtitle: "Indústria — perfis de aço para drywall e LSF", accent: "oper", kv: [
    { label: "Receita", value: "Venda de produtos industriais e componentes" },
    { label: "Observação", value: "Também executa a importação de insumos industriais" },
  ]},
  { title: "FAST Franchising", subtitle: "Diretoria: Leandro · empresa operacional", accent: "oper", kv: [
    { label: "Canal", value: "Franquias" },
    { label: "Receita", value: "Taxa de franquia, royalties, treinamentos e consultorias" },
    { label: "Registra em", value: "Própria FAST Franchising (11.11)" },
    { label: "Remuneração", value: "Receita própria de franquia — não é comissão" },
  ]},
  { title: "SUPPLY-LM", subtitle: "Operação atacadista nacional", accent: "oper", kv: [
    { label: "Receita", value: "Todas as vendas do canal atacado" },
    { label: "Observação", value: "Recebe demanda de FAST Atacado e do Atacado para Franqueados" },
  ]},
  { title: "DCS-CM — Casa do Montador", subtitle: "Operação de varejo — lojas e balcão", accent: "oper", kv: [
    { label: "Receita", value: "Todas as vendas do canal varejo" },
    { label: "Observação", value: "Recebe demanda de FAST Varejo e do Comércio Digital" },
  ]},
  { title: "Filiais DCS/CM", subtitle: "Mogi · Feira de Santana · Japeri", accent: "muted", kv: [
    { label: "Receita", value: "Não geram receita de venda própria" },
    { label: "Observação", value: "Armazenagem, expedição e distribuição regional — custos registrados na operação" },
  ]},
]

export const BACKOFFICE_CARDS: RevenueCard[] = [
  { title: "CSC", subtitle: "Centro de Serviços Compartilhados", accent: "back", kv: [
    { label: "Serviços", value: "Financeiro, tesouraria, contábil, fiscal, RH, DP, jurídico, TI, desenvolvimento de software, processos, auditoria e compras administrativas" },
    { label: "Remuneração", value: "Rateio mensal aprovado pela Holding para cada unidade de negócio" },
  ]},
  { title: "Unity Company", subtitle: "Agência de marketing exclusiva", accent: "back", kv: [
    { label: "Serviços", value: "Marketing, branding, comunicação e marketing digital" },
    { label: "Remuneração", value: "Honorários por serviço + reembolso dos investimentos de mídia" },
  ]},
  { title: "Engenharia", subtitle: "Projetos e certificação", accent: "back", kv: [
    { label: "Serviços", value: "Projetos, orçamentos técnicos, consultorias e certificação Steel Conecta" },
    { label: "Remuneração", value: "Honorários sobre serviços efetivamente prestados" },
  ]},
  { title: "Log Express", subtitle: "Logística e distribuição", accent: "back", kv: [
    { label: "Serviços", value: "Transportes, fretes, roteirização e monitoramento de entregas" },
    { label: "Remuneração", value: "Contratos internos + reembolso de fretes por benefício" },
  ]},
]

export interface SummaryRow {
  canal: string
  quemVende: string
  interno?: boolean
  registraEm: string
  own?: boolean
  baseComissao: string
  pend?: boolean
}

export const SUMMARY_ROWS: SummaryRow[] = [
  { canal: "Atacado", quemVende: "FAST Atacado", registraEm: "SUPPLY-LM", baseComissao: "Receita do atacado" },
  { canal: "Varejo", quemVende: "FAST Varejo", registraEm: "DCS-CM", baseComissao: "Receita do varejo" },
  { canal: "Digital", quemVende: "Comércio Digital", registraEm: "Operacional do canal (varejo/atacado)", baseComissao: "Receita digital" },
  { canal: "Obras / Homes", quemVende: "FAST Obras · FAST Homes", registraEm: "Operacional do canal atendido", baseComissao: "Receita do projeto ou da venda" },
  { canal: "Importação", quemVende: "FAST Importação", registraEm: "MaxSteel · DCS-CM · SUPPLY-LM", baseComissao: "A definir — promoção", pend: true },
  { canal: "Franquias", quemVende: "FAST Franchising", registraEm: "Própria FAST Franchising", own: true, baseComissao: "Taxa + royalties — receita própria" },
  { canal: "Indústria", quemVende: "Demanda interna", interno: true, registraEm: "MaxSteel", baseComissao: "Venda industrial" },
]

export interface PendingRow {
  unidade: string
  percentual: string
  base: string
  validacao: string
}

export const PENDING_ROWS: PendingRow[] = [
  { unidade: "FAST Atacado", percentual: "A definir", base: "Receita SUPPLY-LM", validacao: "Controladoria" },
  { unidade: "FAST Varejo", percentual: "A definir", base: "Receita DCS-CM", validacao: "Controladoria" },
  { unidade: "FAST Obras / Homes", percentual: "A definir", base: "Receita do projeto", validacao: "Controladoria" },
  { unidade: "Comércio Digital", percentual: "A definir", base: "Receita digital", validacao: "Controladoria" },
  { unidade: "Atacado para Franqueados", percentual: "A definir", base: "Receita SUPPLY-LM", validacao: "Controladoria" },
  { unidade: "FAST Importação", percentual: "A definir", base: "A definir", validacao: "Conselho / Fiscal" },
  { unidade: "FAST Franchising", percentual: "A definir", base: "Faturamento da rede", validacao: "Controladoria" },
  { unidade: "CSC · Unity · Engenharia · Log Express", percentual: "A definir", base: "Rateio (Item 10)", validacao: "Holding" },
]

export const TIPOS_RECEITA = [
  { title: "Comercialização de produtos", accent: "oper" as const, items: ["Varejo", "Atacado", "Indústria", "Importação"] },
  { title: "Prestação de serviços", accent: "back" as const, items: ["Engenharia e marketing", "Logística", "Consultorias técnicas", "Treinamentos e serviços administrativos"] },
  { title: "Receitas de franquias", accent: "fran" as const, items: ["Taxa de franquia", "Royalties", "Treinamentos", "Consultorias"] },
  { title: "Receitas financeiras", accent: "muted" as const, items: ["Aplicações", "Descontos obtidos", "Recuperação de créditos", "Demais receitas financeiras"] },
]

export interface RateioGapRow {
  item: string
  referencia: string
  oQuePlanoDiz: string
  naoDefinido: string
}

export const RATEIO_GAP_ROWS: RateioGapRow[] = [
  {
    item: "CSC",
    referencia: "Plano Diretor 9.4 / 11.7",
    oQuePlanoDiz: "\"O CSC é remunerado mensalmente pelas empresas do Ecossistema mediante contratos internos e critérios de rateio aprovados pela Holding.\"",
    naoDefinido: "Não há metodologia de rateio definida (ex.: % sobre receita, headcount, centro de custo, volume de chamados) nem a matriz de quanto cada empresa paga por área do CSC (Financeiro, Fiscal, RH, Jurídico, TI, Controladoria, Compras).",
  },
  {
    item: "Unity Company",
    referencia: "Plano Diretor 11.10",
    oQuePlanoDiz: "\"Remuneração pelos serviços prestados (mensal, via contratos internos e rateio aprovado pela Holding)\" — separada do reembolso de mídia, que não integra a remuneração.",
    naoDefinido: "Critério de rateio da mensalidade de marketing entre as empresas atendidas ainda não definido (por marca, por faturamento, por plano de mídia por unidade).",
  },
  {
    item: "Engenharia",
    referencia: "Plano Diretor 11.9",
    oQuePlanoDiz: "\"Remunerada por honorários sobre serviços efetivamente prestados\" — modelo é por serviço, não por rateio fixo.",
    naoDefinido: "Tabela de honorários por tipo de serviço (projeto, orçamento, consultoria, homologação, treinamento, certificação Steel Conecta) ainda não publicada.",
  },
  {
    item: "Log Express",
    referencia: "Plano Diretor 11.8",
    oQuePlanoDiz: "\"Remunerada por contratos internos conforme utilização dos serviços\"; despesas com transportadoras são reembolsadas pelas empresas contratantes.",
    naoDefinido: "Critério de rateio do custo fixo da estrutura de logística (equipe, sistemas de roteirização) entre SUPPLY-LM, DCS-CM, MaxSteel e FAST Importação ainda não definido — hoje só o frete variável é claramente atribuível.",
  },
  {
    item: "Compartilhamento de ativos",
    referencia: "Plano Diretor 12.12",
    oQuePlanoDiz: "\"Compartilhamento de ativos (imóveis, galpões, equipamentos, veículos, sistemas, licenças, infraestrutura): responsabilidade por utilização, manutenção, seguros, conservação e rateio de custos.\"",
    naoDefinido: "Nenhum critério objetivo de rateio foi publicado para nenhum ativo compartilhado específico (qual imóvel, qual galpão, qual frota) — apenas o princípio geral consta do Plano Diretor.",
  },
  {
    item: "Definição geral de Rateio",
    referencia: "Plano Diretor A2 · Glossário",
    oQuePlanoDiz: "\"Rateio: critério objetivo de repartição de custos de serviços compartilhados entre as empresas beneficiadas.\"",
    naoDefinido: "O glossário define o conceito, mas nenhuma fórmula, percentual-base ou centro de custo consolidado foi aprovado pela Holding para operacionalizar esse critério em nenhuma das empresas especializadas.",
  },
]

export const TODO_ITEMS = [
  "Inserir os percentuais reais de comissão, royalty e rateio por unidade — Diretoria/Holding — Controladoria.",
  "Validar com o Fiscal o enquadramento tributário de cada registro de receita, sobretudo importação e franquias.",
  "Confirmar a existência formal (CNPJ e contrato social) de cada empresa — depende do Item 4, documentos societários.",
  "Amarrar o mapa aos contratos internos (Item 8) e aos critérios de rateio (Item 10).",
  "Definir a metodologia de rateio (base de cálculo e matriz por empresa) do CSC, Unity Company, Log Express e ativos compartilhados — Holding, com apoio da Controladoria.",
]

export interface FlowNode {
  id: string
  title: string
  subtitle: string
  variant?: "own" | "warn"
}

export const FLOW_LEFT: FlowNode[] = [
  { id: "fl-atacado", title: "FAST Atacado", subtitle: "Poliana" },
  { id: "fl-franq", title: "Atacado p/ Franqueados", subtitle: "Leandro · frente B" },
  { id: "fl-varejo", title: "FAST Varejo", subtitle: "Denise" },
  { id: "fl-digital", title: "Comércio Digital", subtitle: "Auren" },
  { id: "fl-obras", title: "FAST Obras", subtitle: "Fabio Furtado" },
  { id: "fl-homes", title: "FAST Homes", subtitle: "Fabio Furtado" },
  { id: "fl-franchising", title: "FAST Franchising", subtitle: "Leandro", variant: "own" },
  { id: "fl-importacao", title: "FAST Importação", subtitle: "sem diretor", variant: "warn" },
]

export const FLOW_RIGHT: FlowNode[] = [
  { id: "fr-supply", title: "SUPPLY-LM", subtitle: "Operação atacadista nacional" },
  { id: "fr-dcs", title: "DCS-CM", subtitle: "Casa do Montador · varejo" },
  { id: "fr-maxsteel", title: "MaxSteel", subtitle: "Indústria · perfis de aço" },
  { id: "fr-canal", title: "Operacional do canal atendido", subtitle: "conforme o produto vendido" },
  { id: "fr-own", title: "Própria FAST Franchising", subtitle: "receita própria de franquia", variant: "own" },
]

export const FLOW_LINKS: [string, string, string, boolean][] = [
  ["fl-atacado", "fr-supply", "#D62828", false],
  ["fl-franq", "fr-supply", "#D62828", false],
  ["fl-varejo", "fr-dcs", "#D62828", false],
  ["fl-digital", "fr-canal", "#D62828", false],
  ["fl-obras", "fr-canal", "#D62828", false],
  ["fl-homes", "fr-canal", "#D62828", false],
  ["fl-franchising", "fr-own", "#8257D9", false],
  ["fl-importacao", "fr-supply", "#B7791F", true],
  ["fl-importacao", "fr-dcs", "#B7791F", true],
  ["fl-importacao", "fr-maxsteel", "#B7791F", true],
]
