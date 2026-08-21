import { useState } from "react"
import { FastLogo } from "@/components/shared/FastLogo"
import { SignatureBlock } from "@/components/shared/SignatureBlock"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { ALCADAS_SIGNERS } from "@/data/alcadasContent"
import { useAlcadasStore, textToCell, type EditableRow } from "@/store/useAlcadasStore"
import { cn } from "@/lib/utils"
import { Pencil, Save, X, RotateCcw } from "lucide-react"

const COLUMNS: { key: keyof Omit<EditableRow, "decisao">; label: string }[] = [
  { key: "vendedor", label: "Vendedor" },
  { key: "gerente", label: "Gerente" },
  { key: "gerenteRegional", label: "Gerente Regional" },
  { key: "diretorUnidade", label: "Diretor da unidade" },
  { key: "ceo", label: "CEO" },
  { key: "conselho", label: "Conselho Consultivo" },
]

function CellView({ text }: { text: string }) {
  const cell = textToCell(text)
  if (cell.kind === "dash") return <span className="text-[#B7C0CC] block text-center">—</span>
  if (cell.kind === "x") return <span className="text-brand-red font-black block text-center">X</span>
  return <span className="whitespace-normal">{cell.text}</span>
}

export function MatrizAlcadas() {
  const rows = useAlcadasStore((s) => s.rows)
  const setRows = useAlcadasStore((s) => s.setRows)
  const resetToDefault = useAlcadasStore((s) => s.resetToDefault)

  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState<EditableRow[]>(rows)

  function startEdit() {
    setDraft(rows)
    setEditing(true)
  }

  function updateCell(decisao: string, key: keyof Omit<EditableRow, "decisao">, value: string) {
    setDraft((d) => d.map((r) => (r.decisao === decisao ? { ...r, [key]: value } : r)))
  }

  function save() {
    setRows(draft)
    setEditing(false)
  }

  function cancel() {
    setDraft(rows)
    setEditing(false)
  }

  function handleReset() {
    resetToDefault()
    setDraft(rows)
    setEditing(false)
  }

  const displayRows = editing ? draft : rows

  return (
    <div className="max-w-6xl mx-auto my-8 px-4 pb-14">
      <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden mb-5">
        <div className="h-1.5 bg-gradient-to-r from-brand-red to-[#8f1116]" />
        <div className="p-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3.5">
              <FastLogo height={26} />
              <span className="text-[10px] font-extrabold uppercase tracking-wide text-muted border-l border-line pl-3.5">
                Comitê de Governança e Compliance
              </span>
            </div>
            <div className="flex items-center gap-2">
              {!editing ? (
                <Button size="sm" variant="outline" onClick={startEdit}>
                  <Pencil size={13} /> Editar
                </Button>
              ) : (
                <>
                  <Button size="sm" variant="ghost" onClick={handleReset} title="Restaurar valores originais">
                    <RotateCcw size={13} /> Restaurar padrão
                  </Button>
                  <Button size="sm" variant="outline" onClick={cancel}>
                    <X size={13} /> Cancelar
                  </Button>
                  <Button size="sm" onClick={save}>
                    <Save size={13} /> Salvar
                  </Button>
                </>
              )}
            </div>
          </div>
          <h1 className="text-xl font-extrabold text-ink mt-3">Matriz de Alçadas</h1>
          <p className="text-sm italic text-ink-2 mt-1">
            Documento para preenchimento pela Diretoria e aprovação do Conselho Consultivo
          </p>
          <div className="mt-4 pt-3.5 border-t border-dashed border-line text-xs text-ink-2 leading-relaxed">
            <b className="text-ink">Como preencher:</b> em cada célula, informe o limite (em R$ ou %) até o qual
            aquele nível pode aprovar sozinho. Acima do limite, a decisão escala automaticamente para o nível
            seguinte.
            <br />
            Quando for um poder de autorização sem limite de valor ou %, <b>X</b> deve ser marcado em quem pode dar
            autorização.
            <br />
            Use <b>"—"</b> (ou deixe em branco) quando o nível não tiver alçada para aquele tipo de decisão.
            {editing && (
              <>
                <br />
                <span className="text-brand-red font-bold">
                  Modo de edição ativo — clique nas células para alterar os valores e depois em "Salvar".
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[220px]">Tipo de decisão</TableHead>
            {COLUMNS.map((c) => (
              <TableHead key={c.key}>{c.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayRows.map((row) => (
            <TableRow key={row.decisao}>
              <TableCell className={cn("font-extrabold text-ink whitespace-normal min-w-[220px]")}>
                {row.decisao}
              </TableCell>
              {COLUMNS.map((c) => (
                <TableCell key={c.key} className="min-w-[140px]">
                  {editing ? (
                    <Input
                      value={row[c.key]}
                      onChange={(e) => updateCell(row.decisao, c.key, e.target.value)}
                      placeholder="—"
                      className="h-8 text-xs text-center"
                    />
                  ) : (
                    <CellView text={row[c.key]} />
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="text-xs text-muted bg-soft/60 border border-line border-l-4 border-l-brand-red rounded-xl px-4 py-3 mt-4">
        Acima do limite indicado, a decisão escala automaticamente para o nível seguinte da tabela.
      </div>

      <div className="mt-6">
        <SignatureBlock
          intro="Esta matriz de alçadas foi aprovada pela Diretoria Executiva e homologada pelo Conselho Consultivo."
          items={ALCADAS_SIGNERS}
        />
      </div>

      <footer className="text-center text-[11px] text-muted mt-6">
        Grupo FAST · Matriz de Alçadas · Confidencial
      </footer>
    </div>
  )
}
