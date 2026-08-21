import type { PolicyPart } from "./cscPolicyContent"

export const CONFLITO_POLICY_META = {
  codigo: "POL-CONF-001",
  versao: "1.0",
  revisao: "0",
  vigencia: "2026",
  elaboracao: "Jurídico e Compliance (CSC)",
  aprovacao: "CEO e Conselho Consultivo",
  responsavel: "Jurídico e Compliance (CSC)",
  classificacao: "Política Corporativa — Uso interno / Confidencial",
  finalidade:
    "Esta Política estabelece as regras para identificar, declarar, avaliar e tratar situações de conflito de interesses envolvendo integrantes do Ecossistema FAST. Seu objetivo é assegurar que toda decisão tomada em nome das empresas do Grupo seja imparcial, baseada em critérios legítimos de negócio e alinhada aos interesses da Fast, e não a interesses pessoais, familiares ou financeiros de quem decide. O tema é especialmente relevante em razão da arquitetura do Ecossistema, formado por empresas com personalidade jurídica própria que mantêm relações comerciais entre si — essa integração traz eficiência, mas também exige regras claras para que as transações internas e as relações com terceiros preservem a objetividade, a transparência e a proteção do patrimônio de cada empresa.",
  objetivo:
    "Esta Política complementa a Política de Compliance e Integridade (POL-COMP-001) e detalha o item de conflitos de interesse previsto no Capítulo 3 do Plano Diretor. Aplica-se a todos os membros do Conselho Consultivo, à CEO, aos diretores, gestores, colaboradores (efetivos, temporários ou estagiários) e aprendizes de todas as empresas do Ecossistema FAST — governança, holdings, empresas operacionais, comerciais e especializadas (CSC). Fornecedores, prestadores de serviço, representantes, franqueados e demais parceiros devem observar princípios equivalentes, refletidos em cláusulas contratuais e na diligência de terceiros prevista na Política de Compliance.",
}

