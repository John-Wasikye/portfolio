import type { Metadata } from "next";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { getCategories, getTechnologies, getVisibleProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse the full archive of software, data, AI, web, and mobile projects built by John Wasikye.",
};

export default function ProjectsPage() {
  const projects = getVisibleProjects();
  const categories = getCategories();
  const technologies = getTechnologies();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">Projects</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        The complete archive of things I&rsquo;ve built — search, filter, and sort to
        find what you&rsquo;re looking for.
      </p>

      <div className="mt-10">
        <ProjectsExplorer
          projects={projects}
          categories={categories}
          technologies={technologies}
        />
      </div>
    </div>
  );
}
