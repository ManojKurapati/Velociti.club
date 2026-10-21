"use client";

import { Section, SectionHeader } from "./ui/section";
import { Badge } from "./ui/badge";
import { Shield, Lock, Eye, FileCheck, Server, AlertTriangle } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Enterprise encryption",
    tag: "AES-256 · TLS 1.3",
    description: "AES-256 encryption at rest and TLS 1.3 in transit. Your proprietary data never trains public LLMs."
  },
  {
    icon: Eye,
    title: "Audit logs and observability",
    tag: "Every action logged",
    description: "Complete tracking of every agent action, API call, and reasoning trace for full operational transparency."
  },
  {
    icon: Shield,
    title: "Human in the loop",
    tag: "Approval gates",
    description: "Configurable approval workflows. Agents pause and request human authorization for high-risk actions."
  },
  {
    icon: AlertTriangle,
    title: "Hallucination mitigation",
    tag: "Grounded outputs",
    description: "Multi-agent cross-verification, grounding in your specific data, and strict deterministic fallback logic."
  },
  {
    icon: FileCheck,
    title: "Compliance readiness",
    tag: "SOC 2 · HIPAA · GDPR",
    description: "Architectures built to support SOC 2, HIPAA, and GDPR compliance from day one of deployment."
  },
  {
    icon: Server,
    title: "Private deployments",
    tag: "VPC or on-prem",
    description: "Optional VPC or on-premise deployment to ensure your systems remain entirely within your perimeter."
  }
];

export function SecurityGovernance() {
  return (
    <Section id="security">
      <SectionHeader
        title="Security and governance"
        description="AI that acts on your systems has to be trustworthy. These controls are part of the architecture, not add-ons."
        aside={<Shield className="hidden h-6 w-6 text-cool-gray-500 lg:block" aria-hidden="true" />}
      />
      <div className="grid gap-px border-t border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {securityFeatures.map((feature) => (
          <div key={feature.title} className="flex flex-col bg-canvas p-6 md:p-8">
            <div className="flex items-center justify-between">
              <feature.icon className="h-5 w-5 text-cool-gray-500" aria-hidden="true" />
              <Badge secure>{feature.tag}</Badge>
            </div>
            <h3 className="mt-8 text-base font-semibold text-white">{feature.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-cool-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
