import { cn } from "@/lib/utils";

type Layer = { name: string; items: string[]; accent?: boolean };

/** Stacked operating-layer diagram; layers stagger in on scroll via .reveal. */
export function OperatingLayerDiagram({ layers, footnote }: { layers: Layer[]; footnote: string }) {
  return (
    <figure className="relative">
      <ol className="relative space-y-2.5" aria-label="Velociti operating layer, from agents down to your systems">
        {layers.map((layer, i) => (
          <li
            key={layer.name}
            className={cn(
              "reveal flex flex-col gap-3 rounded-[16px] border px-5 py-4 sm:flex-row sm:items-center sm:justify-between",
              layer.accent ? "border-cobalt bg-cobalt/15" : "border-night-line bg-night-2",
            )}
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <span className="flex items-center gap-3">
              <span className="t-mono text-cobalt-on-night">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[16px] font-semibold text-white">{layer.name}</span>
            </span>
            <span className="flex flex-wrap gap-1.5">
              {layer.items.map((it) => (
                <span key={it} className="rounded-full border border-night-line px-2.5 py-1 text-[13px] leading-none text-night-body">
                  {it}
                </span>
              ))}
            </span>
          </li>
        ))}
      </ol>
      {/* Audit rail spanning every layer */}
      <div aria-hidden="true" className="absolute -right-3 bottom-12 top-0 hidden w-px bg-[repeating-linear-gradient(to_bottom,var(--cobalt-on-night)_0_4px,transparent_4px_10px)] lg:block" />
      <figcaption className="mt-5 flex items-center gap-2 text-[14px] text-night-body">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cobalt-on-night" />
        {footnote}
      </figcaption>
    </figure>
  );
}
