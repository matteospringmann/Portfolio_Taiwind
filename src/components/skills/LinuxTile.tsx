"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { spring } from "@/lib/motion";
import { Tile } from "./Tile";

// A tiling window manager reorganising itself: three layouts, one grid.
const layouts = [
  ["1 / 1 / 3 / 2", "1 / 2 / 2 / 3", "2 / 2 / 3 / 3"],
  ["1 / 1 / 2 / 3", "2 / 1 / 3 / 2", "2 / 2 / 3 / 3"],
  ["1 / 1 / 2 / 2", "2 / 1 / 3 / 2", "1 / 2 / 3 / 3"],
];
const windows = [
  { label: "terminal", tone: "bg-ink-3 text-fg-inverse" },
  { label: "éditeur", tone: "bg-[#294172] text-white" },
  { label: "navigateur", tone: "bg-white text-fg" },
];

export function LinuxTile({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.6 });
  const reduce = useReducedMotion();
  const [layout, setLayout] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const id = setInterval(() => setLayout((l) => (l + 1) % layouts.length), 2200);
    return () => clearInterval(id);
  }, [inView, reduce]);

  return (
    <Tile title="Linux (Fedora)" caption="Mon environnement de travail au quotidien." className={className}>
      <div ref={ref} className="grid flex-1 grid-cols-2 grid-rows-2 gap-1.5 rounded-[18px] bg-[#dfe4ee] p-1.5">
        {windows.map((w, i) => (
          <motion.div
            key={w.label}
            layout
            transition={spring}
            className={`flex items-start rounded-[10px] p-2 font-mono text-[10.5px] ${w.tone}`}
            style={{ gridArea: layouts[layout][i] }}
          >
            {w.label}
          </motion.div>
        ))}
      </div>
    </Tile>
  );
}
