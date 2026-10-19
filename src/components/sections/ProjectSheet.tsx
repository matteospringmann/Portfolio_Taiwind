"use client";

import { ArrowUpRightIcon, CheckCircleIcon, PuzzlePieceIcon, XIcon } from "@phosphor-icons/react";
import { useLenis } from "lenis/react";
import { AnimatePresence, motion, useDragControls, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/content/projects";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { layers } from "@/lib/layers";
import { springSheet } from "@/lib/motion";

export function ProjectSheet({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const lenis = useLenis();
  const reduce = useReducedMotion();
  const drag = useDragControls();
  const closeButton = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const open = project !== null;

  useEffect(() => {
    if (!open) return;
    opener.current = document.activeElement as HTMLElement | null;
    const page = document.getElementById("page");
    page?.setAttribute("inert", "");
    lenis?.stop();
    closeButton.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      page?.removeAttribute("inert");
      lenis?.start();
      window.removeEventListener("keydown", onKey);
      opener.current?.focus();
    };
  }, [open, lenis, onClose]);

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0" style={{ zIndex: layers.sheet }}>
          <motion.div
            className="absolute inset-0 bg-black/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sheet-title"
            className="absolute inset-x-0 bottom-0 mx-auto flex h-[calc(100dvh-2.5rem)] max-w-[1000px] flex-col overflow-hidden rounded-t-[28px] bg-white text-fg shadow-[0_-30px_80px_-20px_rgb(0_0_0/0.5)]"
            initial={reduce ? { opacity: 0 } : { y: "100%" }}
            animate={reduce ? { opacity: 1 } : { y: 0 }}
            exit={reduce ? { opacity: 0 } : { y: "100%", transition: { type: "spring", bounce: 0, duration: 0.32 } }}
            transition={springSheet}
            drag={reduce ? false : "y"}
            dragControls={drag}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0.04, bottom: 0.9 }}
            onDragEnd={(_, info) => {
              // A quick flick is enough; no need to drag all the way (momentum dismissal).
              if (info.offset.y > 140 || info.velocity.y > 550) onClose();
            }}
          >
            <div
              className="shrink-0 cursor-grab touch-none px-6 pb-4 pt-3 active:cursor-grabbing sm:px-10"
              onPointerDown={(e) => drag.start(e)}
            >
              <div className="mx-auto h-1.5 w-11 rounded-full bg-black/15" aria-hidden />
              <div className="mt-4 flex items-start justify-between gap-6">
                <div>
                  <p className="text-[14px] text-fg-muted">
                    {project.category} · <span className="text-fg">{project.role}</span>
                  </p>
                  <h2 id="sheet-title" className="type-title mt-1 text-[clamp(2rem,4vw,3rem)]">
                    {project.title}
                  </h2>
                </div>
                <button
                  ref={closeButton}
                  type="button"
                  onClick={onClose}
                  className="pressable grid size-10 shrink-0 place-items-center rounded-full bg-black/[0.06] hover:bg-black/10"
                  aria-label="Fermer"
                >
                  <XIcon size={18} weight="bold" />
                </button>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-16 sm:px-10" data-lenis-prevent>
              <p className="type-body max-w-[60ch] text-[19px]">{project.summary}</p>

              {/* Desktop and mobile side by side: the phone overlaps the browser's corner. */}
              <div
                className="relative mt-8 overflow-hidden rounded-[22px] px-4 pb-4 pt-4 sm:px-8 sm:pb-10 sm:pt-8"
                style={{ background: `color-mix(in oklab, ${project.accent} 12%, #f2f2f5)` }}
              >
                <ProjectVisual
                  project={project}
                  device="browser"
                  className="sm:w-[82%]"
                  sizes="(min-width: 1000px) 760px, (min-width: 640px) 78vw, 92vw"
                  eager
                />
                <ProjectVisual
                  project={project}
                  device="phone"
                  className="absolute bottom-[-12%] right-[5%] hidden w-[22%] sm:block"
                  sizes="220px"
                  eager
                />
              </div>

              <div className="mt-12 grid gap-10 md:grid-cols-2">
                <div>
                  <h3 className="type-heading text-[20px]">Le problème</h3>
                  <p className="type-body mt-3 text-[16px] text-fg-muted">{project.problem}</p>
                </div>
                <div>
                  <h3 className="type-heading text-[20px]">La solution</h3>
                  <p className="type-body mt-3 text-[16px] text-fg-muted">{project.solution}</p>
                </div>
              </div>

              <h3 className="type-heading mt-12 text-[20px]">Fonctionnalités</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-3 rounded-[14px] bg-paper-2 px-4 py-3.5 text-[15px]">
                    <CheckCircleIcon size={20} weight="fill" className="mt-px shrink-0" style={{ color: project.accent }} />
                    {f}
                  </li>
                ))}
              </ul>

              <h3 className="type-heading mt-12 text-[20px]">Technologies</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <li key={s} className="rounded-full bg-paper-2 px-4 py-2 text-[14px] font-medium">
                    {s}
                  </li>
                ))}
              </ul>

              <h3 className="type-heading mt-12 text-[20px]">En images</h3>
              <ul className="mt-4 grid gap-x-5 gap-y-8 md:grid-cols-2">
                {project.gallery.map((g) => (
                  <li key={g.src}>
                    <figure>
                      <div className="relative aspect-[16/10] overflow-hidden rounded-[16px] bg-paper-2 shadow-[0_0_0_1px_rgb(0_0_0/0.06)]">
                        <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 440px, 92vw" className="object-cover object-top" />
                      </div>
                      {g.caption && <figcaption className="mt-3 text-[14px] text-fg-muted">{g.caption}</figcaption>}
                    </figure>
                  </li>
                ))}
              </ul>

              <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-black/[0.06] pt-8">
                {project.links?.site && (
                  <a
                    href={project.links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pressable inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-[14px] font-medium text-white"
                  >
                    Voir le site <ArrowUpRightIcon size={15} weight="bold" />
                  </a>
                )}
                {project.links?.store && (
                  <a
                    href={project.links.store}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pressable inline-flex h-11 items-center gap-2 rounded-full bg-black/[0.06] px-5 text-[14px] font-medium hover:bg-black/10"
                  >
                    <PuzzlePieceIcon size={16} /> Chrome Web Store
                  </a>
                )}
                {project.note && <p className="text-[14px] text-fg-muted">{project.note}</p>}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
