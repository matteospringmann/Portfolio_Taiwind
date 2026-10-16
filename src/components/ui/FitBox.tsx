"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

/**
 * Renders children at a fixed design size (width x height) and scales them to the
 * available width, so a mockup keeps its exact proportions from phone to desktop.
 */
export function FitBox({
  width,
  height,
  children,
  className = "",
}: {
  width: number;
  height: number;
  children: ReactNode;
  className?: string;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = outer.current;
    const content = inner.current;
    if (!el || !content) return;
    const apply = () => {
      const scale = el.clientWidth / width;
      content.style.transform = `scale(${scale})`;
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div
      ref={outer}
      className={`relative w-full ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div
        ref={inner}
        className="absolute left-0 top-0 origin-top-left"
        style={{ width, height, transform: "scale(0.0001)" }}
      >
        {children}
      </div>
    </div>
  );
}
