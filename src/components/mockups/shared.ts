"use client";

import { useInView, useReducedMotion } from "motion/react";
import type { RefObject } from "react";

export type MockupProps = {
  /** false: static thumbnail (hero), no timers and no interaction. */
  live?: boolean;
};

// Timers and autoplay only run while the mockup is visible and motion is allowed.
export function useActive(ref: RefObject<HTMLElement | null>, live: boolean) {
  const inView = useInView(ref, { amount: 0.35 });
  const reduce = useReducedMotion();
  return { active: live && inView, autoplay: live && inView && !reduce };
}
