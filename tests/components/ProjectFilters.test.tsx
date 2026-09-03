import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ProjectFilters } from "@/components/ProjectFilters";

function renderFilters(overrides: Partial<React.ComponentProps<typeof ProjectFilters>> = {}) {
  const props = {
    query: "",
    onQueryChange: vi.fn(),
    categories: ["AI", "Web"],
    category: "all",
    onCategoryChange: vi.fn(),
    technologies: ["Python", "TypeScript"],
    technology: "all",
    onTechnologyChange: vi.fn(),
    status: "all",
    onStatusChange: vi.fn(),
    sort: "curated" as const,
    onSortChange: vi.fn(),
    ...overrides,
  };
  render(<ProjectFilters {...props} />);
  return props;
}

describe("ProjectFilters", () => {
  it("calls onQueryChange as the user types in the search box", async () => {
    const props = renderFilters();
    const user = userEvent.setup();
    await user.type(screen.getByLabelText(/search projects/i), "ai");
    expect(props.onQueryChange).toHaveBeenCalled();
  });

  it("calls onCategoryChange when a category pill is clicked", async () => {
    const props = renderFilters();
    const user = userEvent.setup();
    const categoryGroup = screen.getByRole("group", { name: "Categories" });
    await user.click(within(categoryGroup).getByRole("button", { name: "AI" }));
    expect(props.onCategoryChange).toHaveBeenCalledWith("AI");
  });

  it("calls onStatusChange when a status pill is clicked", async () => {
    const props = renderFilters();
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Live" }));
    expect(props.onStatusChange).toHaveBeenCalledWith("live");
  });

  it("marks the active category pill as pressed", () => {
    renderFilters({ category: "AI" });
    const categoryGroup = screen.getByRole("group", { name: "Categories" });
    expect(within(categoryGroup).getByRole("button", { name: "AI" })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    expect(within(categoryGroup).getByRole("button", { name: "All" })).toHaveAttribute(
      "aria-pressed",
      "false"
    );
  });

  it("calls onTechnologyChange and onSortChange when their selects change", async () => {
    const props = renderFilters();
    const user = userEvent.setup();
    await user.selectOptions(screen.getByLabelText(/technology/i), "Python");
    expect(props.onTechnologyChange).toHaveBeenCalledWith("Python");
    await user.selectOptions(screen.getByLabelText(/sort/i), "newest");
    expect(props.onSortChange).toHaveBeenCalledWith("newest");
  });
});
