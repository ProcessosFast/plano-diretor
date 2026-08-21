import type { PolicyPart } from "./cscPolicyContent"

export const LOGEXPRESS_POLICY_META = {
  codigo: "LOG.PI.005.01",
  versao: "01",
  revisao: "01",
  vigencia: "2026",
  elaboracao: "Ariene Santos",
  aprovacao: "Márcio Machado",
  responsavel: "Logexpress — Transporte e Logística",
  classificacao: "Política Interna — Logexpress",
  finalidade:
    "Garantir que todas as etapas relacionadas aos processos de logística e abastecimento — incluindo análise e liberação de chamados, planejamento operacional, captação e contratação de frete, validação documental, gerenciamento de risco, gestão de transporte, acompanhamento de coleta e entrega, controle de descarga, gestão de avarias, emissão de documentos operacionais, lançamento de pagamentos e controle de SLA logístico — sejam executadas de forma estruturada, padronizada, integrada e rastreável, reduzindo riscos operacionais, logísticos, financeiros e de abastecimento.",
  objetivo:
    "Toda solicitação, movimentação, registro, validação, aprovação, contratação, liberação, comunicação e decisão relacionada aos processos de logística e abastecimento deve ser formalmente registrada nos sistemas oficiais e plataformas designadas (SULTS, SOFIT, SharePoint, e-mails corporativos, grupos corporativos de WhatsApp e controles internos), contendo as informações mínimas necessárias para cada operação. Processos fora dos canais oficiais ou sem registro não são considerados válidos. A política deve ser revisada e auditada semestralmente, com ações corretivas formalmente registradas para eventuais não conformidades.",
}

