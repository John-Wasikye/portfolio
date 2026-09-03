import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads, shows featured projects, and links to the archive", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeAttached();
    await expect(page.getByRole("heading", { name: "Featured Projects" })).toBeVisible();

    const featuredCards = page.getByRole("list", { name: "Projects" }).getByRole("listitem");
    await expect(featuredCards).not.toHaveCount(0);

    await page.getByRole("link", { name: "View All Projects" }).first().click();
    await expect(page).toHaveURL(/\/projects$/);
  });
});

test.describe("Projects archive", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/projects");
  });

  test("loads with the full project list", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Projects", level: 1 })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Signal" })).toBeVisible();
  });

  test("search narrows the results", async ({ page }) => {
    await page.getByLabel("Search projects").fill("Routine");
    await expect(page.getByRole("heading", { name: "Routine" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Signal" })).toHaveCount(0);
  });

  test("category filter narrows the results", async ({ page }) => {
    await page.getByRole("group", { name: "Categories" }).getByRole("button", { name: "Mobile" }).click();
    await expect(page.getByRole("heading", { name: "Routine" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Signal" })).toHaveCount(0);
  });

  test("technology filter narrows the results", async ({ page }) => {
    await page.getByLabel("Technology").selectOption("Expo");
    await expect(page.getByRole("heading", { name: "Routine" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Signal" })).toHaveCount(0);
  });

  test("status filter narrows the results", async ({ page }) => {
    await page.getByRole("group", { name: "Status" }).getByRole("button", { name: "Completed" }).click();
    await expect(page.getByRole("heading", { name: "Network Packet Analyzer" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Signal" })).toHaveCount(0);
  });

  test("sorting changes the order without changing the result count", async ({ page }) => {
    const countBefore = await page.getByRole("status").textContent();
    await page.getByLabel("Sort").selectOption("oldest");
    await expect(page.getByRole("status")).toHaveText(countBefore ?? "");
  });

  test("combined filters can produce an empty state", async ({ page }) => {
    await page.getByRole("group", { name: "Categories" }).getByRole("button", { name: "AI" }).click();
    await page.getByLabel("Technology").selectOption("Expo");
    await expect(page.getByText("No projects found.")).toBeVisible();
  });
});

test.describe("Project detail", () => {
  test("opens from a project card and shows core project info", async ({ page }) => {
    await page.goto("/projects");
    await page.getByRole("heading", { name: "Signal" }).click();
    await expect(page).toHaveURL(/\/projects\/signal$/);
    await expect(page.getByRole("heading", { name: "Signal", level: 1 })).toBeVisible();
    await expect(page.getByText("In Development")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Technologies" })).toBeVisible();
  });

  test("hides optional sections and buttons that have no data", async ({ page }) => {
    await page.goto("/projects/latticeboard");
    await expect(page.getByRole("link", { name: "Live Project" })).toHaveCount(0);
    await expect(page.getByRole("link", { name: "GitHub Repository" })).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Key Features" })).toHaveCount(0);
  });

  test("returns a 404 page for an unknown project slug", async ({ page }) => {
    const response = await page.goto("/projects/does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page.getByText("Page not found")).toBeVisible();
  });
});

test.describe("Navigation", () => {
  test("header links reach Home, Projects, and About", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Projects" }).click();
    await expect(page).toHaveURL(/\/projects$/);

    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL(/\/about$/);

    await page.getByRole("banner").getByRole("link", { name: "John.Wasikye", exact: true }).click();
    await expect(page).toHaveURL(/\/$/);
  });

  test("header exposes external GitHub and LinkedIn links", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Primary" });
    await expect(nav.getByRole("link", { name: /github/i })).toHaveAttribute("target", "_blank");
    await expect(nav.getByRole("link", { name: /linkedin/i })).toHaveAttribute("target", "_blank");
  });
});
