import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/customers";
import { getAllPosts } from "@/lib/insights";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/solutions", "/engineers", "/industries", "/customers", "/trust", "/about", "/careers", "/insights", "/press", "/contact", "/legal/privacy", "/legal/terms", "/legal/cookies"];
  return [
    ...staticRoutes.map((p) => ({ url: `${site.url}${p}`, lastModified: now, changeFrequency: "monthly" as const, priority: p === "" ? 1 : p.startsWith("/legal") ? 0.2 : 0.8 })),
    ...industries.map((i) => ({ url: `${site.url}/industries/${i.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...caseStudies.map((c) => ({ url: `${site.url}/customers/${c.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...getAllPosts().map((p) => ({ url: `${site.url}/insights/${p.slug}`, lastModified: new Date(p.date), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
