# John.Wasikye — Developer Portfolio

A searchable archive of projects I've built, spanning AI, data, web, and mobile. Each project has its own page with a description, the tech used, and links to the code and live app where available.

Built with Next.js 16, React 19, and TypeScript. Fully static, no backend or database.

## Features

- **Featured + full archive** — a curated set of projects on the homepage, with the complete history at [`/projects`](/projects)
- **Search, filter, and sort** — by keyword, category, technology, and status, all client-side against local data
- **Variable-depth project pages** — a project can be a name, description, and a link, or a full write-up with architecture, challenges, and lessons learned; only sections with real content render
- **Data-driven categories and technologies** — filters are generated from the project data, not hardcoded
- **Accessible by default** — semantic landmarks, a skip link, visible focus states, keyboard-operable filters, and `prefers-reduced-motion` support
- **Fast** — every route is statically generated at build time; no client-side data fetching for content

## Tech stack

| | |
| --- | --- |
| Framework | [Next.js](https://nextjs.org) (App Router) |
| Language | TypeScript, strict mode |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 |
| Icons | [lucide-react](https://lucide.dev), [react-icons](https://react-icons.github.io/react-icons/) |
| Unit / component tests | [Vitest](https://vitest.dev), [React Testing Library](https://testing-library.com/react) |
| End-to-end tests | [Playwright](https://playwright.dev) |
| Analytics | [`@vercel/analytics`](https://vercel.com/docs/analytics) (no-op off Vercel) |

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/                  Routes (App Router)
  page.tsx              Homepage
  projects/             Archive (/projects) and detail pages (/projects/[slug])
  about/                About page
components/           UI components (cards, filters, nav, footer, ...)
lib/                  Data access, filtering/sorting logic, site config, types
data/projects.ts      All project content — the site's only content source
tests/                Vitest + React Testing Library specs
e2e/                  Playwright specs
```

## Adding a project

Every project on the site comes from one file: [`data/projects.ts`](./data/projects.ts). To add one, append an object to the `projects` array — no other file needs to change:

```ts
{
  slug: "my-project",        // becomes the URL: /projects/my-project
  name: "My Project",
  shortDescription: "One sentence describing what it does.",
  category: "Web",           // AI, Data, Web, Mobile, or any new category
  technologies: ["TypeScript", "Next.js"],
  status: "live",            // "live" | "in-development" | "completed" | "archived"
  visible: true,             // false hides it everywhere without deleting the data
  featured: false,           // true surfaces it on the homepage
  displayOrder: 7,           // controls curated sort order (lower first)
  githubUrl: "https://github.com/you/my-project",   // optional
  liveUrl: "https://my-project.com",                 // optional
}
```

Everything else (`longDescription`, `media`, `features`, `metrics`, `architecture`, `technicalDetails`, `challenges`, `lessonsLearned`, `futurePlans`) is optional — a project detail page only renders the sections that have content. Full field reference in [`lib/types.ts`](./lib/types.ts).

If a project has no `media`, its card and detail page fall back to a generated placeholder instead of a broken image. Metrics and evidence should only ever reflect something real.

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

## Deployment

Standard Next.js app — deploys anywhere Node.js runs, no platform lock-in. For Vercel: import the repo at [vercel.com/new](https://vercel.com/new) and set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) as an environment variable. Elsewhere: `npm run build` then `npm run start`, or containerize with a standard Next.js Dockerfile.

## Documentation

[`PRODUCT_AND_TECHNICAL_SPEC.md`](./PRODUCT_AND_TECHNICAL_SPEC.md) has the full product and technical spec this repo implements.
