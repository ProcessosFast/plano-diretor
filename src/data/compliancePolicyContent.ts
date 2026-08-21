import type { PolicyPart } from "./cscPolicyContent"

export const COMPLIANCE_POLICY_META = {
  codigo: "POL-COMP-001",
  versao: "1.0",
  revisao: "0",
  vigencia: "2026",
  elaboracao: "Jurídico e Compliance (CSC)",
  aprovacao: "CEO e Conselho Consultivo",
  responsavel: "Jurídico e Compliance (CSC)",
  classificacao: "Política Corporativa — Uso interno / Confidencial",
  finalidade:
    "Esta Política estabelece os princípios, as diretrizes e as responsabilidades que orientam a conduta ética e o cumprimento das leis, normas e regulamentos aplicáveis a todas as empresas do Ecossistema FAST. Ela traduz, em regras práticas de comportamento, o compromisso do Grupo com a integridade, a transparência e a responsabilização, valores que sustentam o crescimento estruturado previsto no Plano Diretor para o período de 2026 a 2030. O compliance na Fast é aplicado de forma prática e proporcional ao porte e aos riscos do Ecossistema — o objetivo não é criar burocracia, mas assegurar que a velocidade e a determinação que caracterizam a Fast se realizem dentro de limites legais e éticos claros.",
  objetivo:
    "Prevenir, detectar e corrigir desvios de conduta, fraudes, atos de corrupção e violações legais; proteger a reputação, as marcas, os ativos e o patrimônio das empresas do Ecossistema; assegurar a conformidade com a legislação brasileira e com as normas internas do Grupo; promover uma cultura organizacional baseada em ética, transparência e prestação de contas; e orientar colaboradores, gestores e parceiros sobre o comportamento esperado e sobre os canais de apoio disponíveis. Documento de referência: Plano Diretor de Governança, Arquitetura Societária e Modelo Operacional do Ecossistema FAST (Cap. 3, 9.4.6 e 13).",
}

