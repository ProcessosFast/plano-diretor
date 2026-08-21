import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts"

interface ProgressMeterProps {
  before: number
  now: number
  label: string
}

/** Medidor de progresso do "Item 6" — usa recharts (RadialBarChart) para o
 *  antes/agora, no lugar da barra de progresso CSS hardcoded do HTML original. */
export function ProgressMeter({ before, now, label }: ProgressMeterProps) {
  const data = [{ name: "agora", value: now, fill: "url(#progressGradient)" }]
  return (
    <div className="flex items-center gap-6">
      <div className="w-[130px] h-[130px] shrink-0 relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="72%"
            outerRadius="100%"
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <defs>
              <linearGradient id="progressGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1F6FB2" />
                <stop offset="100%" stopColor="#0E9C82" />
              </linearGradient>
            </defs>
            <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
            <RadialBar background={{ fill: "#F5F7FA" }} dataKey="value" cornerRadius={20} />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-extrabold text-ink">{now}%</span>
          <span className="text-[9px] text-muted font-bold">agora</span>
        </div>
      </div>
      <div>
        <div className="text-sm font-extrabold text-ink mb-1">{label}</div>
        <div className="text-xs text-muted">
          Antes: <b className="text-ink-2">{before}%</b> → Agora: <b className="text-back">{now}%</b>
        </div>
      </div>
    </div>
  )
}
