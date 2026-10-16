import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}, développeur front-end`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "radial-gradient(80% 90% at 50% 120%, #1b3a9e 0%, #0a0a0b 60%)",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, color: "#a1a1a8" }}>{site.name}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -4, lineHeight: 1.02 }}>Des interfaces</div>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -4, lineHeight: 1.02 }}>qui se ressentent.</div>
        </div>
        <div style={{ fontSize: 28, color: "#a1a1a8" }}>Sites internet, outils internes et projets sur mesure</div>
      </div>
    ),
    size,
  );
}
