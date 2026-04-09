import React from "react";
import Link from "next/link";
import { Mic, Database, Zap } from "lucide-react";

export const MegaMenu = () => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] p-6 rounded-2xl glass border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
      <div className="grid grid-cols-3 gap-6">
        
        <Link href="/enterprise#voice" className="group/item flex flex-col gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]">
          <div className="w-10 h-10 rounded-lg bg-neon-cyan/20 flex items-center justify-center text-neon-cyan group-hover/item:scale-110 transition-transform">
            <Mic className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-medium text-white mb-1">Voice Agents</h4>
            <p className="text-xs text-cool-gray-300">Human-like conversational AI for sales & support.</p>
          </div>
        </Link>
        
        <Link href="/enterprise#rag" className="group/item flex flex-col gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 hover:shadow-[0_0_20px_rgba(157,78,221,0.1)]">
          <div className="w-10 h-10 rounded-lg bg-neon-violet/20 flex items-center justify-center text-neon-violet group-hover/item:scale-110 transition-transform">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-medium text-white mb-1">RAG Systems</h4>
            <p className="text-xs text-cool-gray-300">Intelligent data retrieval over your enterprise corpus.</p>
          </div>
        </Link>
        
        <Link href="/enterprise#workflow" className="group/item flex flex-col gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white group-hover/item:scale-110 transition-transform">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-medium text-white mb-1">AI Workflows</h4>
            <p className="text-xs text-cool-gray-300">Autonomous execution of complex repetitive tasks.</p>
          </div>
        </Link>

      </div>
      
      <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
        <div>
          <h4 className="text-sm font-medium text-white">Not sure where to start?</h4>
          <p className="text-xs text-cool-gray-400">Take our 2-minute diagnostic.</p>
        </div>
        <Link href="#start" className="text-xs font-semibold text-neon-cyan hover:text-white transition-colors flex items-center gap-1">
          Start Diagnostic &rarr;
        </Link>
      </div>
    </div>
  );
};
