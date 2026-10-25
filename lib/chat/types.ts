/** One answerable topic in the chat knowledge base. */
export type ChatEntry = {
  id: string;
  title: string;
  url: string;
  /** Strong signals: matched with the highest weight. */
  keywords: string[];
  /** Shown to the visitor when this entry is the best match. */
  answer: string;
  /** Supporting text used for matching only. */
  text: string;
  /** Optional score multiplier (curated FAQ answers win close calls). */
  weight?: number;
};
