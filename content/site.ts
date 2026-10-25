/**
 * Global copy: navigation, announcement bar, footer and the closing CTA band.
 * Edit text here; layout components read from this file.
 */

export const site = {
  name: "Velociti",
  legalName: "Velociti Inc.",
  domain: "thinkvelociti.com",
  url: "https://thinkvelociti.com",
  description:
    "Velociti embeds forward deployed engineers inside enterprise teams to deploy secure AI agents across sales, support and operations, on the systems and data they already run.",
  calendlyUrl: "https://calendly.com/manojkurapati96/30min",
  emails: {
    hello: "hello@thinkvelociti.com",
    press: "press@thinkvelociti.com",
    security: "security@thinkvelociti.com",
    careers: "careers@thinkvelociti.com",
  },
  whatsapp: { display: "+971 58 546 9969", href: "https://wa.me/971585469969" },
  address: "[Dubai office address]",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/velociti-club" },
    { label: "Instagram", href: "https://www.instagram.com/velociti.club" },
    { label: "WhatsApp", href: "https://wa.me/971585469969" },
  ],
};

export const announcement = {
  // Change the id whenever the message changes so dismissed visitors see the new one.
  id: "airgapped-2026-10",
  label: "New",
  text: "Airgapped AI for defence, healthcare and banking.",
  linkText: "See on-prem deployments",
  href: "/engineers#airgapped",
};

export type NavItem = { label: string; href: string; description?: string };

export const nav: { primary: NavItem[]; company: NavItem[]; cta: NavItem } = {
  primary: [
    { label: "Solutions", href: "/solutions" },
    { label: "Engineers", href: "/engineers" },
    { label: "Industries", href: "/industries" },
    { label: "Customers", href: "/customers" },
    { label: "Trust", href: "/trust" },
  ],
  company: [
    { label: "About", href: "/about", description: "Story, leadership and values" },
    { label: "Careers", href: "/careers", description: "Build the AI-native enterprise" },
    { label: "Insights", href: "/insights", description: "Field notes from production" },
    { label: "Press", href: "/press", description: "Coverage and media kit" },
  ],
  cta: { label: "Book a workflow audit", href: "/contact" },
};

export const footer = {
  columns: [
    {
      title: "Platform",
      links: [
        { label: "Operations Automation", href: "/solutions#operations" },
        { label: "Customer Support", href: "/solutions#support" },
        { label: "Sales Automation", href: "/solutions#sales" },
        { label: "Enterprise Knowledge", href: "/solutions#knowledge" },
        { label: "Forward Deployed Engineers", href: "/engineers" },
        { label: "Airgapped deployments", href: "/engineers#airgapped" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "Healthcare", href: "/industries/healthcare" },
        { label: "Finance", href: "/industries/finance" },
        { label: "Oil & Gas", href: "/industries/oil-gas" },
        { label: "Automotive", href: "/industries/automotive" },
        { label: "Pharma", href: "/industries/pharma" },
        { label: "Hospitality", href: "/industries/hospitality" },
        { label: "Education", href: "/industries/education" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Customers", href: "/customers" },
        { label: "Careers", href: "/careers" },
        { label: "Insights", href: "/insights" },
        { label: "Press", href: "/press" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Trust",
      links: [
        { label: "Trust Center", href: "/trust" },
        { label: "Report a vulnerability", href: "/trust#report" },
        { label: "Privacy", href: "/legal/privacy" },
        { label: "Terms", href: "/legal/terms" },
        { label: "Cookies", href: "/legal/cookies" },
      ],
    },
  ],
  copyright: "© 2026 Velociti Inc. · thinkvelociti.com",
  wordmark: "Think Velociti",
};

export const ctaBand = {
  title: "Find out where AI pays off in your operations.",
  button: { label: "Book a workflow audit", href: "/contact" },
  meta: "30 minutes · Free · No commitment",
};
