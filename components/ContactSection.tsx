"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin } from "lucide-react";

export const ContactSection = () => {
    const [lines, setLines] = React.useState<Array<{ duration: number; delay: number; top: number }>>([]);

    React.useEffect(() => {
        setLines([...Array(5)].map(() => ({
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 2,
            top: 20 + Math.random() * 60
        })));
    }, []);

    return (
        <section className="w-full py-32 px-4 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Dynamic Speed Lines Background */}
            <div className="absolute inset-0 pointer-events-none">
                {lines.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: "200%", opacity: [0, 1, 0] }}
                        transition={{
                            duration: line.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: line.delay
                        }}
                        className="absolute h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent w-full"
                        style={{ top: `${line.top}%` }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-2xl w-full p-12 rounded-3xl bg-white/30 dark:bg-midnight/30 border border-gray-200 dark:border-gray-800 backdrop-blur-xl flex flex-col items-center text-center shadow-[0_0_50px_rgba(0,243,255,0.05)]">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none" />

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Ready to Accelerate?</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
                    Deploy your high-velocity technical strategy today.
                </p>

                <motion.a
                    href="https://www.linkedin.com/in/fatimaabdulla93/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#0077b5] text-white rounded-full font-bold overflow-hidden transition-all shadow-lg hover:shadow-[0_0_30px_rgba(0,119,181,0.4)]"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <Linkedin className="w-5 h-5" />
                        Connect on LinkedIn
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>

                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 flex translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700">
                        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                    </div>
                </motion.a>
            </div>
        </section>
    );
};
