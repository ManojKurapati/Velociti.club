import Link from "next/link";
import { Zap, Instagram, Linkedin } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <Link href="/" className="interactive block">
            <Logo />
          </Link>
          <p className="text-gray-500 text-sm mt-2">Enterprise AI Systems That Automate Real Operations.</p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-400">
          <Link href="/#solutions" className="hover:text-white transition-colors interactive">Solutions</Link>
          <Link href="/#industries" className="hover:text-white transition-colors interactive">Industries</Link>
          <Link href="/#case-studies" className="hover:text-white transition-colors interactive">Case Studies</Link>
          <Link href="/#security" className="hover:text-white transition-colors interactive">Security</Link>
          <Link href="/about" className="hover:text-white transition-colors interactive">About</Link>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-3">
            {/* WhatsApp */}
            <Link 
              href="https://wa.me/971585469969" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/30 transition-all duration-300 interactive"
              aria-label="Chat on WhatsApp"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.459 3.479 1.33 5.01L2 22l5.138-1.348a9.92 9.92 0 004.874 1.28c5.506 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm6.7 14.18c-.28.79-1.42 1.47-2.18 1.54-.74.07-1.7.13-2.94-.27a13.38 13.38 0 01-5.69-3.76 13.06 13.06 0 01-2.9-4.8c-.37-1.21-.06-2.12.24-2.42.22-.22.48-.52.73-.78.18-.2.29-.33.39-.54.12-.22.06-.41-.03-.59-.09-.18-.78-1.89-1.07-2.59-.28-.68-.56-.59-.77-.6-.18-.01-.39-.01-.6-.01-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.28 3.26.16.21 2.22 3.39 5.39 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.6-.09 1.84-.75 2.1-1.48.26-.72.26-1.34.18-1.48-.08-.13-.29-.21-.6-.37z"/>
              </svg>
            </Link>
            {/* Instagram */}
            <Link 
              href="https://www.instagram.com/velociti.club/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-[#E1306C] hover:bg-[#E1306C]/10 hover:border-[#E1306C]/30 transition-all duration-300 interactive"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </Link>
            {/* LinkedIn */}
            <Link 
              href="https://www.linkedin.com/company/velociti-club/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 transition-all duration-300 interactive"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </Link>
          </div>
          
          <div className="text-sm text-gray-600 text-center md:text-right">
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
