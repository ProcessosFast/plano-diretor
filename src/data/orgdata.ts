import raw from "./orgdata.json"

export interface Person {
  role?: string
  name?: string
  group?: string
  lead?: boolean
  vago?: boolean
  todo?: boolean
  ref?: boolean
  hl?: boolean
  emp?: string
}

export interface Col {
  k: string
  s?: string
  accent?: string
  wide?: boolean
  ops?: string[]
  people: Person[]
}

export interface ChiefInfo {
  role: string
  name: string
}

export interface Section {
  title: string
  hint?: string
  chief?: ChiefInfo
  subchief?: ChiefInfo
  cols: Col[]
}

export interface Company {
  id: string
  name: string
  chief?: ChiefInfo
  sections: Section[]
}

export const COMPANIES: Company[] = raw as Company[]

export function findCompany(id: string): Company | undefined {
  return COMPANIES.find((c) => c.id === id)
}

export interface CompanyStats {
  total: number
  vagas: number
  lideres: number
  todo: number
}

export function companyStats(c: Company): CompanyStats {
  let total = 0,
    vagas = 0,
    lideres = 0,
    todo = 0
  if (c.chief) {
    total++
    lideres++
  }
  for (const sec of c.sections || []) {
    if (sec.chief) {
      total++
      lideres++
    }
    for (const col of sec.cols || []) {
      for (const p of col.people || []) {
        if (!p.name || p.ref) continue
        total++
        if (p.vago || /contratar/i.test(p.name)) vagas++
        if (p.lead) lideres++
        if (p.todo) todo++
      }
    }
  }
  return { total, vagas, lideres, todo }
}
