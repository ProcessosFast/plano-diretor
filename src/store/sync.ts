import { shareStore, startSharedSync } from "@/lib/sharedState"
import { useAlcadasStore } from "./useAlcadasStore"
import { useApprovalHistoryStore } from "./useApprovalHistoryStore"
import { useKpiStore } from "./useKpiStore"
import { useMeetingsStore } from "./useMeetingsStore"
import { useOrgStore } from "./useOrgStore"
import { useReceitasStore } from "./useReceitasStore"
import { useSlaStore } from "./useSlaStore"

// Todos os stores registrados juntos, antes da primeira leitura do banco —
// senão um store carregado depois ficaria de fora da carga inicial.
// Os nomes precisam bater com COLLECTIONS em api/state.js.
shareStore("alcadas", useAlcadasStore, { rows: "value" })
shareStore("aprovacoes", useApprovalHistoryStore, { events: { kind: "list" } })
shareStore("kpi", useKpiStore, { overrides: "map", customItems: "map" })
shareStore("meetings", useMeetingsStore, {
  meetings: {
    kind: "list",
    children: {
      actionItems: { kind: "list" },
      atas: { kind: "list" },
      signatures: { kind: "list" },
    },
  },
})
shareStore("org", useOrgStore, { companies: { kind: "list" } })
shareStore("receitas", useReceitasStore, { pending: "map", rateio: "map" })
shareStore("sla", useSlaStore, { overrides: "map" })

startSharedSync()
