import type { Project } from "@/lib/types";
import { ProjectCard } from "@/components/ProjectCard";
import { EmptyState } from "@/components/EmptyState";
import { cn } from "@/lib/utils";

export function ProjectGrid({
  projects,
  columns = 3,
}: {
  projects: Project[];
  columns?: 3 | 4;
}) {
  if (projects.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2",
        columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
      )}
      aria-label="Projects"
    >
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
