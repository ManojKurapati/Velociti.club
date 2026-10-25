import { ART, ArtFrame, Focal, type ArtProps } from "./ArtFrame";

const S = { stroke: ART.stroke, strokeWidth: 1.5 };
const L = { stroke: ART.light, strokeWidth: 2.5 };

export function HealthcareArt(props: ArtProps) {
  return (
    <ArtFrame label="Line illustration of an ECG pulse" {...props}>
      <path d="M0 330 H1050" {...S} strokeOpacity="0.6" />
      <path d="M0 330 H260 l14 -18 l14 18 H420 l12 -30 l12 30 H600 l16 -16 l16 16 H1050" {...S} />
      <path
        d="M0 235 H330 q14 -26 28 0 H420 l14 26 l30 -175 l34 290 l26 -141 H600 q22 -40 44 0 H1050"
        {...L}
      />
      <Focal cx={464} cy={86} />
      <circle cx={518} cy={376} r={5} fill={ART.light} stroke="none" />
    </ArtFrame>
  );
}

export function FinanceArt(props: ArtProps) {
  const candles = [
    { x: 380, o: 300, c: 270, h: 250, l: 320 },
    { x: 425, o: 270, c: 285, h: 255, l: 300 },
    { x: 470, o: 285, c: 240, h: 225, l: 300 },
    { x: 515, o: 240, c: 210, h: 190, l: 255 },
    { x: 560, o: 210, c: 225, h: 195, l: 240 },
    { x: 605, o: 225, c: 170, h: 150, l: 235 },
    { x: 650, o: 170, c: 130, h: 110, l: 185 },
  ];
  const side = [80, 125, 170, 215, 260, 790, 835, 880, 925, 970];
  return (
    <ArtFrame label="Line illustration of candlesticks with a rising trend" {...props}>
      {side.map((x, i) => {
        const top = 230 + ((i * 37) % 60) - (x > 500 ? 70 : 0);
        return (
          <g key={x} {...S} strokeOpacity="0.7">
            <path d={`M${x} ${top - 20} V${top + 70}`} />
            <rect x={x - 9} y={top} width={18} height={44} rx={2} />
          </g>
        );
      })}
      {candles.map((c) => {
        const up = c.c < c.o;
        return (
          <g key={c.x}>
            <path d={`M${c.x} ${c.h} V${c.l}`} {...S} stroke={up ? ART.light : ART.stroke} strokeWidth={2} />
            <rect
              x={c.x - 12}
              y={Math.min(c.o, c.c)}
              width={24}
              height={Math.abs(c.o - c.c)}
              rx={3}
              stroke={up ? ART.light : ART.stroke}
              strokeWidth={2}
              fill={up ? "rgba(143,162,255,0.12)" : "none"}
            />
          </g>
        );
      })}
      <path d="M340 340 C 420 320, 450 300, 500 250 S 600 200, 650 130 L 700 100" {...L} />
      <Focal cx={700} cy={100} />
      <path d="M340 380 H710" {...S} strokeDasharray="4 6" />
    </ArtFrame>
  );
}

