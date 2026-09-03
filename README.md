# John.Wasikye — Developer Portfolio

A project-first developer portfolio and long-term project archive, built with Next.js, TypeScript, and Tailwind CSS. See [`PRODUCT_AND_TECHNICAL_SPEC.md`](./PRODUCT_AND_TECHNICAL_SPEC.md) for the full product and technical spec this implements.

## Before you deploy

A few things use placeholder values and should be updated first:

1. **[`lib/site-config.ts`](./lib/site-config.ts)** — set `social.github` and `social.linkedin` to your real profile URLs, and confirm `email`.
2. **[`data/projects.ts`](./data/projects.ts)** — replace the sample projects with your real ones (see below). Remove or edit anything you don't want public.
3. **`.env.example`** — copy to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your production domain (used for canonical URLs, Open Graph tags, and the sitemap).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a project

Every project on the site comes from one file: [`data/projects.ts`](./data/projects.ts). To add one, append an object to the `projects` array — no other file needs to change:

```ts
{
  slug: "my-project",        // becomes the URL: /projects/my-project
  name: "My Project",
  shortDescription: "One sentence describing what it does.",
  category: "Web",           // AI, Data, Web, Mobile, or any new category you introduce
  technologies: ["TypeScript", "Next.js"],
  status: "live",            // "live" | "in-development" | "completed" | "archived"
  visible: true,             // false hides it everywhere without deleting the data
  featured: false,           // true surfaces it on the homepage
  displayOrder: 7,           // controls curated sort order (lower first)
  githubUrl: "https://github.com/you/my-project",   // optional
  liveUrl: "https://my-project.com",                 // optional
}
```

Everything else (`longDescription`, `media`, `features`, `metrics`, `architecture`, `technicalDetails`, `challenges`, `lessonsLearned`, `futurePlans`) is optional — a project detail page only renders the sections that have content, so a project can be as shallow or as deep as it deserves. Full field reference in [`lib/types.ts`](./lib/types.ts).

If a project has no `media`, its card and detail page show a generated placeholder instead of a broken image — never fabricate a screenshot or a metric that isn't real.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, strict mode |
| `npm run test` | Unit + component tests (Vitest + React Testing Library) |
| `npm run test:watch` | Same, in watch mode |
| `npm run test:e2e` | End-to-end tests (Playwright) — builds and serves the app first |

## Architecture notes

- **No backend, no database, no CMS.** Project data is a plain TypeScript file (`data/projects.ts`), imported directly by the pages that need it. Every page is statically generated at build time.
- **GitHub is not mirrored automatically.** Each project's `githubUrl`/`liveUrl` is set manually in the data file, so you control exactly what appears on the site.
- **Deployment-platform agnostic.** This is a standard Next.js app — it deploys to Vercel, but nothing depends on Vercel-only features. `@vercel/analytics` is a no-op when not running on Vercel.
- **Light theme only, desktop-first.** Dark mode and mobile-specific layouts are deferred by design (see the spec's Phase 2 / Non-Goals). Components avoid hardcoded pixel dimensions so that work isn't blocked later.
- **Accessibility is not deferred.** Semantic landmarks, a skip link, visible focus states, `aria-pressed` filter controls, and `prefers-reduced-motion` support are all in place from V1.

## Deploying

Any Node.js-compatible host works. For Vercel: push to a Git repository and import it at [vercel.com/new](https://vercel.com/new), setting `NEXT_PUBLIC_SITE_URL` as an environment variable. For anywhere else: `npm run build` then `npm run start`, or containerize it with a standard Next.js Dockerfile.
