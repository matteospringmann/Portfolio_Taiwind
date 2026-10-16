import { Reveal } from "@/components/motion/Reveal";
import { CTile } from "@/components/skills/CTile";
import { DevOpsTile } from "@/components/skills/DevOpsTile";
import { GitTile } from "@/components/skills/GitTile";
import { LinuxTile } from "@/components/skills/LinuxTile";
import { NextTile } from "@/components/skills/NextTile";
import { ReactTile } from "@/components/skills/ReactTile";
import { TailwindTile } from "@/components/skills/TailwindTile";
import { TerminalTile } from "@/components/skills/TerminalTile";
import { TypeScriptTile } from "@/components/skills/TypeScriptTile";
import { Container, Section } from "@/components/ui/Section";

const toolbox = ["HTML5", "CSS3", "JavaScript", "GitHub", "VS Code", "Zed", "PostgreSQL", "Prisma", "Docker", "Vercel"];

export function Skills() {
  return (
    <Section id="competences" surface="paper-2" label="Compétences" className="overflow-hidden">
      <Container className="py-[clamp(6rem,16vh,10rem)]">
        <Reveal>
          <h2 className="type-display max-w-[13ch] text-[clamp(2.6rem,6.4vw,5.6rem)]">Une boîte à outils, en marche.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="type-body mt-6 max-w-[44ch] text-[19px] text-fg-muted">
            Chaque tuile fait tourner un vrai bout de code. Cliquez, changez d&apos;onglet, regardez-les travailler.
          </p>
        </Reveal>

        {/* 9 skills, 9 cells: 4 columns on desktop, every row filled */}
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_auto_auto_auto]">
          <ReactTile className="md:col-span-2 lg:row-span-2" />
          <TypeScriptTile className="md:col-span-2" />
          <TailwindTile />
          <NextTile />
          <TerminalTile className="md:col-span-2" />
          <GitTile className="md:col-span-2" />
          <CTile />
          <LinuxTile />
          <DevOpsTile className="md:col-span-2" />
        </div>
      </Container>

      <div className="relative border-t border-black/[0.06] py-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-24 bg-gradient-to-r from-paper-2 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-24 bg-gradient-to-l from-paper-2 to-transparent" />
        <ul className="flex w-max animate-marquee whitespace-nowrap">
          {[...toolbox, ...toolbox].map((tool, i) => (
            <li
              key={i}
              aria-hidden={i >= toolbox.length}
              className="pr-12 text-[clamp(1.4rem,2.4vw,2rem)] font-semibold tracking-[-0.03em] text-fg/45"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
