"use client";

import { CheckCircleIcon } from "@phosphor-icons/react";
import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Tile } from "./Tile";

const code = `type Projet = {
  titre: string;
  stack: Techno[];
  enLigne: boolean;
};

const dressigo: Projet = {
  titre: "Dressigo",
  stack: ["React Native", "Supabase"],
  enLigne: true,
};`;

const keywords = /\b(type|const|string|boolean|false|true)\b/g;

function highlight(src: string) {
  // Tiny tokenizer: strings, keywords, types. Enough for a fixed snippet.
  return src.split(/("[^"\n]*"?)/g).map((part, i) =>
    part.startsWith('"') ? (
      <span key={i} className="text-[#c3e88d]">
        {part}
      </span>
    ) : (
      <span
        key={i}
        dangerouslySetInnerHTML={{
          __html: part
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(keywords, '<span style="color:#c792ea">$1</span>')
            .replace(/\b(Projet|Techno)\b/g, '<span style="color:#ffcb6b">$1</span>'),
        }}
      />
    ),
  );
}

export function TypeScriptTile({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const reduce = useReducedMotion();
  const [length, setLength] = useState(reduce ? code.length : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const id = setInterval(() => {
      setLength((l) => (l >= code.length + 40 ? 0 : l + 2));
    }, 32);
    return () => clearInterval(id);
  }, [inView, reduce]);

  const shown = code.slice(0, Math.min(length, code.length));
  const done = length >= code.length;

  return (
    <Tile title="TypeScript" caption="Des types précis, des bugs attrapés avant la mise en ligne." tone="dark" className={className}>
      <div ref={ref} className="relative flex-1 rounded-[18px] bg-[#0d1117] p-5 font-mono text-[12.5px] leading-[1.7] text-fg-inverse/85">
        <pre className="whitespace-pre-wrap">
          <code>
            {highlight(shown)}
            {!done && <span className="ml-px inline-block h-[1.1em] w-[7px] translate-y-[2px] bg-accent-bright" />}
          </code>
        </pre>
        <div
          className={`absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-[#13804b]/20 px-3 py-1 font-sans text-[12px] font-medium text-[#5fd39a] transition-opacity duration-300 ${
            done ? "opacity-100" : "opacity-0"
          }`}
        >
          <CheckCircleIcon size={14} weight="fill" /> 0 erreur
        </div>
      </div>
    </Tile>
  );
}
