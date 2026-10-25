import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

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

const DIR = path.join(process.cwd(), "content/insights");

function read(file: string) {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const { data, content } = matter(raw);
  const meta: PostMeta = {
    slug: file.replace(/\.mdx$/, ""),
    title: String(data.title),
    excerpt: String(data.excerpt ?? ""),
    category: (data.category ?? "Perspectives") as InsightCategory,
    date: String(data.date),
    author: String(data.author ?? "Velociti"),
    art: String(data.art ?? "default"),
    draft: Boolean(data.draft),
  };
  return { meta, content };
}

/** All posts, newest first. Drafts are included so stubs are visible; they carry a Draft label. */
export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => read(f).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
  const file = `${slug}.mdx`;
  if (!fs.existsSync(path.join(DIR, file))) return null;
  return read(file);
}

export function formatDate(date: string) {
  return new Date(date + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}
