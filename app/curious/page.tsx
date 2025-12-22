"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket, Building2, Users } from "lucide-react";

const BubbleCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Spring-like ease without the bounce
                delay
            }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
};

export default function CuriousPage() {
    return (
        <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-gray-50 dark:bg-midnight overflow-x-hidden">
            <div className="max-w-4xl mx-auto space-y-24">

                {/* Hero Section */}
                <section className="text-center space-y-6 pt-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400"
                    >
                        Strategic Acceleration
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        Velociti.club is a high-touch development and growth accelerator. We are not just a dev shop; we are a strategic partner for two distinct groups.
                    </motion.p>
                </section>

                {/* Startups Section */}
                <BubbleCard>
                    <div className="p-8 md:p-12 rounded-[2rem] bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,243,255,0.1)] transition-shadow duration-500 group">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="p-4 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-neon-blue group-hover:scale-110 transition-transform duration-500">
                                <Rocket className="w-12 h-12" />
                            </div>
                            <div className="text-center md:text-left space-y-4">
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Startups</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                    We build investor-ready Minimum Viable Products (MVPs) at speed.
                                </p>
                            </div>
                        </div>
                    </div>
                </BubbleCard>

                {/* Enterprises Section */}
                <BubbleCard delay={0.2}>
                    <div className="p-8 md:p-12 rounded-[2rem] bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(189,0,255,0.1)] transition-shadow duration-500 group">
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                            <div className="p-4 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-neon-purple group-hover:scale-110 transition-transform duration-500">
                                <Building2 className="w-12 h-12" />
                            </div>
                            <div className="text-center md:text-left space-y-4 md:text-right flex-1">
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Enterprises</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                    We build cutting-edge Proof of Concepts (POCs) focusing on Generative AI, AI Agents, Machine Learning, and Data Solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </BubbleCard>

                {/* Core Differentiator Section */}
                <BubbleCard delay={0.4}>
                    <div className="relative p-1 bg-gradient-to-r from-neon-blue via-purple-500 to-neon-purple rounded-[2.5rem] shadow-[0_0_100px_rgba(189,0,255,0.15)]">
                        <div className="h-full p-8 md:p-12 rounded-[2.3rem] bg-white dark:bg-[#0B0F19] flex flex-col items-center text-center space-y-6">
                            <div className="p-4 rounded-full bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white mb-2">
                                <Users className="w-12 h-12" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-neon-blue dark:to-neon-purple">
                                The Core Differentiator
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                                We don&apos;t just build the tech and walk away. We operate as a &quot;club&quot;—an exclusive ecosystem that helps our clients take the product to market, assists in securing investment, and advises on marketing and sales strategies.
                            </p>
                            <p className="text-xl font-medium text-gray-900 dark:text-white pt-4 border-t border-gray-100 dark:border-white/10 w-full max-w-lg">
                                We turn ideas into fundable, sellable realities.
                            </p>
                        </div>
                    </div>
                </BubbleCard>
            </div>
        </main>
    );
}
