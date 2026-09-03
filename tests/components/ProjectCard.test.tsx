import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/lib/types";

const baseProject: Project = {
  slug: "test-project",
  name: "Test Project",
  shortDescription: "A project used for testing.",
  category: "Web",
  technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Vitest"],
  status: "live",
  visible: true,
  featured: true,
  displayOrder: 1,
};

describe("ProjectCard", () => {
  it("renders the project name, status, and a link to the detail page", () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getByRole("heading", { name: "Test Project" })).toBeInTheDocument();
    expect(screen.getByText("Live")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Test Project" })).toHaveAttribute(
      "href",
      "/projects/test-project"
    );
  });

  it("shows at most four technology badges", () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Tailwind CSS")).toBeInTheDocument();
    expect(screen.queryByText("Vitest")).not.toBeInTheDocument();
  });

  it("does not render Live Demo or GitHub links when the URLs are absent", () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.queryByRole("link", { name: /live demo/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /github/i })).not.toBeInTheDocument();
  });

  it("renders Live Demo and GitHub links when the URLs are present", () => {
    render(
      <ProjectCard
        project={{
          ...baseProject,
          liveUrl: "https://example.com",
          githubUrl: "https://github.com/example/example",
        }}
      />
    );
    expect(screen.getByRole("link", { name: /live demo/i })).toHaveAttribute(
      "href",
      "https://example.com"
    );
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/example/example"
    );
  });
});
