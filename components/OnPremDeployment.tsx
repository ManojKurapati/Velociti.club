"use client";

import { Section } from "./ui/section";
import { Badge } from "./ui/badge";
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
    <Section id="on-prem">
      <div className="grid gap-px bg-line lg:grid-cols-12">
        <div className="bg-canvas px-6 pt-20 pb-12 md:px-10 md:pt-24 md:pb-14 lg:col-span-7">
          <Badge secure>Network isolation</Badge>
          <h2 className="mt-6 font-display text-3xl font-semibold text-white md:text-[2.75rem] md:leading-[1.1]">
            On-premise and airgapped AI
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-cool-gray-400 md:text-lg">
            <p>
              Most enterprise AI sends your documents, customer conversations, and source code to third-party servers. For many regulated teams, that is a non-starter.
            </p>
            <p className="text-white">
              We package the models, vector databases, and agent logic into containers that run inside your perimeter, with no connection to the public internet.
            </p>
            <p>
              No data leaves your network, nothing is used to train someone else&apos;s model, and you own the deployment outright: a permanent asset your IT team runs, not an API you rent.
            </p>
          </div>
        </div>
        <div className="bg-surface p-2 md:p-3 lg:col-span-5">
          <div className="relative h-full min-h-[320px] overflow-hidden rounded-md border border-line">
            <img
              src="/images/onprem_secure_node.png"
              alt="Illustration of an isolated on-premise server rack"
              className="absolute inset-0 h-full w-full object-cover grayscale contrast-110 brightness-75"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-px border-t border-line bg-line md:grid-cols-3">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="bg-canvas p-6 md:p-8">
            <benefit.icon className="h-5 w-5 text-cool-gray-500" aria-hidden="true" />
            <h3 className="mt-8 text-base font-semibold text-white">{benefit.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-cool-gray-400">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-line px-6 pt-10 pb-6 md:px-10">
        <h3 className="text-sm font-medium text-white">Where it matters most</h3>
        <p className="mt-1 text-sm text-cool-gray-500">Sectors where cloud AI rarely clears compliance.</p>
      </div>
      <dl className="grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind) => (
          <div key={ind.name} className="bg-canvas p-6 md:p-8">
            <dt className="text-[15px] font-semibold text-white">{ind.name}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-cool-gray-400">{ind.detail}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
