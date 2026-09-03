# John.Wasikye — Personal Developer Portfolio

## Product & Technical Specification

**Document:** PRODUCT_AND_TECHNICAL_SPEC.md
**Version:** 1.0
**Status:** V1 Specification
**Owner:** John Wasikye
**Primary Purpose:** Project-first developer portfolio and long-term project archive

## 1. Executive Summary

Build a modern, clean, project-first personal developer portfolio for John.Wasikye.

The primary purpose of the website is to showcase the software, data, AI, web, and mobile projects John builds over time.

The website should communicate one central idea:

> John builds real things that work in the real world.

The site is not intended to function primarily as a résumé website. Projects are the main content and the primary evidence of technical ability.

Visitors should be able to:

- Quickly understand what John builds.
- Browse featured projects.
- Browse the complete project archive.
- Search projects.
- Filter projects by category, technology, and status.
- Open detailed project pages.
- View screenshots, videos, GIFs, and other project evidence.
- Visit live projects.
- Visit GitHub repositories.
- Learn a small amount about John.
- Contact John through email or LinkedIn.
- Access John's GitHub and LinkedIn profiles.

The architecture should support a project archive that can grow throughout John's career rather than being limited to a small number of projects.

## 2. Product Vision

### 2.1 Core Vision

Create a professional developer portfolio that feels like a living archive of things John has built.

The website should emphasize:

1. Projects over résumé content.
2. Evidence over claims.
3. Working software over descriptions.
4. Technical breadth without unnecessary complexity.
5. A professional presentation that still feels personal.
6. Long-term scalability as the number of projects grows.

The site should feel like:

> "Here is what I build."

rather than:

> "Here is my résumé."

## 3. Goals

### 3.1 Primary Goals

**Goal 1 — Showcase real projects**
Projects should be the most prominent content on the website.

**Goal 2 — Make projects easy to discover**
Visitors should be able to search, filter, and sort projects.

**Goal 3 — Demonstrate technical breadth**
The archive should support categories such as:

- AI
- Data
- Web
- Mobile

The category system must be extensible.

**Goal 4 — Provide evidence**
Projects should support:

- Live applications
- GitHub repositories
- Screenshots
- GIFs
- Videos
- Architecture diagrams
- Metrics
- Technical explanations

**Goal 5 — Support a long-term archive**
The website must remain usable with:

- 10 projects
- 20 projects
- 50 projects
- 100+ projects

The initial website should not be architected around a fixed number of projects.

**Goal 6 — Maintain a personal identity**
The site should be professional enough for employers while still clearly belonging to John.

## 4. Non-Goals

The following are explicitly outside the primary scope of V1.

### 4.1 Résumé website

The site should not become a traditional résumé/CV website. A résumé download is not required in V1. GitHub and LinkedIn provide additional professional information.

### 4.2 Automatic GitHub portfolio mirroring

The website should not automatically display every GitHub repository. John intentionally controls which projects appear on the portfolio. GitHub is supporting evidence, not the source of truth for portfolio inclusion.

### 4.3 CMS

Do not build a sophisticated CMS in V1. Project information should be stored in a simple, developer-friendly data structure that is easy to edit.

### 4.4 Mobile-first implementation

Mobile optimization is intentionally deferred to Phase 2. The V1 implementation should focus on a polished desktop/laptop experience. The underlying code should still avoid unnecessarily desktop-specific assumptions.

### 4.5 Excessive infrastructure

Do not introduce unnecessary:

- Microservices
- Kubernetes
- Complex databases
- Message queues
- Infrastructure layers
- Backend services

unless an actual requirement justifies them. The portfolio itself should remain simple.

## 5. Target Users

**Primary Audience — Employers and recruiters**

The primary visitor should be able to understand John's technical work quickly. Within approximately 30 seconds, a visitor should understand:

- What John builds.
- The areas he works in.
- That he has working projects.
- Where to inspect those projects.
- Where to find his GitHub.
- Where to find his LinkedIn.
- How to contact him.

**Secondary Audience**

Other developers, collaborators, hiring managers, and people interested in John's work.

## 6. Desired Visitor Impression

After visiting the site, the visitor should think:

> "This person actually builds things."

Additional impressions should include:

- John has real working projects.
- John has experience across multiple technical areas.
- John understands the technologies he uses.
- John documents his work.
- John can build and ship software.
- I can inspect his code.
- I can try his projects.
- I can learn more about him easily.

