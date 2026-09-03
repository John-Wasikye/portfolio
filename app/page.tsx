import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { ProjectGrid } from "@/components/ProjectGrid";
import { getFeaturedProjects } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <h1 className="sr-only">{siteConfig.title}</h1>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:pt-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
          >
            View All Projects
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <ProjectGrid projects={featuredProjects} />
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                About
              </h2>
              <p className="mt-3 text-muted-foreground">{siteConfig.about.short}</p>
              <Link
                href="/about"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
              >
                More about me
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="flex gap-3">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <FaGithub size={18} aria-hidden="true" />
                GitHub
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <FaLinkedin size={18} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
