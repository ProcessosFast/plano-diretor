export interface PolicySubsection {
  heading?: string
  paragraphs?: string[]
  items?: string[]
}

export interface PolicyPart {
  title: string
  subsections: PolicySubsection[]
}

export const CSC_POLICY_META = {
  codigo: "CSC.P.I-001",
  versao: "01-2026",
  revisao: "0 · Anual",
  vigencia: "2026",
  elaboracao: "Comitê de Governança e Compliance",
  aprovacao: "Diretoria / Conselho Consultivo",
  responsavel: "Centro de Serviços Compartilhados (CSC)",
  classificacao: "Política Interna Corporativa",
  finalidade:
    "O Centro de Serviços Compartilhados (CSC) é a unidade corporativa responsável por prover serviços administrativos compartilhados às empresas do Ecossistema FAST, promovendo padronização, eficiência operacional, conformidade, controle interno e suporte à tomada de decisão por meio de processos integrados e informações confiáveis.",
  objetivo:
    "Estabelecer as diretrizes corporativas que orientam a atuação do CSC, definindo princípios, responsabilidades, controles e padrões mínimos para a execução das atividades administrativas do Ecossistema FAST, assegurando conformidade, eficiência operacional, padronização dos processos e suporte à tomada de decisão.",
}

export const CSC_POLICY_PARTS: PolicyPart[] = [
  {
    title: "Parte 1 — Disposições Gerais",
    subsections: [
      { heading: "Objetivo", paragraphs: ["Estabelecer as regras comuns a todas as áreas do CSC, aplicáveis a todos os colaboradores, e que complementam as diretrizes específicas de cada área."] },
      { heading: "Princípios", items: ["Integridade, ética e conformidade legal.", "Segregação de funções e rastreabilidade das aprovações.", "Padronização de processos e informações confiáveis.", "Melhoria contínua e accountability."] },
      { heading: "Conduta e ética", items: ["Vedados assédio, discriminação, violência, bullying, uso de álcool ou drogas no trabalho e qualquer forma de suborno ou vantagem indevida.", "Uso adequado dos bens e equipamentos da empresa; observância do código de vestimenta.", "Descumprimento segue escala disciplinar hierárquica: orientação, advertência verbal, advertência escrita, suspensão e desligamento, conforme a gravidade."] },
      { heading: "Jornada, intervalos e ambiente", items: ["A jornada e os intervalos observam a CLT e o contrato de cada colaborador; os horários e o intervalo de refeição são definidos por área e unidade. Horas extras seguem os adicionais legais e acordo prévio.", "Limpeza e organização de escritórios, copa, refeitório e áreas comuns, com responsabilidades definidas (apoio da equipe de ASG).", "Ponto a padronizar: as políticas de origem divergem entre 08h–18h e 44h semanais — ver Anexo de Pendências."] },
      { heading: "Sistemas oficiais e rastreabilidade", items: ["Toda solicitação e execução ocorre por chamado no sistema oficial da área (SULTS, SAP, Nasajon, SharePoint, conforme o caso).", "WhatsApp e e-mail são apenas apoio; decisões sem registro no sistema não têm validade.", "Documentos e evidências arquivados nos repositórios corporativos, com registro de responsáveis, datas e autorizações."] },
      { heading: "Não conformidade e planos de ação", paragraphs: ["Todo desvio identificado gera não conformidade (NC), com causa raiz, responsável, prazo, prioridade e evidência de conclusão, acompanhada pela Auditoria Interna."] },
      { heading: "Revisão", paragraphs: ["Esta política é revisada no mínimo uma vez por ano, ou semestralmente nas áreas de maior risco (RH e Financeiro), e sempre que houver mudança relevante de processo, risco ou legislação."] },
    ],
  },
  {
    title: "Parte 2 — Financeiro e Tesouraria",
    subsections: [
      { heading: "Objetivo", paragraphs: ["Estabelecer as diretrizes para a gestão financeira e de tesouraria do Ecossistema FAST, disciplinando os processos relacionados às disponibilidades financeiras, contas a pagar, contas a receber, fluxo de caixa, relacionamento bancário, aplicações financeiras, captação de recursos e controles financeiros, em conformidade com as diretrizes corporativas e a Matriz de Alçadas."] },
      { heading: "Escopo", paragraphs: ["Abrange os processos de contas a pagar, contas a receber, fluxo de caixa, gestão de caixa, movimentações bancárias, aplicações financeiras, captação de recursos, gestão de garantias, relacionamento com instituições financeiras e demais operações financeiras das empresas do Ecossistema."] },
      { heading: "Gestão Financeira", items: ["As movimentações financeiras deverão ser registradas e processadas por meio dos sistemas corporativos oficiais, observando rastreabilidade, integridade das informações e segregação de funções.", "Contas a pagar, contas a receber, fluxo de caixa e conciliações deverão seguir os procedimentos operacionais aprovados pela organização.", "Nenhum pagamento ou recebimento poderá ser realizado sem documentação de suporte e as aprovações previstas na Matriz de Alçadas.", "As informações financeiras deverão ser registradas de forma íntegra, tempestiva e em conformidade com as diretrizes corporativas e a legislação aplicável.", "Exceções aos processos financeiros deverão possuir justificativa formal, aprovação da autoridade competente e registro para fins de controle e auditoria."] },
      { heading: "Gestão de Caixa e Tesouraria", items: ["A gestão das disponibilidades financeiras deverá observar critérios de liquidez, controle e mitigação de riscos financeiros.", "As contas bancárias corporativas deverão possuir responsáveis formalmente designados e operar conforme os níveis de autorização definidos pela organização.", "Aplicações financeiras, captações de recursos, concessão de garantias e demais operações financeiras deverão observar as diretrizes corporativas, a Matriz de Alçadas e os critérios de gestão de riscos aprovados pela Administração.", "O relacionamento com instituições financeiras deverá ser conduzido de forma centralizada, buscando eficiência operacional, transparência e controle.", "Toda movimentação bancária deverá possuir registro, rastreabilidade e documentação que permita sua verificação e auditoria."] },
      { heading: "Controles Internos", items: ["Controle das disponibilidades financeiras.", "Controle das movimentações bancárias.", "Segregação de funções nos processos financeiros.", "Controle das aprovações conforme a Matriz de Alçadas.", "Conciliação das movimentações financeiras.", "Controle da documentação de suporte.", "Registro e tratamento das não conformidades financeiras."] },
    ],
  },
  {
    title: "Parte 3 — Controladoria",
    subsections: [
      { heading: "Objetivo", paragraphs: ["Estabelecer as diretrizes para a atuação da Controladoria, definindo os princípios aplicáveis ao planejamento orçamentário, ao acompanhamento do desempenho econômico-financeiro, à consolidação das informações gerenciais e ao suporte à tomada de decisão da Administração."] },
      { heading: "Diretrizes", items: ["O planejamento orçamentário deverá ser elaborado conforme as diretrizes estratégicas da organização.", "O orçamento corporativo deverá contemplar critérios uniformes de elaboração, revisão e acompanhamento.", "Alterações relevantes no orçamento deverão observar as alçadas e os processos de aprovação definidos pela organização.", "As informações orçamentárias deverão ser registradas e mantidas em sistemas oficiais."] },
      { heading: "Informações Gerenciais", items: ["A Controladoria deverá consolidar as informações econômico-financeiras necessárias ao acompanhamento do desempenho da organização.", "Os critérios de consolidação e rateio deverão observar metodologias corporativas formalmente aprovadas.", "As análises gerenciais deverão utilizar critérios padronizados, permitindo comparabilidade entre empresas, unidades e períodos."] },
      { heading: "Consolidação e painéis", items: ["A Controladoria deverá disponibilizar informações gerenciais por meio de indicadores e painéis corporativos definidos pela Administração.", "Os indicadores deverão ser revisados periodicamente conforme as necessidades estratégicas da organização."] },
    ],
  },
  {
    title: "Parte 4 — Contabilidade",
    subsections: [
      { heading: "Objetivo", paragraphs: ["Estabelecer as diretrizes para a gestão contábil do Ecossistema FAST, disciplinando os critérios para o registro, consolidação, controle e disponibilização das informações contábeis, em conformidade com a legislação vigente, os princípios contábeis aplicáveis e as diretrizes corporativas."] },
      { heading: "Escopo", paragraphs: ["Abrange os processos de escrituração contábil, fechamento contábil, elaboração das demonstrações financeiras, conciliações contábeis, atendimento às obrigações legais, guarda documental e suporte às auditorias."] },
      { heading: "Diretrizes", items: ["Os registros contábeis deverão ser realizados de forma padronizada, íntegra, tempestiva e em conformidade com a legislação e as normas contábeis aplicáveis.", "A escrituração contábil deverá observar o regime de tributação e as características específicas de cada empresa do Ecossistema.", "As demonstrações contábeis deverão ser elaboradas com base em informações consistentes, provenientes dos sistemas corporativos oficiais.", "Os processos de fechamento contábil deverão observar o calendário corporativo e os procedimentos operacionais definidos pela organização.", "Ajustes, reclassificações e demais alterações relevantes nos registros contábeis deverão possuir documentação de suporte, justificativa e aprovação conforme as diretrizes internas.", "Os livros, registros e documentos contábeis deverão ser mantidos e arquivados em conformidade com os prazos legais e as normas internas de gestão documental.", "A Contabilidade deverá disponibilizar informações que apoiem a gestão, os processos de auditoria e o atendimento às obrigações legais e regulatórias.", "As obrigações acessórias deverão observar os requisitos legais aplicáveis e os procedimentos estabelecidos pela organização."] },
    ],
  },
  {
    title: "Parte 5 — Fiscal e Tributária",
    subsections: [
      { heading: "Objetivo", paragraphs: ["Estabelecer as diretrizes para a gestão fiscal e tributária das empresas do Ecossistema FAST, disciplinando os critérios para o cumprimento das obrigações tributárias, a conformidade fiscal, o planejamento tributário e o gerenciamento dos riscos relacionados à legislação aplicável."] },
      { heading: "Escopo", paragraphs: ["Abrange os processos de apuração de tributos, cumprimento das obrigações acessórias, análise das operações fiscais, planejamento tributário, gestão de créditos tributários, atendimento às fiscalizações e acompanhamento das alterações na legislação tributária."] },
      { heading: "Diretrizes", items: ["Os processos fiscais e tributários deverão ser executados em conformidade com a legislação vigente e com as normas internas da organização.", "A apuração dos tributos e o cumprimento das obrigações acessórias deverão observar o regime tributário aplicável a cada empresa do Ecossistema.", "As operações fiscais deverão ser analisadas previamente quanto à correta aplicação da legislação tributária e aos impactos fiscais decorrentes.", "Os documentos fiscais deverão ser emitidos, conferidos, registrados e arquivados de acordo com os requisitos legais e os procedimentos corporativos.", "O planejamento tributário deverá observar os princípios da legalidade, da transparência e da mitigação de riscos, sendo submetido às aprovações previstas na governança corporativa.", "Os créditos tributários deverão ser identificados, controlados e tratados conforme os critérios legais e as diretrizes estabelecidas pela organização.", "As alterações na legislação tributária deverão ser monitoradas continuamente, com avaliação dos impactos sobre os processos internos.", "O atendimento às fiscalizações, auditorias e demais órgãos competentes deverá ser realizado de forma coordenada, com base em informações íntegras, rastreáveis e devidamente documentadas."] },
      { heading: "Controles Internos", items: ["Controle do cumprimento das obrigações tributárias.", "Rastreabilidade das informações e documentos fiscais.", "Controle das alterações na legislação aplicável.", "Controle dos créditos tributários.", "Registro e tratamento das não conformidades fiscais.", "Suporte às auditorias internas e externas."] },
    ],
  },
  {
    title: "Parte 6 — Departamento Pessoal",
    subsections: [
      { heading: "Objetivo", paragraphs: ["Estabelecer as diretrizes para a gestão dos processos de administração de pessoal do Ecossistema FAST, disciplinando os critérios aplicáveis à admissão, manutenção do vínculo, administração de benefícios, folha de pagamento, férias, desligamentos, gestão documental e atendimento às demandas trabalhistas, em conformidade com a legislação vigente e as diretrizes corporativas."] },
      { heading: "Escopo", paragraphs: ["Abrange os processos de admissão, contratação de pessoas físicas e jurídicas, administração de benefícios, controle de jornada, processamento da folha de pagamento, férias, desligamentos, gestão documental, atendimento às demandas trabalhistas e relacionamento com os órgãos competentes."] },
      { heading: "Administração de Pessoal", items: ["Os processos de admissão, movimentação, férias, afastamentos e desligamentos deverão observar a legislação vigente, as normas internas e os procedimentos corporativos.", "A formalização das relações de trabalho e de prestação de serviços deverá ocorrer antes do início das atividades, mediante documentação válida e registros nos sistemas oficiais.", "Os contratos de trabalho, prestação de serviços e demais instrumentos deverão observar os modelos e critérios aprovados pela organização."] },
      { heading: "Benefícios, Jornada e Folha de Pagamento", items: ["A administração dos benefícios deverá observar as políticas corporativas, os critérios de elegibilidade e as condições estabelecidas pela organização.", "O controle da jornada e o processamento da folha de pagamento deverão seguir a legislação aplicável, os acordos vigentes e os procedimentos internos.", "Alterações que impactem a folha de pagamento deverão possuir documentação de suporte, aprovação quando aplicável e registro nos sistemas oficiais."] },
      { heading: "Gestão Documental", items: ["Os registros funcionais e documentos relacionados aos colaboradores e prestadores de serviço deverão ser mantidos de forma íntegra, atualizada, rastreável e conforme os prazos legais de retenção.", "As informações de administração de pessoal deverão ser registradas exclusivamente nos sistemas corporativos autorizados."] },
      { heading: "Demandas Trabalhistas", items: ["O Departamento Pessoal deverá atuar como área de apoio administrativo no atendimento às demandas trabalhistas, em articulação com o Jurídico.", "O tratamento de notificações, fiscalizações, processos judiciais e demais demandas deverá observar os fluxos corporativos definidos pela organização.", "Informações e documentos necessários às demandas trabalhistas deverão ser disponibilizados de forma íntegra, tempestiva e rastreável."] },
      { heading: "Controles Internos", items: ["Controle dos registros funcionais.", "Controle da documentação obrigatória.", "Controle da folha de pagamento.", "Controle dos benefícios concedidos.", "Controle dos desligamentos.", "Controle das obrigações trabalhistas.", "Rastreabilidade das alterações cadastrais."] },
    ],
  },
  {
    title: "Parte 7 — Recrutamento e Seleção",
    subsections: [
      { heading: "Objetivo", paragraphs: ["Estabelecer as diretrizes para os processos de recrutamento e seleção do Ecossistema FAST, disciplinando os critérios para atração, avaliação e seleção de candidatos, em conformidade com os princípios de transparência, imparcialidade, igualdade de oportunidades, proteção de dados pessoais e atendimento às necessidades da organização."] },
      { heading: "Escopo", paragraphs: ["Abrange os processos de abertura de vagas, definição de perfil, divulgação, recrutamento, seleção, entrevistas, aprovação de candidatos, comunicação entre as áreas envolvidas e integração com os processos de admissão."] },
      { heading: "Recrutamento e Seleção", items: ["Os processos deverão observar critérios objetivos, previamente definidos para cada função, assegurando igualdade de oportunidades e decisões fundamentadas em competências técnicas e comportamentais.", "Toda contratação deverá estar vinculada à aprovação da vaga, conforme os fluxos e níveis de autorização estabelecidos pela organização.", "A definição do perfil da vaga deverá ser formalizada antes do início do processo seletivo.", "O processo seletivo deverá ser conduzido de forma padronizada, garantindo rastreabilidade das etapas, registros das decisões e confidencialidade das informações.", "Os canais de divulgação de vagas deverão ser aqueles oficialmente aprovados pela organização."] },
      { heading: "Proteção de Dados e Confidencialidade", items: ["As informações dos candidatos deverão ser tratadas de forma confidencial, observando a legislação aplicável sobre proteção de dados pessoais.", "O acesso às informações dos candidatos deverá ser restrito às pessoas diretamente envolvidas no processo seletivo."] },
      { heading: "Integração com as Demais Áreas", items: ["Após a aprovação do candidato, as áreas responsáveis deverão atuar de forma integrada para viabilizar admissão, acessos, recursos e equipamentos.", "A integração entre Recrutamento e Seleção, Departamento Pessoal, TI, Administrativo e demais áreas deverá observar os procedimentos corporativos."] },
      { heading: "Controles Internos", items: ["Controle das solicitações de contratação.", "Registro das etapas do processo seletivo.", "Controle das aprovações das vagas.", "Rastreabilidade das decisões de seleção.", "Controle da documentação do processo seletivo.", "Controle do tratamento dos dados pessoais dos candidatos."] },
    ],
  },
  {
    title: "Parte 8 — Treinamento e Desenvolvimento",
    subsections: [
      { heading: "Objetivo", paragraphs: ["Estabelecer as diretrizes para os processos de treinamento e desenvolvimento do Ecossistema FAST, disciplinando o planejamento, a execução, o registro e a avaliação das ações de capacitação, com foco no desenvolvimento das competências organizacionais."] },
      { heading: "Escopo", paragraphs: ["Abrange o levantamento de necessidades de treinamento, planejamento das ações de capacitação, desenvolvimento de colaboradores, integração institucional, treinamentos obrigatórios, registro das evidências e avaliação da eficácia."] },
      { heading: "Planejamento", items: ["As ações deverão ser planejadas com base nas necessidades organizacionais, requisitos legais, mudanças de processos e avaliação de desempenho.", "O planejamento deverá estar alinhado aos objetivos estratégicos da organização."] },
      { heading: "Execução", items: ["As ações de treinamento deverão ser realizadas conforme os procedimentos corporativos e registradas nos sistemas oficiais.", "Os programas poderão contemplar integração institucional, desenvolvimento técnico e comportamental, e treinamentos obrigatórios."] },
      { heading: "Avaliação", items: ["As ações deverão possuir critérios para avaliação de participação, aprendizagem e eficácia.", "Os resultados deverão subsidiar ações de melhoria contínua e aperfeiçoamento dos programas."] },
      { heading: "Controles Internos", items: ["Controle do planejamento anual de treinamentos.", "Controle dos registros das ações de capacitação.", "Controle da participação dos colaboradores.", "Controle dos treinamentos obrigatórios.", "Registro das avaliações de eficácia."] },
    ],
  },
  {
    title: "Parte 9 — Reembolsos e Viagens",
    subsections: [
      { heading: "Objetivo", paragraphs: ["Estabelecer as diretrizes para a gestão de despesas corporativas, viagens a serviço e processos de reembolso, disciplinando os critérios gerais de autorização, prestação de contas, controle e responsabilização, em conformidade com a Política Corporativa de Reembolsos e a Matriz de Alçadas."] },
      { heading: "Escopo", paragraphs: ["Abrange solicitação de viagens corporativas, realização de despesas em nome da organização, prestação de contas, reembolso de despesas autorizadas e aquisição direta de bens e serviços."] },
      { heading: "Despesas Corporativas", items: ["As despesas deverão observar os princípios da necessidade, economicidade, razoabilidade, transparência e interesse corporativo.", "A aquisição direta de bens e serviços deverá ser priorizada sempre que operacionalmente viável.", "O reembolso de despesas constitui medida excepcional e deverá observar as diretrizes da Política Corporativa de Reembolsos."] },
      { heading: "Viagens Corporativas", items: ["As viagens deverão ser previamente autorizadas, observando os níveis de aprovação definidos na Matriz de Alçadas.", "As despesas decorrentes de viagens deverão atender aos critérios de elegibilidade, limites e documentação da Política Corporativa de Reembolsos.", "A prestação de contas deverá ser realizada conforme os procedimentos e prazos estabelecidos."] },
      { heading: "Aprovações e Controles", items: ["Toda solicitação de reembolso deverá possuir documentação comprobatória e observar os fluxos de aprovação estabelecidos.", "Situações excepcionais deverão ser formalmente justificadas e aprovadas pela autoridade competente, conforme a Matriz de Alçadas.", "Os processos de reembolso estarão sujeitos aos controles internos, conferências e auditorias."] },
      { heading: "Controles Internos", items: ["Controle das solicitações de reembolso.", "Controle das prestações de contas.", "Controle das aprovações conforme a Matriz de Alçadas.", "Controle da documentação comprobatória.", "Registro das exceções e das não conformidades."] },
    ],
  },
  {
    title: "Parte 10 — Faturamento",
    subsections: [
      { heading: "Objetivo", paragraphs: ["Estabelecer as diretrizes para os processos de faturamento do Ecossistema FAST, disciplinando a emissão de documentos fiscais, o registro das operações comerciais, a integração com financeiro, fiscal e comercial, e os controles aplicáveis, em conformidade com a legislação, a Matriz de Alçadas e as diretrizes corporativas."] },
      { heading: "Escopo", paragraphs: ["Abrange emissão de documentos fiscais, registro das operações de venda, faturamento de serviços, devoluções, cancelamentos, transferências entre empresas e demais operações de faturamento."] },
      { heading: "Emissão de Documentos Fiscais", items: ["A emissão deverá observar a legislação vigente, as normas internas e os procedimentos corporativos.", "O faturamento deverá ser realizado exclusivamente com base em operações devidamente autorizadas e suportadas por documentação.", "Os documentos fiscais deverão refletir corretamente a natureza da operação e as informações dos sistemas corporativos."] },
      { heading: "Controles do Processo", items: ["Os processos deverão observar segregação de funções, rastreabilidade, integridade das informações e conformidade fiscal.", "Alterações, cancelamentos, devoluções e demais ajustes deverão possuir justificativa formal, documentação de suporte e aprovação.", "As transferências entre empresas do Ecossistema deverão observar as diretrizes corporativas e os procedimentos fiscais."] },
      { heading: "Integração com as Demais Áreas", items: ["O faturamento deverá atuar de forma integrada com Comercial, Financeira, Fiscal, Contábil e Logística.", "Formação de preços, descontos, políticas comerciais e comissionamento deverão observar as políticas corporativas específicas e a Matriz de Alçadas."] },
      { heading: "Controles Internos", items: ["Controle das emissões fiscais.", "Controle das alterações, cancelamentos e devoluções.", "Rastreabilidade das operações faturadas.", "Controle da documentação de suporte.", "Segregação de funções.", "Conciliação entre faturamento e registros financeiros."] },
    ],
  },
  {
    title: "Parte 11 — Compras Administrativas",
    subsections: [
      { heading: "Objetivo", paragraphs: ["Estabelecer as diretrizes para os processos de compras administrativas do Ecossistema FAST, disciplinando a aquisição de bens e serviços de uso interno, a contratação de fornecedores e a gestão de contratos corporativos, observando economicidade, transparência, isonomia e rastreabilidade."] },
      { heading: "Escopo", paragraphs: ["Abrange requisição de compras administrativas, seleção e homologação de fornecedores, contratação de bens e serviços, gestão de contratos corporativos e acompanhamento das aquisições. Não se aplica às aquisições de mercadorias destinadas à comercialização ou aos processos de suprimentos produtivos, que possuem diretrizes específicas."] },
      { heading: "Requisição e Contratação", items: ["Toda aquisição administrativa deverá ser formalmente solicitada e justificada.", "Os processos de contratação deverão observar necessidade, economicidade, competitividade, transparência e interesse da organização.", "As aquisições deverão respeitar os níveis de aprovação definidos na Matriz de Alçadas."] },
      { heading: "Gestão de Fornecedores", items: ["A seleção e contratação deverão observar critérios técnicos, comerciais, financeiros e de conformidade.", "Fornecedores poderão ser submetidos a homologação, qualificação e avaliação conforme o nível de risco.", "A contratação deverá observar integridade, ética e prevenção de conflitos de interesse."] },
      { heading: "Gestão de Contratos", items: ["Os contratos corporativos deverão formalizar objeto, responsabilidades, níveis de serviço, condições comerciais e critérios de alteração/renovação/encerramento.", "A execução contratual deverá ser acompanhada pela área responsável."] },
      { heading: "Controles Internos", items: ["Controle das requisições de compras.", "Controle das aprovações conforme a Matriz de Alçadas.", "Controle da homologação de fornecedores.", "Controle dos contratos corporativos.", "Controle do recebimento de bens e serviços.", "Registro das não conformidades e exceções."] },
    ],
  },
  {
    title: "Parte 12 — Tecnologia da Informação",
    subsections: [
      { heading: "Objetivo", paragraphs: ["Estabelecer as diretrizes para a gestão dos recursos de Tecnologia da Informação, disciplinando utilização dos ativos, segurança da informação, gestão de acessos, continuidade dos serviços, proteção de dados e governança de TI, em conformidade com a Política de TI (POL-TI-001)."] },
      { heading: "Escopo", paragraphs: ["Abrange gestão de usuários e acessos, infraestrutura, ativos de TI, segurança da informação, continuidade dos serviços, proteção de dados, suporte técnico e contratação de fornecedores de tecnologia."] },
      { heading: "Governança de TI", items: ["Os recursos de TI deverão ser utilizados exclusivamente para fins relacionados às atividades da organização.", "Os processos deverão observar disponibilidade, integridade, confidencialidade, rastreabilidade e continuidade.", "A gestão dos ativos tecnológicos deverá contemplar aquisição, utilização, manutenção, substituição e descarte."] },
      { heading: "Gestão de Acessos e Segurança", items: ["O acesso aos sistemas corporativos deverá observar necessidade, perfil de acesso e segregação de funções.", "Os acessos deverão ser concedidos, alterados e revogados conforme os níveis de autorização definidos.", "Os usuários são responsáveis pela utilização adequada de suas credenciais."] },
      { heading: "Continuidade dos Serviços", items: ["Os serviços de TI deverão observar continuidade operacional, recuperação e disponibilidade.", "Os processos de continuidade e recuperação deverão ser revisados e testados periodicamente."] },
      { heading: "Proteção de Dados", items: ["O tratamento de dados pessoais deverá observar a legislação aplicável e as políticas corporativas de proteção de dados.", "Fornecedores de TI deverão atender aos requisitos de segurança e proteção de dados estabelecidos."] },
      { heading: "Controles Internos", items: ["Controle dos acessos aos sistemas corporativos.", "Controle dos ativos de TI.", "Controle das solicitações de suporte e mudanças.", "Controle dos incidentes de segurança da informação.", "Controle da continuidade dos serviços de TI.", "Controle dos fornecedores de tecnologia."] },
    ],
  },
  {
    title: "Parte 13 — Desenvolvimento de Software",
    subsections: [
      { heading: "Objetivo", paragraphs: ["Estabelecer as diretrizes para o desenvolvimento, manutenção, evolução e disponibilização de soluções de software, disciplinando desenvolvimento, qualidade, segurança da informação, utilização de Inteligência Artificial, propriedade intelectual e governança do ciclo de vida das aplicações."] },
      { heading: "Escopo", paragraphs: ["Abrange desenvolvimento, manutenção corretiva/evolutiva/adaptativa, testes, homologação, publicação, documentação técnica, uso de IA, gestão de versões e administração dos ambientes."] },
      { heading: "Desenvolvimento de Software", items: ["Deverá observar padrões de qualidade, segurança, documentação, rastreabilidade e controle de versões.", "Todo desenvolvimento deverá seguir o ciclo de vida: desenvolvimento, testes, homologação e disponibilização em produção.", "Alterações em sistemas deverão ser formalmente registradas, avaliadas e aprovadas."] },
      { heading: "Utilização de Inteligência Artificial", items: ["Ferramentas de IA poderão ser utilizadas como apoio a desenvolvimento, análise, documentação, revisão de código e automação de tarefas.", "A utilização de IA não substitui a responsabilidade técnica da equipe pela qualidade, segurança, conformidade e funcionamento das soluções.", "É vedado compartilhar informações confidenciais, dados pessoais ou códigos proprietários em ferramentas de IA, salvo autorização expressa e conformidade com as políticas de segurança.", "Todo conteúdo gerado com apoio de IA deverá ser analisado, validado e aprovado pela equipe técnica antes do uso em ambientes corporativos."] },
      { heading: "Segurança e Governança", items: ["Os ambientes de desenvolvimento, homologação e produção deverão observar segregação, controle de acesso e rastreabilidade.", "Código-fonte, documentação técnica e demais ativos constituem patrimônio intelectual e deverão ser armazenados nos repositórios corporativos autorizados."] },
      { heading: "Controles Internos", items: ["Controle das solicitações de desenvolvimento.", "Controle das versões de software.", "Controle das publicações em ambiente produtivo.", "Controle dos acessos aos repositórios de código.", "Controle das alterações e das aprovações técnicas.", "Controle da utilização de ferramentas de Inteligência Artificial."] },
    ],
  },
  {
    title: "Parte 14 — Jurídico",
    subsections: [
      { heading: "Objetivo", paragraphs: ["Estabelecer as diretrizes para a atuação jurídica do Ecossistema FAST, disciplinando consultoria jurídica, elaboração e gestão de contratos, governança societária, gestão do contencioso, propriedade intelectual e suporte à conformidade legal."] },
      { heading: "Escopo", paragraphs: ["Abrange consultoria jurídica preventiva, elaboração/revisão/gestão de contratos, atos societários, procurações, contencioso judicial e administrativo, propriedade intelectual, gestão de riscos legais e suporte às áreas."] },
      { heading: "Consultoria Jurídica", items: ["O Jurídico deverá prestar suporte técnico às áreas na interpretação e aplicação da legislação, mitigando riscos legais.", "Demandas jurídicas deverão ser formalmente registradas e tratadas conforme os procedimentos corporativos."] },
      { heading: "Contratos e Governança Societária", items: ["Os contratos deverão observar os padrões corporativos, a legislação vigente e os níveis de aprovação da Matriz de Alçadas.", "Instrumentos contratuais, atos societários e procurações deverão ser elaborados, revisados, formalizados e mantidos conforme as diretrizes de governança documental.", "A gestão do ciclo de vida dos contratos deverá contemplar vigência, alterações, renovações e encerramentos."] },
      { heading: "Contencioso e Gestão de Riscos", items: ["O contencioso judicial e administrativo deverá ser conduzido pelo Jurídico ou por profissionais formalmente designados.", "Os processos deverão ser monitorados continuamente, com reporte às instâncias competentes em caso de risco relevante."] },
      { heading: "Propriedade Intelectual e Conformidade", items: ["Os ativos de propriedade intelectual deverão ser identificados, protegidos e geridos conforme a legislação e as diretrizes corporativas.", "O Jurídico deverá atuar em conjunto com Compliance e Governança sempre que necessário."] },
      { heading: "Controles Internos", items: ["Controle dos contratos corporativos.", "Controle das procurações e atos societários.", "Controle dos processos judiciais e administrativos.", "Controle da vigência contratual.", "Controle dos registros de propriedade intelectual.", "Registro e acompanhamento dos riscos jurídicos."] },
    ],
  },
  {
    title: "Parte 15 — Compliance e Integridade",
    subsections: [
      { heading: "Objetivo", paragraphs: ["Estabelecer as diretrizes do Programa de Compliance e Integridade, disciplinando princípios, responsabilidades e controles destinados à promoção da ética, integridade, conformidade legal e regulatória, prevenção de fraudes, mitigação de riscos e fortalecimento da governança corporativa."] },
      { heading: "Escopo", paragraphs: ["Abrange o Programa de Compliance, Código de Conduta, gestão de conflitos de interesses, prevenção à fraude e corrupção, gestão de riscos de integridade, canal de denúncias e promoção da cultura ética."] },
      { heading: "Ética e Integridade", items: ["Colaboradores, administradores, terceiros e parceiros deverão atuar em conformidade com o Código de Conduta, as políticas corporativas e a legislação.", "As decisões organizacionais deverão observar ética, integridade, transparência, imparcialidade e responsabilidade corporativa."] },
      { heading: "Conflito de Interesses", items: ["Situações de conflito de interesses deverão ser declaradas, avaliadas e tratadas conforme os procedimentos estabelecidos.", "Pessoas com potencial conflito não deverão participar de decisões nas quais possuam interesse direto ou indireto."] },
      { heading: "Prevenção à Fraude e Corrupção", items: ["É vedada qualquer prática de fraude, corrupção, suborno, pagamento ou vantagem indevida.", "As relações com clientes, fornecedores, parceiros e agentes públicos deverão observar legalidade, integridade e transparência."] },
      { heading: "Gestão de Riscos e Controles", items: ["Os riscos de integridade, conformidade e governança deverão ser identificados, avaliados, monitorados e tratados.", "As exceções aos controles deverão ser formalmente justificadas, aprovadas pela autoridade competente e registradas para auditoria."] },
      { heading: "Canal de Denúncias", items: ["A organização deverá manter mecanismos para recebimento e tratamento de relatos de desvios de conduta, irregularidades ou violações.", "Os relatos deverão ser tratados com confidencialidade, imparcialidade e proteção contra retaliações."] },
      { heading: "Controles Internos", items: ["Controle das declarações de conflito de interesses.", "Controle das ações de integridade e compliance.", "Controle das denúncias recebidas e tratadas.", "Controle das avaliações de terceiros.", "Controle dos riscos de integridade.", "Registro das exceções aos controles internos."] },
    ],
  },
  {
    title: "Parte 16 — Auditoria Interna",
    subsections: [
      { heading: "Objetivo", paragraphs: ["Estabelecer as diretrizes para a atuação da Auditoria Interna, disciplinando auditorias baseadas em risco, avaliação da conformidade dos processos, dos controles internos e dos inventários, e acompanhamento das ações corretivas."] },
      { heading: "Escopo", paragraphs: ["Abrange auditorias processuais, auditorias de inventário, avaliações de controles internos, verificação de conformidade com políticas e procedimentos, acompanhamento das ações corretivas e monitoramento da eficácia dos controles."] },
      { heading: "Independência e Objetividade", items: ["A Auditoria Interna deverá atuar com independência, imparcialidade e objetividade.", "Os trabalhos deverão ser conduzidos com base em critérios previamente definidos, evidências objetivas e metodologias aprovadas.", "Os auditores deverão atuar sem interferência das áreas auditadas."] },
      { heading: "Planejamento e Execução", items: ["As auditorias deverão ser planejadas considerando riscos, materialidade, criticidade dos processos e prioridades.", "As avaliações deverão verificar conformidade dos processos, efetividade dos controles internos e aderência às políticas e à legislação.", "As auditorias de inventário deverão garantir confiabilidade, rastreabilidade e integridade das contagens."] },
      { heading: "Tratamento das Não Conformidades", items: ["As não conformidades identificadas deverão ser registradas, classificadas e comunicadas às áreas responsáveis.", "As áreas auditadas são responsáveis pela elaboração e implementação dos planos de ação.", "A Auditoria Interna deverá acompanhar a implementação das ações corretivas e verificar sua eficácia."] },
      { heading: "Reporte e Governança", items: ["Os resultados deverão ser formalmente reportados às instâncias de governança competentes.", "Os trabalhos deverão manter registros que garantam rastreabilidade, transparência e integridade das evidências."] },
      { heading: "Controles Internos", items: ["Controle do Plano Anual de Auditoria.", "Controle das auditorias realizadas.", "Controle das não conformidades identificadas.", "Controle dos planos de ação.", "Controle das reavaliações.", "Registro das evidências de auditoria."] },
    ],
  },
]
