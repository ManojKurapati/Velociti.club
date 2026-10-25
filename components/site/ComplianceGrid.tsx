import type { ComplianceItem } from "@/content/trust";
import { copy } from "./Copy";

export function ComplianceGrid({ items }: { items: ComplianceItem[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <li key={c.name} className="card flex flex-col p-7">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[22px] font-semibold tracking-[-0.02em]">{c.name}</h3>
            <span className="t-mono shrink-0 rounded-full border border-line px-2.5 py-1 text-[11px] text-body">{copy(c.status)}</span>
          </div>
          <p className="mt-6 text-[15px] leading-relaxed">{c.detail}</p>
        </li>
      ))}
    </ul>
  );
}
