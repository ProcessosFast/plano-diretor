import { useState } from "react"
import { FastLogo } from "@/components/shared/FastLogo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { KPI_AREAS, type KpiItem } from "@/data/kpiContent"
import { useKpiStore } from "@/store/useKpiStore"
import { Pencil, Save, X, Check, ThumbsUp, RotateCcw, Plus, Trash2 } from "lucide-react"

const OUTROS_AREA = "Outros"

function KpiRow({ item, onRemove }: { item: KpiItem; onRemove?: () => void }) {
  const override = useKpiStore((s) => s.overrides[item.id])
  const setOverride = useKpiStore((s) => s.setOverride)
  const setAprovado = useKpiStore((s) => s.setAprovado)

  const meta = override?.meta ?? ""
  const frequencia = override?.frequencia ?? item.frequenciaPadrao
  const responsavel = override?.responsavel ?? ""
  const aprovado = override?.aprovado ?? false

  const [editing, setEditing] = useState(false)
  const [draftMeta, setDraftMeta] = useState(meta)
  const [draftFreq, setDraftFreq] = useState(frequencia)
  const [draftResp, setDraftResp] = useState(responsavel)

  function startEdit() {
    setDraftMeta(meta)
    setDraftFreq(frequencia)
    setDraftResp(responsavel)
    setEditing(true)
  }

  function save() {
    setOverride(item.id, { meta: draftMeta, frequencia: draftFreq, responsavel: draftResp, aprovado })
    setEditing(false)
  }

  return (
    <TableRow>
      <TableCell className="font-extrabold text-ink whitespace-normal min-w-[220px]">
        {item.indicador}
        <span className="block text-[10.5px] font-normal text-muted mt-0.5">{item.fonte}</span>
      </TableCell>
      <TableCell className="min-w-[140px]">
        {editing ? (
          <Input value={draftMeta} onChange={(e) => setDraftMeta(e.target.value)} placeholder="Ex: ≥ 95%" className="h-8 text-xs" />
        ) : meta ? (
          <span className="text-xs text-ink-2">{meta}</span>
        ) : (
          <span className="inline-flex items-center text-[10px] font-bold uppercase bg-[#FFF8E8] border border-[#EFD9A6] text-warn rounded-full px-2 py-0.5">
            A definir
          </span>
        )}
      </TableCell>
      <TableCell className="min-w-[110px]">
        {editing ? (
          <Input value={draftFreq} onChange={(e) => setDraftFreq(e.target.value)} className="h-8 text-xs" />
        ) : (
          <span className="text-xs text-ink-2">{frequencia}</span>
        )}
      </TableCell>
      <TableCell className="min-w-[130px]">
        {editing ? (
          <Input value={draftResp} onChange={(e) => setDraftResp(e.target.value)} placeholder="Ex: Diretor da unidade" className="h-8 text-xs" />
        ) : (
          <span className="text-xs text-ink-2">{responsavel || "—"}</span>
        )}
      </TableCell>
      <TableCell className="min-w-[170px]">
        <div className="flex items-center gap-1.5 flex-wrap">
          {editing ? (
            <>
              <Button size="sm" variant="outline" onClick={() => setEditing(false)}>
                <X size={12} /> Cancelar
              </Button>
              <Button size="sm" onClick={save}>
                <Save size={12} /> Salvar
              </Button>
            </>
          ) : (
            <>
              <Button variant="link" size="sm" onClick={startEdit} className="h-auto p-0 text-[10.5px] gap-1">
                <Pencil size={11} /> editar
              </Button>
              {aprovado ? (
                <span className="inline-flex items-center gap-1 text-[9.5px] font-extrabold uppercase bg-[#E9F8F3] border border-[#BFE9DA] text-back rounded-full px-2 py-0.5">
                  <Check size={10} /> Aprovado
                </span>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setAprovado(item.id, true, item.indicador)}
                  disabled={!meta}
                  title={!meta ? "Preencha a meta antes de aprovar" : "Aprovar este KPI"}
                  className={cn(
                    "h-auto gap-1 text-[9.5px] font-extrabold uppercase rounded-full px-2 py-0.5 border",
                    meta ? "bg-white border-line text-ink-2 hover:bg-soft" : "bg-soft border-line text-muted"
                  )}
                >
                  <ThumbsUp size={10} /> Aprovar
                </Button>
              )}
              {aprovado && (
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => setAprovado(item.id, false, item.indicador)}
                  className="gap-1 text-[9.5px] font-bold text-muted hover:text-brand-red w-auto"
                  title="Reabrir para edição"
                >
                  <RotateCcw size={10} />
                </Button>
              )}
              {onRemove && (
                <Button variant="ghost" size="icon-sm" onClick={onRemove} className="text-muted hover:text-brand-red" title="Remover KPI">
                  <Trash2 size={12} />
                </Button>
              )}
            </>
          )}
        </div>
      </TableCell>
    </TableRow>
  )
}

