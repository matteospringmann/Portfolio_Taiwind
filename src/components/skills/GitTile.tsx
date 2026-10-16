"use client";

import { motion, useReducedMotion } from "motion/react";
import { Tile } from "./Tile";

const MAIN = "#2557f2";
const FEATURE = "#e2631f";

const commits = [
  { x: 30, y: 70, color: MAIN, label: "init", above: true },
  { x: 110, y: 70, color: MAIN, label: "accueil", above: false },
  { x: 175, y: 30, color: FEATURE, label: "feat: panier", above: true },
  { x: 295, y: 30, color: FEATURE, label: "fix: mouture", above: true },
  { x: 235, y: 70, color: MAIN, label: "hotfix", above: false },
  { x: 360, y: 70, color: MAIN, label: "merge", above: false },
  { x: 430, y: 70, color: MAIN, label: "v1.0", above: false },
];

export function GitTile({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const draw = (delay: number) => ({
    initial: { pathLength: reduce ? 1 : 0 },
    whileInView: { pathLength: 1 },
    viewport: { once: true, amount: 0.6 },
    transition: { duration: 1.1, delay, ease: [0.77, 0, 0.175, 1] as const },
  });

  return (
    <Tile title="Git et GitHub" caption="Des branches propres, un historique lisible." className={className}>
      <div className="flex flex-1 items-center rounded-[18px] bg-paper-2 px-2">
        <svg viewBox="0 0 460 110" className="w-full" role="img" aria-label="Graphe de commits avec une branche fusionnée">
          <motion.path d="M30 70 H430" stroke={MAIN} strokeWidth="3" fill="none" strokeLinecap="round" {...draw(0)} />
          <motion.path
            d="M110 70 C140 70 145 30 175 30 H295 C325 30 330 70 360 70"
            stroke={FEATURE}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            {...draw(0.5)}
          />
          {commits.map((c, i) => (
            <motion.g
              key={c.label}
              initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.35, delay: 0.3 + i * 0.16 }}
              style={{ transformOrigin: `${c.x}px ${c.y}px` }}
            >
              <circle cx={c.x} cy={c.y} r="7" fill="white" stroke={c.color} strokeWidth="3" />
              <text
                x={c.x}
                y={c.above ? c.y - 15 : c.y + 26}
                textAnchor="middle"
                className="fill-fg-muted font-mono text-[10.5px]"
              >
                {c.label}
              </text>
            </motion.g>
          ))}
        </svg>
      </div>
    </Tile>
  );
}
