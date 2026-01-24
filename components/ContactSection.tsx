"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

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
        <section id="contact" className="w-full py-20 sm:py-32 px-4 sm:px-6 flex flex-col items-center justify-center relative overflow-hidden">
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

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-neon-blue/5 via-transparent to-transparent pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 max-w-xl w-full"
            >
                <div className="p-10 rounded-3xl glass-panel text-center">
                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Ready to <span className="text-neon-blue">Accelerate</span>?
                    </h2>
                    <p className="text-gray-400 mb-10 text-lg">
                        Deploy your high-velocity technical strategy today.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="https://www.linkedin.com/in/fatimaabdulla93/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0077b5] text-white rounded-full font-bold overflow-hidden transition-all shadow-lg hover:shadow-[0_0_30px_rgba(0,119,181,0.4)]"
                        >
                            <Linkedin className="w-5 h-5" />
                            <span>Connect on LinkedIn</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        <motion.a
                            href="mailto:hello@velociti.club"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-gray-700 text-gray-300 rounded-full font-medium hover:border-neon-blue hover:text-neon-blue transition-all"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Send Email</span>
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
