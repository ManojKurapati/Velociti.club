import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Velociti",
  description: "Meet the team engineering the autonomous enterprise transition.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-40 pb-32 bg-obsidian">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-medium text-white tracking-tight mb-8">
          The Architecture <span className="text-white/50">Syndicate</span>
        </h1>
        <p className="text-xl text-cool-gray-400">
          We are elite engineers, not consultants.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-neon-violet to-neon-cyan flex-shrink-0 p-1">
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
    </main>
  );
}
