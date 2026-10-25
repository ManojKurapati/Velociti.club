import { cn } from "@/lib/utils";

/** Lettered (A/B/C) or numbered list of use cases. */
export function UseCaseList({ items, style = "letter", className }: { items: { title: string; body: string }[]; style?: "letter" | "number"; className?: string }) {
  return (
    <ol className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((it, i) => (
        <li key={it.title} className="grid grid-cols-[36px_1fr] gap-x-3 py-5">
          <span className="t-mono pt-1 text-cobalt">{style === "letter" ? String.fromCharCode(65 + i) : String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3 className="text-[18px] font-semibold tracking-[-0.01em]">{it.title}</h3>
            <p className="mt-1 text-[16px] leading-relaxed">{it.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
