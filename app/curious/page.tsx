import { SplitLayout } from "@/components/SplitLayout";
import { ClubApplicationForm } from "@/components/ClubApplicationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Velocity Club | Exclusive Syndicate Membership",
  description: "Join a private syndicate of founders, enterprise leaders, and elite engineers building the autonomous future.",
};

export default function CuriousPage() {
  return (
    <main className="min-h-screen pt-32 pb-0 bg-obsidian">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-medium text-white tracking-tight mb-8 mt-12">
          Welcome to <br /> The Velocity <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-neon-cyan">Club</span>
        </h1>
        <p className="text-2xl text-cool-gray-300 font-light mb-12">
          Where ambition meets execution.
        </p>
      </section>

      {/* Manifesto Section */}
      <section className="py-24 bg-black border-t border-white/5" id="manifesto">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-10">
            <span className="w-2 h-2 rounded-full bg-neon-violet animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/80">Our Manifesto</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-10 leading-tight">
            We don't just build.<br />
            <span className="italic font-light text-cool-gray-500">We accelerate to exit.</span>
          </h2>
          <div className="prose prose-invert prose-lg mx-auto text-cool-gray-400">
            <p>
              The era of the $100M SaaS startup burning capital on huge operations teams is over. The next generation of decacorns are small, ultra-capital-efficient teams leveraging autonomous AI execution.
            </p>
            <p>
              We created The Velocity Club as a nexus point. We embed elite AI infrastructure directly into aggressive startups to manufacture moats, and we bring startup-level execution velocity into calcified enterprises. 
            </p>
            <p className="text-white font-medium">
              If you aren't deploying agentic loops by Q4 2026, your competition already is.
            </p>
          </div>
        </div>
      </section>

      <SplitLayout />

      <ClubApplicationForm />

    </main>
  );
}
