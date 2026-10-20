"use client";

import { motion } from "motion/react";
import { useI18n } from "@/i18n/I18nProvider";
import { Tile } from "./Tile";

const tones = ["text-fg-inverse", "text-[#5fd39a]", "text-fg-inverse-muted", "text-[#5fd39a]"];

export function NextTile({ className }: { className?: string }) {
  const { t } = useI18n();
  return (
    <Tile title="Next.js" caption={t.skills.next.caption} tone="dark" className={className}>
      <div className="flex flex-1 flex-col justify-end rounded-[18px] bg-black p-4 font-mono text-[12px] leading-[1.9]">
        {["▲ Next.js 16", ...t.skills.next.lines].map((line, i) => (
          <motion.p
            key={i}
            className={tones[i]}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.35 }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </Tile>
  );
}
