import { useLayoutEffect, useRef } from "react"
import { FLOW_LEFT, FLOW_RIGHT, FLOW_LINKS } from "@/data/receitasContent"
import { cn } from "@/lib/utils"

/** Diagrama de linhas ligando "quem vende" a "onde a receita é registrada".
 *  Porta de drawFlowMap()/FLOW_LINKS do index.html original: mede a posição
 *  real de cada caixinha (não coordenadas fixas) e desenha curvas de Bézier
 *  em um <svg> sobreposto. Não é um gráfico recharts — é um diagrama de
 *  nó-e-ligação, então fica melhor como SVG customizado. */
export function FlowDiagram() {
  const mapRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useLayoutEffect(() => {
    function draw() {
      const map = mapRef.current
      const svg = svgRef.current
      if (!map || !svg) return
      const mr = map.getBoundingClientRect()
      if (mr.width === 0 || mr.height === 0) return
      svg.setAttribute("viewBox", `0 0 ${mr.width} ${mr.height}`)
      svg.innerHTML = ""
      for (const [fromId, toId, color, dashed] of FLOW_LINKS) {
        const a = document.getElementById(fromId)
        const b = document.getElementById(toId)
        if (!a || !b) continue
        const ar = a.getBoundingClientRect()
        const br = b.getBoundingClientRect()
        const x1 = ar.right - mr.left
        const y1 = ar.top - mr.top + ar.height / 2
        const x2 = br.left - mr.left
        const y2 = br.top - mr.top + br.height / 2
        const mx = (x1 + x2) / 2
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
        path.setAttribute("d", `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`)
        path.setAttribute("stroke", color)
        path.setAttribute("stroke-width", "2.5")
        path.setAttribute("fill", "none")
        path.setAttribute("opacity", ".75")
        if (dashed) path.setAttribute("stroke-dasharray", "5 4")
        svg.appendChild(path)
      }
    }
    draw()
    window.addEventListener("resize", draw)
    return () => window.removeEventListener("resize", draw)
  }, [])

  return (
    <div
      ref={mapRef}
      className="relative grid grid-cols-2 gap-0 min-h-[520px] bg-white border border-line rounded-2xl shadow-card px-8 py-6"
    >
      <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 flex flex-col justify-between">
        <div className="text-[10px] font-extrabold uppercase tracking-wide text-muted mb-2.5">
          Quem vende · Front Office
        </div>
        {FLOW_LEFT.map((n) => (
          <div
            key={n.id}
            id={n.id}
            className={cn(
              "border rounded-lg bg-white px-3.5 py-2.5 text-xs max-w-[260px] border-l-4",
              n.variant === "own" ? "border-l-fran" : n.variant === "warn" ? "border-l-warn" : "border-l-front",
              "border-line"
            )}
          >
            <b className="block text-[12.5px] font-extrabold">{n.title}</b>
            <span className="block text-[10.5px] text-muted mt-0.5">{n.subtitle}</span>
          </div>
        ))}
      </div>
      <div className="relative z-10 flex flex-col justify-between items-end">
        <div className="text-[10px] font-extrabold uppercase tracking-wide text-muted mb-2.5">
          Onde a receita é registrada
        </div>
        {FLOW_RIGHT.map((n) => (
          <div
            key={n.id}
            id={n.id}
            className={cn(
              "border rounded-lg bg-white px-3.5 py-2.5 text-xs max-w-[260px] text-right border-r-4",
              n.variant === "own" ? "border-r-fran" : "border-r-oper",
              "border-line"
            )}
          >
            <b className="block text-[12.5px] font-extrabold">{n.title}</b>
            <span className="block text-[10.5px] text-muted mt-0.5">{n.subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
