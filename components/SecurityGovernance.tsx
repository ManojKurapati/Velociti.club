"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileCheck, Server, AlertTriangle } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Enterprise Encryption",
    description: "AES-256 encryption at rest and TLS 1.3 in transit. Your proprietary data never trains public LLMs."
  },
  {
    icon: Eye,
    title: "Audit Logs & Observability",
    description: "Complete tracking of every agent action, API call, and reasoning trace for full operational transparency."
  },
  {
    icon: Shield,
    title: "Human-in-the-Loop",
    description: "Configurable approval workflows. Agents pause and request human authorization for high-risk actions."
  },
  {
    icon: AlertTriangle,
    title: "Hallucination Mitigation",
    description: "Multi-agent cross-verification, grounding in your specific data, and strict deterministic fallback logic."
  },
  {
    icon: FileCheck,
    title: "Compliance Readiness",
    description: "Architectures built to support SOC2, HIPAA, and GDPR compliance from day one of deployment."
  },
  {
    icon: Server,
    title: "Private Deployments",
    description: "Option for VPC/On-Premise deployments to ensure your systems remain entirely within your perimeter."
  }
];

export function SecurityGovernance() {
  return (
    <section id="security" className="py-24 bg-obsidian relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">Security & Governance</h2>
          <p className="text-cool-gray-400 max-w-2xl mx-auto text-lg">
            Autonomous systems require absolute trust. We build with defensive engineering principles to ensure your enterprise data and operations are fully protected.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/50 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-colors"
            >
              <feature.icon className="w-6 h-6 text-blue-400 mb-6" />
              <h3 className="text-xl font-medium text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
