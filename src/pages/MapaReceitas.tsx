import { useState } from "react"
import { FastLogo } from "@/components/shared/FastLogo"
import { FlowDiagram } from "@/components/receitas/FlowDiagram"
import { ProgressMeter } from "@/components/receitas/ProgressMeter"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { useReceitasStore } from "@/store/useReceitasStore"
import { Pencil, Save, X, Check, ThumbsUp, RotateCcw } from "lucide-react"
import {
  FRONT_OFFICE_CARDS,
  OPERACIONAIS_CARDS,
  BACKOFFICE_CARDS,
  SUMMARY_ROWS,
  PENDING_ROWS,
  RATEIO_GAP_ROWS,
  TIPOS_RECEITA,
  TODO_ITEMS,
  type RevenueCard,
} from "@/data/receitasContent"

const accentClass: Record<RevenueCard["accent"], string> = {
  front: "border-t-front",
  oper: "border-t-oper",
  back: "border-t-back",
  fran: "border-t-fran",
  warn: "border-t-warn",
  muted: "border-t-muted",
}

function RevenueCardView({ card }: { card: RevenueCard }) {
  return (
    <div className={cn("rounded-2xl border border-line bg-white shadow-card overflow-hidden border-t-[3px]", accentClass[card.accent])}>
      <div className="px-4 pt-3.5 pb-2.5">
        <b className="block text-sm font-extrabold">{card.title}</b>
        <span className="block text-[11px] text-muted mt-0.5">{card.subtitle}</span>
      </div>
      <div className="px-4 pb-3.5">
        {card.kv.map((row) => (
          <div key={row.label} className="flex gap-2.5 py-1.5 border-t border-line text-xs">
            <div className="w-24 shrink-0 text-[10.5px] font-bold uppercase tracking-wide text-muted pt-0.5">
              {row.label}
            </div>
            <div className={cn("flex-1 text-ink-2", row.pend && "inline-flex items-center gap-1 text-[10px] font-bold uppercase bg-[#FFF8E8] border border-[#EFD9A6] text-warn rounded-full px-2 py-0.5 w-fit")}>
              {row.value}
            </div>
          </div>
        ))}
      </div>
      {card.note && (
        <div className="px-4 pb-3.5 -mt-1">
          <div className="text-[10.5px] text-warn italic bg-[#FFF8E8] border border-[#EFD9A6] rounded-lg px-2.5 py-1.5">
            {card.note}
          </div>
        </div>
      )}
    </div>
  )
}

