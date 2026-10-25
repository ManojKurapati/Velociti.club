import { cn } from "@/lib/utils";

/** Grid of titled cells; used on dark security bands. */
export function SafeguardGrid({ cells, tone = "night", className }: { cells: { title: string; body: string }[]; tone?: "night" | "light"; className?: string }) {
  return (
    <ul
      className={cn(
        "grid gap-px overflow-hidden rounded-[20px] border sm:grid-cols-2 lg:grid-cols-3",
        tone === "night" ? "border-night-line bg-night-line" : "border-line bg-line",
        className,
      )}
    >
      {cells.map((c, i) => (
        <li key={c.title} className={cn("p-7 lg:p-8", tone === "night" ? "bg-night" : "bg-surface")}>
          <span className={cn("t-mono", tone === "night" ? "text-cobalt-on-night" : "text-cobalt")}>{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-6 text-[19px] font-semibold tracking-[-0.015em]">{c.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed">{c.body}</p>
        </li>
      ))}
    </ul>
  );
}
