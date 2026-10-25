import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { AnnouncementBar, ANNOUNCE_KEY } from "@/components/site/AnnouncementBar";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { JsonLd } from "@/components/site/JsonLd";
import { RevealObserver } from "@/components/site/RevealObserver";
import { CookieBanner } from "@/components/CookieBanner";
import { announcement, site } from "@/content/site";
import { organizationJsonLd } from "@/lib/seo";
import "./globals.css";

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
  openGraph: { siteName: site.name, type: "website", locale: "en_US", url: "/" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

// Runs before first paint: restores announcement dismissal, arms scroll
// reveals and starts the one-time hero animation (skipped for reduced motion).
const bootScript = `(function(){var d=document.documentElement;try{if(localStorage.getItem(${JSON.stringify(
  ANNOUNCE_KEY,
)})===${JSON.stringify(announcement.id)})d.setAttribute('data-announce-dismissed','')}catch(e){}
d.classList.add('js-reveal');setTimeout(function(){if(!d.hasAttribute('data-reveal-ready'))d.classList.remove('js-reveal')},4000);
if(location.pathname==='/'&&!matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('hero-animate');setTimeout(function(){d.classList.remove('hero-animate')},4200)}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
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
        <CookieBanner />
        <RevealObserver />
      </body>
    </html>
  );
}
