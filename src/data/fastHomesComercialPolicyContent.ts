import type { PolicyPart } from "./cscPolicyContent"

export const FASTHOMES_COMERCIAL_POLICY_META = {
  codigo: "FH.PC.001",
  versao: "01-2026",
  revisao: "01",
  vigencia: "2026",
  elaboracao: "Letícia Werneck",
  aprovacao: "Fábio Furtado",
  responsavel: "Comercial — FAST Homes",
  classificacao: "Política Comercial e de Vendas",
  finalidade:
    "Estabelecer as diretrizes e responsabilidades para o processo comercial da FAST Homes, padronizando as atividades relacionadas à prospecção, atendimento, elaboração de propostas, negociação, formalização e acompanhamento das vendas.",
  objetivo:
    "Garantir padronização do processo comercial, qualidade e agilidade no atendimento ao cliente, clareza nas informações comerciais, organização e rastreabilidade das oportunidades, cumprimento das metas comerciais, confiabilidade das informações registradas no CRM, padronização das propostas e condições comerciais, redução de erros e retrabalhos no processo de venda, e integração entre Comercial, Faturamento e demais áreas envolvidas no atendimento do pedido.",
}

export const FASTHOMES_COMERCIAL_POLICY_PARTS: PolicyPart[] = [
  {
    title: "Parte 1 — Abrangência",
    subsections: [
      {
        paragraphs: ["Esta Política aplica-se a todos os colaboradores, estagiários, vendedores, consultores, coordenadores e gestores envolvidos direta ou indiretamente no processo comercial da FAST Homes. O processo compreende exclusivamente as atividades relacionadas à venda, incluindo:"],
        items: [
          "Prospecção de clientes.",
          "Atendimento comercial.",
          "Identificação das necessidades do cliente.",
          "Apresentação dos produtos e soluções disponíveis.",
          "Apresentação de casas e modelos catálogo.",
          "Elaboração e envio de propostas comerciais.",
          "Negociação.",
          "Classificação e acompanhamento de oportunidades.",
          "Formalização da venda.",
          "Registro das informações no CRM.",
          "Acompanhamento do pedido comercial.",
          "Solicitação de faturamento.",
          "Solicitação de frete, quando aplicável.",
          "Acompanhamento do cliente até a conclusão da venda.",
        ],
      },
    ],
  },
  {
    title: "Parte 2 — Princípios Comerciais",
    subsections: [
      { heading: "3.1 Atendimento ao cliente", paragraphs: ["O atendimento deve ser realizado de forma clara, cordial, objetiva e profissional, buscando compreender as necessidades do cliente e apresentar as soluções disponíveis."] },
      { heading: "3.2 Registro das informações", paragraphs: ["Todas as informações relevantes relacionadas ao cliente e à oportunidade comercial devem ser registradas no sistema oficial definido pela empresa."] },
      { heading: "3.3 Padronização", paragraphs: ["As propostas, condições comerciais, informações de produtos e demais documentos utilizados no processo de venda devem seguir os padrões estabelecidos pela empresa."] },
      { heading: "3.4 Transparência", paragraphs: ["As informações apresentadas ao cliente devem ser claras e compatíveis com as condições comerciais efetivamente aprovadas pela empresa."] },
      { heading: "3.5 Rastreabilidade", paragraphs: ["O processo comercial deve permitir a identificação do histórico da oportunidade, desde o primeiro contato até a conclusão da venda."] },
      { heading: "3.6 Cumprimento de metas", paragraphs: ["A equipe comercial deve atuar de acordo com as metas e indicadores definidos pela gestão comercial."] },
    ],
  },
  {
    title: "Parte 3 — Estrutura Comercial e Responsabilidades",
    subsections: [
      {
        heading: "Direção",
        items: [
          "Definir a estratégia comercial da empresa.",
          "Aprovar metas e objetivos comerciais.",
          "Definir diretrizes para expansão de mercado.",
          "Aprovar políticas e condições comerciais estratégicas.",
          "Aprovar exceções comerciais que estejam fora da alçada da Gerência Comercial.",
          "Acompanhar os resultados comerciais da empresa.",
          "Avaliar oportunidades de novos mercados e modelos de negócio.",
        ],
      },
      {
        heading: "Gerente Comercial",
        items: [
          "Definir e acompanhar as estratégias comerciais.",
          "Estabelecer metas para a equipe de vendas.",
          "Acompanhar o desempenho individual e coletivo dos vendedores.",
          "Garantir o cumprimento dos processos comerciais aprovados.",
          "Realizar reuniões de alinhamento com clientes quando necessário.",
          "Classificar e acompanhar as oportunidades comerciais.",
          "Acompanhar o funil de vendas.",
          "Manter o Forecast Comercial atualizado.",
          "Acompanhar os indicadores de vendas.",
          "Cobrar o cumprimento das metas comerciais.",
          "Orientar e desenvolver a equipe comercial.",
          "Aprovar condições comerciais dentro de sua alçada.",
          "Solicitar aprovação superior para condições que ultrapassem sua alçada.",
          "Garantir a correta formalização das vendas.",
          "Solicitar ao setor Jurídico os contratos necessários para formalização com o cliente.",
          "Acompanhar o processo comercial até sua conclusão.",
          "Garantir que as informações do CRM estejam atualizadas e confiáveis.",
        ],
      },
      {
        heading: "Vendedor / Consultor Comercial",
        items: [
          "Prospectar novos clientes.",
          "Realizar o primeiro contato comercial.",
          "Atender clientes provenientes do processo de pré-venda.",
          "Identificar as necessidades do cliente.",
          "Apresentar os produtos, modelos e soluções disponíveis.",
          "Apresentar casas catálogo, quando aplicável.",
          "Elaborar e formalizar propostas comerciais.",
          "Realizar negociações dentro das condições autorizadas.",
          "Registrar as oportunidades no CRM.",
          "Manter atualizado o status de cada oportunidade.",
          "Acompanhar o cliente durante o processo de negociação.",
          "Solicitar as aprovações comerciais necessárias.",
          "Formalizar a venda após a aprovação do cliente.",
          "Realizar a reserva de materiais, quando aplicável ao processo comercial.",
          "Solicitar faturamento.",
          "Solicitar frete, quando aplicável.",
          "Acompanhar a conclusão do pedido.",
          "Manter o cliente informado sobre o andamento comercial do pedido.",
          "Cumprir as metas comerciais estabelecidas.",
          "Manter atualizadas todas as informações necessárias no sistema.",
        ],
      },
      {
        heading: "Estagiário / Assistente Comercial",
        items: [
          "Apoiar a equipe comercial no atendimento aos clientes.",
          "Auxiliar na elaboração de propostas comerciais.",
          "Apoiar o cadastro e atualização de clientes.",
          "Manter informações do CRM atualizadas.",
          "Auxiliar no acompanhamento das oportunidades.",
          "Apoiar a organização dos documentos comerciais.",
          "Auxiliar no acompanhamento de pedidos.",
          "Apoiar a equipe de vendas nas atividades administrativas.",
          "Reportar dúvidas, inconsistências ou informações incompletas ao responsável comercial.",
        ],
      },
      {
        heading: "Pré-Vendas",
        paragraphs: ["Quando houver estrutura de Pré-Vendas, compete à equipe:"],
        items: [
          "Realizar prospecção ativa e/ou receptiva.",
          "Identificar potenciais clientes.",
          "Realizar o primeiro contato.",
          "Levantar informações iniciais sobre a necessidade do cliente.",
          "Qualificar os leads conforme critérios definidos pela empresa.",
          "Registrar as informações no CRM.",
          "Classificar a oportunidade.",
          "Encaminhar oportunidades qualificadas para o vendedor responsável.",
          "Manter o histórico do contato registrado no sistema.",
        ],
      },
    ],
  },
  {
    title: "Parte 4 — Processo Comercial",
    subsections: [
      {
        paragraphs: ["O processo comercial da FAST Homes deve seguir, preferencialmente, a seguinte sequência:"],
        items: [
          "Prospecção → Atendimento → Levantamento de Necessidades → Qualificação → Apresentação → Proposta → Negociação → Aprovação → Formalização → Faturamento → Acompanhamento → Conclusão da Venda.",
        ],
      },
      {
        paragraphs: ["Cada etapa deve ser registrada e acompanhada conforme os procedimentos comerciais vigentes."],
      },
      {
        heading: "Prospecção",
        paragraphs: ["A prospecção consiste na identificação e abordagem de potenciais clientes. Podem ser utilizados, conforme estratégia comercial:"],
        items: [
          "Leads recebidos.",
          "Indicações.",
          "Contatos comerciais.",
          "Clientes recorrentes.",
          "Ações de marketing.",
          "Campanhas comerciais.",
          "Prospecção ativa.",
          "Outros canais aprovados pela empresa.",
        ],
      },
      {
        heading: "Atendimento e Levantamento de Necessidades",
        paragraphs: ["Durante o atendimento, o responsável comercial deve compreender as necessidades do cliente e identificar a solução comercial mais adequada. Devem ser levantadas, sempre que aplicável:"],
        items: [
          "Perfil do cliente.",
          "Tipo de produto ou solução desejada.",
          "Quantidade ou modelo de interesse.",
          "Prazo desejado.",
          "Local de entrega.",
          "Forma de pagamento.",
          "Necessidades específicas relacionadas à compra.",
          "Demais informações necessárias para elaboração da proposta.",
        ],
      },
      {
        heading: "Qualificação do Cliente",
        paragraphs: ["O cliente deve ser classificado de acordo com os critérios comerciais definidos pela empresa. A oportunidade poderá ser classificada, por exemplo, como:"],
        items: [
          "Quente/Firme: cliente com alta probabilidade de fechamento.",
          "Provável: cliente com interesse e possibilidade de fechamento.",
          "Frio: cliente sem previsão imediata de fechamento.",
        ],
      },
      {
        paragraphs: ["A classificação deve ser mantida atualizada conforme a evolução da negociação."],
      },
    ],
  },
  {
    title: "Parte 5 — Proposta Comercial",
    subsections: [
      {
        paragraphs: ["As propostas comerciais devem:"],
        items: [
          "Utilizar o modelo oficial aprovado pela empresa.",
          "Apresentar claramente os produtos ou soluções comercializadas.",
          "Informar valores e condições comerciais.",
          "Informar condições de pagamento.",
          "Informar prazo ou condições de entrega quando aplicável.",
          "Informar validade da proposta.",
          "Apresentar demais condições necessárias à venda.",
          "Ser encaminhadas ao cliente pelos canais oficiais definidos pela empresa.",
        ],
      },
      {
        paragraphs: ["É vedada a apresentação de condições comerciais não aprovadas ou diferentes das condições autorizadas pela empresa."],
      },
    ],
  },
  {
    title: "Parte 6 — Negociação",
    subsections: [
      {
        paragraphs: [
          "A negociação deve ser conduzida pelo responsável comercial respeitando as condições e limites estabelecidos pela empresa.",
          "Quando uma condição ultrapassar a alçada do vendedor ou responsável pela negociação, deverá ser submetida à aprovação do gestor competente antes de ser apresentada como condição definitiva ao cliente.",
          "As principais condições negociadas devem permanecer registradas no CRM ou sistema oficial.",
        ],
      },
    ],
  },
  {
    title: "Parte 7 — Formalização da Venda",
    subsections: [
      {
        paragraphs: ["A venda somente será considerada formalizada após o cumprimento dos requisitos definidos pela empresa. Quando aplicável, devem ser realizados:"],
        items: [
          "Confirmação da proposta pelo cliente.",
          "Aprovação das condições comerciais.",
          "Formalização contratual.",
          "Cadastro ou validação cadastral do cliente.",
          "Confirmação da forma de pagamento.",
          "Registro do pedido.",
          "Reserva de materiais, quando aplicável.",
          "Solicitação de faturamento.",
          "Solicitação de frete, quando aplicável.",
        ],
      },
      {
        paragraphs: ["Quando houver necessidade de contrato, o documento deverá ser solicitado ao setor responsável conforme procedimento interno."],
      },
    ],
  },
  {
    title: "Parte 8 — CRM e Controle das Oportunidades",
    subsections: [
      {
        paragraphs: ["Todas as oportunidades comerciais devem ser registradas e acompanhadas no CRM oficial da empresa. O responsável comercial deve manter atualizados:"],
        items: [
          "Dados do cliente.",
          "Origem do lead.",
          "Etapa da oportunidade.",
          "Status da negociação.",
          "Valores envolvidos.",
          "Previsão de fechamento.",
          "Próximas ações.",
          "Histórico dos contatos.",
          "Motivo de perda, quando aplicável.",
          "Informações relevantes para continuidade do atendimento.",
        ],
      },
      {
        paragraphs: ["O CRM deve representar a situação real das oportunidades comerciais."],
      },
    ],
  },
  {
    title: "Parte 9 — Forecast Comercial",
    subsections: [
      {
        paragraphs: ["O Forecast Comercial deve ser atualizado periodicamente pela equipe responsável. Devem ser consideradas, sempre que aplicável:"],
        items: [
          "Oportunidades em negociação.",
          "Valor potencial das vendas.",
          "Probabilidade de fechamento.",
          "Previsão de fechamento.",
          "Status atualizado da negociação.",
          "Vendas já formalizadas.",
        ],
      },
      {
        paragraphs: ["O Gerente Comercial é responsável por acompanhar a confiabilidade das informações utilizadas no Forecast."],
      },
    ],
  },
  {
    title: "Parte 10 — Metas e Indicadores Comerciais",
    subsections: [
      {
        paragraphs: ["A gestão comercial deve estabelecer e acompanhar indicadores relacionados ao desempenho das vendas. Podem ser utilizados, entre outros:"],
        items: [
          "Faturamento de vendas.",
          "Volume de vendas.",
          "Meta individual.",
          "Meta da equipe.",
          "Número de oportunidades.",
          "Taxa de conversão.",
          "Ticket médio.",
          "Número de propostas.",
          "Taxa de fechamento.",
          "Ciclo médio de vendas.",
          "Clientes novos.",
          "Clientes recorrentes.",
          "Vendas perdidas.",
          "Motivos de perda.",
          "Forecast x realizado.",
        ],
      },
      {
        paragraphs: ["Os indicadores devem ser acompanhados conforme periodicidade definida pela gestão."],
      },
    ],
  },
  {
    title: "Parte 11 — Comunicação com o Cliente",
    subsections: [
      {
        paragraphs: ["A comunicação com o cliente deve ser:"],
        items: ["Clara.", "Objetiva.", "Profissional.", "Cordial.", "Rastreável.", "Compatível com as condições comerciais aprovadas."],
      },
      {
        paragraphs: [
          "Informações relevantes para a venda devem ser registradas no sistema oficial.",
          "Promessas, prazos, descontos ou condições não autorizadas não devem ser assumidos perante o cliente.",
        ],
      },
    ],
  },
  {
    title: "Parte 12 — Faturamento e Pedido",
    subsections: [
      {
        paragraphs: ["Após a formalização da venda, o responsável comercial deverá realizar as solicitações necessárias para continuidade do pedido. Quando aplicável:"],
        items: [
          "Solicitar faturamento.",
          "Solicitar emissão de NF.",
          "Solicitar frete.",
          "Confirmar dados cadastrais.",
          "Confirmar endereço de entrega.",
          "Confirmar condições de pagamento.",
          "Confirmar demais informações necessárias para processamento do pedido.",
        ],
      },
      {
        paragraphs: ["A solicitação deve conter informações suficientes para evitar retrabalho ou divergências."],
      },
    ],
  },
  {
    title: "Parte 13 — Não Conformidades Comerciais",
    subsections: [
      {
        paragraphs: ["São consideradas não conformidades comerciais, entre outras:"],
        items: [
          "Venda sem aprovação necessária.",
          "Condição comercial não autorizada.",
          "Informações incorretas ao cliente.",
          "Falta de registro da oportunidade.",
          "CRM desatualizado.",
          "Proposta emitida fora do padrão.",
          "Divergência entre proposta e pedido.",
          "Falha na formalização da venda.",
          "Solicitação de faturamento com informações incorretas.",
          "Descumprimento dos procedimentos comerciais.",
          "Falta de acompanhamento de oportunidades.",
          "Registro incorreto de Forecast.",
        ],
      },
      {
        paragraphs: ["As ocorrências deverão ser tratadas conforme sua natureza e impacto."],
      },
    ],
  },
  {
    title: "Parte 14 — Treinamento e Capacitação",
    subsections: [
      {
        paragraphs: ["Todos os colaboradores envolvidos no processo comercial devem receber treinamento sobre:"],
        items: [
          "Processo comercial.",
          "Produtos e soluções comercializadas.",
          "Sistemas utilizados.",
          "CRM.",
          "Procedimentos de venda.",
          "Política comercial.",
          "Condições e alçadas comerciais.",
          "Atendimento ao cliente.",
          "Registro das informações.",
          "Demais procedimentos aplicáveis à função.",
        ],
      },
      {
        paragraphs: ["Novos colaboradores devem ser treinados antes de assumir integralmente suas atividades."],
      },
    ],
  },
  {
    title: "Parte 15 — Revisão e Disposições Finais",
    subsections: [
      {
        heading: "Revisão da Política",
        paragraphs: ["Esta Política deverá ser revisada:"],
        items: [
          "Anualmente; ou",
          "Sempre que houver alteração significativa no processo comercial.",
          "Quando houver alteração na estrutura comercial.",
          "Quando houver alteração nos sistemas utilizados.",
          "Quando houver alteração relevante nas regras de venda ou condições comerciais.",
        ],
      },
      {
        paragraphs: ["Toda alteração deverá seguir o processo interno de gerenciamento de mudanças definido pela empresa."],
      },
      {
        heading: "Disposições Finais",
        paragraphs: [
          "Esta Política estabelece as diretrizes gerais para o processo comercial e de vendas da FAST Homes, sendo de cumprimento obrigatório por todos os colaboradores envolvidos nas atividades comerciais.",
          "Os procedimentos operacionais, instruções de trabalho, regras de alçada e demais documentos complementares deverão detalhar as atividades específicas necessárias à execução desta Política.",
          "Questões relacionadas a engenharia, projetos, modelagem, compatibilização, dimensionamento, execução de obras, acompanhamento técnico, qualidade técnica ou demais atividades de natureza técnica não fazem parte do escopo desta Política Comercial e devem ser tratadas em documentos próprios das respectivas áreas.",
          "O descumprimento das diretrizes estabelecidas poderá resultar em ações corretivas e administrativas conforme as regras internas da empresa.",
        ],
      },
    ],
  },
]