export function OilGasArt(props: ArtProps) {
  return (
    <ArtFrame label="Line illustration of an offshore rig with a gas flare" {...props}>
      {/* Water */}
      {[392, 410, 428].map((y, i) => (
        <path key={y} d={`M0 ${y} q 26 -8 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0`} {...S} strokeOpacity={0.8 - i * 0.2} />
      ))}
      {/* Legs */}
      <path d="M420 270 L400 420 M470 270 L465 420 M580 270 L585 420 M630 270 L650 420" {...S} strokeWidth={2} />
      <path d="M404 380 L646 380 M410 330 L640 330 M404 380 L470 330 L585 380 L640 330" {...S} />
      {/* Deck */}
      <rect x={385} y={250} width={280} height={22} rx={3} {...L} />
      <rect x={410} y={214} width={80} height={36} rx={3} {...S} strokeWidth={2} />
      <path d="M418 226 h16 M442 226 h16 M466 226 h16" {...S} />
      {/* Derrick */}
      <path d="M540 250 L572 90 L604 250 M548 210 H596 M556 170 H588 M563 130 H581 M548 210 L588 170 L556 170 L581 130" {...L} />
      <path d="M572 90 V70" {...L} />
      {/* Flare boom */}
      <path d="M665 258 L760 170" {...S} strokeWidth={2} />
      <path d="M665 240 L760 170" {...S} />
      <path d="M760 170 c -12 -16 -6 -34 6 -48 c 2 14 14 18 12 34 c 8 -6 8 -14 6 -22 c 10 14 10 32 -6 40 z" stroke={ART.cobalt} strokeWidth={2} fill="rgba(43,75,255,0.25)" />
      <Focal cx={766} cy={150} r={5} />
      {/* Lights */}
      <circle cx={572} cy={70} r={4} fill={ART.light} stroke="none" />
      <circle cx={392} cy={250} r={3} fill={ART.light} stroke="none" />
    </ArtFrame>
  );
}

export function AutomotiveArt(props: ArtProps) {
  return (
    <ArtFrame label="Line illustration of a robot arm scanning a car chassis" {...props}>
      {/* Line floor */}
      <path d="M0 392 H1050" {...S} />
      <path d="M0 404 H1050" {...S} strokeDasharray="10 14" strokeOpacity="0.7" />
      {/* Chassis */}
      <path d="M360 350 H720 M380 350 L400 300 H680 L705 350 M430 300 L460 262 H600 L640 300 M520 262 V350 M450 300 V350 M610 300 V350" {...L} />
      <circle cx={430} cy={362} r={26} {...L} />
      <circle cx={430} cy={362} r={8} {...S} strokeWidth={2} />
      <circle cx={650} cy={362} r={26} {...L} />
      <circle cx={650} cy={362} r={8} {...S} strokeWidth={2} />
      {/* Robot arm */}
      <rect x={300} y={366} width={70} height={26} rx={4} {...S} strokeWidth={2} />
      <path d="M335 366 L330 220 L470 120" stroke={ART.light} strokeWidth={10} strokeOpacity="0.18" />
      <path d="M335 366 L330 220 L470 120 L520 150" {...L} />
      <circle cx={330} cy={220} r={12} {...L} fill={ART.bg} />
      <circle cx={470} cy={120} r={10} {...L} fill={ART.bg} />
      <path d="M512 140 l20 0 l0 26 l-20 0 z" {...L} fill={ART.bg} />
      {/* Scan beam */}
      <path d="M522 166 L470 300 H580 Z" fill="rgba(43,75,255,0.18)" stroke="none" />
      <path d="M522 166 L470 300 M522 166 L580 300" stroke={ART.cobalt} strokeWidth={1.5} />
      <path d="M462 300 H588" stroke={ART.cobalt} strokeWidth={2.5} />
      <Focal cx={522} cy={166} r={5} />
      {/* Side stations */}
      <path d="M90 392 V250 H150 V392 M120 250 V210 M880 392 V230 H960 V392 M900 270 H940 M900 300 H940" {...S} />
    </ArtFrame>
  );
}

function hex(cx: number, cy: number, r: number) {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i + Math.PI / 6;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  });
  return `M${pts.join(" L")} Z`;
}

