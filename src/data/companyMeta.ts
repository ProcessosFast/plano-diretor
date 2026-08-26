// Metadados do mapa radial (holdings, front office, back office, governança).
// Portado de VERTICAIS/FRONT/BACK/CORE em index.html.

export interface VerticalItem {
  ang: number
  hold: string
  op: string
  opsub: string
  org: string | null
  desc: string
}

export const R_HOLD = 245
export const R_OP = 425

export const VERTICAIS: VerticalItem[] = [
  {
    ang: 205,
    hold: "Holding Indústria",
    op: "MaxSteel",
    opsub: "Indústria — perfis de aço",
    org: "maxsteel",
    desc: "A Holding Indústria detém o controle societário da MaxSteel, unidade industrial responsável pela fabricação de perfis de aço para drywall e Light Steel Frame (Cap. 4 · R1.1 / Cap. 7.4).",
  },
  {
    ang: 250,
    hold: "Holding Atacado",
    op: "SUPPLY-LMS",
    opsub: "Atacado — LMS & SUPPLY",
    org: "supply",
    desc: "A Holding Atacado controla as duas empresas de atacado, LMS e SUPPLY. O levantamento traz o Setor de Compras sob a Diretoria de Josiel (Cap. 4 · R1.1 / Cap. 5.3).",
  },
  {
    ang: 295,
    hold: "Holding Varejo",
    op: "DCS-CM",
    opsub: "Varejo — Casa do Montador",
    org: "dcs",
    desc: "A Holding Varejo controla as duas empresas de varejo, DCS e CM. A DCS-CM — Casa do Montador responde pelo varejo, incluindo filiais e lojas (Cap. 4 · R1.1 / Cap. 5.3).",
  },
  {
    ang: 338,
    hold: "Holding Franquias",
    op: "Fast Franchising",
    opsub: "Franqueadora & Steel Conecta",
    org: "franquias",
    desc: "A Holding Franquias controla a Fast Franchising, franqueadora das lojas e da rede Steel Conecta (Cap. 4 · R1.1 / Cap. 5.7). Diferente das demais empresas comerciais, a Fast Franchising registra receita própria (taxas e royalties) — por isso é tratada como empresa operacional, não como Front Office.",
  },
]

export interface Leaf {
  t: string
  u: string
  org: string | null
  d: string
}

export interface ClusterMeta {
  key: string
  name: string
  tag: string
  color: string
  hubAng: number
  hubR: number
  desc: string
  leaves: Leaf[]
  angs: number[]
  radii: number[]
}

export const FRONT: ClusterMeta = {
  key: "front",
  name: "Front Office",
  tag: "Empresas Comerciais",
  color: "#C4161C",
  hubAng: 52,
  hubR: 238,
  desc: "Interface com o mercado. Cinco empresas comerciais constituídas no Simples Nacional, com razões sociais e CNPJs distintos; cada uma é liderada por um Diretor, sócio da respectiva empresa, remunerado por comissão sobre a receita da unidade. Não integram o controle das holdings (Cap. 5.2 / 5.5 · R1.1). A Fast Franchising é tratada como empresa operacional (ver anel interno de Holdings), pois registra receita própria de franquia em vez de comissão.",
  leaves: [
    {
      t: "FAST Atacado",
      u: "Poliana Alves",
      org: "atacado",
      d: "Diretoria Nacional de Atacado. Promove e vende o canal atacadista; a receita da venda é registrada na SUPPLY-LMS (Cap. 5.5 / R1.3).",
    },
    {
      t: "FAST Varejo",
      u: "Denise",
      org: "varejo",
      d: "Diretoria Nacional de Varejo. Promove e vende o canal varejista; a receita da venda é registrada na DCS-CM (Cap. 5.5 / R1.3).",
    },
    {
      t: "FAST Obras & Homes",
      u: "Fabio Furtado",
      org: "obras",
      d: "Diretoria Comercial FAST Obras & FAST Homes. Responde também pela Diretoria Técnica da Steel Conecta — treinamento, certificação e padrões (Cap. 5.5 / 5.7).",
    },
    {
      t: "Comércio Digital",
      u: "Auren (consultoria contratada)",
      org: "digital",
      d: "Comércio Digital. Canais digitais e e-commerce do Ecossistema, conduzidos via consultoria contratada Auren (Cap. 5.5).",
    },
    {
      t: "FAST Importações",
      u: "Conselho (provisório)",
      org: null,
      d: "Diretoria FAST Importações — sem diretor designado; o Conselho atua provisoriamente. As importações são executadas por MaxSteel, DCS-CM e LMS/SUPPLY (Cap. 5.5 / R1.2). Observação: formação embrionária, em implementação.",
    },
  ],
  angs: [6, 26, 47, 67, 88],
  radii: [385, 492, 385, 492, 385],
}

export const BACK: ClusterMeta = {
  key: "back",
  name: "Back Office",
  tag: "Empresas Especializadas",
  color: "#0E7C69",
  hubAng: 140,
  hubR: 238,
  desc: "Serviços administrativos, técnicos, de engenharia e logística prestados às empresas operacionais e comerciais (Cap. 5.4 / 5.6).",
  leaves: [
    {
      t: "CSC",
      u: "Serviços Compartilhados",
      org: "csc",
      d: "CSC — Serviços administrativos compartilhados: RH, Departamento Pessoal, Financeiro/Contábil/Fiscal, Processos e Auditoria, atendendo as empresas do Ecossistema (Cap. 5.4).",
    },
    {
      t: "Engenharia",
      u: "Projetos, orçamentos e obras",
      org: "engenharia",
      d: "Engenharia — Serviço de engenharia: projetos, orçamentos e acompanhamento de obras para as empresas do Ecossistema (Cap. 5.4).",
    },
    {
      t: "Unity Company",
      u: "Marketing exclusivo",
      org: "unity",
      d: "Unity Company — Serviços de marketing, organização de eventos e feiras para as empresas do Ecossistema (Cap. 5.4).",
    },
    {
      t: "Log Express",
      u: "Logística e distribuição",
      org: null,
      d: "Log Express — Serviço de logística: transporte e distribuição para as empresas do Ecossistema (Cap. 5.4).",
    },
  ],
  angs: [118, 142, 164, 186],
  radii: [385, 470, 385, 470],
}

export const CORE = {
  tag: "Governança Corporativa",
  title: "Conselho · CEO · Diretoria Executiva",
  color: "#C4161C",
  desc: "Conselho Consultivo (Kleber, Josélio, Nicole, Guilherme e Priscila), reuniões às terças, 11h, decisões por unanimidade. CEO Priscila coordena a execução (Cap. 3 / R1.7).",
}
