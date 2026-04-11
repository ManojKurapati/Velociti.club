"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`max-w-7xl mx-auto rounded-full px-6 py-4 flex justify-between items-center transition-all ${scrolled ? 'glass bg-midnight/40' : 'bg-transparent'}`}>
        <Link href="/" className="z-10 block interactive group">
          <Logo />
        </Link>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-400 absolute left-1/2 transform -translate-x-1/2">
          {[
            { label: 'Home', href: '/' },
            { label: 'Enterprise', href: '/enterprise' },
            { label: 'Knowledge', href: '/knowledge' },
            { label: 'The Club', href: '/curious' },
            { label: 'Startups', href: '/curious#startups' },
          ].map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-white transition-colors interactive">
              {item.label}
            </Link>
          ))}
        </div>
        
        <div className="z-10 flex items-center gap-4">
          <ThemeToggle />
          <Link href="#contact" className="btn-glow border border-neon-cyan text-neon-cyan px-6 py-2 rounded-full font-medium text-sm hidden md:inline-block interactive backdrop-blur-md">
            AI-fy Now
          </Link>
          <button 
            className="md:hidden text-white interactive"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[80px] left-4 right-4 glass rounded-2xl p-6 md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {[
            { label: 'Home', href: '/' },
            { label: 'Enterprise', href: '/enterprise' },
            { label: 'Knowledge', href: '/knowledge' },
            { label: 'The Club', href: '/curious' },
            { label: 'Startups', href: '/curious#startups' },
          ].map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white hover:text-neon-cyan transition-colors">
              {item.label}
            </Link>
          ))}
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-white text-black px-6 py-3 rounded-full text-center font-semibold mt-4">
            AI-fy Now
          </Link>
        </div>
      )}
    </nav>
  );
}
