import { Card } from "@/components/ui/card"

interface EmptyDocPlaceholderProps {
  title: string
  description: string
  items?: string[]
}

/** Placeholder "aguardando documento", reaproveitado em Contratos Internos/Societários,
 *  Matriz de Riscos e nas 12 abas de Políticas Internas ainda sem conteúdo. */
export function EmptyDocPlaceholder({ title, description, items }: EmptyDocPlaceholderProps) {
  return (
    <div className="max-w-3xl mx-auto my-8 px-4">
      <Card className="p-8 text-center">
        <h2 className="text-lg font-extrabold text-ink mb-2">{title}</h2>
        <p className="text-sm text-muted max-w-[60ch] mx-auto">{description}</p>
        {items && items.length > 0 && (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-3 mt-6 text-left">
            {items.map((name) => (
              <div key={name} className="rounded-xl border border-dashed border-line bg-soft/60 px-4 py-3.5">
                <b className="block text-sm font-extrabold text-ink">{name}</b>
                <span className="block text-xs text-muted italic mt-1">aguardando documento</span>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}
