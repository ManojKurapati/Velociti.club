"use client";

import { useState } from "react";
import { PlayCircle, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const articles = [
  {
    id: 1,
    title: "How Velociti powers scalable autonomous workflows in Logistics",
    category: "Workflow",
    industry: "Logistics",
    type: "Video",
    image: "bg-gradient-to-br from-neon-cyan/20 to-blue-900/40",
  },
  {
    id: 2,
    title: "Understanding RAG latency requirements for Level-3 Support Agents",
    category: "RAG",
    industry: "Technology",
    type: "Infographic",
    image: "bg-gradient-to-bl from-neon-violet/20 to-purple-900/40",
  },
  {
    id: 3,
    title: "HIPAA-Compliant Voice Agent Routing: A 2026 Standard",
    category: "Voice",
    industry: "Healthcare",
    type: "Video",
    image: "bg-gradient-to-tr from-green-400/20 to-emerald-900/40",
  },
  {
    id: 4,
    title: "The CEO Guide to Capital Efficiency via AI-fication",
    category: "Strategy",
    industry: "All",
    type: "Report",
    image: "bg-gradient-to-br from-white/10 to-obsidian",
  }
];

export function KnowledgeGrid() {
  const [techFilter, setTechFilter] = useState("All Tech");
  const [industryFilter, setIndustryFilter] = useState("All Industries");
  const [downloadState, setDownloadState] = useState(false);

  const categories = ["All Tech", "Voice", "RAG", "Workflow", "Strategy"];
  const industries = ["All Industries", "Logistics", "Technology", "Healthcare", "All"];

  const filteredArticles = articles.filter(a => {
    const matchTech = techFilter === "All Tech" || a.category === techFilter;
    const matchIndustry = industryFilter === "All Industries" || a.industry === industryFilter;
    return matchTech && matchIndustry;
  });

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setTechFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  techFilter === cat 
                    ? 'bg-neon-cyan text-black shadow-[0_0_15px_rgba(0,240,255,0.3)]' 
                    : 'bg-white/5 text-cool-gray-400 border border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="md:w-px h-px md:h-auto w-full bg-white/10" />
          <div className="flex flex-wrap gap-3">
            {industries.map(ind => (
              <button 
                key={ind}
                onClick={() => setIndustryFilter(ind)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  industryFilter === ind 
                    ? 'bg-neon-violet text-white shadow-[0_0_15px_rgba(157,78,221,0.3)]' 
                    : 'bg-white/5 text-cool-gray-400 border border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredArticles.map((article) => (
              <motion.div 
                key={article.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all bg-obsidian cursor-pointer h-[400px] flex flex-col"
              >
                <div className={`absolute inset-0 ${article.image} opacity-50 group-hover:opacity-80 transition-opacity`} />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent" />
                
                {/* Simulated Media Area */}
                <div className="flex-1 relative flex items-center justify-center">
                  {article.type === "Video" ? (
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-8 h-8 text-white ml-1" />
                    </div>
                  ) : (
                    <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-widest text-white">
                      {article.type}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 pt-0">
                  <div className="flex gap-2 mb-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-neon-cyan border border-neon-cyan/30 px-2 py-1 rounded-md bg-neon-cyan/10">
                      {article.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-cool-gray-400 border border-white/10 px-2 py-1 rounded-md bg-white/5">
                      {article.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-medium text-white mb-2 leading-tight group-hover:text-neon-cyan transition-colors">
                    {article.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lead Magnet CTA */}
        <div className="mt-24 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-neon-violet/20 to-neon-cyan/20 border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl">
          <div className="max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white mb-4 bg-white/10 px-3 py-1 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
              </span>
              Freshly Updated
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4">
              Get the full 2026 AI Enterprise Playbook (PDF)
            </h2>
            <p className="text-cool-gray-300">
              A 45-page executive briefing on deploying autonomous loops, architecting moats, and optimizing for Generative Engine Optimization (GEO).
            </p>
          </div>
          
          <div className="w-full md:w-auto relative z-10 flex-1 max-w-sm">
            {!downloadState ? (
              <form 
                className="flex flex-col gap-3 w-full"
                onSubmit={(e) => {
                  e.preventDefault();
                  setDownloadState(true);
                }}
              >
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required
                  className="w-full bg-black/50 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan"
                />
                <input 
                  type="email" 
                  placeholder="Work Email" 
                  required
                  className="w-full bg-black/50 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan"
                />
                <select 
                  required
                  defaultValue=""
                  className="w-full bg-black/50 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-sm text-cool-gray-300 focus:outline-none focus:border-neon-cyan appearance-none"
                >
                  <option value="" disabled>Company Size</option>
                  <option value="1-50">1-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
                <button type="submit" className="mt-2 w-full bg-white text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-neon-cyan transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  <Download className="w-4 h-4" /> Unlock Playbook
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center bg-black/40 backdrop-blur-md border border-neon-cyan/50 rounded-xl p-8 text-center h-full min-h-[240px]">
                <div className="w-12 h-12 rounded-full bg-neon-cyan/20 text-neon-cyan flex items-center justify-center mb-4">
                  <Download className="w-6 h-6" />
                </div>
                <h3 className="text-white font-medium mb-2">Playbook Unlocked</h3>
                <p className="text-cool-gray-400 text-sm mb-4">Your PDF is ready for download.</p>
                <a href="#" className="text-sm font-semibold text-black bg-neon-cyan px-6 py-2 rounded-full hover:bg-white transition-colors">
                  Download PDF
                </a>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
