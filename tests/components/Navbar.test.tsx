import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Navbar } from "@/components/Navbar";

describe("Navbar", () => {
  it("links to the homepage via the wordmark", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "John.Wasikye" })).toHaveAttribute("href", "/");
  });

  it("renders primary navigation to Projects and About", () => {
    render(<Navbar />);
    const nav = screen.getByRole("navigation", { name: "Primary" });
    expect(nav.querySelector('a[href="/projects"]')).not.toBeNull();
    expect(nav.querySelector('a[href="/about"]')).not.toBeNull();
  });

  it("links out to GitHub and LinkedIn in new tabs", () => {
    render(<Navbar />);
    const github = screen.getByRole("link", { name: /github/i });
    const linkedin = screen.getByRole("link", { name: /linkedin/i });
    expect(github).toHaveAttribute("target", "_blank");
    expect(github).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(linkedin).toHaveAttribute("target", "_blank");
  });
});
