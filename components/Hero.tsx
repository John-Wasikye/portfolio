import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getCategories } from "@/lib/projects";

function formatCategoryList(categories: string[]): string {
  if (categories.length <= 1) return categories.join("");
  return `${categories.slice(0, -1).join(", ")}, and ${categories[categories.length - 1]}`;
}

export function Hero() {
  const categories = getCategories();

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-28">
      <p className="font-mono text-sm font-medium text-accent">Hi, I&rsquo;m John Wasikye.</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {siteConfig.positioning}
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        I design and build software across {formatCategoryList(categories)} — real projects,
        shipped and working, not just described.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
        >
          View All Projects
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          About Me
        </Link>
      </div>
    </section>
  );
}
