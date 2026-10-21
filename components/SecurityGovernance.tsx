"use client";

import { Shield, Lock, Eye, FileCheck, Server, AlertTriangle } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Enterprise encryption",
    description: "AES-256 encryption at rest and TLS 1.3 in transit. Your proprietary data never trains public LLMs."
  },
  {
    icon: Eye,
    title: "Audit logs and observability",
    description: "Complete tracking of every agent action, API call, and reasoning trace for full operational transparency."
  },
  {
    icon: Shield,
    title: "Human in the loop",
    description: "Configurable approval workflows. Agents pause and request human authorization for high-risk actions."
  },
  {
    icon: AlertTriangle,
    title: "Hallucination mitigation",
    description: "Multi-agent cross-verification, grounding in your specific data, and strict deterministic fallback logic."
  },
  {
    icon: FileCheck,
    title: "Compliance readiness",
    description: "Architectures built to support SOC2, HIPAA, and GDPR compliance from day one of deployment."
  },
  {
    icon: Server,
    title: "Private deployments",
    description: "Option for VPC/On-Premise deployments to ensure your systems remain entirely within your perimeter."
  }
];

export function SecurityGovernance() {
  return (
    <section id="security" className="py-24 md:py-32 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Shield className="w-7 h-7 text-cool-gray-400 mb-6" aria-hidden="true" />
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">Security and governance</h2>
            <p className="text-cool-gray-400 text-lg leading-relaxed">
              AI that acts on your systems has to be trustworthy. Every deployment ships with these controls from day one.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
          {securityFeatures.map((feature) => (
            <div key={feature.title}>
              <feature.icon className="w-5 h-5 text-cool-gray-500 mb-5" aria-hidden="true" />
              <h3 className="text-xl font-medium text-white mb-2">{feature.title}</h3>
              <p className="text-cool-gray-400 text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
