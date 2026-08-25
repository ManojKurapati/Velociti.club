import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Case Studies & Proven Deployments | Velociti",
  description: "Review detailed quantitative case studies of Velociti's autonomous AI agent deployments across Healthcare, Finance, Oil & Gas, Automobile, Pharma, Hospitality, and Education.",
  keywords: [
    "Velociti case studies",
    "healthcare AI case study",
    "financial underwriting AI",
    "oil and gas predictive AI",
    "automobile quality control AI",
    "pharma compliance RAG",
    "hospitality voice agents",
    "education enrollment AI",
    "proven AI deployments"
  ],
  alternates: {
    canonical: "https://velociti.club/case-studies",
  },
  openGraph: {
    title: "Case Studies & Proven Deployments | Velociti",
    description: "Review detailed quantitative case studies of Velociti's autonomous AI agent deployments across Healthcare, Finance, Oil & Gas, Automobile, Pharma, Hospitality, and Education.",
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
      "headline": "Healthcare Clinical Documentation & Charting Support",
      "description": "Ambient voice integrations automatically drafting EHR clinical notes, reducing administrative charting overhead by 38% for clinicians.",
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
      "headline": "Finance Structured Underwriting & Compliance Automation",
      "description": "Secure financial RAG pipelines pre-checking credit parameters and regulatory files to increase auto-loan underwriting throughput by 42%.",
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
      "headline": "Oil & Gas Predictive Asset Telemetry & Operations",
      "description": "Agentic telemetry pipelines predicting machinery and valve failures to reduce unplanned pipeline downtime by 18%.",
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
      "headline": "Automobile QA & Supply Chain Routing Control",
      "description": "Computer vision and workflow automation routing parts tracking across assembly lines, reducing quality control inspection cycle times by 24%.",
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
      "headline": "Pharma Clinical Trial Protocol Compliance RAG",
      "description": "Secure multi-source compliance RAG scanning clinical trial protocol documents to accelerate audit protocol reviews by 40%.",
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
      "headline": "Hospitality Autonomous Booking & Concierge Voice Agents",
      "description": "Low-latency reservation and guest services voice agents, driving direct booking conversions up by 35%.",
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
      "headline": "Education Adaptive Admissions & Enrollment Support",
      "description": "Admissions support agents answering credit-transfer and financial-aid compliance inquiries to reduce enrollment drop-offs by 28%.",
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
      title: "Clinical Charting Support",
      metric: "2.4 hrs",
      metricDesc: "Saved daily per clinician.",
      description: "Secure HIPAA-compliant ambient voice integration that automatically drafts EHR documentation, leaving final approval to the physician."
    },
    {
      industry: "Finance",
      title: "Credit Underwriting & Compliance",
      metric: "42%",
      metricDesc: "Increase in processing throughput.",
      description: "Secure RAG pipeline that aggregates credit bureau APIs, bank statements, and regulatory checklists to pre-verify applicant loan files for credit analysts."
    },
    {
      industry: "Oil & Gas",
      title: "Predictive Valve Telemetry",
      metric: "18%",
      metricDesc: "Reduction in unplanned downtime.",
      description: "Telemetry reasoning pipeline monitoring temperature and pressure sensors to forecast valve degradation, dispatching technicians prior to failures."
    },
    {
      industry: "Automobile",
      title: "Assembly Quality Inspection",
      metric: "24%",
      metricDesc: "Reduction in QA cycle times.",
      description: "Vision models integrated with workflow agents that track parts across the assembly line, detecting micro-anomalies and routing alerts to quality control teams."
    },
    {
      industry: "Pharma",
      title: "Clinical Trial Protocol Audit",
      metric: "40%",
      metricDesc: "Faster protocol check cycle.",
      description: "Compliance RAG pipeline scanning trial draft documents against global health guidelines and historic FDA filings to preemptively isolate regulatory conflicts."
    },
    {
      industry: "Hospitality",
      title: "Reservation & Concierge Voice",
      metric: "35%",
      metricDesc: "Increase in direct booking rate.",
      description: "Low-latency voice agents handling room reservations, guest service routing, and billing inquiries, reducing front-desk overload and SLA wait-times."
    },
    {
      industry: "Education",
      title: "Adaptive Admissions Support",
      metric: "28%",
      metricDesc: "Reduction in enrollment drop-off.",
      description: "Interactive agents that answer incoming student inquiries regarding credit transfers, course criteria, and financial aid compliance autonomously."
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
