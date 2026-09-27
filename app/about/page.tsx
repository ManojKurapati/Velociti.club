import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Us | Velociti Leadership & Elite AI Engineers",
  description: "Meet the executive team engineering the autonomous enterprise transition. Guided by Manoj Kurapati (Founder & CEO) and Lavine Hemlani (Board Member & Investor).",
  keywords: [
    "Velociti leadership",
    "Manoj Kurapati",
    "Lavine Hemlani",
    "AI engineers",
    "autonomous enterprise transition",
    "Velociti founders"
  ],
  alternates: {
    canonical: "https://velociti.club/about",
  },
  openGraph: {
    title: "About Us | Velociti Leadership & Elite AI Engineers",
    description: "Meet the executive team engineering the autonomous enterprise transition. Guided by Manoj Kurapati (Founder & CEO) and Lavine Hemlani (Board Member & Investor).",
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
      "description": "Manoj founded Velociti to fundamentally rewire corporate infrastructure to run on agentic logic. His career spans applied AI research at the Center for Cloud Computing and Big Data, technology leadership at early childhood startups, and Generative AI leadership for oil and gas and energy companies.",
      "sameAs": [
        "https://www.linkedin.com/company/velociti-club/"
      ]
    },
    {
      "@type": "Person",
      "name": "Lavine Hemlani",
      "jobTitle": "Board Member & Investor",
      "worksFor": {
        "@type": "Organization",
        "name": "Velociti",
        "url": "https://velociti.club"
      },
      "description": "Lavine is the Founder & CEO of Zenith, a capital markets and advisory firm spanning Hong Kong, Dubai and New York, and the founder of Xccelerate, an AI and software engineering education-to-employment platform. He serves Velociti as a Board Member and Investor.",
      "sameAs": [
        "https://www.linkedin.com/in/lavine-hemlani-17932826/"
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
            <p className="text-cool-gray-400 mb-6 leading-relaxed">
              That conviction was earned across three very different frontiers. Manoj began in applied AI research at the Center for Cloud Computing and Big Data, building models at the scale where theory meets infrastructure. He then crossed to the founder's side of the table as Technology Lead for early childhood startups, shipping products where the users can't read a manual and the systems simply have to work.
            </p>
            <p className="text-cool-gray-400 leading-relaxed">
              Most recently he served as Generative AI Lead for oil and gas and energy companies, deploying large language model systems inside some of the most regulated, safety-critical and data-heavy operations on earth. Velociti is the synthesis of that journey: research rigor, startup velocity and enterprise-grade reliability, engineered into autonomous systems that run the business rather than talk about it.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12 mt-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start text-center md:text-left">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-500 to-neon-cyan flex-shrink-0 p-1">
            <div className="w-full h-full bg-black rounded-full overflow-hidden flex items-center justify-center relative">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md"></div>
              {/* Note: Update with actual board member image later */}
              <span className="text-3xl font-display text-white z-10 relative">LH</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-medium text-white mb-2">Lavine Hemlani</h2>
            <h3 className="text-neon-cyan uppercase tracking-widest text-sm font-bold mb-6">Board Member & Investor</h3>
            <p className="text-cool-gray-400 mb-6 leading-relaxed">
              Lavine is the Founder & CEO of Zenith, a capital markets and advisory firm with offices in Hong Kong, Dubai and New York that has arranged more than $4B in transactions for founders, funds and financiers. At Velociti he brings the capital discipline and global operator network required to take autonomous enterprise systems from pilot to scale.
            </p>
            <p className="text-cool-gray-400 leading-relaxed">
              A University of Chicago economist who began his career in M&amp;A at Lazard, Lavine went on to found Xccelerate, one of Asia's leading AI and software engineering education-to-employment platforms, and to co-found Founders Circle, a community of more than 750 founders across 22 cities. He also serves as an investor and board member at Clearbot and as Vice President of the Artificial Intelligence Society of Hong Kong.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
