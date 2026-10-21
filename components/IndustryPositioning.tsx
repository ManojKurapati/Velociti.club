"use client";

import { Droplet, HeartPulse, Landmark, Car, Pill, Hotel, GraduationCap } from "lucide-react";

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    description: "Ambient clinical voice scribing, medical billing automation, and diagnostic RAG systems."
  },
  {
    id: "finance",
    name: "Finance",
    icon: Landmark,
    description: "Structured credit underwriting pre-verification, real-time compliance auditing, and secure debt recovery."
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    icon: Droplet,
    description: "Predictive asset telemetry, automated technician dispatch, and technical schematic RAG systems."
  },
  {
    id: "automobile",
    name: "Automobile",
    icon: Car,
    description: "Computer vision assembly line anomaly routing, parts tracking, and supply chain audit workflows."
  },
  {
    id: "pharma",
    name: "Pharma",
    icon: Pill,
    description: "Clinical trial protocol checking, automated adverse event intake, and chemical patent compliance search."
  },
  {
    id: "hospitality",
    name: "Hospitality",
    icon: Hotel,
    description: "Low-latency booking voice agents, guest preference matching, and room service dispatch routing."
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    description: "Admissions enrollment assistants, automated credit transfer evaluation, and financial aid compliance check loops."
  }
];

export function IndustryPositioning() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-obsidian relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-4">Built around how your industry works</h2>
          <p className="text-cool-gray-400 max-w-2xl text-lg">
            The same core systems, adapted to the regulations, security rules, and day-to-day operations of each sector.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {industries.map((ind) => (
            <li key={ind.id} className="flex gap-5 py-7 border-t border-white/10">
              <ind.icon className="w-5 h-5 mt-1 text-cool-gray-500 shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-medium text-white mb-1.5">{ind.name}</h3>
                <p className="text-cool-gray-400 text-base leading-relaxed max-w-md">{ind.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
