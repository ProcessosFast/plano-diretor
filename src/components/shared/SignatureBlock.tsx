interface SignatureItem {
  name: string
  role: string
}

interface SignatureBlockProps {
  intro: string
  items: SignatureItem[]
}

/** Bloco de "Aprovação" com linhas de assinatura, reaproveitado na Matriz de
 *  Alçadas e no final de cada política interna. */
export function SignatureBlock({ intro, items }: SignatureBlockProps) {
  return (
    <div className="rounded-2xl border border-line bg-white shadow-card p-6 mt-4">
      <p className="text-sm text-ink-2 mb-5">
        <b className="text-ink">Aprovação</b>
        <br />
        {intro}
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
        {items.map((item, i) => (
          <div key={i} className="border-t border-ink pt-2">
            <b className="block text-sm font-bold text-muted">{item.name}</b>
            <span className="block text-xs text-muted mt-1.5">{item.role}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
