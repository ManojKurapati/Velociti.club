import Link from "next/link";
import { Twitter, Linkedin, Github, ArrowRight, Zap } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-obsidian pt-24 pb-12 relative z-10 overflow-hidden">
      {/* Background aesthetic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Trusted By Logos (Placeholders) */}
        <div className="border-b border-white/5 pb-16 mb-16">
          <p className="text-center text-sm font-medium text-cool-gray-500 mb-8 uppercase tracking-widest">
            Trusted by autonomous enterprises
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text for generic logo placeholders */}
            <span className="font-display font-bold text-2xl">AcmeCorp</span>
            <span className="font-display font-medium text-2xl tracking-tighter">GlobalTech</span>
            <span className="font-display font-black text-xl tracking-widest uppercase">Nexus</span>
            <span className="font-display font-light text-2xl italic">Synergy</span>
            <span className="font-display font-bold text-xl">Optima.</span>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-2">
            <Logo withText={true} />
            <p className="text-cool-gray-400 mt-6 mb-8 text-sm leading-relaxed max-w-sm">
              We don&apos;t build AI. We deploy enterprise-grade autonomous systems that win funding and market leadership.
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-neon-cyan" />
                Join the Velocity Circle
              </h4>
              <p className="text-xs text-cool-gray-400 mb-4">
                Exclusive insights on autonomous enterprise scaling. No spam.
              </p>
              <form className="flex gap-2" action="/api/submit">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-obsidian border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-neon-cyan/50 w-full"
                />
                <button type="submit" className="bg-white text-black px-4 py-2 rounded-xl text-sm font-semibold hover:bg-neon-cyan transition-colors group">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm text-cool-gray-400">
              <li><Link href="/enterprise#voice" className="hover:text-neon-cyan transition-colors">Voice Agents</Link></li>
              <li><Link href="/enterprise#rag" className="hover:text-neon-cyan transition-colors">RAG Systems</Link></li>
              <li><Link href="/enterprise#workflow" className="hover:text-neon-cyan transition-colors">Workflow Automation</Link></li>
              <li><Link href="/enterprise#roi" className="hover:text-neon-cyan transition-colors">ROI Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Industries</h4>
            <ul className="space-y-4 text-sm text-cool-gray-400">
              <li><Link href="/enterprise?industry=healthcare" className="hover:text-neon-cyan transition-colors">Healthcare</Link></li>
              <li><Link href="/enterprise?industry=finance" className="hover:text-neon-cyan transition-colors">Fintech</Link></li>
              <li><Link href="/enterprise?industry=logistics" className="hover:text-neon-cyan transition-colors">Logistics</Link></li>
              <li><Link href="/enterprise?industry=retail" className="hover:text-neon-cyan transition-colors">E-Commerce</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">The Club</h4>
            <ul className="space-y-4 text-sm text-cool-gray-400">
              <li><Link href="/curious" className="hover:text-neon-cyan transition-colors">Membership</Link></li>
              <li><Link href="/curious#manifesto" className="hover:text-neon-cyan transition-colors">Our Manifesto</Link></li>
              <li><Link href="/curious#apply" className="hover:text-neon-cyan transition-colors">Apply for Access</Link></li>
              <li><Link href="/curious#startups" className="hover:text-neon-cyan transition-colors">For Startups</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-cool-gray-400">
              <li><Link href="/knowledge" className="hover:text-white transition-colors">Knowledge Lab</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="https://calendly.com/manojkurapati96/30min" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-cool-gray-500">
            &copy; {new Date().getFullYear()} Velociti Inc. All rights reserved.
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cool-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cool-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cool-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
