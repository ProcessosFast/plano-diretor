import { useState } from "react"
import { VERTICAIS, FRONT, BACK, CORE, R_HOLD, R_OP, type Leaf } from "@/data/companyMeta"
import { companyStats } from "@/data/orgdata"
import { useOrgStore } from "@/store/useOrgStore"
import { cn } from "@/lib/utils"

const CX = 500
const CY = 500

function pol(r: number, angDeg: number): [number, number] {
  const t = (angDeg * Math.PI) / 180
  return [CX + r * Math.cos(t), CY + r * Math.sin(t)]
}

interface NodeDatum {
  tag: string
  title: string
  color: string
  desc: string
  sector: string
  org?: string | null
}

interface RadialMapProps {
  onOpenCompany: (id: string) => void
}

export function RadialMap({ onOpenCompany }: RadialMapProps) {
  const companies = useOrgStore((s) => s.companies)
  const [focusSector, setFocusSector] = useState<string | null>(null)
  const [detail, setDetail] = useState<NodeDatum>({
    tag: "Ecossistema",
    title: "Passe o mouse ou clique em um elemento",
    color: "#C4161C",
    desc: "As unidades com contador de pessoas têm organograma carregado — clique para expandir e ver a equipe. As demais aguardam o levantamento.",
    sector: "",
  })

  function personCount(id?: string | null) {
    if (!id) return null
    const c = companies.find((x) => x.id === id)
    return c ? companyStats(c).total : null
  }

  function handleEnter(d: NodeDatum) {
    if (d.sector !== "core") setFocusSector(d.sector)
    setDetail(d)
  }
  function handleClick(d: NodeDatum) {
    setDetail(d)
    if (d.org) {
      onOpenCompany(d.org)
      return
    }
    if (d.sector !== "core") setFocusSector(d.sector)
  }

  const isDimmed = (sector: string) => focusSector !== null && sector !== focusSector && sector !== "core"

  return (
    <div className="flex flex-col gap-4">
      <div
        className="relative w-full rounded-2xl border border-line bg-white shadow-card overflow-hidden"
        onMouseLeave={() => setFocusSector(null)}
      >
        <svg viewBox="-68 48 1116 968" preserveAspectRatio="xMidYMid meet" className="w-full h-[640px]">
          <defs>
            <radialGradient id="coreg" cx="50%" cy="36%" r="72%">
              <stop offset="0%" stopColor="#2c3a4e" />
              <stop offset="100%" stopColor="#141b25" />
            </radialGradient>
            <marker id="arrH" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="#3A4A61" />
            </marker>
            <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#14202d" floodOpacity="0.2" />
            </filter>
          </defs>

          <circle cx={CX} cy={CY} r={R_HOLD} fill="none" stroke="#ccd4de" strokeWidth={1} strokeDasharray="2 8" opacity={0.7} />
          <circle cx={CX} cy={CY} r={R_OP} fill="none" stroke="#ccd4de" strokeWidth={1} strokeDasharray="2 8" opacity={0.7} />

          {/* conexões — verticais (holdings) */}
          {VERTICAIS.map((v, i) => {
            const k = `v${i}`
            const [hx, hy] = pol(R_HOLD, v.ang)
            const [ox, oy] = pol(R_OP, v.ang)
            return (
              <g key={k} className={cn("transition-opacity", isDimmed(k) && "opacity-[.05]")}>
                <path d={`M ${CX} ${CY} L ${hx} ${hy}`} stroke="#3A4A61" fill="none" />
                <path d={`M ${hx} ${hy} L ${ox} ${oy}`} stroke="#3A4A61" fill="none" markerEnd="url(#arrH)" />
              </g>
            )
          })}

          {/* conexões — clusters front/back */}
          {[FRONT, BACK].map((S) => {
            const [hx, hy] = pol(S.hubR, S.hubAng)
            return (
              <g key={S.key}>
                <path
                  d={`M ${CX} ${CY} L ${hx} ${hy}`}
                  stroke={S.color}
                  fill="none"
                  className={cn("transition-opacity", isDimmed(S.key) && "opacity-[.05]")}
                />
                {S.leaves.map((lf, i) => {
                  const [lx, ly] = pol(S.radii[i], S.angs[i])
                  return (
                    <path
                      key={lf.t}
                      d={`M ${hx} ${hy} L ${lx} ${ly}`}
                      stroke={S.color}
                      fill="none"
                      className={cn("transition-opacity", isDimmed(S.key) && "opacity-[.05]")}
                    />
                  )
                })}
              </g>
            )
          })}

          {/* núcleo */}
          <Node
            x={CX}
            y={CY}
            w={204}
            h={204}
            circle
            fill="url(#coreg)"
            stroke="#C4161C"
            dimmed={false}
            onEnter={() => setDetail({ ...CORE, sector: "core" })}
            onClick={() => setDetail({ ...CORE, sector: "core" })}
          >
            <div className="flex flex-col items-center justify-center h-full text-white text-center px-2">
              <div className="text-lg font-black">
                FA<i className="not-italic font-black text-white">ST</i>
              </div>
              <div className="text-[9px] uppercase tracking-wide opacity-80">Ecossistema</div>
              <div className="text-[10px] font-bold mt-1.5">Governança</div>
              <div className="text-[8.5px] opacity-80">Conselho · CEO Priscila</div>
            </div>
          </Node>

          {/* holdings + operacionais */}
          {VERTICAIS.map((v, i) => {
            const k = `v${i}`
            const [hx, hy] = pol(R_HOLD, v.ang)
            const [ox, oy] = pol(R_OP, v.ang)
            const count = personCount(v.org)
            return (
              <g key={k}>
                <Node
                  x={hx}
                  y={hy}
                  w={168}
                  h={54}
                  fill="#3A4A61"
                  dimmed={isDimmed(k)}
                  onEnter={() => handleEnter({ tag: "Holdings · Controle societário", title: v.hold, color: "#3A4A61", desc: v.desc, sector: k })}
                  onClick={() => handleClick({ tag: "Holdings · Controle societário", title: v.hold, color: "#3A4A61", desc: v.desc, sector: k })}
                >
                  <CardInner title={v.hold} subtitle="Controle societário" />
                </Node>
                <Node
                  x={ox}
                  y={oy}
                  w={168}
                  h={v.org ? 62 : 54}
                  fill="#123A63"
                  dimmed={isDimmed(k)}
                  onEnter={() => handleEnter({ tag: "Empresa Operacional · controlada", title: v.op, color: "#123A63", desc: v.desc, sector: k, org: v.org })}
                  onClick={() => handleClick({ tag: "Empresa Operacional · controlada", title: v.op, color: "#123A63", desc: v.desc, sector: k, org: v.org })}
                >
                  <CardInner title={v.op} subtitle={v.opsub} count={count} />
                </Node>
              </g>
            )
          })}

          {/* front/back clusters */}
          {[
            { S: FRONT, leafW: 138 },
            { S: BACK, leafW: 158 },
          ].map(({ S, leafW }) => {
            const [hx, hy] = pol(S.hubR, S.hubAng)
            return (
              <g key={S.key}>
                <Node
                  x={hx}
                  y={hy}
                  w={176}
                  h={58}
                  fill={S.color}
                  dimmed={isDimmed(S.key)}
                  onEnter={() => handleEnter({ tag: S.tag, title: S.name, color: S.color, desc: S.desc, sector: S.key })}
                  onClick={() => handleClick({ tag: S.tag, title: S.name, color: S.color, desc: S.desc, sector: S.key })}
                >
                  <CardInner title={S.name} subtitle={S.tag} />
                </Node>
                {S.leaves.map((lf: Leaf, i) => {
                  const [lx, ly] = pol(S.radii[i], S.angs[i])
                  const count = personCount(lf.org)
                  return (
                    <Node
                      key={lf.t}
                      x={lx}
                      y={ly}
                      w={leafW}
                      h={lf.org ? 64 : 52}
                      fill={S.color}
                      dimmed={isDimmed(S.key)}
                      onEnter={() =>
                        handleEnter({
                          tag: S.key === "front" ? "Empresa Comercial · Front Office" : S.name,
                          title: lf.t,
                          color: S.color,
                          desc: lf.d || `${lf.u} — ${S.desc}`,
                          sector: S.key,
                          org: lf.org,
                        })
                      }
                      onClick={() =>
                        handleClick({
                          tag: S.key === "front" ? "Empresa Comercial · Front Office" : S.name,
                          title: lf.t,
                          color: S.color,
                          desc: lf.d || `${lf.u} — ${S.desc}`,
                          sector: S.key,
                          org: lf.org,
                        })
                      }
                    >
                      <CardInner title={lf.t} subtitle={lf.u} count={count} />
                    </Node>
                  )
                })}
              </g>
            )
          })}
        </svg>
      </div>

      {/* painel de detalhe */}
      <div className="flex items-start gap-3 rounded-2xl border border-line bg-white shadow-card p-4">
        <div className="w-3.5 h-3.5 rounded-full shrink-0 mt-1" style={{ background: detail.color }} />
        <div className="flex-1">
          <div className="text-[10px] font-extrabold uppercase tracking-wide text-muted">{detail.tag}</div>
          <div className="text-sm font-extrabold text-ink mt-0.5">{detail.title}</div>
          <div className="text-xs text-ink-2 mt-1">
            {detail.desc}
            {detail.org ? " ▸ Clique para expandir o organograma desta unidade." : ""}
          </div>
        </div>
      </div>
    </div>
  )
}

