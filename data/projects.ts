import type { Project } from "@/lib/types";

/**
 * Portfolio project data.
 *
 * This is the single source of truth for every project shown on the site.
 * To add a project, append an object to this array — no other file needs
 * to change. `slug` becomes the URL at /projects/[slug] and must be unique.
 *
 * `visible` controls whether a project appears anywhere on the public site.
 * `featured` controls whether it appears in the homepage's Featured section.
 * `displayOrder` controls curated sort order (lower numbers first).
 *
 * The entries below are placeholder sample projects so the site has real
 * content to render out of the box. Replace `githubUrl` / `liveUrl` with
 * real links, and swap in genuine screenshots, metrics, and write-ups
 * before publishing — never invent metrics or evidence.
 */
export const projects: Project[] = [
  {
    slug: "signal",
    name: "Signal",
    shortDescription:
      "An AI-powered document Q&A tool built on retrieval-augmented generation.",
    longDescription:
      "Signal lets you upload long technical documents and ask natural-language questions against them. It chunks and embeds documents, retrieves the most relevant passages for a query, and asks an LLM to answer strictly from that retrieved context so responses stay grounded in the source material.",
    category: "AI",
    technologies: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Next.js", "TypeScript"],
    status: "live",
    visible: true,
    featured: true,
    displayOrder: 1,
    features: [
      "Drag-and-drop document ingestion with automatic chunking",
      "Vector search over document embeddings",
      "Source-grounded answers with citations back to the original passage",
      "Conversation history per document",
    ],
    architecture:
      "A Next.js frontend talks to a FastAPI backend over a small REST API. Uploaded documents are chunked, embedded, and stored in Postgres using pgvector. At query time, the backend embeds the question, retrieves the top-k nearest chunks, and passes them to the LLM as grounding context before returning a cited answer to the client.",
    technicalDetails:
      "Chunking uses a sliding window with overlap to avoid splitting answers across chunk boundaries. Retrieval combines vector similarity with a lightweight keyword filter to reduce irrelevant matches on short, keyword-heavy queries.",
    challenges:
      "The hardest problem was keeping answers grounded — early versions occasionally answered from the model's general knowledge instead of the uploaded document. Tightening the prompt to require explicit citations, and rejecting answers with no supporting chunk, fixed most of it.",
    lessonsLearned:
      "Retrieval quality mattered far more than model choice. Most bad answers traced back to bad chunking or retrieval, not the LLM itself.",
    futurePlans: "Support multi-document reasoning and add a shareable read-only link per conversation.",
    createdAt: "2025-02-01",
    updatedAt: "2026-06-15",
  },
  {
    slug: "orbit-analytics",
    name: "Orbit Analytics",
    shortDescription:
      "A real-time data pipeline and dashboard for tracking product usage metrics.",
    longDescription:
      "Orbit ingests application events, aggregates them into rollups on a schedule, and serves a dashboard for exploring usage trends over time without querying raw event tables directly.",
    category: "Data",
    technologies: ["Python", "PostgreSQL", "FastAPI", "React", "Docker"],
    status: "completed",
    visible: true,
    featured: true,
    displayOrder: 2,
    features: [
      "Event ingestion API with schema validation",
      "Scheduled rollup jobs for daily/weekly aggregates",
      "Interactive dashboard with date-range filtering",
    ],
    architecture:
      "Events land in a raw Postgres table via a FastAPI ingestion endpoint. A scheduled worker aggregates raw events into rollup tables, which the dashboard queries directly for fast reads regardless of raw event volume.",
    challenges:
      "Rollup jobs needed to be idempotent so a failed and re-run job wouldn't double-count events. Rollups are computed by full recomputation of the affected time window rather than incrementally, which is simpler and easy to reason about.",
    createdAt: "2024-08-10",
    updatedAt: "2025-01-20",
  },
  {
    slug: "routine",
    name: "Routine",
    shortDescription: "A cross-platform habit-tracking app with offline-first sync.",
    longDescription:
      "Routine is a habit tracker that works fully offline and syncs across devices when a connection is available, so tracking a habit never depends on network status.",
    category: "Mobile",
    technologies: ["React Native", "TypeScript", "SQLite", "Expo"],
    status: "live",
    visible: true,
    featured: true,
    displayOrder: 3,
    features: [
      "Fully offline habit tracking backed by local SQLite",
      "Background sync with conflict resolution when back online",
      "Home screen widgets for quick logging",
    ],
    challenges:
      "Reconciling offline edits made on two devices before either had synced required a simple last-write-wins strategy per habit-entry, accepting the tradeoff in favor of implementation simplicity.",
    createdAt: "2025-05-01",
    updatedAt: "2025-11-02",
  },
  {
    slug: "marketframe",
    name: "MarketFrame",
    shortDescription:
      "A web app for building and sharing interactive market research dashboards.",
    longDescription:
      "MarketFrame lets a user upload a CSV of survey or market data and assemble it into a shareable dashboard of charts without writing any code.",
    category: "Web",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    status: "in-development",
    visible: true,
    featured: true,
    displayOrder: 4,
    features: [
      "CSV import with automatic column type detection",
      "Drag-and-drop chart builder",
      "Shareable, read-only dashboard links",
    ],
    futurePlans: "Add scheduled data refresh from a connected Google Sheet.",
    createdAt: "2026-01-10",
    updatedAt: "2026-08-20",
  },
  {
    slug: "pixelsort",
    name: "PixelSort",
    shortDescription: "A CLI tool for organizing large image datasets by visual similarity.",
    category: "Data",
    technologies: ["Python", "scikit-learn", "OpenCV"],
    status: "archived",
    visible: true,
    featured: false,
    displayOrder: 5,
    features: [
      "Extracts image feature vectors and clusters visually similar images",
      "Outputs a sorted directory structure for manual review",
    ],
    createdAt: "2023-09-05",
  },
  {
    slug: "latticeboard",
    name: "LatticeBoard",
    shortDescription: "A minimal kanban board for small teams.",
    category: "Web",
    technologies: ["TypeScript", "React", "Node.js", "Express", "MongoDB"],
    status: "completed",
    visible: true,
    featured: false,
    displayOrder: 6,
    createdAt: "2024-03-15",
  },
];
