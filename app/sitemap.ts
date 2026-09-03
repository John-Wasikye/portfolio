import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ["", "/projects", "/about"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${siteConfig.url}/projects/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
