"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { ProjectVisual } from "@/components/mockups/ProjectVisual";
import { Container, Section } from "@/components/ui/Section";
import { easeOut } from "@/lib/motion";
import { useScrollTo } from "@/lib/use-scroll-to";

const headline = ["Des", "interfaces", "qui", "se", "ressentent."];
const bySlug = (slug: string) => projects.find((p) => p.slug === slug)!;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const scrollTo = useScrollTo();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Copy steps back while the devices rise and flatten (storytelling: from promise to proof).
  const copyOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.4], [0, -80]);
  const copyScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.94]);
  const stageY = useTransform(scrollYProgress, [0, 0.75], ["48%", "4%"]);
  const stageRotate = useTransform(scrollYProgress, [0, 0.75], [26, 0]);
  const stageScale = useTransform(scrollYProgress, [0, 0.75], [0.86, 1]);
  const sideLeftX = useTransform(scrollYProgress, [0, 0.75], [90, 0]);
  const sideRightX = useTransform(scrollYProgress, [0, 0.75], [-90, 0]);
  const glow = useTransform(scrollYProgress, [0, 0.75], [0.35, 0.8]);

  return (
    <Section id="accueil" surface="ink" label="Accueil" className={reduce ? "" : "h-[230vh]"}>
      <div ref={ref} className="absolute inset-0" aria-hidden />
      <div className={`${reduce ? "relative pb-16" : "sticky top-0 h-[100dvh]"} overflow-hidden`}>
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-[-30%] mx-auto h-[80%] max-w-[1100px] rounded-full bg-[radial-gradient(closest-side,rgb(37_87_242/0.45),transparent)] blur-2xl"
          style={{ opacity: reduce ? 0.6 : glow }}
        />

        <motion.div
          style={reduce ? undefined : { opacity: copyOpacity, y: copyY, scale: copyScale }}
          className="relative origin-top pt-[clamp(6.5rem,14vh,8.5rem)] text-center"
        >
          <Container>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-[15px] font-medium text-fg-inverse-muted md:text-[17px]"
            >
              {site.name}
            </motion.p>
            <h1 className="type-display mx-auto mt-3 max-w-[17ch] text-[clamp(3rem,7.4vw,6.4rem)]">
              {headline.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: reduce ? 0 : "0.35em", filter: reduce ? "none" : "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.9, ease: easeOut, delay: 0.1 + i * 0.07 }}
                >
                  {word}
                  {i < headline.length - 1 && " "}
                </motion.span>
              ))}
            </h1>
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.5 }}
              className="mt-6 flex flex-col items-center gap-8"
            >
              <p className="type-body max-w-[46ch] text-[17px] text-fg-inverse-muted md:text-[20px]">
                Développeur front-end formé à Epitech. Je conçois des sites et des outils web rapides, précis et
                agréables à utiliser.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="#projets"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("projets");
                  }}
                  className="pressable inline-flex h-12 items-center rounded-full bg-fg-inverse px-6 text-[15px] font-medium text-fg"
                >
                  Voir les projets
                </a>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("services");
                  }}
                  className="pressable inline-flex h-12 items-center rounded-full bg-white/10 px-6 text-[15px] font-medium text-fg-inverse hover:bg-white/[0.16]"
                >
                  Mes services
                </a>
              </div>
            </motion.div>
          </Container>
        </motion.div>

        {/* Device stage: rises, flattens and spreads as you scroll */}
        <div
          className={`${reduce ? "relative mt-14" : "absolute inset-x-0 bottom-0 h-[44vh] md:h-[62vh]"} [perspective:1600px]`}
          aria-hidden
        >
          <motion.div
            className="relative mx-auto w-[min(1180px,94vw)] origin-bottom"
            style={reduce ? undefined : { y: stageY, rotateX: stageRotate, scale: stageScale }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
          >
            <div className="relative z-[1] mx-auto w-[86%] md:w-[62%]">
              <ProjectVisual project={bySlug("palmares")} live={false} />
            </div>
            <motion.div
              className="absolute left-0 top-[14%] hidden w-[34%] md:block"
              style={reduce ? undefined : { x: sideLeftX }}
            >
              <div className="-rotate-[4deg] opacity-90">
                <ProjectVisual project={bySlug("citable")} live={false} />
              </div>
            </motion.div>
            <motion.div
              className="absolute right-[2%] top-[6%] z-[2] w-[30%] md:right-[4%] md:w-[17%]"
              style={reduce ? undefined : { x: sideRightX }}
            >
              <div className="rotate-[3deg]">
                <ProjectVisual project={bySlug("pli")} live={false} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
