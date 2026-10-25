import { industries } from "@/content/industries";
import { caseStudies } from "@/content/customers";
import { legalPages } from "@/content/legal";
import { getAllPosts } from "@/lib/insights";

/** Maps a route path to its Open Graph image file name, e.g. /industries/healthcare -> industries-healthcare.png */
export function ogKey(path: string) {
  const key = path.replace(/^\/|\/$/g, "").replace(/\//g, "-");
  return `${key || "home"}.png`;
}

/** Title and eyebrow for every page's generated OG card. */
export function ogPages(): { path: string; title: string; eyebrow?: string }[] {
  return [
    { path: "/", title: "Think Big. Think Different. Think Velociti.", eyebrow: "AI-native enterprise engineering" },
    { path: "/solutions", title: "Deploy agents where the work happens.", eyebrow: "Solutions" },
    { path: "/engineers", title: "Deployment is where enterprise AI is won.", eyebrow: "Forward Deployed Engineers" },
    { path: "/industries", title: "Industry agnostic. Operationally specific.", eyebrow: "Industries" },
    { path: "/customers", title: "AI in production. Not in pilot.", eyebrow: "Customers" },
    { path: "/trust", title: "Trust is the product.", eyebrow: "Trust Center" },
    { path: "/about", title: "The Architecture Syndicate.", eyebrow: "About" },
    { path: "/careers", title: "Build the AI-native enterprise from the inside.", eyebrow: "Careers" },
    { path: "/insights", title: "Field notes from production.", eyebrow: "Insights" },
    { path: "/press", title: "News and media resources.", eyebrow: "Press" },
    { path: "/contact", title: "Find out where AI pays off first.", eyebrow: "AI workflow audit" },
    ...industries.map((i) => ({ path: `/industries/${i.slug}`, title: i.hero.title, eyebrow: i.name })),
    ...caseStudies.map((c) => ({ path: `/customers/${c.slug}`, title: c.title, eyebrow: `Case study · ${c.industry}` })),
    ...getAllPosts({ includeDrafts: true }).map((p) => ({ path: `/insights/${p.slug}`, title: p.title, eyebrow: p.category })),
    ...Object.entries(legalPages).map(([k, p]) => ({ path: `/legal/${k}`, title: p.title, eyebrow: "Legal" })),
  ];
}
