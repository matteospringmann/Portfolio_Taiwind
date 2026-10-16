import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { GlassNav } from "@/components/ui/GlassNav";

export default function Home() {
  return (
    <div id="page">
      <GlassNav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
