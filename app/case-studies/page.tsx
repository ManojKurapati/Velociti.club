import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies | Proven Deployments by Velociti",
  description: "Review quantitative results of Velociti autonomous integration across healthcare, logistics, and finance.",
};

export default function CaseStudiesPage() {
  const cases = [
    {
      industry: "Healthcare",
      title: "Patient Triage & Analytics",
      metric: "94%",
      metricDesc: "Reduction in manual charting time.",
      description: "An integrated framework that routes calls intelligently while constructing structured medical records autonomously from voice data."
    },
    {
      industry: "Fintech",
      title: "Auto-Loan Underwriting",
      metric: "12 Days",
      metricDesc: "Deployment to production.",
      description: "A complete pipeline to securely reason over hundreds of financial data points, approving 85% of standard loans instantly with complete audit logs."
    },
    {
      industry: "Logistics",
      title: "Fleet Rerouting Agent",
      metric: "$4.1M",
      metricDesc: "Y1 OPEX savings.",
      description: "Autonomous voice dispatch agent capable of communicating dynamically with truck drivers in 12 languages instantly."
    }
  ];

  return (
    <main className="min-h-screen pt-40 pb-32 bg-obsidian">
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h1 className="text-5xl md:text-7xl font-display font-medium text-white tracking-tight mb-8">
          Proven <span className="text-neon-violet">Deployments</span>
        </h1>
        <p className="text-xl text-cool-gray-400 max-w-2xl mb-12">
          We don't sell theoretical AI. We install structural moats that generate quantifiable returns.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((cs, i) => (
            <div key={i} className="glass-card rounded-[2rem] p-10 border border-white/10 hover:border-neon-cyan/50 transition-all flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest text-cool-gray-400 mb-6">
                {cs.industry}
              </span>
              <h3 className="text-2xl font-medium text-white mb-10 min-h-[60px]">
                {cs.title}
              </h3>
              
              <div className="mb-8">
                <div className="text-5xl font-display text-neon-cyan font-bold tracking-tighter mb-2">{cs.metric}</div>
                <div className="text-sm text-cool-gray-500">{cs.metricDesc}</div>
              </div>

              <p className="text-cool-gray-400 flex-1 border-t border-white/10 pt-6">
                {cs.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link href="/curious" className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl font-medium text-black bg-white hover:bg-neon-cyan transition-colors text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Start Your Deployment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
