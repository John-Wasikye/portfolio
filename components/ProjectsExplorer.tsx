"use client";

import { useMemo, useState } from "react";
import type { Project, SortOption } from "@/lib/types";
import { filterProjects } from "@/lib/projects";
import { ProjectFilters } from "@/components/ProjectFilters";
import { ProjectGrid } from "@/components/ProjectGrid";

export function ProjectsExplorer({
  projects,
  categories,
  technologies,
}: {
  projects: Project[];
  categories: string[];
  technologies: string[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [technology, setTechnology] = useState("all");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState<SortOption>("curated");

  const filtered = useMemo(
    () => filterProjects(projects, { query, category, technology, status, sort }),
    [projects, query, category, technology, status, sort]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
      <aside>
        <ProjectFilters
          query={query}
          onQueryChange={setQuery}
          categories={categories}
          category={category}
          onCategoryChange={setCategory}
          technologies={technologies}
          technology={technology}
          onTechnologyChange={setTechnology}
          status={status}
          onStatusChange={setStatus}
          sort={sort}
          onSortChange={setSort}
        />
      </aside>

      <div>
        <p className="mb-4 text-sm text-muted" role="status" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </p>
        <ProjectGrid projects={filtered} />
      </div>
    </div>
  );
}
