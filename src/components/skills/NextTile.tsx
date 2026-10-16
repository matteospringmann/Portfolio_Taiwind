"use client";

import { motion } from "motion/react";
import { Tile } from "./Tile";

const lines = [
  { text: "▲ Next.js 16", tone: "text-fg-inverse" },
  { text: "✓ Compilé", tone: "text-[#5fd39a]" },
  { text: "○ /  page statique", tone: "text-fg-inverse-muted" },
  { text: "✓ Prêt pour Vercel", tone: "text-[#5fd39a]" },
];

export function NextTile({ className }: { className?: string }) {
  return (
    <Tile title="Next.js" caption="Le framework de ce site, justement." tone="dark" className={className}>
      <div className="flex flex-1 flex-col justify-end rounded-[18px] bg-black p-4 font-mono text-[12px] leading-[1.9]">
        {lines.map((l, i) => (
          <motion.p
            key={l.text}
            className={l.tone}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.35 }}
          >
            {l.text}
          </motion.p>
        ))}
      </div>
    </Tile>
  );
}
