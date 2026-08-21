import { create } from "zustand"
import { persist } from "zustand/middleware"
import { ALCADAS_ROWS, type Cell, type AlcadaRow } from "@/data/alcadasContent"

export type EditableRow = {
  decisao: string
  vendedor: string
  gerente: string
  gerenteRegional: string
  diretorUnidade: string
  ceo: string
  conselho: string
}

const COLS: (keyof Omit<EditableRow, "decisao">)[] = [
  "vendedor",
  "gerente",
  "gerenteRegional",
  "diretorUnidade",
  "ceo",
  "conselho",
]

function cellToText(cell: Cell): string {
  if (cell.kind === "dash") return ""
  if (cell.kind === "x") return "X"
  return cell.text
}

export function textToCell(text: string): Cell {
  const trimmed = text.trim()
  if (!trimmed || trimmed === "-") return { kind: "dash" }
  if (trimmed.toUpperCase() === "X") return { kind: "x" }
  return { kind: "value", text: trimmed }
}

function toEditableRow(row: AlcadaRow): EditableRow {
  return {
    decisao: row.decisao,
    vendedor: cellToText(row.vendedor),
    gerente: cellToText(row.gerente),
    gerenteRegional: cellToText(row.gerenteRegional),
    diretorUnidade: cellToText(row.diretorUnidade),
    ceo: cellToText(row.ceo),
    conselho: cellToText(row.conselho),
  }
}

const DEFAULT_ROWS: EditableRow[] = ALCADAS_ROWS.map(toEditableRow)

interface AlcadasState {
  rows: EditableRow[]
  setRows: (rows: EditableRow[]) => void
  resetToDefault: () => void
}

export const useAlcadasStore = create<AlcadasState>()(
  persist(
    (set) => ({
      rows: DEFAULT_ROWS,
      setRows: (rows) => set({ rows }),
      resetToDefault: () => set({ rows: DEFAULT_ROWS }),
    }),
    { name: "fastPortalAlcadas" }
  )
)

export { COLS as ALCADAS_COLS, DEFAULT_ROWS as ALCADAS_DEFAULT_ROWS }
