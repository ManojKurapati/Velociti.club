"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check local storage or existing class
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        } else {
            // Default to dark if nothing set, per user request "ensure... default to Dark Mode"
            const stored = localStorage.getItem("theme");
            if (stored === "light") {
                setIsDark(false);
                document.documentElement.classList.remove("dark");
            } else {
                setIsDark(true);
                document.documentElement.classList.add("dark");
            }
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neon-blue"
            aria-label="Toggle Theme"
        >
            <div className="relative w-6 h-6 overflow-hidden">
                <motion.div
                    initial={false}
                    animate={{ y: isDark ? 30 : 0, opacity: isDark ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center text-yellow-500"
                >
                    <Sun className="w-5 h-5 fill-current" />
                </motion.div>

                <motion.div
                    initial={false}
                    animate={{ y: isDark ? 0 : -30, opacity: isDark ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center text-neon-blue"
                >
                    <Moon className="w-5 h-5 fill-current" />
                </motion.div>
            </div>
        </button>
    );
};
