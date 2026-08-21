export type RiskCategoria = "Estratégico" | "Operacional" | "Financeiro" | "Tributário" | "Jurídico" | "Pessoas"
export type RiskClasse = "Baixo" | "Médio" | "Alto" | "Crítico"
export type RiskStatus = "Não iniciado" | "Em andamento" | "Mitigado"

export interface Risk {
  id: string
  categoria: RiskCategoria
  risco: string
  causa: string
  fonte: string
  probabilidade: number
  impacto: number
  responsavel: string
  mitigacao: string
  status: RiskStatus
}

export function riskScore(r: Pick<Risk, "probabilidade" | "impacto">) {
  return r.probabilidade * r.impacto
}

export function riskClasse(r: Pick<Risk, "probabilidade" | "impacto">): RiskClasse {
  const score = riskScore(r)
  if (score >= 56) return "Crítico"
  if (score >= 40) return "Alto"
  if (score >= 24) return "Médio"
  return "Baixo"
}

export const CATEGORIA_COLOR: Record<RiskCategoria, string> = {
  Estratégico: "var(--color-front)",
  Operacional: "var(--color-oper)",
  Financeiro: "var(--color-back)",
  Tributário: "var(--color-fran)",
  Jurídico: "var(--color-warn)",
  Pessoas: "var(--color-muted)",
}

export const CLASSE_COLOR: Record<RiskClasse, string> = {
  Baixo: "#0E9C82",
  Médio: "#C2751A",
  Alto: "#D62828",
  Crítico: "#7D1715",
}

