import type { Transition } from "motion/react";

// Critically damped default: no overshoot (apple-design §4, damping 1.0 / response 0.4).
export const spring: Transition = { type: "spring", bounce: 0, duration: 0.4 };

// Only after a gesture that carried momentum (flick, drag release).
export const springMomentum: Transition = { type: "spring", bounce: 0.2, duration: 0.45 };

// Drawer / sheet (apple-design: damping 0.8, response 0.3).
export const springSheet: Transition = { type: "spring", bounce: 0.12, duration: 0.42 };

export const easeOut = [0.23, 1, 0.32, 1] as const;
export const easeInOut = [0.77, 0, 0.175, 1] as const;

export const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: easeOut },
} as const;
