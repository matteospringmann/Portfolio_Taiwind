import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { localeNames, localePath, locales } from "@/i18n/config";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404",
  description: "Page introuvable. Page not found. Seite nicht gefunden.",
};

// Unknown URLs land here, outside any language: one short message in each.
export default function GlobalNotFound() {
  return (
    <html lang="fr" className={geistSans.variable}>
      <body className="grid min-h-[100dvh] place-items-center bg-ink px-5 text-fg-inverse">
        <main className="text-center">
          <p className="type-display text-[clamp(4rem,14vw,9rem)]">404</p>
          <p className="type-body mt-2 text-[17px] text-fg-inverse-muted">
            Page introuvable · Page not found · Seite nicht gefunden
          </p>
          <ul className="mt-10 flex justify-center gap-3">
            {locales.map((l) => (
              <li key={l}>
                <a
                  href={localePath(l)}
                  hrefLang={l}
                  lang={l}
                  className="pressable inline-flex h-11 items-center rounded-full bg-white/10 px-5 text-[14px] font-medium hover:bg-white/[0.16]"
                >
                  {localeNames[l]}
                </a>
              </li>
            ))}
          </ul>
        </main>
      </body>
    </html>
  );
}
