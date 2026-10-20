"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "@/content/projects";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { Container, Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n/I18nProvider";
import { easeOut } from "@/lib/motion";
import { ProjectSheet } from "./ProjectSheet";

function ProjectText({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const { t } = useI18n();
  return (
    <div>
      <p className="text-[15px] text-fg-inverse-muted">
        {project.category} · <span className="text-fg-inverse/85">{project.role}</span>
      </p>
      <h3 className="type-display mt-2 text-[clamp(2.6rem,5vw,4.4rem)]">{project.title}</h3>
      <p className="type-body mt-5 max-w-[40ch] text-[18px] text-fg-inverse/80">{project.summary}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <li key={s} className="rounded-full bg-white/[0.08] px-3 py-1.5 text-[13px] text-fg-inverse/85">
            {s}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={onOpen}
          className="pressable group inline-flex h-12 items-center gap-2 rounded-full bg-fg-inverse px-6 text-[15px] font-medium text-fg"
        >
          {t.projects.open}
          <ArrowRightIcon size={16} weight="bold" className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}

function Chapter({ project, index, onActive, onOpen }: { project: Project; index: number; onActive: (i: number) => void; onOpen: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.6 });
  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <div ref={ref} className="flex min-h-[100dvh] items-center py-24">
      <motion.div
        animate={{ opacity: inView ? 1 : 0.25 }}
        transition={{ duration: 0.5, ease: easeOut }}
      >
        <ProjectText project={project} onOpen={onOpen} />
      </motion.div>
    </div>
  );
}

export function Projects() {
  const { t, content } = useI18n();
  const { projects } = content;
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<Project | null>(null);
  const onActive = useCallback((i: number) => setActive(i), []);
  const close = useCallback(() => setOpen(null), []);

  return (
    <Section id="projets" surface="ink" label={t.nav.links.projets}>
      <Container className="pt-[clamp(6rem,16vh,10rem)]">
        <Reveal>
          <h2 className="type-display max-w-[14ch] text-[clamp(2.6rem,6.4vw,5.6rem)]">
            {t.projects.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="type-body mt-6 max-w-[46ch] text-[19px] text-fg-inverse-muted">
            {t.projects.intro}
          </p>
        </Reveal>
      </Container>

      {/* Desktop: text chapters scroll while the device stays pinned */}
      <Container className="hidden lg:grid lg:grid-cols-12 lg:gap-12">
        <div className="col-span-5">
          {projects.map((p, i) => (
            <Chapter key={p.slug} project={p} index={i} onActive={onActive} onOpen={() => setOpen(p)} />
          ))}
        </div>
        <div className="col-span-7">
          <div className="sticky top-0 flex h-[100dvh] items-center">
            <div className="relative w-full">
              {projects.map((p, i) => (
                <div
                  key={p.slug}
                  aria-hidden
                  className="pointer-events-none absolute -inset-[20%] transition-opacity duration-700"
                  style={{
                    opacity: i === active ? 1 : 0,
                    background: `radial-gradient(closest-side, color-mix(in oklab, ${p.accent} 38%, transparent), transparent)`,
                  }}
                />
              ))}
              {/* All visuals stay mounted (stacked) so their screenshots are loaded before their turn comes. */}
              <div className="relative aspect-[880/640]">
                {projects.map((p, i) => {
                  const offset = Math.sign(i - active);
                  return (
                    <motion.div
                      key={p.slug}
                      className="absolute inset-0 flex items-center justify-center"
                      initial={false}
                      animate={
                        reduce
                          ? { opacity: offset === 0 ? 1 : 0 }
                          : {
                              opacity: offset === 0 ? 1 : 0,
                              y: offset * 60,
                              scale: offset === 0 ? 1 : 0.96,
                              filter: offset === 0 ? "blur(0px)" : "blur(8px)",
                            }
                      }
                      transition={{ duration: 0.7, ease: easeOut }}
                      aria-hidden={offset !== 0}
                    >
                      <ProjectVisual
                        project={p}
                        className={p.device === "phone" ? "w-[42%]" : "w-full"}
                        sizes={p.device === "phone" ? "300px" : "(min-width: 1280px) 720px, 58vw"}
                      />
                    </motion.div>
                  );
                })}
              </div>
              <div className="relative mt-8 flex justify-center" aria-hidden>
                {projects.map((p, i) => (
                  <span
                    key={p.slug}
                    className="h-1 w-7 rounded-full bg-white transition-[transform,opacity] duration-500"
                    style={{ transform: `scaleX(${i === active ? 1 : 0.28})`, opacity: i === active ? 0.9 : 0.25 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile and tablet: one block per project */}
      <Container className="flex flex-col gap-28 pb-28 pt-20 lg:hidden">
        {projects.map((p) => (
          <article key={p.slug}>
            <Reveal>
              <div
                className="rounded-[28px] px-4 py-8 sm:px-8"
                style={{ background: `radial-gradient(80% 70% at 50% 40%, color-mix(in oklab, ${p.accent} 30%, transparent), transparent)` }}
              >
                <ProjectVisual
                  project={p}
                  className={p.device === "phone" ? "mx-auto w-[min(280px,72vw)]" : ""}
                  sizes={p.device === "phone" ? "280px" : "(min-width: 640px) 90vw, 100vw"}
                />
              </div>
            </Reveal>
            <Reveal className="mt-8">
              <ProjectText project={p} onOpen={() => setOpen(p)} />
            </Reveal>
          </article>
        ))}
      </Container>

      <ProjectSheet project={open} onClose={close} />
    </Section>
  );
}
