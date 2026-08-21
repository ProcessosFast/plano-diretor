import type { PolicyPart } from "./cscPolicyContent"

export const OPLOG_POLICY_META = {
  codigo: "EX.PG.001.01",
  versao: "01-2026",
  revisao: "03",
  vigencia: "2026",
  elaboracao: "Processos",
  aprovacao: "Gerência de Logística / Auditoria Interna",
  responsavel: "Governança de Operações Logísticas",
  classificacao: "Política Geral — nível estratégico",
  finalidade:
    "Estabelecer as diretrizes corporativas de governança do ciclo logístico da Fast Sistemas Construtivos, definindo os princípios, requisitos de gestão, controles internos e responsabilidades aplicáveis aos processos de recebimento, armazenagem, movimentação, separação, expedição e transferência de mercadorias.",
  objetivo:
    "Estabelecer um modelo corporativo de governança logística baseado em gestão por processos, gestão de riscos, conformidade, rastreabilidade, integridade operacional e melhoria contínua; definir requisitos mínimos de controle interno, segregação de funções, níveis de autoridade e evidências objetivas; padronizar POPs e ITs relacionados ao ciclo logístico. Esta Política é documento normativo de nível estratégico do Sistema de Gestão e prevalece sobre POPs, ITs e demais documentos operacionais sempre que houver divergência de diretrizes.",
}

