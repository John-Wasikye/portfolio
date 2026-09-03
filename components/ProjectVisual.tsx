import { BrainCircuit, Database, Globe, Smartphone, Folder } from "lucide-react";
import type { Project, ProjectMedia } from "@/lib/types";
import { cn } from "@/lib/utils";

const CATEGORY_STYLES: Record<string, { gradient: string; icon: typeof Folder }> = {
  AI: { gradient: "from-[#A99CE0] to-[#7A69C7]", icon: BrainCircuit },
  Data: { gradient: "from-[#5EC7B7] to-[#379E8F]", icon: Database },
  Web: { gradient: "from-[#8FB0E3] to-[#5580BE]", icon: Globe },
  Mobile: { gradient: "from-[#E39FB9] to-[#BD7292]", icon: Smartphone },
};

function CategoryPlaceholder({ project }: { project: Project }) {
  const style = CATEGORY_STYLES[project.category] ?? {
    gradient: "from-zinc-400 to-zinc-600",
    icon: Folder,
  };
  const Icon = style.icon;

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br text-white",
        style.gradient
      )}
    >
      <Icon size={40} strokeWidth={1.5} aria-hidden="true" />
      <span className="font-mono text-sm font-medium tracking-wide opacity-90">
        {project.name}
      </span>
    </div>
  );
}

function MediaItem({ media, name }: { media: ProjectMedia; name: string }) {
  switch (media.type) {
    case "youtube":
      return (
        <iframe
          className="h-full w-full"
          src={media.src}
          title={media.title ?? `${name} demo video`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    case "video":
      return (
        <video className="h-full w-full object-cover" controls preload="metadata">
          <source src={media.src} />
        </video>
      );
    case "image":
    case "gif":
    default:
      return (
        // eslint-disable-next-line @next/next/no-img-element -- media src is arbitrary user-provided data, not a static local asset
        <img
          src={media.src}
          alt={media.alt ?? name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      );
  }
}

export function ProjectVisual({
  project,
  aspect = "video",
}: {
  project: Project;
  aspect?: "video" | "wide";
}) {
  const primaryMedia = project.media?.[0];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-border bg-surface",
        aspect === "video" ? "aspect-video" : "aspect-[21/9]"
      )}
    >
      {primaryMedia ? (
        <MediaItem media={primaryMedia} name={project.name} />
      ) : (
        <CategoryPlaceholder project={project} />
      )}
    </div>
  );
}
