export interface SlaRow {
  empresa: string
  escopo: string
  prazoPadrao: string
  prazoDefinido: boolean
  indicadoresPadrao: string
  indicadoresDefinido: boolean
  remuneracao: string
  responsabilizacao: string
  governanca: string
}

export const SLA_ROWS: SlaRow[] = [
  {
    empresa: "CSC",
    escopo: "Financeiro e Tesouraria, Controladoria, Contabilidade, Fiscal e Tributário, Departamento Pessoal, Recrutamento e Seleção, Jurídico e Compliance, Tecnologia da Informação e Compras Administrativas — atendendo as empresas do Ecossistema.",
    prazoPadrao: "A definir — o Plano Diretor exige \"tempo de resposta, execução e fechamento\" (Item 9.8), mas nenhum prazo específico foi publicado por área ainda.",
    prazoDefinido: false,
    indicadoresPadrao: "A definir — o Plano Diretor sugere qualidade, produtividade, custo e satisfação como dimensões (Itens 9.8 e 9.9).",
    indicadoresDefinido: false,
    remuneracao: "Rateio mensal aprovado pela Holding para cada unidade de negócio (Mapa de Receitas) — metodologia de cálculo ainda não definida (ver Regras de Rateio).",
    responsabilizacao: "Todo desvio identificado gera não conformidade (NC), com causa raiz, responsável, prazo e evidência de conclusão, acompanhada pela Auditoria Interna (Política Interna do CSC, Parte 1).",
    governanca: "Revisão da política no mínimo anual, ou semestral nas áreas de maior risco — RH e Financeiro (Política Interna do CSC, Parte 1).",
  },
  {
    empresa: "Unity Company",
    escopo: "Marketing, branding, comunicação institucional e marketing digital, incluindo gestão de redes sociais, campanhas e eventos, além do reembolso dos investimentos de mídia das empresas do Ecossistema.",
    prazoPadrao: "Materiais simples (post, banner digital): 2 dias úteis · Campanhas com múltiplas peças: 5 dias úteis · Eventos e ações institucionais: mínimo 10 dias úteis · Relatório de campanha: até 5 dias úteis após o encerramento (Política Interna de Marketing, Partes 3 e 6).",
    prazoDefinido: true,
    indicadoresPadrao: "Alcance, engajamento e conversões por canal (relatório mensal); acompanhamento do budget de marketing versus planejado (Política Interna de Marketing, Parte 6).",
    indicadoresDefinido: true,
    remuneracao: "Honorários mensais via contrato interno e rateio aprovado pela Holding, além do reembolso dos investimentos de mídia à parte, sem integrar a remuneração (Mapa de Receitas).",
    responsabilizacao: "Descumprimento das diretrizes pode implicar revisão de processo, comunicação formal ao colaborador e, em casos graves, medidas disciplinares (Política Interna de Marketing, Parte 7).",
    governanca: "Revisão anual da política pela coordenação de Marketing, com validação da gestão; alterações substanciais comunicadas com antecedência mínima de 15 dias (Política Interna de Marketing, Parte 7).",
  },
  {
    empresa: "Engenharia",
    escopo: "Desenvolvimento de projetos, arquitetura, modelagem, detalhamento, compatibilização, quantificação, planejamento, controle de qualidade técnica e liberação para produção e obra.",
    prazoPadrao: "A definir por projeto — a política exige cronograma de desenvolvimento (modelagem, detalhamento, compatibilização, revisão, liberação), mas não fixa prazos padrão por etapa (Política de Engenharia e Arquitetura, Parte 8).",
    prazoDefinido: false,
    indicadoresPadrao: "Checklist de liberação cumprido e registro de não conformidades técnicas (utilização de projeto desatualizado, divergência de quantitativos etc.) — Política de Engenharia e Arquitetura, Partes 9 e 13.",
    indicadoresDefinido: false,
    remuneracao: "Honorários sobre serviços efetivamente prestados — projetos, orçamentos, consultorias, homologações, treinamentos e certificação Steel Conecta (Mapa de Receitas, Plano Diretor 11.9).",
    responsabilizacao: "Não conformidades técnicas devem ser registradas, analisadas e tratadas conforme sua criticidade, com ações corretivas e preventivas quando necessário (Política de Engenharia e Arquitetura, Parte 13).",
    governanca: "Revisão anual, ou sempre que houver alteração significativa nos padrões técnicos, sistemas ou estrutura da área (Política de Engenharia e Arquitetura, Parte 16).",
  },
  {
    empresa: "Log Express",
    escopo: "Organização logística do transporte de carga, transporte rodoviário municipal/intermunicipal/interestadual, depósito de mercadorias para terceiros e gestão de fretes contratados.",
    prazoPadrao: "Análise do chamado para captação de frete: até 10h · Captação e coleta de frete: até 24h · Cotação de frete: início às 14h, resposta em até 1h · Redirecionamento de carga: até 10h · Pit stop no CD: até 1h30 (Política Interna Logexpress, Partes 2 e 4).",
    prazoDefinido: true,
    indicadoresPadrao: "A definir — o Plano Diretor cita prazo, custo e nível de serviço como indicadores de logística (Item 9.7), mas nenhuma meta numérica foi publicada.",
    indicadoresDefinido: false,
    remuneracao: "Contratos internos conforme utilização dos serviços (transporte, roteirização, monitoramento); despesas com transportadoras reembolsadas pelas empresas contratantes (Mapa de Receitas, Plano Diretor 11.8).",
    responsabilizacao: "Averbação de carga em até 1h após a liberação no fornecedor; documentação do motorista e do veículo obrigatória para acionamento do seguro em caso de sinistro (Política Interna Logexpress, Parte 6).",
    governanca: "Revisão semestral, ou sempre que houver mudança relevante de processo, sistema ou legislação (Política Interna Logexpress, Parte 8).",
  },
]