export const OPLOG_POLICY_PARTS: PolicyPart[] = [
  {
    title: "Parte 1 — Abrangência e Vigência",
    subsections: [
      {
        paragraphs: [
          "Esta Política aplica-se a todas as unidades da Fast Sistemas Construtivos que realizem atividades do ciclo logístico, incluindo lojas próprias, franquias, centros de distribuição e demais instalações com movimentação de materiais.",
          "Seu cumprimento é obrigatório para colaboradores, gestores, terceiros e demais partes envolvidas, direta ou indiretamente, nos processos logísticos, bem como para as áreas responsáveis por sua gestão, controle e fiscalização.",
          "Esta Política entra em vigor na data de sua aprovação e permanece vigente até sua revisão, substituição ou revogação formal.",
        ],
      },
    ],
  },
  {
    title: "Parte 2 — Definições",
    subsections: [
      {
        items: [
          "Conferência cega: método de conferência física realizado sem acesso prévio às quantidades esperadas, visando à imparcialidade da verificação.",
          "Divergência: qualquer diferença identificada entre informações físicas, documentais ou sistêmicas durante a execução dos processos logísticos.",
          "Não conformidade (NC): descumprimento de requisito legal, normativo, procedimental ou de controle interno que demande tratamento formal.",
          "Segregação de funções: princípio de controle interno que estabelece a distribuição de responsabilidades entre diferentes agentes, evitando concentração de atividades incompatíveis.",
          "Rastreabilidade: capacidade de identificar e acompanhar o histórico, a localização e a movimentação de materiais e documentos ao longo do ciclo logístico.",
        ],
      },
    ],
  },
  {
    title: "Parte 3 — Estrutura de Governança: Papéis Institucionais",
    subsections: [
      {
        items: [
          "Gerência de Logística: responsável pela governança do ciclo logístico, pelo desempenho dos processos, pela implementação dos controles internos e pelo tratamento dos riscos operacionais.",
          "Supervisão de Logística: responsável pela gestão operacional das atividades logísticas, monitoramento dos controles e escalonamento de desvios relevantes à Gerência.",
          "Encarregados de Logística: responsáveis pela execução dos processos conforme os procedimentos estabelecidos, pela aplicação dos controles operacionais e pelo registro das não conformidades identificadas.",
          "Suprimentos: responsável pela gestão das tratativas relacionadas aos processos de abastecimento, documentação fiscal e regularização de divergências sob sua competência.",
          "Auditoria Interna: responsável por avaliar, de forma independente, a aderência dos processos aos requisitos desta Política, verificar a efetividade dos controles internos e reportar riscos relevantes à Alta Direção.",
          "Processos: responsável pela gestão documental desta Política e dos documentos normativos relacionados, bem como pela coordenação de revisões e da melhoria contínua do Sistema de Gestão.",
        ],
      },
    ],
  },
  {
    title: "Parte 4 — Princípios Normativos",
    subsections: [
      {
        items: [
          "Toda movimentação de materiais deve estar suportada por documentação válida, em conformidade com os requisitos legais, fiscais e internos aplicáveis.",
          "Os controles do ciclo logístico devem observar o princípio da segregação de funções, vedada a concentração de atividades incompatíveis que comprometam a independência das verificações.",
          "Divergências, avarias, perdas e demais não conformidades devem ser formalmente registradas, tratadas e rastreadas antes da conclusão do processo correspondente.",
          "A liberação de mercadorias, veículos e movimentações logísticas deve ocorrer somente mediante autorização formal, conforme os níveis de alçada e controles estabelecidos pela organização.",
          "Alterações em registros de estoque devem ser realizadas exclusivamente por meio de processo formal, devidamente justificado, aprovado e rastreável, em conformidade com as regras de controle interno.",
        ],
      },
    ],
  },
  {
    title: "Parte 5 — Gestão de Riscos Operacionais",
    subsections: [
      {
        paragraphs: ["Os riscos abaixo decorrem diretamente das etapas descritas nos POPs e ITs vigentes. A classificação é proposta desta revisão e deve ser ratificada pela Gerência de Logística e pela Auditoria."],
        items: [
          "Recebimento — Entrada de mercadoria com quantidade ou qualidade divergente da NF · Classe Alta · Controle: conferência cega obrigatória + comparação com NF antes da entrada no sistema.",
          "Recebimento — Entrada de NF fiscalmente incorreta no ERP · Classe Alta · Controle: retenção da mercadoria até correção ou autorização superior.",
          "Inventário Rotativo — Ajuste de estoque sem investigação de causa · Classe Crítica · Controle: investigação obrigatória de divergência antes de qualquer ajuste; aprovação de Suprimentos/Gerência.",
          "Inventário Rotativo — Contagem tendenciosa por falta de segregação entre quem separa e quem conta · Classe Média · Controle: contagem por colaborador designado, não pelo responsável direto pelo item no dia a dia.",
          "Abastecimento — Liberação de carga com grade parcialmente separada · Classe Alta · Controle: checklist de liberação — grade 100% separada + conferência concluída + NF emitida.",
          "Expedição de Vendas — Saída de mercadoria sem nota fiscal ou cupom fiscal emitido · Classe Crítica · Controle: vedação normativa expressa (Parte 4) + controle de pedidos emitidos com status da nota.",
          "Expedição de Vendas — Alteração de pedido após separação sem nova autorização · Classe Média · Controle: toda alteração gera nova versão impressa e assinada do pedido.",
          "Expedição Lojas — Ausência de registro sistêmico em lojas sem acesso ao Sults · Classe Média · Controle: planilha de controle operacional como registro substituto obrigatório dentro do portal, com data/hora/responsável.",
        ],
      },
    ],
  },
  {
    title: "Parte 6 — Controles Internos por Processo",
    subsections: [
      {
        heading: "6.1 Recebimento de Mercadorias",
        items: [
          "Conferência cega antes da entrada no sistema · Preventivo · Evidência: formulário de conferência cega preenchido · Toda entrega / Encarregado.",
          "Comparação NF x pedido x conferência física · Detectivo · Evidência: DANFE com observações · Toda entrega / Encarregado.",
          "Registro fotográfico de avarias · Detectivo · Evidência: fotografia anexada ao processo · Quando aplicável / Recebedor.",
          "Bloqueio de entrada em estoque antes da liberação de Suprimentos · Preventivo · Evidência: chamado no Sults liberado · Toda entrega / Suprimentos.",
        ],
      },
      {
        heading: "6.2 Inventário Rotativo — Itens Críticos",
        items: [
          "Contagem física antes do início das operações do dia · Preventivo · Evidência: planilha com data/hora/assinatura · Diária / Auxiliar-Encarregado.",
          "Batimento contagem x saldo de sistema · Detectivo · Evidência: planilha de batimento · Diária / Encarregado.",
          "Investigação obrigatória de toda divergência antes do ajuste · Detectivo · Evidência: justificativa registrada na planilha · Por ocorrência / Gerência de Logística.",
          "Intensificação de contagem em itens com 2+ divergências no mês · Detectivo · Evidência: histórico de contagens · Mensal / Gerência de Logística.",
        ],
      },
      {
        heading: "6.3 Expedição — Abastecimento de Lojas e Franquias",
        items: [
          "Conferência por colaborador distinto do que separou · Preventivo · Evidência: pedido assinado pelo conferente · Toda grade / Encarregado.",
          "Checklist de liberação (grade 100% + conferência + NF) · Preventivo · Evidência: registro de liberação no Sults · Toda expedição / Supervisor de Logística.",
          "Confirmação de recebimento pela loja destino · Detectivo · Evidência: comprovante assinado + entrada no Sults · Toda entrega / Loja destino.",
        ],
      },
      {
        heading: "6.4 Expedição — Vendas da Loja",
        items: [
          "Vedação de liberação sem NF-e ou cupom fiscal · Preventivo · Evidência: NF-e/cupom vinculado ao pedido · Toda venda / Encarregado.",
          "Conferência por colaborador distinto do que separou · Preventivo · Evidência: pedido assinado pelo conferente · Toda venda / Encarregado.",
          "Reemissão de pedido em caso de alteração pós-separação · Preventivo · Evidência: nova versão impressa e assinada · Por ocorrência / Encarregado.",
          "Controle duplo de saída (produtos e pedidos emitidos) · Detectivo · Evidência: planilhas de controle atualizadas · Diária / Liderança da Expedição.",
          "Acompanhamento direto de NF-e para pedidos abaixo de R$ 10.000,00 · Detectivo · Evidência: registro de acompanhamento · Por pedido / Supervisor de Logística.",
        ],
      },
    ],
  },
  {
    title: "Parte 7 — Não Conformidades, Auditoria e Exceções",
    subsections: [
      {
        heading: "Gestão de Não Conformidades e Ações Corretivas",
        paragraphs: ["O ciclo de tratamento segue quatro fases: identificação e registro, classificação de severidade, tratamento e escalonamento, e verificação de eficácia. Nenhuma NC é encerrada sem evidência de correção."],
      },
      {
        heading: "Auditoria e Conformidade",
        items: [
          "A Auditoria Interna verifica periodicamente a aderência das unidades a esta política, com base nos registros no Sults e nas planilhas de controle operacional.",
          "Achados de auditoria relativos a recebimento, inventário ou expedição seguem o mesmo ciclo de tratamento descrito acima, sem prejuízo do fluxo de auditoria previsto.",
          "Riscos classificados como Críticos ou Altos identificados em auditoria são reportados diretamente à Gerência de Logística e, quando aplicável, à Diretoria de Operações.",
        ],
      },
      {
        heading: "Gestão de Exceções",
        paragraphs: [
          "Qualquer exceção às diretrizes desta Política deve ser previamente aprovada pela autoridade competente, registrada formalmente e acompanhada de justificativa documentada.",
          "Toda exceção deve ser avaliada quanto aos riscos envolvidos e às medidas de mitigação aplicáveis. A recorrência de exceções para um mesmo processo ou controle deve ser tratada como indício de deficiência do sistema de gestão, sujeitando-se à análise da Gerência de Logística e da Auditoria Interna para definição das ações corretivas cabíveis.",
        ],
      },
    ],
  },
  {
    title: "Parte 8 — Controle do Documento, Penalidades e Revisão",
    subsections: [
      {
        heading: "Controle do Documento",
        paragraphs: ["Esta política prevalece sobre POPs e ITs em caso de conflito de conteúdo; divergências entre este documento e os procedimentos operacionais devem ser reportadas a Processos para correção."],
      },
      {
        heading: "Penalidades e Consequências",
        paragraphs: ["O descumprimento das vedações normativas desta política (Parte 4), em especial a liberação de mercadoria sem documento fiscal e a ausência de segregação de funções, está sujeito às medidas disciplinares previstas no Código de Conduta e nas políticas de Recursos Humanos vigentes, sem prejuízo do registro como não conformidade."],
      },
      {
        heading: "Revisão",
        paragraphs: ["Esta política é revisada a cada 12 meses ou sempre que houver mudança relevante nos processos de recebimento, inventário ou expedição, ou recomendação formal da Auditoria Interna."],
      },
    ],
  },
]
