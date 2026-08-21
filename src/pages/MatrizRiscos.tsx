import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Cell as RechartsCell,
} from "recharts"
import { FastLogo } from "@/components/shared/FastLogo"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import {
  RISKS,
  CATEGORIA_COLOR,
  CLASSE_COLOR,
  riskScore,
  riskClasse,
  type RiskClasse,
} from "@/data/matrizRiscosContent"

const CATEGORIAS = Array.from(new Set(RISKS.map((r) => r.categoria)))
const CLASSES: RiskClasse[] = ["Crítico", "Alto", "Médio", "Baixo"]

const statusBadgeClass: Record<string, string> = {
  "Não iniciado": "bg-[#FFF8E8] text-warn border-[#EFD9A6]",
  "Em andamento": "bg-[#EAF2FA] text-oper border-[#C7DEF2]",
  Mitigado: "bg-[#E9F8F3] text-back border-[#BFE9DA]",
}

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null
  const r = payload[0].payload
  return (
    <div className="bg-white border border-line rounded-lg shadow-card px-3 py-2 max-w-[260px]">
      <div className="text-[10px] font-extrabold uppercase tracking-wide text-muted">{r.categoria}</div>
      <div className="text-xs font-extrabold text-ink">{r.risco}</div>
      <div className="text-[11px] text-ink-2 mt-1">
        Probabilidade {r.probabilidade} · Impacto {r.impacto} · <b>{riskClasse(r)}</b>
      </div>
    </div>
  )
}

