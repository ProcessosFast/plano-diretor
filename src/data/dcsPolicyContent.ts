import type { PolicyPart } from "./cscPolicyContent"

export const DCS_POLICY_META = {
  codigo: "DCS.PO.001",
  versao: "01-2026",
  revisao: "01",
  vigencia: "2026",
  elaboracao: "Letícia Werneck",
  aprovacao: "Josiel Dias (Análise: Bruna Lanceloti — Wellington França)",
  responsavel: "Abastecimento — DCS-CM",
  classificacao: "Política Interna — Abastecimento de Lojas",
  finalidade:
    "Estabelecer as diretrizes, responsabilidades e critérios para o abastecimento das lojas DCS-CM, garantindo que a reposição de materiais seja realizada de forma planejada, padronizada, rastreável e alinhada à necessidade de estoque de cada unidade. A política assegura disponibilidade adequada de materiais, redução de rupturas, controle de cobertura e giro, padronização dos critérios de ressuprimento, cumprimento das grades de abastecimento, integração entre Abastecimento, Loja, Suprimentos, Faturamento, Expedição e Logística, rastreabilidade de todas as etapas via SULTS, autorização formal antes da movimentação da carga, correta entrada dos materiais no estoque da loja e redução de retrabalho e movimentações não planejadas.",
  objetivo:
    "Aplica-se a todas as áreas e colaboradores envolvidos no processo de abastecimento das lojas DCS-CM — Abastecimento DCS-CM, Lojas, Gerentes de Loja, Gerentes Regionais, Suprimentos, Faturamento, Expedição e Logística — contemplando tanto as lojas localizadas no Estado do Rio de Janeiro quanto as demais lojas do Brasil.",
}

