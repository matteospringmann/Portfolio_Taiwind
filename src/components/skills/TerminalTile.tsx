"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { spring } from "@/lib/motion";
import { useI18n } from "@/i18n/I18nProvider";
import { Tile } from "./Tile";

const langs = ["Node.js", "Python"] as const;
type Lang = (typeof langs)[number];

export function TerminalTile({ className }: { className?: string }) {
  const { t } = useI18n();
  const [lang, setLang] = useState<Lang>("Node.js");
  const s = lang === "Node.js" ? t.skills.terminal.node : t.skills.terminal.python;
  return (
    <Tile title={t.skills.terminal.title} caption={t.skills.terminal.caption} tone="dark" className={className}>
      <div className="flex flex-1 flex-col overflow-hidden rounded-[18px] bg-[#0d1117]">
        <div className="flex items-center gap-1 border-b border-white/[0.06] px-3 py-2">
          {langs.map((l) => (
            <button key={l} type="button" onClick={() => setLang(l)} className="relative rounded-full px-3 py-1 text-[12px] font-medium">
              {lang === l && (
                <motion.span layoutId="terminal-tab" transition={spring} className="absolute inset-0 rounded-full bg-white/10" />
              )}
              <span className={`relative ${lang === l ? "text-fg-inverse" : "text-fg-inverse-muted"}`}>{l}</span>
            </button>
          ))}
        </div>
        <div className="flex-1 p-4 font-mono text-[12px] leading-[1.75]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
              <p className="text-fg-inverse">
                <span className="text-accent-bright">$</span> {s.command}
              </p>
              {s.output.map((line, i) => (
                <motion.p
                  key={line}
                  className="whitespace-pre text-fg-inverse/70"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: 0.25 + i * 0.12 }}
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Tile>
  );
}
