import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Blog | Velociti",
  description: "Read the latest insights on enterprise AI, autonomous systems, and generative engine optimization.",
};

export default function BlogPage() {
  const articles = [
    {
      title: "The End of the $100M SaaS Startup",
      date: "September 12, 2026",
      category: "Strategy",
      description: "Why capital-efficient agentic loops are outcompeting traditional software models."
    },
    {
      title: "RAG is Dead. Long Live Autonomous Context",
      date: "October 04, 2026",
      category: "Engineering",
      description: "How structural changes in context window handling obsolete previous GenAI approaches."
    },
    {
      title: "Voice Native: Designing for Zero-Latency Interactions",
      date: "November 21, 2026",
      category: "Product",
      description: "Real-time AI voice agents demand entirely new UX paradigms. Here is how we build them."
    }
  ];

  return (
    <main className="min-h-screen pt-40 pb-32 bg-obsidian">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-medium text-white tracking-tight mb-8">
          The Velociti <span className="text-neon-cyan">Insights</span>
        </h1>
        <p className="text-xl text-cool-gray-400">
          Executive briefings and deep dives into the autonomous loop.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6">
        <div className="grid gap-8 border-t border-white/10 pt-12">
          {articles.map((article, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="flex gap-4 mb-3 items-center">
                <span className="text-xs uppercase tracking-widest text-neon-violet font-bold border border-neon-violet/30 px-3 py-1 rounded-full bg-neon-violet/10">
                  {article.category}
                </span>
                <span className="text-sm text-cool-gray-500 font-mono">{article.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display text-white mb-3 group-hover:text-neon-cyan transition-colors">
                {article.title}
              </h2>
              <p className="text-cool-gray-400 mb-6 pb-8 border-b border-white/5">
                {article.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
