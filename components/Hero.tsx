"use client";
import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-20 max-w-5xl mx-auto"
            >
                <div className="inline-block px-3 py-1 mb-6 rounded-full border border-neon-blue/30 bg-neon-blue/5 backdrop-blur-sm">
                    <span className="text-neon-blue text-xs uppercase tracking-widest font-semibold">Velocity Systems Initialized</span>
                </div>

                <h1 className="text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-neon-blue dark:via-white dark:to-neon-purple tracking-tighter mb-8 leading-tight">
                    Next-Gen Tech <br /> at the Speed of Light
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                    From technical POC to efficient GTM. We prepare your AI & Blockchain infrastructure for <span className="text-gray-900 dark:text-white font-medium">Investor Readiness</span>.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <button className="group relative px-8 py-4 rounded-full bg-neon-blue text-midnight font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-neon-blue/20">
                        <span className="relative z-10">Deploy Strategy</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                    </button>
                    <button className="px-8 py-4 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-neon-purple hover:text-neon-purple transition-colors font-medium backdrop-blur-sm bg-white/50 dark:bg-midnight/50">
                        View Capability Map
                    </button>
                </div>
            </motion.div>
        </section>
    );
};
