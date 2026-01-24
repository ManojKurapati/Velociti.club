"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, BookOpen, Sparkles } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 bg-white/80 dark:bg-midnight/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center shadow-lg shadow-neon-blue/20">
                        <span className="text-white font-bold text-lg">V</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">Velociti</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href="/knowledge"
                        className="group relative flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 hover:border-neon-blue dark:hover:border-neon-blue transition-all duration-300 bg-white/50 dark:bg-midnight/50"
                    >
                        <BookOpen className="w-4 h-4 text-neon-blue" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-neon-blue transition-colors">
                            Knowledge
                        </span>
                        <div className="absolute inset-0 rounded-full bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>

                    <Link
                        href="/curious"
                        className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 border border-neon-purple/30 hover:border-neon-purple transition-all duration-300"
                    >
                        <Sparkles className="w-4 h-4 text-neon-purple" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-neon-purple transition-colors">
                            Curious?
                        </span>
                        <div className="absolute inset-0 rounded-full bg-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>

                    <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-1" />
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-3">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-neon-blue dark:hover:border-neon-blue transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        ) : (
                            <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="pt-4 pb-2 space-y-2">
                            <Link
                                href="/knowledge"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-neon-blue dark:hover:border-neon-blue transition-all bg-white/50 dark:bg-midnight/50"
                            >
                                <BookOpen className="w-5 h-5 text-neon-blue" />
                                <span className="font-medium text-gray-700 dark:text-gray-300">Knowledge</span>
                            </Link>

                            <Link
                                href="/curious"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 border border-neon-purple/30 hover:border-neon-purple transition-all"
                            >
                                <Sparkles className="w-5 h-5 text-neon-purple" />
                                <span className="font-medium text-gray-700 dark:text-gray-300">Curious?</span>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
