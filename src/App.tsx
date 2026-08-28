import { Routes, Route, Navigate } from "react-router-dom"
import { Sidenav } from "@/components/shared/Sidenav"
import { Organograma } from "@/pages/Organograma"
import { MapaReceitas } from "@/pages/MapaReceitas"
import { PoliticasInternas } from "@/pages/PoliticasInternas"
import { MatrizAlcadas } from "@/pages/MatrizAlcadas"
import { PlanoDiretor } from "@/pages/PlanoDiretor"
import { ReunioesComite } from "@/pages/ReunioesComite"
import { AssinarAta } from "@/pages/AssinarAta"
import { ContratosInternos } from "@/pages/ContratosInternos"
import { ContratosSocietarios } from "@/pages/ContratosSocietarios"
import { MatrizRiscos } from "@/pages/MatrizRiscos"
import { PainelImplantacao } from "@/pages/PainelImplantacao"
import { MatrizSlas } from "@/pages/MatrizSlas"
import { MatrizKpis } from "@/pages/MatrizKpis"

function App() {
  return (
    <div className="flex min-h-screen items-stretch">
      <Sidenav />
      <main className="flex-1 min-w-0">
        <Routes>
          <Route path="/" element={<Navigate to="/implantacao" replace />} />
          <Route path="/organograma" element={<Organograma />} />
          <Route path="/receitas" element={<MapaReceitas />} />
          <Route path="/politicas" element={<PoliticasInternas />} />
          <Route path="/alcadas" element={<MatrizAlcadas />} />
          <Route path="/plano-diretor" element={<PlanoDiretor />} />
          <Route path="/reunioes" element={<ReunioesComite />} />
          <Route path="/assinar/:meetingId/:token" element={<AssinarAta />} />
          <Route path="/contratos-internos" element={<ContratosInternos />} />
          <Route path="/contratos-societarios" element={<ContratosSocietarios />} />
          <Route path="/matriz-riscos" element={<MatrizRiscos />} />
          <Route path="/implantacao" element={<PainelImplantacao />} />
          <Route path="/slas" element={<MatrizSlas />} />
          <Route path="/kpis" element={<MatrizKpis />} />
          <Route path="*" element={<Navigate to="/implantacao" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
