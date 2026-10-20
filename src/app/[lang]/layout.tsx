import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { Providers } from "@/components/motion/Providers";
import { site } from "@/content/site";
import { hasLocale, localePath, locales, ogLocales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { t, content } = getDictionary(lang);
  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: content.profile.description,
    keywords: t.meta.keywords,
    authors: [{ name: site.name, url: site.url }],
    alternates: {
      canonical: localePath(lang),
      languages: { ...Object.fromEntries(locales.map((l) => [l, localePath(l)])), "x-default": "/" },
    },
    openGraph: {
      type: "website",
      locale: ogLocales[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocales[l]),
      url: localePath(lang),
      siteName: site.name,
      title: t.meta.title,
      description: content.profile.description,
    },
    twitter: { card: "summary_large_image" },
  };
}

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "light dark",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { t, content } = getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: new URL(localePath(lang), site.url).href,
    email: `mailto:${site.email}`,
    jobTitle: content.profile.role,
    alumniOf: { "@type": "CollegeOrUniversity", name: "Epitech", url: site.school.url },
    sameAs: [site.github, site.linkedin].filter(Boolean),
    knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Python", "C"],
  };

  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <a
          href="#a-propos"
          className="fixed left-4 top-3 z-[70] -translate-y-20 rounded-full bg-accent px-4 py-2 text-[14px] font-medium text-white focus:translate-y-0"
        >
          {t.a11y.skip}
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
