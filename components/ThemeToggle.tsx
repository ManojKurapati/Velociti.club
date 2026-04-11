"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors flex items-center justify-center backdrop-blur-md"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-neon-cyan" />
      ) : (
        <Moon className="w-5 h-5 text-neon-violet" />
      )}
    </button>
  );
}
