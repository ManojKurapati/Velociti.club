/** /about copy. Team photos must come from a real Velociti photo shoot. */

export const aboutPage = {
  meta: {
    title: "About",
    description: "Velociti is an architecture syndicate of elite engineers rebuilding enterprise infrastructure around agent logic. Headquartered in Dubai.",
  },
  hero: {
    eyebrow: "About Velociti",
    titleStrong: "The Architecture",
    titleMuted: "Syndicate.",
    lead: "We are elite engineers, not consultants. Our thesis: autonomous AI won't be won by chatbot wrappers. It will be won by rebuilding enterprise infrastructure around agent logic — with research rigour, startup speed and enterprise-grade reliability.",
  },
  stats: [
    { display: "25+", label: "Production deployments" },
    { value: 9, label: "Industries" },
    { display: "8–14", suffix: " wks", label: "To production" },
    { display: "Dubai", label: "Headquarters" },
  ],
  image: { name: "skyline", alt: "Dubai skyline at night" },
  leadership: {
    eyebrow: "Leadership",
    title: "Built by operators and engineers.",
    people: [
      {
        name: "Manoj Kurapati",
        role: "Founder & CEO",
        bio: "Manoj has spent his career developing and deploying AI and machine-learning products — taking them from research to systems that run in production. He has led technology teams at early-stage startups and led generative AI programmes for oil, gas and energy companies. His research background in cloud computing and big data is the foundation for how Velociti engineers enterprise AI that is reliable at scale.",
        highlights: ["AI/ML product development & deployment", "Technology leadership", "Cloud computing research", "Big data systems", "Generative AI for energy"],
        photo: "[Founder photo — from a real Velociti photo shoot]",
      },
      {
        name: "Lavine Hemlani",
        role: "Board Member & Investor",
        bio: "Founder & CEO of Zenith (over $4B in transactions arranged). Began in M&A at Lazard. University of Chicago economist, founder of Xccelerate, co-founder of Founders Circle and VP of the Artificial Intelligence Society of Hong Kong.",
        photo: "[Photo — from a real Velociti photo shoot]",
      },
    ],
    more: "[More team]",
  },
  values: {
    eyebrow: "Values",
    title: "How we work.",
    items: [
      { title: "Engineers, not consultants.", body: "We write the code, not the slide deck." },
      { title: "Production over pilots.", body: "A demo is a start. A system people use every day is the goal." },
      { title: "Own the outcome.", body: "We measure ourselves against your numbers, not our hours." },
      { title: "Speed with rigour.", body: "Weeks to production, with the evals and controls to prove it works." },
      { title: "Hand over the keys.", body: "You own the code, the runbooks and the evals when we are done." },
    ],
  },
};