Avoid creating the impression of:

- A generic portfolio template.
- A corporate consulting site.
- A résumé converted into a website.
- A flashy design experiment with little substance.

## 7. Brand

**Primary Identity:** John.Wasikye

The preferred domain/brand should be John.Wasikye. Domain availability should be verified before final domain selection. If unavailable, define an appropriate fallback domain while preserving the John.Wasikye identity.

## 8. Product Personality

The visual and written personality should balance:

- Professional
- Technical
- Modern
- Personal
- Confident
- Clean
- Minimal

The site should clearly feel like it belongs to John without becoming overly casual or experimental.

## 9. Project Philosophy

Projects are the central product of the website. Each project represents something John built, contributed to, experimented with, or completed.

Projects should not all be forced into the same presentation format. Some projects may require extensive technical documentation. Others may only need:

- Name
- Short description
- Image
- Technologies
- GitHub link
- Live link

The data model must therefore support variable-depth project pages.

## 10. Project Categories

Initial categories:

- AI
- Data
- Web
- Mobile

The architecture must allow additional categories later. Examples of future categories:

- Infrastructure
- DevOps
- Cloud
- Open Source
- Automation
- Research
- Security
- Systems

Categories should be data-driven rather than hardcoded throughout UI components.

## 11. Project Visibility Model

The portfolio is not an automatic mirror of GitHub. Each project should have independent portfolio configuration.

At minimum, the project state should distinguish: `visible`, `featured`, `displayOrder`.

Example:

```
Project A: visible: true,  featured: true,  displayOrder: 1
Project B: visible: true,  featured: false, displayOrder: 2
Project C: visible: false, featured: false, displayOrder: 3
```

This allows John to:

- Hide projects.
- Feature projects.
- Change homepage ordering.
- Keep projects in the underlying data without publishing them.

## 12. Project Status

Projects must support a status. Initial statuses:

- Live
- In Development
- Completed
- Archived

Status should:

1. Be visible on project cards.
2. Be visible on project detail pages.
3. Be filterable in the project archive.

The status system should be extensible.

## 13. Homepage

### 13.1 Primary Purpose

The homepage should immediately communicate John's work. It should not require visitors to read a large biography before seeing projects.

### 13.2 Homepage Structure

Recommended structure: Header (John.Wasikye / Projects / About / GitHub / LinkedIn) → Hero (short positioning statement) → Featured Projects (Project 1–4, View All Projects) → Short About Section → GitHub / LinkedIn → Footer.

## 14. Featured Projects

V1 should start with 4 featured projects. This is not a permanent limit — the implementation must support changing the number of featured projects later.

Featured projects are selected manually using the project's `featured` property. The homepage should not simply display the newest projects. John controls what is featured.

## 15. Projects Archive

Primary URL: `/projects`

The archive is the long-term home for all public projects.

### 15.1 Archive Requirements

The archive must support: Search, Category filtering, Technology filtering, Status filtering, Sorting, Project cards, Empty states, Large numbers of projects.

## 16. Project Search

Visitors should be able to search projects. Search should support relevant project fields such as: Project name, Short description, Technologies, Category, Potentially technical keywords.

Search should update the displayed project list without requiring a full page reload.

## 17. Project Filtering

Visitors should be able to combine filters — e.g. Category: AI + Technology: Python + Status: Live.

Filters should be data-driven. Technology options should be generated from the project data rather than requiring UI code changes every time a technology is added.

## 18. Project Sorting

Default sorting should be curated. John defines the default order using `displayOrder`.

Optional visitor sorting can include: Curated, Newest, Oldest, Recently Updated.

Sorting must not modify John's underlying curated ordering.

## 19. Project Cards

Project cards should be visual-first and minimal. Each card should primarily contain: Project image/thumbnail/GIF/short video, Project name, Status. The card should not become a mini résumé.

### 19.1 Card Interaction

Clicking the card should open `/projects/[slug]`. The card should also support direct actions — Live Demo, GitHub — visually distinguishable from clicking the card itself.

## 20. Project Media

Supported media should include: Static images, Screenshots, GIFs, Short videos, YouTube videos, Embedded demos where appropriate. Media is optional — a project should remain complete even if it has no video.

## 21. Project Detail Pages

URL pattern: `/projects/[slug]`

Each project should have a dedicated page balancing: immediate visual evidence, project identity, employer-friendly summary, and technical depth.

