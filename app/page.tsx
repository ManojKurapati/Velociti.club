import { Hero } from "@/components/Hero";
import { InteractiveTimeline } from "@/components/InteractiveTimeline";
import { VelocityInAction } from "@/components/VelocityInAction";
import { TheClubTeaser } from "@/components/TheClubTeaser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Velociti | The Autonomous Loop™",
  description: "We don't build AI. We deploy enterprise-grade autonomous systems that win funding and market leadership.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian overflow-hidden relative">
      <Hero />
      <InteractiveTimeline />
      <VelocityInAction />
      <TheClubTeaser />
    </main>
  );
}
