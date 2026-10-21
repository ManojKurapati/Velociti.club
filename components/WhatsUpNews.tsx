"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "./ui/section";
import { Badge } from "./ui/badge";
import newsData from "./whats-up-news.json";

interface Article {
  title: string;
  summary: string;
  date: string;
  url: string;
  category: "Labs" | "Thinkers";
  author: string;
  sourceName: string;
}

export function WhatsUpNews() {
  const [activeTab, setActiveTab] = useState<"All" | "Labs" | "Thinkers">("All");

  const { timestamp, articles } = newsData as {
    source: "live" | "fallback";
    timestamp: number;
    articles: Article[];
  };

  // Filter articles based on active tab
  const filteredArticles = articles.filter((art) => {
    if (activeTab === "All") return true;
    return art.category === activeTab;
  });

  // Helper to format date nicely
  const formatDate = (dateString: string) => {
    try {
      const d = new Date(dateString);
      if (isNaN(d.getTime())) return dateString;
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const buildDate = new Date(timestamp).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  // Pad the last row so the 1px grid never shows empty line-colored slots.
  const n = filteredArticles.length;
  const padMd = n % 2;
  const padLg = (3 - (n % 3)) % 3;
  const fillers = Array.from({ length: Math.max(padMd, padLg) }, (_, i) => i);

  return (
    <Section id="whats-up">
      <SectionHeader
        title="What’s new in AI"
        description={`Collected weekly from AI labs and researchers. Last updated ${buildDate}.`}
        aside={
          <div role="group" aria-label="Filter articles" className="inline-flex self-start rounded-md border border-line bg-surface p-0.5 lg:self-auto">
            {(["All", "Labs", "Thinkers"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
                className={`h-7 rounded-[5px] px-3 text-sm transition-colors ${
                  activeTab === tab ? "bg-raised text-white" : "text-cool-gray-400 hover:text-white"
                }`}
              >
                {tab === "All" ? "All" : tab === "Labs" ? "AI labs" : "Researchers"}
              </button>
            ))}
          </div>
        }
      />

      <div className="grid gap-px border-t border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article) => (
          <a
            key={article.url}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[280px] flex-col bg-canvas p-6 transition-colors duration-150 hover:bg-surface md:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <Badge>{article.sourceName}</Badge>
              <span className="text-xs text-cool-gray-500">
                {article.category === "Labs" ? "Research lab" : "Commentary"}
              </span>
            </div>
            <h3 className="mt-6 line-clamp-2 text-base font-semibold leading-snug text-white">{article.title}</h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-cool-gray-400">{article.summary}</p>
            <div className="mt-auto flex items-center justify-between pt-6 text-xs text-cool-gray-500">
              <span className="truncate">
                {article.author} · {formatDate(article.date)}
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-cool-gray-500 transition-colors group-hover:text-white" aria-hidden="true" />
            </div>
          </a>
        ))}
        {fillers.map((i) => (
          <div
            key={`filler-${i}`}
            aria-hidden="true"
            className={`hidden bg-canvas ${i < padMd ? "md:block" : "md:hidden"} ${i < padLg ? "lg:block" : "lg:hidden"}`}
          />
        ))}
        {n === 0 && (
          <p className="bg-canvas p-8 text-sm text-cool-gray-500 md:col-span-2 lg:col-span-3">
            Nothing in this category this week. Try another filter.
          </p>
        )}
      </div>
    </Section>
  );
}
