import type { PolicyPart } from "./cscPolicyContent"

export const ATACADO_POLICY_META = {
  codigo: "CMA.PI.001.01",
  versao: "01",
  revisao: "0",
  vigencia: "2026",
  elaboracao: "30/01/2026",
  aprovacao: "Poliana Alves",
  responsavel: "Comercial Atacado",
  classificacao: "Política Interna Comercial",
  finalidade:
    "Agir como norteadora para que todas as etapas do processo comercial atacado, desde a entrada do pedido, validação, análise, liberação, faturamento, logística, entrega e recebimento, sejam executadas de forma padronizada, integrada, controlada e rastreável, assegurando previsibilidade operacional, proteção da margem, redução de retrabalho e eficiência na tomada de decisão.",
  objetivo:
    "Toda solicitação, pedido ou movimentação do comercial atacado deve ser formalmente registrada nos sistemas oficiais da empresa (sistema de chamados, portal de vendas, planilhas de controle ou ferramentas designadas), contendo obrigatoriamente as informações mínimas necessárias para análise, execução e acompanhamento: dados do cliente, vendedor responsável, condições comerciais, forma de pagamento, logística, documentos de suporte e registros das autorizações envolvidas. Processos conduzidos fora dos canais oficiais ou sem registro não devem ser considerados válidos. A Política deve ser revisada e auditada semestralmente; eventuais não conformidades devem gerar ações corretivas formalmente registradas.",
}

