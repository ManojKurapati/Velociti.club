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

  const { source, timestamp, articles } = newsData as {
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
      return "bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan shadow-[0_0_15px_rgba(0,240,255,0.15)]";
    }
    if (name.includes("anthropic")) {
      return "bg-neon-violet/10 border-neon-violet/30 text-neon-violet shadow-[0_0_15px_rgba(157,78,221,0.15)]";
    }
    if (name.includes("deepmind")) {
      return "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]";
    }
    if (name.includes("log") || name.includes("lilian")) {
      return "bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)]";
    }
    if (name.includes("simon")) {
      return "bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]";
    }
    return "bg-white/10 border-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]";
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

  const renderStatusBadge = () => {
    const badgeText = source === "live" ? "Weekly AI Feed" : "Weekly AI Cache";
    const badgeColor = source === "live"
      ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/20"
      : "bg-amber-500/20 text-amber-400 border-amber-500/30";
    const pingColor = source === "live" ? "bg-emerald-400" : "bg-amber-400";

    const buildDate = new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    return (
      <div className={`flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono ${badgeColor}`}>
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pingColor}`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${pingColor}`}></span>
        </span>
        <span>{badgeText} // Compiled {buildDate}</span>
      </div>
    );
  };

  return (
    <section id="whats-up" className="py-24 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[35%] h-[35%] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35%] h-[35%] bg-neon-violet/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-neon-cyan px-2.5 py-0.5 rounded-full bg-neon-cyan/5 border border-neon-cyan/20">
                Pulse Feed
              </span>
              {renderStatusBadge()}
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
              What's Up in AI
            </h2>
          </div>

          {/* Tab Filters */}
          <div className="bg-obsidian border border-white/5 rounded-xl p-1 flex gap-1 self-start md:self-auto">
            {(["All", "Labs", "Thinkers"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-cool-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab === "All" ? "All Signals" : tab === "Labs" ? "AI Labs" : "AI Thinkers"}
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
                  className="glass-card border border-white/5 hover:border-white/15 rounded-3xl p-6 h-[310px] flex flex-col justify-between transition-all duration-300 group hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative"
                >
                  {/* Subtle hover background glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/5 to-neon-violet/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    {/* Top Row: Brand + Category */}
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-semibold tracking-wider ${pillClass}`}>
                        {article.sourceName}
                      </span>
                      
                      <span className="text-[10px] font-mono text-cool-gray-500 uppercase tracking-widest">
                        {article.category === "Labs" ? "Research Lab" : "AI Thought"}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-medium text-white line-clamp-2 leading-snug group-hover:text-neon-cyan transition-colors mb-3">
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
                    <div className="flex flex-col gap-1 text-[11px] text-cool-gray-500 font-mono">
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
                      className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 group-hover:bg-neon-cyan group-hover:text-black border border-white/10 group-hover:border-neon-cyan text-cool-gray-300 transition-all duration-300"
                      title="Read original source"
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
              <p className="text-cool-gray-500 font-mono text-sm">No updates match the selected filter.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
