import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Using Outfit as primary font for technical feel
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Velociti | Next-Gen Tech",
  description: "AI and Blockchain consultancy. Accelerating your POC to Investor Readiness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${outfit.variable} antialiased bg-white dark:bg-midnight text-gray-900 dark:text-white selection:bg-neon-blue selection:text-midnight overflow-x-hidden transition-colors duration-300`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
