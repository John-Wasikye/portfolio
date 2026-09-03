import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import type { Project } from "@/lib/types";

const projects: Project[] = [
  {
    slug: "ai-project",
    name: "AI Project",
    shortDescription: "Uses Python for machine learning.",
    category: "AI",
    technologies: ["Python"],
    status: "live",
    visible: true,
    featured: true,
    displayOrder: 1,
  },
  {
    slug: "web-project",
    name: "Web Project",
    shortDescription: "A dashboard built with TypeScript.",
    category: "Web",
    technologies: ["TypeScript"],
    status: "in-development",
    visible: true,
    featured: false,
    displayOrder: 2,
  },
];

function renderExplorer() {
  render(
    <ProjectsExplorer projects={projects} categories={["AI", "Web"]} technologies={["Python", "TypeScript"]} />
  );
}

describe("ProjectsExplorer", () => {
  it("shows every project by default", () => {
    renderExplorer();
    expect(screen.getByRole("heading", { name: "AI Project" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Web Project" })).toBeInTheDocument();
    expect(screen.getByText("2 projects")).toBeInTheDocument();
  });

  it("filters by search query without a page reload", async () => {
    renderExplorer();
    const user = userEvent.setup();
    await user.type(screen.getByLabelText(/search projects/i), "python");
    expect(screen.getByRole("heading", { name: "AI Project" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Web Project" })).not.toBeInTheDocument();
    expect(screen.getByText("1 project")).toBeInTheDocument();
  });

  it("filters by category", async () => {
    renderExplorer();
    const user = userEvent.setup();
    const categoryGroup = screen.getByRole("group", { name: "Categories" });
    await user.click(within(categoryGroup).getByRole("button", { name: "Web" }));
    expect(screen.getByRole("heading", { name: "Web Project" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "AI Project" })).not.toBeInTheDocument();
  });

  it("combines category and technology filters down to zero results with an empty state", async () => {
    renderExplorer();
    const user = userEvent.setup();
    const categoryGroup = screen.getByRole("group", { name: "Categories" });
    await user.click(within(categoryGroup).getByRole("button", { name: "AI" }));
    await user.selectOptions(screen.getByLabelText(/technology/i), "TypeScript");
    expect(screen.getByText("No projects found.")).toBeInTheDocument();
  });
});
