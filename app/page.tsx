import { Hero } from "@/components/Hero";
import { AgenticDiagram } from "@/components/AgenticDiagram";
import { LaunchChecklist } from "@/components/LaunchChecklist";

import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight">
      <Hero />
      <AgenticDiagram />
      <LaunchChecklist />
      <ContactSection />

      <footer className="py-12 text-center text-gray-600 text-sm border-t border-gray-900 bg-[#020408]">
        <div className="grid-bg opacity-10 absolute inset-0 pointer-events-none" />
        <p className="relative z-10">&copy; {new Date().getFullYear()} Velociti.club. All systems operational.</p>
      </footer>
    </main>
  );
}
