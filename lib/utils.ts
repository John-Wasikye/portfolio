import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(dateString?: string): string | undefined {
  if (!dateString) return undefined;
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}
