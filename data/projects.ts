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
      "An NFL data pipeline that ranks players by position and predicts each week's results, with the AWS deployment in progress.",
    longDescription:
      "A data engineering project that pulls NFL stats from the open nflverse datasets, cleans and models them with dbt on DuckDB, and publishes position rankings (QB, RB, WR, TE, K) to a website. Each position has two views side by side: a composite performance score and PPR fantasy points, with weekly snapshots showing rank movement. A weekly prediction engine projects each player's next game with a range, locks the forecast before kickoff, and grades it afterwards, and a public report card shows how it does against simple baselines. The pipeline, website and prediction engine run locally in Docker; deploying them to AWS with Terraform is in progress. A mobile app is planned as a second phase.",
    category: "Data",
    technologies: ["Python", "Docker", "AWS", "Terraform", "dbt", "DuckDB", "LightGBM", "Next.js"],
    status: "in-development",
    visible: true,
    featured: true,
    displayOrder: 2,
    githubUrl: "https://github.com/John-Wasikye/nfl-player-performance",
    media: [
      {
        type: "image",
        src: "/projects/nfl-player-performance.png",
        alt: "Screenshot of the NFL Player Performance site showing the quarterback rankings table",
      },
    ],
    features: [
      "Daily ingestion of NFL stats from the open nflverse datasets",
      "Position rankings using a composite score of efficiency and production, plus a PPR fantasy view",
      "Weekly rank snapshots to show players moving up or down",
      "Data quality tests on every run, and a validation gate that blocks a bad or stale publish",
      "Backtest of the ranking method on past seasons, with a public methodology page",
      "Weekly predictions with ranges, locked before kickoff and graded in a public report card",
    ],
    architecture:
      "A Python pipeline ingests raw nflverse files, dbt models them into staging and mart layers on DuckDB, and a publish step writes validated, versioned JSON that a statically exported Next.js site reads. The same Docker image runs locally and is being moved to AWS: a scheduled Fargate task, S3 for storage, CloudFront in front of the site, and the infrastructure defined in Terraform.",
    futurePlans:
      "Finish the AWS deployment, add defensive player rankings, and build a mobile app on the same published data.",
    createdAt: "2026-09-18",
    updatedAt: "2026-10-05",
  },
];