export const ATACADO_POLICY_PARTS: PolicyPart[] = [
  {
    title: "Parte 1 — Abrangência, Conduta e Jornada",
    subsections: [
      { heading: "Abrangência", paragraphs: ["Aplica-se a todos os colaboradores envolvidos no Comercial atacado, em suas etapas de trabalho e funções respectivamente."] },
      {
        heading: "Conduta, Ética e Medidas Disciplinares",
        items: [
          "Proibição de assédio, discriminação e qualquer forma de violência e bullying.",
          "Obrigatório o uso adequado dos bens da empresa (equipamentos e materiais).",
          "Proibição de álcool e drogas durante o trabalho.",
          "Proibido o uso de roupas inadequadas como croppeds, roupas de alça, shorts, saias curtas, leggings, regata, ficar sem camisa e uso de chinelo durante a jornada de trabalho.",
          "É proibido oferecer, prometer, solicitar ou aceitar qualquer tipo de suborno, vantagem indevida, pagamento, presente ou brinde que possa influenciar, ou aparentar influenciar, decisões profissionais ou comerciais, em desacordo com o Código de Ética da empresa.",
          "Medidas disciplinares poderão ser aplicadas de forma hierárquica: orientação, advertência verbal, por escrita, suspensão e desligamento, conforme gravidade.",
        ],
      },
      {
        heading: "Jornada de Trabalho e Intervalos",
        items: [
          "Horário padrão: segunda a sexta-feira, das 08h00 às 18h00.",
          "É permitida hora extra previamente acordada entre supervisor e colaboradores.",
          "Almoço: 1 (uma) hora, preferencialmente entre 12h00 e 14h00.",
        ],
      },
      {
        heading: "Responsabilidade da Administração",
        items: [
          "Conduzir admissões, integração e treinamentos.",
          "Controle de jornada e benefícios.",
          "Acompanhar desempenho e promover desenvolvimento dos funcionários.",
          "Respeitar férias, afastamentos e licenças conforme legislação.",
          "Tratar dúvidas e conflitos com transparência e respeito.",
          "Gerar relatórios e controles internos.",
          "Apoiar a operação diariamente e a gerência com documentos e dados.",
          "Controle de fundo fixo e prestação de contas.",
          "Apoiar no recebimento de pedidos pelo sistema Sults.",
          "Apoiar a solicitação de emissão de nota fiscal e entrada de nota no estoque.",
        ],
      },
      {
        heading: "Limpeza, Higiene e Organização",
        paragraphs: [
          "A limpeza e a organização são essenciais para segurança, qualidade e conforto. É responsabilidade da equipe de ASG; no entanto, o colaborador deve zelar pela limpeza do ambiente de trabalho.",
        ],
        items: [
          "Cozinha/Refeitório: limpeza após cada refeição — limpar bancadas, pias, mesas e bancos, higienizar utensílios, descartar resíduos corretamente; proibido armazenar produtos estragados.",
          "Escritórios e sala de reunião: todos os colaboradores devem manter a área de trabalho limpa e organizada, descartando resíduos nos locais corretos.",
        ],
      },
    ],
  },
  {
    title: "Parte 2 — Faturamento",
    subsections: [
      {
        heading: "Emissão de nota fiscal em CNPJ de terceiros",
        items: [
          "Solicitar e-mail de autorização do cliente para emissão da NF — só é permitido receber e-mail diretamente do cliente (terceiro).",
          "Conferir o cartão CNPJ e documento de identificação com foto (legível) enviado no e-mail.",
          "Texto padrão: \"Prezados, por meio deste, autorizo a emissão da nota fiscal no CNPJ 00.000.000/0000-00. Em anexo, seguem Cartão do CNPJ e documento de identidade do proprietário, para conferência e validação.\"",
          "Informar ao cliente que, em casos de incidência de DIFAL, a responsabilidade será repassada a ele.",
        ],
      },
      {
        heading: "Pagamentos e contas bancárias oficiais",
        items: [
          "Notas fiscais: Banco Itaú, AG 8166, Conta Corrente 98998-1, chave Pix 40.737.832.0001/84 — Supply Chain Serviços LTDA.",
          "Cupons fiscais: Banco Santander, AG 3066, Conta Corrente 13002862-7, chave Pix 53.460.398.0001/05 — Televendas Fast Materiais LTDA ME.",
          "Anexar comprovantes no chamado obrigatoriamente assim que o cliente enviar — isso minimiza fraudes, dá celeridade ao processo e mantém o registro alinhado às entradas bancárias.",
        ],
      },
      {
        heading: "Emissão de NF (regra comercial)",
        paragraphs: ["Antes de qualquer emissão de Nota Fiscal, é indispensável verificar a possibilidade com os times financeiro e administrativo, devido ao risco de encargos e impostos extras."],
      },
    ],
  },
  {
    title: "Parte 3 — Administrativo",
    subsections: [
      {
        heading: "Horários pré-estabelecidos para atendimento",
        items: [
          "Até às 17h00: todos os pedidos que comporão a grade de faturamento e logística do dia seguinte devem estar formalmente abertos no sistema.",
          "Até às 17h30: a grade do dia seguinte deve estar integralmente consolidada, sem inclusão de novos pedidos fora do fluxo definido.",
          "Até às 10h00: devem ser realizados exclusivamente redirecionamentos, ajustes ou correções previamente autorizadas, sem impacto na programação logística já validada.",
        ],
      },
      {
        heading: "Cadastro de novo CNPJ",
        paragraphs: ["A solicitação deve ser encaminhada ao time administrativo para abertura de um chamado de auditoria. O cadastro do cliente será realizado apenas após a análise das informações do Serasa pela diretoria."],
      },
      {
        heading: "Uso obrigatório de sistemas gerais",
        items: [
          "Toda solicitação, validação, autorização, liberação ou tratativa operacional deve ser registrada nos sistemas oficiais da empresa (Sults, Portal de Vendas, ERP, planilhas de controle).",
          "O WhatsApp é permitido exclusivamente como canal de apoio à comunicação, sendo vedado seu uso como registro oficial ou único meio de decisão.",
        ],
      },
      {
        heading: "Padronização e rastreabilidade",
        paragraphs: ["Nenhuma atividade poderá ser executada sem: chamado formal aberto; informações completas e validadas; documentos obrigatórios anexados; registro claro de responsáveis, datas e autorizações. Processos incompletos, informais ou fora do padrão não devem seguir para execução."],
      },
      {
        heading: "Validações obrigatórias",
        items: [
          "Validar dados de clientes, pedidos, valores, condições comerciais e logísticas.",
          "Confirmar pagamentos antes de liberar cargas ou descargas, salvo exceções formalmente autorizadas.",
          "Conferir conformidade entre OC, NF, PDV, DT e informações do chamado.",
        ],
      },
      {
        heading: "Autorizações (alçadas)",
        paragraphs: ["Decisões que envolvam descontos acima do limite definido, estornos financeiros, liberação de carga sem pagamento, redirecionamentos de carga, reembolsos, créditos ou exceções operacionais devem obrigatoriamente seguir as alçadas de aprovação definidas (Liderança, Diretoria, CEO), com registro formal no chamado."],
      },
      {
        heading: "Controle financeiro",
        items: [
          "Monitorar pagamentos, créditos e inadimplência de forma estruturada.",
          "Atualizar planilhas e sistemas diariamente.",
          "Acionar financeiro, auditoria e diretoria conforme prazos definidos.",
          "Auxiliar no bloqueio do descarregamento de cargas liberadas para clientes inadimplentes sem autorização formal.",
        ],
      },
      {
        heading: "Auditoria e conformidade",
        items: [
          "Processos estão sujeitos à auditoria periódica.",
          "Devem gerar evidências documentais.",
          "Devem registrar não conformidades e ações corretivas.",
          "O descumprimento desta política poderá resultar em revisão de processos, treinamentos obrigatórios ou medidas administrativas cabíveis.",
        ],
      },
    ],
  },
  {
    title: "Parte 4 — Comercial",
    subsections: [
      {
        heading: "Responsabilidades",
        items: [
          "Prospecção ativa de clientes e novos negócios.",
          "Aquecimento de carteira inativa e não recorrente.",
          "Atendimento consultivo (orientação técnica comercial).",
          "Construção do mix ideal para cada cliente.",
          "Fechamento correto do pedido.",
          "Acompanhamento pós-venda e retenção.",
          "Mínimo de 25 ligações atendidas por dia.",
        ],
      },
      {
        heading: "O que NÃO é responsabilidade do Comercial",
        items: [
          "Prometer datas que a fábrica não confirmou.",
          "Criar preço fora da régua de margem autorizada.",
          "Resolver problemas de logística (mas SIM acompanhar e cobrar).",
          "Assumir promessas que dependem de outros departamentos sem validação.",
        ],
      },
      {
        heading: "O que pode ser oferecido ao cliente",
        items: [
          "Consultoria de mix.",
          "Alternativas de produto / tamanho / versão.",
          "Suporte para melhor aproveitamento logístico.",
          "Orientações sobre prazos (sempre realistas).",
          "Condições comerciais dentro da régua autorizada.",
        ],
      },
      {
        heading: "O que NÃO pode ser oferecido ao cliente sem autorização prévia",
        items: [
          "Antecipação de entrega.",
          "Transporte especial / dedicado.",
          "Negociações que reduzam margem mínima.",
          "Promessas de liberação imediata se não estiver no BI/estoque.",
        ],
      },
      {
        heading: "Regras",
        items: [
          "É estritamente proibido o envio da DT para o cliente sem confirmação prévia do time administrativo. A liberação só ocorre após validação administrativa e confirmação do pagamento integral pelo financeiro.",
          "Margens e exceções: deve-se respeitar a margem estabelecida pela diretoria. Qualquer exceção deve ser tratada diretamente com a diretoria, sendo obrigatório anexar o print da autorização ou a confirmação direta no chamado.",
          "Emissão de NF: antes de qualquer emissão, verificar a possibilidade com financeiro e administrativo, devido ao risco de encargos e impostos extras.",
          "Encerramento de chamados: não é permitido encerrar chamados sem a permissão expressa do time administrativo.",
          "Protocolo de comunicação: a interação nos chamados é restrita aos times administrativo, gerência e diretoria; comunicações externas devem ser feitas diretamente ao administrativo pelos grupos oficiais do WhatsApp.",
          "Os comprovantes de pagamento devem ser enviados exclusivamente ao Administrativo. É proibido o envio à Logística, assim como o compartilhamento dos contatos da equipe de logística com os clientes.",
        ],
      },
      {
        heading: "Confirmação de pagamento / condições comerciais",
        items: [
          "O time comercial deve verificar se o pagamento foi concluído ou se as condições comerciais estabelecidas estão atendidas (prazo, entrada ou crédito liberado).",
          "Anexar comprovantes ao chamado assim que o cliente enviar.",
          "A Logística somente poderá receber autorização para descarregar o material no cliente após o Administrativo atacado confirmar o recebimento no banco. Nenhuma solicitação do vendedor ou do cliente deve ser considerada para liberação da carga.",
        ],
      },
      {
        heading: "Reagendamento",
        paragraphs: ["O reagendamento de cargas está condicionado à aprovação prévia da diretoria. Caso o cliente não vá realizar a coleta, ou não possa receber na data prevista pela Logística, a DT será disponibilizada a outro vendedor ou operação — medida que visa a fluidez dos processos e a otimização do fluxo financeiro."],
      },
      {
        heading: "Redirecionamento",
        paragraphs: ["As solicitações de redirecionamento devem ser enviadas ao time administrativo até às 10h, para registro nos chamados e comunicação com a Logística — regra que também se aplica quando o próprio cliente fará a coleta. Todo redirecionamento exige ciência e autorização do gerente da operação."],
      },
      {
        heading: "Documentação completa e validada",
        items: [
          "Pedido de Venda aprovado.",
          "Lista de Materiais atualizada.",
          "Especificações do cliente (quando aplicável).",
          "Qualquer divergência deve ser tratada antes das liberações previstas em processo.",
        ],
      },
      {
        heading: "Pós-venda",
        paragraphs: ["Após finalizar o processo comercial, entrar em contato com o cliente para programar novas cargas."],
      },
    ],
  },
  {
    title: "Parte 5 — Composição de Carga",
    subsections: [
      {
        heading: "Tipos de veículo",
        items: [
          "Truck: capacidade padrão conforme tabela vigente por produto; indicado para volumes médios e entregas urbanas/intermunicipais.",
          "Carreta: capacidade padrão conforme tabela vigente por produto; indicado para cargas fechadas, grandes volumes e longas distâncias.",
          "É proibido exceder o limite técnico do veículo ou \"completar carga\" sem lastro de venda.",
        ],
      },
      {
        heading: "Critérios de composição",
        items: [
          "Respeitar peso máximo, volume (m² / paletes) e distribuição correta.",
          "Priorizar cargas fechadas (ST, RU, RF, GRX, Performa, etc.).",
          "Mistura de produtos só é permitida quando compatíveis entre si, sem risco de avaria e mantendo a margem mínima definida.",
        ],
      },
      {
        heading: "Distribuição e empilhamento",
        items: [
          "Placas sempre paletizadas.",
          "Proibido empilhar materiais incompatíveis.",
          "Aço, perfis e acessórios devem estar corretamente cintados e nunca soltos sobre placas.",
          "Cargas mistas exigem conferência redobrada antes do envio para a fábrica.",
        ],
      },
      {
        heading: "Margem e rentabilidade",
        items: [
          "A composição da carga deve preservar a margem mínima da região.",
          "Itens de menor margem só podem entrar na carga se compensados por itens de maior margem ou autorizados pela Diretoria comercial atacado.",
          "Preço não pode ser definido antes da composição da carga.",
        ],
      },
      {
        heading: "Responsabilidades",
        items: [
          "Vendedor: planejar a carga completa com o cliente; confirmar tipo de veículo, prazo e local de entrega; assegurar que a carga esteja 100% vendida antes da liberação da DT.",
          "Gestão / Comercial: validar exceções de composição; autorizar misturas fora do padrão; auxiliar a aderência à política de margem.",
          "Logística / ADM: conferir viabilidade técnica da carga; validar documentação e agendamento.",
        ],
      },
      {
        heading: "Exceções",
        paragraphs: ["Qualquer exceção a esta política deve ser formalmente aprovada pela diretoria do atacado, ter justificativa registrada e estar alinhada com financeiro e logística."],
      },
      {
        heading: "Impactos do descumprimento",
        items: ["Atrasos de entrega.", "Custos extras de frete e reagendamento.", "Perda de margem.", "Ações corretivas e disciplinares."],
      },
      {
        heading: "Proibições",
        items: [
          "Montar carga \"para tentar vender depois\".",
          "Alterar composição após envio para a fábrica sem autorização.",
          "Forçar carga acima do limite técnico.",
          "Vender sem considerar logística, margem e prazo.",
        ],
      },
    ],
  },
  {
    title: "Parte 6 — Autonomia do Gerente: Margem, Avarias e Exceções",
    subsections: [
      {
        heading: "Autonomia de margem por região",
        paragraphs: [
          "Cada região possui margem mínima vigente definida (exemplo: Região Sul — margem mínima 0,98).",
          "O gerente regional possui autonomia para autorizar excepcionalmente uma redução de até 0,5 ponto de margem abaixo da mínima vigente, desde que a venda seja analisada individualmente, haja justificativa comercial clara e a decisão esteja alinhada ao interesse estratégico da operação.",
          "Exemplo: margem mínima 0,98 → gerente pode autorizar até 0,9755.",
        ],
      },
      {
        heading: "Cargas avariadas — pequenas avarias",
        items: [
          "Para avarias leves, comprovadas por evidências (fotos, vídeos e registros no processo), o gerente possui autonomia para conceder até 50% de desconto sobre o valor das avarias no momento do descarregamento.",
          "Procedimento obrigatório: abertura de SAC junto à fábrica seguindo o fluxo oficial; solicitação de crédito para a próxima carga no valor concedido ao cliente, ou desconto imediato no pagamento do cliente.",
        ],
      },
      {
        heading: "Cargas avariadas — danos de maior gravidade",
        items: [
          "Comunicar Compras imediatamente e registrar/enviar todas as evidências do ocorrido.",
          "Quando a carga apresentar aproximadamente 50% ou mais de material danificado: a carga não deve ser recebida pelo cliente, o material deve ser devolvido à fábrica e a situação deve ser comunicada formalmente a Compras e Diretoria.",
          "Caso o cliente opte por receber a carga mesmo assim, essa decisão é de sua inteira responsabilidade, devendo haver registro formal dessa concordância.",
        ],
      },
      {
        heading: "Estornos e ajustes financeiros",
        items: [
          "Todo estorno de valor deve ser comunicado formalmente.",
          "Estornos de valores elevados passam pelo Financeiro / Fluxo de Caixa, exigem autorização da Diretoria e do CEO, e podem demandar prazo maior conforme regras internas.",
        ],
      },
      {
        heading: "Formas de pagamento fora do acordado",
        paragraphs: ["Qualquer forma de pagamento que fuja do tratado previamente com o cliente deve ser comunicada imediatamente ao gerente, que deve buscar autorização formal da Diretoria, garantindo respaldo da decisão."],
      },
    ],
  },
  {
    title: "Parte 7 — Treinamento e Gestão de Mudanças",
    subsections: [
      {
        heading: "Treinamento dos colaboradores",
        paragraphs: ["Qualquer parâmetro novo ou alteração no fluxo, procedimento ou política comercial exige treinamento aos colaboradores envolvidos, registrado como treinamento."],
      },
      {
        heading: "Fluxo formal de aprovação de mudanças",
        items: [
          "A mudança deve seguir: Solicitação → Avaliação Técnica → Teste → Validação → Implementação → Treinamento.",
          "Deve ser atualizado o fluxograma, Procedimento Padrão e demais documentos necessários após aprovação.",
          "Não conformidades geram ações corretivas.",
        ],
      },
    ],
  },
  {
    title: "Parte 8 — Critérios de Não Conformidade",
    subsections: [
      {
        heading: "1. Ausência de registro formal",
        items: [
          "Inexistência de chamado aberto no sistema oficial (Sults / Portal de Vendas).",
          "Solicitações tratadas exclusivamente via WhatsApp, e-mail ou verbal, sem registro em sistema.",
        ],
      },
      {
        heading: "2. Informações incompletas ou inconsistentes",
        items: [
          "Dados do cliente (nome, CNPJ, endereço, código no sistema) divergentes ou incompletos.",
          "Divergência entre pedido, OC, NF, PDV, DT ou informações do chamado.",
          "Falta de descrição clara do produto, quantidades, valores ou condições comerciais.",
        ],
      },
      {
        heading: "3. Falta de documentação obrigatória",
        items: [
          "Ausência de NF, OC, PDV, DT, comprovante de pagamento ou documentos exigidos para a etapa.",
          "Evidências fotográficas ausentes ou insuficientes em casos de avarias, SAC, estorno ou reembolso.",
          "Falta de documentação do motorista ou da transportadora em liberações logísticas.",
        ],
      },
      {
        heading: "4. Ausência de validação ou autorização formal",
        items: [
          "Processos executados sem aprovação do responsável comercial, liderança, diretoria ou CEO, conforme alçadas definidas.",
          "Liberação de carga, descarga, estorno, crédito, desconto ou redirecionamento sem autorização registrada no chamado.",
        ],
      },
      {
        heading: "5. Pendências financeiras",
        items: [
          "Cliente com inadimplência ou débito em aberto sem autorização formal da diretoria.",
          "Pagamentos não confirmados em banco antes da liberação de carga, descarga ou faturamento.",
          "Divergência entre valores pagos, faturados e registrados em controle financeiro.",
        ],
      },
      {
        heading: "6. Descumprimento de prazos operacionais",
        items: [
          "Pedidos fora dos horários definidos para abertura, grade, redirecionamento ou liberação.",
          "Atraso na atualização de planilhas, controles e registros que comprometa a execução do processo.",
        ],
      },
      {
        heading: "7. Falhas de comunicação entre áreas",
        items: [
          "Setores obrigatórios não incluídos no chamado (administrativo, compras, faturamento, logística, financeiro, diretoria, quando aplicável).",
          "Alterações realizadas sem comunicação formal registrada em chamado às áreas impactadas.",
        ],
      },
      {
        heading: "8. Risco operacional, financeiro ou jurídico",
        items: [
          "Situações que possam gerar prejuízo financeiro, descumprimento contratual, risco fiscal ou impacto no SLA com o cliente.",
          "Indícios de erro, fraude, retrabalho recorrente ou não aderência às políticas internas.",
        ],
      },
      {
        heading: "9. Não conformidade com POPs e políticas internas",
        items: ["Execução de atividades fora do fluxo definido.", "Decisões baseadas em exceções não documentadas ou práticas informais."],
      },
    ],
  },
  {
    title: "Parte 9 — Revisão",
    subsections: [{ paragraphs: ["Este documento deve ser revisado anualmente ou em caso de alteração de processo."] }],
  },
]
