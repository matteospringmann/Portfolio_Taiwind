export const locales = ["fr", "en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

/** French lives at the root, the other languages under their prefix. */
export const localePath = (locale: Locale) => (locale === defaultLocale ? "/" : `/${locale}`);

export const localeNames: Record<Locale, string> = { fr: "Français", en: "English", de: "Deutsch" };
export const ogLocales: Record<Locale, string> = { fr: "fr_FR", en: "en_US", de: "de_DE" };

/** A text written in every language, side by side. */
export type Localized<T = string> = Record<Locale, T>;

/** Replaces every `{ fr, en, de }` object by its value in one language. */
export type Resolved<T> = T extends Localized<infer V>
  ? V
  : T extends readonly (infer U)[]
    ? Resolved<U>[]
    : T extends object
      ? { [K in keyof T]: Resolved<T[K]> }
      : T;

const isLocalized = (value: object): value is Localized<unknown> => {
  const keys = Object.keys(value);
  return keys.length === locales.length && locales.every((l) => keys.includes(l));
};

export function localize<T>(value: T, locale: Locale): Resolved<T> {
  if (Array.isArray(value)) return value.map((v) => localize(v, locale)) as Resolved<T>;
  if (value && typeof value === "object") {
    if (isLocalized(value)) return value[locale] as Resolved<T>;
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, localize(v, locale)])) as Resolved<T>;
  }
  return value as Resolved<T>;
}
