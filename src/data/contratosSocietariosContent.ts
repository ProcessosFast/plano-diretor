export interface Socio {
  nome: string
  participacao: string
  cpf?: string
}

export interface SocietarioDoc {
  empresa: string
  status: "completo" | "pendente"
  razaoSocial?: string
  nire?: string
  cnpj?: string
  sede?: string
  socios?: Socio[]
  capitalSocial?: string
  objetoSocial?: string
  administracao?: string
  enquadramento?: string
  filiais?: string[]
  ultimoAto?: string
  observacoes?: string
}

export interface SocietarioCategory {
  label: string
  docs: SocietarioDoc[]
}

export const SOCIETARIO_CATEGORIES: SocietarioCategory[] = [
  {
    label: "Empresas Operacionais",
    docs: [
      {
        empresa: "MaxSteel",
        status: "completo",
        razaoSocial: "MaxSteel Industria Ltda",
        nire: "332.1193021-8 (JUCERJA)",
        cnpj: "45.989.824/0001-74",
        sede: "Rua Engenheiro Waterley, nº 0, Lote 12, Quadra 16, Bairro Cidade Jardim Marajoara, Japeri/RJ, CEP 26.413-040",
        socios: [{ nome: "Smart Steel Company LLC (EUA — Aventura/FL, CNPJ 48.107.991/0001-32)", participacao: "100% (800.000 quotas)" }],
        capitalSocial: "R$ 800.000,00, dividido em 800.000 quotas de R$ 1,00 cada (aumentado nesta alteração com a integralização de mais 700.000 quotas)",
        objetoSocial: "Fabricação de estruturas metálicas; casas de madeira pré-fabricadas; artefatos de madeira; artefatos de concreto, cimento, fibrocimento e gesso; trabalhos em mármore e granito; artefatos estampados de metal; armações metálicas para construção; corte e dobra de metais; móveis de madeira; serviços especializados para construção.",
        administracao: "Marcelo Ribeiro Lobo, administrador não sócio, isoladamente; a sociedade deve constituir 1 Procurador Independente para os atos de gestão extraordinária (abertura/movimentação de contas bancárias, alienação/oneração de ativos).",
        ultimoAto: "2ª Alteração e Consolidação Contratual — aumento do capital social para R$ 800.000,00. Assinada em Japeri/RJ, 14/08/2025.",
        observacoes: "A sócia única, Smart Steel Company LLC, está sediada no mesmo endereço em Aventura/FL (2980 NE 207th Street, Suite 319) que a Fast Steel Construction LLC (sócia da FAST Franchising) e é representada pelo mesmo Marcelo Ribeiro Lobo — mesmo padrão de holding americana com CNPJ brasileiro citado como pendente de validação no Plano Diretor (R1.9). Esta pessoa jurídica provavelmente corresponde à \"Holding Indústria\" que controla a MaxSteel (R1.1), ainda listada como pendente na categoria Holdings deste portal — vale confirmar com o Jurídico se são a mesma entidade.",
      },
      {
        empresa: "SUPPLY-LM · Supply Chain Serviços",
        status: "completo",
        razaoSocial: "Supply Chain Serviços Ltda",
        nire: "32203252698 (JUCEES/ES)",
        cnpj: "49.737.832/0001-84",
        sede: "Rua Vitória, s/n, sala 01, quadra 12, lote 16, Alterosas, Serra/ES, CEP 29.167-027",
        socios: [{ nome: "Marcio Pires Machado", participacao: "100% (100.000 quotas)", cpf: "024.743.637-26" }],
        capitalSocial: "R$ 100.000,00, dividido em 100.000 quotas de R$ 1,00 cada",
        objetoSocial: "Comércio atacadista e varejista de materiais de construção em geral, material elétrico, madeira, ferragens, ferramentas, cimento, tintas, iluminação, artigos hidráulicos; locação de mão de obra temporária.",
        administracao: "Marcio Pires Machado, isoladamente.",
        filiais: [
          "Filial 01 — Penha, Rio de Janeiro/RJ (CNPJ 49.737.832/0002-65)",
          "Filial 02 — Balneário Camboriú/SC (CNPJ 49.737.832/0003-46)",
        ],
        ultimoAto: "3ª Alteração Contratual — alteração do objeto social da Filial 01 e consolidação do contrato social. Assinada em 14/04/2026, registrada na JUCEES em 15/05/2026, protocolo 260325872.",
        observacoes: "A Filial 02 (Rua 3250, nº 474, Centro, Balneário Camboriú/SC) está no mesmo endereço já registrado como filial da Casa do Montador (DCS-CM) na Alteração Contratual nº 03 — mesmo endereço físico compartilhado entre atacado (SUPPLY) e varejo (DCS), o que é coerente com o modelo do Plano Diretor de estrutura logística compartilhada entre canais.",
      },
      {
        empresa: "SUPPLY-LM · LMS Distribuidora",
        status: "completo",
        razaoSocial: "LMS Distribuidora Ltda (antiga LMS Distribuição de Produtos para Farmácia Ltda)",
        nire: "32203416071 (JUCEES/ES)",
        cnpj: "57.557.525/0001-40",
        sede: "Rua Vitória, S/N, Quadra 12, Lote 16, Sala 01, Alterosas, Serra/ES, CEP 29.167-027",
        socios: [{ nome: "Priscilla Costa Mendes de Medeiros", participacao: "100% (100.000 quotas)", cpf: "051.593.896-36" }],
        capitalSocial: "R$ 100.000,00, dividido em 100.000 quotas de R$ 1,00 cada",
        objetoSocial: "Originalmente distribuição de produtos para farmácia; ampliado nesta alteração para incluir comércio atacadista de materiais de construção em geral (CNAE 4679-6/99), além de instrumentos médico-hospitalares, produtos alimentícios, vestuário, cosméticos e produtos de higiene.",
        administracao: "Priscilla Costa Mendes de Medeiros, isoladamente.",
        filiais: ["Rodovia ES-010, 3109, Chácara Parreiral, Serra/ES (CNPJ 57.557.525/0002-20)"],
        ultimoAto: "2ª Alteração e Consolidação Contratual — admissão de Priscilla Costa Mendes de Medeiros, retirada do sócio Thiago Szuster (venda de 100% das quotas por R$ 100.000,00), mudança de sede, inclusão do CNAE de materiais de construção e alteração da razão social para LMS Distribuidora Ltda. Assinada em 26/06/2026, registrada na JUCEES em 08/07/2026, protocolo 261368184.",
        observacoes: "Priscilla Costa Mendes de Medeiros é a mesma administradora da FAST Franchising (Fast Drywall Franchising Ltda) — a mesma pessoa administra a franquia e agora também o \"LM\" da dupla SUPPLY-LM do atacado. A sede é idêntica à da Supply Chain Serviços (mesmo endereço em Serra/ES), confirmando que as duas empresas operam do mesmo escritório — coerente com o \"LM e SUPPLY\" descrito como as duas empresas de atacado no Plano Diretor (R1.1).",
      },
      {
        empresa: "DCS-CM · Varejo",
        status: "completo",
        razaoSocial: "Casa do Montador Ltda",
        nire: "33.2.1487089-5",
        cnpj: "67.039.110/0001-38",
        sede: "Rua Operário Fortes, nº 126, Ramos, Rio de Janeiro/RJ, CEP 21.031-100",
        socios: [{ nome: "Denise Regina da Silva Moura", participacao: "100% (1.000 quotas)", cpf: "021.526.917-92" }],
        capitalSocial: "R$ 1.000,00, dividido em 1.000 quotas de R$ 1,00 cada",
        objetoSocial: "Holdings de instituições não financeiras; comércio varejista de materiais de construção em geral.",
        administracao: "Denise Regina da Silva Moura, isoladamente.",
        filiais: [
          "Balneário Camboriú/SC",
          "Feira de Santana/BA",
          "Camaçari/BA",
          "Campo Grande/MS",
          "Curitiba/PR",
          "Mogi das Cruzes/SP",
          "Tijucas/SC",
        ],
        ultimoAto: "Alteração Contratual nº 03 — abertura de 6 novas filiais (BA×2, MS, PR, SP, SC), arquivada na JUCERJA em 20/08/2026, protocolo 2026/00918579-5.",
        observacoes: "Procuração outorgada a Leandro Bazyli Holak (advogado, OAB/RJ 154366) para atos de constituição/alteração perante a JUCERJA. As filiais de Curitiba e Tijucas coincidem com as unidades já mapeadas no Organograma (DCS Curitiba e DCS Tijucas).",
      },
      {
        empresa: "FAST Franchising",
        status: "completo",
        razaoSocial: "Fast Drywall Franchising Ltda",
        nire: "33.2.1232512-1",
        cnpj: "40.436.034/0001-48",
        sede: "Rua Equador, nº 43, Bloco 003, Sala 720, Santo Cristo, Rio de Janeiro/RJ, CEP 20.220-410",
        socios: [
          { nome: "Fast Steel Construction LLC (EUA — Aventura/FL, CNPJ 48.107.990/0001-98)", participacao: "100% (110.000 quotas)" },
        ],
        capitalSocial: "R$ 110.000,00, dividido em 110.000 quotas de R$ 1,00 cada, totalmente integralizado",
        objetoSocial: "Agenciamento, corretagem e intermediação de contratos de franquia.",
        administracao: "Priscilla Costa Mendes de Medeiros (administradora), com atos de gestão extraordinária exigindo assinatura conjunta de 2 Procuradores Independentes.",
        enquadramento: "Desenquadrada de Microempresa em 06/06/2023 por exceder o limite de receita bruta da Lei Complementar 123/2006 — hoje sociedade de porte normal.",
        ultimoAto: "4ª Alteração Contratual — mudança de sede para a Rua Equador (Santo Cristo) e desenquadramento de ME, com consolidação do contrato social. Arquivada na JUCERJA em 23/06/2023, protocolo 00-2023/445745-7.",
        observacoes: "A sócia única é a Fast Steel Construction LLC, holding estrangeira sediada em Aventura/FL (EUA) — é a primeira confirmação documental, entre os contratos já recebidos, do modelo de \"holding norte-americana com CNPJ brasileiro\" citado como ponto ainda em validação no Plano Diretor (R1.9). Além disso, a sede coincide com o mesmo endereço do CSC (Rua Equador, 43, Santo Cristo) — provável escritório administrativo compartilhado, vale confirmar com o Jurídico.",
      },
    ],
  },
  {
    label: "Empresas Comerciais · Front Office",
    docs: [
      {
        empresa: "FAST Atacado",
        status: "completo",
        razaoSocial: "Televendas Fast Materiais Ltda",
        nire: "33.2.1303198-9 (JUCERJA)",
        cnpj: "53.460.398/0001-05",
        sede: "Avenida Adalgisa Colombo (Miss Brasil), nº 135, Loja 2067, Jacarepaguá, Rio de Janeiro/RJ, CEP 22.775-026",
        socios: [{ nome: "Poliana Alves dos Santos", participacao: "100% (10.000 quotas)", cpf: "963.326.972-53" }],
        capitalSocial: "R$ 10.000,00, dividido em 10.000 quotas de R$ 1,00 cada",
        objetoSocial: "Comércio varejista de materiais de construção em geral; atividades de intermediação e agenciamento de serviços e negócios em geral, exceto imobiliários; promoção de vendas (CNAE 7319-0/02, incluído nesta alteração).",
        administracao: "Poliana Alves dos Santos, isoladamente.",
        enquadramento: "Microempresa (ME).",
        ultimoAto: "1ª Alteração de Contrato Social — inclusão do CNAE de Promoção de Vendas e consolidação do contrato social. Assinada em 30/12/2025, arquivada na JUCERJA em 02/01/2026, protocolo 2025/01236499-7.",
        observacoes: "Poliana Alves dos Santos é a mesma pessoa listada no Mapa de Receitas e no Organograma como Diretora Nacional de Atacado — confirma que \"Televendas Fast Materiais Ltda\" é a razão social por trás da FAST Atacado. Esta mesma razão social (\"Televendas Fast Materiais LTDA ME\") já constava na Política Interna do Comercial Atacado como titular da conta bancária usada para recebimento de cupons fiscais (Banco Santander) — confirmação cruzada entre os dois documentos.",
      },
      { empresa: "FAST Varejo", status: "pendente" },
      { empresa: "FAST Obras & FAST Homes", status: "pendente" },
      { empresa: "Atacado para Franqueados", status: "pendente" },
      { empresa: "Comércio Digital", status: "pendente" },
      { empresa: "FAST Importação", status: "pendente", observacoes: "Modelo Embrionário, aguardando consolidação." },
    ],
  },
  {
    label: "Empresas Especializadas · Back Office",
    docs: [
      {
        empresa: "CSC",
        status: "completo",
        razaoSocial: "CSC Serviços Empresariais Ltda",
        nire: "33.2.1144131-4",
        cnpj: "42.643.603/0001-51",
        sede: "Rua Equador, nº 43, bloco 3, sala 1103, Santo Cristo, Rio de Janeiro/RJ, CEP 20.220-410",
        socios: [
          { nome: "Arícia dos Santos Gomes", participacao: "50% (1.250.000 quotas)", cpf: "132.843.667-50" },
          { nome: "Gilberto Fagner de Souza", participacao: "12,5% (312.500 quotas)", cpf: "121.831.537-76" },
          { nome: "Diego Rodrigo Laranjeira dos Santos", participacao: "12,5% (312.500 quotas)", cpf: "104.509.277-09" },
          { nome: "Ariene Barbosa dos Santos", participacao: "12,5% (312.500 quotas)", cpf: "126.481.177-25" },
          { nome: "Marcelo Lourenço Lopes", participacao: "12,5% (312.500 quotas)", cpf: "103.867.557-01" },
        ],
        capitalSocial: "R$ 25.000,00, dividido em 2.500.000 quotas de R$ 0,01 cada",
        objetoSocial: "Assessoria a empresas; assessoria de planejamento; assessoria administrativa; assessoria técnica; atividades de consultoria em gestão empresarial (exceto consultoria técnica específica); consultoria em tecnologia da informação; serviços combinados de escritório e apoio administrativo.",
        administracao: "Arícia dos Santos Gomes, isoladamente, dispensada de prestação de caução.",
        ultimoAto: "7ª Alteração Contratual — retirada do sócio Henrique de Souza Antunes, que cede suas quotas aos demais sócios (exceto Arícia); consolidação do contrato social. Arquivada na JUCERJA em 02/09/2025, protocolo 2025/00742815-0.",
        observacoes: "A razão social registrada é \"CSC Serviços Empresariais Ltda\" — vale alinhar com o Jurídico se este é o único CNPJ usado para o Centro de Serviços Compartilhados descrito no Plano Diretor, já que a Arícia dos Santos Gomes concentra 50% das quotas e a administração isolada.",
      },
      {
        empresa: "Unity Company",
        status: "completo",
        razaoSocial: "Unity Company Publicidade Ltda",
        nire: "33.2.1306634-1",
        cnpj: "53.722.313/0001-10",
        sede: "Rua Aurea Pinheiro, nº 333, Sala 105, Centro, Miguel Pereira/RJ, CEP: 26.900-000",
        socios: [{ nome: "Almir Ramos Carneiro Neto", participacao: "100% (10.000 quotas)", cpf: "142.108.657-37" }],
        capitalSocial: "R$ 10.000,00, dividido em 10.000 quotas de R$ 1,00 cada, integralizado em dinheiro",
        objetoSocial: "Publicidade; 7319-0/04 — Consultoria em Publicidade.",
        administracao: "Almir Ramos Carneiro Neto, isoladamente; não constituindo o objeto social, a alienação ou oneração de bens imóveis depende de autorização da maioria.",
        enquadramento: "Microempresa (ME), conforme art. 3º, I da Lei Complementar nº 123/2006.",
        ultimoAto: "1ª Alteração de Contrato Social — mudança de sede para Rua Aurea Pinheiro, nº 333, Sala 105, Miguel Pereira/RJ, com consolidação do contrato social. Assinada em Miguel Pereira/RJ, 16/04/2024, arquivada na JUCERJA em 30/04/2024, protocolo 2024/00359641-2.",
        observacoes: "Foro eleito: Miguel Pereira/RJ — mesma cidade da sede da Ruche Design Ltda (Engenharia, Avenida Roberto Silveira, 251, Centro, Miguel Pereira/RJ), o que sugere concentração de mais de uma empresa do grupo nesse município; vale confirmar com o Jurídico se há vínculo operacional entre Unity Company e a frente de Engenharia.",
      },
      {
        empresa: "Engenharia",
        status: "completo",
        razaoSocial: "Ruche Design Ltda ME",
        nire: "33.2.1421969-8",
        cnpj: "62.430.439/0001-01",
        sede: "Avenida Roberto Silveira, 251, Sala 301, Centro, Miguel Pereira/RJ, CEP 26.900-000",
        socios: [{ nome: "Fabio de Barros Franco e Souza Mello", participacao: "100% (1.000 quotas)", cpf: "028.112.327-61" }],
        capitalSocial: "R$ 1.000,00, dividido em 1.000 quotas de R$ 1,00 cada",
        objetoSocial: "Promoção de vendas; design de produto; serviços de cartografia, topografia e geodésia; atividades técnicas relacionadas à engenharia e arquitetura não especificadas; obras de acabamento em gesso e estuque, revestimentos e resinas, alvenaria; outras atividades de serviços prestados a empresas (CNAEs 7319-0/02, 4330-4/03, 4330-4/05, 4330-4/99, 4399-1/03, 7119-7/01, 7119-7/99, 7410-2/03, 7410-2/99, 8299-7/99).",
        administracao: "Fabio de Barros Franco e Souza Mello, isoladamente.",
        enquadramento: "Microempresa (ME), Simples Nacional.",
        ultimoAto: "Contrato social constitutivo, arquivado na JUCERJA em 27/08/2025, protocolo 2025/00844493-0.",
        observacoes: "Atenção: esta mesma razão social (Ruche Design Ltda) já é usada no Organograma como contratante da equipe comercial de FAST Obras & Homes (Erly Junior, Fabrício, Wanderson, Barreto, Mirian, Thayná, Wallace, Maria Izabel). O objeto social é amplo o bastante para cobrir ambas as frentes, mas vale confirmar com o Jurídico se é intencional usar o mesmo CNPJ para a Engenharia e para a equipe comercial de Obras/Homes, ou se são pessoas jurídicas que deveriam ser distintas.",
      },
      {
        empresa: "Log Express",
        status: "completo",
        razaoSocial: "Logexpress Serviços de Transporte e Logistica Ltda",
        nire: "33.2.1157513-2 (JUCERJA, origem) / 32203243061 (JUCEES, após transferência de sede)",
        cnpj: "43.763.062/0001-68",
        sede: "Rua Vitória, S/N, Quadra 12, Lote 16, Alterosas, Serra/ES, CEP 29.167-027",
        socios: [{ nome: "Marcio Pires Machado", participacao: "100% (8.000 quotas)", cpf: "024.743.637-26" }],
        capitalSocial: "R$ 8.000,00, dividido em 8.000 quotas de R$ 1,00 cada",
        objetoSocial: "Organização logística do transporte de carga; transporte rodoviário de carga municipal, intermunicipal, interestadual e internacional (exceto produtos perigosos e mudanças); depósitos de mercadorias para terceiros, exceto armazéns gerais e guarda-móveis.",
        administracao: "Marcio Pires Machado, isoladamente.",
        enquadramento: "Microempresa (ME), Simples Nacional.",
        ultimoAto: "5ª Alteração do Contrato Social — transferência de sede do Rio de Janeiro (Maré) para Serra/ES e alteração do objeto social, com consolidação contratual. Assinada em 18/12/2023, arquivada na JUCERJA em 19/12/2023 (protocolo 2023/01023528-2) e registrada na JUCEES em 22/12/2023.",
        observacoes: "Mesmo sócio/administrador (Marcio Pires Machado) e exatamente o mesmo endereço-sede (Rua Vitória, S/N, Quadra 12, Lote 16, Alterosas, Serra/ES) da Supply Chain Serviços Ltda (SUPPLY-LM) — as duas empresas operam do mesmo escritório e sob a mesma pessoa, o que reforça a integração operacional entre Log Express e o atacado descrita no Plano Diretor, mas também concentra em uma única pessoa a administração de duas empresas relacionadas.",
      },
    ],
  },
]
