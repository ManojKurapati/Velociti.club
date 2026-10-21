import Link from "next/link";

const mess = [
  "A legacy ERP from 2009 nobody wants to touch",
  "The same customer stored in five different formats",
  "Custom APIs no one remembers writing",
  "That one spreadsheet quietly running everything",
];

const steps = [
  {
    title: "Make you AI-ready",
    description:
      "We embed with your team, map every system, data source, and workflow, and find where AI pays off first.",
  },
  {
    title: "Engineer your data",
    description:
      "We build pipelines that clean, unify, and govern data across your ERPs, CRMs, databases, and documents, so AI has a foundation it can trust.",
  },
  {
    title: "Move you to AI-native",
    description:
      "We wire secure AI agents into your CRM, billing, databases, and documents, then ship the production code, dashboards, and features your teams need.",
  },
];

export function ForwardDeployedEngineers() {
  return (
    <section id="forward-deployed-engineers" className="py-24 md:py-36 bg-obsidian relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-medium text-white leading-[1.05] mb-8">
            We don&apos;t hand you a login. We send engineers.
          </h2>
          <p className="text-cool-gray-400 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
            Our forward deployed engineers (FDEs) join your team for weeks or months, untangle the systems you actually run, and ship production AI on your data, inside your stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 md:mb-28">
          <div className="lg:col-span-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 md:p-10">
            <h3 className="text-lg font-medium text-white mb-6">What most teams are working with</h3>
            <ul className="space-y-4">
              {mess.map((item) => (
                <li key={item} className="flex gap-3 text-cool-gray-300 text-base md:text-lg font-light leading-snug">
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-cool-gray-500 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-white text-base md:text-lg">
              FDEs are built for exactly this.
            </p>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-6">
              What is a forward deployed engineer?
            </h3>
            <div className="space-y-5 text-cool-gray-400 font-light text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                A senior engineer who comes into your environment and makes AI work there. Part software engineer, part solutions architect, part product manager, part consultant, with one difference: FDEs build. They wire up systems, write production code, debug integrations, build dashboards, and create new features when your business needs them.
              </p>
              <p>
                Companies no longer want a basic chatbot. They want AI agents connected safely to their CRM, databases, billing, and documents, and someone has to do that integration on-site.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20 md:mb-28">
          <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-10">How an engagement runs</h3>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {steps.map((step, index) => (
              <li key={step.title}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm text-white tabular-nums">
                    {index + 1}
                  </span>
                  {index < steps.length - 1 && <span className="hidden md:block h-px flex-1 bg-white/10" aria-hidden="true" />}
                </div>
                <h4 className="text-xl md:text-2xl font-display font-medium text-white mb-3">{step.title}</h4>
                <p className="text-cool-gray-400 text-base font-light leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <p className="lg:col-span-8 font-display text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
            <span className="text-cool-gray-500">Software engineers build the product. Consultants explain it. </span>
            <span className="text-white">FDEs show up and make it work for your problem.</span>
          </p>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              href="https://calendly.com/manojkurapati96/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full font-medium text-base sm:text-lg hover:bg-cool-gray-200 transition-colors"
            >
              Book a call with an FDE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
