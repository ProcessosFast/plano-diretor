import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useOrgStore } from "@/store/useOrgStore"
import { cn } from "@/lib/utils"
import type { Person } from "@/data/orgdata"

interface PersonRowProps {
  person: Person
  accent: string
  companyIdx: number
  sectionIdx: number
  colIdx: number
  personIdx: number
  editing: boolean
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase()
}

export function PersonRow({ person: p, accent, companyIdx, sectionIdx, colIdx, personIdx, editing }: PersonRowProps) {
  const setPersonField = useOrgStore((s) => s.setPersonField)
  const removePerson = useOrgStore((s) => s.removePerson)

  if (!p.name) return <div className="text-[9px] font-extrabold uppercase tracking-wide text-muted pt-2.5 border-t border-dashed border-line mt-1.5">{p.group}</div>

  const vago = p.vago || /contratar/i.test(p.name)

  return (
    <div className={cn("flex items-start gap-2 py-1.5 px-1.5 rounded-lg group", "hover:bg-soft/70", p.ref && "border border-dashed border-line bg-soft/40 mt-1.5")}>
      <div
        className={cn(
          "w-5.5 h-5.5 rounded-full shrink-0 flex items-center justify-center text-[9px] font-extrabold text-white mt-0.5",
          p.hl && "ring-2 ring-yellow-400",
          vago && "bg-[#B7C0CC]",
          p.ref && "bg-white text-muted border border-dashed border-line"
        )}
        style={!vago && !p.ref ? { background: accent } : undefined}
      >
        {vago ? "?" : initials(p.name)}
      </div>
      <div className="flex-1 min-w-0">
        {editing ? (
          <Input
            value={p.name}
            onChange={(e) => setPersonField(companyIdx, sectionIdx, colIdx, personIdx, "name", e.target.value)}
            className="h-6 text-xs font-bold mb-1"
          />
        ) : (
          <b className={cn("block text-[11.5px] font-bold leading-tight", vago && "italic text-muted")}>
            {p.name}
            {p.lead && (
              <span className="ml-1.5 text-[7.5px] font-extrabold bg-ink text-white rounded-full px-1.5 py-0.5 align-middle">
                LÍDER
              </span>
            )}
            {p.ref && (
              <span className="ml-1.5 text-[7.5px] font-extrabold bg-soft text-muted rounded-full px-1.5 py-0.5 align-middle">
                APOIO
              </span>
            )}
          </b>
        )}
        {editing ? (
          <Input
            value={p.role || ""}
            onChange={(e) => setPersonField(companyIdx, sectionIdx, colIdx, personIdx, "role", e.target.value)}
            className="h-6 text-[10.5px]"
          />
        ) : (
          <span className={cn("block text-[9.5px] text-muted mt-0.5", p.todo && "italic")}>{p.role}</span>
        )}
      </div>
      {editing && (
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => removePerson(companyIdx, sectionIdx, colIdx, personIdx)}
          className="opacity-0 group-hover:opacity-100 shrink-0 text-muted hover:text-brand-red"
          title="Remover"
        >
          <X size={14} />
        </Button>
      )}
    </div>
  )
}