export function MapaReceitas() {
  return (
    <div className="max-w-6xl mx-auto my-8 px-4 pb-14">
      {/* Cabeçalho */}
      <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden mb-6">
        <div className="h-1.5 bg-gradient-to-r from-brand-red via-front to-oper" />
        <div className="p-6">
          <div className="flex items-center gap-3.5 mb-2">
            <FastLogo height={28} />
            <div className="border-l border-line pl-3.5">
              <div className="text-lg font-extrabold text-ink">Mapa de Origem das Receitas por Unidade</div>
              <div className="text-xs text-muted">Item 6 · Plano de Trabalho de Implantação</div>
            </div>
          </div>
          <p className="text-sm text-ink-2 max-w-[70ch]">
            Detalha, por empresa, o tipo de receita, onde ela é registrada e como cada unidade é remunerada.
          </p>
        </div>
      </div>

      {/* Seção 1: princípio */}
      <Section n={1} title="Princípio geral de registro da receita" subtitle="Plano Diretor, 11.5">
        <p className="text-sm text-ink-2 mb-3">
          A regra que organiza todo o mapa: <b>quem vende nem sempre é quem registra a receita.</b>
        </p>
        <div className="grid grid-cols-3 gap-0 max-md:grid-cols-1 max-md:gap-2 items-stretch">
          <FlowStep label="Passo 1 · Front Office" title="Empresa Comercial vende" text="Promove, negocia e fecha a venda junto ao mercado." accent="front" />
          <Arrow />
          <FlowStep label="Passo 2 · Operacional" title="Empresa Operacional registra a receita" text="A receita do produto é sempre escriturada na operacional do canal." accent="oper" />
          <Arrow />
          <FlowStep label="Passo 3 · Front Office" title="Comercial recebe comissão" text="Percentual sobre a receita da respectiva unidade de negócio." accent="front" />
        </div>
        <div className="mt-3.5 pt-3 border-t border-dashed border-line flex gap-3 items-start">
          <span className="shrink-0 text-[9.5px] font-extrabold uppercase tracking-wide bg-back text-white rounded-full px-2.5 py-1 mt-0.5">
            Back Office
          </span>
          <p className="text-xs text-ink-2">
            As empresas especializadas não vendem ao mercado: prestam serviços internos e faturam{" "}
            <b>honorários e/ou rateio</b> contra as empresas do grupo, conforme aprovação da Holding.
          </p>
        </div>
      </Section>

      {/* Seção 2: tipos de receita */}
      <Section n={2} title="Tipos de receita do Ecossistema" subtitle="Plano Diretor, 11.4">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-3.5">
          {TIPOS_RECEITA.map((t) => (
            <div key={t.title} className={cn("rounded-2xl border border-line bg-white shadow-card border-t-[3px] px-4 py-3.5", accentClass[t.accent])}>
              <b className="block text-sm font-extrabold mb-1.5">{t.title}</b>
              <ul className="list-disc pl-4 space-y-0.5">
                {t.items.map((it) => (
                  <li key={it} className="text-xs text-ink-2">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Seção 6 (mapa de fluxo) */}
      <Section n={6} title="Mapa de fluxo — quem vende × onde a receita é registrada" subtitle="Cada linha liga a empresa comercial à operacional que escritura a receita">
        <FlowDiagram />
        <div className="flex flex-wrap gap-2.5 mt-3.5 justify-center">
          <LegendChip color="var(--color-front)" label="Empresa Comercial — remunerada por comissão" />
          <LegendChip color="var(--color-oper)" label="Empresa Operacional — registra a receita" />
          <LegendChip color="var(--color-fran)" label="Receita própria — franquia" />
          <LegendChip color="var(--color-warn)" label="A definir — linha tracejada" />
        </div>
      </Section>

      {/* Seção 3: front office cards */}
      <Section n={3} title="Empresas Comerciais — Front Office" subtitle="Simples Nacional · CNPJs distintos · Diretor-sócio remunerado por comissão (5.5)">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-3.5">
          {FRONT_OFFICE_CARDS.map((c) => <RevenueCardView key={c.title} card={c} />)}
        </div>
        <Note>
          <b>FAST Importação (Revisão 1):</b> tratada como unidade de negócio comercial. As importações são
          executadas pelas operacionais (MaxSteel, DCS-CM, LMS/SUPPLY); cabe à FAST Importação desenvolver
          fornecedores e promover comercialmente as operações — daí sua receita ser de promoção/serviço, e não
          de venda direta.
          <br />
          <b>Observação:</b> Modelo Embrionário, aguardando consolidação.
        </Note>
      </Section>

      {/* Seção 4: operacionais */}
      <Section n={4} title="Empresas Operacionais — onde a receita de produto é registrada" subtitle="Plano Diretor, 5.3 e 11.6">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-3.5">
          {OPERACIONAIS_CARDS.map((c) => <RevenueCardView key={c.title} card={c} />)}
        </div>
      </Section>

      {/* Seção 5: back office */}
      <Section n={5} title="Empresas Especializadas — Back Office" subtitle="Receita por serviço e rateio · 11.7 a 11.10 e 12.6">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-3.5">
          {BACKOFFICE_CARDS.map((c) => <RevenueCardView key={c.title} card={c} />)}
        </div>
        <Note>
          <b>Steel Conecta (5.7):</b> franquia de governança compartilhada. A FAST Franchising responde pela
          comercialização e expansão — <b>receita de franquia</b>; a Diretoria Técnica de FAST Obras e Homes
          responde por treinamento, certificação e padrões — <b>receita de serviço técnico via Engenharia</b>.
        </Note>
      </Section>

      {/* Seção 6 (quadro-resumo) */}
      <Section n={6} title="Quadro-resumo por canal" subtitle="Quem vende · onde a receita é registrada · sobre o que incide a comissão">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Canal</TableHead>
              <TableHead>Quem vende (Front)</TableHead>
              <TableHead></TableHead>
              <TableHead>Onde registra (Operacional)</TableHead>
              <TableHead>Base da comissão</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {SUMMARY_ROWS.map((r) => (
              <TableRow key={r.canal}>
                <TableCell className="font-extrabold text-[12.5px] text-ink">{r.canal}</TableCell>
                <TableCell className={cn("font-extrabold", r.interno ? "italic text-muted" : "text-front")}>{r.quemVende}</TableCell>
                <TableCell className="text-center text-muted font-black">→</TableCell>
                <TableCell className={cn("font-extrabold", r.own ? "text-fran" : "text-oper")}>{r.registraEm}</TableCell>
                <TableCell>
                  {r.pend ? (
                    <span className="inline-flex items-center text-[10px] font-bold uppercase bg-[#FFF8E8] border border-[#EFD9A6] text-warn rounded-full px-2 py-0.5">
                      {r.baseComissao}
                    </span>
                  ) : r.baseComissao}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex flex-wrap gap-2.5 mt-3.5 justify-center">
          <LegendChip color="var(--color-front)" label="Empresa Comercial — comissão" />
          <LegendChip color="var(--color-oper)" label="Empresa Operacional — registra a receita" />
          <LegendChip color="var(--color-back)" label="Empresa Especializada — serviço e rateio" />
          <LegendChip color="var(--color-fran)" label="Receita própria — franquia" />
          <LegendChip color="var(--color-warn)" label="A definir — pendente de validação" />
        </div>
      </Section>

      {/* Seção 7: pendências */}
      <Section n={7} title="Campos a preencher — dados reais" subtitle="Editável: registre aqui o que for decidido em reunião da Diretoria/Holding">
        <PendingTable />
      </Section>

      {/* Seção 8: regras de rateio não definidas */}
      <Section n={8} title="Regras de rateio ainda não definidas" subtitle="Editável: registre aqui a decisão tomada em reunião para cada critério de rateio">
        <p className="text-sm text-ink-2 mb-3">
          O Plano Diretor estabelece que os serviços do Back Office e o compartilhamento de ativos devem ser
          remunerados por <b>critérios de rateio aprovados pela Holding</b>, mas em nenhum desses casos o
          documento define a metodologia (base de cálculo, fórmula ou matriz por empresa).
        </p>
        <div className="flex flex-col gap-3">
          {RATEIO_GAP_ROWS.map((r) => (
            <RateioCard key={r.item} item={r.item} referencia={r.referencia} oQuePlanoDiz={r.oQuePlanoDiz} naoDefinido={r.naoDefinido} />
          ))}
        </div>
        <p className="text-[11.5px] text-muted mt-3">
          Distinto da tabela de percentuais de comissão/royalty (Seção 7): aqui o que falta não é o número, é a
          própria regra de cálculo do rateio.
        </p>
      </Section>

      {/* Seção 9: progresso */}
      <Section n={9} title="O que falta para 100%" subtitle="O que resta é dado numérico e validação, não desenho">
        <div className="rounded-2xl border border-line bg-white shadow-card p-6">
          <ProgressMeter before={55} now={70} label="Grau de conclusão do Item 6" />
          <ul className="mt-5 space-y-2 pt-3 border-t border-line">
            {TODO_ITEMS.map((item, i) => (
              <li key={i} className="flex gap-2.5 text-xs text-ink-2 leading-relaxed">
                <span className="w-3.5 h-3.5 rounded shrink-0 border-2 border-line mt-0.5" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <footer className="text-center text-[11px] text-muted mt-6">
        Fontes: <b className="text-ink-2">Plano Diretor do Ecossistema FAST</b> — Consolidado 1 a 16, Rev. 2 ·
        seções 5, 7, 8 e 11.
        <br />
        Documento interno e confidencial · Rascunho para validação da Controladoria e do Fiscal · 17/08/2026
      </footer>
    </div>
  )
}

function Section({ n, title, subtitle, children }: { n: number; title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section className="mt-6 first:mt-0">
      <div className="flex items-baseline gap-3 mb-3.5">
        <div className="w-6.5 h-6.5 shrink-0 rounded-lg bg-ink text-white flex items-center justify-center text-xs font-extrabold">
          {n}
        </div>
        <div>
          <h2 className="text-[17px] font-extrabold">{title}</h2>
          <p className="text-xs text-muted">{subtitle}</p>
        </div>
      </div>
      {children}
    </section>
  )
}

function FlowStep({ label, title, text, accent }: { label: string; title: string; text: string; accent: "front" | "oper" }) {
  return (
    <div className={cn("border border-line rounded-xl p-3.5 bg-soft/60 border-t-[3px]", accent === "front" ? "border-t-front" : "border-t-oper")}>
      <div className="text-[9.5px] font-extrabold uppercase tracking-wide text-muted">{label}</div>
      <b className="block text-sm font-extrabold mt-0.5 mb-1">{title}</b>
      <span className="block text-xs text-ink-2 leading-relaxed">{text}</span>
    </div>
  )
}

function Arrow() {
  return <div className="flex items-center justify-center text-xl font-black text-muted max-md:rotate-90 max-md:h-6">→</div>
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-soft/60 border border-line border-l-4 border-l-fran rounded-xl px-4 py-3 mt-3.5 text-xs text-ink-2 leading-relaxed">
      {children}
    </div>
  )
}

function PendingTable() {
  const pending = useReceitasStore((s) => s.pending)
  const setPending = useReceitasStore((s) => s.setPending)
  const setPendingAprovado = useReceitasStore((s) => s.setPendingAprovado)
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState<Record<string, { percentual: string; base: string }>>({})

  function resolved(unidade: string, fallbackPercentual: string, fallbackBase: string) {
    const o = pending[unidade]
    return { percentual: o?.percentual ?? fallbackPercentual, base: o?.base ?? fallbackBase }
  }

  function startEdit() {
    const d: Record<string, { percentual: string; base: string }> = {}
    for (const r of PENDING_ROWS) {
      d[r.unidade] = resolved(r.unidade, r.percentual, r.base)
    }
    setDraft(d)
    setEditing(true)
  }

  function save() {
    for (const unidade of Object.keys(draft)) {
      setPending(unidade, draft[unidade])
    }
    setEditing(false)
  }

  return (
    <>
      <div className="flex justify-end mb-2.5">
        {!editing ? (
          <Button size="sm" variant="outline" onClick={startEdit}>
            <Pencil size={13} /> Editar
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => setEditing(false)}>
              <X size={13} /> Cancelar
            </Button>
            <Button size="sm" onClick={save}>
              <Save size={13} /> Salvar
            </Button>
          </div>
        )}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Unidade</TableHead>
            <TableHead>% comissão / royalty</TableHead>
            <TableHead>Base de cálculo</TableHead>
            <TableHead>Validação</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {PENDING_ROWS.map((r) => {
            const val = resolved(r.unidade, r.percentual, r.base)
            const isDefined = val.percentual !== "A definir"
            const aprovado = !!pending[r.unidade]?.aprovado
            return (
              <TableRow key={r.unidade}>
                <TableCell className="font-extrabold text-ink">{r.unidade}</TableCell>
                <TableCell className="min-w-[140px]">
                  {editing ? (
                    <Input
                      value={draft[r.unidade]?.percentual ?? ""}
                      onChange={(e) => setDraft((d) => ({ ...d, [r.unidade]: { ...d[r.unidade], percentual: e.target.value } }))}
                      className="h-8 text-xs"
                    />
                  ) : isDefined ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase bg-[#E9F8F3] border border-[#BFE9DA] text-back rounded-full px-2 py-0.5">
                      <Check size={10} /> {val.percentual}
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-[10px] font-bold uppercase bg-[#FFF8E8] border border-[#EFD9A6] text-warn rounded-full px-2 py-0.5">
                      {val.percentual}
                    </span>
                  )}
                </TableCell>
                <TableCell className="min-w-[160px]">
                  {editing ? (
                    <Input
                      value={draft[r.unidade]?.base ?? ""}
                      onChange={(e) => setDraft((d) => ({ ...d, [r.unidade]: { ...d[r.unidade], base: e.target.value } }))}
                      className="h-8 text-xs"
                    />
                  ) : (
                    val.base
                  )}
                </TableCell>
                <TableCell>{r.validacao}</TableCell>
                <TableCell className="min-w-[120px]">
                  {aprovado ? (
                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 text-[9.5px] font-extrabold uppercase bg-[#E9F8F3] border border-[#BFE9DA] text-back rounded-full px-2 py-0.5">
                        <Check size={10} /> Aprovado
                      </span>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => setPendingAprovado(r.unidade, false, `${r.unidade} — comissão/royalty`)}
                        className="text-muted hover:text-brand-red w-auto"
                        title="Reabrir para edição"
                      >
                        <RotateCcw size={11} />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setPendingAprovado(r.unidade, true, `${r.unidade} — comissão/royalty`)}
                      disabled={!isDefined}
                      title={!isDefined ? "Preencha o percentual antes de aprovar" : "Aprovar"}
                      className={cn(
                        "h-auto gap-1 text-[9.5px] font-extrabold uppercase rounded-full px-2 py-0.5 border",
                        isDefined ? "bg-white border-line text-ink-2 hover:bg-soft" : "bg-soft border-line text-muted"
                      )}
                    >
                      <ThumbsUp size={10} /> Aprovar
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <p className="text-[11.5px] text-muted mt-2.5">
        {editing
          ? "Preencha com o que foi decidido em reunião e clique em Salvar — o campo fica marcado como definido."
          : "Campos ainda marcados \"A definir\" aguardam decisão de reunião da Diretoria/Holding — clique em Editar para registrar."}
      </p>
    </>
  )
}

function RateioCard({
  item,
  referencia,
  oQuePlanoDiz,
  naoDefinido,
}: {
  item: string
  referencia: string
  oQuePlanoDiz: string
  naoDefinido: string
}) {
  const rateio = useReceitasStore((s) => s.rateio)
  const setRateio = useReceitasStore((s) => s.setRateio)
  const setRateioAprovado = useReceitasStore((s) => s.setRateioAprovado)
  const saved = rateio[item]
  const [editing, setEditing] = useState(false)
  const [decisao, setDecisao] = useState(saved?.decisao ?? "")

  function startEdit() {
    setDecisao(saved?.decisao ?? "")
    setEditing(true)
  }

  function save(definido: boolean) {
    setRateio(item, { decisao, definido, aprovado: saved?.aprovado })
    setEditing(false)
  }

  const isDefined = saved?.definido
  const aprovado = !!saved?.aprovado

  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-white shadow-card overflow-hidden border-l-4",
        aprovado ? "border-l-back" : isDefined ? "border-l-oper" : "border-l-warn"
      )}
    >
      <div className="p-4">
        <div className="flex flex-wrap items-baseline gap-2 mb-1.5">
          <b className="text-sm font-extrabold text-ink">{item}</b>
          <span className="text-[10.5px] font-bold uppercase tracking-wide text-muted">{referencia}</span>
        </div>
        <p className="text-xs text-ink-2 leading-relaxed italic mb-2">{oQuePlanoDiz}</p>

        {!editing && (
          <div className="flex gap-2 items-start mb-2">
            <span
              className={cn(
                "shrink-0 text-[9.5px] font-extrabold uppercase tracking-wide rounded-full px-2.5 py-1 mt-0.5 border",
                aprovado
                  ? "bg-[#E9F8F3] border-[#BFE9DA] text-back"
                  : isDefined
                  ? "bg-[#EAF2FA] border-[#C7DEF2] text-oper"
                  : "bg-[#FFF8E8] border-[#EFD9A6] text-warn"
              )}
            >
              {aprovado ? "Aprovado" : isDefined ? "Pendente aprovação" : "Não definido"}
            </span>
            <p className="text-xs text-ink-2 leading-relaxed">{isDefined ? saved?.decisao : naoDefinido}</p>
          </div>
        )}

        {editing ? (
          <div className="space-y-2">
            <Textarea
              placeholder="Decisão tomada em reunião (metodologia, base de cálculo, percentual...)"
              value={decisao}
              onChange={(e) => setDecisao(e.target.value)}
            />
            <div className="flex gap-2 justify-end">
              <Button size="sm" variant="outline" onClick={() => setEditing(false)}>
                <X size={13} /> Cancelar
              </Button>
              <Button size="sm" onClick={() => save(!!decisao.trim())}>
                <Save size={13} /> Salvar
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 flex-wrap">
            <Button variant="link" size="sm" onClick={startEdit} className="h-auto p-0 text-[11px] gap-1">
              <Pencil size={12} /> {isDefined ? "Editar decisão" : "Registrar decisão da reunião"}
            </Button>
            {aprovado ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setRateioAprovado(item, false, item)}
                className="h-auto gap-1 text-[10px] font-bold text-muted hover:text-brand-red"
                title="Reabrir para edição"
              >
                <RotateCcw size={11} /> reabrir
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setRateioAprovado(item, true, item)}
                disabled={!isDefined}
                title={!isDefined ? "Registre a decisão antes de aprovar" : "Aprovar"}
                className={cn(
                  "h-auto gap-1 text-[9.5px] font-extrabold uppercase rounded-full px-2 py-0.5 border",
                  isDefined ? "bg-white border-line text-ink-2 hover:bg-soft" : "bg-soft border-line text-muted"
                )}
              >
                <ThumbsUp size={10} /> Aprovar
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function LegendChip({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-[11px] font-bold text-ink-2 bg-white border border-line rounded-full px-3 py-1.5">
      <i className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: color }} />
      {label}
    </span>
  )
}
