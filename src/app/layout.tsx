import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/motion/Providers";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name}, développeur front-end`,
  description: site.description,
  keywords: [
    "Mattéo Springmann",
    "développeur front-end",
    "développeur Next.js",
    "création de site internet",
    "outil interne",
    "Epitech Strasbourg",
    "portfolio",
  ],
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: site.name,
    title: `${site.name}, développeur front-end`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "light dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: site.role,
  alumniOf: { "@type": "CollegeOrUniversity", name: "Epitech", url: site.school.url },
  sameAs: [site.github, site.linkedin].filter(Boolean),
  knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Python", "C"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <a
          href="#a-propos"
          className="fixed left-4 top-3 z-[70] -translate-y-20 rounded-full bg-accent px-4 py-2 text-[14px] font-medium text-white focus:translate-y-0"
        >
          Aller au contenu
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
