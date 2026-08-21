import type { PolicyPart } from "./cscPolicyContent"

export const VIAGENS_POLICY_META = {
  codigo: "ADM.019.01",
  versao: "01-2026",
  revisao: "03",
  vigencia: "2026",
  elaboracao: "Administrativo CSC",
  aprovacao: "—",
  responsavel: "Administrativo CSC",
  classificacao: "Procedimento Operacional Padrão — Transversal",
  finalidade:
    "Definir os critérios, procedimentos e responsabilidades a serem seguidos pelos colaboradores para despesas com viagens, alimentação, transporte, locomoção e outras, quando realizadas exclusivamente a serviço da empresa.",
  objetivo:
    "Toda despesa, para ser reembolsada, precisa estar previamente autorizada e documentada. Despesas de viagem só são aceitas se obedecerem aos limites pré-estabelecidos. Despesas com bebidas alcoólicas não são reembolsadas e não devem constar na nota fiscal da refeição; se constatadas, a nota não será aceita. Comprovantes e anexos devem estar legíveis — a ilegibilidade pode inviabilizar o reembolso.",
}

export const VIAGENS_POLICY_PARTS: PolicyPart[] = [
  {
    title: "Parte 1 — Responsáveis",
    subsections: [
      {
        items: [
          "Colaborador (solicitante): solicita a viagem, realiza as despesas e presta contas.",
          "Gestor / Diretor direto: aprova a solicitação de viagem dentro de sua alçada, aprova reembolso de despesas dentro da sua alçada.",
          "CEO: aprova as viagens programadas e os custos da mesma, autoriza previamente a compra de brindes e a contratação de serviços.",
          "Administrativo CSC: cota despesas da viagem como passagens e hotéis, realiza reservas e registra as informações da viagem quando programadas.",
          "Auditoria: confere a prestação de contas e devolve em caso de divergências.",
        ],
      },
    ],
  },
  {
    title: "Parte 2 — Solicitação de Viagem",
    subsections: [
      {
        paragraphs: ["Prazo mínimo: 15 dias de antecedência."],
        items: [
          "1. Colaborador envia e-mail de solicitação com cópia para o Gestor (com alçada) e para a diretoria/CEO.",
          "2. Colaborador preenche o assunto no formato: \"SOLICITAÇÃO DE VIAGEM – Destino – Data prevista de ida\".",
          "3. Colaborador inclui no corpo do e-mail: nome do viajante, centro de custo, motivo da viagem, data de ida, data de volta e tipo de transporte.",
          "4. Gestor / Líder direto aprova a viagem respondendo à mensagem com \"Aprovado\".",
          "5. Diretor de Governança e Tecnologia / CEO aprova a viagem respondendo à mensagem com \"Aprovado\".",
        ],
      },
      {
        heading: "Modelo de e-mail (exemplo)",
        paragraphs: [
          "Assunto: SOLICITAÇÃO DE VIAGEM – São Paulo – 01/08/26",
          "Solicito passagem e hotel conforme descrito abaixo: Nome do viajante; Centro de custo; Motivo da viagem; Data da ida; Data da volta; Tipo de transporte.",
        ],
      },
      {
        heading: "Cotação e reservas (após aprovação)",
        items: [
          "1. Colaborador copia o setor Administrativo CSC para cotação das despesas inerentes à viagem.",
          "2. Administrativo CSC realiza a cotação e responde ao e-mail com os custos previstos.",
          "3. Diretoria aprova os custos previstos.",
          "4. Administrativo CSC realiza as reservas e inclui as informações da viagem no e-mail.",
        ],
      },
    ],
  },
  {
    title: "Parte 3 — Execução da Viagem (Limites Pré-Autorizados)",
    subsections: [
      {
        heading: "Deslocamento",
        items: [
          "Passagem aérea — classe econômica, reserva com antecedência sempre que possível — sem teto, definido por trecho.",
          "Passagem rodoviária / ônibus — trajeto a serviço da empresa — sem teto, definido por trecho.",
          "Combustível — somente quando é deslocamento a serviço — R$ 1,80/km.",
          "Pedágio — vinculado à rota da viagem — reembolso integral.",
          "Locação de veículo — categoria compatível com a necessidade da viagem — com aprovação da CEO.",
          "Táxi / aplicativo (Uber, 99) — trajetos a serviço durante a viagem — até R$ 300,00/dia com justificativa de rota.",
          "Estacionamento — vinculado ao período da viagem — R$ 20,00/dia.",
        ],
      },
      {
        heading: "Hospedagem",
        items: [
          "Diária de hotel — padrão econômico/executivo conforme política; não inclui frigobar e extras pessoais — até R$ 400,00 com justificativa.",
        ],
      },
      {
        heading: "Alimentação",
        items: [
          "Café da manhã — quando não incluso na diária do hotel — R$ 30,00.",
          "Almoço — refeição individual do colaborador em viagem — R$ 35,00.",
          "Jantar — refeição individual do colaborador em viagem — R$ 35,00.",
        ],
      },
      {
        paragraphs: ["As despesas de viagem não contempladas nesta tabela estão sujeitas à autorização prévia para reembolso."],
      },
    ],
  },
  {
    title: "Parte 4 — Prestação de Contas e Reembolso de Despesas",
    subsections: [
      {
        paragraphs: ["Prazo: até 7 dias após a despesa realizada. O reembolso ocorre conforme o fluxo de pagamento."],
        items: [
          "1. Colaborador preenche o chamado com: nome, cargo, centro de custo, nome do gestor imediato e motivo da despesa.",
          "2. Colaborador descreve o centro de custo em cada linha do formulário (em geral, o do funcionário).",
          "3. Colaborador justifica cada despesa conforme as regras de justificativa das despesas.",
          "4. Colaborador nomeia cada anexo de acordo com a despesa e o nº do item do formulário.",
          "5. Colaborador abre chamado no SULTS para Administrativo > Pagamentos > Reembolsos, anexa os comprovantes na mesma ordem das despesas do formulário e inclui todas as autorizações no anexo. Deve ser anexada a autorização da diretoria/CEO — podendo ser autorização dentro do próprio chamado, ou um print do WhatsApp anexado ao chamado.",
          "6. Auditoria confere a prestação de contas; havendo divergências, devolve o formulário ao colaborador para tratativas.",
          "7. Financeiro efetua o reembolso conforme o fluxo de pagamento.",
        ],
      },
    ],
  },
  {
    title: "Parte 5 — Despesas Avulsas: Regras de Justificativa",
    subsections: [
      {
        heading: "Operacional / Escritório",
        items: [
          "Material de escritório — compras pontuais autorizadas — até R$ 100,00.",
          "Correios / envio / motoboy — envio de documentos ou encomendas a serviço — valor integral.",
          "Ferramentas / EPIs — aquisição emergencial autorizada pela diretoria — R$ 1.000,00.",
        ],
      },
      {
        heading: "Serviços e Deslocamentos a Serviço",
        items: [
          "Café / coffee break de reunião — reunião de trabalho com participantes — com aprovação da Diretoria.",
          "Estacionamento avulso — deslocamento local a serviço — R$ 20,00.",
          "Combustível — somente veículo próprio ou da empresa em viagem a serviço, e deslocamentos entre filiais quando solicitado — R$ 1,80 por km.",
          "Táxi / aplicativo local — deslocamento local a serviço, fora de viagem — até R$ 300,00/dia com justificativa de rota.",
        ],
      },
      {
        heading: "Outros",
        items: [
          "Taxas cartoriais / documentação — documentos exigidos para a operação — valor integral.",
          "Brindes — para dinâmicas, eventos, reuniões, datas comemorativas — aprovado pela CEO, dar preferência a compra antecipada.",
          "Contratação de serviços de terceiros — sob necessidade emergencial (ex.: conserto de equipamento) — reembolso integral com justificativa comprovada.",
          "Despesas emergenciais em obra — gastos imprevistos autorizados pelo responsável da obra — até R$ 2.000,00 por ocorrência; acima disso, apenas com autorização da Diretoria.",
          "Bebidas não alcoólicas e alimentos para unidade — aprovados previamente pela Gerência da Loja / Diretoria da unidade, respeitando a alçada de autorização — até R$ 100,00.",
        ],
      },
      {
        paragraphs: ["As despesas não contempladas nesta tabela estão sujeitas à autorização prévia para reembolso."],
      },
    ],
  },
  {
    title: "Parte 6 — Alçada de Aprovação (Regra Central)",
    subsections: [
      {
        paragraphs: ["Para reembolso de despesas, respeitar a alçada de aprovação de valores:"],
        items: [
          "Gerente: até R$ 150,00.",
          "Diretor da Unidade: acima de R$ 150,00 e até R$ 1.500,00.",
          "CEO: acima de R$ 1.500,00.",
        ],
      },
      {
        paragraphs: ["Ver o detalhamento completo por cargo na aba Matriz de Alçadas (linha \"Reembolso de Despesas Avulsas\")."],
      },
    ],
  },
  {
    title: "Parte 7 — Contratação de Serviços / Compra de Produtos de Alto Valor",
    subsections: [
      {
        paragraphs: [
          "A autorização da CEO deve ser formal e anterior ao gasto, seguindo a mesma lógica da solicitação de viagem: aprovação pela resposta com \"Aprovado\". O e-mail de pedido precisa conter: o que será comprado/contratado, fornecedor, valor estimado, centro de custo e justificativa da necessidade. Sem esse registro anexado à prestação de contas, o reembolso é recusado. Em caso de urgência, solicitar o \"de acordo\" pelo WhatsApp.",
          "Em casos onde não houver possibilidade de tratativa prévia, a justificativa deve ser posterior, mas de qualquer forma é necessária a autorização para lançamento deste reembolso.",
        ],
      },
      {
        heading: "Cotação",
        paragraphs: ["Reembolsos de despesas acima de R$ 1.500,00 exigem no mínimo 3 orçamentos ou justificativa por escrito de fornecedor único (exclusividade, urgência, contrato vigente). Isso evita reembolso de compra superfaturada."],
      },
      {
        heading: "Documentação obrigatória",
        items: [
          "Nota fiscal ou cupom fiscal.",
          "Comprovante de pagamento (o que mostra que o colaborador de fato pagou).",
          "O e-mail/mensagem de WhatsApp de autorização prévia com a alçada determinada.",
          "Os orçamentos, quando exigidos.",
        ],
      },
      {
        paragraphs: ["Documento ilegível → não reembolsa."],
      },
    ],
  },
  {
    title: "Parte 8 — O que não é Reembolsável e Prazos",
    subsections: [
      {
        heading: "O que não é reembolsável",
        paragraphs: ["Itens de uso pessoal, bens de valor que deveriam entrar no patrimônio via processo de compra formal (ativos/imobilizado), bebidas alcoólicas, multas, e qualquer gasto sem autorização prévia."],
      },
      {
        heading: "Prazos",
        paragraphs: [
          "Prestação de contas em até 7 dias após a compra; reembolso conforme o fluxo de pagamento.",
          "Regra: prioritariamente a compra deve ser feita direto pela empresa (setor Compras), não por reembolso. O reembolso é exceção, para casos de urgência e necessidade ou baixo valor de compra — não é o caminho padrão.",
        ],
      },
    ],
  },
]
