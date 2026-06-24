import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Showreel } from "@/components/Showreel";
import { StructuredSolutions } from "@/components/StructuredSolutions";
import { IndustryPositioning } from "@/components/IndustryPositioning";
import { SecurityGovernance } from "@/components/SecurityGovernance";
import { OnPremDeployment } from "@/components/OnPremDeployment";
import { EnterpriseCaseStudies } from "@/components/EnterpriseCaseStudies";
import { TestimonialQuote } from "@/components/TestimonialQuote";
import { CtaSection } from "@/components/CtaSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Velociti | Enterprise AI Systems That Automate Real Operations",
  description: "We deploy secure AI agents across sales, support, operations, and workflows using your existing systems and data.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian overflow-hidden relative">
      <Hero />
      <TrustBar />
      <Showreel />
      <StructuredSolutions />
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
