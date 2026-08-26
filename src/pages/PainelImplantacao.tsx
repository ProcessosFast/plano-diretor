import { FastLogo } from "@/components/shared/FastLogo"
import { ProgressMeter } from "@/components/receitas/ProgressMeter"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { POLICY_STATUS, POLICY_STATUS_CATEGORIES } from "@/pages/PoliticasInternas"
import { PENDING_ROWS, RATEIO_GAP_ROWS } from "@/data/receitasContent"
import { ALCADAS_ROWS } from "@/data/alcadasContent"
import { RISKS } from "@/data/matrizRiscosContent"
import { SOCIETARIO_CATEGORIES } from "@/data/contratosSocietariosContent"
import { SLA_ROWS } from "@/data/slaContent"
import { KPI_AREAS } from "@/data/kpiContent"
import { COMPANIES } from "@/data/orgdata"

interface Front {
  label: string
  referencia: string
  solicitado: number
  realizado: number
  note: string
}

/** Base = estrutura (loja, filial, departamento, célula), não headcount — uma "loja da Denise" sem
 *  ninguém alocado ainda conta como estrutura pendente, não desaparece do total só por estar vazia. */
function computeOrgStructureStats() {
  let estruturas = 0
  let comEquipe = 0
  for (const c of COMPANIES) {
    for (const sec of c.sections || []) {
      for (const col of sec.cols || []) {
        estruturas++
        const temEquipe = (col.people || []).some(
          (p) => p.name && !p.ref && !p.vago && !/contratar/i.test(p.name)
        )
        if (temEquipe) comEquipe++
      }
    }
  }
  return { estruturas, comEquipe }
}

function buildFronts(): Front[] {
  const policiesSolicitado = POLICY_STATUS_CATEGORIES.reduce((s, c) => s + c.tabs.length, 0)
  const policiesRealizado = POLICY_STATUS_CATEGORIES.reduce(
    (s, c) => s + c.tabs.filter((t) => POLICY_STATUS[t.id]).length,
    0
  )
  const org = computeOrgStructureStats()

  return [
    {
      label: "Políticas Internas por empresa",
      referencia: "Plano Diretor · Itens 4, 5, 8 e 9",
      solicitado: policiesSolicitado,
      realizado: policiesRealizado,
      note: "Holdings, Operacionais, Front Office, Back Office e temáticas transversais — ver aba Políticas Internas.",
    },
    {
      label: "Matriz de Alçadas",
      referencia: "Plano Diretor · Item 3.5",
      solicitado: ALCADAS_ROWS.length,
      realizado: ALCADAS_ROWS.length,
      note: "Todos os tipos de decisão já têm alçada por cargo preenchida e aprovada.",
    },
    {
      label: "Mapa de Receitas — comissões/royalties por unidade",
      referencia: "Plano Diretor · Item 11",
      solicitado: PENDING_ROWS.length,
      realizado: PENDING_ROWS.filter((r) => r.percentual !== "A definir").length,
      note: "Percentuais reais de comissão, royalty e rateio por unidade ainda dependem de decisão da Diretoria/Holding.",
    },
    {
      label: "Mapa de Receitas — regras de rateio (metodologia)",
      referencia: "Plano Diretor · Itens 9.4, 11.7–11.10, 12.12",
      solicitado: RATEIO_GAP_ROWS.length,
      realizado: 0,
      note: "O princípio do rateio existe no Plano Diretor, mas nenhuma fórmula ou matriz por empresa foi aprovada.",
    },
    {
      label: "Contratos Internos",
      referencia: "Plano Diretor · Item 12",
      solicitado: 8,
      realizado: 0,
      note: "Prestação de serviços (CSC, Unity, Engenharia, Log Express), fornecimento, compartilhamento de ativos, licenciamento e franquia — nenhum contrato anexado ainda.",
    },
    {
      label: "Contratos Societários",
      referencia: "Plano Diretor · Item 4",
      solicitado: SOCIETARIO_CATEGORIES.reduce((s, c) => s + c.docs.length, 0),
      realizado: SOCIETARIO_CATEGORIES.reduce((s, c) => s + c.docs.filter((d) => d.status === "completo").length, 0),
      note: "MaxSteel, DCS-CM (Casa do Montador), SUPPLY-LMS (Supply Chain Serviços + LMS Distribuidora), Engenharia (Ruche Design), CSC (CSC Serviços Empresariais), FAST Franchising (Fast Drywall Franchising), Log Express e FAST Atacado (Televendas Fast Materiais) já têm contrato social anexado; FAST Importação e as demais empresas comerciais seguem pendentes.",
    },
    {
      label: "Matriz de Riscos",
      referencia: "Plano Diretor · Item 15.2 (categorias de risco)",
      solicitado: 6,
      realizado: 6,
      note: `Matriz elaborada com ${RISKS.length} riscos concretos nas 6 categorias do Plano Diretor; falta apenas ratificação formal pela Gerência/Auditoria e aprovação do Conselho Consultivo.`,
    },
    {
      label: "SLAs entre empresas (Back Office)",
      referencia: "Plano Diretor · Item 9.8 (Contratos internos e SLAs)",
      solicitado: SLA_ROWS.length * 2,
      realizado: SLA_ROWS.reduce((s, r) => s + (r.prazoDefinido ? 1 : 0) + (r.indicadoresDefinido ? 1 : 0), 0),
      note: "Prazo e indicadores já definidos para Unity Company e parcialmente para Log Express, com base nas políticas internas publicadas; CSC e Engenharia ainda sem prazo/indicador formal — editável na Matriz de SLAs.",
    },
    {
      label: "KPIs extraídos do Plano Diretor e das políticas",
      referencia: "Plano Diretor 7.9, 8.13, 9.9, 10.14, 11.14",
      solicitado: KPI_AREAS.reduce((s, a) => s + a.items.length, 0),
      realizado: 0,
      note: "Indicadores já nomeados e organizados por área (Comercial, Operacional, Financeiro, Back Office, Marketing); meta, frequência e responsável ainda dependem de aprovação em reunião — editável na Matriz de KPIs.",
    },
    {
      label: "Organograma — estruturas com equipe",
      referencia: "Plano Diretor · Itens 5, 6 e 7 (estrutura organizacional)",
      solicitado: org.estruturas,
      realizado: org.comEquipe,
      note: "Base = número de estruturas mapeadas (loja, filial, departamento, célula comercial), não headcount. Ex.: FAST Varejo tem 16 lojas mapeadas e só 4 com equipe alocada — as outras 12 contam como estrutura pendente, não desaparecem do total.",
    },
  ]
}

