"use client";

import { ArrowClockwiseIcon, CheckIcon, XIcon } from "@phosphor-icons/react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { spring } from "@/lib/motion";
import { useActive, type MockupProps } from "./shared";

const GREEN = "#16a37a";
const BASE_SCORE = 74;

const criteria = [
  { name: "Réponses directes", value: 21 },
  { name: "Structure des titres", value: 22 },
  { name: "Données structurées", value: 12 },
  { name: "Sources et auteurs", value: 19 },
];

const engines = [
  { name: "ChatGPT", query: "meilleure machine espresso débutant", cited: true },
  { name: "Perplexity", query: "réglage mouture espresso", cited: true },
  { name: "Gemini", query: "choisir sa machine à café", cited: false },
  { name: "Claude", query: "espresso trop amer pourquoi", cited: true },
];

const tips = [
  { text: "Ajouter un bloc FAQ en JSON-LD", gain: 6 },
  { text: "Répondre à la question dès le premier paragraphe", gain: 5 },
  { text: "Afficher l'auteur et la date de mise à jour", gain: 4 },
];

type Tab = "score" | "citations" | "conseils";

export function GeoMockup({ live = true }: MockupProps) {
  const root = useRef<HTMLDivElement>(null);
  const { active, autoplay } = useActive(root, live);
  const [tab, setTab] = useState<Tab>("score");
  const [done, setDone] = useState<boolean[]>([false, false, false]);
  const [runs, setRuns] = useState(0);

  const target = BASE_SCORE + tips.reduce((sum, t, i) => sum + (done[i] ? t.gain : 0), 0);
  const score = useMotionValue(live ? 0 : BASE_SCORE);
  const rounded = useTransform(score, (v) => Math.round(v));
  const ring = useTransform(score, (v) => v / 100);

  useEffect(() => {
    if (!active) return;
    if (!autoplay) {
      score.set(target);
      return;
    }
    if (runs > 0) score.set(0);
    const controls = animate(score, target, { duration: 1.4, ease: [0.23, 1, 0.32, 1] });
    return () => controls.stop();
  }, [active, autoplay, target, runs, score]);

  return (
    <div ref={root} className="relative h-full w-full overflow-hidden bg-white" inert={!live}>
      {/* Page being analysed */}
      <article className="h-full w-[520px] px-12 pt-10 text-fg">
        <p className="text-[12px] font-medium text-[#e2631f]">Atelier Moka, le journal</p>
        <h3 className="type-title mt-3 text-[30px]">Bien choisir sa première machine à espresso</h3>
        <p className="mt-3 text-[12px] text-fg-muted">Lecture 6 min</p>
        <p className="type-body mt-6 text-[14px] text-fg/80">
          Pression, température, mouture : trois réglages font la différence entre un espresso plat et une
          tasse ronde et sucrée. Voici comment choisir une machine adaptée à votre usage, sans payer pour des
          fonctions inutiles.
        </p>
        <h4 className="type-heading mt-6 text-[17px]">Pompe ou levier ?</h4>
        <p className="type-body mt-2 text-[14px] text-fg/80">
          Les machines à pompe délivrent une pression stable et conviennent à la plupart des cuisines. Le
          levier demande plus de pratique, mais offre un contrôle total sur l&apos;extraction.
        </p>
        <h4 className="type-heading mt-6 text-[17px]">Le moulin compte autant que la machine</h4>
        <p className="type-body mt-2 text-[14px] text-fg/80">
          Un café moulu à la minute garde ses arômes. Prévoyez un moulin à meules coniques pour régler
          finement la mouture.
        </p>
      </article>

      {/* Extension popup */}
      <div className="absolute right-5 top-4 w-[330px] overflow-hidden rounded-[16px] bg-white shadow-[0_24px_60px_-12px_rgb(10_30_20/0.35),0_0_0_1px_rgb(0_0_0/0.07)]">
        <div className="flex items-center gap-3 px-4 pb-3 pt-4">
          <div
            className="grid size-8 place-items-center rounded-[9px] text-[15px] font-bold text-white"
            style={{ background: GREEN }}
          >
            C
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[14px] font-semibold leading-tight">Citable</p>
            <p className="truncate text-[11px] text-fg-muted">atelier-moka.fr/journal/espresso</p>
          </div>
          <button
            type="button"
            onClick={() => setRuns((r) => r + 1)}
            className="pressable grid size-8 place-items-center rounded-full text-fg-muted hover:bg-black/5"
            aria-label="Relancer l'analyse"
          >
            <ArrowClockwiseIcon size={16} weight="bold" />
          </button>
        </div>

        <div className="mx-4 grid grid-cols-3 rounded-full bg-black/[0.05] p-1 text-[12px] font-medium">
          {(["score", "citations", "conseils"] as Tab[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className="relative h-7 rounded-full capitalize"
            >
              {tab === t && (
                <motion.span
                  layoutId="geo-tab"
                  transition={spring}
                  className="absolute inset-0 rounded-full bg-white shadow-sm"
                />
              )}
              <span className={`relative ${tab === t ? "text-fg" : "text-fg-muted"}`}>{t}</span>
            </button>
          ))}
        </div>

        <div className="h-[330px] px-4 pb-4 pt-4">
          {tab === "score" && (
            <div>
              <div className="flex items-center gap-5">
                <div className="relative size-[118px] shrink-0">
                  <svg viewBox="0 0 120 120" className="size-full -rotate-90">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#eef3f1" strokeWidth="10" />
                    <motion.circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke={GREEN}
                      strokeWidth="10"
                      strokeLinecap="round"
                      style={{ pathLength: ring }}
                    />
                  </svg>
                  <div className="absolute inset-0 grid place-items-center text-center">
                    <div>
                      <motion.span className="block text-[34px] font-semibold tracking-[-0.04em] tabular-nums">
                        {rounded}
                      </motion.span>
                      <span className="text-[11px] text-fg-muted">sur 100</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[15px] font-semibold">Bonne visibilité</p>
                  <p className="mt-1 text-[12px] leading-snug text-fg-muted">
                    Cette page a de bonnes chances d&apos;être reprise dans les réponses des IA.
                  </p>
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {criteria.map((c) => (
                  <li key={c.name} className="text-[12px]">
                    <div className="flex justify-between">
                      <span>{c.name}</span>
                      <span className="tabular-nums text-fg-muted">{c.value}/25</span>
                    </div>
                    <motion.div
                      className="mt-1.5 h-[3px] origin-left rounded-full"
                      style={{ background: GREEN, width: `${(c.value / 25) * 100}%` }}
                      initial={{ scaleX: live ? 0 : 1 }}
                      animate={{ scaleX: active || !live ? 1 : 0 }}
                      transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tab === "citations" && (
            <ul className="space-y-2.5">
              {engines.map((e) => (
                <li key={e.name} className="rounded-[12px] bg-black/[0.035] px-3 py-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-semibold">{e.name}</span>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${
                        e.cited ? "bg-[#e3f5ee] text-[#0e7a5a]" : "bg-black/[0.06] text-fg-muted"
                      }`}
                    >
                      {e.cited ? <CheckIcon size={11} weight="bold" /> : <XIcon size={11} weight="bold" />}
                      {e.cited ? "Citée" : "Non citée"}
                    </span>
                  </div>
                  <p className="mt-1 text-[11.5px] text-fg-muted">« {e.query} »</p>
                </li>
              ))}
            </ul>
          )}

          {tab === "conseils" && (
            <div>
              <p className="text-[12px] text-fg-muted">
                Cochez une action pour simuler son effet sur le score.
              </p>
              <ul className="mt-3 space-y-2">
                {tips.map((tip, i) => (
                  <li key={tip.text}>
                    <button
                      type="button"
                      onClick={() => setDone((d) => d.map((v, j) => (j === i ? !v : v)))}
                      className="pressable flex w-full items-start gap-3 rounded-[12px] bg-black/[0.035] px-3 py-3 text-left"
                      aria-pressed={done[i]}
                    >
                      <span
                        className="mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-[6px] border transition-colors duration-200"
                        style={{
                          background: done[i] ? GREEN : "white",
                          borderColor: done[i] ? GREEN : "rgb(0 0 0 / 0.2)",
                        }}
                      >
                        {done[i] && <CheckIcon size={12} weight="bold" color="white" />}
                      </span>
                      <span className="flex-1 text-[12.5px] leading-snug">{tip.text}</span>
                      <span className="text-[11px] font-semibold tabular-nums" style={{ color: GREEN }}>
                        +{tip.gain}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[12px]">
                Score estimé :{" "}
                <motion.span className="font-semibold tabular-nums">{rounded}</motion.span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
