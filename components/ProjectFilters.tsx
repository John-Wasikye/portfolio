"use client";

import { Search } from "lucide-react";
import { SORT_LABELS, STATUS_LABELS, type ProjectStatus, type SortOption } from "@/lib/types";
import { cn } from "@/lib/utils";

const STATUS_OPTIONS: ProjectStatus[] = ["live", "in-development", "completed", "archived"];
const SORT_OPTIONS: SortOption[] = ["curated", "newest", "oldest", "updated"];

interface ProjectFiltersProps {
  query: string;
  onQueryChange: (value: string) => void;
  categories: string[];
  category: string;
  onCategoryChange: (value: string) => void;
  technologies: string[];
  technology: string;
  onTechnologyChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
  sort: SortOption;
  onSortChange: (value: SortOption) => void;
}

function PillGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted">
        {label}
      </span>
      <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
        {[{ value: "all", label: "All" }, ...options].map((option) => {
          const isActive = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(option.value)}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm font-medium transition-colors motion-reduce:transition-none",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "bg-background text-muted-foreground ring-1 ring-inset ring-border hover:text-foreground"
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ProjectFilters({
  query,
  onQueryChange,
  categories,
  category,
  onCategoryChange,
  technologies,
  technology,
  onTechnologyChange,
  status,
  onStatusChange,
  sort,
  onSortChange,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-border bg-surface p-5">
      <div>
        <label htmlFor="project-search" className="sr-only">
          Search projects
        </label>
        <div className="relative">
          <Search
            size={18}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            aria-hidden="true"
          />
          <input
            id="project-search"
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted focus:border-accent"
          />
        </div>
      </div>

      <PillGroup
        label="Categories"
        value={category}
        onChange={onCategoryChange}
        options={categories.map((value) => ({ value, label: value }))}
      />

      <PillGroup
        label="Status"
        value={status}
        onChange={onStatusChange}
        options={STATUS_OPTIONS.map((value) => ({ value, label: STATUS_LABELS[value] }))}
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <label
            htmlFor="technology-filter"
            className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted"
          >
            Technology
          </label>
          <select
            id="technology-filter"
            value={technology}
            onChange={(event) => onTechnologyChange(event.target.value)}
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent"
          >
            <option value="all">All technologies</option>
            {technologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="sort-order"
            className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted"
          >
            Sort
          </label>
          <select
            id="sort-order"
            value={sort}
            onChange={(event) => onSortChange(event.target.value as SortOption)}
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {SORT_LABELS[option]}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