export const DCS_POLICY_PARTS: PolicyPart[] = [
  {
    title: "Parte 1 — Diretrizes Gerais",
    subsections: [
      {
        paragraphs: ["O abastecimento das lojas deverá observar obrigatoriamente as seguintes diretrizes:"],
        items: [
          "O abastecimento deve ser realizado com base em dados de estoque e necessidade de ressuprimento.",
          "Todo abastecimento deve possuir rastreabilidade no SULTS.",
          "O Pedido de Venda (PDV) deve ser elaborado no SAP conforme os critérios estabelecidos nesta política.",
          "O abastecimento somente poderá prosseguir após a autorização formal da loja e do responsável regional, quando aplicável.",
          "As grades de abastecimento devem ser respeitadas para garantir planejamento operacional e logístico.",
          "Após a solicitação da coleta e definição do veículo, não devem ser incluídos novos materiais no pedido, salvo exceções devidamente autorizadas.",
          "Alterações após a composição da carga devem ser evitadas, pois podem impactar o carregamento, transporte e prazo de entrega.",
          "Toda etapa relevante deve ser registrada no chamado correspondente.",
          "O recebimento da mercadoria deve ser formalmente confirmado pela loja.",
          "A Nota Fiscal assinada deve ser anexada ao chamado para comprovação do recebimento.",
          "A movimentação do estoque da loja somente será considerada concluída após a realização dos respectivos trâmites de faturamento.",
        ],
      },
    ],
  },
  {
    title: "Parte 2 — Responsabilidades",
    subsections: [
      {
        heading: "Abastecimento DCS-CM",
        items: [
          "Analisar as necessidades de ressuprimento.",
          "Realizar a análise de estoque.",
          "Elaborar os Pedidos de Venda no SAP.",
          "Disponibilizar o PDV no chamado.",
          "Acompanhar a autorização da loja e do gerente regional.",
          "Garantir o cumprimento das grades de abastecimento.",
          "Acionar as áreas envolvidas nos respectivos momentos do processo.",
          "Acompanhar faturamento, expedição e logística.",
          "Garantir a rastreabilidade das etapas no SULTS.",
          "Acompanhar o recebimento da mercadoria.",
          "Solicitar/acompanhar a entrada do material no estoque da loja.",
          "Garantir a finalização do chamado após a conclusão do processo.",
        ],
      },
      {
        heading: "Loja",
        items: [
          "Realizar a solicitação de abastecimento quando aplicável.",
          "Disponibilizar as informações necessárias.",
          "Analisar o Pedido de Venda encaminhado.",
          "Informar divergências ou necessidades de ajuste dentro do prazo estabelecido.",
          "Fornecer autorização formal para o abastecimento.",
          "Acompanhar o recebimento.",
          "Conferir os materiais recebidos.",
          "Confirmar o recebimento no chamado.",
          "Anexar a Nota Fiscal devidamente assinada.",
        ],
      },
      {
        heading: "Gerente Regional",
        items: [
          "Acompanhar os abastecimentos das lojas sob sua responsabilidade.",
          "Participar da validação dos pedidos quando solicitado.",
          "Validar alterações relevantes no pedido.",
          "Garantir que o abastecimento esteja coerente com a necessidade da unidade.",
        ],
      },
      {
        heading: "Suprimentos",
        items: [
          "Apoiar a análise de disponibilidade dos materiais.",
          "Verificar eventuais indisponibilidades.",
          "Informar prazos de atendimento quando houver falta de material.",
          "Apoiar o planejamento de reposição.",
        ],
      },
      {
        heading: "Faturamento",
        items: [
          "Realizar os trâmites fiscais necessários.",
          "Emitir a Nota Fiscal de transferência.",
          "Realizar ou apoiar a entrada do material no estoque da loja.",
          "Concluir os procedimentos fiscais relacionados ao abastecimento.",
        ],
      },
      {
        heading: "Expedição",
        items: [
          "Realizar a separação e carregamento conforme pedido liberado.",
          "Conferir a carga.",
          "Informar a liberação do material.",
          "Comunicar eventuais ocorrências relacionadas ao carregamento.",
        ],
      },
      {
        heading: "Logística",
        items: [
          "Realizar o planejamento do transporte.",
          "Definir ou disponibilizar o veículo adequado.",
          "Realizar a programação da coleta.",
          "Acompanhar o transporte até a entrega à loja.",
        ],
      },
    ],
  },
  {
    title: "Parte 3 — Processo de Abastecimento (Visão Geral)",
    subsections: [
      {
        paragraphs: ["O processo de abastecimento é composto, de forma geral, pelas seguintes etapas:"],
        items: [
          "Análise da necessidade → Montagem do PDV → Validação/Autorização → Faturamento → Logística → Expedição → Transporte → Recebimento → Entrada em estoque → Encerramento do chamado.",
        ],
      },
    ],
  },
  {
    title: "Parte 4 — Abastecimento das Lojas do Rio de Janeiro",
    subsections: [
      {
        heading: "Frequência da Análise",
        paragraphs: ["A análise de abastecimento das lojas do Rio de Janeiro deve ser realizada diariamente, considerando a grade logística estabelecida."],
      },
      {
        heading: "Extração e Tratamento dos Dados",
        paragraphs: ["O responsável pelo abastecimento deverá:"],
        items: [
          "Acessar o SAP.",
          "Extrair o Relatório Geral de Estoque.",
          "Exportar os dados para Excel.",
          "Excluir informações que não façam parte do ciclo de análise.",
          "Manter somente as lojas que serão analisadas.",
          "Estruturar a base em formato de tabela.",
          "Realizar a análise conforme os critérios definidos nesta política.",
        ],
      },
      {
        heading: "Critérios de Análise",
        paragraphs: ["A análise deverá considerar, no mínimo:"],
        items: [
          "Giro dos últimos 90 dias.",
          "Estoque atual.",
          "Estoque físico.",
          "Estoque disponível.",
          "Materiais em ressuprimento.",
          "Cobertura em dias.",
          "Itens em ruptura.",
          "Grade fixa de abastecimento.",
          "Necessidade de reposição da loja.",
        ],
      },
      {
        paragraphs: ["A quantidade a ser abastecida deverá ser definida considerando a necessidade identificada na análise e os parâmetros de estoque estabelecidos para cada loja/material."],
      },
      {
        heading: "Grade de Atendimento — Rio de Janeiro",
        items: [
          "Segunda-feira: Alcântara, Centro, Nova Iguaçu, Caxias e São João.",
          "Terça-feira: Campo Grande, Curicica, Bonsucesso e Ramos.",
          "Quarta-feira: Alcântara, Nova Iguaçu, Caxias e São João.",
          "Quinta-feira: Centro, Campo Grande e Ramos.",
          "Sexta-feira: Curicica e Bonsucesso.",
        ],
      },
      {
        heading: "Montagem do Pedido de Venda",
        paragraphs: ["Após a análise:"],
        items: [
          "Selecionar a loja a ser abastecida.",
          "Acessar o SAP.",
          "Criar o Pedido de Venda.",
          "Inserir os materiais definidos na análise.",
          "Conferir o pedido.",
          "Salvar o PDV.",
          "Gerar o PDF do pedido.",
          "Abrir o chamado correspondente no SULTS.",
          "Direcionar o chamado à loja.",
          "Adicionar o Gerente Regional.",
          "Anexar o PDF do PDV.",
          "Registrar informações complementares quando necessário.",
        ],
      },
      {
        heading: "Prazo para Manifestação da Loja",
        paragraphs: [
          "A loja deverá analisar o pedido e manifestar-se até as 15h do mesmo dia.",
          "A manifestação deverá indicar concordância com o pedido, ou necessidade de alteração, apresentando a justificativa correspondente.",
        ],
      },
      {
        heading: "Validação do Pedido — Aprovado",
        paragraphs: ["Quando a loja estiver de acordo:"],
        items: [
          "A loja deverá registrar a autorização formal no chamado.",
          "O abastecimento seguirá para os trâmites operacionais.",
        ],
      },
      {
        heading: "Validação do Pedido — Não Aprovado",
        paragraphs: ["Quando a loja solicitar alteração:"],
        items: [
          "O Abastecimento deverá analisar a solicitação.",
          "Caso pertinente, deverá atualizar o PDV no SAP.",
          "O novo documento deverá ser anexado ao chamado.",
          "A alteração deverá ser registrada no chamado.",
          "O Gerente Regional deverá validar a coerência do pedido.",
          "O abastecimento somente seguirá após a autorização formal.",
        ],
      },
    ],
  },
  {
    title: "Parte 5 — Abastecimento das Lojas Fora do Rio de Janeiro",
    subsections: [
      {
        heading: "Solicitação",
        paragraphs: ["As lojas localizadas fora do Estado do Rio de Janeiro deverão solicitar o abastecimento por meio de chamado no SULTS, direcionado ao setor de Abastecimento DCS. O chamado deverá conter:"],
        items: [
          "Solicitação de abastecimento.",
          "PDF da cotação.",
          "Informações necessárias para identificação da necessidade.",
        ],
      },
      {
        paragraphs: ["A solicitação deverá ser realizada com antecedência mínima de uma semana em relação ao dia previsto para carregamento."],
      },
      {
        heading: "Análise da Solicitação",
        paragraphs: ["Após o recebimento do chamado:"],
        items: [
          "Suprimentos/Abastecimento deverá analisar a solicitação.",
          "Deverá ser verificada a disponibilidade dos materiais no DCS.",
          "O Gerente Regional deverá ser incluído no chamado.",
        ],
      },
      {
        heading: "Há disponibilidade de todo o material?",
        items: [
          "SIM: seguir para montagem do Pedido de Venda.",
          "NÃO: registrar no chamado quais materiais não estão disponíveis e informar a previsão/prazo de atendimento, quando aplicável.",
        ],
      },
      {
        heading: "Montagem e Autorização",
        items: [
          "Montar o Pedido de Venda no SAP.",
          "Conferir os materiais e quantidades.",
          "Anexar o PDV ao chamado.",
          "Solicitar a autorização formal da loja.",
          "Garantir a validação do Gerente Regional.",
          "Seguir a grade de abastecimento previamente estabelecida.",
        ],
      },
      {
        paragraphs: ["O abastecimento somente será considerado autorizado após o registro formal das aprovações necessárias no chamado."],
      },
    ],
  },
  {
    title: "Parte 6 — Grade de Abastecimento: Demais Lojas do Brasil",
    subsections: [
      {
        items: [
          "Segunda-feira: Mato Grosso.",
          "Quarta-feira: Mogi*, Tijucas* e Curitiba.",
          "Quinta-feira: Serra* e Juiz de Fora.",
          "Sexta-feira: Feira de Santana e Camaçari.",
        ],
      },
      {
        paragraphs: [
          "* Lojas atendidas conforme necessidade, respeitando o respectivo dia da semana.",
          "O pedido deverá ser enviado com uma semana de antecedência em relação ao carregamento.",
        ],
      },
    ],
  },
  {
    title: "Parte 7 — Bloqueio de Alterações Após Programação da Carga",
    subsections: [
      {
        paragraphs: ["Após a solicitação da coleta e a definição do tipo de veículo, o pedido deverá ser considerado bloqueado para novas inclusões ou alterações de materiais. Essa regra tem como objetivo evitar impactos em:"],
        items: [
          "Composição da carga.",
          "Capacidade do veículo.",
          "Planejamento de expedição.",
          "Roteirização.",
          "Prazo de entrega.",
          "Documentação fiscal.",
          "Custos logísticos.",
        ],
      },
      {
        paragraphs: ["Exceções somente poderão ocorrer em situações específicas e mediante autorização da Diretoria de Supply."],
      },
    ],
  },
  {
    title: "Parte 8 — Trâmites Operacionais",
    subsections: [
      {
        paragraphs: ["Após a autorização do abastecimento, o processo deverá seguir a sequência operacional estabelecida."],
      },
      {
        heading: "Faturamento",
        paragraphs: ["O Abastecimento deverá adicionar o Faturamento ao chamado para realização dos procedimentos necessários à:"],
        items: ["Emissão da Nota Fiscal de transferência.", "Movimentação fiscal.", "Entrada do material no estoque da loja."],
      },
      {
        heading: "Logística",
        paragraphs: ["Após o pedido estar completamente montado e liberado:"],
        items: [
          "O Abastecimento deverá adicionar a Log ao chamado.",
          "A Logística deverá realizar os procedimentos de transporte.",
          "Deverá ser definida a programação da coleta e o veículo adequado.",
        ],
      },
      {
        heading: "Expedição",
        paragraphs: ["Após o retorno da Logística:"],
        items: [
          "O Abastecimento deverá adicionar a Expedição ao chamado.",
          "A Expedição deverá realizar a separação e o carregamento.",
          "A carga deverá ser conferida.",
          "A Expedição deverá comunicar a liberação da carga.",
        ],
      },
      {
        heading: "Transporte",
        paragraphs: ["Após a liberação da carga:"],
        items: [
          "A Logística deverá realizar o transporte.",
          "A mercadoria deverá ser entregue à loja.",
          "Eventuais ocorrências deverão ser registradas no chamado.",
        ],
      },
    ],
  },
  {
    title: "Parte 9 — Recebimento pela Loja",
    subsections: [
      {
        paragraphs: ["No recebimento da mercadoria, a Loja deverá:"],
        items: [
          "Receber a carga.",
          "Conferir os materiais recebidos.",
          "Verificar possíveis divergências.",
          "Confirmar o recebimento no chamado.",
          "Anexar a Nota Fiscal devidamente assinada.",
          "Registrar eventuais ocorrências ou divergências identificadas.",
        ],
      },
      {
        paragraphs: ["A confirmação do recebimento deverá ocorrer no próprio chamado, garantindo a rastreabilidade do processo."],
      },
    ],
  },
  {
    title: "Parte 10 — Entrada no Estoque e Finalização",
    subsections: [
      {
        paragraphs: ["Após o recebimento:"],
        items: [
          "O Abastecimento deverá verificar se a documentação necessária está anexada ao chamado.",
          "Caso necessário, deverá adicionar o Faturamento ao chamado.",
          "O Faturamento deverá realizar a entrada do material no estoque da loja.",
          "O Abastecimento deverá acompanhar a conclusão do procedimento.",
          "Após a confirmação da entrada e conclusão das etapas, o chamado deverá ser finalizado.",
        ],
      },
      {
        paragraphs: ["O chamado somente deverá ser encerrado quando houver evidência de que o processo foi concluído."],
      },
    ],
  },
  {
    title: "Parte 11 — Rastreabilidade",
    subsections: [
      {
        paragraphs: ["O SULTS deverá ser utilizado como canal oficial de registro e rastreabilidade do processo de abastecimento. Devem permanecer registrados, conforme aplicável:"],
        items: [
          "Solicitação da loja.",
          "Cotação.",
          "Análise do abastecimento.",
          "Pedido de Venda.",
          "Alterações realizadas.",
          "Autorizações.",
          "Informações de disponibilidade.",
          "Acionamento das áreas.",
          "Informações logísticas.",
          "Documentos fiscais.",
          "Confirmação de recebimento.",
          "Nota Fiscal assinada.",
          "Conclusão da entrada em estoque.",
          "Encerramento do chamado.",
        ],
      },
      {
        paragraphs: ["Comunicações realizadas fora do chamado que impactem o processo deverão ser formalizadas posteriormente no próprio chamado."],
      },
    ],
  },
  {
    title: "Parte 12 — Controles do Processo",
    subsections: [
      {
        paragraphs: ["O responsável pelo Abastecimento deverá acompanhar, no mínimo, os seguintes controles:"],
        items: [
          "Cobertura de estoque — identificar risco de excesso ou ruptura.",
          "Giro 90 dias — avaliar comportamento de consumo.",
          "Ruptura — identificar necessidade crítica de reposição.",
          "Disponibilidade de material — confirmar capacidade de atendimento.",
          "Cumprimento da grade — garantir planejamento logístico.",
          "Prazo de autorização — evitar atrasos no processo.",
          "Pedidos alterados após aprovação — reduzir retrabalho.",
          "Pedidos alterados após programação de carga — controlar impactos operacionais.",
          "Entregas realizadas — acompanhar cumprimento do abastecimento.",
          "Confirmação de recebimento — garantir rastreabilidade.",
          "Entrada em estoque — garantir conclusão do processo.",
        ],
      },
    ],
  },
  {
    title: "Parte 13 — Tratamento de Exceções",
    subsections: [
      {
        paragraphs: ["Situações que fujam ao fluxo padrão deverão ser formalmente registradas no chamado, contendo:"],
        items: [
          "Motivo da exceção.",
          "Impacto no abastecimento.",
          "Área responsável pela tratativa.",
          "Autorização necessária.",
          "Decisão tomada.",
          "Data da ocorrência.",
        ],
      },
      {
        paragraphs: ["Exceções que impliquem alteração de carga após programação da coleta deverão observar obrigatoriamente a autorização prevista nesta política."],
      },
    ],
  },
  {
    title: "Parte 14 — Não Conformidades",
    subsections: [
      {
        paragraphs: ["São consideradas não conformidades, entre outras:"],
        items: [
          "Abastecimento sem autorização formal.",
          "Ausência de registro no SULTS.",
          "Alteração de carga sem autorização.",
          "Inclusão de materiais após bloqueio da carga.",
          "Descumprimento injustificado da grade.",
          "Ausência de Nota Fiscal assinada.",
          "Ausência de confirmação de recebimento.",
          "Divergência entre PDV, carga e documentação fiscal.",
          "Ausência de evidência da entrada do material no estoque da loja.",
        ],
      },
      {
        paragraphs: ["As não conformidades deverão ser registradas e tratadas conforme os procedimentos internos aplicáveis."],
      },
    ],
  },
  {
    title: "Parte 15 — Fluxo Resumido",
    subsections: [
      {
        heading: "Lojas RJ",
        paragraphs: ["Análise diária → Análise de estoque → Montagem do PDV → Envio à Loja → Retorno até 15h → Autorização → Faturamento → Logística → Expedição → Carregamento → Transporte → Recebimento → NF assinada → Entrada em estoque → Finalização do chamado."],
      },
      {
        heading: "Lojas fora do RJ",
        paragraphs: ["Solicitação da Loja → Cotação → Análise de disponibilidade → PDV → Autorização Loja/Regional → Faturamento → Logística → Expedição → Carregamento → Transporte → Recebimento → NF assinada → Entrada em estoque → Finalização do chamado."],
      },
    ],
  },
  {
    title: "Parte 16 — Indicadores Recomendados",
    subsections: [
      {
        paragraphs: ["Para acompanhamento da eficiência do processo, recomenda-se monitorar:"],
        items: [
          "% de abastecimentos realizados dentro da grade.",
          "% de pedidos autorizados dentro do prazo.",
          "% de rupturas de estoque.",
          "% de pedidos com alteração após montagem.",
          "% de cargas alteradas após programação.",
          "% de entregas realizadas no prazo.",
          "% de chamados finalizados corretamente.",
          "% de recebimentos com confirmação formal.",
          "% de entradas em estoque concluídas.",
          "Quantidade de não conformidades no processo.",
        ],
      },
    ],
  },
  {
    title: "Parte 17 — Disposições Finais",
    subsections: [
      {
        paragraphs: [
          "O cumprimento desta política é obrigatório para todas as áreas envolvidas no processo de abastecimento das lojas DCS-CM.",
          "Qualquer alteração no fluxo, nos critérios de abastecimento, nas responsabilidades ou nas grades deverá ser formalmente avaliada e incorporada à documentação vigente.",
          "Esta política deverá ser revisada sempre que houver alteração relevante nos processos, sistemas, estrutura organizacional, estratégia de abastecimento ou modelo logístico.",
        ],
      },
    ],
  },
]