export function PharmaArt(props: ArtProps) {
  const r = 46;
  const dx = r * Math.sqrt(3);
  return (
    <ArtFrame label="Line illustration of a hexagonal molecule and a vial" {...props}>
      <path d={hex(470, 190, r)} {...L} />
      <path d={hex(470 + dx, 190, r)} {...L} />
      <path d={hex(470 + dx / 2, 190 + r * 1.5, r)} {...S} strokeWidth={2} />
      <path d={hex(470 - dx / 2 - 60, 120, r * 0.7)} {...S} />
      <path d={`M${470 - dx / 2} ${190 - r / 2} L${470 - dx / 2 - 30} ${150}`} {...S} strokeWidth={2} />
      <path d={`M${470 + dx * 1.5} ${190 - r / 2} L${470 + dx * 1.5 + 40} ${150}`} {...L} />
      {[
        [470, 190 - r],
        [470 + dx / 2, 190 + r / 2],
        [470 - dx / 2, 190 + r / 2],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={5} fill={ART.light} stroke="none" />
      ))}
      <Focal cx={470 + dx * 1.5 + 40} cy={150} r={6} />
      {/* Vial */}
      <g transform="translate(650 230)">
        <rect x={0} y={0} width={44} height={14} rx={3} {...L} />
        <path d="M6 14 V130 a16 16 0 0 0 32 0 V14" {...L} />
        <path d="M6 80 H38 V130 a16 16 0 0 1 -32 0 Z" fill="rgba(43,75,255,0.3)" stroke={ART.cobalt} strokeWidth={1.5} />
        <path d="M14 96 h6 M14 110 h10" {...S} />
      </g>
      <path d="M340 400 H720" {...S} />
      <path d="M100 330 h60 M100 350 h90 M100 370 h40 M870 100 h70 M870 120 h40" {...S} />
    </ArtFrame>
  );
}

export function HospitalityArt(props: ArtProps) {
  const lit = new Set(["1-2", "2-4", "3-1", "4-3", "0-0", "5-2", "2-0"]);
  return (
    <ArtFrame label="Line illustration of a hotel facade with lit windows" {...props}>
      <path d="M0 410 H1050" {...S} />
      <rect x={400} y={70} width={250} height={340} rx={2} {...L} />
      <path d="M390 70 H660" {...L} />
      {Array.from({ length: 6 }, (_, row) =>
        Array.from({ length: 5 }, (_, col) => {
          const key = `${row}-${col}`;
          const on = lit.has(key);
          return (
            <rect
              key={key}
              x={420 + col * 44}
              y={92 + row * 40}
              width={30}
              height={24}
              rx={2}
              stroke={on ? ART.light : ART.stroke}
              strokeWidth={1.5}
              fill={on ? "rgba(143,162,255,0.22)" : "none"}
            />
          );
        }),
      )}
      <rect x={420 + 2 * 44} y={92 + 3 * 40} width={30} height={24} rx={2} fill="rgba(43,75,255,0.55)" stroke={ART.cobalt} strokeWidth={2} />
      {/* Canopy + door */}
      <path d="M470 352 H580 L596 336 H454 Z" {...L} />
      <rect x={505} y={352} width={40} height={58} {...S} strokeWidth={2} />
      <path d="M525 352 V410" {...S} />
      {/* Neighbouring blocks */}
      <path d="M260 410 V200 H360 V410 M690 410 V160 H800 V410 M100 410 V280 H200 V410 M860 410 V250 H960 V410" {...S} />
      <Focal cx={523} cy={224} r={4} />
    </ArtFrame>
  );
}

export function EducationArt(props: ArtProps) {
  const arch = (w: number, h: number) => {
    const x0 = 525 - w / 2;
    const r = w / 2;
    return `M${x0} 410 V${410 - h + r} A${r} ${r} 0 0 1 ${x0 + w} ${410 - h + r} V410`;
  };
  return (
    <ArtFrame label="Line illustration of nested arches" {...props}>
      <path d="M0 410 H1050" {...S} />
      <path d={arch(340, 360)} {...S} strokeWidth={2} />
      <path d={arch(270, 300)} {...L} />
      <path d={arch(200, 240)} {...L} strokeOpacity="0.8" />
      <path d={arch(130, 180)} stroke={ART.cobalt} strokeWidth={2.5} fill="rgba(43,75,255,0.14)" />
      <Focal cx={525} cy={295} r={5} />
      {[140, 260, 790, 910].map((x) => (
        <path key={x} d={`M${x - 40} 410 V250 A40 40 0 0 1 ${x + 40} 250 V410`} {...S} strokeOpacity="0.8" />
      ))}
    </ArtFrame>
  );
}

