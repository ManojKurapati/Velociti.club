import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { GlobalCtaBar } from "@/components/GlobalCtaBar";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { AskVelocitiWidget } from "@/components/AskVelocitiWidget";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://velociti.club"),
  title: "Velociti — Enterprise AI Systems That Automate Real Operations",
  description: "We deploy secure AI agents across sales, support, operations, and workflows using your existing systems and data.",
  openGraph: {
    title: "Velociti — Enterprise AI Systems",
    description: "Secure AI agents for sales, support, operations, and workflows.",
    url: "https://velociti.club",
    siteName: "Velociti",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velociti — Enterprise AI Systems",
    description: "Secure AI agents for sales, support, operations, and workflows.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Velociti",
  url: "https://velociti.club",
  logo: "https://velociti.club/logo.png",
  description: "Enterprise AI systems company deploying secure AI agents across sales, support, operations, and workflows.",
  sameAs: [
    "https://twitter.com/velociti",
    "https://linkedin.com/company/velociti"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400,300&display=swap" rel="stylesheet" />
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground tracking-tight selection:bg-neon-cyan selection:text-black overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <GlobalCtaBar />
          <AnimatedBackground />
          <CustomCursor />
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
            <BackToTop />
          </SmoothScroll>
          <ExitIntentPopup />
          <AskVelocitiWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
