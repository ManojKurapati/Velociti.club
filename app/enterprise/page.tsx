import { EnterprisePillars } from "@/components/EnterprisePillars";
import { OnPremDeployment } from "@/components/OnPremDeployment";
import { RoiCalculator } from "@/components/RoiCalculator";
import { TestimonialQuote } from "@/components/TestimonialQuote";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Enterprise AI Solutions | Voice Agents, RAG & Autonomous Workflows | Velociti",
  description: "Deploy secure autonomous systems in weeks, not years. Enterprise-grade AI Voice Agents, RAG, and Workflow Automation built for Healthcare, Finance, and Oil & Gas.",
  keywords: [
    "enterprise AI solutions",
    "healthcare AI systems",
    "finance AI underwriting",
    "oil and gas predictive AI",
    "on-premise RAG deployment",
    "private cloud AI systems"
  ],
  alternates: {
    canonical: "https://velociti.club/enterprise",
  },
  openGraph: {
    title: "Enterprise AI Solutions | Voice Agents, RAG & Autonomous Workflows | Velociti",
    description: "Deploy secure autonomous systems in weeks, not years. Enterprise-grade AI Voice Agents, RAG, and Workflow Automation built for Healthcare, Finance, and Oil & Gas.",
    url: "https://velociti.club/enterprise",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Velociti Enterprise AI Solutions" }],
    type: "website",
  }
};

const enterpriseServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Enterprise Autonomous AI Systems",
  "provider": {
    "@type": "Organization",
    "name": "Velociti",
    "url": "https://velociti.club"
  },
  "description": "Enterprise-grade autonomous AI systems integrating Voice Agents, RAG databases, and workflow orchestration. Tailored deployment pipelines for highly regulated industries including Healthcare, Finance, and Oil & Gas.",
  "offers": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Healthcare Claims Verification Systems",
        "description": "HIPAA-compliant RAG Copilots pre-verifying insurance claims against medical compliance texts."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Autonomous Loan Underwriting & Finance Logic",
        "description": "Secure underwriting models pre-evaluating applicant loan files based on bank statement PDFs and credit histories."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Predictive Asset Telemetry Pipelines",
        "description": "Telemetry reasoning agents predicting drilling valve failure from temperature and vibration sensor streams."
      }
    }
  ]
};

export default function EnterprisePage() {
  return (
    <main className="min-h-screen pt-40 pb-32 bg-obsidian">
      <Script
        id="enterprise-service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enterpriseServiceJsonLd) }}
      />
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
      <OnPremDeployment />
      
      {/* Proven Deployments Section (Case Studies) */}
      <section className="py-32 bg-black border-y border-white/5 relative z-10 box-shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="text-center mb-20 fade-in-section">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">Proven Deployments</h2>
            <p className="text-xl font-light text-cool-gray-400">Real integration metrics across highly regulated industries.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="glass-card card-hover p-10 rounded-[2rem] backdrop-blur-md">
              <div className="text-neon-cyan text-sm font-bold tracking-widest uppercase mb-4">Finance • Underwriting</div>
              <h3 className="text-2xl font-medium text-white mb-4">Auto-Loan Pre-Verification</h3>
              <div className="grid grid-cols-2 gap-6 mb-6 pt-6 border-t border-white/10">
                <div>
                  <div className="text-3xl font-display font-bold text-white mb-1">8 Weeks</div>
                  <div className="text-xs text-cool-gray-400">Deploy Time</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-white mb-1">42%</div>
                  <div className="text-xs text-cool-gray-400">Throughput Gain</div>
                </div>
              </div>
              <p className="text-cool-gray-400 text-sm">Agents securely analyze financial PDFs, bank transaction statements, and credit files to pre-verify candidate loans for underwriters.</p>
            </div>
            
            <div className="glass-card card-hover p-10 rounded-[2rem] backdrop-blur-md">
              <div className="text-neon-violet text-sm font-bold tracking-widest uppercase mb-4">Oil & Gas • Operations</div>
              <h3 className="text-2xl font-medium text-white mb-4">Predictive Valve Telemetry</h3>
              <div className="grid grid-cols-2 gap-6 mb-6 pt-6 border-t border-white/10">
                <div>
                  <div className="text-3xl font-display font-bold text-white mb-1">10B+</div>
                  <div className="text-xs text-cool-gray-400">Telemetry Logs / day</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-white mb-1">18%</div>
                  <div className="text-xs text-cool-gray-400">Downtime Reduction</div>
                </div>
              </div>
              <p className="text-cool-gray-400 text-sm">AI reasoning telemetry pipeline monitoring valve temperature and pressure alert thresholds to schedule preemptive technician dispatches.</p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialQuote 
        quote="The Predictive Valve Telemetry platform deployed by Velociti fundamentally changed our maintenance overhead, reducing unplanned downtime by 18%."
        author="David Chen"
        role="VP Technical Operations, Energy Infrastructure Corp"
        metric="18%"
        metricLabel="Downtime Reduction"
      />
      <RoiCalculator />
      
    </main>
  );
}
