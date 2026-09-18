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
    displayOrder: 1,
    githubUrl: "https://github.com/John-Wasikye/Network_Packet_Analyzer",
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
      "A daily-updating NFL data pipeline that ranks players by position, built on AWS with Docker.",
    longDescription:
      "A data engineering project that pulls current-season NFL stats every day, cleans and models them, and publishes position rankings (QB, RB, WR, TE, K) to a website. Each position gets two ranking views side by side: a composite performance score and PPR fantasy points, with weekly snapshots to show rank movement. The architecture and ranking method are designed; building the pipeline is the next step. A mobile app is planned as a second phase.",
    category: "Data",
    technologies: ["Python", "Docker", "AWS", "Terraform", "dbt", "DuckDB", "Athena", "S3"],
    status: "in-development",
    visible: true,
    featured: true,
    displayOrder: 2,
    features: [
      "Daily ingestion of NFL stats from the open nflverse datasets",
      "Position rankings using a composite score of efficiency and production, plus a PPR fantasy view",
      "Weekly rank snapshots to show players moving up or down",
      "Data quality tests on every run",
      "Backtest of the ranking method on past seasons, with a public methodology page",
    ],
    architecture:
      "A scheduled container task on AWS (EventBridge and ECS Fargate) ingests raw data into an S3 data lake, dbt models it into staging and mart layers, and a publish step writes rankings as JSON behind CloudFront for the website. Infrastructure is defined in Terraform, and the same Docker image runs locally and in the cloud.",
    futurePlans:
      "Add defensive player rankings, and build a mobile app on the same published data.",
    createdAt: "2026-09-18",
    updatedAt: "2026-09-18",
  },
];
