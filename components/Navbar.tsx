"use client";

import React from "react";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/50 dark:bg-midnight/50 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                    <span className="text-white dark:text-black font-bold text-lg">V</span>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">Velociti</span>
            </div>

            <ThemeToggle />
        </nav>
    );
};
