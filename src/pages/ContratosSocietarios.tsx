import { FastLogo } from "@/components/shared/FastLogo"
import { cn } from "@/lib/utils"
import { SOCIETARIO_CATEGORIES, type SocietarioDoc } from "@/data/contratosSocietariosContent"

function DocCard({ doc }: { doc: SocietarioDoc }) {
  if (doc.status === "pendente") {
    return (
      <div className="rounded-xl border border-dashed border-line bg-soft/60 px-4 py-3.5">
        <b className="block text-sm font-extrabold text-ink">{doc.empresa}</b>
        <span className="block text-xs text-muted italic mt-1">aguardando documento</span>
        {doc.observacoes && (
          <div className="text-[11px] mt-2 bg-[#FFF8E8] border border-[#EFD9A6] rounded-lg px-2.5 py-1.5 text-ink-2 leading-relaxed">
            <b className="text-warn">Observação: </b>
            {doc.observacoes}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden border-t-[3px] border-t-oper">
      <div className="p-4">
        <div className="flex items-center justify-between gap-2 mb-1">
          <b className="text-sm font-extrabold text-ink">{doc.empresa}</b>
          <span className="text-[9.5px] font-extrabold uppercase tracking-wide bg-[#E9F8F3] text-back border border-[#BFE9DA] rounded-full px-2 py-0.5">
            Documento anexado
          </span>
        </div>
        {doc.razaoSocial && <div className="text-xs text-ink-2 font-bold mb-2">{doc.razaoSocial}</div>}

        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-x-4 gap-y-1.5 text-xs mb-2">
          {doc.nire && (
            <div>
              <b className="block text-[9.5px] font-extrabold uppercase tracking-wide text-muted">NIRE</b>
              {doc.nire}
            </div>
          )}
          {doc.cnpj && (
            <div>
              <b className="block text-[9.5px] font-extrabold uppercase tracking-wide text-muted">CNPJ</b>
              {doc.cnpj}
            </div>
          )}
          {doc.enquadramento && (
            <div>
              <b className="block text-[9.5px] font-extrabold uppercase tracking-wide text-muted">Enquadramento</b>
              {doc.enquadramento}
            </div>
          )}
        </div>

        {doc.sede && (
          <div className="text-xs mb-2">
            <b className="block text-[9.5px] font-extrabold uppercase tracking-wide text-muted">Sede</b>
            {doc.sede}
          </div>
        )}

        {doc.socios && doc.socios.length > 0 && (
          <div className="text-xs mb-2">
            <b className="block text-[9.5px] font-extrabold uppercase tracking-wide text-muted mb-0.5">Sócio(s)</b>
            <ul className="space-y-0.5">
              {doc.socios.map((s) => (
                <li key={s.nome}>
                  {s.nome} — {s.participacao}
                  {s.cpf && <span className="text-muted"> · CPF {s.cpf}</span>}
                </li>
              ))}
            </ul>
          </div>
        )}

        {doc.capitalSocial && (
          <div className="text-xs mb-2">
            <b className="block text-[9.5px] font-extrabold uppercase tracking-wide text-muted">Capital social</b>
            {doc.capitalSocial}
          </div>
        )}

        {doc.administracao && (
          <div className="text-xs mb-2">
            <b className="block text-[9.5px] font-extrabold uppercase tracking-wide text-muted">Administração</b>
            {doc.administracao}
          </div>
        )}

        {doc.objetoSocial && (
          <div className="text-xs mb-2">
            <b className="block text-[9.5px] font-extrabold uppercase tracking-wide text-muted">Objeto social</b>
            <span className="text-ink-2 leading-relaxed">{doc.objetoSocial}</span>
          </div>
        )}

        {doc.filiais && doc.filiais.length > 0 && (
          <div className="text-xs mb-2">
            <b className="block text-[9.5px] font-extrabold uppercase tracking-wide text-muted mb-0.5">
              Filiais ({doc.filiais.length})
            </b>
            <div className="flex flex-wrap gap-1.5">
              {doc.filiais.map((f) => (
                <span key={f} className="bg-soft border border-line rounded-full px-2 py-0.5 text-[11px]">
                  {f}
                </span>
              ))}
            </div>
          </div>
        )}

        {doc.ultimoAto && (
          <div className="text-xs mb-2 pt-2 border-t border-dashed border-line">
            <b className="block text-[9.5px] font-extrabold uppercase tracking-wide text-muted">Último ato registrado</b>
            <span className="text-ink-2">{doc.ultimoAto}</span>
          </div>
        )}

        {doc.observacoes && (
          <div className="text-xs mt-2 bg-[#FFF8E8] border border-[#EFD9A6] rounded-lg px-3 py-2 text-ink-2 leading-relaxed">
            <b className="text-warn">Observação: </b>
            {doc.observacoes}
          </div>
        )}
      </div>
    </div>
  )
}

export function ContratosSocietarios() {
  const total = SOCIETARIO_CATEGORIES.reduce((s, c) => s + c.docs.length, 0)
  const completos = SOCIETARIO_CATEGORIES.reduce((s, c) => s + c.docs.filter((d) => d.status === "completo").length, 0)

  return (
    <div className="max-w-6xl mx-auto my-8 px-4 pb-14">
      <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden mb-6">
        <div className="h-1.5 bg-gradient-to-r from-brand-red to-[#8f1116]" />
        <div className="p-6">
          <div className="flex items-center gap-3.5 mb-2">
            <FastLogo height={28} />
            <div className="border-l border-line pl-3.5">
              <div className="text-lg font-extrabold text-ink">Contratos Societários</div>
              <div className="text-xs text-muted">
                Contratos/estatutos sociais, alterações contratuais, atas e procurações — {completos} de {total}{" "}
                empresas com documento anexado
              </div>
            </div>
          </div>
          <p className="text-sm text-ink-2 max-w-[75ch]">
            Documentação societária de cada empresa do Ecossistema FAST. Envie os arquivos e eu organizo um bloco
            por empresa com objeto social, sócios, capital, administração e filiais.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {SOCIETARIO_CATEGORIES.map((cat) => (
          <section key={cat.label}>
            <h2 className="text-sm font-extrabold text-ink mb-3 flex items-center gap-2">
              {cat.label}
              <span className="text-[10.5px] font-bold text-muted">
                ({cat.docs.filter((d) => d.status === "completo").length}/{cat.docs.length})
              </span>
            </h2>
            <div className={cn("grid gap-3", "grid-cols-[repeat(auto-fit,minmax(280px,1fr))]")}>
              {cat.docs.map((doc) => (
                <DocCard key={doc.empresa} doc={doc} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="text-center text-[11px] text-muted mt-8">
        Grupo FAST · Contratos Societários · Documento interno e confidencial
      </footer>
    </div>
  )
}
