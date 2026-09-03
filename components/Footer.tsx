import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-sm font-semibold text-foreground">
          John<span className="text-accent">.</span>Wasikye
        </p>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link href="/projects" className="transition-colors hover:text-accent">
            Projects
          </Link>
          <Link href="/about" className="transition-colors hover:text-accent">
            About
          </Link>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-accent"
          >
            {siteConfig.email}
          </a>
        </nav>

        <p className="text-sm text-muted">
          © {year} {siteConfig.shortName}
        </p>
      </div>
    </footer>
  );
}
