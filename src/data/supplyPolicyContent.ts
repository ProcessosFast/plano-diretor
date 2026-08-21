import type { PolicyPart } from "./cscPolicyContent"

export const SUPPLY_POLICY_META = {
  codigo: "CP.PI.001.01",
  versao: "01-2026",
  revisao: "01",
  vigencia: "2026",
  elaboracao: "Letícia Werneck",
  aprovacao: "Josiel Dias",
  responsavel: "Suprimentos e Compras — DCS Supply",
  classificacao: "Política Interna — Operações · Supply",
  finalidade:
    "Estabelecer diretrizes, normas, responsabilidades e controles para o processo de Suprimentos e Compras, integrados à Cadeia de Suprimentos da empresa, assegurando alinhamento estratégico entre abastecimento, estoque, logística, financeiro e áreas comerciais.",
  objetivo:
    "Garantir disponibilidade de produtos para os canais de atacado e varejo, minimizando rupturas e excessos de estoque; assegurar competitividade comercial por meio de negociações estratégicas e gestão eficiente de custos; promover transparência, rastreabilidade e padronização dos processos; garantir conformidade legal, fiscal e tributária em todas as aquisições; mitigar riscos financeiros, logísticos, operacionais e de abastecimento; fortalecer relações éticas, sustentáveis e de longo prazo com fornecedores; otimizar capital de giro e uso responsável dos recursos financeiros; e sustentar crescimento escalável da operação com previsibilidade e governança.",
}

