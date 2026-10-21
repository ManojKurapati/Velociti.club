"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, User, Calendar, Radio } from "lucide-react";
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

  // Custom pill styling helper based on source name
  const getSourceStyles = (sourceName: string) => {
    const name = sourceName.toLowerCase();
    if (name.includes("openai")) {
      return "bg-white/5 border-white/15 text-cool-gray-200";
    }
    if (name.includes("anthropic")) {
      return "bg-white/5 border-white/15 text-cool-gray-200";
    }
    if (name.includes("deepmind")) {
      return "bg-white/5 border-white/15 text-cool-gray-200";
    }
    if (name.includes("log") || name.includes("lilian")) {
      return "bg-white/5 border-white/15 text-cool-gray-200";
    }
    if (name.includes("simon")) {
      return "bg-white/5 border-white/15 text-cool-gray-200";
    }
    return "bg-white/10 border-white/20 text-white";
  };

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

  const renderStatusLine = () => {
    const buildDate = new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    return (
      <p className="text-sm text-cool-gray-500 mt-4">
        Collected weekly from AI labs and researchers. Last updated {buildDate}.
      </p>
    );
  };

  return (
    <section id="whats-up" className="py-24 md:py-32 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white">
              What&apos;s new in AI
            </h2>
            {renderStatusLine()}
          </div>

          {/* Tab Filters */}
          <div className="bg-obsidian border border-white/5 rounded-xl p-1 flex gap-1 self-start md:self-auto">
            {(["All", "Labs", "Thinkers"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === tab
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-cool-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab === "All" ? "All" : tab === "Labs" ? "AI labs" : "Researchers"}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid (Always 6 items max) */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article, idx) => {
              const pillClass = getSourceStyles(article.sourceName);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  key={article.url}
                  className="bg-white/[0.02] border border-white/[0.06] hover:border-white/15 rounded-2xl p-6 min-h-[310px] flex flex-col justify-between transition-colors duration-300 group relative"
                >

                  <div>
                    {/* Top Row: Brand + Category */}
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <span className={`px-2.5 py-0.5 rounded-full border text-xs font-medium ${pillClass}`}>
                        {article.sourceName}
                      </span>
                      
                      <span className="text-xs text-cool-gray-500">
                        {article.category === "Labs" ? "Research lab" : "Commentary"}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-medium text-white line-clamp-2 leading-snug transition-colors mb-3">
                      <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-start gap-1 relative z-10">
                        {article.title}
                      </a>
                    </h3>

                    {/* Summary */}
                    <p className="text-cool-gray-400 text-xs sm:text-sm line-clamp-4 leading-relaxed font-light">
                      {article.summary}
                    </p>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 relative z-10 mt-4">
                    <div className="flex flex-col gap-1 text-xs text-cool-gray-500">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-cool-gray-600" />
                        <span className="truncate max-w-[130px]">{article.author}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-cool-gray-600" />
                        <span>{formatDate(article.date)}</span>
                      </span>
                    </div>

                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 group-hover:bg-white group-hover:text-black border border-white/10 text-cool-gray-300 transition-all duration-300"
                      title="Read the original article"
                      aria-label={`Read the original article: ${article.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredArticles.length === 0 && (
            <div className="col-span-full py-16 text-center">
              <p className="text-cool-gray-500 text-sm">Nothing in this category this week. Try another filter.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
