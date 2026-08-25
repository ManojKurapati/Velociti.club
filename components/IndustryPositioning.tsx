"use client";

import { motion } from "framer-motion";
import { Droplet, HeartPulse, Landmark, Car, Pill, Hotel, GraduationCap } from "lucide-react";

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    description: "Ambient clinical voice scribing, medical billing automation, and diagnostic RAG systems.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10"
  },
  {
    id: "finance",
    name: "Finance",
    icon: Landmark,
    description: "Structured credit underwriting pre-verification, real-time compliance auditing, and secure debt recovery.",
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    icon: Droplet,
    description: "Predictive asset telemetry, automated technician dispatch, and technical schematic RAG systems.",
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    id: "automobile",
    name: "Automobile",
    icon: Car,
    description: "Computer vision assembly line anomaly routing, parts tracking, and supply chain audit workflows.",
    color: "text-orange-400",
    bg: "bg-orange-400/10"
  },
  {
    id: "pharma",
    name: "Pharma",
    icon: Pill,
    description: "Clinical trial protocol checking, automated adverse event intake, and chemical patent compliance search.",
    color: "text-teal-400",
    bg: "bg-teal-400/10"
  },
  {
    id: "hospitality",
    name: "Hospitality",
    icon: Hotel,
    description: "Low-latency booking voice agents, guest preference matching, and room service dispatch routing.",
    color: "text-pink-400",
    bg: "bg-pink-400/10"
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    description: "Admissions enrollment assistants, automated credit transfer evaluation, and financial aid compliance check loops.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black/40 border border-cool-gray-800 rounded-2xl p-6 hover:border-cool-gray-700 transition-colors"
            >
              <div className={`w-12 h-12 rounded-xl ${ind.bg} flex items-center justify-center mb-6`}>
                <ind.icon className={`w-6 h-6 ${ind.color}`} />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{ind.name}</h3>
              <p className="text-cool-gray-400 text-sm leading-relaxed">{ind.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
