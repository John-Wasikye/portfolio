import { describe, expect, it } from "vitest";
import { getFeaturedProjects, getVisibleProjects, sortProjects } from "@/lib/projects";

describe("curated order", () => {
  it("lists the NFL Player Performance project first on the home page and in the archive", () => {
    expect(getFeaturedProjects()[0].slug).toBe("nfl-player-performance");
    expect(sortProjects(getVisibleProjects(), "curated")[0].slug).toBe("nfl-player-performance");
  });

  it("gives every project its own place in the order", () => {
    const orders = getVisibleProjects().map((project) => project.displayOrder);
    expect(new Set(orders).size).toBe(orders.length);
  });
});
