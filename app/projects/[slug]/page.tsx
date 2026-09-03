import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { StatusBadge } from "@/components/StatusBadge";
import { ProjectVisual } from "@/components/ProjectVisual";
import { getAllSlugs, getProjectBySlug } from "@/lib/projects";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.name,
    description: project.shortDescription,
    openGraph: {
      title: project.name,
      description: project.shortDescription,
      images: project.media?.[0]?.type === "image" ? [project.media[0].src] : undefined,
    },
  };
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border py-8 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-3 text-muted-foreground">{children}</div>
    </section>
  );
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const updated = formatDate(project.updatedAt);
  const created = formatDate(project.createdAt);

  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/projects"
        className="text-sm font-medium text-muted-foreground hover:text-accent"
      >
        ← All Projects
      </Link>

      <header className="mt-6 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {project.name}
          </h1>
          <StatusBadge status={project.status} />
        </div>
        <p className="max-w-2xl text-lg text-muted-foreground">
          {project.shortDescription}
        </p>
        {(created || updated) && (
          <p className="text-sm text-muted">
            {created && <span>Started {created}</span>}
            {created && updated && <span> · </span>}
            {updated && <span>Updated {updated}</span>}
          </p>
        )}

        <div className="flex flex-wrap gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
            >
              Live Project
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              GitHub Repository
              <FaGithub size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      </header>

      <div className="mt-10">
        <ProjectVisual project={project} aspect="wide" />
      </div>

      <div className="mt-4">
        {project.longDescription && (
          <Section title="What It Does">
            <p>{project.longDescription}</p>
          </Section>
        )}

        {project.features && project.features.length > 0 && (
          <Section title="Key Features">
            <ul className="list-disc space-y-1.5 pl-5">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </Section>
        )}

        <Section title="Technologies">
          <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-surface px-3 py-1 font-mono text-sm text-foreground ring-1 ring-inset ring-border"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Section>

        {project.metrics && project.metrics.length > 0 && (
          <Section title="Results">
            <dl className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="text-sm text-muted">{metric.label}</dt>
                  <dd className="text-xl font-semibold text-foreground">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </Section>
        )}

        {project.architecture && (
          <Section title="Architecture">
            <p>{project.architecture}</p>
          </Section>
        )}

        {project.technicalDetails && (
          <Section title="Implementation">
            <p>{project.technicalDetails}</p>
          </Section>
        )}

        {project.challenges && (
          <Section title="Challenges">
            <p>{project.challenges}</p>
          </Section>
        )}

        {project.lessonsLearned && (
          <Section title="Lessons Learned">
            <p>{project.lessonsLearned}</p>
          </Section>
        )}

        {project.futurePlans && (
          <Section title="Future Plans">
            <p>{project.futurePlans}</p>
          </Section>
        )}
      </div>
    </article>
  );
}