## 22. Project Detail Structure

Recommended structure: Project Name, Status, Short Description, Visual/Demo, What It Does, Key Features, Technologies, Results/Metrics, Technical Details (Architecture, Implementation, Challenges, Lessons Learned, Future Plans), Live Project, GitHub Repository.

Only sections with meaningful content should render.

## 23. Project Technical Depth

**Level 1 — Employer-friendly overview:** what the project does, why it exists, what technologies were used, whether it is live, where to try it.

**Level 2 — Technical details:** architecture, implementation, engineering decisions, challenges, tradeoffs, lessons learned, performance, infrastructure, data pipelines, AI/ML workflows.

Technical depth should be proportional to the project.

## 24. Metrics and Evidence

Projects may include measurable evidence (users, data processed, performance, accuracy, response times, uptime, downloads, cost reductions, throughput, model performance). Metrics must only be displayed when they are real and verifiable. **Never invent metrics.**

## 25. Architecture Diagrams

Optional. Only use when they improve understanding (system architecture, database architecture, data pipelines, AI/ML workflows, cloud architecture, service communication). Avoid adding diagrams purely for visual decoration.

## 26. Project Videos

Optional. YouTube may be used as the hosting platform and embedded into the project page. If no video exists, the page should use other available evidence.

## 27. About Page

URL: `/about`. Should contain a short introduction, profile photo, and contact information. It should not become a résumé replacement.

## 28. Contact

Primary contact methods: Email and LinkedIn. Accessible from the About page. LinkedIn should also be conveniently accessible from the global navigation.

## 29. Global Header

Should include John's name and important navigation (Projects, About, GitHub, LinkedIn). Remains simple and unobtrusive.

## 30. Footer

Repeats key navigation and identity (name, Projects/About/GitHub/LinkedIn, email, copyright). Should not become excessively large.

## 31. Visual Design

**Modern Developer:** strong typography, clear technical presentation, project-focused layouts, modern UI patterns, technical visual details.

**Hybrid Personal Design:** minimal foundation, one distinctive accent, subtle personality, professional presentation. Avoid generic portfolio-template appearance.

## 32. Theme

V1 uses light theme only. Dark mode is not required for V1 — do not spend development time on a theme toggle.

## 33. Color

Neutral/light base colors plus one strong accent color, used consistently for links, interactive states, selected filters, buttons, important UI elements, and focus states.

## 34. Typography

Highly readable, modern, professional, strong enough for large project headings, appropriate for technical content. Use a restrained type hierarchy; avoid excessive font combinations.

## 35. Animation

Moderate, purposeful animation (project hover effects, section reveal, page transitions, filter transitions, media movement, navigation transitions). Must not become gimmicky. All animations must respect `prefers-reduced-motion`.

## 36. Responsive Design

Responsive/mobile work is Phase 2. V1 should prioritize desktop/laptop/common large-screen layouts, but components should be reasonably structured, avoiding hardcoded dimensions or architectural decisions that would require a UI rewrite for mobile.

Phase 2 will include mobile layouts, mobile navigation, mobile project cards, mobile filtering, touch interactions, and mobile viewport testing.

## 37. Accessibility

Required even though mobile optimization is deferred: semantic HTML, keyboard navigation, visible focus states, accessible buttons/links, meaningful alt text, proper heading hierarchy, sufficient color contrast, form labels, accessible filter controls, accessible video controls, reduced-motion support. Interactive components must be usable without a mouse.

## 38. Data Model

```ts
type ProjectStatus = "live" | "in-development" | "completed" | "archived"

type ProjectMedia = {
  type: "image" | "gif" | "video" | "youtube"
  src: string
  alt?: string
  title?: string
}

type ProjectMetric = {
  label: string
  value: string
}

type Project = {
  slug: string
  name: string
  shortDescription: string
  longDescription?: string
  category: string
  technologies: string[]
  status: ProjectStatus
  visible: boolean
  featured: boolean
  displayOrder: number
  githubUrl?: string
  liveUrl?: string
  media?: ProjectMedia[]
  features?: string[]
  metrics?: ProjectMetric[]
  architecture?: string
  technicalDetails?: string
  challenges?: string
  lessonsLearned?: string
  futurePlans?: string
  createdAt?: string
  updatedAt?: string
}
```

This model is illustrative and may be refined during implementation.

## 39. Content Philosophy

