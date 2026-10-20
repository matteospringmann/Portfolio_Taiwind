"use client";

import { CheckIcon, CircleNotchIcon } from "@phosphor-icons/react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { Tile } from "./Tile";

export function DevOpsTile({ className }: { className?: string }) {
  const { t } = useI18n();
  const steps = t.skills.devops.steps;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.6 });
  const reduce = useReducedMotion();
  // step === steps.length: pipeline green, then it starts over.
  const [step, setStep] = useState(reduce ? steps.length : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const id = setInterval(() => setStep((s) => (s >= steps.length + 2 ? 0 : s + 1)), 900);
    return () => clearInterval(id);
  }, [inView, reduce, steps.length]);

  const progress = Math.min(step, steps.length) / steps.length;

  return (
    <Tile title="DevOps" caption={t.skills.devops.caption} tone="dark" className={className}>
      <div ref={ref} className="flex flex-1 flex-col justify-center rounded-[18px] bg-ink-3 px-5 py-6">
        <div className="relative">
          <div className="absolute left-4 right-4 top-4 h-0.5 bg-white/10" aria-hidden />
          <motion.div
            aria-hidden
            className="absolute left-4 right-4 top-4 h-0.5 origin-left bg-[#5fd39a]"
            animate={{ scaleX: progress }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          />
          <ol className="relative grid grid-cols-4">
            {steps.map((s, i) => {
              const done = step > i;
              const running = step === i;
              return (
                <li key={s} className="flex flex-col items-center gap-2 text-center">
                  <span
                    className={`grid size-8 place-items-center rounded-full transition-colors duration-300 ${
                      done ? "bg-[#5fd39a] text-ink" : running ? "bg-white/15 text-fg-inverse" : "bg-ink-2 text-fg-inverse-muted"
                    }`}
                  >
                    {done ? (
                      <CheckIcon size={14} weight="bold" />
                    ) : running ? (
                      <CircleNotchIcon size={14} weight="bold" className="animate-spin" />
                    ) : (
                      <span className="size-1.5 rounded-full bg-current" />
                    )}
                  </span>
                  <span className="text-[12px] text-fg-inverse/80">{s}</span>
                </li>
              );
            })}
          </ol>
        </div>
        <p className="mt-6 text-center font-mono text-[12px] text-fg-inverse-muted">
          {step >= steps.length ? t.skills.devops.live : `${steps[step]} ${t.skills.devops.running}`}
        </p>
      </div>
    </Tile>
  );
}
