import { cn } from "@/lib/utils";

type Row = { model: string; where: string; isolation: string; bestFor: string; highlight?: boolean };

/** Deployment options. Scrolls horizontally inside its box on narrow screens. */
export function DeploymentTable({ columns, rows }: { columns: string[]; rows: Row[] }) {
  return (
    <div className="card overflow-x-auto" role="region" aria-label="Deployment options" tabIndex={0}>
      <table className="w-full min-w-[760px] border-collapse text-left text-[15px]">
        <thead>
          <tr className="border-b border-line">
            {columns.map((c) => (
              <th key={c} scope="col" className="t-mono px-6 py-4 font-medium text-cobalt">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.model} className={cn("border-b border-line last:border-0", r.highlight && "bg-cobalt/[0.06]")}>
              <th scope="row" className="px-6 py-5 font-semibold text-ink">
                <span className="flex items-center gap-2">
                  {r.highlight && <span aria-hidden="true" className="h-2 w-2 rounded-full bg-cobalt" />}
                  {r.model}
                </span>
              </th>
              <td className="px-6 py-5">{r.where}</td>
              <td className="px-6 py-5">{r.isolation}</td>
              <td className="px-6 py-5">{r.bestFor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