At minimum, a project should communicate: what is it, what does it do, what technologies were used, what is its current status, can I try it, can I inspect the code. More detailed projects may additionally explain why it was built, how it works, architecture, difficult technical problems, engineering decisions, results, and lessons learned.

## 40. Project Data Storage

V1 should use code/data-based project configuration (e.g. `data/projects.ts` or an equivalent clean structure). A developer should be able to add a project without modifying multiple unrelated UI components. Do not build a database or CMS unless a real requirement emerges.

## 41. Media Storage

Images and static project media should be stored in the Git repository where practical. Videos should generally be hosted externally (e.g. YouTube) and embedded or linked from the project page. Media should be optimized appropriately for web delivery.

## 42. GitHub Integration

**V1:** Manual GitHub repository links per project. The portfolio should not automatically mirror all GitHub repositories.

**Future:** Automatic GitHub metadata integration (repository name, description, language, stars, forks, last updated date, repository URL) may be added later, but manual configuration would still be required for visibility, featured state, category, display order, live URL, screenshots, status, and detailed project content. Explicitly not required for V1.

## 43. Presentation/Data Separation

The presentation layer should not assume that GitHub is the project's source. Today: Manual Project Data → Website. Future: Manual Data + GitHub Metadata → Project Data → Website. This allows future data-source changes without rebuilding the entire presentation layer.

## 44. Recommended Technical Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS or an equally modern utility/component-based styling approach
- **Testing:** Vitest, React Testing Library, Playwright
- **Code Quality:** TypeScript strict mode, ESLint, Prettier

Use current stable releases at implementation time — do not blindly use outdated package versions.

## 45. Why Next.js

Modern React architecture, excellent routing, strong TypeScript support, good performance, static and dynamic rendering options, easy deployment, strong ecosystem adoption. Use the framework where it provides real value — the portfolio does not need to use every Next.js feature.

## 46. Backend

A dedicated backend is not required for V1. The portfolio primarily consists of project data + media + frontend UI. A Python backend such as FastAPI can be introduced later if the portfolio gains a real backend requirement (dynamic project APIs, authentication, external data processing, advanced analytics, content management, portfolio administration). Until such a requirement exists, avoid unnecessary backend complexity.

## 47. Python

Python should be used where appropriate in John's actual projects — the portfolio does not need Python simply to demonstrate that John knows Python. A project page should clearly communicate when a project uses Python, FastAPI, Django, machine learning, data engineering, or other Python technologies. The portfolio itself should use the simplest appropriate architecture.

## 48. Application Architecture

```
Next.js Application
├── Pages
├── Components
├── Project Data
├── Static Media
└── Utility Functions
```

Potential project structure: `app/` (page.tsx, about/, projects/, projects/[slug]/, layout.tsx), `components/` (Navbar, Hero, ProjectCard, ProjectGrid, ProjectFilters, ProjectMedia, Footer, ...), `data/projects.ts`, `lib/utils.ts`, `tests/`, `e2e/`. The final structure can differ if there is a clear architectural reason.

## 49. Routing

Required routes: `/` (homepage), `/projects` (archive), `/projects/[slug]` (individual project), `/about`.

## 50. URL Requirements

URLs should be short, readable, stable, human-friendly (e.g. `/projects/my-ai-project`). Avoid unnecessary implementation details. Project slugs should remain stable once published where possible.

## 51. Performance

Optimize images, avoid unnecessarily large JavaScript bundles, lazy-load media where appropriate, avoid unnecessary client-side rendering, use server/static rendering where appropriate, avoid loading large libraries for simple functionality, keep animations lightweight. The website should feel fast on normal desktop connections.

## 52. SEO

Not a major product objective, but basic technical SEO should still be implemented: page titles, meta descriptions, Open Graph metadata, semantic HTML, proper headings, clean URLs, sitemap, robots configuration, image alt text. Do not spend significant time on advanced SEO strategies.

## 53. Analytics

Lightweight, privacy-conscious analytics (page views, project page views, popular projects, referral sources, basic interaction metrics). Do not build a custom analytics backend for V1.

## 54. Security

Keep dependencies updated, do not expose secrets, do not commit API keys, validate external data where applicable, avoid unsafe HTML rendering, follow framework security recommendations, use HTTPS in production, keep deployment credentials outside the repository.

## 55. Environment Variables

Secrets and environment-specific configuration must use environment variables. Never commit API keys, tokens, passwords, or private credentials to Git. A documented `.env.example` should be provided if environment variables are required.

