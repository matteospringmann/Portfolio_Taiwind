"use client";

import { ArrowRightIcon, BrowserIcon, CheckIcon, CubeIcon, WrenchIcon } from "@phosphor-icons/react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { projects } from "@/content/projects";
import { process, services, type Service } from "@/content/services";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectVisual } from "@/components/mockups/ProjectVisual";
import { Container, Section } from "@/components/ui/Section";
import { setProjectType } from "@/lib/contact-intent";
import { useScrollTo } from "@/lib/use-scroll-to";

const icons = { site: BrowserIcon, outil: WrenchIcon, "sur-mesure": CubeIcon } as const;
const tints = {
  site: "bg-[linear-gradient(160deg,#1b2f6b_0%,#141416_62%)]",
  outil: "bg-[linear-gradient(160deg,#3a1c2b_0%,#141416_70%)]",
  "sur-mesure": "bg-[linear-gradient(160deg,#1c3a30_0%,#141416_70%)]",
} as const;

function Offer({ service, featured, delay }: { service: Service; featured?: boolean; delay?: number }) {
  const scrollTo = useScrollTo();
  const Icon = icons[service.type];
  return (
    <Reveal delay={delay} className={featured ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"}>
      <article
        className={`relative flex h-full flex-col overflow-hidden rounded-[28px] p-7 sm:p-9 ${tints[service.type]} ring-1 ring-inset ring-white/[0.06]`}
      >
        <Icon size={30} weight="light" className="text-accent-bright" />
        <h3 className={`type-title mt-6 ${featured ? "text-[clamp(2rem,3.6vw,3rem)]" : "text-[28px]"}`}>{service.title}</h3>
        <p className="type-body mt-3 max-w-[40ch] text-[17px] text-fg-inverse/75">{service.pitch}</p>
        <ul className="mt-6 space-y-2.5">
          {service.examples.map((e) => (
            <li key={e} className="flex items-center gap-2.5 text-[15px] text-fg-inverse/85">
              <CheckIcon size={15} weight="bold" className="shrink-0 text-accent-bright" />
              {e}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <button
            type="button"
            onClick={() => {
              setProjectType(service.type);
              scrollTo("contact");
            }}
            className="pressable group inline-flex h-11 items-center gap-2 rounded-full bg-white/10 px-5 text-[14px] font-medium text-fg-inverse hover:bg-white/[0.16]"
          >
            Demander un devis
            <ArrowRightIcon size={15} weight="bold" className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
        {featured && (
          <div className="pointer-events-none relative -mb-24 mt-10 w-[115%] self-start sm:-mb-32 lg:mt-auto lg:pt-10" aria-hidden>
            <div className="rotate-[-3deg] opacity-95">
              <ProjectVisual project={projects.find((p) => p.slug === "sapin-blanc")!} live={false} />
            </div>
          </div>
        )}
      </article>
    </Reveal>
  );
}

function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="mt-[clamp(6rem,16vh,10rem)] grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <h3 className="type-title text-[clamp(2rem,4vw,3.2rem)]">Comment on travaille ensemble.</h3>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="type-body mt-5 max-w-[36ch] text-[18px] text-fg-inverse-muted">
              De l&apos;idée au déploiement, avec un interlocuteur unique du début à la fin.
            </p>
          </Reveal>
        </div>
      </div>
      <div className="relative lg:col-span-6 lg:col-start-7">
        <div className="absolute bottom-2 left-[7px] top-2 w-[2px] bg-white/10" aria-hidden>
          <motion.div className="h-full origin-top bg-accent-bright" style={{ scaleY: fill }} />
        </div>
        <ol ref={ref} className="space-y-16 pl-10">
        {process.map((step, i) => (
          <Reveal as="li" key={step.verb} delay={i * 0.05} className="relative">
            <span className="absolute -left-10 top-3 size-4 rounded-full border-[3px] border-ink bg-accent-bright" aria-hidden />
            <p className="type-display text-[clamp(2.4rem,5vw,4rem)] text-fg-inverse">{step.verb}</p>
            <p className="type-heading mt-3 text-[19px]">{step.title}</p>
            <p className="type-body mt-2 max-w-[44ch] text-[17px] text-fg-inverse-muted">{step.text}</p>
          </Reveal>
        ))}
        </ol>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <Section id="services" surface="ink" label="Services">
      <Container className="py-[clamp(6rem,16vh,10rem)]">
        <Reveal>
          <h2 className="type-display max-w-[15ch] text-[clamp(2.6rem,6.4vw,5.6rem)]">Ce que je peux construire pour vous.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="type-body mt-6 max-w-[46ch] text-[19px] text-fg-inverse-muted">
            Artisans, PME, associations ou porteurs de projet : décrivez votre besoin, je vous réponds avec une proposition sur mesure.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 lg:grid-cols-12">
          <Offer service={services[0]} featured />
          <Offer service={services[1]} delay={0.08} />
          <Offer service={services[2]} delay={0.16} />
        </div>

        <Process />
      </Container>
    </Section>
  );
}
