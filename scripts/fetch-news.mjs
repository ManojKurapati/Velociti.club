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

async function fetchDirect(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    },
    signal: AbortSignal.timeout(15000)
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText}`);
  }
  return res.text();
}

function parseRssFeed(xmlText, category, sourceName, author) {
  const articles = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = itemRegex.exec(xmlText)) !== null) {
    const itemContent = match[1];
    const titleMatch = itemContent.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/);
    const linkMatch = itemContent.match(/<link>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/link>/);
    const dateMatch = itemContent.match(/<pubDate>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/pubDate>/);
    const descMatch = itemContent.match(/<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/);
    
    if (titleMatch && linkMatch) {
      let title = titleMatch[1].trim().replace(/^<!\[CDATA\[([\s\S]*?)\]\]>$/g, '$1');
      let url = linkMatch[1].trim().replace(/^<!\[CDATA\[([\s\S]*?)\]\]>$/g, '$1');
      
      let summary = "";
      if (descMatch) {
        summary = descMatch[1].trim()
          .replace(/^<!\[CDATA\[([\s\S]*?)\]\]>$/g, '$1')
          .replace(/<[^>]*>/g, '')
          .slice(0, 180) + "...";
      }
      
      let date = new Date().toISOString().split("T")[0];
      if (dateMatch) {
        try {
          date = new Date(dateMatch[1].trim()).toISOString().split("T")[0];
        } catch (e) {}
      }
      
      articles.push({
        title,
        summary,
        date,
        url,
        category,
        author,
        sourceName
      });
    }
  }
  return articles;
}

function parseAtomFeed(xmlText, category, sourceName, author) {
  const articles = [];
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
  let match;
  while ((match = entryRegex.exec(xmlText)) !== null) {
    const entryContent = match[1];
    const titleMatch = entryContent.match(/<title(?:[^>]*)>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/);
    const linkMatch = entryContent.match(/<link[^>]+href=["']([^"']+)["']/);
    const dateMatch = entryContent.match(/<(?:published|updated)>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/(?:published|updated)>/);
    const summaryMatch = entryContent.match(/<(?:summary|content)(?:[^>]*)>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/(?:summary|content)>/);
    
    if (titleMatch && linkMatch) {
      let title = titleMatch[1].trim().replace(/^<!\[CDATA\[([\s\S]*?)\]\]>$/g, '$1');
      let url = linkMatch[1].trim();
      
      let summary = "";
      if (summaryMatch) {
        summary = summaryMatch[1].trim()
          .replace(/^<!\[CDATA\[([\s\S]*?)\]\]>$/g, '$1')
          .replace(/<[^>]*>/g, '')
          .slice(0, 180) + "...";
      }
      
      let date = new Date().toISOString().split("T")[0];
      if (dateMatch) {
        try {
          date = new Date(dateMatch[1].trim()).toISOString().split("T")[0];
        } catch (e) {}
      }
      
      articles.push({
        title,
        summary,
        date,
        url,
        category,
        author,
        sourceName
      });
    }
  }
  return articles;
}

function parseAnthropicHtml(htmlText) {
  const articles = [];
  const liRegex = /<li><a href="(\/news\/[^"]+)"[^>]*><div[^>]*><time[^>]*>([^<]+)<\/time><span[^>]*>([^<]+)<\/span><\/div><span[^>]*>([^<]+)<\/span><\/a><\/li>/g;
  let match;
  while ((match = liRegex.exec(htmlText)) !== null) {
    const relativeUrl = match[1];
    const rawDate = match[2];
    const subject = match[3];
    const title = match[4];
    
    let date = new Date().toISOString().split("T")[0];
    try {
      date = new Date(rawDate).toISOString().split("T")[0];
    } catch (e) {}
    
    articles.push({
      title: title.trim(),
      summary: `${title.trim()}. Published under ${subject.trim()} on ${rawDate.trim()}.`,
      date: date,
      url: `https://www.anthropic.com${relativeUrl}`,
      category: "Labs",
      author: "Anthropic Team",
      sourceName: "Anthropic"
    });
  }
  return articles;
}

