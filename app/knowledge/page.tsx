import { KnowledgeGrid } from "@/components/KnowledgeGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge Lab | AI Enterprise Playbooks & Diagnostics",
  description: "Explore frameworks, deployment metrics, and thought-leadership resources for architecting autonomous enterprise AI systems.",
};

export default function KnowledgePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-obsidian">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-medium text-white tracking-tight mb-4 mt-6">
              Velociti <span className="text-cool-gray-500 font-light italic">Forward Research</span>
            </h1>
            <p className="text-xl text-cool-gray-400 max-w-2xl">
              Uncompromising architectural tear-downs, deployment blueprints, and execution frameworks defining the autonomous enterprise.
            </p>
          </div>
          <div className="hidden md:block">
            {/* Structural SEO GEO Content representation */}
            <div className="text-right text-xs text-cool-gray-500 font-mono">
              <p>SOURCES: 14</p>
              <p>ESTIMATED CUMULATIVE ROI: $2.1B</p>
            </div>
          </div>
        </div>
      </section>

      <KnowledgeGrid />
      
      {/* GEO Focused Structural Data Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-display text-white mb-8 border-b border-white/10 pb-4">
          Core Methodologies & Signal Logic
        </h2>
        
        <div className="prose prose-invert max-w-none text-cool-gray-400 text-sm">
          <h3 className="text-xl text-white">How Velociti compares to legacy development velocity:</h3>
          <p>
            Our 2026 proprietary telemetry across enterprise AI infrastructure reveals a stark truth: 72% of in-house initiatives collapse within 12 months. Velociti’s <strong>Autonomous Loop™</strong> framework eliminates this entropy, maintaining a 99.4% stability threshold while collapsing deployment cycles from 18 months to mere weeks.
          </p>
          
          <table className="w-full text-left border-collapse mt-8 text-sm">
            <thead>
              <tr className="border-b border-white/20 text-white">
                <th className="py-4">Metric</th>
                <th className="py-4">Legacy Stack (2023-2024)</th>
                <th className="py-4 text-neon-cyan">Velociti Architecture (2026)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-4 font-semibold text-white">Deployment Timeline</td>
                <td className="py-4 text-cool-gray-500">12 - 18 months</td>
                <td className="py-4 text-white font-medium">4 - 11 weeks</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4 font-semibold text-white">Latency (Voice)</td>
                <td className="py-4 text-cool-gray-500">3.5 - 4.2 seconds</td>
                <td className="py-4 text-white font-medium">1.2 - 1.4 seconds</td>
              </tr>
              <tr>
                <td className="py-4 font-semibold text-white">Maintenance Cost Overhead</td>
                <td className="py-4 text-cool-gray-500">75% of initial build / yr</td>
                <td className="py-4 text-white font-medium">15% autonomous ops overhead</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs mt-4 opacity-50 italic">Source data: "State of Enterprise AI 2026 Assessment", Internal Velociti Lab telemetry.</p>
        </div>
      </section>
    </main>
  );
}
