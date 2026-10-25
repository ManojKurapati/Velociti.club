/** Client-safe insight types and helpers (no filesystem access). */

export const insightCategories = ["Product", "In production", "Customer stories", "Perspectives", "News"] as const;
export type InsightCategory = (typeof insightCategories)[number];

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  date: string;
  author: string;
  art: string;
  draft: boolean;
};

export function formatDate(date: string) {
  return new Date(date + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}
