import { EmptyDocPlaceholder } from "@/components/shared/EmptyDocPlaceholder"

export function ContratosInternos() {
  return (
    <EmptyDocPlaceholder
      title="Contratos Internos"
      description="Aqui ficarão todos os contratos internos entre as empresas do Ecossistema FAST — prestação de serviços (CSC, Unity Company, Engenharia, Log Express), fornecimento entre empresas, compartilhamento de ativos e licenciamento. Envie os arquivos e eu organizo um bloco por contrato/empresa, com objeto, partes, vigência e critério de remuneração ou rateio."
      items={[
        "CSC · Prestação de Serviços",
        "Unity Company · Prestação de Serviços",
        "Engenharia · Prestação de Serviços",
        "Log Express · Prestação de Serviços",
        "Fornecimento entre Empresas",
        "Compartilhamento de Ativos",
        "Licenciamento de Marca/Sistemas",
        "Contratos de Franquia",
      ]}
    />
  )
}
