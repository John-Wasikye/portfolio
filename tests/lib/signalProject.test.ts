import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { projects } from "@/data/projects";
import { getFeaturedProjects } from "@/lib/projects";

const signal = projects.find((project) => project.slug === "will-i-have-signal-out-there");

describe("the signal project", () => {
  it("links to the live site", () => {
    expect(signal?.liveUrl).toBe("https://signal.johnwasikye.com");
    expect(signal?.status).toBe("live");
  });

  it("describes what the site does now", () => {
    expect(signal?.shortDescription).toContain("AT&T, T-Mobile and Verizon claim coverage");
    expect(signal?.longDescription).toContain("walk it on a map of the real terrain");
    expect(signal?.longDescription).toContain("I have not checked its predictions in the field");
  });

  it("no longer describes the earlier version", () => {
    expect(signal?.longDescription).not.toContain("spot server");
    expect(signal?.longDescription).not.toContain("still under development");
    expect(signal?.technologies).toContain("dbt");
  });

  it("keeps the Terraform and deploy bullets before the new ones", () => {
    const features = signal?.features ?? [];
    const terrain = features.findIndex((f) => f.startsWith("A terrain horizon"));
    expect(features[terrain + 1]).toMatch(/^Terraform for separate dev and live environments/);
    expect(features[terrain + 2]).toMatch(/^Deploys from GitHub Actions with no stored AWS keys/);
    expect(features).toHaveLength(9);
    expect(features.some((f) => f.startsWith("A status file"))).toBe(false);
  });

  it("uses a screenshot of the site as its thumbnail", () => {
    const thumbnail = signal?.media?.[0];
    expect(thumbnail?.src).toBe("/projects/will-i-have-signal-out-there.jpg");
    expect(thumbnail?.alt).toContain("terrain map");
    expect(existsSync(path.join("public", thumbnail?.src ?? ""))).toBe(true);
  });

  it("no longer plans work that is already done", () => {
    expect(signal?.futurePlans).not.toContain("real trail data");
  });

  it("replaces the packet analyzer in Featured", () => {
    const featured = getFeaturedProjects().map((project) => project.slug);
    expect(featured).toContain("will-i-have-signal-out-there");
    expect(featured).not.toContain("network-packet-analyzer");
  });

  it("keeps the packet analyzer on the site", () => {
    const analyzer = projects.find((project) => project.slug === "network-packet-analyzer");
    expect(analyzer?.visible).toBe(true);
  });
});