export const SUPPLY_POLICY_PARTS: PolicyPart[] = [
  {
    title: "Parte 1 — Princípios Gerais",
    subsections: [
      {
        heading: "Integração com a Cadeia de Suprimentos",
        paragraphs: ["Compras e Suprimentos devem atuar de forma integrada com Planejamento, Comercial, Logística, Estoque e Financeiro, garantindo:"],
        items: [
          "Equilíbrio entre demanda e abastecimento.",
          "Redução de rupturas e excessos de estoque.",
          "Sustentação da estratégia comercial (atacado e varejo).",
          "Disponibilidade de insumos e equipamentos necessários à operação interna.",
          "Previsibilidade operacional.",
        ],
      },
      {
        paragraphs: ["As decisões de compra devem considerar giro, margem, sazonalidade, capacidade logística e capital de giro."],
      },
      {
        heading: "Transparência e Rastreabilidade",
        paragraphs: ["Todos os processos devem ser formais, documentados e auditáveis, assegurando:"],
        items: [
          "Registro de cotações e negociações sempre anexados ao chamado.",
          "Critérios claros de seleção de fornecedores.",
          "Conformidade com limites de alçada.",
          "Nenhuma compra poderá ocorrer fora do fluxo formal estabelecido.",
        ],
      },
      {
        heading: "Eficiência Econômica e Competitividade",
        paragraphs: ["As aquisições devem buscar:"],
        items: [
          "Melhor relação custo-benefício (não apenas menor preço).",
          "Otimização de fretes e cargas.",
          "Negociação estratégica de prazos e condições.",
          "Maximização de margem e giro de estoque.",
          "Adotar mínimo de três cotações sempre que possível.",
        ],
      },
      {
        heading: "Gestão de Riscos",
        paragraphs: ["A área deve atuar preventivamente na identificação e mitigação de:"],
        items: [
          "Riscos financeiros.",
          "Riscos logísticos.",
          "Riscos de ruptura de abastecimento.",
          "Dependência excessiva de fornecedores.",
        ],
      },
      {
        heading: "Sustentabilidade e Relacionamento de Longo Prazo",
        paragraphs: ["A empresa priorizará parcerias sustentáveis e estratégicas com fornecedores que demonstrem:"],
        items: [
          "Capacidade técnica e financeira.",
          "Compromisso com qualidade.",
          "Conformidade legal.",
          "Estabilidade no fornecimento.",
        ],
      },
    ],
  },
  {
    title: "Parte 2 — Responsabilidade do Setor de Suprimentos",
    subsections: [
      {
        paragraphs: ["O setor de Suprimentos é responsável por assegurar a disponibilidade adequada de materiais, insumos, produtos para revenda e equipamentos necessários às operações da empresa, observando as seguintes diretrizes:"],
        items: [
          "Garantir abastecimento contínuo para evitar rupturas que comprometam vendas, produtividade, atendimento ao cliente ou operações internas.",
          "Atuar de forma preventiva e analítica, monitorando: níveis de estoque, giro de produtos, sazonalidade, lead times de fornecedores, histórico e previsão de demanda.",
          "Manter alinhamento constante com as áreas de Planejamento, Comercial, Produção, Logística e demais áreas solicitantes.",
          "Acompanhar alertas de estoque mínimo e pontos de reposição.",
          "Antecipar necessidades com base em projeções e indicadores.",
          "Acionar compras com antecedência compatível ao prazo operacional.",
          "Mitigar riscos de atrasos, dependência excessiva ou descontinuidade de fornecimento.",
          "Estruturar processos formais e padronizados de ressuprimento.",
          "Priorizar pedidos críticos com base em impacto comercial e operacional.",
          "Reportar imediatamente riscos de ruptura ou indisponibilidade relevante.",
          "Implementar ações corretivas e preventivas de curto e longo prazo quando houver falha de abastecimento.",
        ],
      },
      {
        paragraphs: ["A indisponibilidade de materiais que impacte vendas ou operações deverá ser tratada como ocorrência crítica, sujeita à análise de causa raiz e plano formal de melhoria."],
      },
    ],
  },
  {
    title: "Parte 3 — Responsabilidade do Setor de Compras",
    subsections: [
      {
        paragraphs: ["O setor de Compras é responsável por conduzir o processo de aquisição de bens e serviços com foco em competitividade, governança, mitigação de riscos e sustentabilidade econômica da operação, observando as seguintes diretrizes:"],
        items: [
          "Garantir que todas as aquisições ocorram conforme o fluxo formal aprovado.",
          "Conduzir processos estruturados de cotação e negociação, assegurando isonomia e transparência.",
          "Buscar a melhor relação custo-benefício, considerando preço de compra, condições de pagamento, prazos de entrega, custos logísticos e impactos tributários.",
          "Elaborar \"mapas\" comparativos e registrar critérios objetivos de decisão.",
          "Formalizar todas as contratações por meio de Ordem de Compra ou contrato para serviços.",
          "Negociar prazos compatíveis com as necessidades operacionais informadas por Suprimentos e Planejamento.",
          "Garantir que fornecedores estejam previamente homologados.",
          "Mitigar riscos comerciais, jurídicos e financeiros nas negociações.",
          "Avaliar oportunidades de redução de custos sem comprometer qualidade ou prazo.",
          "Atuar estrategicamente na consolidação de volumes e otimização de fretes.",
          "Manter relacionamento profissional e ético com fornecedores.",
          "Reportar variações relevantes de preço, ruptura de mercado ou riscos de fornecimento.",
          "Contribuir para aumento de margem nas mercadorias destinadas à revenda.",
        ],
      },
      {
        paragraphs: ["O setor de Compras não é responsável pelo controle físico de estoque ou planejamento de demanda, mas deve atuar de forma integrada com Suprimentos, Planejamento, Fiscal e Controladoria para assegurar decisões consistentes, economicamente viáveis e alinhadas à estratégia da empresa."],
      },
    ],
  },
  {
    title: "Parte 4 — Fluxo Formal do Processo de Compras",
    subsections: [
      {
        heading: "Pedido de Compras de Insumos e Ferramentas para operação interna",
        paragraphs: ["A área solicitante deve abrir a requisição no sistema oficial, incluindo descrição técnica, quantidade, unidade de medida, centro de custo, classificação do item/serviço, prazo necessário, justificativa e, quando houver, fornecedor sugerido. Devem ser anexadas especificações técnicas, orçamentos prévios e projetos ou memoriais descritivos aplicáveis. Após cadastrada, a requisição segue automaticamente para o fluxo de aprovação conforme a alçada definida pela empresa."],
      },
      {
        heading: "Compras para Suprimento de Lojas",
        paragraphs: ["Nas solicitações de compras voltadas ao ressuprimento de lojas, é indispensável que o processo seja fundamentado em análise e tratamento de dados, garantindo precisão na reposição e evitando excessos ou rupturas. Para isso, devem ser considerados indicadores como:"],
        items: [
          "Histórico de vendas por período.",
          "Giro de estoque e cobertura atual.",
          "Previsão de demanda.",
          "Níveis mínimos e máximos de estoque.",
          "Sazonalidade e comportamento regional de consumo.",
          "Performance de itens (curva ABC).",
          "Prazos de entrega e lead time de fornecedores.",
        ],
      },
      {
        paragraphs: ["A decisão de compra deve ser baseada em informações consolidadas pelo setor de Planejamento/Compras, garantindo ressuprimento alinhado ao consumo real, maior assertividade e governança no processo."],
      },
      {
        heading: "Pedidos por Encomenda — Venda Fechada de Lojas",
        paragraphs: ["Para itens solicitados por encomenda, vinculados a uma venda já confirmada pela loja, o processo de compras deve seguir diretrizes específicas para garantir precisão e rastreabilidade:"],
        items: [
          "1. Comprovação da Venda: a loja deve anexar a VEF ao chamado; o item só será adquirido após validação dessa documentação.",
          "2. Especificação Detalhada do Produto: deve conter todas as informações técnicas necessárias para garantir que o item adquirido esteja exatamente de acordo com o solicitado pelo cliente (cores, tamanhos, modelos, medidas, materiais, personalizações etc.).",
          "3. Condição de Compra Vinculada: a compra deve ser classificada como \"Item por Encomenda – Venda Fechada\"; estes itens não podem ser comprados para estoque, apenas para atendimento daquela venda específica.",
          "4. Responsabilidade sobre o Pedido: a loja é responsável por garantir que as informações encaminhadas estejam corretas; qualquer alteração após o envio do pedido deve ser formalizada imediatamente no chamado.",
        ],
      },
      {
        heading: "5. Preços, Prazos e Entregas",
        paragraphs: ["O valor do frete impacta diretamente o custo final da compra, a formação do preço de venda e a margem da operação. Deverá ser avaliado:"],
        items: [
          "Modal de transporte.",
          "Consolidação de cargas.",
          "Volume mínimo para otimização.",
          "Responsabilidade pelo frete (CIF ou FOB).",
          "O prazo de entrega ao cliente deve considerar: lead time do fornecedor, prazo de transporte, conferência e liberação.",
          "O setor de compras deve comunicar eventuais divergências imediatamente à gerência da loja solicitante.",
          "A área de Compras deverá priorizar negociações que reduzam custo logístico total sem comprometer o prazo.",
        ],
      },
      {
        heading: "6. Política de Cancelamento",
        items: [
          "Como são itens feitos sob demanda, cancelamentos só podem ocorrer se o fornecedor aceitar ou se previsto contratualmente.",
          "A loja deve informar o cliente sobre condições especiais de cancelamento aplicáveis a itens sob encomenda.",
        ],
      },
    ],
  },
  {
    title: "Parte 5 — Planejamento Tributário e Otimização do Custo Total de Aquisição",
    subsections: [
      {
        heading: "Avaliação Estratégica da Origem da Compra",
        paragraphs: ["A área de Compras deverá avaliar estrategicamente o local e o CNPJ de aquisição antes da definição do fornecedor, considerando operações entre regiões Sul, Sudeste e demais estados, bem como produtos importados."],
      },
      {
        paragraphs: ["A decisão de compra deve levar em consideração, além do preço negociado, os impactos econômicos da operação, incluindo:"],
        items: [
          "Diferenças de alíquotas de ICMS entre estados.",
          "Incentivos fiscais regionais que possam reduzir o custo efetivo.",
          "Regimes de Substituição Tributária (ST) que impactem o capital de giro.",
          "Eventuais custos adicionais vinculados à origem da mercadoria.",
          "Margem da operação.",
        ],
      },
      {
        paragraphs: [
          "A escolha do fornecedor e da origem da compra deverá ser baseada no custo total efetivo da aquisição, considerando o impacto tributário, financeiro e logístico da operação, e não apenas o preço nominal apresentado na cotação.",
          "Sempre que houver impacto relevante, a área de Compras deverá alinhar previamente com Fiscal e Controladoria para validação do cenário antes da formalização do pedido.",
        ],
      },
    ],
  },
  {
    title: "Parte 6 — Política de Homologação e Avaliação de Fornecedores",
    subsections: [
      {
        paragraphs: ["A contratação de fornecedores somente poderá ocorrer após processo formal de cadastro e homologação, conduzido pela área de Compras, com validação das áreas envolvidas quando necessário."],
      },
      {
        heading: "Documentação mínima obrigatória",
        items: [
          "Cartão CNPJ.",
          "Contrato Social e alterações.",
          "Dados bancários oficiais vinculados ao CNPJ.",
          "Licenças ou certificações específicas, quando aplicável.",
        ],
      },
      {
        heading: "Critérios objetivos de avaliação",
        items: [
          "Regularidade jurídica e fiscal.",
          "Capacidade financeira e operacional.",
          "Competitividade comercial.",
          "Conformidade tributária.",
        ],
      },
      {
        paragraphs: ["Os fornecedores homologados estarão sujeitos a avaliação periódica de desempenho, considerando qualidade, prazo de entrega, atendimento, conformidade fiscal e aderência às condições comerciais acordadas."],
      },
      {
        heading: "Bloqueio ou descredenciamento",
        items: [
          "Irregularidade fiscal ou jurídica.",
          "Descumprimento contratual recorrente.",
          "Não conformidades relevantes de qualidade ou prazo.",
          "Práticas antiéticas ou risco à reputação da Fast.",
        ],
      },
      {
        paragraphs: ["Todo o processo deverá ser documentado e mantido para fins de auditoria e governança."],
      },
    ],
  },
  {
    title: "Parte 7 — Boas Práticas de Suprimentos e Compras",
    subsections: [
      {
        items: [
          "Cumprir integralmente o fluxo formal de compras, sem exceções não justificadas.",
          "Garantir que todas as requisições estejam completas, documentadas e registradas no sistema oficial.",
          "Manter arquivadas cotações, especificações técnicas, negociações e comunicações relevantes.",
          "Basear decisões em dados concretos e análises comparativas técnicas e comerciais.",
          "Considerar, nas compras para revenda, a demanda real, giro de estoque, sazonalidade, margem e capital de giro.",
          "Avaliar o custo logístico total (frete, armazenagem e impacto operacional).",
          "Analisar impactos fiscais e tributários antes da definição do fornecedor.",
          "Priorizar fornecedores previamente homologados e avaliados.",
          "Evitar excessos de estoque e rupturas de abastecimento.",
          "Garantir comunicação clara e imediata entre áreas em casos de divergência de prazo, preço ou entrega.",
          "Manter alinhamento contínuo com as áreas de Fiscal, Controladoria, Planejamento e Financeiro.",
          "Assegurar rastreabilidade, transparência e auditabilidade em todo o ciclo de compras.",
        ],
      },
    ],
  },
  {
    title: "Parte 8 — Disposição Final",
    subsections: [
      {
        paragraphs: [
          "Todos os procedimentos do setor de Suprimentos e Compras estão formalmente documentados e detalhados conforme o nome e a natureza de cada processo.",
          "Em caso de dúvidas, necessidade de esclarecimentos ou realização de treinamentos, devem ser consultados exclusivamente os processos mapeados, validados e disponibilizados oficialmente pela empresa. Esses documentos constituem a referência única e padronizada para execução das atividades, garantindo alinhamento, conformidade e consistência operacional em toda a Cadeia de Suprimentos.",
        ],
      },
    ],
  },
]
