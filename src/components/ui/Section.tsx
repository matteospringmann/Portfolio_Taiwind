import type { ReactNode } from "react";
import type { SectionId } from "@/content/site";

const surfaces = {
  ink: "bg-ink text-fg-inverse",
  "ink-2": "bg-ink-2 text-fg-inverse",
  paper: "bg-paper text-fg",
  "paper-2": "bg-paper-2 text-fg",
  white: "bg-white text-fg",
} as const;

type Surface = keyof typeof surfaces;

export function Section({
  id,
  surface,
  className = "",
  children,
  label,
}: {
  id: SectionId;
  surface: Surface;
  className?: string;
  children: ReactNode;
  label?: string;
}) {
  const theme = surface.startsWith("ink") ? "dark" : "light";
  return (
    <section
      id={id}
      data-theme={theme}
      aria-label={label}
      className={`relative ${surfaces[surface]} ${className}`}
    >
      {children}
    </section>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 ${className}`}>{children}</div>;
}