export function MiningArt(props: ArtProps) {
  // Open-pit benches as stepped contours, with a haul truck on the ramp.
  const benches = [0, 1, 2, 3, 4];
  return (
    <ArtFrame label="Line illustration of an open-pit mine with a haul truck" {...props}>
      {benches.map((i) => {
        const inset = 70 + i * 62;
        const y = 150 + i * 46;
        return (
          <path
            key={i}
            d={`M${inset} ${y} H${1050 - inset}`}
            {...(i === 2 ? L : S)}
            strokeWidth={i === 2 ? 2.5 : 1.5}
          />
        );
      })}
      {benches.slice(0, 4).map((i) => {
        const inset = 70 + i * 62;
        const y = 150 + i * 46;
        return <path key={`w${i}`} d={`M${inset} ${y} L${inset + 62} ${y + 46} M${1050 - inset} ${y} L${1050 - inset - 62} ${y + 46}`} {...S} />;
      })}
      <path d="M320 380 H730" {...S} strokeDasharray="6 8" />
      {/* Haul truck on bench 3 */}
      <g transform="translate(440 196)">
        <path d="M0 40 L14 6 H96 L110 40 Z" {...L} fill="rgba(143,162,255,0.12)" />
        <rect x={110} y={14} width={38} height={26} rx={3} {...L} fill={ART.bg} />
        <path d="M118 20 h18 v10 h-18 z" {...S} />
        <circle cx={26} cy={48} r={10} {...L} fill={ART.bg} />
        <circle cx={84} cy={48} r={10} {...L} fill={ART.bg} />
        <circle cx={132} cy={48} r={10} {...L} fill={ART.bg} />
      </g>
      <Focal cx={586} cy={218} r={5} />
      {/* Ore stockpile */}
      <path d="M760 150 q 40 -50 80 0 Z" {...S} strokeWidth={2} />
      <path d="M150 150 l20 -40 l20 40 M180 110 V90" {...S} />
    </ArtFrame>
  );
}

export function GovernmentArt(props: ArtProps) {
  const cols = [400, 445, 490, 535, 580, 625];
  return (
    <ArtFrame label="Line illustration of a civic building with columns and a dome" {...props}>
      <path d="M0 410 H1050" {...S} />
      {/* Steps */}
      <path d="M360 410 V396 H690 V410 M372 396 V384 H678 V396" {...S} strokeWidth={2} />
      {/* Columns */}
      {cols.map((x) => (
        <g key={x}>
          <path d={`M${x} 384 V244`} {...L} />
          <path d={`M${x + 22} 384 V244`} {...L} />
          <path d={`M${x - 4} 244 H${x + 26} M${x - 4} 384 H${x + 26}`} {...S} strokeWidth={2} />
        </g>
      ))}
      {/* Entablature and pediment */}
      <rect x={378} y={226} width={294} height={18} rx={2} {...L} />
      <path d="M370 226 L525 160 L680 226 Z" {...L} fill="rgba(143,162,255,0.08)" />
      {/* Dome */}
      <path d="M470 160 A55 55 0 0 1 580 160" {...S} strokeWidth={2} />
      <path d="M525 105 V86" {...S} strokeWidth={2} />
      <Focal cx={525} cy={80} r={5} />
      {/* Wings */}
      <path d="M200 410 V280 H350 V410 M700 410 V280 H850 V410" {...S} />
      {[230, 270, 310, 730, 770, 810].map((x) => (
        <rect key={x} x={x - 10} y={310} width={20} height={34} rx={2} {...S} />
      ))}
    </ArtFrame>
  );
}

const map = {
  healthcare: HealthcareArt,
  finance: FinanceArt,
  "oil-gas": OilGasArt,
  automotive: AutomotiveArt,
  pharma: PharmaArt,
  hospitality: HospitalityArt,
  education: EducationArt,
  mining: MiningArt,
  government: GovernmentArt,
} as const;

export function IndustryArt({ slug, ...props }: ArtProps & { slug: string }) {
  const C = map[slug as keyof typeof map] ?? HealthcareArt;
  return <C {...props} />;
}
