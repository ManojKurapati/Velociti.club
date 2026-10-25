import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { JsonLd } from "@/components/site/JsonLd";
import { RevealObserver } from "@/components/site/RevealObserver";
import { CookieBanner } from "@/components/CookieBanner";
import { ChatLauncher } from "@/components/site/ChatLauncher";
import { announcement, site } from "@/content/site";
import { organizationJsonLd } from "@/lib/seo";
import { ANNOUNCE_KEY, CONSENT_KEY } from "@/lib/storage-keys";
import "./globals.css";

// Geist Mono only sets 12px labels, so it is not preloaded: keeps the
// critical path to one font file (Geist Sans) for a faster LCP.
const geistMono = localFont({
  src: "../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

export const viewport: Viewport = {
  themeColor: "#F6F5F1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Velociti — AI-native enterprise engineering",
    template: "%s · Velociti",
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: { siteName: site.name, type: "website", locale: "en_US", url: "/", images: [{ url: "/og/home.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/og/home.png"] },
  robots: { index: true, follow: true },
};

// Runs before first paint: restores announcement dismissal and cookie choice, arms scroll
// reveals and starts the one-time hero animation (skipped for reduced motion).
const bootScript = `(function(){var d=document.documentElement;try{if(localStorage.getItem(${JSON.stringify(
  ANNOUNCE_KEY,
)})===${JSON.stringify(announcement.id)})d.setAttribute('data-announce-dismissed','');if(localStorage.getItem(${JSON.stringify(
  CONSENT_KEY,
)}))d.setAttribute('data-consent','')}catch(e){}
d.classList.add('js-reveal');setTimeout(function(){if(!d.hasAttribute('data-reveal-ready'))d.classList.remove('js-reveal')},4000);
if(location.pathname==='/'&&!matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('hero-animate');setTimeout(function(){d.classList.remove('hero-animate')},4200)}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <link rel="alternate" type="application/rss+xml" title="Velociti Insights" href="/insights/rss.xml" />
        <JsonLd data={organizationJsonLd} />
      </head>
      <body className="min-h-screen overflow-x-clip">
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-ink px-5 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <AnnouncementBar />
        <Nav />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <ChatLauncher />
        <CookieBanner />
        <RevealObserver />
      </body>
    </html>
  );
}
