import { notFound } from "next/navigation";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { GlassNav } from "@/components/ui/GlassNav";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { I18nProvider } from "@/i18n/I18nProvider";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dictionary = getDictionary(lang);

  return (
    <I18nProvider dictionary={dictionary}>
      <div id="page">
        <GlassNav />
        <main>
          <Hero />
          <About dictionary={dictionary} />
          <Projects />
          <Skills dictionary={dictionary} />
          <Journey />
          <Services />
          <Contact />
        </main>
        <Footer dictionary={dictionary} />
      </div>
    </I18nProvider>
  );
}
