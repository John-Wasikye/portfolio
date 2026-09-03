export type ProjectStatus = "live" | "in-development" | "completed" | "archived";

export const PROJECT_STATUSES: ProjectStatus[] = [
  "live",
  "in-development",
  "completed",
  "archived",
];

export const STATUS_LABELS: Record<ProjectStatus, string> = {
  live: "Live",
  "in-development": "In Development",
  completed: "Completed",
  archived: "Archived",
};

export type ProjectMediaType = "image" | "gif" | "video" | "youtube";

export interface ProjectMedia {
  type: ProjectMediaType;
  src: string;
  alt?: string;
  title?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription?: string;
  category: string;
  technologies: string[];
  status: ProjectStatus;
  visible: boolean;
  featured: boolean;
  displayOrder: number;
  githubUrl?: string;
  liveUrl?: string;
  media?: ProjectMedia[];
  features?: string[];
  metrics?: ProjectMetric[];
  architecture?: string;
  technicalDetails?: string;
  challenges?: string;
  lessonsLearned?: string;
  futurePlans?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type SortOption = "curated" | "newest" | "oldest" | "updated";

export const SORT_LABELS: Record<SortOption, string> = {
  curated: "Curated",
  newest: "Newest",
  oldest: "Oldest",
  updated: "Recently Updated",
};
