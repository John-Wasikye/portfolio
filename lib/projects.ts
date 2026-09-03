import { projects } from "@/data/projects";
import type { Project, SortOption } from "@/lib/types";

export function getVisibleProjects(): Project[] {
  return projects.filter((project) => project.visible);
}

export function getFeaturedProjects(): Project[] {
  return getVisibleProjects()
    .filter((project) => project.featured)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug && project.visible);
}

export function getAllSlugs(): string[] {
  return getVisibleProjects().map((project) => project.slug);
}

export function getCategories(): string[] {
  const categories = new Set(getVisibleProjects().map((project) => project.category));
  return Array.from(categories).sort();
}

export function getTechnologies(): string[] {
  const technologies = new Set<string>();
  for (const project of getVisibleProjects()) {
    for (const tech of project.technologies) {
      technologies.add(tech);
    }
  }
  return Array.from(technologies).sort();
}

export interface ProjectFilters {
  query?: string;
  category?: string;
  technology?: string;
  status?: string;
  sort?: SortOption;
}

function matchesQuery(project: Project, query: string): boolean {
  const haystack = [
    project.name,
    project.shortDescription,
    project.longDescription ?? "",
    project.category,
    ...project.technologies,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query.toLowerCase());
}

export function filterProjects(allProjects: Project[], filters: ProjectFilters): Project[] {
  let result = allProjects;

  if (filters.query && filters.query.trim().length > 0) {
    result = result.filter((project) => matchesQuery(project, filters.query!.trim()));
  }

  if (filters.category && filters.category !== "all") {
    result = result.filter((project) => project.category === filters.category);
  }

  if (filters.technology && filters.technology !== "all") {
    result = result.filter((project) => project.technologies.includes(filters.technology!));
  }

  if (filters.status && filters.status !== "all") {
    result = result.filter((project) => project.status === filters.status);
  }

  return sortProjects(result, filters.sort ?? "curated");
}

export function sortProjects(allProjects: Project[], sort: SortOption): Project[] {
  const sorted = [...allProjects];

  switch (sort) {
    case "newest":
      return sorted.sort((a, b) => dateValue(b.createdAt) - dateValue(a.createdAt));
    case "oldest":
      return sorted.sort((a, b) => dateValue(a.createdAt) - dateValue(b.createdAt));
    case "updated":
      return sorted.sort(
        (a, b) => dateValue(b.updatedAt ?? b.createdAt) - dateValue(a.updatedAt ?? a.createdAt)
      );
    case "curated":
    default:
      return sorted.sort((a, b) => a.displayOrder - b.displayOrder);
  }
}

function dateValue(dateString?: string): number {
  if (!dateString) return 0;
  const time = new Date(dateString).getTime();
  return Number.isNaN(time) ? 0 : time;
}
