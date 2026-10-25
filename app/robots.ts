import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

// AI search crawlers are explicitly welcome (carried over from the old robots.txt).
const aiBots = ["GPTBot", "ChatGPT-User", "ClaudeBot", "Claude-Web", "PerplexityBot", "Google-Extended", "Applebot", "Cohere-ai"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...aiBots.map((userAgent) => ({ userAgent, allow: "/" }))],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
