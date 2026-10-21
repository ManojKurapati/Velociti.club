"use client";

import Link from "next/link";
import { Section, SectionHeader } from "./ui/section";
import { buttonVariants } from "./ui/button";
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
    <Section id="industries">
      <SectionHeader
        title="Built around how your industry works"
        description="The same core systems, adapted to the regulations, security rules, and day-to-day operations of each sector."
      />
      <ul className="grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind) => (
          <li key={ind.id} className="flex flex-col bg-canvas p-6 md:p-8">
            <ind.icon className="h-5 w-5 text-cool-gray-500" aria-hidden="true" />
            <h3 className="mt-8 text-base font-semibold text-white">{ind.name}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-cool-gray-400">{ind.description}</p>
          </li>
        ))}
        <li className="flex flex-col justify-between bg-surface p-6 md:p-8">
          <h3 className="text-base font-semibold text-white">Not listed?</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-cool-gray-400">
            We adapt to any regulated, process-heavy operation.
          </p>
          <Link
            href="https://calendly.com/manojkurapati96/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "secondary", size: "sm", className: "mt-8 self-start" })}
          >
            Talk to us
          </Link>
        </li>
      </ul>
    </Section>
  );
}
