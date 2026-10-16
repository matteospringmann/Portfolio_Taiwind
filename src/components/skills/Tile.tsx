import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

export function Tile({
  title,
  caption,
  className = "",
  tone = "light",
  children,
  delay = 0,
}: {
  title: string;
  caption: string;
  className?: string;
  tone?: "light" | "dark";
  children: ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className={`min-w-0 ${className}`}>
      <div
        className={`relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-[28px] p-6 sm:p-7 ${
          tone === "dark" ? "bg-ink-2 text-fg-inverse" : "bg-white text-fg"
        }`}
      >
        <div className="relative z-[1]">
          <h3 className="type-heading text-[21px]">{title}</h3>
          <p className={`mt-1 text-[14.5px] ${tone === "dark" ? "text-fg-inverse-muted" : "text-fg-muted"}`}>{caption}</p>
        </div>
        <div className="relative mt-5 flex min-h-0 flex-1 flex-col">{children}</div>
      </div>
    </Reveal>
  );
}
