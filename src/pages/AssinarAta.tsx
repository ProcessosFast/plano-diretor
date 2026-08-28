import { useState } from "react"
import { useParams } from "react-router-dom"
import { useMeetingsStore } from "@/store/useMeetingsStore"
import { FastLogo } from "@/components/shared/FastLogo"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, FileText } from "lucide-react"

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-")
  if (!y) return iso
  return `${d}/${m}/${y}`
}

function formatDateTime(iso: string) {
  const d = new Date(iso)
  return d.toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })
}

export function AssinarAta() {
  const { meetingId, token } = useParams<{ meetingId: string; token: string }>()
  const meetings = useMeetingsStore((s) => s.meetings)
  const signByToken = useMeetingsStore((s) => s.signByToken)
  const [justSigned, setJustSigned] = useState(false)

  const meeting = meetings.find((m) => m.id === meetingId)
  const signature = meeting?.signatures?.find((sig) => sig.token === token)

  function handleSign() {
    if (!meetingId || !token) return
    const ok = signByToken(meetingId, token)
    if (ok) setJustSigned(true)
  }

  if (!meeting || !signature) {
    return (
      <div className="max-w-lg mx-auto my-16 px-4 text-center">
        <XCircle size={40} className="mx-auto text-brand-red mb-3" />
        <h1 className="text-lg font-extrabold text-ink mb-1">Link inválido</h1>
        <p className="text-sm text-muted">
          Este link de assinatura não corresponde a nenhuma ata ou participante cadastrado. Confira o link recebido ou
          fale com quem enviou.
        </p>
      </div>
    )
  }

  const signed = Boolean(signature.signedAt)

  return (
    <div className="max-w-lg mx-auto my-12 px-4 pb-14">
      <div className="flex items-center gap-3 mb-6">
        <FastLogo height={28} />
        <span className="text-xs font-extrabold uppercase tracking-wide text-muted border-l border-line pl-3">
          Assinatura de Ata
        </span>
      </div>

      <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-brand-red to-[#8f1116]" />
        <div className="p-6">
          <div className="flex items-center gap-2 text-muted text-xs font-bold mb-2">
            <FileText size={14} />
            {formatDate(meeting.date)} {meeting.time && `· ${meeting.time}`}
          </div>
          <h1 className="text-lg font-extrabold text-ink mb-1">{meeting.title}</h1>
          {meeting.pauta && (
            <p className="text-xs text-ink-2 whitespace-pre-line mt-3 pt-3 border-t border-dashed border-line">
              {meeting.pauta}
            </p>
          )}

          <div className="mt-5 pt-5 border-t border-line">
            <p className="text-xs text-muted mb-3">
              Você está assinando esta ata como <b className="text-ink">{signature.name}</b>. Este link é pessoal —
              não compartilhe com outros participantes.
            </p>

            {signed || justSigned ? (
              <div className="flex items-center gap-2.5 rounded-xl border border-[#BFE9DA] bg-[#E9F8F3] px-4 py-3">
                <CheckCircle2 size={20} className="text-back shrink-0" />
                <div className="text-sm text-ink-2">
                  <b className="text-ink">Assinado.</b>{" "}
                  {signature.signedAt && <span>Confirmado em {formatDateTime(signature.signedAt)}.</span>}
                </div>
              </div>
            ) : (
              <Button onClick={handleSign} className="w-full">
                Confirmar assinatura como {signature.name}
              </Button>
            )}
          </div>
        </div>
      </div>

      <p className="text-center text-[11px] text-muted mt-4">Grupo FAST · Portal de Governança e Compliance</p>
    </div>
  )
}
