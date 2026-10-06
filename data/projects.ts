import type { Project } from "@/lib/types";

/**
 * Portfolio project data.
 *
 * This is the single source of truth for every project shown on the site.
 * To add a project, append an object to this array. No other file needs
 * to change. `slug` becomes the URL at /projects/[slug] and must be unique.
 *
 * `visible` controls whether a project appears anywhere on the public site.
 * `featured` controls whether it appears in the homepage's Featured section.
 * `displayOrder` controls curated sort order (lower numbers first).
 *
 * Only list real projects here, and never invent metrics or evidence. Add
 * `githubUrl` / `liveUrl` / `metrics` only once they exist.
 */
export const projects: Project[] = [
  {
    slug: "network-packet-analyzer",
    name: "Network Packet Analyzer",
    shortDescription:
      "A C++ tool for capturing and analyzing network packets in real time.",
    longDescription:
      "A command-line network packet analyzer for Linux, built to capture live traffic and display it as it arrives. It enumerates available network interfaces, opens one for live capture, and renders packet activity in a terminal UI as packets come in.",
    category: "Systems",
    technologies: ["C++", "libpcap", "ncurses", "CMake"],
    status: "completed",
    visible: true,
    featured: true,
    displayOrder: 2,
    githubUrl: "https://github.com/John-Wasikye/Network_Packet_Analyzer",
    media: [
      {
        type: "image",
        src: "/projects/network-packet-analyzer.png",
        alt: "The Network Packet Analyzer running in a terminal, listing the available network interfaces",
      },
    ],
    features: [
      "Enumerates and lists available network interfaces",
      "Live packet capture via libpcap",
      "Real-time capture output rendered with ncurses",
      "Graceful shutdown on SIGINT",
    ],
    architecture:
      "A CMake-built C++ application. libpcap handles interface discovery and packet capture, invoking a callback per captured packet; ncurses owns the terminal and redraws capture output in place as packets arrive.",
    futurePlans:
      "Parse and display packet contents (protocol, source/destination, size breakdown) instead of just capture length, and let the user choose which interface to capture from.",
    createdAt: "2024-06-03",
  },
  {
    slug: "nfl-player-performance",
    name: "NFL Player Performance",
    shortDescription:
      "An NFL data pipeline, live on AWS, that ranks players by position and predicts each week's results.",
    longDescription:
      "A data engineering and prediction project. It pulls NFL stats from the open nflverse datasets, cleans and models them with dbt on DuckDB, and publishes position rankings (QB, RB, WR, TE, K) to a website, each shown two ways: a composite performance score and PPR fantasy points, with weekly snapshots showing rank movement. On top of that sits a weekly prediction engine. It projects every player's next game with an 80% range, locks the forecast before kickoff, and grades it afterwards in a public report card that compares it with simple baselines. AI is used in a deliberately limited way: Claude Code reads where the model missed most each week and proposes one new feature at a time, and an automated test on held-out weeks decides whether it ships, so no published number is ever produced or adjusted by an LLM. The whole system runs by itself on AWS: a scheduled Fargate task, S3, CloudFront in front of the site, Terraform for the infrastructure, and GitHub Actions deploying through OIDC with no stored credentials. A mobile app is planned as a second phase.",
    category: "Data",
    technologies: ["Python", "Docker", "AWS", "Terraform", "dbt", "DuckDB", "LightGBM", "Claude Code", "Next.js"],
    status: "live",
    visible: true,
    featured: true,
    displayOrder: 1,
    githubUrl: "https://github.com/John-Wasikye/nfl-player-performance",
    liveUrl: "https://nflstats.johnwasikye.com",
    media: [
      {
        type: "image",
        src: "/projects/nfl-player-performance.png",
        alt: "Screenshot of the NFL Player Performance site showing the quarterback rankings table",
      },
    ],
    features: [
      "Weekly predictions for every QB, RB, WR, TE and K, each with an 80% range, locked before kickoff and graded afterwards in a public report card against simple baselines",
      "An ensemble of ridge regression and LightGBM, with ranges calibrated on weeks the model never saw; the code refuses to calibrate on its own training rows",
      "AI-assisted feature search: Claude Code proposes one feature at a time from the model's biggest misses, an automated gate on held-out weeks decides whether it ships, and every result is published in an experiment ledger",
      "Position rankings using a composite score of efficiency and production, plus a PPR fantasy view, with weekly snapshots to show players moving up or down",
      "Backtest of the ranking method on past seasons using held-out seasons, with a public methodology page",
      "Daily ingestion of NFL stats from the open nflverse datasets, data quality tests on every run, and a validation gate that blocks a bad or stale publish",
    ],
    architecture:
      "A Python pipeline ingests raw nflverse files, dbt models them into staging and mart layers on DuckDB, and a publish step writes validated, versioned JSON that a statically exported Next.js site reads. A prediction step builds features that only use games before kickoff, with tests that change a future result and check earlier features do not move, then projects, locks and grades each week. Claude Code sits outside the published numbers: it writes candidate feature code that must pass the gate before it can reach the site. The same Docker image runs locally and on AWS: a scheduled Fargate task, S3 for storage (the records bucket uses Object Lock, so a locked forecast cannot be changed), CloudFront in front of the site, alarms that email on any failure, and the infrastructure defined in Terraform. A guard refuses to lock a forecast once its first kickoff has passed.",
    futurePlans:
      "Add defensive player rankings and build a mobile app on the same published data.",
    createdAt: "2026-09-18",
    updatedAt: "2026-10-06",
  },
  {
    slug: "portfolio-website",
    name: "Project Website",
    shortDescription:
      "This site: a tested, accessible portfolio with dark mode, built with Next.js and deployed on Vercel.",
    longDescription:
      "The portfolio you are looking at. Every project on it comes from a single typed data file, so adding a project is one entry and the home page, archive, search, filters, project pages, sitemap and social cards all update from it. It follows the system light or dark theme with a toggle that remembers the visitor's choice, and is built to be keyboard and screen-reader friendly.",
    category: "Web",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vitest", "Playwright", "Vercel"],
    status: "live",
    visible: true,
    featured: true,
    displayOrder: 3,
    githubUrl: "https://github.com/John-Wasikye/portfolio",
    liveUrl: "https://www.johnwasikye.com",
    media: [
      {
        type: "image",
        src: "/projects/portfolio-site.png",
        alt: "Screenshot of the portfolio website home page",
      },
    ],
    features: [
      "Searchable, filterable archive of projects driven by one typed data file",
      "Light and dark themes that follow the system setting, with a saved toggle and no flash on load",
      "Accessible navigation: skip link, keyboard focus styles, and reduced-motion support",
      "Metadata for search and sharing: sitemap, robots, web manifest, and social cards",
      "Unit and component tests with Vitest and end-to-end tests with Playwright",
    ],
    architecture:
      "A Next.js App Router site written in TypeScript and styled with Tailwind CSS design tokens. Project data lives in one file and is read at build time, so pages are generated statically. GitHub pushes to master deploy automatically on Vercel.",
    createdAt: "2026-09-03",
    updatedAt: "2026-10-05",
  },
];
