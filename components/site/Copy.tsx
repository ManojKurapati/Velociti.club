import { Fragment, type ReactNode } from "react";

/**
 * Placeholders are written in content as `[like this]`.
 * Set NEXT_PUBLIC_SHOW_PLACEHOLDERS=true to see them highlighted while
 * editing; otherwise (the default, and on the live site) they are hidden and
 * any block whose content is only a placeholder is left out.
 */
export const SHOW_PLACEHOLDERS = process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "true";

const PLACEHOLDER = /\[[^\]]+\]/g;

/** The text with placeholders removed. */
export function stripPlaceholders(text: string) {
  return text.replace(PLACEHOLDER, "").replace(/\s{2,}/g, " ").replace(/\s+([.,;:])/g, "$1").replace(/^[\s—–-]+|[\s—–-]+$/g, "").trim();
}

/** False when the text should not render: it is only placeholders and placeholders are hidden. */
export function hasCopy(text: string | undefined | null): text is string {
  if (!text) return false;
  return SHOW_PLACEHOLDERS ? true : stripPlaceholders(text).length > 0;
}

/** Renders a copy string; placeholders are highlighted (editing) or removed (live). */
export function copy(text: string): ReactNode {
  if (!text.includes("[")) return text;
  if (!SHOW_PLACEHOLDERS) return stripPlaceholders(text);
  const parts = text.split(/(\[[^\]]+\])/g);
  return parts.map((part, i) =>
    /^\[[^\]]+\]$/.test(part) ? (
      <mark key={i} className="ph" data-placeholder>
        {part}
      </mark>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

export function Copy({ children }: { children: string }) {
  return <>{copy(children)}</>;
}
