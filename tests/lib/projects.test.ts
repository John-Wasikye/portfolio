import { describe, expect, it, vi } from "vitest";
import type { Project } from "@/lib/types";

const fixtureProjects: Project[] = [
  {
    slug: "alpha",
    name: "Alpha",
    shortDescription: "An AI project using Python and machine learning.",
    category: "AI",
    technologies: ["Python", "TensorFlow"],
    status: "live",
    visible: true,
    featured: true,
    displayOrder: 2,
    createdAt: "2024-01-01",
    updatedAt: "2024-06-01",
  },
  {
    slug: "beta",
    name: "Beta",
    shortDescription: "A web dashboard built with TypeScript.",
    category: "Web",
    technologies: ["TypeScript", "React"],
    status: "in-development",
    visible: true,
    featured: true,
    displayOrder: 1,
    createdAt: "2025-01-01",
    updatedAt: "2025-02-01",
  },
  {
    slug: "hidden",
    name: "Hidden Project",
    shortDescription: "Not ready to show yet.",
    category: "Web",
    technologies: ["TypeScript"],
    status: "in-development",
    visible: false,
    featured: false,
    displayOrder: 3,
  },
];

vi.mock("@/data/projects", () => ({ projects: fixtureProjects }));

const {
  getVisibleProjects,
  getFeaturedProjects,
  getProjectBySlug,
  getAllSlugs,
  getCategories,
  getTechnologies,
  filterProjects,
  sortProjects,
} = await import("@/lib/projects");

describe("getVisibleProjects", () => {
  it("excludes projects marked not visible", () => {
    const result = getVisibleProjects();
    expect(result.map((p) => p.slug)).toEqual(["alpha", "beta"]);
  });
});

describe("getFeaturedProjects", () => {
  it("returns only featured, visible projects sorted by displayOrder", () => {
    const result = getFeaturedProjects();
    expect(result.map((p) => p.slug)).toEqual(["beta", "alpha"]);
  });
});

describe("getProjectBySlug", () => {
  it("returns a visible project by slug", () => {
    expect(getProjectBySlug("alpha")?.name).toBe("Alpha");
  });

  it("returns undefined for a hidden project", () => {
    expect(getProjectBySlug("hidden")).toBeUndefined();
  });

  it("returns undefined for an unknown slug", () => {
    expect(getProjectBySlug("does-not-exist")).toBeUndefined();
  });
});

describe("getAllSlugs", () => {
  it("only includes visible project slugs", () => {
    expect(getAllSlugs()).toEqual(["alpha", "beta"]);
  });
});

describe("getCategories", () => {
  it("returns unique, sorted categories from visible projects", () => {
    expect(getCategories()).toEqual(["AI", "Web"]);
  });
});

describe("getTechnologies", () => {
  it("returns unique, sorted technologies from visible projects", () => {
    expect(getTechnologies()).toEqual(["Python", "React", "TensorFlow", "TypeScript"]);
  });
});

describe("filterProjects", () => {
  const all = getVisibleProjects();

  it("searches by name, description, category, and technology", () => {
    expect(filterProjects(all, { query: "python" }).map((p) => p.slug)).toEqual(["alpha"]);
    expect(filterProjects(all, { query: "dashboard" }).map((p) => p.slug)).toEqual(["beta"]);
    expect(filterProjects(all, { query: "nonexistent-term" })).toEqual([]);
  });

  it("filters by category", () => {
    expect(filterProjects(all, { category: "AI" }).map((p) => p.slug)).toEqual(["alpha"]);
    expect(filterProjects(all, { category: "all" })).toHaveLength(2);
  });

  it("filters by technology", () => {
    expect(filterProjects(all, { technology: "React" }).map((p) => p.slug)).toEqual(["beta"]);
  });

  it("filters by status", () => {
    expect(filterProjects(all, { status: "live" }).map((p) => p.slug)).toEqual(["alpha"]);
  });

  it("combines multiple filters", () => {
    expect(
      filterProjects(all, { category: "Web", technology: "React", status: "in-development" }).map(
        (p) => p.slug
      )
    ).toEqual(["beta"]);
    expect(
      filterProjects(all, { category: "AI", technology: "React" })
    ).toEqual([]);
  });
});

describe("sortProjects", () => {
  const all = getVisibleProjects();

  it("sorts curated by displayOrder", () => {
    expect(sortProjects(all, "curated").map((p) => p.slug)).toEqual(["beta", "alpha"]);
  });

  it("sorts newest first by createdAt", () => {
    expect(sortProjects(all, "newest").map((p) => p.slug)).toEqual(["beta", "alpha"]);
  });

  it("sorts oldest first by createdAt", () => {
    expect(sortProjects(all, "oldest").map((p) => p.slug)).toEqual(["alpha", "beta"]);
  });

  it("sorts by most recently updated", () => {
    expect(sortProjects(all, "updated").map((p) => p.slug)).toEqual(["beta", "alpha"]);
  });

  it("does not mutate the input array", () => {
    const copy = [...all];
    sortProjects(all, "newest");
    expect(all).toEqual(copy);
  });
});