## 56. Testing Strategy

- **Unit tests** (Vitest): utility functions, project filtering, search behavior, sorting, project data transformations.
- **Component tests** (React Testing Library): project cards, project grids, filters, navigation, buttons, empty states, project detail components.
- **End-to-end tests** (Playwright): critical user journeys.

## 57. Required E2E Tests

At minimum: **Homepage** (loads, navigation works, featured projects appear, View All Projects works). **Projects archive** (loads, search works, category/technology/status filters work, sorting works, combined filters work). **Project detail** (card opens project page, title/status appear, live/GitHub links work when present, optional sections render correctly). **Navigation** (Home, Projects, About, GitHub, LinkedIn work correctly).

## 58. Accessibility Testing

Automated and manual accessibility checks where practical: keyboard navigation, focus visibility, semantic structure, accessible names, form controls, filter controls, reduced motion. The application should not produce obvious accessibility violations.

## 59. Error States

- **Project not found:** useful 404 page.
- **Empty search:** clear message ("No projects found. Try changing your search or filters.").
- **Missing media:** do not break the project page.
- **Missing GitHub URL:** do not render a broken GitHub button.
- **Missing live URL:** do not render a broken live-demo button.

Optional fields should never result in broken UI.

## 60. Loading States

Provide appropriate loading states where client-side functionality requires loading; avoid layout shifts; avoid unnecessary loading indicators for instant local data. The initial portfolio should preferably load project data without requiring an API request.

## 61. Empty States

Intentional and visually consistent (e.g. "No projects match your filters." / "No projects found. Try another search."). Do not leave blank areas with no explanation.

## 62. Deployment Strategy

Must remain deployment-platform agnostic. V1 may use a managed platform such as Vercel for simplicity, but must not depend on proprietary hosting functionality that would make migration unnecessarily difficult. Should remain capable of being deployed to Vercel, AWS, a self-managed VPS, Docker, or another Node.js-compatible hosting platform.

## 63. Vercel

A valid recommended V1 deployment option (simple Next.js deployment, Git-based deployments, preview environments, automatic builds, HTTPS, low operational overhead) — but not an architectural requirement. The application should remain portable.

## 64. Future AWS / Self-Hosted Projects

Future individual projects may require AWS, EC2, ECS, S3, RDS, Docker, Kubernetes, VPS infrastructure, custom servers, or other cloud services, and should be independently deployable. The portfolio simply links to them — its hosting platform must not dictate project infrastructure.

## 65. Infrastructure Philosophy

Do not add infrastructure complexity purely to make the portfolio appear more technical. A simple architecture is preferable when it is the appropriate architecture. Infrastructure-heavy engineering skills should be demonstrated through actual infrastructure projects, not the portfolio itself.

## 66. Development Workflow

Design/Specification → Implementation → Unit Tests → Component Tests → E2E Tests → Lint/Type Check → Build → Manual QA → Deployment. Every major feature should be tested before being considered complete.

## 67. Git Workflow

Small logical commits, descriptive commit messages, feature branches where appropriate, pull requests where appropriate, no secrets in Git, keep main branch deployable.

## 68. Code Quality

TypeScript strict mode, consistent formatting, ESLint, clear component boundaries, reusable components, avoidance of unnecessary duplication, meaningful naming, small understandable functions. Do not over-abstract simple components.

## 69. Component Philosophy

Components should represent meaningful UI behavior (Navbar, ProjectCard, ProjectGrid, ProjectFilters, ProjectMedia, ProjectDetail, Footer). Do not create hundreds of tiny components without a clear reason — favor readability over abstraction for abstraction's sake.

## 70. Client vs Server Components

Use server rendering by default where practical. Only introduce client-side components when interactive behavior requires them (search, filtering, sorting, interactive UI controls, animations requiring client state). Static project content should not unnecessarily become client-rendered.

## 71. Project Archive Scalability

At 4 projects: simple grid. At 20: filtering/search becomes important. At 50: efficient filtering, sorting, and visual hierarchy become important. At 100+: the architecture should still work without requiring a rewrite. Pagination or virtualization may be considered later if actual scale requires it — do not prematurely implement complex pagination systems.

## 72. Future Enhancements

