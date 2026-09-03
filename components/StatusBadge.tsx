import { STATUS_LABELS, type ProjectStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  live: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  "in-development": "bg-amber-50 text-amber-700 ring-amber-600/20",
  completed: "bg-blue-50 text-blue-700 ring-blue-600/20",
  archived: "bg-zinc-100 text-zinc-600 ring-zinc-500/20",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-xs font-medium ring-1 ring-inset",
        STATUS_STYLES[status]
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          status === "live" && "bg-emerald-500",
          status === "in-development" && "bg-amber-500",
          status === "completed" && "bg-blue-500",
          status === "archived" && "bg-zinc-400"
        )}
        aria-hidden="true"
      />
      {STATUS_LABELS[status]}
    </span>
  );
}