export function PainelImplantacao() {
  const fronts = buildFronts()
  const withPct = fronts.map((f) => ({ ...f, pct: f.solicitado > 0 ? Math.round((f.realizado / f.solicitado) * 100) : 0 }))
  const mediaFrentes = Math.round(withPct.reduce((s, f) => s + f.pct, 0) / withPct.length)

  const totalSolicitado = fronts.reduce((s, f) => s + f.solicitado, 0)
  const totalRealizado = fronts.reduce((s, f) => s + f.realizado, 0)

  return (
    <div className="max-w-5xl mx-auto my-8 px-4 pb-14">
      <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden mb-6">
        <div className="h-1.5 bg-gradient-to-r from-brand-red via-front to-oper" />
        <div className="p-6">
          <div className="flex items-center gap-3.5 mb-2">
            <FastLogo height={28} />
            <div className="border-l border-line pl-3.5">
              <div className="text-lg font-extrabold text-ink">Painel de Implantação do Plano Diretor</div>
              <div className="text-xs text-muted">% de conclusão por frente exigida pelo Plano Diretor 2026–2030</div>
            </div>
          </div>
          <p className="text-sm text-ink-2 max-w-[72ch]">
            Compara, frente a frente, o que o Plano Diretor pede (Solicitado) com o que já está de fato preenchido
            e publicado neste portal (Realizado), calculando a % de conclusão de cada uma.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-white shadow-card p-6 mb-6">
        <div className="flex items-center gap-6 flex-wrap">
          <ProgressMeter before={0} now={mediaFrentes} label="Conclusão geral (média das frentes)" />
          <div className="flex gap-6 text-xs">
            <div>
              <div className="text-[9.5px] font-extrabold uppercase tracking-wide text-muted">Frentes</div>
              <div className="text-xl font-extrabold text-ink">{fronts.length}</div>
            </div>
            <div>
              <div className="text-[9.5px] font-extrabold uppercase tracking-wide text-muted">Itens solicitados</div>
              <div className="text-xl font-extrabold text-ink">{totalSolicitado}</div>
            </div>
            <div>
              <div className="text-[9.5px] font-extrabold uppercase tracking-wide text-muted">Itens realizados</div>
              <div className="text-xl font-extrabold text-oper">{totalRealizado}</div>
            </div>
            <div>
              <div className="text-[9.5px] font-extrabold uppercase tracking-wide text-muted">Frentes 100%</div>
              <div className="text-xl font-extrabold text-oper">{withPct.filter((f) => f.pct === 100).length}</div>
            </div>
            <div>
              <div className="text-[9.5px] font-extrabold uppercase tracking-wide text-muted">Frentes 0%</div>
              <div className="text-xl font-extrabold text-warn">{withPct.filter((f) => f.pct === 0).length}</div>
            </div>
          </div>
        </div>
        <p className="text-[11px] text-muted mt-4 pt-3 border-t border-dashed border-line">
          A conclusão geral é a média simples da % de cada frente — não a soma bruta dos itens — para que uma
          frente com muitos itens (ex.: organograma) não mascare frentes pequenas ainda zeradas (ex.: contratos).
        </p>
      </div>

      <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden">
        <div className="p-6 pb-2">
          <h2 className="text-base font-extrabold text-ink">Frentes do Plano Diretor</h2>
        </div>
        <div className="px-6 pb-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[220px]">Frente</TableHead>
                <TableHead>Referência</TableHead>
                <TableHead>Solicitado</TableHead>
                <TableHead>Realizado</TableHead>
                <TableHead className="min-w-[160px]">% Conclusão</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {withPct.map((f) => (
                <TableRow key={f.label}>
                  <TableCell className="font-extrabold text-ink whitespace-normal min-w-[220px]">
                    {f.label}
                    <span className="block text-[11px] font-normal text-muted mt-0.5">{f.note}</span>
                  </TableCell>
                  <TableCell className="text-[11px] text-muted whitespace-normal min-w-[160px]">{f.referencia}</TableCell>
                  <TableCell>{f.solicitado}</TableCell>
                  <TableCell>{f.realizado}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 min-w-[140px]">
                      <div className="flex-1 h-2 rounded-full bg-soft overflow-hidden">
                        <div
                          className={cn(
                            "h-full rounded-full",
                            f.pct === 100 ? "bg-oper" : f.pct === 0 ? "bg-warn" : "bg-front"
                          )}
                          style={{ width: `${f.pct}%` }}
                        />
                      </div>
                      <span className="text-[11px] font-extrabold text-ink-2 w-9 text-right">{f.pct}%</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden mt-6">
        <div className="p-6 pb-2">
          <h2 className="text-base font-extrabold text-ink">Detalhe — Políticas Internas por categoria</h2>
          <p className="text-xs text-muted mt-0.5">
            Abertura da frente "Políticas Internas por empresa", conforme a estrutura societária/operacional do
            Plano Diretor (Itens 4 e 5).
          </p>
        </div>
        <div className="px-6 pb-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Categoria</TableHead>
                <TableHead>Solicitado</TableHead>
                <TableHead>Realizado</TableHead>
                <TableHead className="min-w-[160px]">% Conclusão</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {POLICY_STATUS_CATEGORIES.map((cat) => {
                const solicitado = cat.tabs.length
                const realizado = cat.tabs.filter((t) => POLICY_STATUS[t.id]).length
                const pct = solicitado > 0 ? Math.round((realizado / solicitado) * 100) : 0
                return (
                  <TableRow key={cat.label}>
                    <TableCell className="font-extrabold text-ink">{cat.label}</TableCell>
                    <TableCell>{solicitado}</TableCell>
                    <TableCell>{realizado}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 min-w-[140px]">
                        <div className="flex-1 h-2 rounded-full bg-soft overflow-hidden">
                          <div
                            className={cn(
                              "h-full rounded-full",
                              pct === 100 ? "bg-oper" : pct === 0 ? "bg-warn" : "bg-front"
                            )}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-[11px] font-extrabold text-ink-2 w-9 text-right">{pct}%</span>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </div>

      <footer className="text-center text-[11px] text-muted mt-6">
        Grupo FAST · Painel de Implantação do Plano Diretor · Documento interno e confidencial
      </footer>
    </div>
  )
}
