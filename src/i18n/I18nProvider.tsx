"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Dictionary } from "./dictionary";

const I18nContext = createContext<Dictionary | null>(null);

export function I18nProvider({ dictionary, children }: { dictionary: Dictionary; children: ReactNode }) {
  return <I18nContext.Provider value={dictionary}>{children}</I18nContext.Provider>;
}

/** The current language, its interface texts (`t`) and the localized content. */
export function useI18n() {
  const dictionary = useContext(I18nContext);
  if (!dictionary) throw new Error("useI18n must be used inside <I18nProvider>");
  return dictionary;
}
