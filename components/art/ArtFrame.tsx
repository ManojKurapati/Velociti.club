/**
 * Shared frame for the brand line illustrations.
 * Canvas is 1050×450 (21:9). Motifs keep their focal content inside the
 * centre column (x 345–705) so a 4:5 crop with `slice` still reads.
 */
export const ART = {
  bg: "#0F1520",
  stroke: "#4A5468",
  light: "#8FA2FF",
  cobalt: "#2B4BFF",
  text: "#B9BDC8",
  w: 1050,
  h: 450,
};

export type ArtProps = {
  className?: string;
  /** Status chips drawn on the 21:9 hero version only. */
  chips?: string[];
  label?: string;
};

function Chip({ x, y, text, anchor = "start" }: { x: number; y: number; text: string; anchor?: "start" | "end" }) {
  const w = text.length * 7.9 + 44;
  const left = anchor === "end" ? x - w : x;
  return (
    <g>
      <rect x={left} y={y} width={w} height={34} rx={17} fill="#151821" stroke="#2A2E3A" />
      <circle cx={left + 18} cy={y + 17} r={4} fill={ART.cobalt} />
      <text
        x={left + 30}
        y={y + 21.5}
        fill={ART.text}
        fontFamily="var(--font-geist-mono), ui-monospace, monospace"
        fontSize={12.5}
        letterSpacing="0.06em"
      >
        {text}
      </text>
    </g>
  );
}

export function ArtFrame({
  className,
  chips,
  label,
  children,
}: ArtProps & { children: React.ReactNode }) {
  const id = label?.replace(/\W+/g, "-").toLowerCase() ?? "art";
  return (
    <svg
      viewBox={`0 0 ${ART.w} ${ART.h}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label={label}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={`${id}-grid`} width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M30 0H0V30" fill="none" stroke={ART.stroke} strokeOpacity="0.22" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width={ART.w} height={ART.h} fill={ART.bg} />
      <rect width={ART.w} height={ART.h} fill={`url(#${id}-grid)`} />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </g>
      {chips?.[0] && <Chip x={48} y={48} text={chips[0]} />}
      {chips?.[1] && <Chip x={ART.w - 48} y={ART.h - 82} text={chips[1]} anchor="end" />}
    </svg>
  );
}

/** Cobalt focal point with a soft halo. */
export function Focal({ cx, cy, r = 7 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r * 5} fill={ART.cobalt} fillOpacity="0.14" stroke="none" />
      <circle cx={cx} cy={cy} r={r * 2.4} stroke={ART.cobalt} strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={r} fill={ART.cobalt} stroke="none" />
    </g>
  );
}
