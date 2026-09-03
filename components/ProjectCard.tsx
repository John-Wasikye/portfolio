import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/lib/types";
import { ProjectVisual } from "@/components/ProjectVisual";
import { StatusBadge } from "@/components/StatusBadge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-shadow hover:shadow-lg motion-reduce:transition-none">
      <div className="transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
        <ProjectVisual project={project} />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-foreground">
            <Link
              href={`/projects/${project.slug}`}
              className="after:absolute after:inset-0 after:content-['']"
            >
              {project.name}
            </Link>
          </h3>
          <StatusBadge status={project.status} />
        </div>

        <p className="line-clamp-2 text-sm text-muted-foreground">
          {project.shortDescription}
        </p>

        <ul className="mt-1 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.technologies.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-background px-2 py-0.5 font-mono text-xs text-muted-foreground ring-1 ring-inset ring-border"
            >
              {tech}
            </li>
          ))}
        </ul>

        {(project.liveUrl || project.githubUrl) && (
          <div className="relative z-10 mt-3 flex items-center gap-4 pt-1 text-sm font-medium">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-accent hover:underline"
              >
                Live Demo
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground hover:underline"
              >
                GitHub
                <FaGithub size={14} aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
