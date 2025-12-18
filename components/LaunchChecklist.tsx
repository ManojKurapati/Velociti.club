"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, FlaskConical, Map, TrendingUp } from "lucide-react";

type PillarId = "tech" | "market" | "ops";

interface Pillar {
    id: PillarId;
    title: string;
    icon: React.ElementType;
    color: string;
    items: {
        title: string;
        description: string;
    }[];
}

const pillars: Pillar[] = [
    {
        id: "tech",
        title: "Technical Validation",
        icon: FlaskConical,
        color: "text-neon-blue",
        items: [
            {
                title: "High-Fidelity Agentic POC",
                description: "A functional prototype demonstrating real-world problem-solving.",
            },
            {
                title: "Scalable Architecture",
                description: "Documentation showing a clear path from POC to enterprise-grade infrastructure.",
            },
        ],
    },
    {
        id: "market",
        title: "Market Traction",
        icon: Map,
        color: "text-neon-purple",
        items: [
            {
                title: "Targeted GTM Strategy",
                description: "A hyper-focused plan to acquire the first 100 enterprise customers.",
            },
            {
                title: "Data-Driven Feedback Loop",
                description: "Metrics integration to prove product-market fit and iteration speed.",
            },
        ],
    },
    {
        id: "ops",
        title: "Operational Scalability",
        icon: TrendingUp,
        color: "text-white",
        items: [
            {
                title: "Foundational Team Blueprint",
                description: "Hiring roadmap for AI engineers and growth specialists.",
            },
            {
                title: "Equity & Legal Framework",
                description: "Venture-grade data practices and regulatory alignment (AI/Blockchain).",
            },
        ],
    },
];

export const LaunchChecklist = () => {
    const [completedItems, setCompletedItems] = useState<string[]>([]);

    const toggleItem = (id: string) => {
        if (completedItems.includes(id)) {
            setCompletedItems(completedItems.filter((item) => item !== id));
        } else {
            setCompletedItems([...completedItems, id]);
        }
    };

    const totalItems = pillars.reduce((acc, pillar) => acc + pillar.items.length, 0);
    const allCompleted = completedItems.length === totalItems;

    return (
        <section className="w-full py-24 px-4 bg-gray-50 dark:bg-[#050810] flex flex-col items-center relative overflow-hidden transition-colors duration-300">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl w-full relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    The Path to <span className="text-neon-blue">Investor-Ready</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, pillarIndex) => (
                        <div key={pillar.id} className="flex flex-col gap-6">
                            {/* Pillar Header */}
                            <div className="flex items-center gap-3 mb-2">
                                <div className={`p-2 rounded-lg bg-white dark:bg-midnight border border-gray-200 dark:border-gray-800 shadow-sm`}>
                                    <pillar.icon className={`w-6 h-6 ${pillar.color === "text-white" ? "text-gray-900 dark:text-white" : pillar.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{pillar.title}</h3>
                            </div>

                            {/* Pillar Items */}
                            {pillar.items.map((item, itemIndex) => {
                                const itemId = `${pillar.id}-${itemIndex}`;
                                const isCompleted = completedItems.includes(itemId);

                                return (
                                    <motion.div
                                        key={itemId}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (pillarIndex * 0.2) + (itemIndex * 0.1) }}
                                        onClick={() => toggleItem(itemId)}
                                        className={`relative p-6 rounded-xl border cursor-pointer transition-all duration-300 backdrop-blur-md group overflow-hidden ${isCompleted
                                            ? "bg-white/80 dark:bg-midnight/80 border-neon-blue shadow-[0_0_15px_rgba(0,243,255,0.1)]"
                                            : "bg-white/40 dark:bg-midnight/40 border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 hover:bg-white/60 dark:hover:bg-midnight/60"
                                            }`}
                                    >
                                        <div className="flex justify-between items-start gap-4">
                                            <div>
                                                <h4 className={`font-semibold mb-2 transition-colors ${isCompleted ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-300"}`}>
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm text-gray-500 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${isCompleted
                                                ? "bg-neon-blue border-neon-blue shadow-[0_0_10px_rgba(0,243,255,0.5)]"
                                                : "border-gray-300 dark:border-gray-600 group-hover:border-neon-blue/50"
                                                }`}>
                                                <Check className={`w-3.5 h-3.5 text-midnight transition-transform duration-300 ${isCompleted ? "scale-100" : "scale-0"}`} />
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                <AnimatePresence>
                    {allCompleted && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="mt-20 text-center"
                        >
                            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-neon-blue via-white to-neon-purple animate-pulse-slow">
                                <button className="px-12 py-5 rounded-full bg-midnight dark:bg-white text-white dark:text-midnight font-bold hover:bg-transparent dark:hover:bg-transparent hover:text-white dark:hover:text-white transition-colors duration-300">
                                    Initiate Launch Sequence
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
