"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { buttonVariants } from "@/components/ui/button";

const NAV = [
  { label: "Solutions", href: "/#solutions" },
  { label: "FDEs", href: "/#forward-deployed-engineers" },
  { label: "Industries", href: "/#industries" },
  { label: "Security", href: "/#security" },
  { label: "Case studies", href: "/#case-studies" },
  { label: "About", href: "/about" },
];

const CALENDLY = "https://calendly.com/manojkurapati96/30min";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between border-x border-line px-6">
        <Link href="/" className="interactive flex items-center" aria-label="Velociti home">
          <Logo />
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="interactive rounded-md px-3 py-1.5 text-sm text-cool-gray-400 transition-colors hover:bg-raised hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "sm", className: "interactive hidden md:inline-flex" })}
          >
            Book a workflow audit
          </Link>
          <button
            className="interactive inline-flex h-8 w-8 items-center justify-center rounded-md border border-line text-white lg:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-line bg-canvas lg:hidden">
          <div className="mx-auto max-w-7xl border-x border-line">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block border-b border-line px-6 py-4 text-base text-white transition-colors hover:bg-raised"
              >
                {item.label}
              </Link>
            ))}
            <div className="p-6">
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className={buttonVariants({ size: "lg", className: "w-full" })}
              >
                Book a workflow audit
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
