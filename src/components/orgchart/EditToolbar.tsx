import { Button } from "@/components/ui/button"
import { useOrgStore } from "@/store/useOrgStore"

export function EditToolbar() {
  const editing = useOrgStore((s) => s.editing)
  const toggleEditing = useOrgStore((s) => s.toggleEditing)
  const exportCsv = useOrgStore((s) => s.exportCsv)

  return (
    <div className="flex gap-2 flex-wrap">
      <Button variant={editing ? "default" : "outline"} size="sm" onClick={toggleEditing}>
        ✎ {editing ? "Sair da edição" : "Editar cargos"}
      </Button>
      <Button variant="outline" size="sm" onClick={exportCsv}>
        ⬇ CSV
      </Button>
    </div>
  )
}
