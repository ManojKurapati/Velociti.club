import type { Industry } from "./types";

export const education: Industry = {
  slug: "education",
  name: "Education",
  orgType: "institution",
  tileUseCases: ["Admissions support", "Knowledge copilots", "Admin automation"],
  meta: {
    title: "AI agents for education",
    description: "Admissions support, knowledge copilots and admin automation for universities and schools, connected to your SIS and LMS.",
  },
  hero: {
    title: "Less admin. More time for students.",
    lead: "Agents that answer applicants, help staff find what they need and clear the administrative work behind them — connected to your SIS and LMS, with staff approving what matters.",
  },
  imageAlt: "A long sunlit library hallway",
  artChips: ["APPLICANT 3308 · DOCUMENTS COMPLETE", "POLICY ANSWER · 3 SOURCES CITED"],
  stats: [
    { value: "[metric]", label: "Applicant queries answered instantly" },
    { value: "[metric]", label: "Admin hours returned per term" },
    { value: "[metric]", label: "Kickoff to production" },
  ],
  useCases: [
    { title: "Admissions support", body: "Applicants get accurate answers on requirements, deadlines and status in their own language." },
    { title: "Knowledge copilots", body: "Staff and students search policies, handbooks and course material with cited answers." },
    { title: "Admin automation", body: "Transcripts, enrolment changes and records requests processed end to end." },
    { title: "Student services", body: "Routine requests resolved automatically; sensitive cases routed to the right adviser." },
  ],
  quote: { text: "[Client quote]", name: "[Name]", role: "[Role, Organisation]", approval: "[Confirm written approval to publish name and quote]" },
  pillars: [
    { title: "Student data protected", body: "Access controls and PII redaction across every agent." },
    { title: "Staff in the loop", body: "Decisions on admissions and records stay with people." },
    { title: "Works with your SIS & LMS", body: "Connects to the systems your registry already runs." },
    { title: "Private deployment", body: "Hosted in your cloud tenancy or on campus." },
  ],
};