function CardInner({ title, subtitle, count }: { title: string; subtitle: string; count?: number | null }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white text-center px-1.5">
      <div className="text-[12.5px] font-extrabold leading-tight">{title}</div>
      <div className="text-[9.5px] opacity-90 mt-0.5">{subtitle}</div>
      {count != null && (
        <div className="text-[9px] font-extrabold bg-white/20 rounded-full px-2 py-0.5 mt-1">{count} pessoas</div>
      )}
    </div>
  )
}

interface NodeProps {
  x: number
  y: number
  w: number
  h: number
  fill: string
  stroke?: string
  circle?: boolean
  dimmed: boolean
  onEnter: () => void
  onClick: () => void
  children: React.ReactNode
}

function Node({ x, y, w, h, fill, stroke, circle, dimmed, onEnter, onClick, children }: NodeProps) {
  return (
    <g
      transform={circle ? `translate(${x},${y})` : `translate(${x - w / 2},${y - h / 2})`}
      className={cn("cursor-pointer transition-opacity", dimmed && "opacity-[.14]")}
      onMouseEnter={onEnter}
      onClick={onClick}
    >
      {circle ? (
        <circle r={w / 2} fill={fill} stroke={stroke} strokeWidth={3} filter="url(#soft)" />
      ) : (
        <rect x={0} y={0} width={w} height={h} rx={13} fill={fill} filter="url(#soft)" />
      )}
      <foreignObject
        x={circle ? -w / 2 + 8 : 0}
        y={circle ? -h / 2 + 12 : 0}
        width={circle ? w - 16 : w}
        height={circle ? h - 24 : h}
      >
        <div className="w-full h-full">
          {children}
        </div>
      </foreignObject>
    </g>
  )
}
