import type { RunLogLine } from "@/content/solutions";
import { cn } from "@/lib/utils";

const levelStyle: Record<RunLogLine["level"], { label: string; cls: string }> = {
  info: { label: "INFO", cls: "text-night-body" },
  act: { label: "ACT", cls: "text-cobalt-on-night" },
  wait: { label: "HOLD", cls: "text-[#F5C451]" },
  ok: { label: "DONE", cls: "text-[#7FD8A6]" },
};

/** Illustrative product UI: an agent run log. Labelled as illustrative until real screenshots exist. */
export function RunLogPanel({ title, agent, lines, label = "Illustrative", className }: { title: string; agent: string; lines: RunLogLine[]; label?: string; className?: string }) {
  return (
    <figure className={cn("night overflow-hidden rounded-[20px] border border-night-line bg-night text-night-body", className)}>
      <div className="flex items-center justify-between gap-3 border-b border-night-line px-5 py-3.5">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-night-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-night-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-night-line" />
          </span>
          <span className="font-mono text-[13px] text-white">{title}</span>
        </div>
        <span className="t-mono rounded-full border border-night-line px-2 py-0.5 text-[10px] text-night-body">{label}</span>
      </div>
      <ol className="space-y-0 px-5 py-4 font-mono text-[12.5px] leading-[1.7]">
        {lines.map((l, i) => (
          <li key={i} className="grid grid-cols-[auto_auto_1fr] gap-x-3 py-1">
            <span className="tabular-nums text-[#7C8293]">{l.t}</span>
            <span className={cn("w-10", levelStyle[l.level].cls)}>{levelStyle[l.level].label}</span>
            <span className="text-night-body">{l.text}</span>
          </li>
        ))}
      </ol>
      <figcaption className="flex items-center gap-2 border-t border-night-line px-5 py-3 text-[12px] text-[#7C8293]">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#7FD8A6]" />
        {agent} · every step written to the audit log
      </figcaption>
    </figure>
  );
}
