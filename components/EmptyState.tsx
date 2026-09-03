import { SearchX } from "lucide-react";

export function EmptyState({
  title = "No projects found.",
  description = "Try changing your search or filters.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border py-20 text-center">
      <SearchX size={32} className="text-muted" aria-hidden="true" />
      <p className="text-base font-medium text-foreground">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