GitHub integration (automatic repository metadata), advanced project management (a CMS if project volume makes code-based editing inconvenient), project statistics, more sophisticated infrastructure project pages (AWS, Docker, Kubernetes, Terraform, CI/CD, networking), advanced search (technologies, categories, descriptions, technical concepts), mobile optimization, dark mode (only with a genuine design reason), blog/technical writing, RSS.

## 73. Phase Plan

1. **Foundation** — Next.js, TypeScript, styling system, routing, project data structure, global layout, header, footer.
2. **Portfolio** — homepage, featured projects, project cards, projects archive, project detail pages, about page.
3. **Discovery** — search, category filtering, technology filtering, status filtering, sorting, empty states.
4. **Testing** — unit tests, component tests, e2e tests, accessibility checks, type checking, linting.
5. **Media & Polish** — project media, videos, animation, typography refinement, spacing, visual polish, performance optimization.
6. **Deployment** — deploy to the chosen hosting platform (Vercel is suitable for V1, but the application must remain portable).
7. **Mobile** — dedicated mobile implementation and testing.

## 74. Definition of Done

**Product:** homepage exists; featured projects displayed; projects archive exists; project detail pages exist; about page exists; GitHub/LinkedIn/live links work; projects can be searched, filtered (category/technology/status), and sorted; project visibility and featured state can be controlled.

**Design:** clean, modern, professional, with a recognizable personal identity; light theme; one consistent accent color; purposeful animation; reduced-motion behavior.

**Technical:** TypeScript strict mode passes; ESLint passes; formatting is consistent; production build succeeds; no unnecessary backend; project data is easy to edit; application is deployment-platform agnostic.

**Testing:** unit, component, and e2e tests pass; critical navigation flows, search/filter functionality, and project detail flows are tested; no known critical accessibility issues remain.

**Performance:** images optimized; no unnecessary large dependencies; pages load quickly; media lazy-loaded where useful.

**Deployment:** production deployment works; HTTPS enabled; environment configuration documented; no secrets committed.

## 75. Acceptance Criteria

**Journey 1 — Employer discovers the site:** Homepage → sees what John builds → featured projects → categories/technical areas → opens a project.

**Journey 2 — Employer investigates a project:** Project card → project detail → purpose → visual evidence → technologies → technical details → try live project → inspect GitHub.

**Journey 3 — Employer browses the entire archive:** Homepage → View All Projects → archive → search/filter → find relevant project → open it.

**Journey 4 — Employer wants to learn about John:** Homepage → About → short introduction → profile photo → contact information → LinkedIn.

## 76. Design Principles

1. Projects first.
2. Evidence over claims.
3. Minimal but not generic.
4. Personal but professional.
5. Simple architecture.
6. Long-term thinking.
7. Technology should serve the product.
8. Keep future options open (hosting provider, content source, project count, category list).

## 77. Final Architecture Summary

```
                         John.Wasikye
                              │
                         Next.js App
                              │
             ┌────────────────┼────────────────┐
             │                │                 │
          Homepage        Projects            About
             │                │
       Featured Work      Project Archive
                              │
                  ┌───────────┼───────────┐
                  │           │           │
                Search      Filters     Sorting
                              │
                        Project Data
                              │
                    ┌─────────┴─────────┐
                    │                   │
                  Media             Project Info
                    │                   │
             Images / Video       Tech / Status
                                        │
                              ┌─────────┴─────────┐
                              │                   │
                           GitHub             Live Demo

Deployment:
              Next.js Application
                       │
             ┌─────────┴─────────┐
             │                   │
          Vercel              AWS / VPS
         (V1 option)         (future option)
```

The portfolio itself should remain independent from the infrastructure of the projects it showcases.

## 78. Implementation Instruction

When implementing this specification: do not invent additional product requirements without documenting the reason; prefer simple solutions; do not introduce a backend/database/CMS unless required; do not automatically mirror GitHub repositories; preserve manual project visibility and featured controls; make project data easy to edit; write tests alongside functionality; do not sacrifice usability for technical complexity; keep deployment portable; prioritize desktop V1, treat mobile as Phase 2; do not turn the website into a résumé — projects should remain the central focus of the entire experience.

## 79. V1 Product Statement

The finished website should feel like:

> A clean, modern, living archive of things John Wasikye has built — with enough technical depth for engineers and enough clarity for employers.

The website should make it easy for someone to go from *Who is John?* → *What does he build?* → *What has he actually built?* → *Does it work?* → *How was it built?* → *Can I inspect it?* → *How can I contact him?* — without unnecessary friction.
