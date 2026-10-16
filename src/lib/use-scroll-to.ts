"use client";

import { useLenis } from "lenis/react";
import { useCallback } from "react";

export function useScrollTo() {
  const lenis = useLenis();
  return useCallback(
    (id: string) => {
      const target = document.getElementById(id);
      if (!target) return;
      if (lenis) {
        lenis.scrollTo(target, { offset: 0, duration: 1.2 });
      } else {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        target.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      }
      history.replaceState(null, "", `#${id}`);
    },
    [lenis],
  );
}
