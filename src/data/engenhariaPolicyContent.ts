import type { PolicyPart } from "./cscPolicyContent"

export const ENGENHARIA_POLICY_META = {
  codigo: "FH.PI.002.01",
  versao: "01-2026",
  revisao: "01",
  vigencia: "2026",
  elaboracao: "Letícia Werneck",
  aprovacao: "—",
  responsavel: "Engenharia e Arquitetura — FAST Homes",
  classificacao: "Política Interna — Engenharia e Arquitetura",
  finalidade:
    "Estabelecer a Política Interna de Procedimentos Gerais da área de Engenharia e Arquitetura da FAST Homes, consolidando diretrizes, responsabilidades e padrões técnicos e operacionais relacionados ao desenvolvimento, análise, compatibilização, quantificação, planejamento e controle dos projetos.",
  objetivo:
    "Padronizar os processos de Engenharia e Arquitetura; garantir a qualidade técnica dos projetos e a confiabilidade dos quantitativos; padronizar modelagem, detalhamento e revisão; garantir a integração entre Engenharia, Arquitetura, Produção e Obras; reduzir riscos técnicos, financeiros e operacionais e retrabalhos decorrentes de falhas de projeto; garantir rastreabilidade das informações e revisões; e assegurar que os projetos sejam adequadamente analisados antes de sua liberação para as etapas seguintes.",
}

