"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function TheClubTeaser() {
  return (
    <section className="py-32 bg-obsidian relative border-t border-white/5 flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtbDItMiAyaDJsMiAydjJoLTJ2LTJoLTJ2LTJ6bTMgNHYtbDItMiAyaDJsMiAxdjJoLTR2LTJoLTR2LTF6IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz48L2c+PC9zdmc+')] opacity-50" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm font-medium mb-8">
          By Invitation & Application Only
        </div>
        
        <h2 className="text-5xl md:text-7xl font-display font-medium text-white mb-6 tracking-tight">
          The Velocity <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-neon-cyan">Club</span>
        </h2>
        
        <p className="text-xl text-cool-gray-400 mb-12 max-w-2xl mx-auto">
          Where ambition meets execution. Join a private syndicate of founders, enterprise leaders, and elite engineers building the autonomous future.
        </p>
        
        <Link 
          href="/curious" 
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform"
        >
          Apply for Membership
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
