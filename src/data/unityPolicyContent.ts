import type { PolicyPart } from "./cscPolicyContent"

export const UNITY_POLICY_META = {
  codigo: "—",
  versao: "1.0",
  revisao: "—",
  vigencia: "2026",
  elaboracao: "Unity Company",
  aprovacao: "Gestão / Diretoria",
  responsavel: "Setor de Marketing — Unity Company",
  classificacao: "Política Interna de Marketing",
  finalidade:
    "Estabelecer diretrizes, responsabilidades e processos para as atividades do setor de Marketing da Fast, garantindo alinhamento com a identidade da marca, eficiência nas entregas e integração com as demais áreas da empresa.",
  objetivo:
    "Esta política se aplica a todos os colaboradores do setor de Marketing, agências e fornecedores externos contratados pela Fast. Entra em vigor na data de sua aprovação pela gestão e deve ser revisada anualmente ou sempre que houver mudança relevante no posicionamento da empresa.",
}

export const UNITY_POLICY_PARTS: PolicyPart[] = [
  {
    title: "Parte 1 — Identidade Visual e Comunicação da Marca",
    subsections: [
      {
        heading: "2.1 Uso do Manual de Marca",
        paragraphs: ["Toda produção de conteúdo visual deve seguir o Manual de Identidade Visual da Fast. O uso indevido de logotipos, cores, tipografia ou qualquer elemento da marca sem aprovação não é permitido."],
        items: [
          "A paleta de cores, fontes e proporções definidas no manual são de uso obrigatório em todos os materiais oficiais.",
          "Adaptações visuais para campanhas específicas devem ser aprovadas pela coordenação de Marketing antes da publicação.",
          "Materiais produzidos por franqueados devem utilizar os templates fornecidos pela Fast.",
        ],
      },
      {
        heading: "2.2 Tom de Voz",
        paragraphs: ["A Fast se comunica de forma direta, confiável e especializada. O tom deve refletir autoridade técnica no segmento de sistemas construtivos a seco, sem excessos formais ou linguagem genérica."],
        items: [
          "Evitar jargões, exageros e promessas não verificáveis.",
          "Comunicados institucionais: tom formal e objetivo.",
          "Redes sociais e materiais comerciais: tom mais acessível, sem perder credibilidade.",
        ],
      },
    ],
  },
  {
    title: "Parte 2 — Redes Sociais e Conteúdo Digital",
    subsections: [
      {
        heading: "3.1 Canais Oficiais",
        paragraphs: ["Os perfis oficiais da Fast nas redes sociais são gerenciados exclusivamente pelo setor de Marketing. Nenhum colaborador ou franqueado pode criar perfis institucionais em nome da empresa sem autorização formal."],
      },
      {
        heading: "3.2 Responsabilidades",
        items: [
          "O time de Marketing é responsável pelo planejamento, produção e publicação de todos os conteúdos nos canais oficiais.",
          "Respostas a comentários e mensagens diretas devem seguir o protocolo de atendimento digital definido internamente.",
          "Publicações com conteúdo crítico (posicionamento político, respostas a crises, parceiros estratégicos) exigem aprovação da gestão antes de ir ao ar.",
        ],
      },
      {
        heading: "3.3 Colaboradores e Marca Pessoal",
        paragraphs: ["Colaboradores podem mencionar a Fast em seus perfis pessoais desde que:"],
        items: [
          "Não compartilhem informações confidenciais ou estratégicas.",
          "Não se posicionem em nome da empresa sem autorização.",
          "Evitem conteúdos que possam gerar repercussão negativa para a marca.",
        ],
      },
    ],
  },
  {
    title: "Parte 3 — Aprovação e Fluxo de Campanhas",
    subsections: [
      {
        heading: "4.1 Processo de Aprovação",
        paragraphs: ["Todo material de campanha — seja digital, impresso ou audiovisual — deve passar pelo fluxo de aprovação antes da veiculação ou envio ao cliente:"],
        items: [
          "1. Briefing da demanda com objetivo, público e prazo definidos · Responsável: Solicitante / Marketing.",
          "2. Produção do material por equipe interna ou agência · Responsável: Marketing.",
          "3. Revisão interna de conteúdo e identidade visual · Responsável: Coordenação de Marketing.",
          "4. Aprovação da gestão (para campanhas institucionais) · Responsável: Gestão / Diretoria.",
          "5. Publicação ou distribuição · Responsável: Marketing.",
        ],
      },
      {
        heading: "4.2 Prazos Mínimos para Aprovação",
        items: [
          "Materiais simples (post, banner digital): 2 dias úteis.",
          "Campanhas com múltiplas peças: 5 dias úteis.",
          "Eventos e ações institucionais: mínimo de 10 dias úteis.",
          "Solicitações fora do prazo serão atendidas conforme disponibilidade da equipe, sem garantia de entrega na data desejada.",
        ],
      },
    ],
  },
  {
    title: "Parte 4 — Agências e Fornecedores Externos",
    subsections: [
      {
        paragraphs: ["A contratação de agências e fornecedores para serviços de marketing deve ser aprovada pela coordenação de Marketing e passar pelo processo de aprovação financeira conforme política de compras da empresa."],
        items: [
          "Fornecedores devem assinar termo de confidencialidade antes de receber briefings ou acesso a materiais da marca.",
          "Todo material produzido por terceiros passa pelo fluxo de aprovação interno antes de veiculação.",
          "O Marketing é o ponto único de contato com agências — outras áreas não devem negociar diretamente.",
        ],
      },
    ],
  },
  {
    title: "Parte 5 — Dados, Privacidade e Uso de Imagem",
    subsections: [
      {
        paragraphs: ["O Marketing deve atuar em conformidade com a Lei Geral de Proteção de Dados (LGPD) em todas as ações que envolvam coleta, tratamento ou uso de dados de clientes e parceiros."],
        items: [
          "O uso de imagem de colaboradores, clientes ou terceiros em materiais de marketing exige autorização formal prévia.",
          "Listas de e-mails e dados de contatos devem ser gerenciadas conforme as diretrizes de privacidade da empresa.",
          "Campanhas de e-mail marketing devem incluir opção de descadastro (opt-out) em conformidade com a LGPD.",
        ],
      },
    ],
  },
  {
    title: "Parte 6 — Indicadores e Prestação de Contas",
    subsections: [
      {
        paragraphs: ["O setor de Marketing deve apresentar relatórios de desempenho periodicamente à gestão, com os principais resultados das ações realizadas."],
        items: [
          "Relatório mensal: alcance, engajamento e conversões por canal.",
          "Relatório de campanha: entregue em até 5 dias úteis após o encerramento.",
          "Budget de marketing: acompanhamento mensal versus planejado.",
        ],
      },
    ],
  },
  {
    title: "Parte 7 — Descumprimento, Revisão e Validade",
    subsections: [
      {
        heading: "Descumprimento desta Política",
        paragraphs: ["O descumprimento das diretrizes desta política pode implicar revisão do processo, comunicação formal ao colaborador envolvido e, em casos graves, aplicação das medidas disciplinares previstas nas normas internas da empresa."],
      },
      {
        heading: "Revisão e Validade",
        paragraphs: ["Esta política deve ser revisada anualmente pela coordenação de Marketing, com validação da gestão. Alterações substanciais devem ser comunicadas a todos os envolvidos com antecedência mínima de 15 dias."],
      },
    ],
  },
]
