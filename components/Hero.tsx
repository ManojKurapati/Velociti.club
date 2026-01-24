"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden pt-20 pb-16">
            {/* Background Grid */}
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

            {/* Aurora Glow Effects */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-gradient-to-r from-neon-blue/30 to-neon-purple/30 rounded-full blur-[120px] aurora-glow pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-full blur-[100px] aurora-glow pointer-events-none" style={{ animationDelay: "-4s" }} />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight z-10 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-20 max-w-5xl mx-auto"
            >
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-neon-blue/30 bg-neon-blue/5 backdrop-blur-sm"
                >
                    <Sparkles className="w-4 h-4 text-neon-blue" />
                    <span className="text-neon-blue text-sm uppercase tracking-widest font-medium">AI & Blockchain Consultancy</span>
                </motion.div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1]">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
                        Build the Future
                    </span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-white to-neon-purple text-glow-blue">
                        at Light Speed
                    </span>
                </h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg md:text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed"
                >
                    We take your <span className="text-white font-medium">AI & Blockchain POC</span> from concept to{" "}
                    <span className="text-neon-blue font-medium">Investor Readiness</span>—with validated tech, market traction, and operational scale.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#contact"
                        className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-neon-blue/30 flex items-center gap-2"
                    >
                        <span className="relative z-10">Get Started</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                    </a>
                    <button
                        onClick={() => document.getElementById("capability-map")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-4 rounded-full border border-gray-700 text-gray-300 hover:border-neon-purple hover:text-neon-purple transition-colors font-medium backdrop-blur-sm bg-midnight/50 cursor-pointer"
                    >
                        View Our Process
                    </button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 rounded-full bg-neon-blue"
                    />
                </div>
            </motion.div>
        </section>
    );
};
