"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { Tile } from "./Tile";

// Real Tailwind classes, applied as-is: the preview is the class string.
const styles = [
  "rounded-full bg-accent px-5 py-2.5 text-white shadow-lg shadow-accent/30",
  "rounded-md border-2 border-fg bg-white px-5 py-2.5 text-fg shadow-[4px_4px_0_#1d1d1f]",
  "rounded-2xl bg-gradient-to-br from-[#16a37a] to-[#0e7a5a] px-5 py-2.5 text-white",
];

export function TailwindTile({ className }: { className?: string }) {
  const { t } = useI18n();
  const [i, setI] = useState(0);
  return (
    <Tile title="Tailwind CSS" caption={t.skills.tailwind.caption} className={className}>
      <div className="flex flex-1 flex-col justify-between gap-4 rounded-[18px] bg-[#eef6ff] p-4">
        <div className="grid flex-1 place-items-center py-2">
          <button
            type="button"
            onClick={() => setI((n) => (n + 1) % styles.length)}
            className={`pressable text-[14px] font-semibold transition-[background-color,box-shadow,border-radius,color] duration-300 ${styles[i]}`}
          >
            {t.skills.tailwind.button}
          </button>
        </div>
        <code className="block min-h-[3.4em] font-mono text-[11px] leading-[1.6] text-[#0b5cad]">{styles[i]}</code>
      </div>
    </Tile>
  );
}
