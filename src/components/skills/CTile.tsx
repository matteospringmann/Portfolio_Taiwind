"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { spring } from "@/lib/motion";
import { Tile } from "./Tile";

const cells = ["E", "p", "i", "t", "e", "c", "h", "\\0"];

export function CTile({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.6 });
  const reduce = useReducedMotion();
  const [p, setP] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const id = setInterval(() => setP((v) => (v + 1) % cells.length), 750);
    return () => clearInterval(id);
  }, [inView, reduce]);

  return (
    <Tile title="Langage C" caption="Mémoire, pointeurs, rigueur : l'école Epitech." className={className}>
      <div ref={ref} className="flex flex-1 flex-col justify-center gap-7 rounded-[18px] bg-paper-2 p-4">
        <p className="whitespace-nowrap font-mono text-[11.5px] text-fg-muted">
          while (*p) p++; <span className="text-fg">{`/* len = ${p} */`}</span>
        </p>
        <div className="relative grid grid-cols-8">
          {cells.map((c, i) => (
            <div key={i} className="px-0.5 text-center">
              <div
                className={`grid h-9 place-items-center rounded-[8px] font-mono text-[13px] transition-colors duration-200 ${
                  i === p ? "bg-accent text-white" : "bg-white text-fg"
                }`}
              >
                {c}
              </div>
              <span className="mt-1 block font-mono text-[8.5px] text-fg-muted">{(0x10 + i).toString(16)}</span>
            </div>
          ))}
          <motion.div
            aria-hidden
            className="absolute -top-5 left-0 w-[12.5%] text-center font-mono text-[11px] font-semibold text-accent"
            animate={{ x: `${p * 100}%` }}
            transition={spring}
          >
            p
          </motion.div>
        </div>
      </div>
    </Tile>
  );
}
