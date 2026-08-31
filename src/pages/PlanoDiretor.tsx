import { useState } from "react"
import { FastLogo } from "@/components/shared/FastLogo"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { PLANO_DIRETOR_PANELS, PLANO_DIRETOR_GROUPS, type PdBlock } from "@/data/planoDiretorContent"

const badgeLabel: Record<string, string> = { aberto: "Aberto", gestor: "Gestor", confidencial: "Confidencial" }

function BlockView({ block }: { block: PdBlock }) {
  switch (block.type) {
    case "h3":
      return <h3 className="text-sm font-extrabold text-ink mt-5 first:mt-0 mb-1.5">{block.text}</h3>
    case "p":
      return <p className="text-sm text-ink-2 mb-2 leading-relaxed">{block.text}</p>
    case "ul":
      return (
        <ul className="list-disc pl-5 mb-2 space-y-1">
          {block.items.map((it, i) => (
            <li key={i} className="text-sm text-ink-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: it }} />
          ))}
        </ul>
      )
    case "table":
      return (
        <div className="overflow-x-auto my-2">
          <table className="w-full text-xs border-collapse">
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className={i > 0 ? "border-t border-line" : ""}>
                  {row.map((cell, j) =>
                    i === 0 ? (
                      <th key={j} className="bg-ink text-white text-left px-3 py-2 text-[10px] font-extrabold uppercase tracking-wide">
                        {cell}
                      </th>
                    ) : (
                      <td key={j} className={cn("px-3 py-2 text-ink-2", i % 2 === 0 && "bg-soft/60")}>
                        {cell}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case "callout":
      return (
        <div
          className="bg-soft/60 border border-line border-l-4 border-l-brand-red rounded-xl px-4 py-3 my-2 text-xs text-ink-2 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      )
    case "xref":
      return (
        <div className="bg-soft border border-dashed border-line rounded-xl px-3.5 py-2.5 my-2 text-xs text-muted"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      )
  }
}

export function PlanoDiretor() {
  const [activeId, setActiveId] = useState("c1")
  const panel = PLANO_DIRETOR_PANELS.find((p) => p.id === activeId)!

  return (
    <div className="max-w-6xl mx-auto my-8 px-4 pb-14">
      <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden mb-5">
        <div className="h-1.5 bg-gradient-to-r from-brand-red to-[#8f1116]" />
        <div className="flex items-center gap-4 p-5 flex-wrap">
          <FastLogo height={32} />
          <div className="border-l border-line pl-4">
            <h1 className="text-lg font-extrabold text-ink">Plano Diretor do Ecossistema FAST</h1>
            <p className="text-xs text-muted">Governança, arquitetura societária e modelo operacional · 2026–2030</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[230px_1fr] gap-5 items-start max-[860px]:grid-cols-1">
        <nav className="sticky top-4 bg-white border border-line rounded-2xl shadow-card p-3.5 max-[860px]:static max-[860px]:flex max-[860px]:flex-wrap max-[860px]:gap-1.5">
          {PLANO_DIRETOR_GROUPS.map((group) => (
            <div key={group.label} className="mb-3.5 last:mb-0 max-[860px]:mb-0 max-[860px]:contents">
              <div className="text-[9.5px] font-extrabold uppercase tracking-wide text-muted mb-1.5 max-[860px]:hidden">
                {group.label}
              </div>
              {group.ids.map((id) => {
                const p = PLANO_DIRETOR_PANELS.find((x) => x.id === id)!
                return (
                  <Button
                    key={id}
                    variant="ghost"
                    onClick={() => setActiveId(id)}
                    className={cn(
                      "h-auto justify-start gap-1.5 w-full text-left rounded-md px-2 py-1.5 text-xs font-bold text-ink-2 mb-0.5",
                      "hover:bg-soft",
                      activeId === id && "bg-ink text-white hover:bg-ink"
                    )}
                  >
                    <i
                      className={cn(
                        "inline-block w-1.5 h-1.5 rounded-full shrink-0",
                        p.badge === "aberto" && "bg-back",
                        p.badge === "gestor" && "bg-oper",
                        p.badge === "confidencial" && "bg-warn"
                      )}
                    />
                    {p.title}
                  </Button>
                )
              })}
            </div>
          ))}
          <div className="flex gap-2.5 flex-wrap mt-3 pt-2.5 border-t border-dashed border-line max-[860px]:hidden">
            <span className="flex items-center gap-1 text-[9.5px] text-muted font-bold">
              <i className="w-1.5 h-1.5 rounded-full bg-back" />Aberto
            </span>
            <span className="flex items-center gap-1 text-[9.5px] text-muted font-bold">
              <i className="w-1.5 h-1.5 rounded-full bg-oper" />Gestor
            </span>
            <span className="flex items-center gap-1 text-[9.5px] text-muted font-bold">
              <i className="w-1.5 h-1.5 rounded-full bg-warn" />Confidencial
            </span>
          </div>
        </nav>

        <div className="min-w-0 bg-white border border-line rounded-2xl shadow-card p-6">
          <Badge variant={panel.badge as "aberto" | "gestor" | "confidencial"} className="mb-2.5">
            {badgeLabel[panel.badge]}
          </Badge>
          <h2 className="text-lg font-extrabold text-ink mb-3.5">{panel.title}</h2>
          {panel.blocks.map((b, i) => (
            <BlockView key={i} block={b} />
          ))}
        </div>
      </div>

      <footer className="text-center text-[11px] text-muted mt-6">
        Plano Diretor do Ecossistema FAST · Documento interno e confidencial nos capítulos marcados
      </footer>
    </div>
  )
}