export const LOGEXPRESS_POLICY_PARTS: PolicyPart[] = [
  {
    title: "Parte 1 — Abrangência, Conduta e Jornada",
    subsections: [
      { heading: "Abrangência", paragraphs: ["Aplica-se a todos os colaboradores envolvidos direta ou indiretamente nos processos de recrutamento, seleção, aprovação, contratação e integração de novos colaboradores."] },
      {
        heading: "Conduta, Ética e Medidas Disciplinares",
        items: [
          "Proibição de assédio, discriminação e qualquer forma de violência e bullying.",
          "Obrigatório o uso adequado dos bens da empresa (equipamentos e materiais).",
          "Proibição de álcool e drogas durante o trabalho.",
          "Proibido o uso de roupas inadequadas como croppeds, roupas de alça, shorts, saias curtas, leggings, regata, ficar sem camisa e uso de chinelo durante a jornada de trabalho.",
          "É proibido oferecer, prometer, solicitar ou aceitar qualquer tipo de suborno, vantagem indevida, pagamento, presente ou brinde que possa influenciar, ou aparentar influenciar, decisões profissionais ou comerciais, em desacordo com o Código de Ética da empresa.",
          "Medidas disciplinares poderão ser aplicadas de forma hierárquica: orientação, advertência verbal, por escrita, suspensão e desligamento, conforme gravidade.",
          "A retirada de equipamentos e materiais da empresa somente será permitida mediante autorização prévia da liderança responsável.",
        ],
      },
      {
        heading: "Jornada de Trabalho e Intervalos",
        items: [
          "Carga horária de trabalho: 44hs semanais.",
          "É permitida hora extra previamente acordada entre supervisor e colaboradores.",
          "Almoço: 1 (uma) hora, preferencialmente entre 12h00 e 14h00.",
        ],
      },
      {
        heading: "Limpeza, Higiene e Organização",
        paragraphs: ["A limpeza e a organização são essenciais para segurança, qualidade e conforto. É responsabilidade da equipe de ASG; no entanto, o colaborador deve zelar pela limpeza do ambiente de trabalho."],
        items: [
          "Cozinha/Refeitório: limpeza após cada refeição — limpar bancadas, pias, mesas e bancos, higienizar utensílios, descartar resíduos corretamente; proibido armazenar produtos estragados.",
          "Escritórios e sala de reunião: todos os colaboradores devem manter a área de trabalho limpa e organizada, descartando resíduos nos locais corretos.",
        ],
      },
    ],
  },
  {
    title: "Parte 2 — Gestão de Transporte Logístico Interestadual e São Paulo",
    subsections: [
      {
        heading: "Prazos",
        items: [
          "Análise do chamado para captação de frete: até as 10hs.",
          "Redirecionamento de carga: até as 10hs.",
          "Captação e coleta de frete: até 24hs.",
          "Cobrança de loja: até as 12hs.",
          "Pagamento de frete: até as 13hs.",
          "Envio do contrato ao motorista contratado: ao finalizar o gerenciamento de risco.",
          "Tempo de estadia no cliente/fornecedor: até 4hs.",
          "Pit stop no CD DCS: até 1h30.",
          "Cotação de frete: início da análise a partir das 14hs, com prazo de até 1h para resposta.",
        ],
      },
      {
        heading: "Pagamentos",
        items: [
          "Sinal de 70% após o envio da nota fiscal de coleta na fábrica — considerado adiantamento de viagem.",
          "Saldo de 30% após o envio do canhoto da nota fiscal assinado pelo cliente final.",
          "Pedágio: pago separadamente do valor do frete, para comprovar à ANTT (quando necessário) que a empresa contratante arca com essa despesa.",
          "O pagamento dos valores acordados só pode ser feito na conta cadastrada do motorista na ANTT.",
        ],
      },
      {
        heading: "Validação Documental",
        items: [
          "Todos os documentos obrigatórios devem ser recebidos e validados antes da continuidade do processo.",
          "Documentos ilegíveis ou incompletos devem ser solicitados novamente ao motorista.",
          "Documentos do motorista verificados na gerenciadora de risco em toda primeira viagem; posteriormente, uma vez ao mês.",
          "Motoristas não aprovados pela gerenciadora de risco não podem realizar fretes na empresa.",
          "Ao chegar na fábrica, o motorista deve realizar chamada de vídeo com o operador logístico para validar identidade e placa do caminhão.",
          "É imprescindível que o motorista envie a foto do checklist fornecido pela Placo.",
        ],
      },
      {
        heading: "Descarga do Material",
        items: [
          "Ao chegar no cliente, o motorista deve informar imediatamente ao operador logístico.",
          "O motorista deve aguardar a autorização da logística para descarregar o material.",
        ],
      },
      {
        heading: "Avaria",
        items: [
          "Qualquer avaria identificada pelo motorista ou cliente deve ser registrada com o material ainda sob o caminhão.",
          "Fotografar o material avariado e enviar via WhatsApp para o operador logístico.",
        ],
      },
      {
        heading: "Formalização Contratual",
        items: [
          "As informações devem ser enviadas ao motorista via WhatsApp para formalização, logo após a verificação na gerenciadora de risco.",
          "O motorista deve informar a ciência do contrato no WhatsApp.",
          "O operador logístico deve arquivar o contrato na rede.",
        ],
      },
    ],
  },
  {
    title: "Parte 3 — Papéis e Responsabilidades (Transporte Interestadual e SP)",
    subsections: [
      {
        heading: "Logística",
        items: [
          "Preencher planilha de controle logístico desde o recebimento do chamado.",
          "Validar informações fornecidas pelo comercial ou compras da carga para transporte (tipo de veículo, lona, peso...).",
          "Anunciar e captar frete.",
          "Acompanhamento do transporte da carga.",
        ],
      },
      {
        heading: "Compras",
        items: [
          "Inserir o pedido no fornecedor; incluir DT e responsáveis ao chamado.",
          "Suporte ao setor logístico, faturamento e comercial (quando aplicável).",
          "Incluir informações do tipo de veículo: origem/destino, peso/volume, tipo de veículo (consultar expedição), composição do material, necessidade de lona (grade baixa) ou fechamento (sider), horário de recebimento, se o cliente recebe fim de semana, e se a descarga é manual ou com empilhadeira.",
          "O setor de compras é responsável por essas informações quando a solicitação for para abastecer um centro de distribuição da empresa.",
        ],
      },
      {
        heading: "Comercial",
        items: [
          "Solicitação de compra do material.",
          "Confirmação de compra com o cliente antes de solicitar a contratação do frete.",
          "Suporte à logística junto ao cliente quando aplicável.",
          "Cobrança da emissão da nota fiscal para que o motorista possa seguir viagem.",
          "Análise de pontos críticos para recebimento do material.",
          "Incluir informações do tipo de veículo e recebimento do cliente, incluindo restrições do local (fiação, rua, autorização de órgão local).",
          "O setor comercial é responsável por essas informações quando a compra for direta para o cliente.",
        ],
      },
      {
        heading: "Financeiro",
        items: ["Registrar o VGM no sistema de gestão de frota diariamente, até as 12hs."],
      },
      {
        heading: "Faturamento",
        items: ["Emissão da nota fiscal.", "Emissão de triangulações (quando aplicável)."],
      },
    ],
  },
  {
    title: "Parte 4 — Gestão de Abastecimento",
    subsections: [
      {
        heading: "Diretrizes Gerais",
        paragraphs: ["O setor de abastecimento realiza inicialmente os abastecimentos de loja e centros de distribuição com os veículos disponíveis na frota. Para viagens sem veículo disponível, segue-se o fluxo de captação de frete via plataforma Fretebras e grupo de WhatsApp."],
      },
      {
        heading: "Frota disponível",
        items: [
          "2 Carretas — viagem interestadual — 32 toneladas.",
          "1 Truck sider — viagem interestadual — 14 toneladas.",
          "1 Toco — Rio de Janeiro — 7 toneladas.",
          "1 ¾ — Rio de Janeiro — 4 toneladas.",
          "1 Truck — Rio de Janeiro — 14 toneladas.",
        ],
      },
      {
        heading: "Prazos",
        items: [
          "Captação e coleta de frete: até 24hs.",
          "Cobrança de loja: até as 12hs.",
          "Pagamento de frete: até as 13hs (quando necessário contratar motorista externo).",
          "Envio do contrato ao motorista contratado: ao finalizar o gerenciamento de risco.",
          "Tempo de estadia no cliente/fornecedor: até 4hs.",
          "Pit stop no CD DCS: até 1h30.",
        ],
      },
      {
        heading: "Pagamentos",
        items: [
          "Sinal de 70% após o envio da nota fiscal de coleta na fábrica — adiantamento de viagem.",
          "Saldo de 30% após o envio do canhoto da nota fiscal assinado pelo cliente final.",
          "Pedágio pago separadamente do valor do frete, para comprovação à ANTT.",
          "Pagamento apenas na conta cadastrada do motorista na ANTT.",
        ],
      },
      {
        heading: "Validação Documental, Descarga, Avaria e Formalização Contratual",
        paragraphs: ["Seguem os mesmos critérios definidos na gestão de transporte interestadual e São Paulo (Parte 2): documentos obrigatórios validados antes da continuidade do processo, verificação na gerenciadora de risco, chamada de vídeo na fábrica, checklist da Placo, autorização da logística antes da descarga, registro fotográfico de avarias e formalização do contrato via WhatsApp com arquivamento na rede."],
      },
    ],
  },
  {
    title: "Parte 5 — Papéis e Responsabilidades (Abastecimento)",
    subsections: [
      {
        heading: "Logística",
        items: [
          "Preencher planilha de controle logístico desde o recebimento do chamado.",
          "Validar informações fornecidas pelo comercial ou compras.",
          "Anunciar e captar frete.",
          "Acompanhamento do transporte da carga.",
        ],
      },
      {
        heading: "Compras",
        items: [
          "Inserir o pedido no fornecedor; incluir DT ou pedido do fornecedor ao chamado.",
          "Suporte ao setor logístico, faturamento e comercial (quando aplicável).",
          "Incluir informações do tipo de veículo, incluindo restrições de recebimento do local.",
          "Responsável por essas informações quando a solicitação for para abastecer um centro de distribuição.",
        ],
      },
      {
        heading: "Comercial",
        items: [
          "Solicitação de compra do material; confirmação de compra com o cliente antes da contratação do frete.",
          "Suporte à logística junto ao cliente quando aplicável.",
          "Cobrança da emissão da nota fiscal e análise de pontos críticos para recebimento.",
          "Incluir informações do tipo de veículo e recebimento do cliente quando a compra for direta.",
        ],
      },
      {
        heading: "Financeiro",
        items: ["Registrar o VGM no sistema de gestão de frota diariamente, até as 12hs."],
      },
      {
        heading: "Faturamento",
        items: [
          "Emissão da nota fiscal.",
          "Emissão de triangulações (quando aplicável).",
          "Para lojas interestaduais, a confirmação da grade pode ocorrer antes das 16h.",
        ],
      },
    ],
  },
  {
    title: "Parte 6 — Averbação de Carga",
    subsections: [
      {
        items: [
          "O prazo para averbação da carga após a liberação no fornecedor é de até 1h, salvo exceções, que poderão ser tratadas como embarque esporádico e enviadas à seguradora no dia seguinte.",
          "Validar origem e destino da nota emitida pelo fornecedor — caso a rota informada pelo comercial não seja compatível com a nota, solicitar a triangulação do material.",
          "Quando a DCS não estiver em nenhuma das pontas do processo, é necessário emitir o CTE da Logexpress enquanto transportadora.",
          "Realizar a verificação da documentação do motorista no ato da captação do frete, pois a seguradora avaliará se ele estava apto para o frete.",
          "Toda documentação deve estar completa e validada para o caso de ser necessário acionar o seguro de carga.",
        ],
      },
      {
        heading: "Ocorrência de Roubo, Furto ou Acidente",
        items: [
          "O motorista deve informar imediatamente a ocorrência via WhatsApp.",
          "Em caso de acidente, solicitar que o motorista permaneça no local até a chegada do perito autorizado pela seguradora.",
          "Acionar a seguradora.",
        ],
      },
    ],
  },
  {
    title: "Parte 7 — Auditoria, Treinamento e Gestão de Mudanças",
    subsections: [
      {
        heading: "Auditoria e Conformidade",
        items: [
          "Processos sujeitos à auditoria periódica.",
          "Devem gerar evidências documentais.",
          "Devem registrar não conformidades e ações corretivas.",
          "O descumprimento desta política pode resultar em revisão de processos, treinamentos obrigatórios ou medidas administrativas cabíveis.",
        ],
      },
      {
        heading: "Treinamento dos Colaboradores",
        paragraphs: ["Qualquer parâmetro novo ou alteração no fluxo, procedimento ou política comercial exige treinamento aos colaboradores envolvidos, registrado como treinamento."],
      },
      {
        heading: "Fluxo Formal de Aprovação de Mudanças",
        items: [
          "A mudança deve seguir: Solicitação → Avaliação Técnica → Teste → Validação → Implementação → Treinamento.",
          "Deve ser atualizado o fluxograma, Procedimento Padrão e demais documentos necessários após aprovação.",
          "Não conformidades geram ações corretivas.",
        ],
      },
    ],
  },
  {
    title: "Parte 8 — Revisão",
    subsections: [
      {
        paragraphs: ["Este documento deve ser revisado semestralmente ou sempre que houver:"],
        items: [
          "Mudanças na estrutura organizacional.",
          "Alterações legais.",
          "Atualizações de sistemas ou processos.",
          "Identificação de falhas recorrentes.",
        ],
      },
    ],
  },
]
