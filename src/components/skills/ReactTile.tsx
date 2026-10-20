"use client";

import { HeartIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { Tile } from "./Tile";

export function ReactTile({ className }: { className?: string }) {
  const { t } = useI18n();
  const r = t.skills.react;
  const [likes, setLikes] = useState(12);
  const [liked, setLiked] = useState(false);
  const [renders, setRenders] = useState(1);
  const [heart, animateHeart] = useAnimate();

  const toggle = () => {
    setLiked((l) => !l);
    setLikes((n) => (liked ? n - 1 : n + 1));
    setRenders((r) => r + 1);
    if (!liked) animateHeart(heart.current, { scale: [1, 1.3, 1] }, { duration: 0.4, ease: [0.23, 1, 0.32, 1] });
  };

  return (
    <Tile
      title="React"
      caption={r.caption}
      className={className}
    >
      <div className="absolute -right-24 -top-28 size-80 rounded-full bg-[radial-gradient(closest-side,rgb(97_218_251/0.35),transparent)]" aria-hidden />
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-1 flex-col items-center justify-center rounded-[18px] bg-paper-2 p-6">
          <div className="w-full max-w-[220px] rounded-[18px] bg-white p-4 shadow-[0_12px_30px_-14px_rgb(0_0_0/0.25)]">
            <div className="h-24 rounded-[12px] bg-[linear-gradient(135deg,#61dafb,#2557f2)]" />
            <p className="mt-3 text-[14px] font-semibold">{r.card}</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[13px] tabular-nums text-fg-muted">{likes} {r.likes}</span>
              <button
                type="button"
                onClick={toggle}
                aria-pressed={liked}
                aria-label={liked ? r.unlike : r.like}
                className="pressable grid size-10 place-items-center rounded-full bg-paper-2"
              >
                <span ref={heart} className="grid place-items-center">
                  <HeartIcon size={20} weight={liked ? "fill" : "regular"} color={liked ? "#e2386f" : undefined} />
                </span>
              </button>
            </div>
          </div>
          <p className="mt-4 font-mono text-[11.5px] text-fg-muted">{r.renders} {renders}</p>
        </div>

        <pre className="overflow-x-auto rounded-[18px] bg-ink-2 p-5 font-mono text-[12.5px] leading-[1.75] text-fg-inverse/85">
          <code>
            <span className="text-[#c792ea]">function</span> <span className="text-[#82aaff]">{r.code.component}</span>() {"{"}
            {"\n  "}
            <span className="text-[#c792ea]">const</span> [likes, setLikes] ={"\n    "}
            <span className="text-[#82aaff]">useState</span>(
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={likes}
                initial={{ opacity: 0, y: 8, color: "#ffcb6b" }}
                animate={{ opacity: 1, y: 0, color: "#f78c6c" }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="inline-block"
              >
                {likes}
              </motion.span>
            </AnimatePresence>
            );
            {"\n  "}
            <span className="text-[#c792ea]">const</span> [{r.code.state}, {r.code.setter}] ={"\n    "}
            <span className="text-[#82aaff]">useState</span>(
            <span className="text-[#f78c6c]">{String(liked)}</span>);
            {"\n\n  "}
            <span className="text-[#c792ea]">return</span> {"<"}
            <span className="text-[#f07178]">{r.code.button}</span>{"\n    "}onClick={"{"}{r.code.handler}{"}"} /{">"};{"\n"}
            {"}"}
          </code>
        </pre>
      </div>
    </Tile>
  );
}
