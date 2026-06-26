import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Case Studies & Proven Deployments | Velociti",
  description: "Review detailed quantitative case studies of Velociti's autonomous AI agent deployments across Healthcare, Logistics, and Fintech.",
  keywords: [
    "Velociti case studies",
    "healthcare AI case study",
    "fintech automation metrics",
    "logistics AI dispatch ROI",
    "agentic AI results",
    "proven AI deployments"
  ],
  alternates: {
    canonical: "https://velociti.club/case-studies",
  },
  openGraph: {
    title: "Case Studies & Proven Deployments | Velociti",
    description: "Review detailed quantitative case studies of Velociti's autonomous AI agent deployments across Healthcare, Logistics, and Fintech.",
    url: "https://velociti.club/case-studies",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Velociti Case Studies" }],
    type: "website",
  }
};

const caseStudiesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "headline": "Healthcare Patient Triage & Analytics Automation Case Study",
      "description": "How Velociti deployed an integrated AI agent framework to reduce manual charting times in healthcare by 94% through autonomous structured record generation from voice.",
      "author": {
        "@type": "Organization",
        "name": "Velociti"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Velociti",
        "url": "https://velociti.club"
      }
    },
    {
      "@type": "TechArticle",
      "headline": "Fintech Auto-Loan Underwriting Automation Case Study",
      "description": "How Velociti deployed a secure financial AI pipeline in 12 days to pre-approve 85% of standard loans instantly with complete audit logs and secure data reasoning.",
      "author": {
        "@type": "Organization",
        "name": "Velociti"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Velociti",
        "url": "https://velociti.club"
      }
    },
    {
      "@type": "TechArticle",
      "headline": "Logistics Voice-Native Fleet Rerouting Agent Case Study",
      "description": "How Velociti engineered a voice-native fleet rerouting dispatch agent communicating in 12 languages, generating $4.1M in Year 1 OPEX savings.",
      "author": {
        "@type": "Organization",
        "name": "Velociti"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Velociti",
        "url": "https://velociti.club"
      }
    }
  ]
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
      <Script
        id="case-studies-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesJsonLd) }}
      />
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
