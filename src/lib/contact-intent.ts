"use client";

import { useSyncExternalStore } from "react";
import type { ProjectType } from "@/content/services";

// Tiny shared store: a "Demander un devis" button preselects the project type in the contact form.
let current: ProjectType = "site";
const listeners = new Set<() => void>();

export function setProjectType(type: ProjectType) {
  current = type;
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useProjectType() {
  return useSyncExternalStore(
    subscribe,
    () => current,
    () => "site" as ProjectType,
  );
}