export function MatrizRiscos() {
  const porClasse = CLASSES.map((c) => ({ classe: c, n: RISKS.filter((r) => riskClasse(r) === c).length }))

  return (
    <div className="max-w-6xl mx-auto my-8 px-4 pb-14">
      <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden mb-5">
        <div className="h-1.5 bg-gradient-to-r from-brand-red to-[#8f1116]" />
        <div className="p-6">
          <div className="flex items-center gap-3.5 mb-2">
            <FastLogo height={26} />
            <div className="border-l border-line pl-3.5">
              <div className="text-lg font-extrabold text-ink">Matriz de Riscos</div>
              <div className="text-xs text-muted">
                Riscos estratégicos, operacionais, financeiros, tributários, jurídicos e de pessoas — Plano Diretor,
                Item 15.2
              </div>
            </div>
          </div>
          <p className="text-sm text-ink-2 max-w-[75ch]">
            Riscos concretos identificados a partir do Plano Diretor e do estado real de implantação registrado
            neste portal (políticas, contratos, organograma, mapa de receitas e alçadas) — não são riscos
            hipotéticos ou genéricos de mercado.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 mb-5">
        {porClasse.map((c) => (
          <div key={c.classe} className="rounded-2xl border border-line bg-white shadow-card px-4 py-3.5 border-t-[3px]" style={{ borderTopColor: CLASSE_COLOR[c.classe] }}>
            <div className="text-[9.5px] font-extrabold uppercase tracking-wide text-muted">{c.classe}</div>
            <div className="text-2xl font-extrabold text-ink mt-0.5">{c.n}</div>
          </div>
        ))}
        <div className="rounded-2xl border border-line bg-white shadow-card px-4 py-3.5 border-t-[3px] border-t-ink">
          <div className="text-[9.5px] font-extrabold uppercase tracking-wide text-muted">Total mapeado</div>
          <div className="text-2xl font-extrabold text-ink mt-0.5">{RISKS.length}</div>
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-white shadow-card p-6 mb-5">
        <div className="text-xs font-extrabold uppercase tracking-wide text-muted mb-3">
          Probabilidade × Impacto — cor por categoria
        </div>
        <ResponsiveContainer width="100%" height={360}>
          <ScatterChart margin={{ top: 10, right: 20, bottom: 20, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-line)" />
            <XAxis
              type="number"
              dataKey="probabilidade"
              name="Probabilidade"
              domain={[0, 10]}
              tick={{ fontSize: 11 }}
              label={{ value: "Probabilidade", position: "insideBottom", offset: -10, fontSize: 11 }}
            />
            <YAxis
              type="number"
              dataKey="impacto"
              name="Impacto"
              domain={[0, 10]}
              tick={{ fontSize: 11 }}
              label={{ value: "Impacto", angle: -90, position: "insideLeft", fontSize: 11 }}
            />
            <ZAxis range={[110, 110]} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} content={<CustomTooltip />} />
            <Scatter data={RISKS}>
              {RISKS.map((r) => (
                <RechartsCell key={r.id} fill={CATEGORIA_COLOR[r.categoria]} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
        <div className="flex flex-wrap gap-2.5 mt-3.5 justify-center">
          {CATEGORIAS.map((c) => (
            <span key={c} className="flex items-center gap-1.5 text-[11px] font-bold text-ink-2 bg-white border border-line rounded-full px-3 py-1.5">
              <i className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: CATEGORIA_COLOR[c] }} />
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden mb-5">
        <div className="p-6 pb-2">
          <h2 className="text-base font-extrabold text-ink">Riscos mapeados</h2>
        </div>
        <div className="px-6 pb-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[80px]">Categoria</TableHead>
                <TableHead className="min-w-[220px]">Risco</TableHead>
                <TableHead className="min-w-[90px]">Classe</TableHead>
                <TableHead>Responsável</TableHead>
                <TableHead className="min-w-[220px]">Mitigação</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {RISKS.map((r) => {
                const classe = riskClasse(r)
                return (
                  <TableRow key={r.id}>
                    <TableCell>
                      <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold text-ink-2 whitespace-nowrap">
                        <i className="w-2 h-2 rounded-full inline-block" style={{ background: CATEGORIA_COLOR[r.categoria] }} />
                        {r.categoria}
                      </span>
                    </TableCell>
                    <TableCell className="whitespace-normal min-w-[220px]">
                      <b className="block text-ink text-[12.5px]">{r.risco}</b>
                      <span className="block text-[11px] text-muted mt-0.5">{r.causa}</span>
                      <span className="block text-[10.5px] text-muted italic mt-1">Fonte: {r.fonte}</span>
                    </TableCell>
                    <TableCell>
                      <span
                        className="inline-flex items-center text-[10px] font-extrabold uppercase rounded-full px-2 py-0.5 text-white"
                        style={{ background: CLASSE_COLOR[classe] }}
                      >
                        {classe}
                      </span>
                      <span className="block text-[10px] text-muted mt-1">P{r.probabilidade} × I{r.impacto} = {riskScore(r)}</span>
                    </TableCell>
                    <TableCell className="whitespace-normal min-w-[140px] text-[11.5px]">{r.responsavel}</TableCell>
                    <TableCell className="whitespace-normal min-w-[220px] text-[11.5px] text-ink-2">{r.mitigacao}</TableCell>
                    <TableCell>
                      <span className={cn("inline-flex items-center text-[10px] font-bold uppercase border rounded-full px-2 py-0.5 whitespace-nowrap", statusBadgeClass[r.status])}>
                        {r.status}
                      </span>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden">
        <div className="p-6 pb-2">
          <h2 className="text-base font-extrabold text-ink">O que falta para fechar esta frente</h2>
          <p className="text-xs text-muted mt-0.5">
            A matriz está elaborada e classificada; o que resta é ratificação formal e aprofundamento por empresa.
          </p>
        </div>
        <div className="px-6 pb-6">
          <ul className="space-y-2">
            {[
              "Ratificar a classificação de probabilidade/impacto com a Gerência de cada área, Controladoria e Auditoria Interna — os números atuais são um ponto de partida, não uma avaliação certificada.",
              "Aprovar formalmente esta matriz no Conselho Consultivo, como previsto no Item 15.5–15.6 do Plano Diretor (Comitê de Implantação), e registrar a aprovação no Histórico de Aprovações (Reuniões do Comitê).",
              "Atribuir prazo formal a cada mitigação, hoje descrita apenas qualitativamente.",
              "Estabelecer indicadores de acompanhamento periódico (mensal/trimestral) e vincular à Reunião Mensal de Resultados prevista no Plano Diretor 3.6 — usando a Matriz de KPIs já criada.",
              "Reavaliar a matriz sempre que uma política, contrato, SLA, KPI ou percentual hoje listado como pendente for aprovado — vários riscos aqui (rateio, comissões, SLAs sem responsabilização) deixam de existir quando a aprovação correspondente acontecer.",
            ].map((item, i) => (
              <li key={i} className="flex gap-2.5 text-xs text-ink-2 leading-relaxed">
                <span className="w-3.5 h-3.5 rounded shrink-0 border-2 border-line mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="text-center text-[11px] text-muted mt-6">
        Grupo FAST · Matriz de Riscos · Documento interno e confidencial
      </footer>
    </div>
  )
}
