import { SplitLayout } from "@/components/SplitLayout";
import { ClubApplicationForm } from "@/components/ClubApplicationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Velociti Club | Exclusive Club Membership",
  description: "Join a private club of founders, enterprise leaders, and elite engineers building the autonomous future.",
};

export default function CuriousPage() {
  return (
    <main className="min-h-screen pt-32 pb-0 bg-obsidian">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-medium text-white tracking-tight mb-6 sm:mb-8 mt-12">
          Welcome to <br /> The Velociti <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-neon-cyan">Club</span>
        </h1>
        <p className="text-xl sm:text-2xl text-cool-gray-300 font-light mb-12">
          Where pure ambition meets autonomous execution.
        </p>
      </section>

      {/* Manifesto Section */}
      <section className="py-24 bg-black border-t border-white/5" id="manifesto">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-10">
            <span className="w-2 h-2 rounded-full bg-neon-violet animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/80">The 2026 Mandate</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-10 leading-tight">
            We don't just build.<br />
            <span className="italic font-light text-cool-gray-500">We engineer the exit velocity.</span>
          </h2>
          <div className="prose prose-invert prose-lg mx-auto text-cool-gray-400">
            <p>
              The era of the $100M SaaS startup burning capital on bloated operations teams is dead. The next decacorns are hyper-capital-efficient enclaves leveraging autonomous AI as their core engine.
            </p>
            <p>
              We established The Velociti Club as an exclusive nexus point. We embed elite AI infrastructures directly into aggressive high-growth startups to manufacture impenetrable software moats, and we deploy startup-grade execution logic into calcified enterprise architectures.
            </p>
            <p className="text-white font-medium">
              If your enterprise isn't governed by agentic loops by Q4 2026, you belong to the past.
            </p>
          </div>
        </div>
      </section>

      <SplitLayout />

      <ClubApplicationForm />

    </main>
  );
}
