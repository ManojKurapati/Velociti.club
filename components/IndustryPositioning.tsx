"use client";

import { motion } from "framer-motion";
import { Truck, HeartPulse, Building2, Landmark } from "lucide-react";

const industries = [
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    icon: Truck,
    description: "Dynamic route optimization, automated dispatching, and vendor contract analysis.",
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    description: "HIPAA-compliant patient scheduling, billing automation, and diagnostic reasoning assistance.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10"
  },
  {
    id: "finance",
    name: "Finance",
    icon: Landmark,
    description: "Automated loan origination, real-time regulatory compliance checks, and secure collections.",
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: Building2,
    description: "Intelligent lead qualification, automated tenant support, and property document parsing.",
    color: "text-orange-400",
    bg: "bg-orange-400/10"
  }
];

export function IndustryPositioning() {
  return (
    <section id="industries" className="py-24 bg-obsidian relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-4">Industry Agnostic. Operationally Specific.</h2>
          <p className="text-cool-gray-400 max-w-2xl text-lg">
            We adapt our core autonomous architectures to the specific regulatory, security, and operational needs of your vertical.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black/40 border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-colors"
            >
              <div className={`w-12 h-12 rounded-xl ${ind.bg} flex items-center justify-center mb-6`}>
                <ind.icon className={`w-6 h-6 ${ind.color}`} />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{ind.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{ind.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
