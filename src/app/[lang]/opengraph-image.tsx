import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { hasLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { t } = getDictionary(hasLocale(lang) ? lang : "fr");
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
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -4, lineHeight: 1.02 }}>{t.meta.ogHeadline[0]}</div>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -4, lineHeight: 1.02 }}>{t.meta.ogHeadline[1]}</div>
        </div>
        <div style={{ fontSize: 28, color: "#a1a1a8" }}>{t.meta.ogTagline}</div>
      </div>
    ),
    size,
  );
}
