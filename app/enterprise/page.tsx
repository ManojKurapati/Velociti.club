import { EnterprisePillars } from "@/components/EnterprisePillars";
import { RoiCalculator } from "@/components/RoiCalculator";
import { TestimonialQuote } from "@/components/TestimonialQuote";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise AI Solutions | Voice Agents, RAG & Autonomous Workflows | Velociti",
  description: "Deploy autonomous systems in weeks, not years. Explore Voice Agents, RAG, and Workflow Automation tailored for Healthcare, Finance, and Logistics.",
};

export default function EnterprisePage() {
  return (
    <main className="min-h-screen pt-40 pb-32 bg-obsidian">
      {/* Enterprise Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white tracking-tight mb-6 sm:mb-8 mt-12">
          Enterprise <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">
            Autonomous Logic.
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-cool-gray-400 max-w-3xl mx-auto mb-10 sm:mb-12 font-light">
          Transmute legacy workflows into intelligent, autonomous neural backbones. Stop deploying fragile API wrappers and start architecting permanent structural moats.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="#roi" className="btn-glow inline-flex border border-white/20 bg-white/5 items-center justify-center gap-2 px-6 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-medium text-white hover:bg-white/10 transition-colors text-base sm:text-lg">
            Calculate ROI
          </a>
          <a href="https://calendly.com/manojkurapati96/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-medium text-black bg-white hover:bg-neon-cyan transition-colors text-base sm:text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Book Executive Briefing <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <EnterprisePillars />
      
      {/* Proven Deployments Section (Case Studies) */}
      <section className="py-32 bg-black border-y border-white/5 relative z-10 box-shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="text-center mb-20 fade-in-section">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">Proven Deployments</h2>
            <p className="text-xl font-light text-cool-gray-400">Real integration metrics across highly regulated industries.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="glass-card card-hover p-10 rounded-[2rem] backdrop-blur-md">
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
            
            <div className="glass-card card-hover p-10 rounded-[2rem] backdrop-blur-md">
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

      <TestimonialQuote 
        quote="The Voice-Native Routing Control deployed by Velociti fundamentally changed our cost structure. We're scaling 5x without adding headcount."
        author="David Chen"
        role="VP Operations, L&M logistics"
        metric="5x"
        metricLabel="Scalability Matrix"
      />
      <RoiCalculator />
      
    </main>
  );
}
