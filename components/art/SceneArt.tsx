import { ART, ArtFrame, Focal, type ArtProps } from "./ArtFrame";

const S = { stroke: ART.stroke, strokeWidth: 1.5 };
const L = { stroke: ART.light, strokeWidth: 2.5 };

/** Dark server racks: Trust Center and airgapped sections. */
export function ServerRackArt(props: ArtProps) {
  const racks = [300, 420, 540, 660];
  return (
    <ArtFrame label="Line illustration of server racks inside a closed perimeter" {...props}>
      <rect x={250} y={50} width={550} height={350} rx={18} stroke={ART.cobalt} strokeWidth={1.5} strokeDasharray="6 8" />
      {racks.map((x, i) => (
        <g key={x}>
          <rect x={x} y={90} width={90} height={280} rx={6} {...(i === 1 ? L : S)} strokeWidth={2} />
          {Array.from({ length: 8 }, (_, r) => (
            <g key={r}>
              <path d={`M${x + 12} ${110 + r * 32} H${x + 60}`} {...S} />
              <circle cx={x + 74} cy={110 + r * 32} r={3} fill={(r + i) % 3 === 0 ? ART.light : ART.stroke} stroke="none" />
            </g>
          ))}
        </g>
      ))}
      <Focal cx={494} cy={174} r={5} />
      <path d="M120 225 H230 M820 225 H930" {...S} strokeDasharray="3 7" />
      <path d="M232 214 l12 11 l-12 11 M818 214 l-12 11 l12 11" stroke={ART.cobalt} strokeWidth={2} />
      <text x={525} y={428} textAnchor="middle" fill={ART.text} fontFamily="var(--font-geist-mono), monospace" fontSize={12} letterSpacing="0.14em">
        NO EGRESS · INSIDE YOUR PERIMETER
      </text>
    </ArtFrame>
  );
}

/** Night skyline for /about. */
export function SkylineArt(props: ArtProps) {
  const towers = [
    [60, 260], [120, 300], [170, 220], [230, 280], [300, 190], [360, 250], [420, 160],
    [600, 170], [660, 240], [720, 200], [790, 270], [850, 230], [910, 290], [970, 250],
  ];
  return (
    <ArtFrame label="Line illustration of a city skyline at night" {...props}>
      <path d="M0 410 H1050" {...S} />
      {towers.map(([x, top]) => (
        <g key={x}>
          <rect x={x} y={top} width={44} height={410 - top} {...S} />
          {Array.from({ length: Math.floor((400 - top) / 26) }, (_, r) => (
            <path key={r} d={`M${x + 10} ${top + 16 + r * 26} h8 M${x + 26} ${top + 16 + r * 26} h8`} stroke={(x + r) % 5 === 0 ? ART.light : ART.stroke} strokeWidth={1.5} strokeOpacity={0.8} />
          ))}
        </g>
      ))}
      {/* Spire */}
      <path d="M500 410 L505 120 L515 60 L525 20 L535 60 L545 120 L550 410 Z" {...L} />
      <path d="M508 160 H542 M511 220 H539 M506 290 H544" {...S} />
      <Focal cx={525} cy={30} r={4} />
      {[400, 420].map((y, i) => (
        <path key={y} d={`M0 ${y + 18} q 30 -6 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0`} {...S} strokeOpacity={0.5 - i * 0.2} />
      ))}
    </ArtFrame>
  );
}

/** Spreadsheet grid with highlighted cells: insights thumbnails. */
export function SpreadsheetArt(props: ArtProps) {
  return (
    <ArtFrame label="Line illustration of a spreadsheet with highlighted cells" {...props}>
      <rect x={300} y={70} width={450} height={310} rx={10} {...L} />
      {Array.from({ length: 7 }, (_, r) => (
        <path key={r} d={`M300 ${110 + r * 40} H750`} {...S} />
      ))}
      {[390, 480, 570, 660].map((x) => (
        <path key={x} d={`M${x} 70 V380`} {...S} />
      ))}
      <rect x={480} y={190} width={90} height={40} fill="rgba(43,75,255,0.4)" stroke={ART.cobalt} strokeWidth={2} />
      <rect x={570} y={270} width={90} height={40} fill="rgba(143,162,255,0.15)" stroke={ART.light} strokeWidth={1.5} />
      <Focal cx={570} cy={190} r={4} />
      <path d="M760 210 C 840 210, 840 160, 920 160" stroke={ART.cobalt} strokeWidth={2} strokeDasharray="5 6" />
      <circle cx={920} cy={160} r={14} {...L} />
    </ArtFrame>
  );
}

/** Pilot-to-production curve: insights thumbnails. */
export function PilotArt(props: ArtProps) {
  return (
    <ArtFrame label="Line illustration of a project curve stalling in pilot then reaching production" {...props}>
      <path d="M200 380 H860 M200 380 V80" {...S} strokeWidth={2} />
      <path d="M200 360 C 300 340, 340 220, 420 220 S 520 300, 600 300" {...S} strokeWidth={2.5} strokeDasharray="6 7" />
      <path d="M200 360 C 300 340, 340 220, 420 220 S 520 240, 600 200 S 760 110, 840 100" {...L} />
      <Focal cx={840} cy={100} r={6} />
      <circle cx={600} cy={300} r={6} {...S} strokeWidth={2} />
      <text x={600} y={330} textAnchor="middle" fill={ART.text} fontFamily="var(--font-geist-mono), monospace" fontSize={12} letterSpacing="0.14em">PILOT</text>
      <text x={840} y={74} textAnchor="middle" fill={ART.text} fontFamily="var(--font-geist-mono), monospace" fontSize={12} letterSpacing="0.14em">PRODUCTION</text>
    </ArtFrame>
  );
}

const map = { airgap: ServerRackArt, servers: ServerRackArt, skyline: SkylineArt, spreadsheet: SpreadsheetArt, pilot: PilotArt } as const;

export function SceneArt({ name, ...props }: ArtProps & { name: string }) {
  const C = map[name as keyof typeof map] ?? PilotArt;
  return <C {...props} />;
}
