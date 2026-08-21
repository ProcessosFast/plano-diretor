import type { PolicyPart } from "./cscPolicyContent"

export const MAXSTEEL_POLICY_META = {
  codigo: "01",
  versao: "01",
  revisao: "01",
  vigencia: "2026",
  elaboracao: "24/11/2025",
  aprovacao: "Thiago Viana",
  responsavel: "Fábrica Nova Metálica (MaxSteel)",
  classificacao: "Política Interna — MaxSteel",
  finalidade:
    "Estabelecer diretrizes claras para padronizar processos mapeados em fluxogramas, garantir a segurança, a organização e a qualidade das operações dentro da empresa. Esta política visa orientar colaboradores sobre procedimentos, responsabilidades e boas práticas, assegurando conformidade com normas legais e internas, promovendo um ambiente seguro, produtivo e alinhado aos valores da organização.",
  objetivo:
    "Aplica-se a todos os colaboradores envolvidos na fábrica Nova Metálica, em suas etapas de trabalho e funções respectivamente.",
}

export const MAXSTEEL_POLICY_PARTS: PolicyPart[] = [
  {
    title: "Parte 1 — Conduta, Jornada e Responsabilidade Administrativa",
    subsections: [
      {
        heading: "Conduta, Ética e Medidas Disciplinares",
        items: [
          "Proibição de assédio, discriminação e qualquer forma de violência.",
          "Obrigatório o uso adequado dos bens da empresa (equipamentos e materiais).",
          "Proibição de álcool e drogas durante o trabalho.",
          "Proibido o uso de roupas inadequadas como croppeds, roupas de alça, shorts, saias curtas, leggings, regata, ficar sem camisa e uso de chinelo durante a jornada de trabalho.",
          "Tratamento de conflitos de interesse e brindes conforme código de ética.",
          "Medidas disciplinares poderão ser aplicadas de forma hierárquica: orientação, advertência verbal, por escrita, suspensão e desligamento, conforme gravidade.",
        ],
      },
      {
        heading: "Jornada de Trabalho e Intervalos",
        items: [
          "Horário padrão: segunda a sexta-feira, das 07h00 às 17h00.",
          "É permitida hora extra previamente acordada entre Encarregado de Produção e colaboradores.",
          "Almoço: 1 (uma) hora, preferencialmente entre 12h00 e 13h00.",
          "Lanche: 15 (quinze) minutos, às 15h00.",
        ],
      },
      {
        heading: "Responsabilidade da Administração da Fábrica",
        items: [
          "Conduzir admissões, integração e treinamentos.",
          "Controle de jornada e benefícios.",
          "Acompanhar desempenho e promover desenvolvimento dos funcionários.",
          "Respeitar férias, afastamentos e licenças conforme legislação.",
          "Tratar dúvidas e conflitos com transparência e respeito.",
          "Gerar relatórios e controles internos.",
          "Apoiar a produção diariamente e a gerência com documentos e dados.",
          "Apoiar a compra de insumos e matéria-prima.",
          "Prestação de contas de gastos da empresa.",
          "Controle de faturamento da fábrica e emissão de relatório.",
          "Controle de fundo fixo e prestação de contas.",
          "Manter a fábrica em condições de funcionamento, com manutenções em dia e insumos de consumo diário em estoque.",
          "Receber pedidos pelo sistema Sults e organizar a fila de produção junto ao encarregado de produção.",
          "Fazer solicitação de emissão de nota fiscal e entrada de nota no estoque da fábrica.",
        ],
      },
    ],
  },
  {
    title: "Parte 2 — Limpeza, Higiene e Organização",
    subsections: [
      { paragraphs: ["A limpeza e a organização são essenciais para segurança, qualidade e conforto. É responsabilidade da equipe de ASG."] },
      {
        heading: "Banheiros",
        paragraphs: ["Frequência: pela manhã antes do expediente e ao longo do dia quando necessário."],
        items: [
          "Higienizar vasos, pias, torneiras e maçanetas com desinfetante.",
          "Repor papel higiênico, sabonete líquido e papel toalha.",
          "Verificar funcionamento de descargas e vazamentos.",
          "Manter piso seco e sinalizar áreas molhadas.",
        ],
      },
      {
        heading: "Cozinha / Refeitório",
        paragraphs: ["Frequência: após cada refeição."],
        items: [
          "Limpar bancadas, pias, mesas e bancos; higienizar utensílios.",
          "Esvaziar e lavar lixeiras; organizar geladeira e armários.",
          "Descartar resíduos corretamente; proibido armazenar produtos estragados.",
        ],
      },
      {
        heading: "Escritórios e Sala de Reunião",
        paragraphs: ["Frequência: limpeza geral diária."],
        items: [
          "Limpar mesas, cadeiras e armários com produtos adequados; varrer e passar pano nos pisos.",
          "Esvaziar lixeiras e substituir sacos de lixo.",
          "Manter cabos e equipamentos arrumados e vias desobstruídas.",
        ],
      },
      {
        heading: "Chão de Fábrica e Galpão",
        paragraphs: ["A limpeza é responsabilidade da equipe de limpeza; porém todos os colaboradores devem manter a área limpa e organizada, descartando resíduos nos locais corretos. Em caso de sujeira excessiva, umedecer o chão para diminuir a proliferação de poeira."],
      },
      {
        heading: "Manutenção Predial",
        paragraphs: ["Reparos estruturais, ajustes em paredes, pisos, telhados, canteiros e demais elementos construtivos são de responsabilidade da equipe de pedreiros designada pela empresa."],
      },
    ],
  },
  {
    title: "Parte 3 — Segurança, Saúde no Trabalho e EPIs",
    subsections: [
      {
        items: [
          "Uso obrigatório de EPIs por todos os colaboradores conforme risco: protetores auriculares, luvas adequadas, calçado de segurança.",
          "EPIs devem ser entregues, registrados e assinados pelo funcionário ao retirar.",
          "Devem ser mantidos limpos e substituídos quando danificados.",
          "Treinamentos obrigatórios periódicos: integração, operação de equipamentos, prevenção de incêndios, primeiros socorros e outros conforme necessidade de cada função.",
          "Travamento de máquinas em caso de manutenção.",
          "Proibição de ajustes com máquina em funcionamento.",
          "Canal de reporte imediato para riscos: identificar e informar ao superior imediato.",
        ],
      },
    ],
  },
  {
    title: "Parte 4 — Armazenagem, Expedição e Empilhadeiras",
    subsections: [
      {
        heading: "Armazenagem",
        items: [
          "Conferir local adequado do descarregamento.",
          "Conferir o tipo de aço e a identificação do local de armazenamento.",
          "Respeitar limite de carga ao empilhar bobinas e materiais acabados.",
        ],
      },
      {
        heading: "Recebimento de materiais",
        items: [
          "Conferir NF e certificados recebidos.",
          "Inspecionar visualmente por avarias e registrar divergências.",
          "Registrar fitas recebidas na ficha de recebimento; conferir peso real, pesando bobinas antes do uso.",
          "Fazer teste de espessura e de zincagem com os aparelhos e registrar em planilha.",
        ],
      },
      {
        heading: "Expedição",
        items: [
          "Conferir nota fiscal de saída.",
          "Verificar integridade dos volumes.",
          "Fixar proteções e fitas de amarração.",
          "Registrar fotos e documentos de liberação do material.",
          "Conferir se o caminhoneiro amarrou os materiais com cintas no caminhão.",
          "Entregar a nota fiscal ao caminhoneiro e tirar foto para registro.",
        ],
      },
      {
        heading: "Uso de Empilhadeiras",
        items: [
          "Somente operadores treinados e habilitados podem operar a empilhadeira.",
          "Antes do uso, realizar checklist visual e testes: freios, luzes de farol e lanterna, acionador de ré, garfos, pneus, gás e possíveis vazamentos.",
          "Verificar água do radiador diariamente e conforme o uso do dia.",
          "Verificar gás e necessidade de troca — para trocar, fechar o registro e substituir o cilindro.",
          "Verificar níveis de óleo hidráulico e motor 2 vezes por semana e conforme necessidade.",
          "Operar com garfos baixos e cinto de segurança, respeitando velocidade e prioridade aos pedestres.",
          "Buzinar e alertar pessoas que possam cruzar o caminho; nunca transportar pessoas.",
          "Manter carga dentro da capacidade nominal.",
          "Estacionar com freio acionado e garfos abaixados.",
          "Verificar espaço para transporte de bobina até a máquina, observando obstruções do ambiente.",
        ],
      },
      {
        heading: "Procedimento para Descarga de Aço com Empilhadeira",
        items: [
          "Verificar área nivelada e sinalizada.",
          "Conferir peso/dimensões da carga.",
          "Aproximar lentamente do veículo com garfos alinhados.",
          "Inserir garfos completamente e elevar apenas o necessário.",
          "Deslocar com garfos baixos e carga estável.",
          "Posicionar e abaixar lentamente até apoiar.",
          "Retirar garfos com cuidado e afastar a empilhadeira.",
        ],
      },
      {
        heading: "Pós Recebimento de Material",
        items: [
          "Ao chegar aço na fábrica, o administrativo deve fazer o pedido de compra de entrada com a nota fiscal no estoque da fábrica no SAP.",
          "Anexar o PDF no chamado aberto ao faturamento CSC.",
          "Após o faturamento dar entrada na nota, o material fica disponível para uso e criação de ordem de produção.",
        ],
      },
    ],
  },
  {
    title: "Parte 5 — Parâmetros de Processo de Produção",
    subsections: [
      {
        heading: "Espessuras e tipos de aço",
        paragraphs: [
          "Espessura do aço definida por mm ± tolerância para cada tipo, conforme tabela vigente. Referências principais: 182 x 0,80/0,95/1,25 x ZAR 275 M90; 168 x 0,80/0,95/1,25 x ZAR 275 G90; 231 x 0,80/0,95/1,25 x ZAR 275 M140; 182 x 0,80/0,95/1,25 x ZAR 350 M90; 168 x 0,80/0,95/1,25 x ZAR 350 G90; 231 x 0,80/0,95/1,25 x ZAR 350 M140; 55 x 0,50 - Z275 25X30; 96 x 0,50 - Z120 F530; 105 x 0,50 - Z275 G48; 126 x 0,50 - Z275 G70; 147 x 0,50 - Z275 G90; 126 x 0,50 - Z120 M48; 147 x 0,50 - Z120 M70; 167 x 0,50 - Z120 M90.",
        ],
      },
      {
        heading: "Regras de projeto e produção",
        items: [
          "Em caso de projeto, todos os parâmetros devem ser ajustados conforme arquivo de Romaneio formulado pelo setor técnico FAST Homes e enviado à fábrica.",
          "A fábrica recebe, imprime o Romaneio de produção e os demais documentos e entrega ao operador.",
          "Nenhum ajuste adicional é permitido sem aprovação formal do responsável técnico.",
          "Versões atualizadas dos documentos devem estar disponíveis no posto de trabalho.",
          "Conferir regulagem de máquinas.",
          "Todos os marcadores devem estar corretos antes da produção: Nome da Fábrica / REV do Aço / COMP / EXP / Mês e Ano.",
          "Validar ferramentas e dispositivos no posto de trabalho: micrômetro, paquímetro e medidor de camadas de zinco.",
          "Registrar o setup inicial antes do início do lote — preencher Ficha de Produção com hora, nome do operador, fita a utilizar, nome do material, e verificar se a primeira peça produzida está ok.",
        ],
      },
    ],
  },
  {
    title: "Parte 6 — Manutenção de Máquinas",
    subsections: [
      {
        heading: "Manutenção Preventiva",
        paragraphs: ["Deve ser feita conforme manual do fabricante, histórico de falhas e condições de uso."],
        items: [
          "Diária (pré-uso): inspeção visual e limpeza.",
          "Semanal: verificação de fixações, lubrificação simples, checagem de filtros.",
          "Mensal: ajustes de alinhamento/folgas, inspeção elétrica básica, inspeção de mangueiras/correias.",
        ],
      },
      {
        heading: "Manutenção Corretiva",
        paragraphs: ["Deve ser solicitada imediatamente quando ocorrer qualquer um dos pontos abaixo:"],
        items: [
          "Vibração anormal, ruído excessivo, aquecimento fora do padrão, cheiro de queimado, faíscas indevidas.",
          "Vazamentos de óleo, ar ou fluido acima do aceitável; cabos elétricos danificados; conexões frouxas.",
          "Partes móveis desprotegidas ou com folgas que comprometam a operação segura.",
          "Queda súbita de produtividade.",
        ],
      },
      {
        heading: "Lubrificação e Resfriamento",
        items: [
          "Óleo lubrificante adequado e diluído conforme necessidade.",
          "Verificar se a máquina está abastecida com óleo lubrificante durante todo o processo de fabricação.",
          "Ao aparecer a mensagem de óleo hidráulico, a máquina deve ser desligada imediatamente e aguardar o resfriamento.",
        ],
      },
    ],
  },
  {
    title: "Parte 7 — Liberação da Ordem de Produção (OP)",
    subsections: [
      {
        heading: "Disponibilidade de materiais",
        items: [
          "O PCP deve conferir na planilha de estoque se todo o material necessário está disponível para o lote de produção.",
          "Caso haja faltas, registrar necessidade de compra antes da liberação do pedido.",
          "O PCP deve informar o time comercial sobre estoque e prazo de produção antes de receber o pedido oficial.",
        ],
      },
      {
        heading: "Confirmação de pagamento / condições comerciais",
        items: [
          "O time comercial deve verificar se o pagamento foi concluído ou se as condições comerciais estão atendidas (prazo, entrada ou crédito liberado).",
          "Liberação condicionada ao status de \"Pagamento Realizado\".",
          "Comprovante de pagamento ou VEF devem ser anexados ao chamado.",
        ],
      },
      {
        heading: "Capacidade produtiva e agenda disponível",
        items: [
          "Verificar capacidade da linha, máquinas e mão de obra para atender o prazo.",
          "A OP só é liberada se houver janela produtiva no PCP, respeitando o prazo e a fila de produção estipulados.",
          "Passar um projeto na frente de outro na fila exige autorização do diretor da fábrica, com registro do motivo.",
          "A modificação estratégica precisa atender: impacto financeiro, prazos contratuais, risco do negócio, alinhamento estratégico, travamentos e disponibilidade de recursos.",
        ],
      },
      {
        heading: "Documentação completa e validada",
        items: [
          "Pedido de Venda aprovado.",
          "OP acompanhada de todos os documentos obrigatórios: Mapa de Montagem, Romaneio de produção, RFY (em caso de projeto).",
          "Lista de Materiais atualizada.",
          "Especificações do cliente (quando aplicável).",
          "Qualquer divergência deve ser tratada antes da liberação.",
        ],
      },
      {
        heading: "Revisão e aprovação do PCP",
        paragraphs: ["A Ordem de Produção deve estar revisada quanto a prazos, quantidades e datas de entrega. O PCP deve validar o sequenciamento e dar OK no chamado. Status final: \"Ordem de Produção Liberada\". A ordem só é liberada para o chão de fábrica após atender todos os requisitos, sendo a liberação registrada no sistema e comunicada ao Supervisor de Produção."],
      },
    ],
  },
  {
    title: "Parte 8 — Início, Ajustes e Treinamento de Produção",
    subsections: [
      {
        heading: "Critérios de início de produção",
        items: [
          "Ordem de Produção interna liberada pelo PCP previamente definida.",
          "Matéria-prima conferida e aprovada no recebimento pela qualidade.",
          "Máquina calibrada e liberada pela Manutenção (quando necessário).",
          "Em caso de projeto, programação e sequência na máquina (RFY em pen drive) confirmadas pelo operador responsável.",
          "Romaneio de produção impresso junto com mapa de montagem e etiquetas, entregue ao Operador antes do início.",
          "Todos os colaboradores devem estar usando os EPIs corretamente.",
        ],
      },
      {
        heading: "Limites de ajuste",
        items: [
          "Pequenos ajustes operacionais podem ser feitos pelo operador responsável, desde que sem impacto na estrutura produzida.",
          "Ajustes maiores exigem autorização da liderança, após aprovação do setor técnico.",
          "Nenhum ajuste é permitido sem registro.",
        ],
      },
      {
        heading: "Treinamento obrigatório aos operadores",
        items: [
          "Qualquer parâmetro novo ou alteração na forma de fabricação exige treinamento aos operadores e ajudantes, registrado como treinamento.",
          "A operação só pode ser executada por profissionais habilitados e autorizados pelo encarregado de produção.",
        ],
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
    title: "Parte 9 — Qualidade, Continuidade e Encerramento da Produção",
    subsections: [
      {
        heading: "Critérios de qualidade antes e durante o processo",
        items: [
          "Inspeção inicial de primeira peça.",
          "Notificar imediatamente o Encarregado de Produção em caso de desvio, com ação imediata e comunicação à qualidade.",
          "Fazer teste de qualidade no recebimento do material (aço) e durante a produção.",
          "Aferir 1 a cada 50 peças produzidas e formalizar resultados na planilha de qualidade, mantendo rastreabilidade e confiabilidade.",
        ],
      },
      {
        heading: "Critérios para continuidade da produção",
        items: [
          "Ausência de falhas visuais (trincas, empeno, rebarba e outros).",
          "Dimensão dentro das tolerâncias da norma.",
          "Lubrificação adequada.",
          "Ausência de paradas não programadas.",
        ],
      },
      {
        heading: "Critérios de não conformidade",
        paragraphs: ["O processo deve ser interrompido quando houver:"],
        items: [
          "Medidas fora da tolerância.",
          "Falhas mecânicas.",
          "Temperatura ou pressão fora dos limites.",
          "Registro de desvio recorrente.",
          "Falta de lubrificação.",
          "Risco de segurança.",
        ],
      },
      {
        heading: "Critérios de encerramento da produção",
        items: [
          "Checagem final do lote — quantidade de varas ou peças de projeto (romaneio de produção).",
          "Identificação e etiquetagem completa.",
          "Registro na ficha de produção completamente preenchida.",
          "Limpeza e organização do setor.",
          "Anexar ficha de produção no quadro de gestão à vista.",
        ],
      },
    ],
  },
  {
    title: "Parte 10 — Pós-Produção e Revisão",
    subsections: [
      {
        heading: "Pós Produção",
        paragraphs: ["Após a produção, deve-se aguardar os trâmites administrativos até a expedição liberar o material:"],
        items: [
          "O administrativo lança a ficha de produção no sistema SAP e transforma a fita de aço em varas.",
          "Após o lançamento, abre-se o pedido de venda para gerar a nota fiscal.",
          "Abrir chamado e anexar o PDF do pedido de venda para o faturamento.",
          "Aguardar o faturamento CSC emitir a nota e anexar ao chamado.",
          "O administrativo imprime a nota e entrega ao responsável da expedição.",
        ],
      },
      {
        heading: "Revisão",
        paragraphs: ["Este documento deve ser revisado anualmente ou em caso de alteração de processo."],
      },
    ],
  },
]
