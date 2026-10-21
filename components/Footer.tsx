import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { Logo } from "@/components/Logo";

const explore = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Forward deployed engineers", href: "/#forward-deployed-engineers" },
  { label: "Industries", href: "/#industries" },
  { label: "Security", href: "/#security" },
  { label: "Case studies", href: "/#case-studies" },
];

const social = [
  { label: "Chat on WhatsApp", href: "https://wa.me/971585469969", icon: "whatsapp" },
  { label: "Instagram", href: "https://www.instagram.com/velociti.club/", icon: "instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/velociti-club/", icon: "linkedin" },
] as const;

function SocialIcon({ icon }: { icon: (typeof social)[number]["icon"] }) {
  if (icon === "instagram") return <Instagram size={16} />;
  if (icon === "linkedin") return <Linkedin size={16} />;
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.459 3.479 1.33 5.01L2 22l5.138-1.348a9.92 9.92 0 004.874 1.28c5.506 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm6.7 14.18c-.28.79-1.42 1.47-2.18 1.54-.74.07-1.7.13-2.94-.27a13.38 13.38 0 01-5.69-3.76 13.06 13.06 0 01-2.9-4.8c-.37-1.21-.06-2.12.24-2.42.22-.22.48-.52.73-.78.18-.2.29-.33.39-.54.12-.22.06-.41-.03-.59-.09-.18-.78-1.89-1.07-2.59-.28-.68-.56-.59-.77-.6-.18-.01-.39-.01-.6-.01-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.28 3.26.16.21 2.22 3.39 5.39 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.6-.09 1.84-.75 2.1-1.48.26-.72.26-1.34.18-1.48-.08-.13-.29-.21-.6-.37z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-canvas">
      <div className="mx-auto grid max-w-7xl gap-px border-x border-line bg-line md:grid-cols-12">
        <div className="bg-canvas p-6 md:col-span-5 md:p-10">
          <Link href="/" className="interactive inline-flex" aria-label="Velociti home">
            <Logo />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cool-gray-400">
            Engineers who make AI work inside your business.
          </p>
        </div>
        <nav aria-label="Footer" className="bg-canvas p-6 md:col-span-4 md:p-10">
          <h2 className="text-sm font-medium text-white">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {explore.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="interactive text-sm text-cool-gray-400 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="bg-canvas p-6 md:col-span-3 md:p-10">
          <h2 className="text-sm font-medium text-white">Company</h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/about" className="interactive text-sm text-cool-gray-400 transition-colors hover:text-white">
                About
              </Link>
            </li>
          </ul>
          <div className="mt-8 flex gap-2">
            {social.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="interactive inline-flex h-8 w-8 items-center justify-center rounded-md border border-line text-cool-gray-400 transition-colors hover:border-line-strong hover:bg-raised hover:text-white"
              >
                <SocialIcon icon={item.icon} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 border-x border-line px-6 py-5 text-xs text-cool-gray-500 sm:flex-row sm:justify-between md:px-10">
          <span>&copy; {new Date().getFullYear()} Velociti Inc. All rights reserved.</span>
          <a href="https://calendly.com/manojkurapati96/30min" target="_blank" rel="noopener noreferrer" className="interactive transition-colors hover:text-white">
            Book a workflow audit
          </a>
        </div>
      </div>
    </footer>
  );
}
