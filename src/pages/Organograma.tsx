import { useState } from "react"
import { FastLogo } from "@/components/shared/FastLogo"
import { RadialMap } from "@/components/orgchart/RadialMap"
import { CompanyOverlay } from "@/components/orgchart/CompanyOverlay"
import { EditToolbar } from "@/components/orgchart/EditToolbar"

export function Organograma() {
  const [openCompany, setOpenCompany] = useState<string | null>(null)

  return (
    <div className="max-w-6xl mx-auto my-8 px-4 pb-14">
      <div className="flex items-center gap-4 flex-wrap justify-between mb-5">
        <div className="flex items-center gap-4">
          <FastLogo height={34} />
          <div className="border-l border-line pl-4">
            <h1 className="text-xl font-extrabold text-ink">Mapa do Ecossistema FAST</h1>
            <p className="text-xs text-muted">
              Arquitetura organizacional integrada · clique nas unidades marcadas para expandir o organograma de
              pessoas
            </p>
          </div>
        </div>
        <EditToolbar />
      </div>

      <RadialMap onOpenCompany={setOpenCompany} />
      <CompanyOverlay companyId={openCompany} onClose={() => setOpenCompany(null)} />

      <footer className="text-[10.5px] text-muted border-t border-line pt-3 mt-6 leading-relaxed">
        Fonte: <b className="text-ink-2">Plano Diretor do Ecossistema FAST</b> (Cap. 4, 5 e 6 · Rev. 2 · Jul/2026) e{" "}
        <b className="text-ink-2">Organograma Grupo Fast</b> (levantamento de pessoas).
        <br />
        Front Office conforme Cap. 5.5: seis empresas comerciais no Simples Nacional, com CNPJs distintos e
        Diretor-sócio por unidade.
        <br />
        Documento interno e confidencial · Contém dados pessoais de colaboradores — restringir circulação conforme
        orientação do RH.
      </footer>
    </div>
  )
}
