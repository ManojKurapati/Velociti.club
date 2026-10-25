export type Industry = {
  slug: string;
  name: string;
  /** Used in "Where does AI pay off in your [org type]?" */
  orgType: string;
  /** Three short use cases for the Home tile. */
  tileUseCases: string[];
  meta: { title: string; description: string };
  hero: { title: string; lead: string };
  /** Alt text for the 21:9 hero image and the 4:5 Home tile. */
  imageAlt: string;
  /** Labelled status chips drawn on the line-illustration fallback. */
  artChips: string[];
  stats: { value: string; label: string }[];
  useCases: { title: string; body: string }[];
  quote: { text: string; name: string; role: string; approval?: string };
  pillars: { title: string; body: string }[];
  /** Case study slug to feature, if any. */
  caseSlug?: string;
};
