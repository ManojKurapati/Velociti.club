import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Showreel } from "@/components/Showreel";
import { StructuredSolutions } from "@/components/StructuredSolutions";
import { WhatsUpNews } from "@/components/WhatsUpNews";
import { IndustryPositioning } from "@/components/IndustryPositioning";
import { SecurityGovernance } from "@/components/SecurityGovernance";
import { OnPremDeployment } from "@/components/OnPremDeployment";
import { EnterpriseCaseStudies } from "@/components/EnterpriseCaseStudies";
import { TestimonialQuote } from "@/components/TestimonialQuote";
import { CtaSection } from "@/components/CtaSection";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Velociti | Enterprise AI Systems That Automate Real Operations",
  description: "We deploy secure AI agents across sales, support, operations, and workflows using your existing systems and data.",
  keywords: [
    "enterprise AI agents",
    "business process automation",
    "voice intelligence AI",
    "Retrieval-Augmented Generation RAG",
    "on-premise AI systems",
    "autonomous software agents"
  ],
  alternates: {
    canonical: "https://velociti.club",
  },
  openGraph: {
    title: "Velociti | Enterprise AI Systems That Automate Real Operations",
    description: "We deploy secure AI agents across sales, support, operations, and workflows using your existing systems and data.",
    url: "https://velociti.club",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Velociti Enterprise AI Systems" }],
    type: "website",
  }
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "AI Operations Automation",
      "provider": {
        "@type": "Organization",
        "name": "Velociti",
        "url": "https://velociti.club"
      },
      "description": "Automate complex internal workflows, ERP data synchronization, automated ledger reconciliation, compliance report generation, and process optimization.",
      "areaServed": "Worldwide"
    },
    {
      "@type": "Service",
      "name": "AI Customer Support Systems",
      "provider": {
        "@type": "Organization",
        "name": "Velociti",
        "url": "https://velociti.club"
      },
      "description": "Deploy low-latency, multilingual voice and text agents that handle L1/L2 customer support queries, Zendesk ticketing integration, and proactive customer follow-ups.",
      "areaServed": "Worldwide"
    },
    {
      "@type": "Service",
      "name": "AI Sales Automation",
      "provider": {
        "@type": "Organization",
        "name": "Velociti",
        "url": "https://velociti.club"
      },
      "description": "Scale outbound efforts and qualify inbound leads with autonomous AI SDRs integrated with HubSpot and Salesforce CRM.",
      "areaServed": "Worldwide"
    },
    {
      "@type": "Service",
      "name": "Enterprise Knowledge AI",
      "provider": {
        "@type": "Organization",
        "name": "Velociti",
        "url": "https://velociti.club"
      },
      "description": "Bridge data silos by connecting Slack, Notion, Jira, Amazon S3, and PDFs into a single, high-performance RAG system for instant compliance and retrieval.",
      "areaServed": "Worldwide"
    }
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Velociti offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Velociti offers custom-engineered Enterprise AI Systems, including AI Operations Automation, low-latency AI Customer Support Systems (Voice & Text Agents), AI Sales Automation (Autonomous SDRs), and Enterprise Knowledge AI (RAG Systems)."
      }
    },
    {
      "@type": "Question",
      "name": "How fast can Velociti deploy an autonomous system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unlike legacy dev cycles that take 12 to 18 months, Velociti deploys production-ready autonomous systems in 4 to 11 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "What is the response latency of Velociti's AI Voice Agents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Velociti's voice-native AI agents operate with an ultra-low latency of 1.2 to 1.4 seconds, making conversational customer interactions seamless and natural."
      }
    },
    {
      "@type": "Question",
      "name": "Are Velociti enterprise deployments secure and compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Velociti systems are built to be GDPR and HIPAA-ready. We offer fully secure architectures including private cloud and on-premise deployments (VPC) with complete data encryption and RAG permission boundaries."
      }
    }
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian overflow-hidden relative">
      <Script
        id="home-services-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="home-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <TrustBar />
      <Showreel />
      <StructuredSolutions />
      <WhatsUpNews />
      <IndustryPositioning />
      <SecurityGovernance />
      <OnPremDeployment />
      <EnterpriseCaseStudies />
      <TestimonialQuote 
        quote="Velociti reduced our deployment timeline by 8 months. The autonomous voice agents handled our seasonal spike without a single dropped query."
        author="Sarah Jenkins"
        role="CTO, Global Logistics Corp"
        metric="8.4M"
        metricLabel="Calls Automated"
      />
      <CtaSection />
    </main>
  );
}