export const ENGENHARIA_POLICY_PARTS: PolicyPart[] = [
  {
    title: "Parte 1 — Abrangência",
    subsections: [
      {
        paragraphs: ["Esta Política aplica-se a todos os colaboradores, estagiários, projetistas, engenheiros, arquitetos, coordenadores e gestores envolvidos nas atividades de Engenharia e Arquitetura da FAST Homes. Abrange:"],
        items: [
          "Desenvolvimento de projetos.",
          "Arquitetura.",
          "Engenharia.",
          "Modelagem.",
          "Detalhamento.",
          "Compatibilização.",
          "Revisão de projetos.",
          "Quantificação de materiais.",
          "Orçamentação técnica.",
          "Planejamento.",
          "Cronogramas.",
          "Liberação de projetos.",
          "Controle de qualidade técnica.",
          "Controle de revisões.",
          "Acompanhamento técnico.",
          "Interface entre projeto, produção e obra.",
          "Controle de informações técnicas.",
          "Registro de não conformidades.",
          "Ações corretivas relacionadas aos projetos.",
        ],
      },
    ],
  },
  {
    title: "Parte 2 — Princípios Norteadores",
    subsections: [
      {
        paragraphs: ["A área de Engenharia e Arquitetura deve atuar obrigatoriamente orientada pelos seguintes princípios:"],
        items: [
          "Planejamento antes da execução.",
          "Padronização dos processos.",
          "Rastreabilidade das informações e decisões.",
          "Controle de revisões.",
          "Comunicação clara, objetiva e registrada.",
          "Cumprimento dos prazos estabelecidos.",
          "Atenção aos detalhes técnicos.",
          "Prevenção de erros e retrabalhos.",
          "Conformidade com normas técnicas, legislações e procedimentos aplicáveis.",
          "Utilização dos padrões e documentos oficiais da empresa.",
          "Registro das alterações e decisões técnicas.",
          "Melhoria contínua dos processos.",
        ],
      },
      {
        paragraphs: ["Exceções aos padrões estabelecidos devem ser previamente avaliadas e aprovadas pelo responsável técnico ou gestor competente."],
      },
    ],
  },
  {
    title: "Parte 3 — Estrutura de Engenharia e Arquitetura",
    subsections: [
      {
        heading: "Direção",
        items: [
          "Definir diretrizes estratégicas relacionadas à Engenharia e Arquitetura.",
          "Aprovar investimentos necessários à estrutura técnica.",
          "Aprovar ferramentas, sistemas e tecnologias utilizadas pela área.",
          "Apoiar a definição de padrões técnicos da empresa.",
          "Avaliar e decidir sobre questões críticas que envolvam prazo, custo, qualidade ou risco.",
          "Garantir recursos necessários para o adequado funcionamento da área.",
        ],
      },
      {
        heading: "Gerência / Coordenação de Engenharia e Arquitetura",
        items: [
          "Definir e manter os padrões técnicos da área.",
          "Coordenar as atividades de Engenharia e Arquitetura.",
          "Distribuir as demandas e atividades da equipe.",
          "Validar projetos e documentos técnicos.",
          "Supervisionar o desenvolvimento dos projetos.",
          "Acompanhar prazos e cronogramas.",
          "Garantir o cumprimento dos procedimentos técnicos.",
          "Realizar reuniões de alinhamento técnico.",
          "Acompanhar o status dos projetos nos sistemas oficiais.",
          "Coordenar revisões e liberações.",
          "Garantir a integração entre Engenharia, Arquitetura, Produção e Obras.",
          "Avaliar inconsistências técnicas.",
          "Orientar a equipe quanto aos padrões internos.",
          "Aprovar ou encaminhar para aprovação as alterações técnicas necessárias.",
          "Acompanhar indicadores e desempenho da área.",
          "Garantir a aplicação desta Política.",
        ],
      },
      {
        heading: "Engenheiro",
        items: [
          "Desenvolver e analisar soluções de engenharia.",
          "Elaborar e revisar documentos técnicos.",
          "Avaliar as informações técnicas dos projetos.",
          "Realizar análises e verificações pertinentes à sua responsabilidade.",
          "Validar informações técnicas conforme sua atribuição.",
          "Avaliar quantitativos.",
          "Apoiar a compatibilização dos projetos.",
          "Identificar interferências e inconsistências.",
          "Orientar projetistas e demais integrantes da equipe.",
          "Registrar alterações e decisões técnicas.",
          "Participar de reuniões de alinhamento.",
          "Acompanhar demandas técnicas relacionadas aos projetos.",
          "Garantir que os documentos sob sua responsabilidade estejam adequadamente revisados antes da liberação.",
        ],
      },
      {
        heading: "Arquiteto",
        items: [
          "Desenvolver projetos arquitetônicos.",
          "Elaborar plantas, layouts e demais documentos pertinentes à arquitetura.",
          "Realizar modelagem arquitetônica.",
          "Desenvolver soluções de acordo com as necessidades do projeto.",
          "Compatibilizar informações arquitetônicas com os demais projetos.",
          "Realizar revisões e ajustes.",
          "Registrar alterações de projeto.",
          "Garantir a organização dos arquivos.",
          "Participar das reuniões de alinhamento técnico.",
          "Identificar incompatibilidades e interferências.",
          "Garantir que os documentos arquitetônicos estejam atualizados antes da liberação.",
        ],
      },
      {
        heading: "Supervisor de Obras (interface com Engenharia)",
        items: [
          "Realizar o levantamento do escopo técnico da obra.",
          "Apoiar o levantamento das necessidades de materiais.",
          "Realizar a conferência entre projeto e realizado.",
          "Acompanhar a qualidade da execução.",
          "Realizar checklist técnico de entrega.",
          "Comunicar à Engenharia eventuais divergências identificadas.",
          "Manter comunicação com o responsável pela execução.",
          "Registrar ocorrências e necessidades de alteração.",
          "Apoiar a Engenharia na identificação de problemas de projeto observados durante a execução.",
        ],
      },
      {
        heading: "Projetista",
        items: [
          "Desenvolver projetos conforme padrões estabelecidos.",
          "Executar modelagem.",
          "Elaborar detalhamentos.",
          "Desenvolver plantas e documentos técnicos.",
          "Realizar revisões.",
          "Atualizar os projetos conforme orientações recebidas.",
          "Registrar informações e revisões.",
          "Manter os arquivos organizados conforme padrão.",
          "Utilizar bibliotecas e templates oficiais.",
          "Identificar e comunicar inconsistências.",
          "Apoiar os processos de compatibilização.",
          "Garantir que os arquivos estejam atualizados antes da liberação.",
        ],
      },
      {
        heading: "Estagiário de Engenharia / Arquitetura",
        items: [
          "Apoiar o desenvolvimento dos projetos.",
          "Apoiar atividades de modelagem.",
          "Apoiar a elaboração de desenhos e detalhamentos.",
          "Auxiliar na organização dos arquivos.",
          "Apoiar levantamentos e conferências.",
          "Auxiliar na atualização de documentos.",
          "Apoiar a elaboração de quantitativos.",
          "Apoiar a compatibilização.",
          "Reportar dúvidas e inconsistências ao responsável técnico.",
          "Executar atividades somente dentro das atribuições e supervisão estabelecidas.",
        ],
      },
    ],
  },
  {
    title: "Parte 4 — Padrões de Modelagem e Detalhamento",
    subsections: [
      {
        paragraphs: ["Todos os projetos devem seguir os padrões definidos pela FAST Homes. É obrigatório:"],
        items: [
          "Utilizar softwares homologados e aprovados pela empresa.",
          "Utilizar bibliotecas oficiais.",
          "Utilizar templates oficiais.",
          "Nomear arquivos conforme padrão interno.",
          "Manter estrutura de pastas organizada.",
          "Registrar revisões e alterações.",
          "Manter os arquivos atualizados.",
          "Seguir procedimentos e instruções técnicas vigentes.",
          "Utilizar os padrões gráficos definidos pela empresa.",
          "Garantir que as informações representadas estejam coerentes com os documentos técnicos.",
        ],
      },
    ],
  },
  {
    title: "Parte 5 — Desenvolvimento de Projetos",
    subsections: [
      {
        paragraphs: ["O desenvolvimento dos projetos deve ocorrer de forma organizada e rastreável. Cada projeto deve possuir, conforme sua aplicabilidade:"],
        items: [
          "Identificação.",
          "Documentos de referência.",
          "Responsáveis definidos.",
          "Controle de revisões.",
          "Plantas e documentos necessários.",
          "Modelagem.",
          "Detalhamentos.",
          "Quantitativos.",
          "Compatibilização.",
          "Validação.",
          "Registro de alterações.",
          "Liberação formal.",
        ],
      },
      {
        paragraphs: ["Nenhum documento deve ser considerado definitivo sem a respectiva revisão e aprovação conforme o fluxo interno."],
      },
    ],
  },
  {
    title: "Parte 6 — Compatibilização",
    subsections: [
      {
        paragraphs: ["A compatibilização deve buscar identificar e solucionar interferências entre os diferentes documentos e disciplinas envolvidas no projeto. Devem ser verificadas, quando aplicável:"],
        items: [
          "Interferências entre disciplinas.",
          "Divergências de informações.",
          "Conflitos de medidas.",
          "Conflitos de posicionamento.",
          "Incompatibilidades entre plantas.",
          "Incompatibilidades entre projeto e detalhamento.",
          "Divergências entre projeto e quantitativos.",
          "Demais inconsistências que possam comprometer a execução.",
        ],
      },
      {
        paragraphs: ["As incompatibilidades identificadas devem ser registradas e tratadas antes da liberação do projeto."],
      },
    ],
  },
  {
    title: "Parte 7 — Padrões de Quantificação e Orçamentação Técnica",
    subsections: [
      {
        paragraphs: ["A quantificação deve ser realizada com base nos documentos técnicos disponíveis e conforme os procedimentos estabelecidos. É obrigatório:"],
        items: [
          "Utilizar ferramentas homologadas.",
          "Utilizar a base gráfica correspondente ao projeto.",
          "Seguir os padrões de quantificação definidos.",
          "Conferir os quantitativos.",
          "Registrar as informações utilizadas.",
          "Garantir a rastreabilidade da origem dos quantitativos.",
          "Realizar revisão antes da liberação.",
        ],
      },
      {
        paragraphs: ["É proibida a elaboração de orçamento técnico detalhado sem base documental suficiente para garantir a confiabilidade dos quantitativos."],
      },
    ],
  },
  {
    title: "Parte 8 — Planejamento e Cronograma",
    subsections: [
      {
        paragraphs: ["Os projetos devem possuir planejamento compatível com as etapas previstas. Quando aplicável, devem ser estabelecidos:"],
        items: [
          "Cronograma de desenvolvimento do projeto.",
          "Prazo para modelagem.",
          "Prazo para detalhamento.",
          "Prazo para compatibilização.",
          "Prazo para revisão.",
          "Prazo para liberação.",
          "Interface com produção.",
          "Interface com obra.",
          "Marcos de aprovação.",
        ],
      },
      {
        paragraphs: ["Os cronogramas devem ser atualizados conforme o andamento real das atividades."],
      },
    ],
  },
  {
    title: "Parte 9 — Controle de Qualidade e Validação",
    subsections: [
      {
        paragraphs: ["Antes da liberação de um projeto, devem ser realizadas as verificações necessárias para garantir sua qualidade e consistência. Devem ser utilizados, conforme aplicabilidade:"],
        items: [
          "Revisão técnica.",
          "Checklist de liberação.",
          "Conferência dos documentos.",
          "Conferência dos quantitativos.",
          "Verificação de compatibilização.",
          "Controle de revisões.",
          "Registro de não conformidades.",
          "Ações corretivas.",
        ],
      },
      {
        paragraphs: ["A liberação somente deve ocorrer após o atendimento dos critérios estabelecidos para a respectiva etapa."],
      },
    ],
  },
  {
    title: "Parte 10 — Controle de Documentos e Revisões",
    subsections: [
      {
        paragraphs: ["Todos os documentos técnicos devem possuir controle adequado de revisão. As alterações devem:"],
        items: [
          "Ser identificadas.",
          "Possuir registro.",
          "Ser realizadas nos arquivos oficiais.",
          "Manter histórico quando aplicável.",
          "Ser comunicadas aos envolvidos.",
          "Substituir versões obsoletas conforme o procedimento interno.",
        ],
      },
      {
        paragraphs: ["Documentos desatualizados não devem ser utilizados para execução."],
      },
    ],
  },
  {
    title: "Parte 11 — Comunicação e Registros",
    subsections: [
      {
        paragraphs: ["Todas as demandas técnicas devem tramitar pelos sistemas oficiais definidos pela empresa. Devem ser registrados:"],
        items: [
          "Solicitações.",
          "Dúvidas técnicas.",
          "Alterações.",
          "Aprovações.",
          "Revisões.",
          "Pendências.",
          "Não conformidades.",
          "Decisões técnicas.",
          "Documentos relacionados.",
        ],
      },
      {
        paragraphs: [
          "Comentários e arquivos pertinentes devem ser anexados aos chamados ou registros correspondentes.",
          "As atualizações de acompanhamento devem ser realizadas no sistema oficial utilizado pela área.",
        ],
      },
    ],
  },
  {
    title: "Parte 12 — Liberação para Produção e Obra",
    subsections: [
      {
        paragraphs: ["A liberação de documentos para produção ou obra deve ocorrer somente após o cumprimento dos critérios técnicos estabelecidos. Antes da liberação, devem ser verificados, conforme aplicabilidade:"],
        items: [
          "Documentos necessários.",
          "Revisões.",
          "Compatibilização.",
          "Quantitativos.",
          "Detalhamentos.",
          "Aprovações.",
          "Pendências.",
          "Checklist de liberação.",
        ],
      },
      {
        paragraphs: ["A documentação liberada deve corresponder à versão vigente e aprovada."],
      },
    ],
  },
  {
    title: "Parte 13 — Não Conformidades",
    subsections: [
      {
        paragraphs: ["São consideradas não conformidades técnicas, entre outras:"],
        items: [
          "Utilização de projeto desatualizado.",
          "Falta de revisão.",
          "Divergência entre documentos.",
          "Incompatibilidade entre disciplinas.",
          "Erros de detalhamento.",
          "Divergência de quantitativos.",
          "Falta de informações necessárias à execução.",
          "Descumprimento dos padrões técnicos.",
          "Falta de registro de alterações.",
          "Liberação sem as aprovações necessárias.",
        ],
      },
      {
        paragraphs: [
          "As não conformidades devem ser registradas, analisadas e tratadas conforme sua criticidade.",
          "Quando necessário, devem ser estabelecidas ações corretivas e preventivas.",
        ],
      },
    ],
  },
  {
    title: "Parte 14 — Treinamento e Capacitação",
    subsections: [
      {
        paragraphs: ["Todos os colaboradores envolvidos nas atividades de Engenharia e Arquitetura devem receber treinamento adequado aos processos e responsabilidades de sua função. Os treinamentos devem contemplar, conforme aplicabilidade:"],
        items: [
          "Procedimentos técnicos.",
          "Padrões de projeto.",
          "Softwares utilizados.",
          "Sistemas internos.",
          "Padrões de modelagem.",
          "Quantificação.",
          "Compatibilização.",
          "Controle de documentos.",
          "Controle de revisões.",
          "Procedimentos de liberação.",
          "Normas e requisitos aplicáveis.",
        ],
      },
      {
        paragraphs: [
          "Novos colaboradores devem receber treinamento antes de assumir integralmente suas atividades.",
          "Treinamentos e capacitações realizados devem ser registrados.",
        ],
      },
    ],
  },
  {
    title: "Parte 15 — Gestão de Mudanças",
    subsections: [
      {
        paragraphs: ["Alterações relevantes nos processos, padrões técnicos, sistemas ou documentos devem seguir o processo interno de gerenciamento de mudanças. A solicitação de alteração deve apresentar:"],
        items: [
          "Motivo da alteração.",
          "Descrição da mudança.",
          "Impactos identificados.",
          "Documentos afetados.",
          "Responsável pela alteração.",
          "Aprovação necessária.",
        ],
      },
      {
        paragraphs: ["Após aprovação, os documentos e procedimentos afetados devem ser atualizados."],
      },
    ],
  },
  {
    title: "Parte 16 — Vigência, Revisão e Disposições Finais",
    subsections: [
      {
        heading: "Vigência e Revisão",
        paragraphs: ["Esta Política entra em vigor na data de sua publicação e deverá ser revisada:"],
        items: [
          "Anualmente; ou",
          "Sempre que houver alteração significativa nos processos.",
          "Quando houver alteração nos padrões técnicos.",
          "Quando houver alteração relevante nos sistemas utilizados.",
          "Quando houver alteração na estrutura da área.",
          "Quando forem identificadas necessidades de melhoria.",
        ],
      },
      {
        heading: "Disposições Finais",
        paragraphs: [
          "Esta Política consolida as diretrizes gerais da área de Engenharia e Arquitetura da FAST Homes, estabelecendo responsabilidades e padrões para desenvolvimento, análise, compatibilização, quantificação, planejamento, controle e liberação dos projetos.",
          "Seu cumprimento é obrigatório para todos os colaboradores envolvidos nas atividades abrangidas por esta Política.",
          "As atividades comerciais, vendas, prospecção, negociação, atendimento comercial, formalização de vendas e demais atividades exclusivamente comerciais não fazem parte do escopo desta Política e devem ser tratadas em documentos próprios da área Comercial.",
          "Da mesma forma, os procedimentos operacionais específicos de cada atividade devem ser detalhados em seus respectivos POPs, Instruções Técnicas, checklists e demais documentos do Sistema de Gestão.",
        ],
      },
    ],
  },
]
