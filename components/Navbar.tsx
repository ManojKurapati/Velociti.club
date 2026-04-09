"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { MegaMenu } from "./MegaMenu";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "AI-fy Enterprise", href: "/enterprise", hasMegaMenu: true },
    { label: "Knowledge", href: "/knowledge" },
    { label: "The Club", href: "/curious" },
    { label: "Startups", href: "/curious#startups" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${scrolled ? "py-3" : "py-6"}`}>
      <div className={`max-w-7xl mx-auto rounded-2xl px-6 py-3 flex justify-between items-center transition-all border border-white/5 ${scrolled ? 'glass bg-obsidian/80 shadow-lg shadow-black/50' : 'bg-transparent'}`}>
        <Link href="/" className="z-10 block interactive group">
          <Logo className="scale-90" />
        </Link>
        
        <div className="hidden lg:flex space-x-1 items-center absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group px-1">
              <Link 
                href={link.href} 
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors interactive ${
                  pathname === link.href ? 'text-white bg-white/10' : 'text-cool-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {link.hasMegaMenu && <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />}
              </Link>
              {link.hasMegaMenu && <MegaMenu />}
            </div>
          ))}
        </div>
        
        <div className="z-10 flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 mr-2">
            <Link href="/curious" className="text-sm font-medium text-cool-gray-300 hover:text-white transition-colors interactive">
              Curious?
            </Link>
          </div>
          <Link href="https://calendly.com/manojkurapati96/30min" target="_blank" rel="noopener noreferrer" className="btn-glow bg-white text-black hover:text-white px-5 py-2.5 rounded-full font-semibold text-sm hidden md:inline-block interactive shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-none hover:bg-transparent">
            Contact Us
          </Link>
          <button 
            className="lg:hidden text-white interactive p-2 bg-white/5 rounded-lg border border-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[90px] left-4 right-4 glass rounded-2xl p-6 lg:hidden flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 border border-white/10 shadow-2xl">
          {navLinks.map((link) => (
            <Link 
              key={link.label}
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)} 
              className={`text-base font-medium p-3 rounded-xl transition-colors ${
                pathname === link.href ? 'bg-white/10 text-white' : 'text-cool-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="h-px bg-white/10 w-full my-2" />
          <Link 
            href="https://calendly.com/manojkurapati96/30min" 
            target="_blank" rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)} 
            className="bg-neon-cyan/10 border border-neon-cyan text-neon-cyan px-6 py-3 rounded-xl text-center font-semibold mt-2"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
