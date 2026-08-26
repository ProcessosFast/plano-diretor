import { useState } from "react"
import { FastLogo } from "@/components/shared/FastLogo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { useMeetingsStore } from "@/store/useMeetingsStore"
import { useApprovalHistoryStore } from "@/store/useApprovalHistoryStore"
import { ACTION_STATUS_LABEL, type ActionItem, type ActionStatus, type Meeting } from "@/data/meetingsTypes"
import { cn } from "@/lib/utils"
import { Plus, Trash2, X, Pencil, FileText, Link as LinkIcon, Check, RotateCcw, ClipboardCheck, ListChecks, GripVertical } from "lucide-react"

const statusBadgeClass: Record<ActionStatus, string> = {
  pendente: "bg-[#FFF8E8] text-warn border-[#EFD9A6]",
  andamento: "bg-[#EAF2FA] text-oper border-[#C7DEF2]",
  concluido: "bg-[#E9F8F3] text-back border-[#BFE9DA]",
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-")
  if (!y) return iso
  return `${d}/${m}/${y}`
}

export function ReunioesComite() {
  const meetings = useMeetingsStore((s) => s.meetings)
  const [formOpen, setFormOpen] = useState(false)

  const sorted = [...meetings].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <div className="max-w-5xl mx-auto my-8 px-4 pb-14">
      <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden mb-6">
        <div className="h-1.5 bg-gradient-to-r from-brand-red to-[#8f1116]" />
        <div className="p-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <FastLogo height={30} />
            <div className="border-l border-line pl-4">
              <h1 className="text-lg font-extrabold text-ink">Reuniões do Comitê</h1>
              <p className="text-xs text-muted">
                Agenda de reuniões do Conselho Consultivo e da Diretoria — pauta, decisões e planos de ação.
              </p>
            </div>
          </div>
          <Button size="sm" onClick={() => setFormOpen(true)}>
            <Plus size={14} /> Nova reunião
          </Button>
        </div>
      </div>

      <PendingActionsSection meetings={sorted} />

      <div className="space-y-4">
        {sorted.length === 0 && (
          <div className="text-center text-sm text-muted py-14 border border-dashed border-line rounded-2xl">
            Nenhuma reunião registrada ainda.
          </div>
        )}
        {sorted.map((m) => (
          <MeetingCard key={m.id} meeting={m} />
        ))}
      </div>

      <ApprovalHistorySection />

      <NewMeetingDialog open={formOpen} onOpenChange={setFormOpen} />
    </div>
  )
}

function formatDateTime(iso: string) {
  const d = new Date(iso)
  return d.toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })
}

