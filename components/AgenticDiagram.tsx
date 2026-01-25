"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Bot, Cog, Zap } from "lucide-react";

interface NodeProps {
    icon: React.ElementType;
    label: string;
    subLabel: string;
    tooltip: string;
    position: string;
    delay: number;
    color: string;
    glowColor: string;
}

const nodes: NodeProps[] = [
    {
        icon: Brain,
        label: "LLM's",
        subLabel: "Intelligence",
        tooltip: "Large Language Models powering reasoning and understanding",
        position: "top-0 left-1/2 -translate-x-1/2 -translate-y-24",
        delay: 0,
        color: "text-neon-blue",
        glowColor: "rgba(0, 243, 255, 0.3)",
    },
    {
        icon: Bot,
        label: "Agents",
        subLabel: "Autonomy",
        tooltip: "Intelligent agents executing complex multi-step tasks",
        position: "left-0 top-1/2 -translate-x-24 -translate-y-1/2",
        delay: 0.2,
        color: "text-neon-purple",
        glowColor: "rgba(189, 0, 255, 0.3)",
    },
    {
        icon: Cog,
        label: "Automation",
        subLabel: "Execution",
        tooltip: "Seamless workflow automation and process optimization",
        position: "right-0 top-1/2 translate-x-24 -translate-y-1/2",
        delay: 0.4,
        color: "text-neon-blue",
        glowColor: "rgba(0, 243, 255, 0.3)",
    },
];

export const AgenticDiagram = () => {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    return (
        <section id="capability-map" className="w-full py-20 sm:py-32 flex flex-col items-center justify-center relative overflow-hidden min-h-[600px] md:min-h-screen">
            {/* Background */}
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-midnight/50 to-midnight pointer-events-none" />

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20 relative z-10 px-4"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                    The <span className="text-neon-purple">Autonomous</span> Loop
                </h2>
                <p className="text-gray-400 max-w-lg mx-auto text-lg">
                    LLM's, Agents, and Automation working in perfect harmony.
                </p>
            </motion.div>

            {/* Diagram Container */}
            <div className="w-full flex justify-center overflow-visible px-4">
                <div className="relative w-[500px] h-[500px] flex items-center justify-center scale-[0.55] sm:scale-75 md:scale-90 lg:scale-100 origin-center">
                    {/* Connection Lines (SVGs) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        <defs>
                            <linearGradient id="lineGradientBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#00f3ff" stopOpacity="0" />
                                <stop offset="50%" stopColor="#00f3ff" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#00f3ff" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="lineGradientPurple" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#bd00ff" stopOpacity="0" />
                                <stop offset="50%" stopColor="#bd00ff" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#bd00ff" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        {/* Lines to Center */}
                        <line x1="50%" y1="10%" x2="50%" y2="40%" stroke="url(#lineGradientBlue)" strokeWidth="2" />
                        <line x1="10%" y1="50%" x2="40%" y2="50%" stroke="url(#lineGradientPurple)" strokeWidth="2" />
                        <line x1="90%" y1="50%" x2="60%" y2="50%" stroke="url(#lineGradientBlue)" strokeWidth="2" />

                        {/* Orbit Circle */}
                        <circle cx="50%" cy="50%" r="35%" fill="none" stroke="#1a1f2e" strokeWidth="1" />
                    </svg>

                    {/* Central Reasoning Engine */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative z-20 flex flex-col items-center group cursor-pointer"
                        onMouseEnter={() => setHoveredNode("reasoning")}
                        onMouseLeave={() => setHoveredNode(null)}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-neon-purple/40 blur-3xl rounded-full animate-pulse-slow scale-150" />
                            <div className="w-36 h-36 rounded-full glass-panel border-2 border-neon-purple/50 flex items-center justify-center shadow-[0_0_60px_rgba(189,0,255,0.4)] relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:border-neon-purple">
                                <Zap className="w-14 h-14 text-neon-purple" />
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-white font-semibold text-lg">Velociti Core</h3>
                            <p className="text-neon-purple/80 text-xs uppercase tracking-wider">Orchestration Hub</p>
                        </div>

                        {/* Center Tooltip */}
                        <AnimatePresence>
                            {hoveredNode === "reasoning" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute -top-20 left-1/2 -translate-x-1/2 w-52 glass-panel p-4 rounded-xl z-50 pointer-events-none"
                                >
                                    <p className="text-xs text-center text-gray-300">The central brain coordinating task decomposition and strategy.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Orbital Nodes */}
                    {nodes.map((node) => {
                        const Icon = node.icon;
                        const isHovered = hoveredNode === node.label;

                        return (
                            <motion.div
                                key={node.label}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: node.delay, type: "spring", stiffness: 200 }}
                                className={`absolute ${node.position} z-20 flex flex-col items-center group cursor-pointer`}
                                onMouseEnter={() => setHoveredNode(node.label)}
                                onMouseLeave={() => setHoveredNode(null)}
                            >
                                <div
                                    className={`w-20 h-20 rounded-2xl glass-panel flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 ${node.color}`}
                                    style={{ boxShadow: isHovered ? `0 0 30px ${node.glowColor}` : undefined }}
                                >
                                    <Icon className={`w-8 h-8 ${node.color}`} />
                                </div>
                                <div className="mt-3 text-center">
                                    <h4 className="text-white font-semibold text-sm">{node.label}</h4>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">{node.subLabel}</p>
                                </div>

                                {/* Node Tooltip */}
                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="absolute top-full mt-3 w-44 glass-panel p-3 rounded-xl z-50 pointer-events-none text-center"
                                        >
                                            <p className="text-xs text-gray-300">{node.tooltip}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
