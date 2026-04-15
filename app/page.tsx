import { Hero } from "@/components/Hero";
import { InteractiveTimeline } from "@/components/InteractiveTimeline";
import { VelocityInAction } from "@/components/VelocityInAction";
import { TheClubTeaser } from "@/components/TheClubTeaser";
import { TestimonialQuote } from "@/components/TestimonialQuote";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Velociti | The Autonomous Loop™ – Enterprise AI Agents & Autonomous Systems",
  description: "We don't build AI. We architect enterprise-grade autonomous systems that transmute operational friction into market dominance.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian overflow-hidden relative">
      <Hero />
      <InteractiveTimeline />
      <VelocityInAction />
      <TestimonialQuote 
        quote="Velociti reduced our deployment timeline by 8 months. The autonomous voice agents handled our seasonal spike without a single dropped query."
        author="Sarah Jenkins"
        role="CTO, Global Logistics Corp"
        metric="8.4M"
        metricLabel="Calls Automated"
      />
      <TheClubTeaser />
    </main>
  );
}
