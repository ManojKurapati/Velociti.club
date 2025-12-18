"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Database, Zap, Cpu, HardDrive } from "lucide-react";

interface NodeProps {
    icon: React.ElementType;
    label: string;
    subLabel: string;
    tooltip: string;
    position: string;
    delay: number;
    color: string;
}

const nodes: NodeProps[] = [
    {
        icon: Database,
        label: "Sensors",
        subLabel: "Data Input",
        tooltip: "Real-time unstructured data ingestion",
        position: "top-0 left-1/2 -translate-x-1/2 -translate-y-24",
        delay: 0,
        color: "text-neon-blue",
    },
    {
        icon: HardDrive,
        label: "Memory",
        subLabel: "Vector DB",
        tooltip: "Real-time context retrieval via RAG",
        position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-24",
        delay: 0.2,
        color: "text-neon-purple",
    },
    {
        icon: Cpu,
        label: "Tools",
        subLabel: "APIs & Chain",
        tooltip: "Blockchain transaction & API execution",
        position: "left-0 top-1/2 -translate-x-24 -translate-y-1/2",
        delay: 0.4,
        color: "text-white",
    },
    {
        icon: Zap,
        label: "Actuators",
        subLabel: "Action",
        tooltip: "Autonomous decision execution",
        position: "right-0 top-1/2 translate-x-24 -translate-y-1/2",
        delay: 0.6,
        color: "text-neon-blue",
    },
];

export const AgenticDiagram = () => {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    return (
        <section id="capability-map" className="w-full py-32 flex flex-col items-center justify-center relative overflow-hidden min-h-[800px]">
            {/* Background Grid */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-midnight dark:via-transparent dark:to-midnight pointer-events-none" />

            <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Autonomous Reasoning Loop</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">Interconnected systems working in perfect velocity.</p>
            </div>

            <div className="w-full flex justify-center overflow-hidden">
                <div className="relative w-[500px] h-[500px] flex items-center justify-center scale-[0.6] sm:scale-75 md:scale-100 origin-center">
                    {/* Connection Lines (SVGs) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-50">
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#00f3ff" opacity="0.5" />
                            </marker>
                        </defs>
                        {/* Lines to Center */}
                        <line x1="50%" y1="10%" x2="50%" y2="40%" stroke="#00f3ff" strokeWidth="1" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
                        <line x1="50%" y1="90%" x2="50%" y2="60%" stroke="#bd00ff" strokeWidth="1" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
                        <line x1="10%" y1="50%" x2="40%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
                        <line x1="90%" y1="50%" x2="60%" y2="50%" stroke="#00f3ff" strokeWidth="1" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />

                        {/* Orbit Circle */}
                        <circle cx="50%" cy="50%" r="35%" fill="none" stroke="#333" strokeOpacity="0.3" strokeDasharray="10, 5" />
                    </svg>

                    {/* Central Reasoning Engine */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative z-20 flex flex-col items-center group"
                        onMouseEnter={() => setHoveredNode("reasoning")}
                        onMouseLeave={() => setHoveredNode(null)}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-neon-purple/30 blur-2xl rounded-full animate-pulse-slow" />
                            <div className="w-40 h-40 rounded-full bg-midnight border-2 border-neon-purple flex items-center justify-center shadow-[0_0_50px_rgba(189,0,255,0.3)] relative z-10 transition-transform duration-500 group-hover:scale-110">
                                <Brain className="w-16 h-16 text-neon-purple" />
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-white font-mono text-xl font-bold">Reasoning Engine</h3>
                            <p className="text-neon-purple text-xs uppercase tracking-wider">LLM Orchestration</p>
                        </div>

                        {/* Center Tooltip */}
                        <AnimatePresence>
                            {hoveredNode === "reasoning" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 bg-midnight/90 border border-neon-purple p-3 rounded-lg backdrop-blur-md z-50 pointer-events-none"
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
                                transition={{ delay: node.delay }}
                                className={`absolute ${node.position} z-20 flex flex-col items-center group cursor-pointer`}
                                onMouseEnter={() => setHoveredNode(node.label)}
                                onMouseLeave={() => setHoveredNode(null)}
                            >
                                <div className={`w-20 h-20 rounded-2xl bg-[#0F1423] border border-gray-700 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:border-current ${node.color} hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]`}>
                                    <Icon className={`w-8 h-8 ${node.color}`} />
                                </div>
                                <div className="mt-2 text-center bg-midnight/80 px-2 py-1 rounded backdrop-blur-sm border border-gray-800">
                                    <h4 className="text-white font-bold text-sm">{node.label}</h4>
                                    <p className="text-[10px] text-gray-500 uppercase">{node.subLabel}</p>
                                </div>

                                {/* Node Tooltip */}
                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="absolute top-full mt-2 w-40 bg-midnight/90 border border-gray-700 p-2 rounded-lg backdrop-blur-md z-50 pointer-events-none text-center"
                                        >
                                            <p className="text-xs text-gray-300">{node.tooltip}</p>
                                            <div className={`absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-midnight border-l border-t border-gray-700`} />
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
