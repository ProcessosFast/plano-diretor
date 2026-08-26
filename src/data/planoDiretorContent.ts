export type PdBlock =
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; rows: string[][] }
  | { type: "callout"; text: string }
  | { type: "xref"; text: string }

export interface PdPanel {
  id: string
  badge: "aberto" | "gestor" | "confidencial"
  title: string
  blocks: PdBlock[]
}

export const PLANO_DIRETOR_PANELS: PdPanel[] = [
 {
  "id": "c1",
  "badge": "aberto",
  "title": "1. Resumo executivo",
  "blocks": [
   {
    "type": "p",
    "text": "O Plano Diretor de Governança, Arquitetura Societária e Modelo Operacional do Ecossistema FAST estabelece a base organizacional para o crescimento estruturado do grupo no período de 2026 a 2030."
   },
   {
    "type": "p",
    "text": "O projeto parte da evolução de um conjunto de empresas e unidades de negócio que cresceram com forte capacidade empreendedora, velocidade comercial e presença em diferentes etapas da cadeia da construção a seco. O novo ciclo exige transformar essa capacidade em uma arquitetura empresarial integrada, com governança, responsabilidades, processos e indicadores claramente definidos."
   },
   {
    "type": "p",
    "text": "A estrutura proposta separa de forma objetiva as funções de governança, controle societário, execução operacional, atuação comercial e prestação de serviços especializados. Essa separação reduz sobreposições, melhora a responsabilização dos gestores e cria condições para expansão nacional e internacional com maior segurança."
   },
   {
    "type": "h3",
    "text": "1.1 Estrutura central do modelo"
   },
   {
    "type": "ul",
    "items": [
     "Governança Corporativa, formada pelo Conselho Consultivo, CEO e Diretoria Executiva.",
     "Holdings, responsáveis pelo controle societário, proteção patrimonial, investimentos e direcionamento estratégico.",
     "Empresas Operacionais, responsáveis pela execução das atividades principais do Ecossistema.",
     "Empresas Comerciais, que constituem o Front Office e realizam a interface com clientes e mercados.",
     "Empresas Especializadas, que constituem o Back Office e prestam serviços administrativos, técnicos, logísticos e de engenharia.",
     "Rede de execução Steel Conecta, organizada como franquia e governada de forma compartilhada entre Franchising e Diretoria Técnica."
    ]
   },
   {
    "type": "h3",
    "text": "1.2 Empresas operacionais principais"
   },
   {
    "type": "p",
    "text": "No modelo consolidado, as principais plataformas operacionais são a MaxSteel, núcleo industrial do Ecossistema; a LMS/SUPPLY, responsável pelas vendas atacadistas; e a DCS/CM — Casa do Montador, responsável pelo varejo. Essas empresas são apoiadas por estruturas de importação, distribuição, tecnologia, logística, engenharia e serviços compartilhados."
   },
   {
    "type": "h3",
    "text": "1.3 Resultado esperado"
   },
   {
    "type": "table",
    "rows": [
     [
      "Tema",
      "Diretriz"
     ],
     [
      "Governança",
      "Decisões mais rápidas, claras e rastreáveis."
     ],
     [
      "Responsabilização",
      "Cada empresa e liderança responde por resultados, indicadores e planos de ação."
     ],
     [
      "Escala",
      "Estrutura preparada para incorporar novas unidades, filiais, canais e empresas."
     ],
     [
      "Eficiência",
      "Redução de duplicidades e concentração de serviços especializados."
     ],
     [
      "Rentabilidade",
      "Gestão por margem, contribuição, EBITDA, produtividade e capital empregado."
     ],
     [
      "Segurança",
      "Maior controle jurídico, fiscal, tributário, trabalhista, societário e contratual."
     ]
    ]
   },
   {
    "type": "h3",
    "text": "1.4 Diretriz de implantação"
   },
   {
    "type": "p",
    "text": "A implantação deverá ocorrer por fases, preservando a continuidade dos negócios. A formalização jurídica, tributária e trabalhista será precedida por validações técnicas, enquanto os processos, indicadores e responsabilidades poderão ser implantados progressivamente."
   },
   {
    "type": "callout",
    "text": "<b>Meta de implantação (Revisão 2):</b> o Grupo estabelece 31 de dezembro de 2026 como data-limite para que o modelo esteja 100% aprovado e em prática, com todas as empresas, contratos, processos e indicadores implantados."
   },
   {
    "type": "callout",
    "text": "<b>Síntese executiva:</b> o Plano Diretor transforma o Ecossistema FAST de um conjunto de operações conectadas pela liderança e pela marca em uma plataforma empresarial integrada, governada por regras, contratos, indicadores e responsabilidades."
   }
  ]
 },
 {
  "id": "c2",
  "badge": "aberto",
  "title": "2. Objetivos estratégicos",
  "blocks": [
   {
    "type": "p",
    "text": "Os objetivos estratégicos traduzem a ambição de crescimento do Ecossistema FAST em diretrizes organizacionais concretas. Eles orientam a construção da arquitetura societária, do modelo operacional, das políticas de governança e dos mecanismos de acompanhamento de resultados."
   },
   {
    "type": "h3",
    "text": "2.1 Objetivo geral"
   },
   {
    "type": "p",
    "text": "Estruturar o Ecossistema FAST como um grupo empresarial integrado, escalável, rentável e preparado para expansão, com clareza societária, disciplina de gestão, excelência operacional e especialização por canal e atividade."
   },
   {
    "type": "h3",
    "text": "2.2 Objetivos específicos"
   },
   {
    "type": "ul",
    "items": [
     "Definir claramente o papel das holdings, empresas operacionais, empresas comerciais e empresas especializadas.",
     "Separar quem governa, quem controla ativos, quem vende, quem executa e quem presta suporte.",
     "Fortalecer o Conselho Consultivo e o papel da CEO na coordenação do Ecossistema.",
     "Implantar um modelo de alçadas, rituais e indicadores que reduza decisões informais e dependência excessiva dos sócios.",
     "Consolidar a SUPPLY-LMS como plataforma responsável pelas vendas atacadistas.",
     "Consolidar a DCS-CM — Casa do Montador como plataforma responsável pelo varejo.",
     "Fortalecer a MaxSteel como núcleo industrial do Ecossistema.",
     "Posicionar a FAST Importação como unidade de negócio comercial de desenvolvimento internacional de fornecedores, cujas importações são executadas pelas empresas operacionais (MaxSteel, DCS/CM e LMS/SUPPLY).",
     "Centralizar serviços administrativos, financeiros, fiscais, contábeis, jurídicos, tecnológicos e de gestão no CSC.",
     "Organizar os serviços de Engenharia, Unity Company e Log Express como empresas especializadas e independentes.",
     "Formalizar contratos internos, critérios de rateio, remuneração por serviços e níveis de serviço.",
     "Criar uma arquitetura preparada para novas filiais, franquias, unidades industriais, aquisições e operações internacionais.",
     "Elevar a qualidade das informações gerenciais, permitindo decisões baseadas em dados e resultados."
    ]
   },
   {
    "type": "h3",
    "text": "2.3 Diretrizes de resultado"
   },
   {
    "type": "ul",
    "items": [
     "Crescimento com preservação de margem e geração de caixa.",
     "Aumento da produtividade por empresa, unidade, canal e colaborador.",
     "Redução de estoques improdutivos, perdas, retrabalhos e custos duplicados.",
     "Maior previsibilidade de vendas, compras, produção e logística.",
     "Expansão com padronização e controle.",
     "Desenvolvimento de lideranças capazes de antecipar desvios e solicitar apoio."
    ]
   },
   {
    "type": "h3",
    "text": "2.4 Horizonte 2026–2030"
   },
   {
    "type": "p",
    "text": "O horizonte estratégico pressupõe que o Ecossistema FAST deixará de ser administrado principalmente por relações informais e conhecimento concentrado em poucas pessoas, passando a operar por meio de processos, contratos, sistemas, alçadas, metas e rituais de gestão."
   }
  ]
 },
 {
  "id": "c3",
  "badge": "gestor",
  "title": "3. Princípios de governança e compliance",
  "blocks": [
   {
    "type": "h3",
    "text": "3.1 Finalidade"
   },
   {
    "type": "p",
    "text": "A governança corporativa tem por finalidade assegurar que as decisões do Ecossistema FAST sejam tomadas com clareza, responsabilidade, velocidade e alinhamento aos interesses de longo prazo do grupo."
   },
   {
    "type": "h3",
    "text": "3.2 Estrutura de governança"
   },
   {
    "type": "ul",
    "items": [
     "<b>Conselho Consultivo:</b> direcionamento estratégico, acompanhamento do desempenho e apoio às decisões de maior relevância.",
     "<b>CEO:</b> liderança executiva, integração das diretorias e responsabilidade pelo cumprimento do Plano Diretor.",
     "<b>Diretoria Executiva:</b> gestão das empresas e funções sob sua responsabilidade, com metas, orçamento e prestação de contas.",
     "<b>Gestores:</b> execução dos planos, controle dos indicadores, desenvolvimento das equipes e correção de desvios."
    ]
   },
   {
    "type": "h3",
    "text": "3.3 Conselho Consultivo"
   },
   {
    "type": "p",
    "text": "O Conselho Consultivo é composto por Kleber, Josélio, Nicole, Guilherme e Priscila. Seu encontro regular ocorre às terças-feiras, às 11 horas, sem prejuízo de reuniões extraordinárias."
   },
   {
    "type": "ul",
    "items": [
     "Estudar e avaliar novos negócios e oportunidades de crescimento para o Ecossistema.",
     "Aprovar diretrizes estratégicas e investimentos relevantes.",
     "Avaliar resultados consolidados e riscos críticos.",
     "Acompanhar projetos estruturantes e planos de implantação.",
     "Deliberar sobre mudanças societárias, aquisições, expansão e endividamento relevante.",
     "Apoiar a CEO em decisões de elevada complexidade."
    ]
   },
   {
    "type": "h3",
    "text": "3.4 CEO e Diretoria Executiva"
   },
   {
    "type": "p",
    "text": "A CEO Priscila é responsável pela coordenação executiva do Ecossistema. A Diretoria Executiva deve atuar de maneira integrada, evitando a formação de estruturas isoladas ou concorrentes."
   },
   {
    "type": "p",
    "text": "Cada diretor responde pelo resultado de sua área ou empresa, devendo apresentar fatos, indicadores, riscos e planos de ação. A ausência de reação diante de desvios relevantes é considerada falha de gestão."
   },
   {
    "type": "h3",
    "text": "3.5 Alçadas e decisões"
   },
   {
    "type": "table",
    "rows": [
     [
      "Tipo de decisão",
      "Responsabilidade"
     ],
     [
      "Estratégicas",
      "Conselho Consultivo, conforme matéria e impacto."
     ],
     [
      "Corporativas",
      "CEO, dentro das políticas e orçamento aprovados."
     ],
     [
      "Operacionais",
      "Diretor responsável, dentro das alçadas formalizadas."
     ],
     [
      "Excepcionais",
      "Escalonamento obrigatório quando houver risco jurídico, fiscal, financeiro, reputacional ou de margem."
     ]
    ]
   },
   {
    "type": "xref",
    "text": "Ver a tabela detalhada de limites de aprovação por cargo/valor na aba <b>Matriz de Alçadas</b>."
   },
   {
    "type": "h3",
    "text": "3.6 Rituais de gestão"
   },
   {
    "type": "ul",
    "items": [
     "Daily operacional, quando necessária à natureza da área.",
     "Radar Semanal, com análise de indicadores, desvios, riscos e prioridades.",
     "Reunião Mensal de Resultados, com DRE, caixa, metas e plano de ação.",
     "Reunião do Conselho Consultivo, com foco estratégico e decisões de maior relevância."
    ]
   },
   {
    "type": "h3",
    "text": "3.7 Compliance"
   },
   {
    "type": "p",
    "text": "O compliance é aplicado de maneira prática, proporcional ao porte e aos riscos do Ecossistema, abrangendo integridade, controles internos, tributação, relações trabalhistas, contratos, proteção de dados, segurança da informação, concorrência e conflitos de interesse."
   },
   {
    "type": "ul",
    "items": [
     "Segregação de funções e rastreabilidade das aprovações.",
     "Contratos formalizados entre empresas relacionadas.",
     "Políticas de crédito, preços, compras, descontos e pagamentos.",
     "Auditoria e conciliações periódicas.",
     "Registro de exceções e aprovação por alçada.",
     "Proteção das marcas, ativos, dados e propriedade intelectual."
    ]
   }
  ]
 },
 {
  "id": "c4",
  "badge": "confidencial",
  "title": "4. Arquitetura societária — holdings",
  "blocks": [
   {
    "type": "h3",
    "text": "4.1 Objetivo"
   },
   {
    "type": "p",
    "text": "A arquitetura societária deve organizar o controle das empresas, proteger os ativos, permitir novos investimentos e reduzir a confusão entre patrimônio, governança e operação."
   },
   {
    "type": "h3",
    "text": "4.2 Função das holdings"
   },
   {
    "type": "p",
    "text": "O controle societário do Ecossistema é exercido por quatro holdings, cada uma responsável por uma vertical operacional:"
   },
   {
    "type": "ul",
    "items": [
     "Holding Indústria — controla a MaxSteel.",
     "Holding Atacado — controla as duas empresas de atacado (LMS e SUPPLY).",
     "Holding Varejo — controla as duas empresas de varejo (DCS e CM).",
     "Holding Franquias — controla a Fast Franchising (franquias de loja e rede Steel Conecta)."
    ]
   },
   {
    "type": "p",
    "text": "As quatro holdings são norte-americanas, inscritas com CNPJ brasileiro, e detêm o controle societário das empresas operacionais. As empresas comerciais e de apoio, por sua vez, são constituídas no Simples Nacional e têm como sócios os Diretores e demais pessoas-chave, não integrando o controle das holdings."
   },
   {
    "type": "ul",
    "items": [
     "Controlar participações societárias.",
     "Concentrar decisões de investimento e desinvestimento.",
     "Organizar o patrimônio e o planejamento sucessório.",
     "Receber dividendos e realizar aportes, observadas as regras legais e tributárias.",
     "Apoiar operações de financiamento, aquisições e expansão.",
     "Preservar a separação entre ativos estratégicos e riscos operacionais."
    ]
   },
   {
    "type": "h3",
    "text": "4.3 Princípio da independência jurídica"
   },
   {
    "type": "p",
    "text": "Cada sociedade deve manter personalidade jurídica, contabilidade, contas bancárias, contratos, obrigações e responsabilidades próprias. A integração empresarial não elimina a autonomia jurídica de cada empresa."
   },
   {
    "type": "h3",
    "text": "4.4 Estrutura funcional"
   },
   {
    "type": "p",
    "text": "As empresas comerciais são constituídas no Simples Nacional, com razões sociais e CNPJs distintos, cujos sócios controladores são os Diretores de cada unidade de negócio."
   },
   {
    "type": "table",
    "rows": [
     [
      "Tema",
      "Diretriz"
     ],
     [
      "Holdings",
      "Controle societário, investimentos, patrimônio e governança dos ativos."
     ],
     [
      "Empresas Operacionais",
      "Execução das atividades principais: indústria, importação, atacado, varejo e distribuição."
     ],
     [
      "Empresas Comerciais",
      "Geração de demanda, relacionamento com mercado, vendas e canais."
     ],
     [
      "Empresas Especializadas",
      "Serviços administrativos, técnicos, de engenharia, implantação e logística."
     ]
    ]
   },
   {
    "type": "h3",
    "text": "4.5 Relações entre empresas"
   },
   {
    "type": "p",
    "text": "As relações entre holdings, controladas, coligadas e empresas prestadoras de serviço devem ser documentadas por instrumentos adequados, com objeto, preço, responsabilidades, critérios de rateio e evidências de execução."
   },
   {
    "type": "h3",
    "text": "4.6 Validação profissional"
   },
   {
    "type": "p",
    "text": "A implementação definitiva da arquitetura societária depende de validação jurídica, tributária, contábil e trabalhista. O Plano Diretor define a lógica empresarial; os atos societários e contratos deverão traduzir essa lógica em conformidade com a legislação."
   }
  ]
 },
 {
  "id": "c5",
  "badge": "aberto",
  "title": "5. Arquitetura operacional",
  "blocks": [
   {
    "type": "h3",
    "text": "5.1 Conceito"
   },
   {
    "type": "p",
    "text": "A Arquitetura Operacional define como o Ecossistema FAST funciona no dia a dia, separando as funções comerciais, operacionais e especializadas sem romper a integração entre elas."
   },
   {
    "type": "callout",
    "text": "<b>Fluxo central do modelo:</b> Front Office → Empresas Operacionais → Back Office, com integração permanente, responsabilidades formalizadas e gestão por indicadores."
   },
   {
    "type": "h3",
    "text": "5.2 Front Office"
   },
   {
    "type": "p",
    "text": "O Front Office é formado pelas unidades responsáveis pela interface com o mercado: prospecção, relacionamento, vendas, propostas, negociações, contratos comerciais e experiência do cliente."
   },
   {
    "type": "h3",
    "text": "5.3 Empresas Operacionais"
   },
   {
    "type": "p",
    "text": "As Empresas Operacionais não são Back Office. Elas executam a atividade principal do Ecossistema: fabricam, importam, compram, estocam, distribuem e realizam as operações atacadistas e varejistas."
   },
   {
    "type": "p",
    "text": "A SUPPLY-LMS é responsável pelas vendas atacadistas e pela operação associada a esse canal. A DCS-CM — Casa do Montador é responsável pelo varejo, incluindo suas filiais e lojas."
   },
   {
    "type": "h3",
    "text": "5.4 Back Office"
   },
   {
    "type": "p",
    "text": "O Back Office é formado pelas Empresas Especializadas, que prestam serviços para as empresas operacionais e comerciais. Integram esse bloco o CSC, a Engenharia, a Unity Company e a Log Express."
   },
   {
    "type": "h3",
    "text": "5.5 Estrutura comercial"
   },
   {
    "type": "p",
    "text": "As empresas comerciais constituem o Front Office e são constituídas no Simples Nacional, com razões sociais e CNPJs distintos. Cada diretoria é liderada por um Diretor, sócio da respectiva empresa, remunerado por comissão sobre a receita da unidade:"
   },
   {
    "type": "ul",
    "items": [
     "Diretoria Nacional de Atacado — Poliana.",
     "Diretoria Nacional de Varejo — Denise.",
     "Diretoria Comercial FAST Obras & FAST Homes — Fabio Furtado.",
     "Diretoria Comercial FAST Franchising — Leandro, subdividida em duas frentes: (A) venda de novas franquias de lojas e de mão de obra (Steel Conecta) e (B) venda de Atacado para Franqueados.",
     "Diretoria de Comércio Digital — Auren.",
     "Diretoria FAST Importações — sem diretor designado, com o Conselho atuando provisoriamente."
    ]
   },
   {
    "type": "h3",
    "text": "5.6 Integração e responsabilidade"
   },
   {
    "type": "p",
    "text": "Nenhuma unidade deve atuar como empresa isolada dentro do Ecossistema. A integração deve ocorrer por meio de processos, sistemas, planejamento de demanda, contratos internos, SLAs e indicadores compartilhados."
   },
   {
    "type": "h3",
    "text": "5.7 Steel Conecta"
   },
   {
    "type": "p",
    "text": "A Steel Conecta é uma franquia com governança compartilhada. A FAST Franchising é responsável pela comercialização, expansão, implantação e relacionamento com os franqueados. A Diretoria Técnica de FAST Obras e FAST Homes é responsável por treinamento, certificação, padrões, engenharia e evolução técnica."
   }
  ]
 },
 {
  "id": "c6",
  "badge": "aberto",
  "title": "6. Mapa do Ecossistema FAST",
  "blocks": [
   {
    "type": "p",
    "text": "Arquitetura organizacional integrada em camadas funcionais."
   },
   {
    "type": "xref",
    "text": "A visualização interativa completa (empresas, diretorias e equipes) está na aba <b>Organograma</b>. Este capítulo traz apenas a leitura conceitual em camadas do Plano Diretor."
   },
   {
    "type": "h3",
    "text": "6.1 Objetivo"
   },
   {
    "type": "p",
    "text": "O Mapa do Ecossistema FAST apresenta a organização integrada do grupo em camadas funcionais, permitindo que Conselho, lideranças, colaboradores, parceiros e instituições compreendam como as partes se conectam e onde está localizada a responsabilidade por cada atividade."
   },
   {
    "type": "h3",
    "text": "6.2 Camadas do Ecossistema"
   },
   {
    "type": "table",
    "rows": [
     [
      "Tema",
      "Diretriz"
     ],
     [
      "1. Governança Corporativa",
      "Conselho Consultivo, CEO e Diretoria Executiva."
     ],
     [
      "2. Holdings",
      "Controle societário, investimentos e gestão dos ativos."
     ],
     [
      "3. Empresas Operacionais",
      "MaxSteel, LMS/SUPPLY e DCS/CM e respectivas estruturas operacionais."
     ],
     [
      "4. Empresas Comerciais — Front Office",
      "Atacado, varejo, obras, homes, franchising, atacado para franqueados e comércio digital."
     ],
     [
      "5. Empresas Especializadas — Back Office",
      "CSC, Unity Company, Engenharia e Log Express."
     ]
    ]
   },
   {
    "type": "h3",
    "text": "6.3 Relação entre as camadas"
   },
   {
    "type": "p",
    "text": "A Governança define as diretrizes e acompanha os resultados. As holdings controlam os ativos. As Empresas Comerciais desenvolvem o mercado e geram negócios. As Empresas Operacionais executam as atividades principais. As Empresas Especializadas prestam os serviços de suporte. A Steel Conecta viabiliza a execução em campo conforme padrões técnicos."
   },
   {
    "type": "h3",
    "text": "6.4 Princípio de integração"
   },
   {
    "type": "p",
    "text": "A integração do Ecossistema não significa mistura de responsabilidades. Cada empresa deve conhecer seu papel, seus clientes internos, seus indicadores e seus limites de atuação."
   }
  ]
 },
 {
  "id": "c7",
  "badge": "aberto",
  "title": "7. Empresas operacionais",
  "blocks": [
   {
    "type": "h3",
    "text": "7.1–7.3 Introdução, missão e princípios"
   },
   {
    "type": "p",
    "text": "As Empresas Operacionais constituem o núcleo de execução do Ecossistema FAST, transformando o planejamento e as oportunidades comerciais em produtos, disponibilidade, distribuição, faturamento e atendimento — com produtividade, qualidade, segurança, rentabilidade e integração."
   },
   {
    "type": "ul",
    "items": [
     "Excelência operacional e produtividade.",
     "Gestão de capacidade, estoques, custos e capital empregado.",
     "Integração com Front Office e Back Office.",
     "Padronização, rastreabilidade e melhoria contínua.",
     "Responsabilidade direta por resultado, margem e nível de serviço.",
     "Segurança operacional, fiscal e trabalhista."
    ]
   },
   {
    "type": "h3",
    "text": "7.4 MaxSteel"
   },
   {
    "type": "p",
    "text": "Unidade industrial responsável pela fabricação de perfis de aço para drywall e Light Steel Frame, e pelo desenvolvimento de componentes industrializados ligados à construção a seco."
   },
   {
    "type": "ul",
    "items": [
     "Planejamento e controle da produção.",
     "Qualidade industrial e rastreabilidade.",
     "Gestão de matérias-primas, equipamentos e manutenção.",
     "Produtividade, perdas e custo por quilograma produzido.",
     "Desenvolvimento de produtos e apoio à inovação.",
     "Atendimento às demandas das empresas comerciais e operacionais."
    ]
   },
   {
    "type": "h3",
    "text": "7.5 FAST Importação"
   },
   {
    "type": "callout",
    "text": "<b>Nota da Revisão 1:</b> a FAST Importação é tratada como unidade de negócio comercial. As importações são executadas diretamente pelas empresas operacionais — MaxSteel, DCS-CM e LMS/SUPPLY — cabendo à FAST Importação o desenvolvimento de fornecedores e a promoção comercial das operações de importação."
   },
   {
    "type": "ul",
    "items": [
     "Pesquisa e homologação de fornecedores.",
     "Negociação internacional e formação do custo de importação.",
     "Gestão documental, aduaneira e cambial.",
     "Planejamento de embarques e integração com estoques.",
     "Desenvolvimento de portfólio e alternativas de fornecimento."
    ]
   },
   {
    "type": "h3",
    "text": "7.6 SUPPLY-LMS — Operação Atacadista"
   },
   {
    "type": "ul",
    "items": [
     "Vendas atacadistas e gestão da carteira nacional.",
     "Televendas, executivos comerciais e demais canais de atacado.",
     "Planejamento de demanda e compras.",
     "Gestão de crédito, pedidos e faturamento.",
     "Distribuição para revendedores, distribuidores, construtoras e clientes profissionais.",
     "Integração com filiais, MaxSteel, FAST Importação, CSC e Log Express."
    ]
   },
   {
    "type": "h3",
    "text": "7.7 DCS-CM — Casa do Montador: Operação de Varejo"
   },
   {
    "type": "ul",
    "items": [
     "Gestão das lojas próprias e filiais.",
     "Atendimento ao consumidor, instaladores, montadores e pequenos construtores.",
     "Gestão de estoque, exposição, mix e disponibilidade.",
     "Campanhas locais, relacionamento e experiência do cliente.",
     "Controle de produtividade, margem, ticket médio e recorrência."
    ]
   },
   {
    "type": "h3",
    "text": "7.8 Filiais DCS/CM — Casa do Montador"
   },
   {
    "type": "ul",
    "items": [
     "Filial DCS/CM Mogi das Cruzes — São Paulo.",
     "Filial DCS/CM Feira de Santana — Bahia.",
     "Filial DCS/CM Japeri — Rio de Janeiro."
    ]
   },
   {
    "type": "p",
    "text": "As filiais devem operar segundo padrões corporativos de recebimento, conferência, endereçamento, inventário, separação, expedição, segurança, prevenção de perdas e rastreabilidade."
   },
   {
    "type": "h3",
    "text": "7.9 Indicadores operacionais"
   },
   {
    "type": "ul",
    "items": [
     "Faturamento e margem por empresa, filial e canal.",
     "EBITDA e geração de caixa.",
     "Giro e cobertura de estoque · acuracidade de inventário.",
     "Produtividade por colaborador.",
     "Prazo de separação e expedição · nível de serviço e prazo de entrega.",
     "Perdas, avarias, devoluções e retrabalho.",
     "Capacidade utilizada e custo operacional."
    ]
   }
  ]
 },
 {
  "id": "c8",
  "badge": "aberto",
  "title": "8. Empresas comerciais — Front Office",
  "blocks": [
   {
    "type": "h3",
    "text": "8.1–8.2 Introdução e missão"
   },
   {
    "type": "callout",
    "text": "<b>Natureza jurídica e remuneração (Revisão 1):</b> as empresas comerciais são constituídas no Simples Nacional, com objeto social de promoção e vendas. Seus sócios controladores são os Diretores de cada unidade de negócio, remunerados por percentual de comissão sobre a receita da respectiva unidade. A FAST Importação integra este bloco como unidade de negócio comercial. A receita das vendas é registrada nas empresas operacionais; as comerciais recebem comissão suficiente para cobrir seus custos."
   },
   {
    "type": "h3",
    "text": "8.3 Princípios comerciais"
   },
   {
    "type": "ul",
    "items": [
     "Foco no cliente e geração de valor.",
     "Disciplina de margem, preço e crédito.",
     "Registro das oportunidades em CRM.",
     "Especialização por canal e segmento.",
     "Integração com capacidade operacional e disponibilidade.",
     "Clareza de escopo, prazo, responsabilidade e contrato."
    ]
   },
   {
    "type": "h3",
    "text": "8.5 FAST Atacado"
   },
   {
    "type": "p",
    "text": "Front Office do canal atacadista, atuando integrada à SUPPLY-LMS. Prospecção ativa e desenvolvimento de clientes, gestão de carteira, recorrência e mix, cotações, propostas e negociações, previsão de vendas e inteligência de mercado, acompanhamento do pedido e relacionamento pós-venda."
   },
   {
    "type": "h3",
    "text": "8.6 FAST Varejo"
   },
   {
    "type": "p",
    "text": "Front Office das operações de varejo, integrada à DCS-CM — Casa do Montador. Responsável pela estratégia comercial, experiência, campanhas, atendimento e desenvolvimento de clientes das lojas e filiais."
   },
   {
    "type": "h3",
    "text": "8.7 FAST Obras"
   },
   {
    "type": "p",
    "text": "Prospecção e comercialização de soluções para grandes obras, construtoras, incorporadoras, engenharias e clientes institucionais."
   },
   {
    "type": "ul",
    "items": [
     "Projetos de drywall, steel frame, fachadas, forros, isolamentos e coberturas.",
     "Soluções complementares de impermeabilização, pisos, esquadrias, vidros e acabamentos.",
     "Coordenação de orçamentos complexos e propostas integradas.",
     "Negociação de contratos, cronogramas e condições especiais.",
     "Integração com Engenharia e parceiros de execução."
    ]
   },
   {
    "type": "h3",
    "text": "8.8 FAST Homes"
   },
   {
    "type": "p",
    "text": "Venda de casas e edificações de menor porte em Light Steel Frame e sistemas industrializados, atendendo pessoas físicas, investidores, incorporadores e pequenos construtores."
   },
   {
    "type": "ul",
    "items": [
     "Captação e qualificação de leads.",
     "Estimativas iniciais e apresentação de modelos.",
     "Modelagem, orçamento, lista de materiais e cronograma.",
     "Negociação comercial e encaminhamento à rede de execução.",
     "Integração com Engenharia e Steel Conecta."
    ]
   },
   {
    "type": "h3",
    "text": "8.9 FAST Franchising"
   },
   {
    "type": "p",
    "text": "Responsável pela expansão, comercialização, implantação, suporte e governança comercial das redes de franquias do Ecossistema. Na Steel Conecta, responde pela venda e expansão, enquanto a Diretoria Técnica de FAST Obras e Homes responde por treinamento, certificação, padrões, engenharia e evolução técnica."
   },
   {
    "type": "h3",
    "text": "8.10 Atacado para Franqueados"
   },
   {
    "type": "p",
    "text": "Responsável pelo abastecimento comercial das unidades franqueadas, assegurando atendimento especializado, políticas próprias, mix, crédito, campanhas e nível de serviço adequado."
   },
   {
    "type": "h3",
    "text": "8.11 Comércio Digital"
   },
   {
    "type": "p",
    "text": "Responsável pelas vendas em marketplaces, e-commerce próprio e demais canais digitais, integrando portfólio, precificação, marketing, estoque, expedição, atendimento e reputação."
   },
   {
    "type": "h3",
    "text": "8.12 Regras de integração entre canais"
   },
   {
    "type": "ul",
    "items": [
     "Segmentação de clientes e definição do canal responsável.",
     "Proteção de carteira e distribuição de leads.",
     "Política de preços, descontos e comissões.",
     "Transferência de oportunidades para o canal adequado.",
     "Tratamento de clientes nacionais e conflitos de canal.",
     "Validação de capacidade antes de assumir compromissos especiais."
    ]
   },
   {
    "type": "h3",
    "text": "8.13 Indicadores comerciais"
   },
   {
    "type": "ul",
    "items": [
     "Faturamento, margem bruta e margem de contribuição.",
     "Clientes ativos, novos clientes e recorrência.",
     "Taxa de conversão e ciclo médio de venda · ticket médio e mix por cliente.",
     "Produtividade por vendedor.",
     "Inadimplência, devoluções e cancelamentos.",
     "Satisfação e retenção de clientes.",
     "Cumprimento das metas e efetividade dos planos de ação."
    ]
   }
  ]
 },
 {
  "id": "c9",
  "badge": "aberto",
  "title": "9. Empresas especializadas — Back Office e CSC",
  "blocks": [
   {
    "type": "h3",
    "text": "9.1–9.3 Introdução, empresas atendidas e independência"
   },
   {
    "type": "p",
    "text": "As Empresas Especializadas constituem o Back Office do Ecossistema FAST: estruturas independentes, com personalidade jurídica, gestão, orçamento, equipes e indicadores próprios, criadas para prestar serviços especializados às empresas operacionais e comerciais — prioritariamente SUPPLY-LMS e DCS-CM, podendo também atender MaxSteel, FAST Importação, comerciais, holdings e franquias mediante contrato."
   },
   {
    "type": "p",
    "text": "Cada Empresa Especializada mantém autonomia jurídica e administrativa; os serviços são regulados por contratos internos com objeto, responsabilidades, prazos, SLA, indicadores, remuneração/rateio e responsabilização."
   },
   {
    "type": "h3",
    "text": "9.4 Centro de Serviços Compartilhados — CSC"
   },
   {
    "type": "p",
    "text": "Centraliza atividades comuns, elimina duplicidades, padroniza processos e disponibiliza informações confiáveis para gestão, por meio das áreas:"
   },
   {
    "type": "ul",
    "items": [
     "<b>Financeiro e Tesouraria:</b> contas a pagar/receber, fluxo de caixa, conciliações bancárias, relacionamento com bancos, crédito e cobrança, planejamento de caixa.",
     "<b>Controladoria:</b> orçamento empresarial, DRE gerencial, análise de margens/custos/EBITDA, indicadores e painéis, consolidação dos resultados.",
     "<b>Contabilidade:</b> escrituração e demonstrações financeiras, fechamentos, conciliação de contas, suporte à auditoria.",
     "<b>Fiscal e Tributário:</b> apuração de tributos, obrigações acessórias, ST/DIFAL, compliance fiscal, planejamento tributário lícito.",
     "<b>Recursos Humanos:</b> recrutamento e seleção, folha e benefícios, treinamento e desenvolvimento, cargos e remuneração, clima e relações trabalhistas.",
     "<b>Jurídico e Compliance:</b> contratos, consultoria e contencioso, governança, marcas e propriedade intelectual, privacidade e proteção de dados.",
     "<b>Tecnologia da Informação:</b> ERP, CRM, integrações e infraestrutura, suporte, segurança da informação, automação, BI e IA.",
     "<b>Compras administrativas:</b> compras indiretas e contratos corporativos, negociação centralizada, padronização de fornecedores."
    ]
   },
   {
    "type": "h3",
    "text": "9.5 Engenharia"
   },
   {
    "type": "ul",
    "items": [
     "Projetos, especificações, orçamentos e planejamento.",
     "Compatibilização, BIM e documentação técnica.",
     "Pesquisa, desenvolvimento e inovação.",
     "Padronização de sistemas e soluções.",
     "Treinamento e suporte às equipes comerciais.",
     "Treinamento, certificação e evolução técnica da Steel Conecta.",
     "Homologação técnica de produtos, fornecedores e parceiros."
    ]
   },
   {
    "type": "h3",
    "text": "9.6 Implantação de novas unidades"
   },
   {
    "type": "p",
    "text": "Processo corporativo coordenado pela Engenharia e pelo CSC, sob governança da Holding responsável — implantação de filiais, lojas, centros operacionais e unidades industriais, padronização física e operacional, cronogramas e orçamento, coordenação de fornecedores/obras/licenças, apoio à abertura de franquias."
   },
   {
    "type": "callout",
    "text": "<b>Nota da Revisão 1:</b> a antiga referência a \"Unity Company\" foi consolidada neste processo; a agência de marketing do Ecossistema é a Unity Company, dedicada exclusivamente a marketing."
   },
   {
    "type": "h3",
    "text": "9.7 Log Express"
   },
   {
    "type": "ul",
    "items": [
     "Contratação e gestão de transportadoras.",
     "Planejamento de fretes e roteirização.",
     "Acompanhamento de coletas e entregas.",
     "Auditoria de fretes e ocorrências.",
     "Indicadores de prazo, custo e nível de serviço.",
     "Integração entre fornecedores, MaxSteel, FAST Importação, SUPPLY-LMS, DCS-CM e clientes."
    ]
   },
   {
    "type": "h3",
    "text": "9.8 Contratos internos e SLAs"
   },
   {
    "type": "table",
    "rows": [
     [
      "Tema",
      "Diretriz"
     ],
     [
      "Escopo",
      "Serviços incluídos, excluídos e responsabilidades."
     ],
     [
      "Prazo",
      "Tempo de resposta, execução e fechamento."
     ],
     [
      "Indicadores",
      "Qualidade, produtividade, custo e satisfação."
     ],
     [
      "Remuneração",
      "Preço, rateio, centro de custo ou critério aprovado."
     ],
     [
      "Responsabilização",
      "Tratamento de falhas, exceções e reincidências."
     ],
     [
      "Governança",
      "Reuniões de serviço, revisão de escopo e aprovação de mudanças."
     ]
    ]
   },
   {
    "type": "h3",
    "text": "9.9–9.10 Indicadores e considerações finais"
   },
   {
    "type": "p",
    "text": "Cumprimento dos SLAs, prazo médio de atendimento, custo por serviço, produtividade e automação, qualidade/conformidade/retrabalho, economias implementadas, satisfação dos clientes internos, riscos identificados e resolvidos."
   },
   {
    "type": "p",
    "text": "A independência das Empresas Especializadas fortalece a governança e permite avaliar com clareza a qualidade e o custo dos serviços prestados, sem que o Back Office se torne uma estrutura sem responsabilidade por prazo, qualidade e resultado. Isso permite que SUPPLY-LMS foque no atacado e DCS-CM no varejo, enquanto CSC, Engenharia, Unity Company e Log Express fornecem a infraestrutura necessária para crescimento, eficiência e controle."
   }
  ]
 },
 {
  "id": "c10",
  "badge": "aberto",
  "title": "10. Fluxos operacionais do Ecossistema FAST",
  "blocks": [
   {
    "type": "h3",
    "text": "10.1–10.2 Introdução e princípios"
   },
   {
    "type": "p",
    "text": "O Fluxo Operacional Corporativo estabelece a sequência de atividades, responsabilidades, pontos de controle e integrações entre as empresas do grupo, garantindo operações padronizadas, rastreáveis e orientadas por indicadores. O princípio fundamental é separar claramente as responsabilidades entre áreas comerciais, operacionais e de suporte, mantendo elevada integração entre elas."
   },
   {
    "type": "ul",
    "items": [
     "Segregação clara de responsabilidades · integração entre empresas.",
     "Utilização obrigatória do ERP corporativo · rastreabilidade completa.",
     "Eliminação de retrabalho · automatização sempre que possível.",
     "Indicadores de desempenho, melhoria contínua e foco no cliente."
    ]
   },
   {
    "type": "h3",
    "text": "10.3 Macrofluxo operacional"
   },
   {
    "type": "p",
    "text": "Prospecção comercial → qualificação da oportunidade → elaboração da proposta → negociação → pedido aprovado → validação financeira e administrativa → planejamento operacional → (aquisição/produção, se sem estoque) → recebimento e armazenagem → separação → expedição → transporte → entrega ao cliente → pós-venda → análise de indicadores."
   },
   {
    "type": "h3",
    "text": "10.4 Fluxo das Empresas Comerciais"
   },
   {
    "type": "p",
    "text": "Prospecção, qualificação, relacionamento, propostas, negociação dentro das políticas corporativas, registro em CRM, acompanhamento e pós-venda comercial. Após a aprovação da venda, a responsabilidade passa às empresas operacionais."
   },
   {
    "type": "h3",
    "text": "10.5 Fluxo das Empresas Operacionais"
   },
   {
    "type": "p",
    "text": "Planejamento da demanda e de compras, programação da produção, aquisição/importação, recebimento, armazenagem, controle de estoques, separação, expedição, distribuição e acompanhamento da entrega — sem negociação comercial ou definição de preços."
   },
   {
    "type": "h3",
    "text": "10.6 Fluxo da SUPPLY-LMS (atacado)"
   },
   {
    "type": "p",
    "text": "Recebimento do pedido aprovado → planejamento da demanda → gestão de estoques → precificação diária e automática → consolidação das compras → integração com FAST Importação e MaxSteel → separação → expedição → coordenação com a Log Express → confirmação da entrega."
   },
   {
    "type": "h3",
    "text": "10.7 Fluxo da DCS-CM (varejo)"
   },
   {
    "type": "p",
    "text": "Recebimento, conferência, armazenagem, controle e gestão de estoques, precificação diária e automática, abastecimento das lojas, separação, movimentação interna, inventários, expedição e apoio ao atacado quando solicitado."
   },
   {
    "type": "h3",
    "text": "10.8 Fluxo Industrial (MaxSteel)"
   },
   {
    "type": "p",
    "text": "Planejamento industrial → programação da produção → compra de matéria-prima → produção → controle de qualidade → armazenagem → disponibilização ao estoque → integração com SUPPLY-LMS → distribuição."
   },
   {
    "type": "h3",
    "text": "10.9 Fluxo de Importação"
   },
   {
    "type": "p",
    "text": "Desenvolvimento internacional de fornecedores → negociação → emissão de pedidos internacionais → acompanhamento da produção → embarque → desembaraço aduaneiro → transporte nacional → entrega aos Centros de Distribuição → integração com os estoques corporativos."
   },
   {
    "type": "h3",
    "text": "10.10 Fluxo do CSC"
   },
   {
    "type": "p",
    "text": "Atuação transversal em todas as operações: Financeiro (contas a pagar/receber, tesouraria), Fiscal (emissão de documentos, apuração tributária), Contabilidade (registros, fechamento mensal), RH (administração de pessoal), Jurídico (contratos, compliance), TI (ERP, CRM, infraestrutura) — sem interferir na execução operacional."
   },
   {
    "type": "h3",
    "text": "10.11–10.13 Log Express, Engenharia e implantação"
   },
   {
    "type": "p",
    "text": "Log Express: planejamento de coletas, contratação de transportadoras, roteirização, monitoramento, gestão de fretes, ocorrências e auditoria logística. Engenharia: desenvolvimento de soluções, especificações, orçamentos, projetos, homologações, treinamentos e certificação Steel Conecta. Implantação de novas unidades: aprovação do investimento → projeto → cronograma → contratação → implantação → integração aos sistemas → treinamento → início da operação → acompanhamento dos primeiros indicadores."
   },
   {
    "type": "h3",
    "text": "10.14 Indicadores dos fluxos operacionais"
   },
   {
    "type": "ul",
    "items": [
     "Lead Time total · prazo médio de atendimento · OTIF (On Time In Full).",
     "Nível de serviço · produtividade · giro e acuracidade dos estoques.",
     "Taxa de ruptura · perdas operacionais · custo logístico e operacional.",
     "Retrabalho · devoluções · satisfação do cliente."
    ]
   },
   {
    "type": "h3",
    "text": "10.15 Integração entre os fluxos"
   },
   {
    "type": "p",
    "text": "Nenhuma empresa do Ecossistema deve atuar de forma isolada. Cada operação iniciada em uma empresa gera automaticamente as integrações necessárias com as demais, garantindo continuidade, rastreabilidade e responsabilização clara de cada unidade — a espinha dorsal da execução do Ecossistema FAST."
   }
  ]
 },
 {
  "id": "c11",
  "badge": "confidencial",
  "title": "11. Fluxos financeiros do Ecossistema FAST",
  "blocks": [
   {
    "type": "xref",
    "text": "O princípio geral, os tipos de receita e o mapa \"quem vende × onde registra\" já estão detalhados de forma visual na aba <b>Mapa de Receitas</b>. Este capítulo traz o complemento financeiro corporativo — consolidação, indicadores e fluxo de cada empresa especializada."
   },
   {
    "type": "h3",
    "text": "11.1–11.2 Introdução e princípios"
   },
   {
    "type": "p",
    "text": "Os fluxos financeiros refletem a arquitetura societária, operacional e de governança do Ecossistema, assegurando transparência, rastreabilidade, eficiência econômica, conformidade tributária e sustentabilidade financeira. Cada empresa mantém personalidade jurídica própria, autonomia administrativa e responsabilidade sobre seus resultados, com integração via contratos internos, compartilhamento de recursos e governança centralizada."
   },
   {
    "type": "h3",
    "text": "11.3 Estrutura financeira corporativa"
   },
   {
    "type": "ul",
    "items": [
     "<b>Receitas Operacionais:</b> comercialização de produtos e serviços pelas empresas comerciais.",
     "<b>Receitas entre Empresas do Ecossistema:</b> prestação de serviços especializados entre empresas do grupo.",
     "<b>Despesas Operacionais:</b> custos e despesas inerentes às atividades de cada empresa.",
     "<b>Consolidação Econômica:</b> apuração individual e consolidação pela Holding para fins estratégicos e de governança."
    ]
   },
   {
    "type": "h3",
    "text": "11.7 Fluxo financeiro do CSC"
   },
   {
    "type": "p",
    "text": "Tesouraria (caixa corporativo, pagamentos, recebimentos, conciliações), Contas a Receber (cobrança, inadimplência, renegociações), Contas a Pagar (fornecedores, tributos, folha, contratos), Fiscal, Contabilidade e Controladoria (orçamento, DRE, EBITDA, indicadores). O CSC é remunerado mensalmente pelas empresas do Ecossistema mediante contratos internos e critérios de rateio aprovados pela Holding."
   },
   {
    "type": "h3",
    "text": "11.8–11.9 Log Express e Engenharia"
   },
   {
    "type": "p",
    "text": "Log Express: remunerada por contratos internos conforme utilização dos serviços (transportes, fretes, roteirização, monitoramento, auditoria); despesas com transportadoras reembolsadas pelas empresas contratantes. Engenharia: remunerada por honorários sobre serviços efetivamente prestados (projetos, orçamentos, consultorias, homologações, treinamentos, certificação Steel Conecta)."
   },
   {
    "type": "h3",
    "text": "11.10 Fluxo financeiro da Unity Company"
   },
   {
    "type": "p",
    "text": "Agência de marketing exclusiva do Ecossistema, responsável pelo planejamento, desenvolvimento, execução e gestão de todas as ações de marketing, publicidade, comunicação institucional, branding e marketing digital das empresas do grupo. Seus fluxos financeiros têm duas naturezas:"
   },
   {
    "type": "ul",
    "items": [
     "<b>Remuneração pelos serviços prestados</b> (mensal, via contratos internos e rateio aprovado pela Holding): planejamento estratégico, gestão de marcas, campanhas, produção de conteúdo, design, identidade visual, marketing digital, redes sociais, geração de leads, automação, produção audiovisual, inteligência de mercado, eventos.",
     "<b>Reembolso dos investimentos em marketing</b> (ressarcimento, não integra a remuneração): mídia digital, tráfego pago (Google/Meta/LinkedIn Ads), mídia programática, rádio, TV, mídia impressa, materiais promocionais, feiras, eventos, patrocínios, ferramentas de automação/CRM."
    ]
   },
   {
    "type": "p",
    "text": "<b>Indicadores de desempenho:</b> ROI, CAC, CPL, geração de oportunidades comerciais, taxa de conversão, crescimento da presença digital, fortalecimento das marcas, eficiência dos investimentos em mídia, cumprimento do orçamento anual."
   },
   {
    "type": "h3",
    "text": "11.11 Fluxo financeiro da Fast Franchising"
   },
   {
    "type": "p",
    "text": "Taxa inicial de franquia, royalties, treinamentos, consultorias, suporte operacional, implantação de novas unidades e demais serviços prestados à rede franqueada."
   },
   {
    "type": "h3",
    "text": "11.12–11.13 Fluxos entre empresas e consolidação"
   },
   {
    "type": "p",
    "text": "As empresas do Ecossistema podem prestar serviços umas às outras mediante contratos formais, com critérios objetivos de remuneração, documentação fiscal adequada e registros contábeis individualizados. Embora cada empresa mantenha autonomia patrimonial, contábil e financeira, os resultados são consolidados pela Holding para planejamento estratégico, avaliação de desempenho, governança, orçamento consolidado, gestão do fluxo de caixa e prestação de contas ao Conselho Consultivo."
   },
   {
    "type": "h3",
    "text": "11.14 Indicadores financeiros corporativos"
   },
   {
    "type": "ul",
    "items": [
     "<b>Liquidez:</b> disponibilidade de caixa, capital de giro, liquidez corrente, geração operacional de caixa.",
     "<b>Rentabilidade:</b> margem bruta e operacional, EBITDA, lucro líquido, ROE, ROA.",
     "<b>Eficiência operacional:</b> giro de estoques, prazo médio de recebimento/pagamento, ciclo financeiro, necessidade de capital de giro.",
     "<b>Crescimento:</b> faturamento consolidado e por empresa/unidade, crescimento da receita, participação de mercado."
    ]
   },
   {
    "type": "h3",
    "text": "11.15 Diretrizes gerais"
   },
   {
    "type": "p",
    "text": "Os fluxos financeiros devem assegurar sustentabilidade econômica, disciplina financeira, transparência das operações e adequada remuneração de todas as empresas integrantes do grupo, por meio de contratos internos, critérios objetivos de rateio, indicadores padronizados e processos corporativos integrados."
   }
  ]
 },
 {
  "id": "c12",
  "badge": "gestor",
  "title": "12. Mapa dos relacionamentos contratuais",
  "blocks": [
   {
    "type": "h3",
    "text": "12.1–12.3 Introdução, princípios e objetivos"
   },
   {
    "type": "p",
    "text": "Toda interação entre empresas do Ecossistema deve ser formalizada por meio de contratos, instrumentos de cooperação ou políticas corporativas aprovadas pela Holding — observando legalidade, transparência, autonomia jurídica, independência patrimonial, equilíbrio econômico, rastreabilidade, conformidade tributária/societária, segurança jurídica, padronização documental, confidencialidade e responsabilidade objetiva."
   },
   {
    "type": "h3",
    "text": "12.4 Classificação dos relacionamentos contratuais"
   },
   {
    "type": "ul",
    "items": [
     "<b>Contratos de Prestação de Serviços:</b> remuneração de empresas especializadas pelas atividades prestadas às demais.",
     "<b>Contratos de Fornecimento:</b> fornecimento de produtos, matérias-primas ou componentes entre empresas.",
     "<b>Contratos de Compartilhamento de Estrutura:</b> uso compartilhado de imóveis, equipamentos, sistemas, veículos, equipes e demais ativos.",
     "<b>Contratos de Licenciamento:</b> uso de marcas, tecnologia, propriedade intelectual, sistemas e metodologias.",
     "<b>Contratos de Franquia:</b> relacionamento entre a Fast Franchising e sua rede de franqueados."
    ]
   },
   {
    "type": "h3",
    "text": "12.5–12.9 Contratos por empresa"
   },
   {
    "type": "ul",
    "items": [
     "<b>Holding × controladas:</b> diretrizes estratégicas, investimentos, orçamento consolidado, políticas corporativas, indicadores estratégicos.",
     "<b>CSC:</b> contabilidade, controladoria, financeiro, fiscal, RH/DP, jurídico, TI, compras corporativas, compliance, auditoria interna.",
     "<b>Unity Company:</b> serviços de marketing e comunicação + reembolso de investimentos em mídia/publicidade/eventos.",
     "<b>Engenharia:</b> projetos executivos, especificações, orçamentos, homologações, treinamentos, suporte à Steel Conecta.",
     "<b>Log Express:</b> transporte, armazenagem complementar, roteirização, monitoramento, gestão de fretes, auditoria logística, logística reversa."
    ]
   },
   {
    "type": "h3",
    "text": "12.10–12.12 Contratos operacionais, de fornecimento e compartilhamento de ativos"
   },
   {
    "type": "p",
    "text": "Comerciais × Operacionais: SLA, prazos, responsabilidades, indicadores, uso de estoques, transferências entre unidades. Fornecimento entre empresas: objeto, condições comerciais, padrões de qualidade, responsabilidades logísticas e tributárias, faturamento e pagamento. Compartilhamento de ativos (imóveis, galpões, equipamentos, veículos, sistemas, licenças, infraestrutura): responsabilidade por utilização, manutenção, seguros, conservação e rateio de custos."
   },
   {
    "type": "h3",
    "text": "12.13–12.14 Gestão e indicadores contratuais"
   },
   {
    "type": "p",
    "text": "Todos os contratos internos são administrados pelo CSC, com apoio jurídico: controle de vigência, atualização periódica, gestão documental, assinatura eletrônica, revisão jurídica, armazenamento digital, aditivos e auditorias."
   },
   {
    "type": "ul",
    "items": [
     "Percentual de contratos vigentes · contratos próximos ao vencimento.",
     "Tempo médio de renovação · cumprimento dos SLAs.",
     "Conformidade documental · número de aditivos · não conformidades contratuais."
    ]
   },
   {
    "type": "h3",
    "text": "12.15 Diretrizes gerais"
   },
   {
    "type": "p",
    "text": "Os relacionamentos contratuais garantem que todas as empresas atuem de forma coordenada, transparente e juridicamente segura, assegurando clareza de responsabilidades, remuneração adequada, proteção patrimonial, conformidade regulatória e elevado padrão de governança."
   }
  ]
 },
 {
  "id": "c13",
  "badge": "gestor",
  "title": "13. Papéis e responsabilidades",
  "blocks": [
   {
    "type": "h3",
    "text": "13.1–13.2 Introdução e princípios"
   },
   {
    "type": "p",
    "text": "A definição objetiva de papéis e responsabilidades elimina sobreposições de funções, reduz conflitos de competência, fortalece a governança e assegura maior velocidade de decisão — segregação de funções, responsabilização objetiva, autonomia operacional, integração, transparência, accountability, foco em resultados."
   },
   {
    "type": "h3",
    "text": "13.3–13.5 Conselho, CEO e Holdings"
   },
   {
    "type": "p",
    "text": "<b>Conselho Consultivo:</b> define estratégia, aprova o Plano Diretor, investimentos e aquisições/alienações relevantes, acompanha indicadores estratégicos, aprova orçamento consolidado, supervisiona a CEO. <b>CEO:</b> implementa a estratégia, coordena diretorias, integra empresas, assegura metas, conduz a execução do planejamento. <b>Holdings:</b> controle societário, administração dos investimentos, políticas corporativas, governança, consolidação de resultados, alocação de capital, proteção de ativos estratégicos."
   },
   {
    "type": "h3",
    "text": "13.6 Empresas Comerciais"
   },
   {
    "type": "p",
    "text": "<b>Competem:</b> geração de demanda, prospecção, relacionamento, negociação, vendas, pós-venda, gestão de carteira, cumprimento de metas comerciais. <b>Não competem:</b> compras, armazenagem, logística, faturamento operacional, gestão financeira, RH, tecnologia, contabilidade."
   },
   {
    "type": "h3",
    "text": "13.7 Empresas Operacionais"
   },
   {
    "type": "p",
    "text": "<b>Competem:</b> compras, produção, armazenagem, gestão de estoques, movimentação, abastecimento, expedição, distribuição, controle operacional, precificação (preços mínimos, margens e tabelas) sob supervisão da CEO. <b>Não competem:</b> negociação comercial, campanhas de marketing, gestão financeira corporativa."
   },
   {
    "type": "h3",
    "text": "13.8 Empresas Especializadas"
   },
   {
    "type": "ul",
    "items": [
     "<b>CSC:</b> financeiro, fiscal, contabilidade, RH, jurídico, TI, controladoria, compras corporativas.",
     "<b>Unity Company:</b> marketing, branding, publicidade, comunicação, marketing digital, geração de demanda, gestão das marcas.",
     "<b>Engenharia:</b> engenharia, projetos, especificações, suporte técnico, treinamento, inovação.",
     "<b>Log Express:</b> transporte, logística, distribuição, gestão de fretes.",
     "<b>Fast Franchising:</b> expansão, implantação de franquias, suporte à rede, gestão contratual dos franqueados."
    ]
   },
   {
    "type": "h3",
    "text": "13.9–13.10 Modelo de responsabilidade e accountability"
   },
   {
    "type": "p",
    "text": "Toda atividade do Ecossistema deve possuir uma empresa responsável, um gestor responsável, indicadores, orçamento, metas, cronograma e mecanismos de controle — nenhuma atividade estratégica pode permanecer sem responsável formalmente designado. Todos os gestores respondem pelos resultados sob sua responsabilidade: cumprimento das metas, qualidade das entregas, uso eficiente dos recursos, conformidade legal, satisfação dos clientes e desenvolvimento das equipes."
   }
  ]
 },
 {
  "id": "c14",
  "badge": "aberto",
  "title": "14. Benefícios esperados",
  "blocks": [
   {
    "type": "p",
    "text": "A implantação do Ecossistema FAST proporcionará ganhos estruturais em eficiência, governança, escalabilidade e geração de valor."
   },
   {
    "type": "h3",
    "text": "14.2 Estratégicos"
   },
   {
    "type": "p",
    "text": "Crescimento sustentável, fortalecimento institucional, profissionalização da gestão, facilidade de expansão, maior capacidade competitiva, valorização do grupo."
   },
   {
    "type": "h3",
    "text": "14.3 Operacionais"
   },
   {
    "type": "p",
    "text": "Padronização dos processos, redução de retrabalho, maior produtividade, melhor utilização dos estoques, redução do lead time, maior nível de serviço."
   },
   {
    "type": "h3",
    "text": "14.4 Financeiros"
   },
   {
    "type": "p",
    "text": "Melhor gestão do caixa, redução dos custos administrativos, melhoria do capital de giro, aumento do EBITDA e da rentabilidade, maior previsibilidade financeira."
   },
   {
    "type": "h3",
    "text": "14.5 Comerciais"
   },
   {
    "type": "p",
    "text": "Maior foco das equipes comerciais, crescimento das vendas, melhoria da experiência do cliente, fortalecimento da marca FAST, aumento da fidelização e da participação de mercado."
   },
   {
    "type": "h3",
    "text": "14.6–14.9 Colaboradores, acionistas, clientes e franqueados"
   },
   {
    "type": "ul",
    "items": [
     "<b>Colaboradores:</b> clareza de responsabilidades, desenvolvimento profissional, crescimento, melhor ambiente, autonomia, reconhecimento por desempenho.",
     "<b>Acionistas:</b> proteção patrimonial, valorização das empresas, geração de caixa, crescimento sustentável, transparência, governança.",
     "<b>Clientes:</b> maior disponibilidade de produtos, atendimento mais rápido, melhor suporte técnico e qualidade, prazos menores.",
     "<b>Franqueados:</b> maior suporte, processos padronizados, fortalecimento da marca, crescimento da rede, melhor abastecimento, mais competitividade."
    ]
   },
   {
    "type": "h3",
    "text": "14.10 Benefícios institucionais"
   },
   {
    "type": "p",
    "text": "A consolidação do Ecossistema FAST permitirá ao grupo posicionar-se como uma organização altamente integrada, escalável e preparada para novos investimentos, expansão nacional, internacionalização e futuras parcerias estratégicas."
   }
  ]
 },
 {
  "id": "c15",
  "badge": "gestor",
  "title": "15. Riscos e etapas de validação",
  "blocks": [
   {
    "type": "p",
    "text": "Toda transformação organizacional envolve riscos que devem ser identificados, avaliados e mitigados de forma estruturada."
   },
   {
    "type": "h3",
    "text": "15.2 Principais riscos"
   },
   {
    "type": "ul",
    "items": [
     "<b>Estratégicos:</b> desalinhamento entre empresas, resistência às mudanças, perda de foco estratégico.",
     "<b>Operacionais:</b> falhas de integração, duplicidade de processos, gargalos logísticos.",
     "<b>Financeiros:</b> aumento temporário dos custos, necessidade de investimentos, pressão sobre o caixa.",
     "<b>Tributários:</b> enquadramentos inadequados, falhas fiscais, alterações legislativas.",
     "<b>Jurídicos:</b> contratos incompletos, conflitos societários, riscos regulatórios.",
     "<b>Pessoas:</b> resistência cultural, necessidade de capacitação, perda de talentos."
    ]
   },
   {
    "type": "h3",
    "text": "15.3 Plano de mitigação"
   },
   {
    "type": "p",
    "text": "Cada risco deve possuir responsável, plano de ação, prazo, indicadores e monitoramento periódico."
   },
   {
    "type": "h3",
    "text": "15.4 Etapas de validação"
   },
   {
    "type": "ul",
    "items": [
     "<b>Jurídica:</b> revisão societária, contratual e regulatória.",
     "<b>Tributária:</b> validação da eficiência fiscal.",
     "<b>Financeira:</b> avaliação econômica.",
     "<b>Operacional:</b> testes dos processos.",
     "<b>Tecnológica:</b> integração dos sistemas.",
     "<b>Recursos Humanos:</b> treinamento das equipes."
    ]
   },
   {
    "type": "h3",
    "text": "15.5–15.6 Comitê de implantação e aprovação final"
   },
   {
    "type": "p",
    "text": "A implantação será acompanhada por um Comitê com representantes da Holding, da CEO e das diretorias envolvidas, responsável por acompanhar cronogramas, deliberar sobre ajustes, priorizar projetos, remover impedimentos e reportar ao Conselho Consultivo. Concluídas as validações, o Conselho Consultivo delibera sobre a implantação definitiva do modelo organizacional."
   }
  ]
 },
 {
  "id": "c16",
  "badge": "gestor",
  "title": "16. Plano de implantação",
  "blocks": [
   {
    "type": "p",
    "text": "Metodologia para implementação gradual do Ecossistema FAST, minimizando riscos operacionais e assegurando continuidade das atividades — continuidade das operações, mínima interrupção dos negócios, comunicação transparente, treinamento das equipes, acompanhamento permanente dos indicadores e melhoria contínua."
   },
   {
    "type": "h3",
    "text": "16.3 Fase 1 — Governança"
   },
   {
    "type": "p",
    "text": "Formalização da Holding, consolidação do Conselho Consultivo, definição das políticas corporativas, aprovação do Plano Diretor."
   },
   {
    "type": "h3",
    "text": "16.4 Fase 2 — Estrutura Organizacional"
   },
   {
    "type": "p",
    "text": "Consolidação das empresas, formalização dos contratos internos, implantação do CSC, da Unity Company, da Engenharia e da Log Express."
   },
   {
    "type": "h3",
    "text": "16.5 Fase 3 — Processos"
   },
   {
    "type": "p",
    "text": "Padronização dos fluxos operacionais e financeiros, implantação dos indicadores, integração dos sistemas, automação dos processos."
   },
   {
    "type": "h3",
    "text": "16.6 Fase 4 — Expansão"
   },
   {
    "type": "p",
    "text": "Expansão da rede de lojas, ampliação dos Centros de Distribuição, crescimento da rede de franquias, desenvolvimento da indústria, fortalecimento do comércio digital, expansão nacional e internacional."
   },
   {
    "type": "h3",
    "text": "16.7 Gestão da mudança"
   },
   {
    "type": "p",
    "text": "Comunicação corporativa, capacitação das lideranças, treinamento das equipes, acompanhamento dos indicadores de adoção, monitoramento do clima organizacional, reconhecimento das boas práticas."
   },
   {
    "type": "h3",
    "text": "16.8–16.9 Monitoramento e revisão"
   },
   {
    "type": "p",
    "text": "A evolução do Plano Diretor é monitorada por indicadores estratégicos, operacionais, financeiros e de governança, apresentados periodicamente à CEO e ao Conselho Consultivo. Desvios geram planos de ação com responsáveis, prazos e metas. O Plano Diretor é revisado no mínimo uma vez por ano, ou sempre que houver alterações relevantes na estratégia, estrutura societária, ambiente regulatório ou expansão do grupo — sempre submetido à aprovação do Conselho Consultivo."
   },
   {
    "type": "h3",
    "text": "16.10 Considerações finais"
   },
   {
    "type": "p",
    "text": "O Plano Diretor consolida um modelo empresarial baseado na especialização das empresas, integração dos processos, governança corporativa, disciplina financeira e foco permanente na geração de valor — permitindo que o grupo evolua de uma organização operacionalmente integrada para uma plataforma empresarial escalável, preparada para sustentar crescimento nacional e internacional."
   }
  ]
 },
 {
  "id": "r1",
  "badge": "confidencial",
  "title": "R1. Modelo societário e econômico-tributário — Revisão 1",
  "blocks": [
   {
    "type": "callout",
    "text": "Esta seção consolida os esclarecimentos incorporados na Revisão 1 do Plano Diretor e prevalece sobre o texto-base onde houver divergência."
   },
   {
    "type": "h3",
    "text": "R1.1 As quatro holdings controladoras"
   },
   {
    "type": "ul",
    "items": [
     "Holding Indústria — MaxSteel.",
     "Holding Atacado — LMS e SUPPLY (duas empresas de atacado).",
     "Holding Varejo — DCS e CM (duas empresas de varejo).",
     "Holding Franquias — Fast Franchising (franquias de loja e rede Steel Conecta)."
    ]
   },
   {
    "type": "h3",
    "text": "R1.2 Enquadramento tributário e propósito de cada empresa"
   },
   {
    "type": "ul",
    "items": [
     "<b>Empresas operacionais</b> (indústria, atacado, varejo e franquia): centros de receita e resultado, controladas pelas holdings — é nelas que a receita de venda é registrada.",
     "<b>Empresas comerciais — Front Office</b> (Simples Nacional): objeto de promoção e vendas; sócios são os Diretores das unidades, remunerados por comissão sobre a receita, suficiente para cobrir seus custos.",
     "<b>Empresas de apoio — Back Office</b> (Simples Nacional): CSC, Unity Company, Engenharia e Log Express, remuneradas para cobrir seus custos, sem objetivo de lucro.",
     "<b>FAST Importação:</b> unidade de negócio comercial; as importações são executadas pelas empresas operacionais (MaxSteel, DCS-CM e LMS/SUPPLY)."
    ]
   },
   {
    "type": "h3",
    "text": "R1.3 Registro da receita e comissionamento"
   },
   {
    "type": "p",
    "text": "A receita de venda é sempre registrada nas empresas operacionais. As empresas comerciais promovem e vendem, recebendo percentual de comissão sobre a receita da respectiva unidade de negócio. O resultado econômico concentra-se nas empresas operacionais controladas pelas holdings."
   },
   {
    "type": "h3",
    "text": "R1.4 Preço de transferência interno"
   },
   {
    "type": "p",
    "text": "Nas transferências e no compartilhamento de itens entre empresas do Ecossistema, o preço de transferência é o custo de aquisição constante da nota fiscal eletrônica (XML) de cada item, sem qualquer margem ou ganho — evitando lucro em etapas intermediárias, com o resultado reconhecido na empresa operacional que vende ao mercado."
   },
   {
    "type": "h3",
    "text": "R1.5 Modelo de receita da Fast Franchising"
   },
   {
    "type": "ul",
    "items": [
     "Franquia de loja — taxa de adesão.",
     "Franquia de mão de obra (Steel Conecta) — taxa de adesão.",
     "Abastecimento de materiais — rebate recebido das empresas de varejo, atacado e indústria pelo fornecimento à rede franqueada."
    ]
   },
   {
    "type": "h3",
    "text": "R1.6 Remuneração das pessoas-chave"
   },
   {
    "type": "p",
    "text": "As pessoas-chave já atuam como sócias das empresas do Simples Nacional (comerciais, CSC, apoio, serviços e back office), remuneradas por pró-labore fixo, comissões e participação nos lucros (PLR) das unidades operacionais, alinhando o ganho das lideranças ao resultado das empresas que geram receita."
   },
   {
    "type": "h3",
    "text": "R1.7 Governança do Conselho"
   },
   {
    "type": "p",
    "text": "A CEO participa de todas as reuniões do Conselho Consultivo. As decisões, contudo, são tomadas por unanimidade pelos cinco membros do Conselho, preservando a colegialidade e a independência da governança."
   },
   {
    "type": "h3",
    "text": "R1.8 Meta de faturamento 2026"
   },
   {
    "type": "callout",
    "text": "<b>Meta 2026 — R$ 500 milhões:</b> o faturamento consolidado do Grupo FAST para 2026 é de R$ 500.000.000,00, com sazonalidade prevista de 40% no primeiro semestre e 60% no segundo semestre. O grupo encontra-se dentro da trajetória projetada para o período."
   },
   {
    "type": "h3",
    "text": "R1.9 Pontos que permanecem em validação"
   },
   {
    "type": "p",
    "text": "Três temas desta arquitetura devem ser confirmados pelos assessores jurídico, tributário e contábil do Grupo antes da implantação definitiva:"
   },
   {
    "type": "ul",
    "items": [
     "O limite de receita bruta do Simples Nacional frente ao volume de comissões das empresas comerciais.",
     "Os efeitos das holdings norte-americanas com CNPJ brasileiro no fluxo de dividendos, na tributação de controladas e nas obrigações cambiais.",
     "A robustez do preço de transferência ao custo entre partes relacionadas, para afastar questionamentos fiscais e de distribuição disfarçada de lucros."
    ]
   }
  ]
 },
 {
  "id": "a1",
  "badge": "aberto",
  "title": "A1. Índice de figuras",
  "blocks": [
   {
    "type": "ul",
    "items": [
     "Figura 1 — Arquitetura societária e de governança",
     "Figura 2 — Organograma geral do Ecossistema FAST",
     "Figura 3 — Macrofluxo operacional corporativo",
     "Figura 4 — Fluxo operacional da SUPPLY-LMS (atacado)",
     "Figura 5 — Fluxo operacional da DCS/CM (varejo)",
     "Figura 6 — Fluxo industrial (MaxSteel)",
     "Figura 7 — Fluxo de importação (FAST Importação)",
     "Figura 8 — Mapa dos fluxos financeiros do Ecossistema",
     "Figura 9 — Mapa dos relacionamentos contratuais",
     "Figura 10 — Roadmap de implantação em quatro fases",
     "Figura 11 — Modelo econômico-tributário do Ecossistema FAST",
     "Figura 12 — Fontes de receita da Fast Franchising"
    ]
   }
  ]
 },
 {
  "id": "a2",
  "badge": "aberto",
  "title": "A2. Glossário corporativo",
  "blocks": [
   {
    "type": "table",
    "rows": [
     [
      "Termo",
      "Definição"
     ],
     [
      "Ecossistema FAST",
      "Conjunto de empresas juridicamente independentes e estrategicamente integradas que compõem o Grupo FAST."
     ],
     [
      "Governança Corporativa",
      "Sistema pelo qual o grupo é dirigido e monitorado, envolvendo Conselho Consultivo, CEO e Diretoria Executiva."
     ],
     [
      "Holding",
      "Empresa de controle societário responsável por participações, investimentos, políticas corporativas e proteção patrimonial."
     ],
     [
      "Front Office",
      "Empresas comerciais responsáveis pela interface com o mercado: prospecção, relacionamento e vendas."
     ],
     [
      "Back Office",
      "Empresas especializadas que prestam serviços administrativos, técnicos, logísticos e de marketing às demais."
     ],
     [
      "CSC",
      "Centro de Serviços Compartilhados — concentra financeiro, fiscal, contábil, RH, jurídico, TI e controladoria."
     ],
     [
      "Empresas Operacionais",
      "Empresas que executam a atividade-fim: indústria, importação, atacado, varejo e distribuição."
     ],
     [
      "Steel Conecta",
      "Rede de franquias de execução, com governança compartilhada entre Fast Franchising e a Diretoria responsável."
     ],
     [
      "Contrato interno",
      "Instrumento que formaliza a prestação de serviços e o compartilhamento de recursos entre empresas do grupo."
     ],
     [
      "Rateio",
      "Critério objetivo de repartição de custos de serviços compartilhados entre as empresas beneficiadas."
     ],
     [
      "Preço de transferência",
      "Metodologia de precificação das operações entre empresas relacionadas, compatível com valores de mercado."
     ],
     [
      "SLA",
      "Acordo de Nível de Serviço — define escopo, prazos e indicadores da prestação de serviços entre empresas."
     ],
     [
      "Accountability",
      "Cultura de prestação de contas: cada gestor responde pelos resultados sob sua responsabilidade."
     ]
    ]
   }
  ]
 },
 {
  "id": "a3",
  "badge": "aberto",
  "title": "A3. Lista de siglas",
  "blocks": [
   {
    "type": "table",
    "rows": [
     [
      "Sigla",
      "Significado"
     ],
     [
      "BIM",
      "Building Information Modeling (modelagem da informação da construção)"
     ],
     [
      "CAC",
      "Custo de Aquisição de Clientes"
     ],
     [
      "CD",
      "Centro de Distribuição"
     ],
     [
      "CEO",
      "Chief Executive Officer (diretora-presidente)"
     ],
     [
      "CPL",
      "Custo por Lead"
     ],
     [
      "CRM",
      "Customer Relationship Management (gestão de relacionamento com clientes)"
     ],
     [
      "CSC",
      "Centro de Serviços Compartilhados"
     ],
     [
      "DIFAL",
      "Diferencial de Alíquota do ICMS"
     ],
     [
      "DRE",
      "Demonstração do Resultado do Exercício"
     ],
     [
      "EBITDA",
      "Lucro antes de juros, impostos, depreciação e amortização"
     ],
     [
      "ERP",
      "Enterprise Resource Planning (sistema integrado de gestão)"
     ],
     [
      "KPI",
      "Key Performance Indicator (indicador-chave de desempenho)"
     ],
     [
      "LGPD",
      "Lei Geral de Proteção de Dados"
     ],
     [
      "NCG",
      "Necessidade de Capital de Giro"
     ],
     [
      "OTIF",
      "On Time In Full (entrega no prazo e completa)"
     ],
     [
      "PMP / PMR",
      "Prazo Médio de Pagamento / Recebimento"
     ],
     [
      "ROA / ROE",
      "Retorno sobre Ativos / sobre Patrimônio Líquido"
     ],
     [
      "ROI",
      "Retorno sobre Investimento"
     ],
     [
      "SLA",
      "Service Level Agreement (acordo de nível de serviço)"
     ],
     [
      "TI",
      "Tecnologia da Informação"
     ]
    ]
   }
  ]
 }
]

export interface PdGroup {
  label: string
  ids: string[]
}

export const PLANO_DIRETOR_GROUPS: PdGroup[] = [
  { label: "Parte I · Visão", ids: ["c1", "c2"] },
  { label: "Parte II · Governança e Arquitetura", ids: ["c3", "c4", "c5", "c6"] },
  { label: "Parte III · Operação, Comercial e Finanças", ids: ["c7", "c8", "c9", "c10", "c11"] },
  { label: "Parte IV · Contratos, Pessoas e Riscos", ids: ["c12", "c13", "c14", "c15", "c16"] },
  { label: "Revisão 1", ids: ["r1"] },
  { label: "Anexos", ids: ["a1", "a2", "a3"] },
]

