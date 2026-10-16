"use client";

import { ArrowUpRightIcon, BriefcaseIcon, GraduationCapIcon } from "@phosphor-icons/react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { timeline, type TimelineEntry } from "@/content/timeline";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Section } from "@/components/ui/Section";

function EntryCard({ entry }: { entry: TimelineEntry }) {
  const Icon = entry.type === "work" ? BriefcaseIcon : GraduationCapIcon;
  return (
    <div className="flex h-full flex-col rounded-[28px] bg-paper-2 p-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[13px] text-fg-muted">{entry.date}</span>
        <span className="grid size-9 place-items-center rounded-full bg-white text-fg" aria-label={entry.type === "work" ? "Expérience" : "Formation"}>
          <Icon size={17} />
        </span>
      </div>
      <h3 className="type-heading mt-8 text-[23px]">{entry.title}</h3>
      <a
        href={entry.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-1 pt-6 text-[15px] text-accent hover:underline"
      >
        {entry.location}
        <ArrowUpRightIcon size={14} />
      </a>
    </div>
  );
}

const intro = (
  <>
    <h2 className="type-display text-[clamp(2.6rem,6.4vw,5.6rem)]">Un parcours, pas à pas.</h2>
    <p className="type-body mt-6 max-w-[34ch] text-[19px] text-fg-muted">
      De Wasselonne à Epitech Strasbourg, en passant par un stage chez Sogeti.
    </p>
  </>
);

export function Journey() {
  const reduce = useReducedMotion();
  const section = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!track.current || !viewport.current) return;
      setDistance(Math.max(0, track.current.scrollWidth - viewport.current.clientWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    if (viewport.current) ro.observe(viewport.current);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const line = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="parcours" surface="white" label="Parcours">
      {/* Desktop: vertical scroll drives a horizontal pan */}
      {!reduce && (
        <div
          ref={section}
          className="relative hidden lg:block"
          style={{ height: `calc(100dvh + ${distance}px)` } as CSSProperties}
        >
          <div ref={viewport} className="sticky top-0 flex h-[100dvh] items-center overflow-hidden">
            <motion.div ref={track} style={{ x }} className="flex w-max items-stretch gap-5 pl-[max(2rem,calc((100vw-1240px)/2+2rem))] pr-[8vw]">
              <div className="flex w-[600px] shrink-0 flex-col justify-center pr-16">{intro}</div>
              {timeline.map((entry) => (
                <div key={entry.title} className="relative w-[340px] shrink-0 pt-10">
                  <span className="absolute left-7 top-0 size-3 rounded-full border-2 border-white bg-accent shadow-[0_0_0_1px_rgb(37_87_242/0.3)]" aria-hidden />
                  <div className="h-[300px]">
                    <EntryCard entry={entry} />
                  </div>
                </div>
              ))}
            </motion.div>
            <div className="absolute inset-x-0 bottom-[12vh] mx-auto h-[2px] w-[min(1176px,calc(100vw-4rem))] bg-black/[0.06]" aria-hidden>
              <motion.div className="h-full origin-left bg-accent" style={{ scaleX: line }} />
            </div>
          </div>
        </div>
      )}

      {/* Mobile, tablet and reduced motion: a plain vertical timeline */}
      <Container className={`py-[clamp(6rem,14vh,9rem)] ${reduce ? "" : "lg:hidden"}`}>
        <Reveal>{intro}</Reveal>
        <ol className="relative mt-14 space-y-4 border-l-2 border-black/[0.06] pl-6">
          {[...timeline].reverse().map((entry) => (
            <Reveal as="li" key={entry.title} className="relative">
              <span className="absolute -left-[31px] top-8 size-3 rounded-full border-2 border-white bg-accent" aria-hidden />
              <EntryCard entry={entry} />
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
