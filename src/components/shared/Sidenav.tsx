import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FastMark } from "./FastMark"
import { cn } from "@/lib/utils"

const STORAGE_KEY = "fastPortalSidenavCollapsed"

const NAV_ITEMS = [
  { to: "/implantacao", label: "Painel de Implantação", ic: "%" },
  { to: "/reunioes", label: "Reuniões do Comitê", ic: "RC" },
  { to: "/organograma", label: "Organograma", ic: "OR" },
  { to: "/receitas", label: "Mapa de Receitas", ic: "MR" },
  { to: "/politicas", label: "Políticas Internas", ic: "PI" },
  { to: "/alcadas", label: "Matriz de Alçadas", ic: "MA" },
  { to: "/matriz-riscos", label: "Matriz de Riscos", ic: "RI" },
  { to: "/slas", label: "Matriz de SLAs", ic: "SL" },
  { to: "/kpis", label: "Matriz de KPIs", ic: "KP" },
  { to: "/contratos-internos", label: "Contratos Internos", ic: "CI" },
  { to: "/contratos-societarios", label: "Contratos Societários", ic: "CS" },
  { to: "/plano-diretor", label: "Plano Diretor", ic: "PD" },
]

export function Sidenav() {
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    let initial = false
    try {
      initial = localStorage.getItem(STORAGE_KEY) === "1"
    } catch {
      /* localStorage indisponível — ignora */
    }
    if (window.innerWidth <= 760) initial = true
    setCollapsed(initial)
  }, [])

  function persist(next: boolean) {
    setCollapsed(next)
    try {
      localStorage.setItem(STORAGE_KEY, next ? "1" : "0")
    } catch {
      /* localStorage indisponível — ignora */
    }
  }

  function handleNavClick() {
    if (window.innerWidth <= 760) persist(true)
  }

  return (
    <nav
      className={cn(
        "flex flex-col bg-ink text-white sticky top-0 h-screen z-50 transition-[width] duration-150 overflow-hidden shrink-0",
        collapsed ? "w-[60px]" : "w-[236px]",
        !collapsed && "max-[760px]:fixed max-[760px]:left-0 max-[760px]:shadow-[0_0_0_2000px_rgba(0,0,0,.35)]"
      )}
    >
      <div className="flex items-center gap-2.5 px-3.5 py-4 border-b border-white/10 shrink-0">
        <FastMark size={26} className="shrink-0" />
        {!collapsed && (
          <div className="text-xs font-extrabold leading-tight whitespace-nowrap overflow-hidden">
            Portal de Governança
            <br />e Compliance
          </div>
        )}
        <button
          title="Recolher/expandir menu"
          onClick={() => persist(!collapsed)}
          className={cn(
            "flex items-center justify-center h-6.5 w-6.5 rounded-md bg-white/10 hover:bg-white/20 shrink-0",
            collapsed ? "mx-auto" : "ml-auto"
          )}
        >
          {collapsed ? <ChevronRight size={13} /> : <ChevronLeft size={13} />}
        </button>
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-2.5">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={handleNavClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2.5 w-full text-left rounded-lg px-2 py-2.5 mb-0.5 text-xs font-bold text-[#B7C0CC] whitespace-nowrap",
                "hover:bg-white/10 hover:text-white",
                isActive && "bg-brand-red text-white hover:bg-brand-red"
              )
            }
          >
            <span
              className={cn(
                "flex items-center justify-center h-5.5 w-5.5 shrink-0 rounded-md bg-white/15 text-[9.5px] font-extrabold"
              )}
            >
              {item.ic}
            </span>
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