function AddKpiForm({ onAdd, onCancel }: { onAdd: (data: { indicador: string; fonte: string; frequenciaPadrao: string }) => void; onCancel: () => void }) {
  const [indicador, setIndicador] = useState("")
  const [fonte, setFonte] = useState("")
  const [frequencia, setFrequencia] = useState("Mensal")

  function submit() {
    if (!indicador.trim()) return
    onAdd({ indicador, fonte: fonte || "Adicionado manualmente", frequenciaPadrao: frequencia })
    setIndicador("")
    setFonte("")
    setFrequencia("Mensal")
    onCancel()
  }

  return (
    <div className="border border-line rounded-lg p-3 bg-soft/40 space-y-2 mt-2">
      <Input placeholder="Nome do indicador" value={indicador} onChange={(e) => setIndicador(e.target.value)} />
      <div className="grid grid-cols-2 gap-2">
        <Input placeholder="Fonte (opcional)" value={fonte} onChange={(e) => setFonte(e.target.value)} />
        <Input placeholder="Frequência" value={frequencia} onChange={(e) => setFrequencia(e.target.value)} />
      </div>
      <div className="flex gap-2 justify-end">
        <Button variant="outline" size="sm" onClick={onCancel}>
          Cancelar
        </Button>
        <Button size="sm" onClick={submit}>
          Adicionar
        </Button>
      </div>
    </div>
  )
}

const EMPTY_ITEMS: KpiItem[] = []

function KpiAreaSection({ area, subtitulo, items }: { area: string; subtitulo: string; items: KpiItem[] }) {
  const customItemsMap = useKpiStore((s) => s.customItems)
  const customItems = customItemsMap[area] ?? EMPTY_ITEMS
  const addCustomItem = useKpiStore((s) => s.addCustomItem)
  const removeCustomItem = useKpiStore((s) => s.removeCustomItem)
  const [adding, setAdding] = useState(false)

  const allItems = [...items, ...customItems]
  const customIds = new Set(customItems.map((i) => i.id))

  return (
    <section>
      <div className="flex items-center justify-between gap-2 mb-0.5">
        <h2 className="text-sm font-extrabold text-ink">{area}</h2>
        {!adding && (
          <Button variant="link" size="sm" onClick={() => setAdding(true)} className="h-auto p-0 text-[11px] gap-1">
            <Plus size={12} /> Adicionar KPI
          </Button>
        )}
      </div>
      <p className="text-[11px] text-muted mb-3">{subtitulo}</p>
      {allItems.length > 0 && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[220px]">Indicador</TableHead>
              <TableHead>Meta</TableHead>
              <TableHead>Frequência</TableHead>
              <TableHead>Responsável</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allItems.map((item) => (
              <KpiRow
                key={item.id}
                item={item}
                onRemove={customIds.has(item.id) ? () => removeCustomItem(area, item.id) : undefined}
              />
            ))}
          </TableBody>
        </Table>
      )}
      {adding && (
        <AddKpiForm onAdd={(data) => addCustomItem(area, data)} onCancel={() => setAdding(false)} />
      )}
    </section>
  )
}

export function MatrizKpis() {
  const overrides = useKpiStore((s) => s.overrides)
  const customItems = useKpiStore((s) => s.customItems)
  const totalCustom = Object.values(customItems).reduce((s, arr) => s + arr.length, 0)
  const totalKpis = KPI_AREAS.reduce((s, a) => s + a.items.length, 0) + totalCustom
  const aprovados = Object.values(overrides).filter((o) => o.aprovado).length

  return (
    <div className="max-w-6xl mx-auto my-8 px-4 pb-14">
      <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden mb-6">
        <div className="h-1.5 bg-gradient-to-r from-brand-red to-[#8f1116]" />
        <div className="p-6">
          <div className="flex items-center gap-3.5 mb-2">
            <FastLogo height={28} />
            <div className="border-l border-line pl-3.5">
              <div className="text-lg font-extrabold text-ink">Matriz de KPIs</div>
              <div className="text-xs text-muted">
                Plano Diretor 7.9, 8.13, 9.9, 10.14, 11.14 · Políticas Internas já publicadas — {aprovados}/{totalKpis} aprovados
              </div>
            </div>
          </div>
          <p className="text-sm text-ink-2 max-w-[75ch]">
            Indicadores extraídos do Plano Diretor e das políticas internas já publicadas neste portal. O nome do
            indicador e a fonte já estão definidos; <b>meta, frequência e responsável ficam editáveis</b> para
            preenchimento em reunião, com um botão de aprovação por item.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {KPI_AREAS.map((area) => (
          <KpiAreaSection key={area.area} area={area.area} subtitulo={area.subtitulo} items={area.items} />
        ))}
        <KpiAreaSection
          area={OUTROS_AREA}
          subtitulo="Indicadores adicionados manualmente, fora das categorias do Plano Diretor"
          items={[]}
        />
      </div>

      <p className="text-[11.5px] text-muted mt-6">
        Um KPI só pode ser aprovado depois que a meta for preenchida — indicadores sem meta ficam com o botão
        "Aprovar" desabilitado. Aprovar não apaga o histórico: use "reabrir" para revisar um item já aprovado.
      </p>

      <footer className="text-center text-[11px] text-muted mt-6">
        Grupo FAST · Matriz de KPIs · Documento interno e confidencial
      </footer>
    </div>
  )
}
