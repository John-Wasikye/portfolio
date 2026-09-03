import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `A short introduction to ${siteConfig.name} and how to get in touch.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
        <div
          aria-hidden="true"
          className="flex size-28 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-orange-700 font-mono text-3xl font-semibold text-accent-foreground"
        >
          JW
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            {siteConfig.name}
          </h1>
          <p className="mt-2 text-muted-foreground">{siteConfig.about.intro}</p>
        </div>
      </div>

      <section className="mt-12 border-t border-border pt-8">
        <h2 className="text-lg font-semibold text-foreground">Get in touch</h2>
        <div className="mt-4 flex flex-col gap-3 text-sm">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex w-fit items-center gap-2.5 text-foreground transition-colors hover:text-accent"
          >
            <Mail size={18} aria-hidden="true" />
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-fit items-center gap-2.5 text-foreground transition-colors hover:text-accent"
          >
            <FaLinkedin size={18} aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-fit items-center gap-2.5 text-foreground transition-colors hover:text-accent"
          >
            <FaGithub size={18} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
