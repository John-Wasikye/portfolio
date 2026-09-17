import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-x-3 gap-y-2 px-4 py-3 sm:gap-x-6 sm:px-6 sm:py-0">
        <Link
          href="/"
          className="font-mono text-base font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          John<span className="text-accent">.</span>Wasikye
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-3 sm:gap-6">
          <ul className="flex items-center gap-3 text-sm font-medium text-foreground sm:gap-6">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 border-l border-border pl-3 sm:gap-4 sm:pl-6">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="John Wasikye on GitHub"
              className="text-muted transition-colors hover:text-accent"
            >
              <FaGithub size={20} aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="John Wasikye on LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <FaLinkedin size={20} aria-hidden="true" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