export const CONFLITO_POLICY_PARTS: PolicyPart[] = [
  {
    title: "Parte 1 — Princípio-Chave e Abrangência",
    subsections: [
      {
        paragraphs: [
          "Princípio-chave: a existência de um conflito de interesses não é, por si só, uma falta. A falta ocorre quando o conflito deixa de ser declarado ou quando a pessoa em conflito participa da decisão. O que se exige é transparência e abstenção, não a ausência de qualquer relação pessoal.",
        ],
      },
    ],
  },
  {
    title: "Parte 2 — Definições",
    subsections: [
      {
        items: [
          "Conflito de interesses: situação em que interesses pessoais, familiares, financeiros ou de terceiros próximos possam influenciar, ou aparentar influenciar, o julgamento imparcial de quem atua em nome da Fast.",
          "Conflito real: situação em que o interesse pessoal efetivamente se contrapõe ao interesse da empresa em uma decisão concreta.",
          "Conflito potencial: situação que ainda não afeta uma decisão, mas pode vir a afetar se as circunstâncias mudarem.",
          "Conflito aparente: situação que, para um observador externo, pode parecer comprometer a imparcialidade, ainda que não haja influência real.",
          "Parte relacionada: empresa do próprio Ecossistema, ou empresa/pessoa ligada a um colaborador por vínculo societário, familiar ou afetivo.",
          "Pessoa ligada: cônjuge, companheiro(a), parentes até 3º grau (por sangue ou afinidade) e demais pessoas com relação pessoal próxima.",
          "Abstenção: ato de afastar-se da discussão e da decisão sobre matéria em que se tenha conflito de interesses.",
        ],
      },
    ],
  },
  {
    title: "Parte 3 — Referências",
    subsections: [
      {
        items: [
          "Plano Diretor do Ecossistema FAST — Cap. 3 (Governança e Compliance) e Cap. 4 (independência jurídica das empresas e relações entre elas).",
          "Política de Compliance e Integridade do Ecossistema FAST (POL-COMP-001).",
          "Lei nº 12.846/2013 (Lei Anticorrupção) e Decreto nº 11.129/2022.",
          "Lei nº 10.406/2002 (Código Civil) — deveres de administradores e transações com partes relacionadas.",
          "Consolidação das Leis do Trabalho (CLT) e o Código de Cultura Fast.",
        ],
      },
    ],
  },
  {
    title: "Parte 4 — Princípios",
    subsections: [
      {
        paragraphs: ["O tratamento de conflitos de interesses observa os princípios de governança do Plano Diretor:"],
        items: [
          "Segregação de funções e rastreabilidade das aprovações.",
          "Independência jurídica e patrimonial de cada empresa do Ecossistema.",
          "Transparência e dever de declarar.",
          "Responsabilização objetiva (accountability) de quem decide.",
          "Prevalência do interesse da empresa sobre interesses pessoais.",
        ],
      },
    ],
  },
  {
    title: "Parte 5 — Situações que Caracterizam Conflito de Interesses",
    subsections: [
      {
        paragraphs: ["De forma não exaustiva, devem ser declaradas e tratadas as seguintes situações:"],
        items: [
          "Relações comerciais: participar de decisão de compra, venda, crédito, preço ou contratação que envolva empresa de propriedade de parente ou pessoa próxima.",
          "Interesse financeiro: ter participação societária ou interesse financeiro relevante em fornecedor, cliente ou concorrente da Fast.",
          "Relações internas: supervisionar, avaliar ou decidir sobre a remuneração de parente ou pessoa com quem se tem relação afetiva.",
          "Atividade externa: exercer atividade externa ou segundo emprego que concorra com a Fast ou comprometa a dedicação e a lealdade.",
          "Vantagens: receber vantagem, presente ou hospitalidade fora dos limites da Política de Compliance.",
          "Uso indevido: usar informação privilegiada, ativos ou oportunidades da empresa em benefício próprio ou de terceiros.",
        ],
      },
    ],
  },
  {
    title: "Parte 6 — Transações entre Empresas do Ecossistema (Partes Relacionadas)",
    subsections: [
      {
        paragraphs: ["Como as empresas do Ecossistema mantêm relações comerciais entre si (por exemplo, fornecimento, serviços do CSC, logística da Log Express, atacado da SUPPLY-LM e outras), essas transações são partes relacionadas e exigem cuidado redobrado para não gerar transferência indevida de resultado entre empresas ou prejuízo a sócios e credores de qualquer delas."],
      },
      {
        heading: "Diretrizes obrigatórias para transações entre empresas do Grupo",
        items: [
          "Devem ser formalizadas por contrato interno e SLA, conforme o Plano Diretor.",
          "Devem observar critérios objetivos de preço e rateio, em condições equivalentes às de mercado (comutatividade).",
          "Devem ser registradas de forma transparente e passíveis de auditoria e conciliação.",
          "Nenhuma pessoa deve representar, ao mesmo tempo, os dois lados de uma negociação relevante sem aprovação por alçada superior.",
        ],
      },
      {
        paragraphs: ["O administrador ou gestor que tiver interesse pessoal em uma transação entre partes relacionadas deve declará-lo e abster-se de decidir por ambos os lados."],
      },
    ],
  },
  {
    title: "Parte 7 — Relações Familiares e Nepotismo",
    subsections: [
      {
        paragraphs: ["Relações de parentesco ou afetivas não impedem, por si sós, o trabalho na Fast, mas exigem transparência e barreiras que preservem a imparcialidade."],
        items: [
          "Toda relação de parentesco ou afetiva entre colaboradores, ou entre colaborador e fornecedor/cliente, deve ser declarada.",
          "Decisões sobre a pessoa ligada devem ser tomadas por instância diferente, sem participação do parente.",
        ],
      },
    ],
  },
  {
    title: "Parte 8 — Participação Societária e Interesses Financeiros Externos",
    subsections: [
      {
        paragraphs: ["Colaboradores podem ter investimentos e participações, desde que isso não conflite com suas funções na Fast nem comprometa sua lealdade ao Grupo."],
        items: [
          "Investimentos em empresas de capital aberto, de forma passiva e sem influência sobre negócios da Fast, não precisam de declaração, salvo se gerarem conflito concreto.",
          "É vedado usar a posição na Fast para favorecer empresa na qual se tenha interesse financeiro.",
        ],
      },
    ],
  },
  {
    title: "Parte 9 — Atividades Externas e Segundo Emprego",
    subsections: [
      {
        paragraphs: ["Atividades externas são admitidas desde que não concorram com a Fast, não utilizem recursos, informações ou tempo da empresa e não comprometam o desempenho das funções. Atividades em empresas concorrentes, fornecedoras ou clientes devem ser declaradas e podem ser vedadas conforme o risco. O uso de ativos, marcas, informações ou oportunidades da Fast em atividade externa é proibido."],
      },
    ],
  },
  {
    title: "Parte 10 — Dever de Declaração",
    subsections: [
      {
        paragraphs: ["Todo integrante do Ecossistema tem o dever de declarar conflitos reais, potenciais ou aparentes assim que deles tomar conhecimento. A omissão de conflito conhecido é, ela própria, uma violação a esta Política."],
        items: [
          "Na admissão / posse: declaração inicial de conflitos e relações relevantes.",
          "Anualmente: renovação da declaração por todos os gestores e colaboradores de áreas de risco.",
          "A qualquer tempo: sempre que surgir situação nova de conflito, antes de participar da decisão envolvida.",
        ],
      },
      {
        paragraphs: ["A declaração é feita por meio do formulário do Anexo I, encaminhado ao gestor imediato e à área de Jurídico e Compliance."],
      },
    ],
  },
  {
    title: "Parte 11 — Análise, Decisão e Abstenção",
    subsections: [
      {
        paragraphs: ["Declarado o conflito, a situação é avaliada e recebe uma medida proporcional ao risco. Medidas possíveis, isoladas ou combinadas:"],
        items: [
          "Abstenção da pessoa em conflito na discussão e na decisão.",
          "Transferência da decisão para outra instância ou gestor.",
          "Reforço de controles, aprovação por alçada superior e registro formal.",
          "Realocação de atribuições ou, em casos graves, vedação da relação que gera o conflito.",
        ],
      },
      {
        paragraphs: ["Toda análise e a medida adotada devem ser registradas, garantindo rastreabilidade."],
      },
    ],
  },
  {
    title: "Parte 12 — Governança, Monitoramento e Sanções",
    subsections: [
      {
        paragraphs: [
          "A área de Jurídico e Compliance mantém o registro das declarações, monitora o cumprimento desta Política e reporta periodicamente à CEO e ao Conselho Consultivo. As transações com partes relacionadas são acompanhadas por auditorias e conciliações.",
          "O descumprimento — inclusive a omissão de conflito conhecido — sujeita o responsável a medidas disciplinares proporcionais à gravidade, que podem incluir advertência, suspensão, desligamento por justa causa e rescisão de contratos, sem prejuízo das responsabilidades civil, criminal e administrativa cabíveis. As medidas aplicam-se a todos os níveis hierárquicos, sem exceção.",
        ],
      },
    ],
  },
  {
    title: "Parte 13 — Vigência, Revisão e Aprovação",
    subsections: [
      {
        paragraphs: [
          "Esta Política entra em vigor na data de sua aprovação pela CEO e pelo Conselho Consultivo, por prazo indeterminado, e será revisada no mínimo anualmente ou sempre que houver alteração legal ou organizacional relevante. A gestão e a atualização competem à área de Jurídico e Compliance do CSC.",
          "Elaboração e revisão: Jurídico e Compliance — CSC. Aprovação: CEO e Conselho Consultivo do Ecossistema FAST. Vigência a partir de: data da aprovação.",
        ],
      },
    ],
  },
  {
    title: "Anexo I — Formulário de Declaração de Conflito de Interesses",
    subsections: [
      {
        paragraphs: ["Preencha e encaminhe ao gestor imediato e à área de Jurídico e Compliance. A ausência de conflito também deve ser declarada (assinalar \"Nada a declarar\")."],
        items: [
          "Campos do declarante: Nome; Empresa / Área; Cargo; ( ) Nada a declarar / ( ) Declaro a(s) situação(ões) abaixo; Descrição da situação de conflito (pessoas, empresas e vínculos envolvidos); Tipo — ( ) Real ( ) Potencial ( ) Aparente; Data; Assinatura do declarante.",
          "Uso exclusivo do Jurídico e Compliance: Medida adotada; Alçada de aprovação; Responsável / Data.",
        ],
      },
    ],
  },
]
