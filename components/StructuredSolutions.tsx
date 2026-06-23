"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, RotateCw, Sparkles } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    id: "ops",
    title: "AI Operations Automation",
    description: "Automate complex internal workflows, reporting, and process optimization to drastically reduce operational overhead.",
    benefits: ["Workflow automation", "Intelligent reporting", "Internal operations", "Process optimization"],
    diagram: (
      <svg viewBox="0 0 400 200" className="w-full h-full text-cool-gray-300 font-sans">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        
        <rect x="40" y="75" width="80" height="50" rx="12" fill="url(#grad1)" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="80" y="100" fontSize="13" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">ERP Data</text>

        <rect x="160" y="75" width="80" height="50" rx="12" fill="url(#grad2)" stroke="#00f0ff" strokeWidth="1.5" strokeOpacity="0.6" />
        <text x="200" y="100" fontSize="13" fontWeight="600" fill="#00f0ff" textAnchor="middle" dominantBaseline="middle">AI Engine</text>

        <rect x="280" y="75" width="80" height="50" rx="12" fill="url(#grad1)" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="320" y="100" fontSize="13" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">Action</text>

        <path d="M120,100 L155,100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <polygon points="155,97 160,100 155,103" fill="currentColor" fillOpacity="0.5" />
        
        <path d="M240,100 L275,100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <polygon points="275,97 280,100 275,103" fill="currentColor" fillOpacity="0.5" />
      </svg>
    ),
    color: "from-neon-cyan/20 to-blue-500/20",
    borderColor: "border-neon-cyan/30",
    appTitle: "ops-agent-01 // daemon",
    appStatus: "Active 24/7",
    backType: "ops"
  },
  {
    id: "support",
    title: "AI Customer Support Systems",
    description: "Deploy intelligent voice and text agents that handle L1/L2 support seamlessly in multiple languages.",
    benefits: ["Voice agents", "Ticket automation", "Multilingual support", "Knowledge systems"],
    diagram: (
      <svg viewBox="0 0 400 200" className="w-full h-full text-cool-gray-300 font-sans">
        <defs>
          <linearGradient id="gradViolet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b026ff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#b026ff" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <circle cx="80" cy="100" r="30" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="80" y="100" fontSize="12" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">User</text>

        <rect x="140" y="60" width="100" height="80" rx="16" fill="url(#gradViolet)" stroke="#b026ff" strokeWidth="1.5" strokeOpacity="0.6" />
        <text x="190" y="90" fontSize="14" fontWeight="600" fill="#b026ff" textAnchor="middle" dominantBaseline="middle">Voice Agent</text>
        <text x="190" y="110" fontSize="10" fill="#b026ff" fillOpacity="0.7" textAnchor="middle" dominantBaseline="middle">Low Latency</text>

        <rect x="280" y="50" width="80" height="40" rx="8" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="320" y="70" fontSize="11" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">Zendesk</text>

        <rect x="280" y="110" width="80" height="40" rx="8" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="320" y="130" fontSize="11" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">Internal KB</text>

        <path d="M110,100 L135,100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <polygon points="135,97 140,100 135,103" fill="currentColor" fillOpacity="0.5" />
        
        <path d="M240,85 L275,70" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <polygon points="274,67 280,68 276,72" fill="currentColor" fillOpacity="0.5" />

        <path d="M240,115 L275,130" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <polygon points="276,128 280,132 274,133" fill="currentColor" fillOpacity="0.5" />
      </svg>
    ),
    color: "from-neon-violet/20 to-purple-600/20",
    borderColor: "border-neon-violet/30",
    appTitle: "Voice Agent // Call Monitor",
    appStatus: "Live Follow-up",
    backType: "support"
  },
  {
    id: "sales",
    title: "AI Sales Automation",
    description: "Scale outbound efforts and accelerate inbound lead qualification with autonomous sales development representatives.",
    benefits: ["Lead qualification", "SDR automation", "CRM enrichment", "Outbound workflows"],
    diagram: (
      <svg viewBox="0 0 400 200" className="w-full h-full text-cool-gray-300 font-sans">
        <defs>
          <linearGradient id="gradEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <rect x="40" y="55" width="70" height="30" rx="6" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="75" y="70" fontSize="11" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">Inbound</text>
        
        <rect x="40" y="115" width="70" height="30" rx="6" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="75" y="130" fontSize="11" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">Outbound</text>

        <rect x="150" y="70" width="100" height="60" rx="12" fill="url(#gradEmerald)" stroke="#34d399" strokeWidth="1.5" strokeOpacity="0.6" />
        <text x="200" y="92" fontSize="13" fontWeight="600" fill="#34d399" textAnchor="middle" dominantBaseline="middle">AI SDR</text>
        <text x="200" y="110" fontSize="10" fill="#34d399" fillOpacity="0.8" textAnchor="middle" dominantBaseline="middle">Qualify & Book</text>

        <rect x="290" y="75" width="80" height="50" rx="8" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="330" y="100" fontSize="12" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">Salesforce</text>

        <path d="M110,70 L145,85" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <polygon points="144,82 150,87 146,88" fill="currentColor" fillOpacity="0.5" />
        
        <path d="M110,130 L145,115" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <polygon points="146,112 150,113 144,118" fill="currentColor" fillOpacity="0.5" />

        <path d="M250,100 L285,100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <polygon points="285,97 290,100 285,103" fill="currentColor" fillOpacity="0.5" />
      </svg>
    ),
    color: "from-emerald-400/20 to-green-600/20",
    borderColor: "border-emerald-400/30",
    appTitle: "Sales SDR // Active Sequence",
    appStatus: "Outreach Active",
    backType: "sales"
  },
  {
    id: "knowledge",
    title: "Enterprise Knowledge AI",
    description: "Connect your enterprise data silos into a single, intelligent RAG system for instant internal retrieval and compliance checking.",
    benefits: ["Internal copilots", "SOP retrieval", "Enterprise search", "RAG systems"],
    diagram: (
      <svg viewBox="0 0 400 200" className="w-full h-full text-cool-gray-300 font-sans">
        <defs>
          <linearGradient id="gradWhite" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        <rect x="40" y="50" width="70" height="28" rx="6" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="75" y="64" fontSize="11" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">Notion</text>

        <rect x="40" y="86" width="70" height="28" rx="6" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="75" y="100" fontSize="11" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">S3 / Docs</text>

        <rect x="40" y="122" width="70" height="28" rx="6" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="75" y="136" fontSize="11" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">Jira</text>

        <rect x="150" y="60" width="100" height="80" rx="16" fill="url(#gradWhite)" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" />
        <text x="200" y="90" fontSize="13" fontWeight="600" fill="#ffffff" textAnchor="middle" dominantBaseline="middle">Vector DB</text>
        <text x="200" y="110" fontSize="10" fill="#ffffff" fillOpacity="0.6" textAnchor="middle" dominantBaseline="middle">& RAG System</text>

        <rect x="290" y="75" width="80" height="50" rx="12" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="330" y="100" fontSize="11" fontWeight="600" fill="currentColor" textAnchor="middle" dominantBaseline="middle">Internal Copilot</text>

        <path d="M110,64 L145,85" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <path d="M110,100 L145,100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <path d="M110,136 L145,115" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        
        <path d="M250,100 L285,100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <polygon points="285,97 290,100 285,103" fill="currentColor" fillOpacity="0.5" />
      </svg>
    ),
    color: "from-white/10 to-gray-500/10",
    borderColor: "border-white/20",
    appTitle: "Enterprise Copilot // Search",
    appStatus: "Ready",
    backType: "knowledge"
  }
];

