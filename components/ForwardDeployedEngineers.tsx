import Link from "next/link";
import { buttonVariants } from "./ui/button";

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
    <section id="forward-deployed-engineers" className="border-t border-line">
      <div className="mx-auto max-w-7xl border-x border-line">
        <div className="px-6 pt-20 pb-12 md:px-10 md:pt-24 md:pb-14">
          <h2 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
            We don&apos;t hand you a login. We send engineers.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cool-gray-400 md:text-lg">
            Our forward deployed engineers (FDEs) join your team for weeks or months, untangle the systems you actually run, and ship production AI on your data, inside your stack.
          </p>
        </div>

        <div className="grid gap-px border-t border-line bg-line lg:grid-cols-12">
          <div className="bg-surface p-6 md:p-10 lg:col-span-5">
            <h3 className="text-sm font-medium text-white">What most teams are working with</h3>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {mess.map((item) => (
                <li key={item} className="py-3.5 text-[15px] leading-snug text-cool-gray-400">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] text-white">FDEs are built for exactly this.</p>
          </div>

          <div className="bg-canvas p-6 md:p-10 lg:col-span-7">
            <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">
              What is a forward deployed engineer?
            </h3>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-cool-gray-400">
              <p>
                A senior engineer who comes into your environment and makes AI work there. Part software engineer, part solutions architect, part product manager, part consultant, with one difference: FDEs build. They wire up systems, write production code, debug integrations, build dashboards, and create new features when your business needs them.
              </p>
              <p>
                Companies no longer want a basic chatbot. They want AI agents connected safely to their CRM, databases, billing, and documents, and someone has to do that integration on-site.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-line px-6 pt-10 pb-6 md:px-10">
          <h3 className="text-sm font-medium text-white">How an engagement runs</h3>
        </div>
        <ol className="grid gap-px border-t border-line bg-line md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="bg-canvas p-6 md:p-8">
              <span className="font-mono text-xs text-cool-gray-500">Step {index + 1}</span>
              <h4 className="mt-4 font-display text-xl font-semibold text-white">{step.title}</h4>
              <p className="mt-3 text-[15px] leading-relaxed text-cool-gray-400">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="grid gap-px border-t border-line bg-line lg:grid-cols-12">
          <p className="bg-canvas p-6 font-display text-2xl font-semibold leading-tight md:p-10 md:text-4xl lg:col-span-8">
            <span className="text-cool-gray-500">Software engineers build the product. Consultants explain it. </span>
            <span className="text-white">FDEs show up and make it work for your problem.</span>
          </p>
          <div className="flex items-end bg-canvas p-6 md:p-10 lg:col-span-4 lg:justify-end">
            <Link
              href="https://calendly.com/manojkurapati96/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "lg" })}
            >
              Book a call with an FDE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
