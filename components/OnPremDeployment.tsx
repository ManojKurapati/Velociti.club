"use client";

import { motion } from "framer-motion";
import { Server, Shield, Cpu, Lock, Network, Database, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Lock,
    title: "Airgapped Security",
    description: "Operate in total isolation. Zero external API calls, zero telemetry data leakage, and a complete physical firewall perimeter.",
    color: "text-neon-cyan border-neon-cyan/20 bg-neon-cyan/5",
  },
  {
    icon: Cpu,
    title: "Hardware Optimized",
    description: "Optimized directly for your on-premise NVIDIA H100s or private VPC clusters for near-zero network latency.",
    color: "text-neon-violet border-neon-violet/20 bg-neon-violet/5",
  },
  {
    icon: Database,
    title: "Full Data Sovereignty",
    description: "Ensure proprietary trade secrets, customer records, and internal codebases remain 100% under your physical ownership.",
    color: "text-white border-white/10 bg-white/5",
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
    <section id="on-prem" className="py-32 bg-obsidian relative border-t border-white/5 overflow-hidden">
      {/* Dynamic background lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-neon-cyan/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-neon-violet/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <Server className="w-4 h-4 text-neon-cyan" />
            Sovereign Deployments
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-medium text-white mb-6 tracking-tight"
          >
            Sovereign On-Premise & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">
              Airgapped AI Infrastructure
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cool-gray-400 max-w-3xl mx-auto text-lg md:text-xl font-light"
          >
            While most AI relies on public cloud API endpoints that leak your context, Velociti deploys offline-capable, self-contained neural nodes directly within your secure perimeter.
          </motion.p>
        </div>

        {/* Hero split: copy vs. image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Text/Copy Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-6">
                What does Airgapped & Sovereign mean?
              </h3>
              
              <div className="space-y-6 text-cool-gray-400 font-light text-base md:text-lg leading-relaxed">
                <p>
                  In simple terms, standard enterprise AI sends your raw documents, customer chats, and internal source code out to external third-party servers.
                </p>
                <p className="border-l-2 border-neon-cyan/50 pl-4 py-1 bg-neon-cyan/5 text-white/95 rounded-r-lg font-medium">
                  Velociti's Sovereign deployment keeps everything inside your walls. We package complete reasoning models, vector databases, and agent logic into fully containerized clusters.
                </p>
                <p>
                  Once deployed, we sever all connection links to the external internet. Your systems function with <strong>complete physical isolation (airgapped)</strong>. No data leaks, no corporate surveillance, and no third-party training on your data—ever.
                </p>
              </div>

              {/* Unique Moat Callout */}
              <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="p-2 bg-neon-violet/10 rounded-xl">
                  <Shield className="w-6 h-6 text-neon-violet" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">A Unique Enterprise Moat</h4>
                  <p className="text-sm text-cool-gray-400 leading-relaxed">
                    Own your neural weights. Unlike other vendors renting access to remote API wrapper services, Velociti equips your IT department with a permanent, physical AI asset that runs entirely offline.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Premium Image Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square max-w-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,240,255,0.15)] group"
            >
              <img 
                src="/images/onprem_secure_node.png" 
                alt="Airgapped Server Node illustration" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Floating overlay status card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/75 border border-white/10 backdrop-blur-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan animate-pulse" />
                  <span className="text-xs text-white font-semibold uppercase tracking-wider">Network Isolation: Active</span>
                </div>
                <span className="text-[10px] text-neon-cyan border border-neon-cyan/30 px-2 py-0.5 rounded-full uppercase font-bold tracking-widest">
                  Airgapped
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/50 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all flex flex-col"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 ${benefit.color}`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">{benefit.title}</h3>
              <p className="text-cool-gray-400 text-sm leading-relaxed font-light">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Industry Applicability Grid */}
        <div className="border-t border-white/10 pt-16">
          <div className="text-center md:text-left mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-4">Applicable Industries</h3>
            <p className="text-cool-gray-400 font-light text-base">Highly regulated sectors where cloud deployments fail compliance standards.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                  <h4 className="text-white font-medium text-base">{ind.name}</h4>
                </div>
                <p className="text-cool-gray-400 text-xs leading-relaxed font-light">{ind.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
