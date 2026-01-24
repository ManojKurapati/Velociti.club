"use client";
import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Map, TrendingUp, ArrowRight } from "lucide-react";

interface Phase {
    id: string;
    title: string;
    subtitle: string;
    icon: React.ElementType;
    color: string;
    glowColor: string;
    items: string[];
}

const phases: Phase[] = [
    {
        id: "validation",
        title: "Technical Validation",
        subtitle: "Phase 01",
        icon: FlaskConical,
        color: "from-neon-blue to-cyan-400",
        glowColor: "rgba(0, 243, 255, 0.15)",
        items: [
            "High-Fidelity Agentic POC",
            "Scalable Architecture Design",
            "Technical Documentation",
        ],
    },
    {
        id: "traction",
        title: "Market Traction",
        subtitle: "Phase 02",
        icon: Map,
        color: "from-neon-purple to-pink-500",
        glowColor: "rgba(189, 0, 255, 0.15)",
        items: [
            "Targeted GTM Strategy",
            "First 100 Enterprise Customers",
            "Data-Driven Feedback Loop",
        ],
    },
    {
        id: "scale",
        title: "Operational Scale",
        subtitle: "Phase 03",
        icon: TrendingUp,
        color: "from-emerald-400 to-teal-500",
        glowColor: "rgba(52, 211, 153, 0.15)",
        items: [
            "Foundational Team Blueprint",
            "Equity & Legal Framework",
            "Venture-Grade Compliance",
        ],
    },
];

export const LaunchChecklist = () => {
    return (
        <section className="w-full py-20 sm:py-32 px-4 sm:px-6 bg-[#050810] flex flex-col items-center relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl w-full relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                        The Path to <span className="text-neon-blue">Investor-Ready</span>
                    </h2>
                    <p className="text-gray-400 max-w-lg mx-auto text-lg">
                        Three phases to transform your vision into a fundable venture.
                    </p>
                </motion.div>

                {/* Phase Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {phases.map((phase, index) => {
                        const Icon = phase.icon;

                        return (
                            <motion.div
                                key={phase.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                className="group relative"
                            >
                                <div
                                    className="h-full p-8 rounded-2xl glass-panel transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                                    style={{ boxShadow: `0 0 40px ${phase.glowColor}` }}
                                >
                                    {/* Phase Number & Icon */}
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                                            {phase.subtitle}
                                        </span>
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors">
                                        {phase.title}
                                    </h3>

                                    {/* Items */}
                                    <ul className="space-y-3">
                                        {phase.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start gap-3">
                                                <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0 group-hover:text-neon-blue transition-colors" />
                                                <span className="text-gray-400 text-sm leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Connection Line (between cards on desktop) */}
                                {index < phases.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-gray-700 to-transparent" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-700 text-gray-300 hover:border-neon-purple hover:text-neon-purple transition-all font-medium backdrop-blur-sm bg-midnight/50"
                    >
                        Start Your Journey
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
