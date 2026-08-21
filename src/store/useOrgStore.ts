import { create } from "zustand"
import { COMPANIES as INITIAL_COMPANIES, type Company } from "@/data/orgdata"

interface OrgState {
  companies: Company[]
  editing: boolean
  toggleEditing: () => void
  setPersonField: (
    companyIdx: number,
    sectionIdx: number,
    colIdx: number,
    personIdx: number,
    field: "name" | "role",
    value: string
  ) => void
  addPerson: (companyIdx: number, sectionIdx: number, colIdx: number) => void
  removePerson: (companyIdx: number, sectionIdx: number, colIdx: number, personIdx: number) => void
  exportJson: () => void
  exportCsv: () => void
}

function download(filename: string, content: string, mime: string) {
  const blob = new Blob([content], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

export const useOrgStore = create<OrgState>((set, get) => ({
  companies: structuredClone(INITIAL_COMPANIES),
  editing: false,

  toggleEditing: () => set((s) => ({ editing: !s.editing })),

  setPersonField: (companyIdx, sectionIdx, colIdx, personIdx, field, value) =>
    set((s) => {
      const companies = structuredClone(s.companies)
      const person = companies[companyIdx]?.sections[sectionIdx]?.cols[colIdx]?.people[personIdx]
      if (person) person[field] = value
      return { companies }
    }),

  addPerson: (companyIdx, sectionIdx, colIdx) =>
    set((s) => {
      const companies = structuredClone(s.companies)
      const col = companies[companyIdx]?.sections[sectionIdx]?.cols[colIdx]
      if (col) col.people.push({ role: "A definir", name: "Novo colaborador", todo: true })
      return { companies }
    }),

  removePerson: (companyIdx, sectionIdx, colIdx, personIdx) =>
    set((s) => {
      const companies = structuredClone(s.companies)
      const col = companies[companyIdx]?.sections[sectionIdx]?.cols[colIdx]
      if (col) col.people.splice(personIdx, 1)
      return { companies }
    }),

  exportJson: () => {
    download("orgdata.json", JSON.stringify(get().companies, null, 1), "application/json")
  },

  exportCsv: () => {
    const rows: string[] = ["Unidade;Diretoria;Area;Nome;Cargo;Situacao"]
    const q = (v: string) => `"${(v || "").replace(/"/g, '""')}"`
    for (const c of get().companies) {
      for (const sec of c.sections || []) {
        const dir = sec.chief?.name ?? c.chief?.name ?? ""
        for (const col of sec.cols || []) {
          for (const p of col.people || []) {
            if (!p.name) continue
            const situacao = p.ref
              ? "Apoio"
              : /contratar/i.test(p.name)
                ? "Vaga"
                : p.todo
                  ? "Cargo a definir"
                  : "Ativo"
            rows.push([c.name, dir, col.k, p.name, p.role || "", situacao].map(q).join(";"))
          }
        }
      }
    }
    download("organograma.csv", "﻿" + rows.join("\n"), "text/csv;charset=utf-8")
  },
}))