export const COMPLIANCE_POLICY_PARTS: PolicyPart[] = [
  {
    title: "Parte 1 — Abrangência e Aplicação",
    subsections: [
      {
        paragraphs: ["Esta Política aplica-se a todas as empresas que integram o Ecossistema FAST, independentemente de sua personalidade jurídica própria e de sua autonomia operacional, incluindo as camadas de governança, controle societário, operação, atuação comercial e serviços especializados:"],
        items: [
          "Governança: Conselho Consultivo, CEO e Diretoria Executiva.",
          "Holdings: holdings controladoras responsáveis pelo controle societário e políticas corporativas.",
          "Empresas Operacionais: MaxSteel, FAST Importação, SUPPLY-LM (atacado), DCS/CM — Casa do Montador (varejo) e filiais.",
          "Empresas Comerciais (Front Office): FAST Atacado, FAST Varejo, FAST Obras, FAST Homes, FAST Franchising e Comércio Digital.",
          "Empresas Especializadas (Back Office / CSC): Centro de Serviços Compartilhados, Engenharia, Log Express e Unity Company.",
          "Rede de franquias: Steel Conecta e demais franqueados, observadas as diretrizes previstas em seus contratos.",
        ],
      },
      {
        paragraphs: [
          "Estão sujeitos a esta Política todos os membros do Conselho Consultivo, diretores, gestores, colaboradores (efetivos, temporários ou em regime de estágio) e aprendizes das empresas do Grupo. Fornecedores, prestadores de serviço, franqueados, representantes e demais parceiros de negócio devem observar princípios equivalentes de integridade, refletidos em cláusulas contratuais e em processos de diligência.",
          "Nota: nenhuma meta comercial, prazo de entrega ou pressão por resultado justifica o descumprimento desta Política ou da legislação. Resultado obtido em desacordo com estas regras não é reconhecido pela Fast.",
        ],
      },
    ],
  },
  {
    title: "Parte 2 — Definições",
    subsections: [
      {
        items: [
          "Compliance: conjunto de medidas para assegurar o cumprimento de leis, normas, regulamentos e políticas internas aplicáveis às atividades do Ecossistema.",
          "Integridade: atuação honesta, ética e coerente com os valores da Fast, mesmo na ausência de fiscalização.",
          "Programa de Integridade: conjunto estruturado de políticas, controles, treinamentos, canais e mecanismos de monitoramento voltados a prevenir, detectar e remediar irregularidades.",
          "Agente público: pessoa que exerce cargo, emprego ou função em órgão ou entidade pública, ainda que transitoriamente ou sem remuneração, incluindo empresas estatais.",
          "Conflito de interesses: situação em que interesses pessoais, familiares ou financeiros de um colaborador possam influenciar, ou parecer influenciar, o exercício imparcial de suas funções.",
          "Terceiros: fornecedores, prestadores de serviço, representantes, despachantes, franqueados, consultores e demais parceiros que atuem em nome ou em benefício da Fast.",
          "Dado pessoal: informação relacionada a pessoa natural identificada ou identificável, nos termos da LGPD.",
          "Canal de Denúncias: meio seguro e confidencial para relato de suspeitas de violação a esta Política, à legislação ou às normas internas.",
        ],
      },
    ],
  },
  {
    title: "Parte 3 — Referências Normativas",
    subsections: [
      {
        heading: "Referências externas",
        items: [
          "Lei Anticorrupção — Lei nº 12.846/2013 e Decreto nº 11.129/2022, sobre responsabilização de pessoas jurídicas por atos contra a administração pública.",
          "LGPD — Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais).",
          "Concorrência — Lei nº 12.529/2011 (Lei de Defesa da Concorrência).",
          "PLD/FT — Lei nº 9.613/1998 (prevenção à lavagem de dinheiro) e normas correlatas.",
          "Penal e tributária — Decreto-Lei nº 2.848/1940 (Código Penal), Lei nº 8.137/1990 (crimes contra a ordem tributária) e legislação tributária aplicável.",
          "Trabalhista — Consolidação das Leis do Trabalho (CLT) e normas de saúde, segurança e relações do trabalho.",
          "Propriedade intelectual — Lei nº 9.279/1996 (propriedade industrial) e legislação de proteção de marcas e propriedade intelectual.",
        ],
      },
      {
        heading: "Referências internas",
        paragraphs: ["Plano Diretor do Ecossistema FAST (em especial o Capítulo 3 — Princípios de Governança e Compliance), o Código de Cultura Fast e as demais políticas corporativas de crédito, preços, compras, descontos, pagamentos e proteção de dados."],
      },
    ],
  },
  {
    title: "Parte 4 — Princípios e Diretrizes de Integridade",
    subsections: [
      {
        paragraphs: ["A conduta de todos os integrantes do Ecossistema FAST orienta-se pelos princípios de governança definidos no Plano Diretor e pelo Código de Cultura da Fast. Compliance não se opõe à velocidade da Fast — é o que torna essa velocidade sustentável."],
      },
      {
        heading: "Princípios de governança aplicáveis",
        items: [
          "Segregação de funções e rastreabilidade das aprovações.",
          "Responsabilização objetiva e prestação de contas (accountability).",
          "Transparência nas decisões e nos registros.",
          "Integração entre as empresas, sem sobreposição de responsabilidades.",
          "Ética e conformidade como condição inegociável de qualquer resultado.",
        ],
      },
      {
        heading: "Diretrizes de conduta",
        paragraphs: ["Todo colaborador deve conhecer e cumprir as leis aplicáveis à sua atividade; agir com honestidade e boa-fé nas relações internas e externas; zelar pela veracidade e integridade das informações e registros; recusar qualquer vantagem indevida, oferecida ou solicitada; e comunicar, pelos canais adequados, qualquer suspeita de violação a esta Política."],
      },
      {
        paragraphs: ["Aos gestores cabe responsabilidade adicional: dar o exemplo, disseminar a cultura de integridade em suas equipes, garantir que metas e pressões por resultado nunca induzam a condutas irregulares e reagir tempestivamente diante de desvios. A ausência de reação diante de desvios relevantes é considerada falha de gestão."],
      },
    ],
  },
  {
    title: "Parte 5 — Estrutura de Governança de Compliance",
    subsections: [
      {
        paragraphs: ["A gestão do compliance segue o modelo de três linhas de responsabilidade, coerente com a estrutura de governança e com o Centro de Serviços Compartilhados (CSC) do Ecossistema."],
        items: [
          "Conselho Consultivo: aprovar as diretrizes de integridade e avaliar riscos críticos; supervisionar a efetividade do Programa de Integridade.",
          "CEO: patrocinar a cultura de integridade e assegurar recursos ao programa; responder pela conformidade global do Ecossistema.",
          "Diretoria Executiva: implementar controles em suas áreas e prestar contas de riscos e planos de ação.",
          "Jurídico e Compliance (CSC): elaborar e revisar políticas, conduzir treinamentos, operar o Canal de Denúncias e coordenar investigações; apoiar a gestão de riscos, a privacidade e a proteção de dados.",
          "Gestores (1ª linha): executar controles, monitorar indicadores e corrigir desvios no dia a dia.",
          "Colaboradores: cumprir a Política, zelar pelos ativos e reportar suspeitas de violação.",
        ],
      },
      {
        paragraphs: ["A função de Jurídico e Compliance integra o CSC e responde por contratos e instrumentos societários, consultoria preventiva e contencioso, governança, políticas e controles, proteção de marcas e propriedade intelectual, privacidade e proteção de dados, integridade e apoio à gestão de riscos."],
      },
    ],
  },
  {
    title: "Parte 6 — Anticorrupção e Relação com Agentes Públicos",
    subsections: [
      {
        paragraphs: ["A Fast repudia toda forma de corrupção, suborno, fraude, extorsão ou pagamento de facilitação. É terminantemente proibido oferecer, prometer, autorizar, solicitar ou receber, direta ou indiretamente, qualquer vantagem indevida — dinheiro, bens, serviços, favores ou benefícios — a agentes públicos ou privados, com o objetivo de obter ou manter negócio, acelerar trâmites ou influenciar decisões."],
      },
      {
        heading: "Condutas vedadas",
        items: [
          "Pagamentos de facilitação (\"caixa dois\", propinas ou gratificações) para agilizar atos de rotina de agentes públicos.",
          "Uso de terceiros (representantes, despachantes, consultores) para intermediar vantagens indevidas.",
          "Fraudes em licitações, contratos públicos, fiscalizações, licenças ou autorizações.",
          "Registros contábeis falsos ou incompletos que ocultem a natureza de pagamentos.",
        ],
      },
      {
        heading: "Relação com o poder público",
        paragraphs: ["As interações com órgãos públicos — fiscalizações, licenciamentos, obtenção de alvarás, questões tributárias — devem ser conduzidas com transparência, formalidade e registro. Qualquer solicitação de vantagem indevida por agente público deve ser recusada e imediatamente comunicada ao Jurídico e Compliance. A responsabilização prevista na Lei nº 12.846/2013 é objetiva e recai sobre a pessoa jurídica, o que torna a prevenção uma prioridade de todos."],
      },
    ],
  },
  {
    title: "Parte 7 — Brindes, Presentes, Hospitalidades e Patrocínios",
    subsections: [
      {
        paragraphs: ["Cortesias comerciais são aceitáveis apenas quando institucionais, de valor módico, ocasionais, transparentes e sem o objetivo de influenciar decisões. Não podem criar obrigação, expectativa de reciprocidade ou constrangimento."],
        items: [
          "Brindes institucionais de valor simbólico (itens de divulgação): permitidos ao dar e receber, desde que sem valor comercial relevante.",
          "Presentes de valor significativo: não devem ser aceitos nem oferecidos; se recusar for inviável, comunicar ao Jurídico e Compliance.",
          "Hospitalidades (refeições, eventos, viagens): admitidas quando ligadas a propósito legítimo de negócio e proporcionais; hospitalidades a agentes públicos exigem aprovação prévia.",
          "Dinheiro ou equivalentes (vales, gift cards): proibidos em qualquer valor, a qualquer título.",
          "Patrocínios e doações: somente com finalidade legítima, aprovação formal por alçada e registro contábil transparente.",
        ],
      },
    ],
  },
  {
    title: "Parte 8 — Conflitos de Interesse",
    subsections: [
      {
        paragraphs: ["Configura-se conflito de interesses quando interesses pessoais, familiares ou financeiros de um colaborador possam influenciar, ou aparentar influenciar, decisões tomadas em nome da Fast. Diante do modelo de empresas relacionadas do Ecossistema, a prevenção a conflitos e o respeito à independência jurídica de cada empresa são especialmente importantes."],
      },
      {
        heading: "Situações que devem ser declaradas",
        items: [
          "Relação de parentesco ou afetiva com fornecedores, clientes, concorrentes ou subordinados diretos.",
          "Participação societária ou interesse financeiro em fornecedor, cliente ou concorrente.",
          "Atividade externa (\"segundo emprego\") que concorra com a Fast ou comprometa a dedicação.",
          "Contratação de parentes ou pessoas próximas sem processo transparente e aprovação por alçada.",
        ],
      },
      {
        paragraphs: ["O colaborador que identificar potencial conflito deve declará-lo ao gestor e ao Jurídico e Compliance, abstendo-se de participar da decisão envolvida. A omissão de conflito conhecido constitui violação a esta Política."],
      },
    ],
  },
  {
    title: "Parte 9 — Relações com Terceiros e Devida Diligência",
    subsections: [
      {
        paragraphs: ["Fornecedores, prestadores de serviço, representantes, franqueados e demais parceiros devem ser selecionados por critérios objetivos de qualidade, preço, capacidade e idoneidade. A contratação de terceiros observa a segregação de funções, a formalização por contrato e a aprovação por alçada."],
        items: [
          "Os relacionamentos entre empresas do Ecossistema devem ser sempre formalizados por contratos internos e SLAs, com remuneração e critérios de rateio objetivos.",
          "Terceiros que atuem perante o poder público ou em áreas de maior risco devem passar por diligência de integridade proporcional ao risco.",
          "Contratos devem conter cláusulas de integridade, anticorrupção, proteção de dados e direito de auditoria.",
          "A Fast responde por atos de terceiros que atuem em seu benefício — daí a importância da seleção criteriosa e do monitoramento.",
        ],
      },
    ],
  },
  {
    title: "Parte 10 — Concorrência Leal",
    subsections: [
      {
        paragraphs: ["A Fast compete com base em agilidade, confiabilidade e relacionamento, e não por meios ilícitos. Em um mercado concentrado como o de gesso acartonado, o respeito às regras concorrenciais é essencial. É proibido:"],
        items: [
          "Combinar preços, condições comerciais, divisão de mercado ou clientes com concorrentes (cartel).",
          "Trocar informações comercialmente sensíveis com concorrentes.",
          "Obter informações de concorrentes por meios ilícitos ou fraudulentos.",
          "Praticar concorrência desleal ou denegrir concorrentes com informações falsas.",
        ],
      },
      {
        paragraphs: ["Contatos com concorrentes em entidades de classe, feiras ou eventos setoriais devem restringir-se a temas legítimos. Diante de qualquer conversa que sugira coordenação anticoncorrencial, o colaborador deve encerrar a interação e comunicar o Jurídico e Compliance."],
      },
    ],
  },
  {
    title: "Parte 11 — Registros Contábeis, Controles Internos e Prevenção à Lavagem de Dinheiro",
    subsections: [
      {
        paragraphs: ["Todos os registros contábeis, fiscais e financeiros do Ecossistema devem refletir com fidelidade, precisão e tempestividade a realidade das operações, assegurando rastreabilidade e transparência. A consolidação financeira é realizada pela Holding para fins estratégicos e de governança, preservando a apuração individual de cada empresa."],
        items: [
          "Segregação de funções e registro de exceções com aprovação por alçada.",
          "Políticas formais de crédito, preços, compras, descontos e pagamentos.",
          "Auditorias e conciliações periódicas.",
          "Vedação a caixa dois, contas não registradas e pagamentos sem lastro documental.",
        ],
      },
      {
        paragraphs: ["Para prevenção à lavagem de dinheiro e ao financiamento ilícito, a Fast adota conhecimento de clientes e fornecedores, atenção a operações atípicas (pagamentos em espécie fora do padrão, triangulações, terceiros sem relação com o negócio) e comunicação de suspeitas ao Jurídico e Compliance."],
      },
    ],
  },
  {
    title: "Parte 12 — Proteção de Dados Pessoais e Segurança da Informação",
    subsections: [
      {
        paragraphs: ["A Fast trata dados pessoais de clientes, colaboradores, franqueados e parceiros em conformidade com a LGPD. O tratamento deve ter finalidade legítima, base legal adequada, transparência e uso limitado ao necessário."],
        items: [
          "Coletar apenas os dados necessários à finalidade informada (minimização).",
          "Não compartilhar dados pessoais ou informações confidenciais em canais não autorizados.",
          "Observar as regras de controle de acessos, segurança da informação e uso do ERP e CRM definidas pela TI.",
          "Comunicar imediatamente ao Jurídico e Compliance e à TI qualquer incidente de segurança ou vazamento de dados.",
        ],
      },
      {
        paragraphs: ["A segurança da informação — acessos, integridade dos sistemas e proteção da infraestrutura — é responsabilidade compartilhada entre a TI, os gestores e cada colaborador."],
      },
    ],
  },
  {
    title: "Parte 13 — Confidencialidade e Proteção de Ativos, Marcas e Propriedade Intelectual",
    subsections: [
      {
        paragraphs: ["As informações estratégicas, comerciais, financeiras e técnicas do Ecossistema são ativos que devem ser protegidos. Inclui-se aqui a proteção das marcas, do know-how, dos sistemas e da propriedade intelectual do Grupo, elemento estratégico especialmente para a rede de franquias."],
        items: [
          "Manter sigilo sobre informações confidenciais durante e após o vínculo com a Fast.",
          "Utilizar os ativos da empresa — recursos, sistemas, equipamentos — apenas para fins legítimos de trabalho.",
          "Não expor dados confidenciais de clientes ou da operação em canais não autorizados.",
          "Respeitar e proteger as marcas e a propriedade intelectual do Ecossistema.",
        ],
      },
    ],
  },
  {
    title: "Parte 14 — Relações de Trabalho, Respeito e Direitos Humanos",
    subsections: [
      {
        paragraphs: ["A Fast preza por um ambiente de trabalho seguro, respeitoso e livre de qualquer forma de assédio, discriminação ou trabalho irregular. A colaboração entre áreas e o respeito às pessoas são pilares do Código de Cultura da Fast."],
        items: [
          "É vedado qualquer assédio moral ou sexual, discriminação por raça, gênero, religião, origem, idade, orientação ou deficiência.",
          "São proibidos o trabalho infantil, forçado ou em condições análogas à escravidão, inclusive na cadeia de fornecedores.",
          "As relações trabalhistas observam a legislação e as normas de saúde e segurança.",
          "Decisões de pessoas — contratação, promoção, desligamento — devem ser transparentes e baseadas em critérios legítimos.",
        ],
      },
    ],
  },
  {
    title: "Parte 15 — Doações e Contribuições Políticas",
    subsections: [
      {
        paragraphs: ["A Fast não realiza contribuições a partidos políticos, campanhas ou candidatos em nome das empresas do Ecossistema. Doações sociais, filantrópicas ou patrocínios institucionais somente são admitidos com finalidade legítima, aprovação formal por alçada, registro contábil transparente e diligência sobre o beneficiário, jamais como contrapartida disfarçada de vantagem indevida."],
      },
    ],
  },
  {
    title: "Parte 16 — Canal de Denúncias e Não Retaliação",
    subsections: [
      {
        paragraphs: ["A Fast mantém um Canal de Denúncias para o relato de suspeitas de violação a esta Política, à legislação ou às normas internas. O canal está disponível a colaboradores, franqueados, fornecedores, clientes e demais partes interessadas."],
      },
      {
        heading: "Princípios do canal",
        items: [
          "Confidencialidade: as manifestações são tratadas com confidencialidade e podem ser feitas de forma anônima.",
          "Não retaliação: nenhuma retaliação será admitida contra quem relatar de boa-fé uma suspeita.",
          "Boa-fé: relatos de má-fé, com informações falsas e intenção de prejudicar, também constituem violação.",
          "Apuração: toda manifestação é registrada, apurada e tratada de forma imparcial pelo Jurídico e Compliance.",
        ],
      },
      {
        paragraphs: ["Diante de dúvida sobre a conduta correta ou de conhecimento de possível irregularidade, o dever de cada integrante do Ecossistema é reportar. O silêncio diante de um desvio conhecido também é uma falha."],
      },
    ],
  },
  {
    title: "Parte 17 — Investigação e Medidas Disciplinares",
    subsections: [
      {
        paragraphs: [
          "As denúncias e indícios de irregularidade são apurados de forma imparcial, sigilosa e proporcional, assegurando o direito de defesa. Comprovada a violação, aplicam-se medidas disciplinares proporcionais à gravidade, que podem incluir advertência, suspensão, desligamento por justa causa e rescisão de contratos, sem prejuízo das responsabilidades civil, criminal e administrativa cabíveis.",
          "As medidas aplicam-se a todos os níveis hierárquicos, sem exceção. A posição ou o desempenho de um colaborador não afastam a responsabilização por violações a esta Política.",
        ],
      },
    ],
  },
  {
    title: "Parte 18 — Treinamento, Comunicação e Monitoramento",
    subsections: [
      {
        paragraphs: ["O Programa de Integridade é vivo e proporcional aos riscos do Ecossistema. Para isso, a Fast promove comunicação e capacitação periódica sobre esta Política; monitora riscos por meio de auditorias, conciliações e indicadores; e revisa continuamente controles e políticas."],
        items: [
          "Todos os colaboradores devem conhecer esta Política e participar dos treinamentos aplicáveis à sua função.",
          "As áreas de maior exposição a risco recebem capacitação específica.",
          "O Jurídico e Compliance reporta periodicamente à CEO e ao Conselho Consultivo indicadores de conformidade e riscos críticos.",
        ],
      },
    ],
  },
  {
    title: "Parte 19 — Vigência, Revisão e Aprovação",
    subsections: [
      {
        paragraphs: [
          "Esta Política entra em vigor na data de sua aprovação pela CEO e pelo Conselho Consultivo e permanece válida por prazo indeterminado. Será revisada, no mínimo, anualmente, ou sempre que houver alteração legal, regulatória ou organizacional relevante. A gestão e a atualização desta Política competem à área de Jurídico e Compliance do CSC.",
          "Elaboração e revisão: 08/2026 — REV 0. Aprovação: CEO e Conselho Consultivo do Ecossistema FAST.",
        ],
      },
    ],
  },
  {
    title: "Anexo I — Termo de Ciência e Compromisso",
    subsections: [
      {
        paragraphs: [
          "Declaro que recebi, li e compreendi a Política de Compliance e Integridade do Ecossistema FAST, comprometendo-me a cumpri-la integralmente no exercício de minhas funções, bem como a comunicar, pelos canais adequados, qualquer suspeita de violação de que venha a ter conhecimento.",
          "Campos do termo: Nome; Empresa / Área; Cargo; Data; Assinatura.",
        ],
      },
    ],
  },
]