async function fetchLiveFeedsWithoutApiKey() {
  console.log("No FIRECRAWL_API_KEY or scraping failed. Fetching live news directly from public RSS/Atom feeds and HTML pages...");
  const allArticles = [];

  // OpenAI (RSS)
  try {
    const xml = await fetchDirect("https://openai.com/news/rss.xml");
    const arts = parseRssFeed(xml, "Labs", "OpenAI", "OpenAI Team");
    console.log(`Successfully fetched ${arts.length} articles from OpenAI RSS.`);
    allArticles.push(...arts);
  } catch (e) {
    console.error("Failed to fetch OpenAI RSS:", e.message);
  }

  // Anthropic (HTML)
  try {
    const html = await fetchDirect("https://www.anthropic.com/news");
    const arts = parseAnthropicHtml(html);
    console.log(`Successfully fetched ${arts.length} articles from Anthropic HTML.`);
    allArticles.push(...arts);
  } catch (e) {
    console.error("Failed to fetch Anthropic HTML:", e.message);
  }

  // Google DeepMind (RSS)
  try {
    const xml = await fetchDirect("https://deepmind.google/blog/feed/basic/");
    const arts = parseRssFeed(xml, "Labs", "Google DeepMind", "DeepMind Team");
    console.log(`Successfully fetched ${arts.length} articles from DeepMind RSS.`);
    allArticles.push(...arts);
  } catch (e) {
    console.error("Failed to fetch DeepMind RSS:", e.message);
  }

  // Lil'Log (RSS)
  try {
    const xml = await fetchDirect("https://lilianweng.github.io/posts/index.xml");
    const arts = parseRssFeed(xml, "Thinkers", "Lil'Log", "Lilian Weng");
    console.log(`Successfully fetched ${arts.length} articles from Lil'Log RSS.`);
    allArticles.push(...arts);
  } catch (e) {
    console.error("Failed to fetch Lil'Log RSS:", e.message);
  }

  // Simon Willison (Atom)
  try {
    const xml = await fetchDirect("https://simonwillison.net/atom/entries/");
    const arts = parseAtomFeed(xml, "Thinkers", "Simon's Weblog", "Simon Willison");
    console.log(`Successfully fetched ${arts.length} articles from Simon's Weblog Atom.`);
    allArticles.push(...arts);
  } catch (e) {
    console.error("Failed to fetch Simon's Weblog Atom:", e.message);
  }

  return allArticles;
}

async function main() {
  const apiKey = process.env.FIRECRAWL_API_KEY;
  let allArticles = [];
  let sourceMode = "fallback";

  if (apiKey && apiKey !== "" && apiKey !== "your_api_key_here") {
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
      allArticles = results.flat();
      if (allArticles.length > 0) {
        sourceMode = "live";
      }
    } catch (error) {
      console.error("Firecrawl scraping failed with error:", error);
    }
  }

  // If no Firecrawl API Key OR Firecrawl scraping yielded no results, fetch live feeds directly without API key!
  if (allArticles.length === 0) {
    try {
      allArticles = await fetchLiveFeedsWithoutApiKey();
      if (allArticles.length > 0) {
        sourceMode = "live";
      }
    } catch (error) {
      console.error("Direct live feed fetching failed:", error);
    }
  }

  // If even direct fetching failed (e.g. offline build), fall back to static articles
  if (allArticles.length === 0) {
    console.warn("WARNING: All news sources failed. Generating static news from fallback dataset.");
    allArticles = [...FALLBACK_ARTICLES];
    sourceMode = "fallback";
  }

  // Sort by date desc
  allArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Deduplicate URLs
  const unique = Array.from(new Map(allArticles.map((item) => [item.url, item])).values());

  // Limit to exactly 6 cards
  const top6 = unique.slice(0, 6);

  const outputData = {
    source: sourceMode,
    timestamp: Date.now(),
    articles: top6
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(outputData, null, 2));
  console.log(`Saved ${top6.length} articles (${sourceMode}) to ${OUTPUT_PATH}`);
}

main();
