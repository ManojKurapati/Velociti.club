import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { type InsightCategory, type PostMeta } from "./insights-shared";

export * from "./insights-shared";

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

/**
 * Posts, newest first. Drafts are only listed while placeholders are shown
 * (NEXT_PUBLIC_SHOW_PLACEHOLDERS=true); pass includeDrafts to build their pages anyway.
 */
export function getAllPosts({ includeDrafts = process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "true" } = {}): PostMeta[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => read(f).meta)
    .filter((p) => includeDrafts || !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
  const file = `${slug}.mdx`;
  if (!fs.existsSync(path.join(DIR, file))) return null;
  return read(file);
}
