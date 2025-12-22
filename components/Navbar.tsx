import React from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/50 dark:bg-midnight/50 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                    <span className="text-white dark:text-black font-bold text-lg">V</span>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">Velociti</span>
            </Link>

            <div className="flex items-center gap-6">
                <Link href="/curious" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                    Curious ?
                </Link>
                <ThemeToggle />
            </div>
        </nav>
    );
};
