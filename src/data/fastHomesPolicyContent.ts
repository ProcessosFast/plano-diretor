import type { PolicyPart } from "./cscPolicyContent"

export const FASTHOMES_POLICY_META = {
  codigo: "FH.PI.001.01",
  versao: "01",
  revisao: "01",
  vigencia: "2026",
  elaboracao: "Letícia Werneck",
  aprovacao: "Fábio Furtado",
  responsavel: "Escritório de Projetos — Steel Frame",
  classificacao: "Política Interna — FAST Homes",
  finalidade:
    "Estabelecer a Política Interna de Procedimentos Gerais do Escritório de Projetos de Steel Frame, consolidando diretrizes, responsabilidades e padrões operacionais, com base nos POPs e Instruções Técnicas vigentes, garantindo padronização dos processos, qualidade técnica dos projetos, confiabilidade de orçamentos e cronogramas, integração entre áreas e redução de riscos técnicos, financeiros e operacionais.",
  objetivo:
    "Esta política aplica-se a todos os colaboradores, estagiários, coordenadores e gestores envolvidos em desenvolvimento de projetos em Steel Frame e Drywall, quantificação e orçamentação, venda, planejamento e cronograma de obras, compatibilização, detalhamento e liberação para produção e obra.",
}

export const FASTHOMES_POLICY_PARTS: PolicyPart[] = [
  {
    title: "Parte 1 — Princípios Norteadores",
    subsections: [
      {
        paragraphs: ["O Escritório de Projetos deve atuar obrigatoriamente orientado pelos seguintes princípios:"],
        items: [
          "Planejamento antes da execução.",
          "Padronização como regra, exceções apenas mediante aprovação formal da gerência.",
          "Rastreabilidade completa das informações e decisões.",
          "Comunicação clara, objetiva e registrada entre áreas.",
          "Cumprimento rigoroso de prazos estabelecidos.",
          "Atenção aos detalhes técnicos para evitar retrabalho.",
          "Conformidade com normas técnicas, legislações e boas práticas.",
          "Combate sistemático ao improviso.",
          "Cultura de melhoria contínua dos processos.",
        ],
      },
    ],
  },
  {
    title: "Parte 2 — Estrutura FAST Homes: Papéis e Responsabilidades",
    subsections: [
      {
        heading: "Direção",
        items: [
          "Definir a visão, metas e objetivos estratégicos.",
          "Garantir que o Escritório de Projetos atue alinhado à estratégia do negócio.",
          "Aprovar investimentos em tecnologia, sistemas e capacitação.",
          "Decidir sobre expansão, novos mercados e modelos de operação.",
          "Garantir que projetos e obras tenham planejamento adequado, orçamento validado e cronograma estruturado.",
          "Intervir quando houver desvios críticos de prazo, custo ou qualidade.",
        ],
      },
      {
        heading: "Gerência Técnica",
        items: [
          "Definir padrões técnicos.",
          "Validar projetos, quantitativos e cronogramas.",
          "Atualizar status de projetos no sistema.",
          "Delegar tarefas diariamente à equipe.",
          "Supervisionar estagiários.",
          "Garantir aderência a esta política.",
          "Realizar reuniões de alinhamento com o cliente.",
        ],
      },
      {
        heading: "Supervisor de Obras",
        items: [
          "Fazer levantamento do escopo técnico da obra.",
          "Montar listagem de material para obra.",
          "Fazer medição de projeto x realizado da obra.",
          "Fazer controle de qualidade da obra.",
          "Fazer checklist de entrega da obra.",
          "Manter a comunicação com o empreiteiro executante.",
        ],
      },
      {
        heading: "Projetista",
        items: [
          "Desenvolver projetos conforme padrões e normas.",
          "Executar modelagem, detalhamento e revisões.",
          "Registrar informações e revisões.",
        ],
      },
      {
        heading: "Gerente Comercial",
        items: [
          "Realizar reuniões com o cliente.",
          "Manter a equipe comercial seguindo os processos aprovados.",
          "Classificar clientes (firmes, prováveis, frios).",
          "Formalizar vendas.",
          "Gerenciar a vida útil do projeto entre pedido → modelagem e compatibilização → fabricação → entrega do projeto.",
          "Manter informação de forecast comercial atualizada.",
          "Cobrar meta de vendas dos vendedores.",
          "Solicitar contrato ao Setor Jurídico para formalizar com o cliente.",
        ],
      },
      {
        heading: "Vendedor",
        items: [
          "Prospectar cliente.",
          "Receber cliente do pré-venda.",
          "Formalizar orçamentos.",
          "Fazer reserva de materiais no portal.",
          "Fazer pedido de faturamento (VEF ou NF).",
          "Fazer solicitação de frete.",
        ],
      },
      {
        heading: "Estagiário Orçamentista",
        items: [
          "Executar Take Off conforme instrução técnica.",
          "Garantir precisão dos quantitativos.",
          "Integrar quantitativos à planilha de orçamento.",
          "Montar orçamentos conforme padrão.",
          "Reportar dúvidas e inconsistências.",
        ],
      },
      {
        heading: "Estagiário Projetista",
        items: [
          "Fazer modelagem de projeto fechado no Framebuilder.",
          "Fazer cortes e demais plantas que faltarem dos projetos catálogo.",
          "Atualizar lista quantitativa dos projetos catálogo.",
          "Fazer projeto 3D no Sketchup.",
        ],
      },
      {
        heading: "Estagiário Técnico Comercial",
        items: [
          "Montar propostas comerciais.",
          "Realizar reunião inicial com o cliente para dúvidas.",
          "Apresentar casas catálogo.",
          "Manter CRM atualizado com dados dos clientes / status.",
        ],
      },
    ],
  },
  {
    title: "Parte 3 — Padrões de Modelagem e Detalhamento",
    subsections: [
      {
        items: [
          "Utilizar softwares homologados e aprovados pela empresa.",
          "Seguir bibliotecas e templates oficiais.",
          "Nomear arquivos conforme padrão interno.",
          "Registrar revisões e alterações.",
          "Seguir procedimentos e instruções técnicas.",
        ],
      },
    ],
  },
  {
    title: "Parte 4 — Padrões de Quantificação e Orçamento",
    subsections: [
      {
        items: [
          "Utilizar o programa Take Off para quantificar os projetos.",
          "Proibido orçamento detalhado sem base gráfica, ou seja, sem projeto definido.",
          "Conferência técnica antes da liberação.",
        ],
      },
    ],
  },
  {
    title: "Parte 5 — Padrões de Planejamento e Cronograma",
    subsections: [
      {
        items: [
          "Todo projeto deve possuir cronograma detalhado desde sua projeção no escritório até a fase de produção; em caso de obras completas, cronograma físico da obra.",
          "Cronograma físico-financeiro compatibilizado com cronograma de obra e liberação de material.",
          "Atualização periódica do ClickUp conforme avanço real.",
          "Visibilidade do cronograma para todas as áreas envolvidas.",
          "Planejamento gerencial claro em todas as etapas do projeto.",
        ],
      },
    ],
  },
  {
    title: "Parte 6 — Controle de Qualidade e Validação",
    subsections: [
      {
        items: [
          "Revisão técnica obrigatória.",
          "Checklist de liberação.",
          "Registro de não conformidades.",
          "Ações corretivas documentadas.",
        ],
      },
    ],
  },
  {
    title: "Parte 7 — Comunicação e Registros",
    subsections: [
      {
        items: [
          "Todas as demandas devem tramitar via sistema oficial Sults.",
          "Proibidas decisões técnicas sem registro.",
          "Comentários e arquivos devem ser anexados aos chamados.",
          "Atualizações internas devem estar no ClickUp.",
        ],
      },
    ],
  },
  {
    title: "Parte 8 — Treinamento e Capacitação",
    subsections: [
      {
        items: [
          "Treinamento obrigatório para novos colaboradores, cobrindo todos os procedimentos e processos a serem executados.",
          "Atualização sempre que houver revisão de POP.",
          "Registro de treinamentos realizados.",
        ],
      },
    ],
  },
  {
    title: "Parte 9 — Não Conformidades",
    subsections: [
      {
        paragraphs: ["O descumprimento dos procedimentos aprovados pode resultar em:"],
        items: ["Retrabalho.", "Impacto em prazo e custo.", "Ações corretivas internas."],
      },
    ],
  },
  {
    title: "Parte 10 — Vigência e Revisão",
    subsections: [
      {
        paragraphs: ["Esta Política entra em vigor na data de sua publicação e deve ser revisada:"],
        items: [
          "Anualmente; ou",
          "Sempre que houver alteração significativa nos processos.",
          "A atualização dos procedimentos sucede o preenchimento do documento de gerenciamento de mudanças, solicitando a atualização do procedimento e os motivos pelos quais deve ser atualizado.",
        ],
      },
    ],
  },
  {
    title: "Parte 11 — Disposições Finais",
    subsections: [
      {
        paragraphs: [
          "Esta Política Interna consolida e hierarquiza os procedimentos do Escritório de Projetos de Steel Frame, sendo de cumprimento obrigatório por todos os envolvidos.",
          "O não cumprimento compromete a qualidade, a segurança e a sustentabilidade dos projetos e da empresa.",
        ],
      },
    ],
  },
]
