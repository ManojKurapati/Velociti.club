import { EnterprisePillars } from "@/components/EnterprisePillars";
import { RoiCalculator } from "@/components/RoiCalculator";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise AI Solutions | Velociti",
  description: "Deploy autonomous systems in weeks, not years. Explore Voice Agents, RAG, and Workflow Automation tailored for Healthcare, Finance, and Logistics.",
};

export default function EnterprisePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-obsidian">
      {/* Enterprise Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-medium text-white tracking-tight mb-6 mt-12">
          AI-fy Your Enterprise <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">
            Deploy in weeks, not years.
          </span>
        </h1>
        <p className="text-xl text-cool-gray-400 max-w-2xl mx-auto mb-10">
          Transform legacy workflows into intelligent, autonomous systems. Stop playing with ChatGPT wrappers and start building structural moats.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#roi" className="btn-glow inline-flex border border-white/20 bg-white/5 items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium text-white hover:bg-white/10 transition-colors">
            Calculate ROI
          </a>
          <a href="https://calendly.com/manojkurapati96/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium text-black bg-white hover:bg-neon-cyan transition-colors">
            Book Executive Briefing <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <EnterprisePillars />
      
      {/* Proven Deployments Section (Case Studies) */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4">Proven Deployments</h2>
            <p className="text-cool-gray-400">Real integration metrics across highly regulated industries.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <div className="text-neon-cyan text-sm font-bold tracking-widest uppercase mb-4">Fintech • Series C</div>
              <h3 className="text-2xl font-medium text-white mb-4">Autonomous Loan Underwriting</h3>
              <div className="grid grid-cols-2 gap-6 mb-6 pt-6 border-t border-white/10">
                <div>
                  <div className="text-3xl font-display font-bold text-white mb-1">12 days</div>
                  <div className="text-xs text-cool-gray-400">Total Deploy Time</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-white mb-1">-65%</div>
                  <div className="text-xs text-cool-gray-400">Processing Cost</div>
                </div>
              </div>
              <p className="text-cool-gray-400 text-sm">Agents successfully reason over W-2s, paystubs, and bank logic to autonomously pre-approve 80% of applicants.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <div className="text-neon-violet text-sm font-bold tracking-widest uppercase mb-4">Logistics • Enterprise</div>
              <h3 className="text-2xl font-medium text-white mb-4">Voice-Native Routing Control</h3>
              <div className="grid grid-cols-2 gap-6 mb-6 pt-6 border-t border-white/10">
                <div>
                  <div className="text-3xl font-display font-bold text-white mb-1">2.4M</div>
                  <div className="text-xs text-cool-gray-400">Calls Handled / mo</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-white mb-1">99.2%</div>
                  <div className="text-xs text-cool-gray-400">Resolution Rate</div>
                </div>
              </div>
              <p className="text-cool-gray-400 text-sm">Zero-latency voice agents managing driver dispatch and customer updates, replacing a 400-person offshore center.</p>
            </div>
          </div>
        </div>
      </section>

      <RoiCalculator />
      
    </main>
  );
}
