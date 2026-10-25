import { cn } from "@/lib/utils";
import { CountUp } from "./CountUp";
import { copy } from "./Copy";

export type Stat = { value?: number; decimals?: number; display?: string; prefix?: string; suffix?: string; label: string };

/** White band of stats with dividers. Numeric values count up on first view. */
export function StatBand({ stats, className, tone = "white" }: { stats: Stat[]; className?: string; tone?: "white" | "night" }) {
  const cols = stats.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";
  return (
    <dl
      className={cn(
        "grid grid-cols-1 gap-px overflow-hidden rounded-[20px] border",
        cols,
        tone === "white" ? "border-line bg-line" : "border-night-line bg-night-line",
        className,
      )}
    >
      {stats.map((s) => (
        <div key={s.label} className={cn("flex flex-col gap-3 p-7 lg:p-9", tone === "white" ? "bg-surface" : "bg-night-2")}>
          <dt className="order-2 text-[15px] leading-snug">{copy(s.label)}</dt>
          <dd className={cn("t-stat order-1 whitespace-nowrap", stats.length > 3 && "text-[clamp(44px,4.6vw,64px)]", tone === "white" ? "text-ink" : "text-white")}>
            {s.prefix}
            {s.display !== undefined ? copy(s.display) : <CountUp value={s.value ?? 0} decimals={s.decimals} />}
            {s.suffix && <span className="text-[0.55em] tracking-[-0.02em]">{s.suffix}</span>}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Parses a display string like "99.2%" or "−18%" into a count-up stat. */
export function toStat(value: string, label: string): Stat {
  const m = value.match(/^([+−-]?)(\d+(?:\.\d+)?)(.*)$/);
  if (!m) return { display: value, label };
  const [, sign, num, rest] = m;
  return { prefix: sign || undefined, value: parseFloat(num), decimals: num.includes(".") ? num.split(".")[1].length : 0, suffix: rest || undefined, label };
}
