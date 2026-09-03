import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectGrid } from "@/components/ProjectGrid";
import type { Project } from "@/lib/types";

function makeProject(overrides: Partial<Project>): Project {
  return {
    slug: "p",
    name: "P",
    shortDescription: "desc",
    category: "Web",
    technologies: [],
    status: "live",
    visible: true,
    featured: false,
    displayOrder: 1,
    ...overrides,
  };
}

describe("ProjectGrid", () => {
  it("renders a card for every project", () => {
    render(
      <ProjectGrid
        projects={[
          makeProject({ slug: "one", name: "One" }),
          makeProject({ slug: "two", name: "Two" }),
        ]}
      />
    );
    expect(screen.getByRole("heading", { name: "One" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Two" })).toBeInTheDocument();
  });

  it("renders an empty state when there are no projects", () => {
    render(<ProjectGrid projects={[]} />);
    expect(screen.getByText("No projects found.")).toBeInTheDocument();
    expect(screen.getByText(/try changing your search or filters/i)).toBeInTheDocument();
  });
});
