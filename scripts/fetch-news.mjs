import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_PATH = path.join(__dirname, "..", "components", "whats-up-news.json");

const FALLBACK_ARTICLES = [
  {
    title: "Claude 3.7 Sonnet and Claude Code",
    summary: "Anthropic introduces Claude 3.7 Sonnet, their first hybrid reasoning model capable of both instant responses and extended reasoning. Alongside it, they launched Claude Code, a terminal-based agent for complete repository-wide development tasks.",
    date: "2026-05-24",
    url: "https://www.anthropic.com/news/claude-3-7-sonnet",
    category: "Labs",
    author: "Anthropic Team",
    sourceName: "Anthropic",
  },
  {
    title: "GPT-4o: Reasoning across audio, vision, and text in real-time",
    summary: "OpenAI introduces its flagship model GPT-4o, delivering human-like response speeds across text, audio, and visual inputs. The model sets new standards in voice conversational latency and multimodal reasoning.",
    date: "2026-05-13",
    url: "https://openai.com/newsroom/gpt-4o-our-new-flagship-model/",
    category: "Labs",
    author: "OpenAI Team",
    sourceName: "OpenAI",
  },
  {
    title: "AlphaFold 3 predicts structure and interactions of all of life's molecules",
    summary: "Google DeepMind unveils AlphaFold 3, which maps the structure and interactions of proteins, DNA, RNA, and chemical compounds. This leap enables scientists to model cellular machinery and accelerate drug discovery.",
    date: "2026-05-08",
    url: "https://deepmind.google/blog/alphafold-3-predicts-structure-and-interactions-of-all-lifes-molecules/",
    category: "Labs",
    author: "Google DeepMind",
    sourceName: "Google DeepMind",
  },
  {
    title: "LLM Powered Autonomous Agents",
    summary: "An in-depth analysis of constructing autonomous agents with Large Language Models as the brain. The article explores planning, memory architecture (short/long-term), and tool use via methods like ReAct and AutoGPT.",
    date: "2025-06-23",
    url: "https://lilianweng.github.io/posts/2023-06-23-agent/",
    category: "Thinkers",
    author: "Lilian Weng",
    sourceName: "Lil'Log",
  },
  {
    title: "Things I learned building an automated AI web scraper",
    summary: "Simon Willison shares practical findings on using frontier models for data extraction. The post details cost control, handling unexpected DOM changes, writing prompt wrappers, and dealing with model hallucination in structured extraction.",
    date: "2026-06-15",
    url: "https://simonwillison.net/2026/Jun/15/scraping-with-llms/",
    category: "Thinkers",
    author: "Simon Willison",
    sourceName: "Simon's Weblog",
  },
  {
    title: "Introducing OpenAI o1-preview: Reasoning models for complex tasks",
    summary: "OpenAI releases o1-preview, a new series of AI models that spend more time thinking before answering. They can reason through scientific workflows, complex math, and competitive programming challenges.",
    date: "2025-09-12",
    url: "https://openai.com/newsroom/introducing-openai-o1-preview/",
    category: "Labs",
    author: "OpenAI Team",
    sourceName: "OpenAI",
  }
];

async function scrapeUrlWithFirecrawl(url, apiKey, category, sourceName, author) {
  try {
    console.log(`Scraping ${sourceName} (${url})...`);
    const response = await fetch("https://api.firecrawl.dev/v1/scrape", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
        formats: ["json"],
        jsonOptions: {
          schema: {
            type: "object",
            properties: {
              articles: {
                type: "array",
                description: "List of recently published news articles or blog posts on the page.",
                items: {
                  type: "object",
                  properties: {
                    title: { type: "string", description: "The title of the news article." },
                    summary: { type: "string", description: "A brief 2-3 sentence summary of the article." },
                    date: { type: "string", description: "The date of publication, formatted as YYYY-MM-DD if possible." },
                    url: { type: "string", description: "The absolute link/URL to the full article." },
                  },
                  required: ["title", "summary", "url"],
                },
              },
            },
            required: ["articles"],
          },
        },
      }),
      // 30 seconds timeout
      signal: AbortSignal.timeout(30000),
    });

    if (!response.ok) {
      console.error(`Firecrawl failed for ${sourceName}: ${response.status} ${response.statusText}`);
      return [];
    }

    const result = await response.json();
    const extractedArticles = result?.data?.json?.articles || [];

    return extractedArticles.map((art) => ({
      title: art.title || "Latest Update",
      summary: art.summary || "No description available.",
      date: art.date || new Date().toISOString().split("T")[0],
      url: art.url.startsWith("http") ? art.url : new URL(art.url, url).toString(),
      category: category,
      author: author,
      sourceName: sourceName,
    }));
  } catch (error) {
    console.error(`Error scraping ${sourceName}:`, error.message);
    return [];
  }
}

async function main() {
  const apiKey = process.env.FIRECRAWL_API_KEY;

  if (!apiKey || apiKey === "" || apiKey === "your_api_key_here") {
    console.warn("WARNING: FIRECRAWL_API_KEY env variable is not set. Generating static news from fallback dataset.");
    
    const outputData = {
      source: "fallback",
      timestamp: Date.now(),
      articles: FALLBACK_ARTICLES.slice(0, 6)
    };

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(outputData, null, 2));
    console.log(`Saved 6 fallback articles to ${OUTPUT_PATH}`);
    return;
  }

  console.log("FIRECRAWL_API_KEY detected. Starting weekly build-time news crawl...");

  const jobs = [
    {
      url: "https://openai.com/newsroom/",
      category: "Labs",
      sourceName: "OpenAI",
      author: "OpenAI Team",
    },
    {
      url: "https://www.anthropic.com/news",
      category: "Labs",
      sourceName: "Anthropic",
      author: "Anthropic Team",
    },
    {
      url: "https://deepmind.google/blog/",
      category: "Labs",
      sourceName: "Google DeepMind",
      author: "DeepMind Team",
    },
    {
      url: "https://lilianweng.github.io/",
      category: "Thinkers",
      sourceName: "Lil'Log",
      author: "Lilian Weng",
    },
    {
      url: "https://simonwillison.net/",
      category: "Thinkers",
      sourceName: "Simon's Weblog",
      author: "Simon Willison",
    }
  ];

  try {
    const results = await Promise.all(
      jobs.map((job) =>
        scrapeUrlWithFirecrawl(job.url, apiKey, job.category, job.sourceName, job.author)
      )
    );

    const scraped = results.flat();

    // Combine with fallbacks for sources that failed to crawl
    const all = [...scraped];
    const scrapedSources = new Set(scraped.map((s) => s.sourceName));
    const missing = FALLBACK_ARTICLES.filter((f) => !scrapedSources.has(f.sourceName));
    all.push(...missing);

    // Sort by date desc
    all.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Deduplicate URLs
    const unique = Array.from(new Map(all.map((item) => [item.url, item])).values());

    // Limit to exactly 6 cards
    const top6 = unique.slice(0, 6);

    const outputData = {
      source: "live",
      timestamp: Date.now(),
      articles: top6
    };

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(outputData, null, 2));
    console.log(`Successfully scraped and saved 6 news articles to ${OUTPUT_PATH}`);
  } catch (error) {
    console.error("Scraping failed with error:", error);
    console.log("Writing fallback articles as backup...");
    
    const outputData = {
      source: "fallback",
      timestamp: Date.now(),
      articles: FALLBACK_ARTICLES.slice(0, 6)
    };

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(outputData, null, 2));
  }
}

main();