function ApprovalHistorySection() {
  const events = useApprovalHistoryStore((s) => s.events)

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2.5 mb-1">
        <div className="w-6.5 h-6.5 shrink-0 rounded-lg bg-ink text-white flex items-center justify-center">
          <ClipboardCheck size={14} />
        </div>
        <div>
          <h2 className="text-[17px] font-extrabold text-ink">Histórico de Aprovações</h2>
          <p className="text-xs text-muted">
            Registro automático de aprovações feitas na Matriz de KPIs, Matriz de SLAs e Mapa de Receitas — complementa as atas e relatórios do Conselho acima.
          </p>
        </div>
      </div>

      {events.length === 0 ? (
        <div className="text-center text-sm text-muted py-10 border border-dashed border-line rounded-2xl mt-3">
          Nenhuma aprovação registrada ainda.
        </div>
      ) : (
        <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden mt-3">
          <div className="divide-y divide-line">
            {events.map((e) => (
              <div key={e.id} className="flex items-center gap-3 px-4 py-2.5">
                <span
                  className={cn(
                    "shrink-0 w-6 h-6 rounded-full flex items-center justify-center",
                    e.action === "aprovado" ? "bg-[#E9F8F3] text-back" : "bg-[#FFF8E8] text-warn"
                  )}
                >
                  {e.action === "aprovado" ? <Check size={13} /> : <RotateCcw size={12} />}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-ink truncate">{e.item}</div>
                  <div className="text-[10.5px] text-muted">
                    {e.area} · {e.action === "aprovado" ? "aprovado" : "reaberto"} em {formatDateTime(e.timestamp)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function PendingActionsSection({ meetings }: { meetings: Meeting[] }) {
  const updateActionItem = useMeetingsStore((s) => s.updateActionItem)
  const [dragIndex, setDragIndex] = useState<number | null>(null)
  const [overIndex, setOverIndex] = useState<number | null>(null)

  const pending = meetings
    .flatMap((m) => m.actionItems.map((item) => ({ item, meeting: m })))
    .filter(({ item }) => item.status !== "concluido")
    .sort((a, b) => (a.item.order ?? 0) - (b.item.order ?? 0))

  function handleDrop(targetIndex: number) {
    if (dragIndex === null || dragIndex === targetIndex) {
      setDragIndex(null)
      setOverIndex(null)
      return
    }
    const reordered = [...pending]
    const [moved] = reordered.splice(dragIndex, 1)
    reordered.splice(targetIndex, 0, moved)
    reordered.forEach(({ item, meeting }, i) => updateActionItem(meeting.id, item.id, { order: i }))
    setDragIndex(null)
    setOverIndex(null)
  }

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2.5 mb-1">
        <div className="w-6.5 h-6.5 shrink-0 rounded-lg bg-brand-red text-white flex items-center justify-center">
          <ListChecks size={14} />
        </div>
        <div>
          <h2 className="text-[17px] font-extrabold text-ink">Planos de Ação a Realizar</h2>
          <p className="text-xs text-muted">
            Todos os itens pendentes ou em andamento de todas as reuniões, num só lugar — arraste pelo ⠿ para reordenar, clique no status para avançar, no lápis para editar.
          </p>
        </div>
      </div>

      {pending.length === 0 ? (
        <div className="text-center text-sm text-muted py-10 border border-dashed border-line rounded-2xl mt-3">
          Nenhum plano de ação pendente. Tudo concluído.
        </div>
      ) : (
        <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden mt-3">
          <div className="divide-y divide-line">
            {pending.map(({ item, meeting }, i) => (
              <ActionItemRow
                key={item.id}
                meetingId={meeting.id}
                item={item}
                meetingLabel={meeting.title}
                dnd={{
                  draggable: true,
                  isOver: overIndex === i && dragIndex !== i,
                  onDragStart: () => setDragIndex(i),
                  onDragOver: (e) => {
                    e.preventDefault()
                    setOverIndex(i)
                  },
                  onDrop: () => handleDrop(i),
                  onDragEnd: () => {
                    setDragIndex(null)
                    setOverIndex(null)
                  },
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

interface DndProps {
  draggable: boolean
  isOver: boolean
  onDragStart: () => void
  onDragOver: (e: React.DragEvent) => void
  onDrop: () => void
  onDragEnd: () => void
}

function ActionItemRow({
  meetingId,
  item,
  meetingLabel,
  dnd,
}: {
  meetingId: string
  item: ActionItem
  meetingLabel?: string
  dnd?: DndProps
}) {
  const updateActionItem = useMeetingsStore((s) => s.updateActionItem)
  const removeActionItem = useMeetingsStore((s) => s.removeActionItem)
  const setActionStatus = useMeetingsStore((s) => s.setActionStatus)
  const [editing, setEditing] = useState(false)
  const [desc, setDesc] = useState(item.description)
  const [responsible, setResponsible] = useState(item.responsible)
  const [deadline, setDeadline] = useState(item.deadline)

  function openEdit() {
    setDesc(item.description)
    setResponsible(item.responsible)
    setDeadline(item.deadline)
    setEditing(true)
  }

  function save() {
    if (!desc.trim()) return
    updateActionItem(meetingId, item.id, { description: desc, responsible, deadline })
    setEditing(false)
  }

  function cycleStatus() {
    const next: ActionStatus = item.status === "andamento" ? "pendente" : "andamento"
    setActionStatus(meetingId, item.id, next)
  }

  function toggleDone() {
    setActionStatus(meetingId, item.id, item.status === "concluido" ? "pendente" : "concluido")
  }

  if (editing) {
    return (
      <div className="border border-line rounded-lg px-3 py-2 bg-soft/40 space-y-2 m-px">
        <Textarea value={desc} onChange={(e) => setDesc(e.target.value)} rows={2} />
        <div className="grid grid-cols-2 gap-2">
          <Input placeholder="Responsável" value={responsible} onChange={(e) => setResponsible(e.target.value)} />
          <Input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        </div>
        <div className="flex gap-2 justify-end">
          <Button variant="outline" size="sm" onClick={() => setEditing(false)}>
            Cancelar
          </Button>
          <Button size="sm" onClick={save}>
            Salvar
          </Button>
        </div>
      </div>
    )
  }

  const done = item.status === "concluido"

  return (
    <div
      draggable={dnd?.draggable}
      onDragStart={dnd?.onDragStart}
      onDragOver={dnd?.onDragOver}
      onDrop={dnd?.onDrop}
      onDragEnd={dnd?.onDragEnd}
      className={cn(
        "flex items-center gap-2.5 border rounded-lg px-3 py-2 bg-soft/40 group",
        dnd?.isOver ? "border-brand-red border-dashed" : "border-line"
      )}
    >
      {dnd && (
        <GripVertical size={14} className="shrink-0 text-muted/60 hover:text-muted cursor-grab active:cursor-grabbing" />
      )}
      <button
        onClick={toggleDone}
        className={cn(
          "shrink-0 w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center transition-colors",
          done ? "bg-back border-back text-white" : "border-line hover:border-back"
        )}
        title={done ? "Marcar como pendente" : "Marcar como concluído"}
      >
        {done && <Check size={12} strokeWidth={3} />}
      </button>
      <button
        onClick={cycleStatus}
        disabled={done}
        className={cn(
          "shrink-0 text-[9px] font-extrabold uppercase tracking-wide rounded-full px-2 py-0.5 border",
          statusBadgeClass[item.status],
          done && "opacity-60 cursor-default"
        )}
        title={done ? "Concluído" : "Clique para alternar Pendente / Em andamento"}
      >
        {ACTION_STATUS_LABEL[item.status]}
      </button>
      <div className="flex-1 min-w-0">
        <div className={cn("text-xs font-bold text-ink truncate", done && "line-through text-muted")}>
          {item.description}
        </div>
        {(meetingLabel || item.responsible || item.deadline) && (
          <div className="text-[10.5px] text-muted mt-0.5">
            {meetingLabel && <span>{meetingLabel}</span>}
            {meetingLabel && (item.responsible || item.deadline) && <span> · </span>}
            {item.responsible && <span>Responsável: {item.responsible}</span>}
            {item.responsible && item.deadline && <span> · </span>}
            {item.deadline && <span>Prazo: {formatDate(item.deadline)}</span>}
          </div>
        )}
      </div>
      <div className="shrink-0 flex items-center gap-0.5 opacity-0 group-hover:opacity-100">
        <button onClick={openEdit} className="text-muted hover:text-ink p-0.5" title="Editar item">
          <Pencil size={13} />
        </button>
        <button
          onClick={() => removeActionItem(meetingId, item.id)}
          className="text-muted hover:text-brand-red p-0.5"
          title="Remover item"
        >
          <X size={13} />
        </button>
      </div>
    </div>
  )
}

function MeetingCard({ meeting }: { meeting: Meeting }) {
  const removeMeeting = useMeetingsStore((s) => s.removeMeeting)
  const addActionItem = useMeetingsStore((s) => s.addActionItem)
  const reorderActionItems = useMeetingsStore((s) => s.reorderActionItems)
  const addAta = useMeetingsStore((s) => s.addAta)
  const removeAta = useMeetingsStore((s) => s.removeAta)
  const [addingAction, setAddingAction] = useState(false)
  const [dragIndex, setDragIndex] = useState<number | null>(null)
  const [overIndex, setOverIndex] = useState<number | null>(null)
  const [editOpen, setEditOpen] = useState(false)
  const [desc, setDesc] = useState("")
  const [responsible, setResponsible] = useState("")
  const [deadline, setDeadline] = useState("")
  const [addingAta, setAddingAta] = useState(false)
  const [ataTitulo, setAtaTitulo] = useState("")
  const [ataData, setAtaData] = useState("")
  const [ataLink, setAtaLink] = useState("")
  const [ataObs, setAtaObs] = useState("")
  const atas = meeting.atas ?? []

  function submitAction() {
    const items = desc
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
    if (items.length === 0) return
    items.forEach((description) => {
      addActionItem(meeting.id, { description, responsible, deadline, status: "pendente" })
    })
    setDesc("")
    setResponsible("")
    setDeadline("")
    setAddingAction(false)
  }

  function submitAta() {
    if (!ataTitulo.trim()) return
    addAta(meeting.id, { titulo: ataTitulo, data: ataData, link: ataLink, observacao: ataObs })
    setAtaTitulo("")
    setAtaData("")
    setAtaLink("")
    setAtaObs("")
    setAddingAta(false)
  }

  return (
    <div className="rounded-2xl border border-line bg-white shadow-card p-5">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-extrabold bg-ink text-white rounded-full px-2.5 py-1">
              {formatDate(meeting.date)} {meeting.time && `· ${meeting.time}`}
            </span>
          </div>
          <h3 className="text-base font-extrabold text-ink">{meeting.title}</h3>
          {meeting.participants && (
            <p className="text-xs text-muted mt-0.5">
              <b className="text-ink-2 font-bold">Participantes:</b> {meeting.participants}
            </p>
          )}
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={() => setEditOpen(true)}
            className="text-muted hover:text-ink p-1"
            title="Editar reunião"
          >
            <Pencil size={15} />
          </button>
          <button
            onClick={() => removeMeeting(meeting.id)}
            className="text-muted hover:text-brand-red p-1"
            title="Remover reunião"
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>

      {meeting.pauta && (
        <div className="mt-3 pt-3 border-t border-dashed border-line">
          <div className="text-[10px] font-extrabold uppercase tracking-wide text-muted mb-1">Pauta</div>
          <p className="text-sm text-ink-2 whitespace-pre-line">{meeting.pauta}</p>
        </div>
      )}

      {meeting.decisions && (
        <div className="mt-3 pt-3 border-t border-dashed border-line">
          <div className="text-[10px] font-extrabold uppercase tracking-wide text-muted mb-1">Decisões</div>
          <p className="text-sm text-ink-2 whitespace-pre-line">{meeting.decisions}</p>
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-line">
        <div className="flex items-center justify-between mb-2">
          <div className="text-[10px] font-extrabold uppercase tracking-wide text-muted">Plano de ação</div>
          {!addingAction && (
            <button
              onClick={() => setAddingAction(true)}
              className="text-[11px] font-bold text-brand-red flex items-center gap-1 hover:underline"
            >
              <Plus size={12} /> item
            </button>
          )}
        </div>

        {meeting.actionItems.length === 0 && !addingAction && (
          <p className="text-xs text-muted italic">Nenhum item registrado.</p>
        )}

        <div className="space-y-1.5">
          {meeting.actionItems.map((item, i) => (
            <ActionItemRow
              key={item.id}
              meetingId={meeting.id}
              item={item}
              dnd={{
                draggable: true,
                isOver: overIndex === i && dragIndex !== i,
                onDragStart: () => setDragIndex(i),
                onDragOver: (e) => {
                  e.preventDefault()
                  setOverIndex(i)
                },
                onDrop: () => {
                  if (dragIndex !== null && dragIndex !== i) reorderActionItems(meeting.id, dragIndex, i)
                  setDragIndex(null)
                  setOverIndex(null)
                },
                onDragEnd: () => {
                  setDragIndex(null)
                  setOverIndex(null)
                },
              }}
            />
          ))}
        </div>

        {addingAction && (
          <div className="mt-2 border border-line rounded-lg p-3 bg-soft/40 space-y-2">
            <Textarea
              placeholder={"Descrição do item de ação — uma por linha para adicionar vários de uma vez"}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={3}
            />
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="Responsável" value={responsible} onChange={(e) => setResponsible(e.target.value)} />
              <Input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" size="sm" onClick={() => setAddingAction(false)}>
                Cancelar
              </Button>
              <Button size="sm" onClick={submitAction}>
                Adicionar
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-line">
        <div className="flex items-center justify-between mb-2">
          <div className="text-[10px] font-extrabold uppercase tracking-wide text-muted">Atas da reunião</div>
          {!addingAta && (
            <button
              onClick={() => setAddingAta(true)}
              className="text-[11px] font-bold text-brand-red flex items-center gap-1 hover:underline"
            >
              <Plus size={12} /> ata
            </button>
          )}
        </div>

        {atas.length === 0 && !addingAta && (
          <p className="text-xs text-muted italic">Nenhuma ata anexada a esta reunião ainda.</p>
        )}

        <div className="space-y-1.5">
          {atas.map((ata) => (
            <div
              key={ata.id}
              className="flex items-start gap-2.5 border border-line rounded-lg px-3 py-2 bg-soft/40 group"
            >
              <FileText size={14} className="shrink-0 text-muted mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-ink truncate">{ata.titulo}</div>
                <div className="text-[10.5px] text-muted mt-0.5 flex flex-wrap items-center gap-1.5">
                  {ata.data && <span>{formatDate(ata.data)}</span>}
                  {ata.link && (
                    <a
                      href={ata.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-brand-red hover:underline"
                    >
                      <LinkIcon size={10} /> abrir link
                    </a>
                  )}
                </div>
                {ata.observacao && <p className="text-[11px] text-ink-2 mt-1 whitespace-pre-line">{ata.observacao}</p>}
              </div>
              <button
                onClick={() => removeAta(meeting.id, ata.id)}
                className="shrink-0 opacity-0 group-hover:opacity-100 text-muted hover:text-brand-red p-0.5"
              >
                <X size={13} />
              </button>
            </div>
          ))}
        </div>

        {addingAta && (
          <div className="mt-2 border border-line rounded-lg p-3 bg-soft/40 space-y-2">
            <Input placeholder="Título da ata" value={ataTitulo} onChange={(e) => setAtaTitulo(e.target.value)} />
            <div className="grid grid-cols-2 gap-2">
              <Input type="date" value={ataData} onChange={(e) => setAtaData(e.target.value)} />
              <Input placeholder="Link (SharePoint, Drive...)" value={ataLink} onChange={(e) => setAtaLink(e.target.value)} />
            </div>
            <Textarea placeholder="Observação (opcional)" value={ataObs} onChange={(e) => setAtaObs(e.target.value)} />
            <div className="flex gap-2 justify-end">
              <Button variant="outline" size="sm" onClick={() => setAddingAta(false)}>
                Cancelar
              </Button>
              <Button size="sm" onClick={submitAta}>
                Anexar ata
              </Button>
            </div>
          </div>
        )}
      </div>

      <EditMeetingDialog open={editOpen} onOpenChange={setEditOpen} meeting={meeting} />
    </div>
  )
}

function EditMeetingDialog({
  open,
  onOpenChange,
  meeting,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  meeting: Meeting
}) {
  const updateMeeting = useMeetingsStore((s) => s.updateMeeting)
  const [date, setDate] = useState(meeting.date)
  const [time, setTime] = useState(meeting.time)
  const [title, setTitle] = useState(meeting.title)
  const [participants, setParticipants] = useState(meeting.participants)
  const [pauta, setPauta] = useState(meeting.pauta)
  const [decisions, setDecisions] = useState(meeting.decisions)

  function handleOpenChange(v: boolean) {
    if (v) {
      setDate(meeting.date)
      setTime(meeting.time)
      setTitle(meeting.title)
      setParticipants(meeting.participants)
      setPauta(meeting.pauta)
      setDecisions(meeting.decisions)
    }
    onOpenChange(v)
  }

  function submit() {
    if (!title.trim()) return
    updateMeeting(meeting.id, { date, time, title, participants, pauta, decisions })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Editar reunião</DialogTitle>
          <DialogDescription>Atualize a data, pauta, participantes ou decisões da reunião marcada.</DialogDescription>
        </DialogHeader>
        <div className="px-6 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-ink-2 mb-1 block">Data</label>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div>
              <label className="text-xs font-bold text-ink-2 mb-1 block">Horário</label>
              <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-ink-2 mb-1 block">Título</label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label className="text-xs font-bold text-ink-2 mb-1 block">Participantes</label>
            <Input value={participants} onChange={(e) => setParticipants(e.target.value)} />
          </div>
          <div>
            <label className="text-xs font-bold text-ink-2 mb-1 block">Pauta</label>
            <Textarea value={pauta} onChange={(e) => setPauta(e.target.value)} />
          </div>
          <div>
            <label className="text-xs font-bold text-ink-2 mb-1 block">Decisões</label>
            <Textarea value={decisions} onChange={(e) => setDecisions(e.target.value)} />
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <Button variant="outline" size="sm" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button size="sm" onClick={submit}>
              Salvar alterações
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function NewMeetingDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const addMeeting = useMeetingsStore((s) => s.addMeeting)
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const [time, setTime] = useState("11:00")
  const [title, setTitle] = useState("")
  const [participants, setParticipants] = useState("")
  const [pauta, setPauta] = useState("")
  const [decisions, setDecisions] = useState("")

  function submit() {
    if (!title.trim()) return
    addMeeting({ date, time, title, participants, pauta, decisions })
    setTitle("")
    setParticipants("")
    setPauta("")
    setDecisions("")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Nova reunião</DialogTitle>
          <DialogDescription>Registre a data, pauta e participantes da reunião.</DialogDescription>
        </DialogHeader>
        <div className="px-6 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-ink-2 mb-1 block">Data</label>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div>
              <label className="text-xs font-bold text-ink-2 mb-1 block">Horário</label>
              <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-ink-2 mb-1 block">Título</label>
            <Input
              placeholder="Ex: Reunião do Conselho Consultivo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="text-xs font-bold text-ink-2 mb-1 block">Participantes</label>
            <Input
              placeholder="Ex: Kleber, Josélio, Nicole, Guilherme, Priscila"
              value={participants}
              onChange={(e) => setParticipants(e.target.value)}
            />
          </div>
          <div>
            <label className="text-xs font-bold text-ink-2 mb-1 block">Pauta</label>
            <Textarea placeholder="Assuntos a tratar" value={pauta} onChange={(e) => setPauta(e.target.value)} />
          </div>
          <div>
            <label className="text-xs font-bold text-ink-2 mb-1 block">Decisões (opcional)</label>
            <Textarea placeholder="Preencher após a reunião" value={decisions} onChange={(e) => setDecisions(e.target.value)} />
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <Button variant="outline" size="sm" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button size="sm" onClick={submit}>
              Criar reunião
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