const voiceWaveStyle = `
  @keyframes voiceWave {
    0%, 100% { transform: scaleY(0.3); }
    50% { transform: scaleY(1.2); }
  }
  .voice-bar-anim {
    animation: voiceWave 1.2s ease-in-out infinite;
    transform-origin: bottom;
  }
`;

function renderBackContent(backType: string) {
  if (backType === "ops") {
    return (
      <div className="font-mono text-xs text-cool-gray-300 space-y-3 flex-1 flex flex-col justify-between">
        <div className="bg-black/40 border border-white/5 rounded-xl p-4 space-y-2 flex-1 overflow-y-auto max-h-[220px]">
          <div className="text-cool-gray-500">// Scheduled daemon run at 03:00 AM</div>
          <div className="flex gap-2">
            <span className="text-neon-cyan">[03:14:22]</span>
            <span className="text-emerald-400">[ERP Sync]</span>
            <span>Syncing transactions... Success (142 files)</span>
          </div>
          <div className="flex gap-2">
            <span className="text-neon-cyan">[03:14:25]</span>
            <span className="text-amber-400">[Auditing]</span>
            <span>Running auto-reconciliation... Clear</span>
          </div>
          <div className="flex gap-2">
            <span className="text-neon-cyan">[03:14:30]</span>
            <span className="text-[#b026ff]">[Compliance]</span>
            <span>Generating PDF reports... Completed</span>
          </div>
          <div className="flex gap-2">
            <span className="text-neon-cyan">[03:14:35]</span>
            <span className="text-blue-400">[Slack Alert]</span>
            <span>Sending summary to #finance-ops... Sent</span>
          </div>
          <div className="flex gap-2 text-cool-gray-500 animate-pulse">
            <span>&gt; Daemon idle. Listening for events...</span>
          </div>
        </div>
        <div className="bg-[#00f0ff]/5 border border-[#00f0ff]/10 rounded-xl p-3">
          <div className="text-[10px] text-neon-cyan font-bold tracking-wider uppercase mb-0.5">Impact Metric</div>
          <div className="text-xs font-semibold text-white leading-snug">
            Agents that work 24*7. Eliminates 95% of manual ledger and reporting work with zero errors.
          </div>
        </div>
      </div>
    );
  }

  if (backType === "support") {
    return (
      <div className="text-xs text-cool-gray-300 space-y-3 flex-1 flex flex-col justify-between">
        <div className="bg-black/40 border border-white/5 rounded-xl p-4 flex-1 flex flex-col justify-between min-h-[180px] max-h-[220px]">
          {/* Call waveform panel */}
          <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-violet rounded-full animate-ping" />
              <span className="font-mono text-cool-gray-400 text-[10px]">Caller: Sarah Jenkins (Lead)</span>
            </div>
            <span className="font-mono text-neon-violet text-[10px]">01:42</span>
          </div>

          {/* Audio Visualizer */}
          <div className="flex items-end justify-center gap-1.5 h-10 my-2">
            <div className="w-1.5 bg-neon-violet/80 voice-bar-anim rounded-full" style={{ height: "40%", animationDelay: "0.1s" }} />
            <div className="w-1.5 bg-neon-violet voice-bar-anim rounded-full" style={{ height: "80%", animationDelay: "0.3s" }} />
            <div className="w-1.5 bg-neon-violet/80 voice-bar-anim rounded-full" style={{ height: "50%", animationDelay: "0.0s" }} />
            <div className="w-1.5 bg-neon-violet voice-bar-anim rounded-full" style={{ height: "95%", animationDelay: "0.5s" }} />
            <div className="w-1.5 bg-neon-violet/70 voice-bar-anim rounded-full" style={{ height: "30%", animationDelay: "0.2s" }} />
            <div className="w-1.5 bg-neon-violet voice-bar-anim rounded-full" style={{ height: "70%", animationDelay: "0.4s" }} />
            <div className="w-1.5 bg-neon-violet/90 voice-bar-anim rounded-full" style={{ height: "60%", animationDelay: "0.15s" }} />
          </div>

          {/* Transcript snippets */}
          <div className="space-y-1.5 mt-1 font-sans text-[11px] leading-relaxed">
            <div className="flex gap-2">
              <span className="font-medium text-neon-violet flex-shrink-0">Voice Agent:</span>
              <span className="italic text-cool-gray-300">"Hi Sarah, checking back on Case #9821. The latency is resolved."</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium text-emerald-400 flex-shrink-0">Sarah:</span>
              <span className="italic text-cool-gray-300">"Oh, wow! Yes, it's working perfectly now. Thanks for checking in."</span>
            </div>
          </div>
        </div>

        <div className="bg-[#b026ff]/5 border border-[#b026ff]/10 rounded-xl p-3">
          <div className="text-[10px] text-neon-violet font-bold tracking-wider uppercase mb-0.5">Impact Metric</div>
          <div className="text-xs font-semibold text-white leading-snug">
            Voice agents that follow up. Autonomously checks back with customers when a ticket is resolved.
          </div>
        </div>
      </div>
    );
  }

  if (backType === "sales") {
    return (
      <div className="text-xs text-cool-gray-300 space-y-3 flex-1 flex flex-col justify-between">
        <div className="bg-black/40 border border-white/5 rounded-xl p-4 flex-1 flex flex-col gap-2 overflow-y-auto max-h-[220px]">
          {/* Email Header */}
          <div className="space-y-1 pb-2 border-b border-white/5 font-sans">
            <div className="flex justify-between">
              <span className="text-cool-gray-500">To: <span className="text-gray-300 font-medium">alex.p@techcorp.com</span></span>
              <span className="text-emerald-400 font-mono text-[9px] bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">HubSpot</span>
            </div>
            <div>
              <span className="text-cool-gray-500">Subject: <span className="text-gray-300 font-medium text-[11px]">Scale manual workflows at TechCorp?</span></span>
            </div>
          </div>

          {/* Email Body */}
          <div className="font-sans text-cool-gray-400 pl-2 border-l-2 border-emerald-500/30 py-0.5 text-[11px] leading-relaxed">
            <p className="mb-1">Hey Alex, saw you recently grew your customer success team.</p>
            <p>I built a custom automation blueprint for your ticket routing that could save you 15+ hours/week. Do you have 10 mins this week?</p>
          </div>

          {/* Reply Bubble */}
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-2 self-end max-w-[90%] font-sans text-white text-[11px]">
            <div className="text-[9px] text-emerald-400 font-semibold mb-0.5">Alex P. (Reply)</div>
            <div>Actually, yes. Let's talk. Do you have time on Thursday at 2 PM?</div>
          </div>
        </div>

        <div className="bg-emerald-400/5 border border-emerald-400/10 rounded-xl p-3">
          <div className="text-[10px] text-emerald-400 font-bold tracking-wider uppercase mb-0.5">Impact Metric</div>
          <div className="text-xs font-semibold text-white leading-snug">
            Autonomous SDRs sending hyper-personalized outreach and booking qualified sales meetings.
          </div>
        </div>
      </div>
    );
  }

  if (backType === "knowledge") {
    return (
      <div className="text-xs text-cool-gray-300 space-y-3 flex-1 flex flex-col justify-between">
        <div className="bg-black/40 border border-white/5 rounded-xl p-4 flex-1 flex flex-col gap-2.5 overflow-y-auto max-h-[220px]">
          {/* Slack Channel Header */}
          <div className="pb-1.5 border-b border-white/5 font-sans flex items-center gap-1.5">
            <span className="text-cool-gray-500 font-bold text-sm">#</span>
            <span className="text-white font-medium tracking-wide text-[11px]">ask-velociti-copilot</span>
          </div>

          {/* Chat Stream */}
          <div className="space-y-2.5 font-sans text-[11px] leading-relaxed">
            <div>
              <div className="text-[9px] text-cool-gray-500 font-semibold mb-0.5">David K. [Product]</div>
              <div className="text-gray-300 bg-white/5 rounded-lg px-2 py-1.5 inline-block">
                What is our policy on remote work stipends for international contractor hires?
              </div>
            </div>
            <div>
              <div className="text-[9px] text-white font-semibold mb-0.5 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-[#00f0ff] fill-[#00f0ff]/10" />
                <span>Velociti Copilot</span>
              </div>
              <div className="text-gray-200 bg-white/[0.08] border border-white/5 rounded-lg p-2 space-y-1">
                <p>Full-time employees receive a $500 workspace stipend (Handbook p. 24).</p>
                <p>Notion Doc #108 states this applies to contractors on a pro-rata basis after 90 days.</p>
                <div className="flex gap-1.5 text-[9px] font-mono text-cool-gray-500 mt-1">
                  <span>Sources:</span>
                  <span className="text-neon-cyan underline cursor-pointer">[1] Handbook_v2.pdf</span>
                  <span className="text-neon-cyan underline cursor-pointer">[2] Notion: Contractor Setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-3">
          <div className="text-[10px] text-white font-bold tracking-wider uppercase mb-0.5">Impact Metric</div>
          <div className="text-xs font-semibold text-white leading-snug">
            LLM intelligence that knows your company. Indexes Slack, Notion, Jira, and PDFs for instant answers.
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function SolutionCard({ solution, index }: { solution: any; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-full h-[580px] sm:h-[560px] cursor-pointer group relative"
      style={{ perspective: "1500px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* FRONT FACE */}
        <div 
          className={`absolute inset-0 w-full h-full flex flex-col bg-obsidian border ${solution.borderColor} rounded-3xl overflow-hidden transition-all duration-300 group-hover:border-white/30`}
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          {/* Card Front Content */}
          <div className={`h-48 w-full bg-gradient-to-br ${solution.color} flex items-center justify-center p-6 border-b border-white/5 relative overflow-hidden`}>
            {solution.diagram}
            {/* Flip hint badge in corner */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 flex items-center gap-1.5 text-xs text-cool-gray-300">
              <RotateCw className="w-3.5 h-3.5" />
              <span>Demo</span>
            </div>
          </div>
          
          <div className="p-8 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-display font-medium text-white mb-3">{solution.title}</h3>
              <p className="text-cool-gray-400 mb-6 text-sm sm:text-base leading-relaxed">{solution.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {solution.benefits.map((benefit: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-neon-cyan transition-colors">
                View Real-World Application <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        {/* BACK FACE */}
        <div 
          className={`absolute inset-0 w-full h-full flex flex-col bg-obsidian border ${solution.borderColor} rounded-3xl overflow-hidden`}
          style={{ 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)" 
          }}
        >
          {/* App Window Chrome */}
          <div className="h-12 w-full bg-black/40 border-b border-white/5 flex items-center justify-between px-6">
            <div className="flex items-center">
              {/* Mac-style traffic lights */}
              <div className="flex gap-1.5 items-center mr-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
              </div>
              <span className="text-[10px] font-mono text-cool-gray-500 tracking-wider">
                {solution.appTitle}
              </span>
            </div>
            
            {/* Status indicator */}
            <div className="flex items-center gap-1.5 bg-[#27C93F]/10 border border-[#27C93F]/20 rounded-full px-2.5 py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
              <span className="text-[9px] font-mono text-[#27C93F] tracking-wide font-medium uppercase">
                {solution.appStatus}
              </span>
            </div>
          </div>

          {/* Interactive Simulated Interface Body */}
          <div className="flex-1 p-6 bg-black/20 flex flex-col justify-between overflow-y-auto">
            {renderBackContent(solution.backType)}

            {/* Back Card Footer Details */}
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
              <Link 
                href="/#contact" 
                onClick={(e) => e.stopPropagation()} 
                className="inline-flex items-center gap-2 text-sm font-medium text-neon-cyan hover:text-white transition-colors"
              >
                Book Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="inline-flex items-center gap-1.5 text-xs text-cool-gray-400 hover:text-white transition-colors border border-white/10 rounded-lg px-2.5 py-1 bg-white/5"
              >
                <RotateCw className="w-3 h-3" />
                <span>Flip Back</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function StructuredSolutions() {
  return (
    <section id="solutions" className="py-24 bg-black relative border-t border-white/5">
      <style dangerouslySetInnerHTML={{ __html: voiceWaveStyle }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">Structured Solutions</h2>
          <p className="text-cool-gray-400 max-w-2xl text-lg">
            We deploy purpose-built AI architectures that integrate securely with your existing tech stack, designed specifically for measurable operational impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
