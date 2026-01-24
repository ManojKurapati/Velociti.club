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

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-800/50 bg-midnight">
        <p>© {new Date().getFullYear()} Velociti.club. All systems operational.</p>
      </footer>
    </main>
  );
}

