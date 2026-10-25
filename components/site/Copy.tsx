import { Fragment, type ReactNode } from "react";

/**
 * Renders a copy string, wrapping every `[placeholder]` in a visible marker
 * so unfinished content is easy to spot on the page.
 */
export function copy(text: string): ReactNode {
  if (!text.includes("[")) return text;
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
