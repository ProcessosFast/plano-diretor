import { Plus } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useOrgStore } from "@/store/useOrgStore"
import { companyStats } from "@/data/orgdata"
import { PersonRow } from "./PersonRow"
import { cn } from "@/lib/utils"

interface CompanyOverlayProps {
  companyId: string | null
  onClose: () => void
}

const DEFAULT_ACCENT = "#2E3B4E"

export function CompanyOverlay({ companyId, onClose }: CompanyOverlayProps) {
  const companies = useOrgStore((s) => s.companies)
  const editing = useOrgStore((s) => s.editing)
  const addPerson = useOrgStore((s) => s.addPerson)

  const companyIdx = companies.findIndex((c) => c.id === companyId)
  const company = companyIdx >= 0 ? companies[companyIdx] : null

  return (
    <Dialog open={!!company} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="p-0 w-[96vw] max-w-6xl max-h-[94vh]">
        {company && (
          <>
            <DialogHeader className="text-white" style={{ background: `linear-gradient(100deg, ${DEFAULT_ACCENT}, ${DEFAULT_ACCENT}cc)` }}>
              <DialogTitle className="text-white">{company.name}</DialogTitle>
              {(company.chief || company.sections?.[0]?.chief) && (
                <DialogDescription className="text-white/85">
                  {(company.chief || company.sections[0].chief)!.role} —{" "}
                  <b>{(company.chief || company.sections[0].chief)!.name}</b>
                </DialogDescription>
              )}
              {(() => {
                const s = companyStats(company)
                return (
                  <div className="flex gap-4 mt-2 text-xs">
                    <Stat label="pessoas" value={s.total} />
                    {s.vagas > 0 && <Stat label="vagas" value={s.vagas} />}
                    <Stat label="lideranças" value={s.lideres} />
                    {s.todo > 0 && <Stat label="cargo a definir" value={s.todo} />}
                  </div>
                )
              })()}
            </DialogHeader>

            <div className="px-6 pb-6">
              {company.sections.map((sec, si) => (
                <div key={si} className="mt-5 first:mt-0">
                  <div className="flex items-baseline justify-between mb-2 pb-1.5 border-b border-line">
                    <b className="text-sm font-extrabold">{sec.title}</b>
                    {sec.hint && <span className="text-[10.5px] text-muted">{sec.hint}</span>}
                  </div>
                  {sec.chief && (
                    <div className="flex items-center gap-2.5 border-l-4 pl-3 py-2 mb-3 bg-soft/50 rounded-r-lg" style={{ borderLeftColor: DEFAULT_ACCENT }}>
                      <div className="w-7 h-7 rounded-full text-white flex items-center justify-center text-[10px] font-extrabold shrink-0" style={{ background: DEFAULT_ACCENT }}>
                        {sec.chief.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <b className="block text-xs font-extrabold">{sec.chief.name}</b>
                        <span className="block text-[10px] text-muted">{sec.chief.role}</span>
                      </div>
                    </div>
                  )}
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(236px,1fr))] gap-3.5 items-start">
                    {sec.cols.map((col, ci) => (
                      <div key={ci} className={cn("rounded-xl border border-line bg-white", col.wide && "col-span-full")}>
                        <div className="px-3 pt-2.5 pb-2 border-t-[3px] rounded-t-xl" style={{ borderTopColor: col.accent || DEFAULT_ACCENT }}>
                          <b className="text-[11.5px] font-extrabold" style={{ color: col.accent || DEFAULT_ACCENT }}>
                            {col.k}
                          </b>
                          {col.s && <span className="block text-[9.5px] text-muted mt-0.5">{col.s}</span>}
                        </div>
                        {col.ops && col.ops.length > 0 && (
                          <div className="flex flex-wrap gap-1 px-3 pb-1.5">
                            {col.ops.map((o) => (
                              <i key={o} className="not-italic text-[8.5px] font-bold bg-soft text-ink-2 rounded-full px-1.5 py-0.5">
                                {o}
                              </i>
                            ))}
                          </div>
                        )}
                        <div className={cn("px-2 pb-2", col.wide && "columns-3 gap-4")}>
                          {col.people.map((p, pi) => (
                            <PersonRow
                              key={pi}
                              person={p}
                              accent={col.accent || DEFAULT_ACCENT}
                              companyIdx={companyIdx}
                              sectionIdx={si}
                              colIdx={ci}
                              personIdx={pi}
                              editing={editing}
                            />
                          ))}
                        </div>
                        {editing && (
                          <button
                            onClick={() => addPerson(companyIdx, si, ci)}
                            className="w-full text-center text-[10.5px] font-bold text-brand-red py-1.5 border-t border-dashed border-line hover:bg-soft/60 flex items-center justify-center gap-1"
                          >
                            <Plus size={12} /> pessoa
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="text-[10.5px] text-muted border-t border-line pt-3 mt-5 leading-relaxed">
                Levantamento de pessoas do Grupo Fast, integrado ao Mapa do Ecossistema. Cargos marcados como
                «a definir» aguardam preenchimento. Vínculos de reporte abaixo do nível de coordenação ainda não
                estão formalizados na fonte — confirmar antes de uso oficial.
              </div>
              <div className="flex justify-end mt-4">
                <Button variant="outline" size="sm" onClick={onClose}>
                  Fechar
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <b className="block text-sm font-extrabold">{value}</b>
      <span className="text-[9.5px] opacity-80">{label}</span>
    </div>
  )
}
