"use client";

import { ArrowUpRightIcon, BriefcaseIcon, CheckIcon, GlobeHemisphereWestIcon } from "@phosphor-icons/react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { EpitechLogo } from "@/components/ui/EpitechLogo";
import { Container, Section } from "@/components/ui/Section";
import type { Dictionary } from "@/i18n/dictionary";
import { useI18n } from "@/i18n/I18nProvider";
import { easeOut } from "@/lib/motion";

type SchoolYear = Dictionary["content"]["schoolYears"][number];

function YearDot({ index }: { index: number }) {
  const { content } = useI18n();
  const { school } = content;
  const current = index === school.currentYear;
  const done = index < school.currentYear;
  return (
    <span className="relative grid size-4 place-items-center" aria-hidden>
      {current && <span className="absolute inset-0 rounded-full bg-accent/40 motion-safe:animate-ping" />}
      <span
        className={`relative size-4 rounded-full border-2 ${
          done || current ? "border-accent bg-accent" : "border-black/15 bg-white"
        } ${current ? "shadow-[0_0_0_5px_rgb(37_87_242/0.15)]" : ""}`}
      />
    </span>
  );
}

function YearCard({ year, index }: { year: SchoolYear; index: number }) {
  const { t, content } = useI18n();
  const { school } = content;
  const current = index === school.currentYear;
  const future = index > school.currentYear;
  return (
    <div
      className={`h-full rounded-[24px] p-6 ${
        current ? "bg-white shadow-[0_0_0_1.5px_rgb(37_87_242/0.35),0_24px_60px_-30px_rgb(37_87_242/0.45)]" : "bg-paper-2"
      } ${future ? "opacity-70" : ""}`}
      aria-current={current ? "step" : undefined}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[13px] text-fg-muted">{year.dates}</p>
        {current && (
          <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[12px] font-medium text-accent">{t.journey.current}</span>
        )}
      </div>
      <p className="mt-5 text-[14px] font-medium text-accent">{year.year}</p>
      <h3 className="type-heading mt-1 text-[21px]">{year.goal}</h3>
      <p className="type-body mt-3 text-[15px] text-fg-muted">{year.highlights}</p>
      {year.internship && (
        <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[13px] font-medium shadow-[0_0_0_1px_rgb(0_0_0/0.06)]">
          <BriefcaseIcon size={14} />
          {t.journey.internship} · {year.internship}
        </p>
      )}
      {year.abroad && (
        <p className="mt-5 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-accent-soft px-3 py-1.5 text-[13px] font-medium text-accent">
          <GlobeHemisphereWestIcon size={14} />
          {year.abroad}
        </p>
      )}
    </div>
  );
}

function YearTrack() {
  const { content } = useI18n();
  const { school, schoolYears } = content;
  // Share of the rail that is filled: up to the middle of the current year.
  const progress = (school.currentYear + 0.5) / schoolYears.length;
  const reduce = useReducedMotion();
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const fill = reduce || inView ? progress : 0;
  const transition = { duration: reduce ? 0 : 1.6, ease: easeOut, delay: 0.2 };

  return (
    <ol ref={ref} className="relative mt-16 grid gap-4 max-lg:pl-9 lg:grid-cols-5 lg:pt-10">
      {/* Rail: horizontal on desktop, vertical on smaller screens */}
      <span className="absolute left-[7px] top-2 bottom-2 w-[2px] rounded-full bg-black/[0.07] lg:inset-x-2 lg:top-[7px] lg:bottom-auto lg:h-[2px] lg:w-auto" aria-hidden>
        <motion.span
          className="absolute inset-0 hidden origin-left rounded-full bg-accent lg:block"
          initial={false}
          animate={{ scaleX: fill }}
          transition={transition}
        />
        <motion.span
          className="absolute inset-0 origin-top rounded-full bg-accent lg:hidden"
          initial={false}
          animate={{ scaleY: fill }}
          transition={transition}
        />
      </span>
      {schoolYears.map((year, i) => (
        <Reveal as="li" key={year.dates} delay={i * 0.06} className="relative">
          <span className="absolute -left-9 top-6 lg:-top-10 lg:left-6">
            <YearDot index={i} />
          </span>
          <YearCard year={year} index={i} />
        </Reveal>
      ))}
    </ol>
  );
}

export function Journey() {
  const { t, content } = useI18n();
  const { school, schoolFacts, experiences } = content;
  return (
    <Section id="parcours" surface="white" label={t.nav.links.parcours}>
      <Container className="py-[clamp(6rem,14vh,9rem)]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <a
              href={school.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 transition-opacity hover:opacity-70"
            >
              <EpitechLogo className="h-7 w-auto text-accent sm:h-8" />
              <span className="h-6 w-px bg-black/15" aria-hidden />
              <span className="text-[15px] font-medium text-fg-muted">{school.program}</span>
            </a>
            <h2 className="type-display mt-6 text-[clamp(2.8rem,7vw,6rem)]">{school.name}.</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="type-body max-w-[42ch] text-[19px] text-fg-muted">{school.intro}</p>
            <a
              href={school.programUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-[15px] font-medium text-accent hover:underline"
            >
              {t.journey.programLink}
              <ArrowUpRightIcon size={14} weight="bold" />
            </a>
          </Reveal>
        </div>

        <YearTrack />

        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {schoolFacts.map((f, i) => (
            <Reveal as="li" key={f.label} delay={i * 0.06} className="rounded-[24px] bg-ink p-7 text-fg-inverse">
              <p className="type-display text-[clamp(2.6rem,4.4vw,3.6rem)]">{f.value}</p>
              <p className="type-heading mt-4 text-[18px]">{f.label}</p>
              <p className="type-body mt-2 text-[15px] text-fg-inverse-muted">{f.text}</p>
            </Reveal>
          ))}
        </ul>

        <div className="mt-[clamp(5rem,12vh,8rem)]">
          <Reveal>
            <h3 className="type-title text-[clamp(2rem,4vw,3rem)]">{t.journey.workTitle}</h3>
            <p className="type-body mt-3 max-w-[48ch] text-[18px] text-fg-muted">
              {t.journey.workIntro}
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {experiences.map((e, i) => (
              <Reveal as="li" key={e.company} delay={i * 0.06} className="flex flex-col rounded-[24px] bg-paper-2 p-7">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-[13px] text-fg-muted">{e.dates}</p>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white" aria-hidden>
                    <BriefcaseIcon size={17} />
                  </span>
                </div>
                <p className="mt-6 text-[14px] font-medium text-accent">{e.role}</p>
                <h4 className="type-heading mt-1 text-[23px]">{e.company}</h4>
                <ul className="mt-5 space-y-2">
                  {e.missions.map((m) => (
                    <li key={m} className="flex gap-2.5 text-[15px]">
                      <CheckIcon size={15} weight="bold" className="mt-1 shrink-0 text-accent" />
                      {m}
                    </li>
                  ))}
                </ul>
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1 pt-7 text-[15px] text-accent hover:underline"
                >
                  {e.location}
                  <ArrowUpRightIcon size={14} />
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
