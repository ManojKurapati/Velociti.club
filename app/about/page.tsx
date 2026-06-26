import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Us | Velociti Leadership & Elite AI Engineers",
  description: "Meet the executive team engineering the autonomous enterprise transition. Guided by Manoj Kurapati (Founder & CEO) and Fatima Qazi (COO).",
  keywords: [
    "Velociti leadership",
    "Manoj Kurapati",
    "Fatima Qazi",
    "AI engineers",
    "autonomous enterprise transition",
    "Velociti founders"
  ],
  alternates: {
    canonical: "https://velociti.club/about",
  },
  openGraph: {
    title: "About Us | Velociti Leadership & Elite AI Engineers",
    description: "Meet the executive team engineering the autonomous enterprise transition. Guided by Manoj Kurapati (Founder & CEO) and Fatima Qazi (COO).",
    url: "https://velociti.club/about",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Velociti Leadership Team" }],
    type: "profile",
  }
};

const aboutPeopleJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "name": "Manoj Kurapati",
      "jobTitle": "Founder & CEO",
      "worksFor": {
        "@type": "Organization",
        "name": "Velociti",
        "url": "https://velociti.club"
      },
      "description": "Manoj founded Velociti to fundamentally rewire corporate infrastructure to run on agentic logic, drawing from years of experience leading engineering systems at elite tech startups.",
      "sameAs": [
        "https://www.linkedin.com/company/velociti-club/"
      ]
    },
    {
      "@type": "Person",
      "name": "Fatima Qazi",
      "jobTitle": "COO",
      "worksFor": {
        "@type": "Organization",
        "name": "Velociti",
        "url": "https://velociti.club"
      },
      "description": "Fatima works intimately with enterprise leadership to identify operational bottlenecks and deploy AI systems that drive maximum efficiency and immediate cost reduction.",
      "sameAs": [
        "https://www.linkedin.com/company/velociti-club/"
      ]
    }
  ]
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-40 pb-32 bg-obsidian">
      <Script
        id="about-people-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPeopleJsonLd) }}
      />
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-medium text-white tracking-tight mb-8">
          The Architecture <span className="text-white/50">Syndicate</span>
        </h1>
        <p className="text-xl text-cool-gray-400">
          We are elite engineers, not consultants.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start text-center md:text-left">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-neon-violet to-neon-cyan flex-shrink-0 p-1">
            <div className="w-full h-full bg-black rounded-full overflow-hidden flex items-center justify-center relative">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md"></div>
              {/* Note: Update with actual founder image later */}
              <span className="text-3xl font-display text-white z-10 relative">MK</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-medium text-white mb-2">Manoj Kurapati</h2>
            <h3 className="text-neon-cyan uppercase tracking-widest text-sm font-bold mb-6">Founder & CEO</h3>
            <p className="text-cool-gray-400 mb-6 leading-relaxed">
              Manoj founded Velociti on a singular thesis: the transition to autonomous AI won't be won by deploying basic conversational wrappers, but by fundamentally rewiring corporate infrastructure to run on agent logic.
            </p>
            <p className="text-cool-gray-400 leading-relaxed">
              Prior to Velociti, Manoj led engineering systems at elite start-ups and pushed the bounds of applied Generative AI infrastructure and highly scalable system designs.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12 mt-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start text-center md:text-left">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-500 to-neon-cyan flex-shrink-0 p-1">
            <div className="w-full h-full bg-black rounded-full overflow-hidden flex items-center justify-center relative">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md"></div>
              {/* Note: Update with actual founder image later */}
              <span className="text-3xl font-display text-white z-10 relative">FQ</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-medium text-white mb-2">Fatima Qazi</h2>
            <h3 className="text-neon-cyan uppercase tracking-widest text-sm font-bold mb-6">COO</h3>
            <p className="text-cool-gray-400 mb-6 leading-relaxed">
              Fatima works intimately with enterprise leadership to identify the precise operational bottlenecks where AI deployment can drive maximum efficiency and immediate cost reduction. 
            </p>
            <p className="text-cool-gray-400 leading-relaxed">
              She ensures that every autonomous system integrated delivers measurable business outcomes and perfectly aligns with the organization's overarching strategic goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
