import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const font = (file: string) => fs.readFileSync(path.join(process.cwd(), "node_modules/geist/dist/fonts", file));

/** Brand-style Open Graph card: paper background, ink title, cobalt eyebrow and wordmark dot. */
export function renderOg({ title, eyebrow }: { title: string; eyebrow?: string }) {
  const size = title.length > 70 ? 56 : title.length > 40 ? 68 : 84;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#F6F5F1", padding: "64px 72px", fontFamily: "Geist" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, letterSpacing: "-0.04em", color: "#0F1115" }}>
            Velociti<span style={{ color: "#2B4BFF", marginLeft: -8 }}>.</span>
          </div>
          <div style={{ display: "flex", fontFamily: "GeistMono", fontSize: 20, letterSpacing: "0.14em", color: "#474B55" }}>THINKVELOCITI.COM</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {eyebrow && (
            <div style={{ display: "flex", fontFamily: "GeistMono", fontSize: 22, letterSpacing: "0.14em", color: "#2B4BFF", textTransform: "uppercase", marginBottom: 28 }}>{eyebrow}</div>
          )}
          <div style={{ display: "flex", fontSize: size, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.02, color: "#0F1115", maxWidth: 1000 }}>{title}</div>
        </div>
        <div style={{ display: "flex", height: 8, width: 120, background: "#2B4BFF", borderRadius: 4 }} />
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Geist", data: font("geist-sans/Geist-SemiBold.ttf"), weight: 600 },
        { name: "Geist", data: font("geist-sans/Geist-Bold.ttf"), weight: 700 },
        { name: "GeistMono", data: font("geist-mono/GeistMono-Medium.ttf"), weight: 500 },
      ],
    },
  );
}
