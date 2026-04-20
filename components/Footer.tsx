import Link from "next/link";
import { Zap } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <Link href="/" className="interactive block">
            <Logo />
          </Link>
          <p className="text-gray-500 text-sm mt-2">AI-fy Your Enterprise.</p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-400">
          <Link href="/enterprise" className="hover:text-white transition-colors interactive">Enterprise</Link>
          <Link href="/knowledge" className="hover:text-white transition-colors interactive">Knowledge</Link>
          <Link href="/curious" className="hover:text-white transition-colors interactive">The Club</Link>
          <Link href="/curious#startups" className="hover:text-white transition-colors interactive">Startups</Link>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Velociti Inc. All rights reserved.
          </div>
          <div className="text-xs text-gray-500 flex items-center gap-1">
            Built with AI <Zap size={10} className="text-neon-cyan/50" /> velocity
          </div>
        </div>
      </div>
    </footer>
  );
}
