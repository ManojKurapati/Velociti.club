"use client";

import { Cpu, Lock, Database } from "lucide-react";

const benefits = [
  {
    icon: Lock,
    title: "Fully airgapped",
    description: "Operate in total isolation. Zero external API calls, zero telemetry data leakage, and a complete physical firewall perimeter."
  },
  {
    icon: Cpu,
    title: "Tuned to your hardware",
    description: "Optimized directly for your on-premise NVIDIA H100s or private VPC clusters for near-zero network latency."
  },
  {
    icon: Database,
    title: "Your data stays yours",
    description: "Ensure proprietary trade secrets, customer records, and internal codebases remain 100% under your physical ownership."
  },
];

const industries = [
  {
    name: "Defense & Intelligence",
    detail: "Mission-critical reasoning over classified telemetry and tactical assets in deep offline field zones.",
  },
  {
    name: "Healthcare & MedTech",
    detail: "HIPAA-compliant medical analysis and clinical workflow automation without cloud liabilities.",
  },
  {
    name: "Banking & Sovereign Wealth",
    detail: "High-frequency loan underwriting and fraud detection housed within physical bank vaults.",
  },
  {
    name: "Critical Infrastructure",
    detail: "Automate manufacturing and grid logistics control nodes completely isolated from cyber-intrusion vectors.",
  },
];

export function OnPremDeployment() {
  return (
    <section id="on-prem" className="py-24 md:py-32 bg-obsidian relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 md:mb-28">
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-8">
              On-premise and airgapped AI
            </h2>
            <div className="space-y-6 text-cool-gray-400 font-light text-lg leading-relaxed max-w-2xl">
              <p>
                Most enterprise AI sends your documents, customer conversations, and source code to third-party servers. For many regulated teams, that is a non-starter.
              </p>
              <p className="text-white text-xl md:text-2xl font-display font-normal leading-snug">
                We package the models, vector databases, and agent logic into containers that run inside your perimeter, with no connection to the public internet.
              </p>
              <p>
                No data leaves your network, nothing is used to train someone else&apos;s model, and you own the deployment outright: a permanent asset your IT team runs, not an API you rent.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/5] max-w-[460px] lg:ml-auto rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/images/onprem_secure_node.png"
                alt="Illustration of an isolated on-premise server rack"
                className="w-full h-full object-cover grayscale contrast-110 brightness-90"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 mb-20 md:mb-28">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="border-t border-white/15 pt-8">
              <benefit.icon className="w-5 h-5 text-cool-gray-500 mb-5" aria-hidden="true" />
              <h3 className="text-xl font-medium text-white mb-3">{benefit.title}</h3>
              <p className="text-cool-gray-400 text-base leading-relaxed font-light">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-3">Where it matters most</h3>
            <p className="text-cool-gray-400 font-light text-base">Sectors where cloud AI rarely clears compliance.</p>
          </div>
          <dl className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            {industries.map((ind) => (
              <div key={ind.name}>
                <dt className="text-white font-medium text-base mb-1.5">{ind.name}</dt>
                <dd className="text-cool-gray-400 text-sm leading-relaxed font-light">{ind.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