export const RISKS: Risk[] = [
  // ESTRATÉGICO
  {
    id: "r01",
    categoria: "Estratégico",
    risco: "Desalinhamento entre empresas, resistência às mudanças e perda de foco estratégico",
    causa: "É como o próprio Plano Diretor descreve este risco (Item 15.2). O que foi feito até aqui: o Plano Diretor está aprovado, com a arquitetura de holdings, empresas operacionais, comerciais e especializadas definida, e o Conselho Consultivo e a CEO em funcionamento. Ainda em aberto: unidades sem diretor formalmente designado (ex.: FAST Importação, hoje sob responsabilidade provisória do Conselho) e os pontos societários/tributários que o próprio Plano Diretor lista como pendentes de validação por assessores externos antes da aprovação definitiva do modelo (R1.9).",
    fonte: "Plano Diretor · Item 15.2 (riscos estratégicos) e R1.9 (pontos em validação)",
    probabilidade: 6,
    impacto: 7,
    responsavel: "Conselho Consultivo / CEO",
    mitigacao: "Concluir a designação de diretores para as unidades ainda sem responsável e finalizar os pareceres jurídico, tributário e contábil pendentes antes da aprovação definitiva do modelo.",
    status: "Em andamento",
  },
  {
    id: "r02",
    categoria: "Estratégico",
    risco: "Governança compartilhada da Steel Conecta sem processo formal de resolução de conflito de responsabilidade",
    causa: "O Plano Diretor define que a Steel Conecta é governada de forma compartilhada entre a FAST Franchising (comercialização, expansão e relacionamento com franqueados) e a Diretoria Técnica de FAST Obras e Homes (treinamento, certificação, padrões e evolução técnica) — Item 5.7 e 9.6. Nenhuma política publicada define o que acontece quando as duas frentes divergem (ex.: expansão comercial acima da capacidade de certificação técnica).",
    fonte: "Plano Diretor · Itens 5.7 e 9.6",
    probabilidade: 5,
    impacto: 6,
    responsavel: "FAST Franchising / Diretoria Técnica FAST Obras & Homes",
    mitigacao: "Formalizar um protocolo de decisão conjunta para a Steel Conecta, com critérios objetivos de prioridade entre expansão comercial e capacidade técnica de certificação.",
    status: "Não iniciado",
  },

  // OPERACIONAL
  {
    id: "r03",
    categoria: "Operacional",
    risco: "Falhas de integração, duplicidade de processos e gargalos logísticos",
    causa: "É como o próprio Plano Diretor descreve este risco (Item 15.2). O que foi feito: políticas internas já publicadas para várias empresas operacionais e especializadas, descrevendo fluxos de recebimento, produção, expedição e abastecimento. Ainda em aberto: o processo de implantação de novas unidades previsto no Plano Diretor (Item 9.6) — coordenado pela Engenharia e pelo CSC, com padronização física/operacional, cronograma e orçamento — ainda não foi formalizado em nenhuma política, apesar de a rede já estar em expansão (ex.: abertura de novas filiais de varejo).",
    fonte: "Plano Diretor · Item 15.2 (riscos operacionais) e Item 9.6 (implantação de novas unidades)",
    probabilidade: 6,
    impacto: 6,
    responsavel: "Engenharia / CSC / Holdings",
    mitigacao: "Formalizar o processo de implantação de novas unidades (padrão físico, cronograma, orçamento, checklist de abertura) antes da próxima onda de expansão.",
    status: "Em andamento",
  },
  {
    id: "r04",
    categoria: "Operacional",
    risco: "MaxSteel — falha de qualidade na produção de perfis de aço",
    causa: "A Política Interna da MaxSteel exige aferição a cada 50 peças produzidas e interrupção imediata da linha em caso de medidas fora da tolerância, falha mecânica ou temperatura/pressão fora dos limites (Parte 9). Como a produção alimenta diretamente o Atacado, o Varejo e a FAST Homes, uma falha de qualidade não detectada a tempo se propaga para múltiplos canais de venda antes de ser percebida.",
    fonte: "Política Interna MaxSteel, Partes 5 e 9",
    probabilidade: 6,
    impacto: 7,
    responsavel: "Encarregado de Produção MaxSteel / Qualidade",
    mitigacao: "Auditar a adesão real à frequência de aferição (1 a cada 50 peças) e formalizar rastreabilidade de lote até o cliente final para viabilizar recall direcionado se necessário.",
    status: "Não iniciado",
  },
  {
    id: "r05",
    categoria: "Operacional",
    risco: "Log Express — exposição a sinistro de carga sem documentação completa do motorista",
    causa: "A Política Interna da Logexpress condiciona o acionamento do seguro de carga à documentação completa do motorista verificada no ato da captação do frete (Parte 6). Como a captação ocorre por chamada de vídeo e grupos de WhatsApp, há dependência de disciplina operacional do time para garantir que cada frete tenha a checagem feita antes da liberação.",
    fonte: "Política Interna Logexpress, Partes 2 e 6",
    probabilidade: 6,
    impacto: 7,
    responsavel: "Logexpress / Administrativo CSC",
    mitigacao: "Auditar amostralmente se a verificação documental do motorista está sendo de fato registrada antes de cada captação, e vincular a liberação do frete a essa evidência no sistema.",
    status: "Não iniciado",
  },
  {
    id: "r06",
    categoria: "Operacional",
    risco: "DCS-CM — ruptura de estoque por descumprimento da grade de abastecimento",
    causa: "A Política de Abastecimento de Lojas define grades fixas por dia da semana para o Rio de Janeiro e para as demais lojas do Brasil, com prazos de manifestação e autorização (até as 15h). Descumprir a grade — algo que a própria política já antecipa como risco a monitorar — gera ruptura em loja ou excesso de estoque parado.",
    fonte: "Política de Abastecimento de Lojas DCS-CM, Partes 4 e 16",
    probabilidade: 6,
    impacto: 5,
    responsavel: "Abastecimento DCS-CM",
    mitigacao: "Acompanhar mensalmente o indicador \"% de abastecimentos realizados dentro da grade\" já previsto na própria política (ver Matriz de KPIs) e tratar desvios recorrentes por loja.",
    status: "Em andamento",
  },
  {
    id: "r07",
    categoria: "Operacional",
    risco: "Atacado — composição de carga fora da margem mínima definida por região",
    causa: "A Política Comercial do Atacado permite ao gerente regional autorizar, excepcionalmente, até 0,5 ponto de margem abaixo do mínimo vigente por região, mas exige justificativa individual registrada. Sem auditoria periódica, exceções pontuais podem se tornar prática recorrente e corroer a margem da operação sem que a Diretoria perceba.",
    fonte: "Política Interna Comercial Atacado, Partes 5 e 6",
    probabilidade: 5,
    impacto: 5,
    responsavel: "Gerência Regional Atacado / Diretoria Comercial",
    mitigacao: "Auditar mensalmente as exceções de margem concedidas por região e reportar concentração de exceções à Diretoria Comercial.",
    status: "Não iniciado",
  },
  {
    id: "r08",
    categoria: "Operacional",
    risco: "Ausência de consequência formal para descumprimento dos SLAs e KPIs recém-definidos",
    causa: "O Plano Diretor exige que todo contrato interno preveja \"responsabilização\" por falhas, exceções e reincidências (Item 9.8), mas a Matriz de SLAs e a Matriz de KPIs criadas neste portal ainda não têm nenhuma regra de o que acontece quando uma meta aprovada não é cumprida — hoje só existe o registro do descumprimento, não a consequência.",
    fonte: "Plano Diretor · Item 9.8 · Matriz de SLAs · Matriz de KPIs",
    probabilidade: 6,
    impacto: 6,
    responsavel: "Holding / Auditoria Interna",
    mitigacao: "Definir, para cada SLA e KPI aprovado, o que ocorre em caso de descumprimento reincidente (revisão de meta, plano de ação obrigatório, escalonamento à Diretoria).",
    status: "Não iniciado",
  },

  // FINANCEIRO
  {
    id: "r09",
    categoria: "Financeiro",
    risco: "Metodologia de rateio de custos compartilhados não definida",
    causa: "O Plano Diretor exige critério objetivo de rateio para CSC, Unity Company, Log Express e ativos compartilhados, mas nenhuma fórmula, percentual-base ou matriz por empresa foi aprovada pela Holding — o princípio existe, o número não.",
    fonte: "Plano Diretor · Itens 9.4, 11.7–11.10 e 12.12 · Mapa de Receitas (Regras de Rateio)",
    probabilidade: 8,
    impacto: 7,
    responsavel: "Holding / Controladoria",
    mitigacao: "Aprovar e publicar a metodologia de rateio (base de cálculo e matriz por empresa) para cada área compartilhada — já editável na Matriz de Rateio do Mapa de Receitas.",
    status: "Não iniciado",
  },
  {
    id: "r10",
    categoria: "Financeiro",
    risco: "Percentuais de comissão e royalty por unidade comercial não definidos",
    causa: "As unidades comerciais (Atacado, Varejo, Obras/Homes, Digital, Atacado p/ Franqueados, Importação) seguem sem percentual de comissão aprovado no Mapa de Receitas — cada uma promove e vende, mas a régua de remuneração ainda não foi fechada pela Diretoria/Holding.",
    fonte: "Plano Diretor · Item 11 · Mapa de Receitas (Campos a Preencher)",
    probabilidade: 7,
    impacto: 6,
    responsavel: "Diretoria / Holding / Controladoria",
    mitigacao: "Aprovar e publicar a tabela de comissionamento e royalties por unidade de negócio — já editável no Mapa de Receitas.",
    status: "Não iniciado",
  },
  {
    id: "r11",
    categoria: "Financeiro",
    risco: "Subcapitalização das empresas comerciais e operacionais recém-formalizadas",
    causa: "Os contratos societários já reunidos mostram capital social muito baixo em relação ao volume de operação esperado (ex.: Casa do Montador Ltda com R$ 1.000,00 de capital social operando 7 filiais; FAST Atacado com R$ 10.000,00). Em uma estrutura de holdings com muitas empresas relacionadas, capital social nominal cria exposição em caso de dívida, execução judicial ou necessidade de aporte rápido.",
    fonte: "Contratos Societários (Casa do Montador, Televendas Fast Materiais e demais)",
    probabilidade: 5,
    impacto: 7,
    responsavel: "Jurídico (CSC) / Controladoria",
    mitigacao: "Avaliar com o Jurídico e a Controladoria se o capital social nominal das empresas operacionais/comerciais é adequado ao volume de operação e ao risco de responsabilização, ajustando via aumento de capital onde necessário.",
    status: "Não iniciado",
  },

  // TRIBUTÁRIO
  {
    id: "r12",
    categoria: "Tributário",
    risco: "Preço de transferência entre partes relacionadas sem estudo formal",
    causa: "O preço de transferência é praticado ao custo constante da NF-e, mas ainda não há estudo/política formal que sustente essa prática perante questionamento fiscal de distribuição disfarçada de lucros — o próprio Plano Diretor (R1.9) reconhece o ponto como pendente.",
    fonte: "Plano Diretor · R1.4 e R1.9",
    probabilidade: 5,
    impacto: 7,
    responsavel: "Fiscal / Jurídico (CSC)",
    mitigacao: "Elaborar estudo técnico de preço de transferência e formalizar política interna específica.",
    status: "Em andamento",
  },
  {
    id: "r13",
    categoria: "Tributário",
    risco: "Desenquadramento do Simples Nacional nas empresas comerciais",
    causa: "A FAST Franchising já se desenquadrou de Microempresa em 2023 por exceder o limite de receita bruta anual da Lei Complementar 123/2006. O Plano Diretor (R1.9) lista como pendente de validação justamente \"o limite de receita bruta do Simples Nacional frente ao volume de comissões das empresas comerciais\" — ou seja, o mesmo evento pode se repetir em outras comerciais à medida que o volume de comissão cresce.",
    fonte: "Contrato Social FAST Franchising (4ª Alteração) · Plano Diretor R1.9",
    probabilidade: 5,
    impacto: 6,
    responsavel: "Contábil / Fiscal (CSC)",
    mitigacao: "Monitorar trimestralmente a receita bruta acumulada de cada empresa comercial frente ao teto do Simples Nacional e antecipar o planejamento tributário de transição quando necessário.",
    status: "Não iniciado",
  },

  // JURÍDICO
  {
    id: "r14",
    categoria: "Jurídico",
    risco: "Contratos incompletos, conflitos societários e riscos regulatórios",
    causa: "As Políticas de Compliance e de Conflito de Interesses já foram publicadas, e parte dos contratos sociais das empresas do Ecossistema já foi levantada e conferida contra o Organograma. Ainda em aberto: os contratos internos entre empresas do grupo (prestação de serviço, fornecimento, compartilhamento de ativos, licenciamento) ainda não existem formalmente, e parte relevante dos contratos societários das empresas ainda não foi reunida.",
    fonte: "Plano Diretor · Item 15.2 (riscos jurídicos) e Item 12 (contratos internos)",
    probabilidade: 6,
    impacto: 7,
    responsavel: "Jurídico (CSC)",
    mitigacao: "Formalizar prioritariamente os contratos internos do Back Office e concluir o levantamento dos contratos societários pendentes.",
    status: "Em andamento",
  },
  {
    id: "r15",
    categoria: "Jurídico",
    risco: "Colaboradores contratados por empresas diferentes das que a nova estrutura define como responsáveis",
    causa: "O Organograma mapeia as pessoas do Ecossistema por unidade e mostra que parte da equipe é contratada por uma razão social diferente da empresa que a nova arquitetura societária define como responsável por aquela unidade, e que uma parte das pessoas ainda não tem contratante formalmente registrado. Conforme os contratos societários das empresas-alvo forem sendo formalizados (Plano Diretor, Fase 2 — Item 16.4), essas pessoas precisarão migrar para a empresa correta — gerando rescisões, novas admissões e encargos trabalhistas, um custo de transição que o Plano Diretor não orça em nenhum capítulo.",
    fonte: "Organograma · Contratos Societários · Plano Diretor 16.4 (Fase 2 — Estrutura Organizacional)",
    probabilidade: 8,
    impacto: 8,
    responsavel: "RH / Jurídico (CSC) / Diretoria Executiva",
    mitigacao: "Mapear, pessoa a pessoa, a empresa-alvo definitiva conforme a nova arquitetura, orçar o custo de rescisão/readmissão e negociar prazo de transição com o Conselho Consultivo antes de formalizar os contratos societários restantes.",
    status: "Não iniciado",
  },
  {
    id: "r16",
    categoria: "Jurídico",
    risco: "Termos de ciência de Compliance e Conflito de Interesses ainda não coletados",
    causa: "As Políticas de Compliance e de Conflito de Interesses já estão publicadas neste portal, com Anexo I de termo de ciência e compromisso, mas não há campanha formal de coleta dessas assinaturas junto aos colaboradores — sem isso, a exigibilidade das políticas perante cada indivíduo fica fragilizada.",
    fonte: "Política de Compliance, Anexo I · Política de Conflito de Interesses, Anexo I",
    probabilidade: 6,
    impacto: 5,
    responsavel: "Jurídico e Compliance (CSC) / RH",
    mitigacao: "Lançar campanha de coleta de assinaturas do termo de ciência, começando pelas lideranças e pessoas com acesso a informação sensível.",
    status: "Não iniciado",
  },
  {
    id: "r17",
    categoria: "Jurídico",
    risco: "Mesmo CNPJ (Ruche Design Ltda) usado para Engenharia e para a equipe comercial de Obras/Homes",
    causa: "O contrato social da Ruche Design Ltda foi enviado como sendo a pessoa jurídica da área de Engenharia, mas essa mesma razão social já contratava a equipe comercial de FAST Obras & Homes no Organograma. O objeto social é amplo o bastante para cobrir as duas frentes, mas misturar back office técnico e front office comercial na mesma empresa contraria a lógica de segregação do Plano Diretor.",
    fonte: "Contrato Social Ruche Design Ltda · Organograma (FAST Obras & Homes)",
    probabilidade: 5,
    impacto: 5,
    responsavel: "Jurídico (CSC) / Diretoria FAST Obras & Homes",
    mitigacao: "Confirmar com o Jurídico se é intencional usar o mesmo CNPJ para Engenharia e para o comercial de Obras/Homes, ou se devem ser pessoas jurídicas distintas.",
    status: "Não iniciado",
  },

  // PESSOAS
  {
    id: "r18",
    categoria: "Pessoas",
    risco: "Resistência cultural, necessidade de capacitação e perda de talentos",
    causa: "As políticas internas publicadas já preveem treinamento formal obrigatório das equipes antes da entrada em vigor plena. Ainda em aberto: esse treinamento ainda não foi de fato realizado nem registrado, e o Plano Diretor (Item 2.4) reconhece que o Ecossistema ainda opera parcialmente por relações informais e conhecimento concentrado em poucas pessoas.",
    fonte: "Plano Diretor · Item 15.2 (riscos de pessoas) e Item 2.4",
    probabilidade: 5,
    impacto: 5,
    responsavel: "Diretoria Executiva / RH",
    mitigacao: "Agendar e registrar o treinamento das políticas já publicadas e estruturar plano de sucessão para as posições-chave.",
    status: "Em andamento",
  },
]
