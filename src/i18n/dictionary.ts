import { experiences, school, schoolFacts, schoolYears } from "@/content/journey";
import { projects } from "@/content/projects";
import { process, projectTypes, services } from "@/content/services";
import { profile } from "@/content/site";
import { localize, type Locale } from "./config";
import { de } from "./messages/de";
import { en } from "./messages/en";
import { fr } from "./messages/fr";

const messages = { fr, en, de };

// French typography: a non-breaking space before « : ; ? ! » and inside « ».
const frenchSpacing = (s: string) => s.replace(/ ([:;?!»])/g, " $1").replace(/« /g, "« ");

function mapStrings<T>(value: T, fn: (s: string) => string): T {
  if (typeof value === "string") return fn(value) as T;
  if (Array.isArray(value)) return value.map((v) => mapStrings(v, fn)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, mapStrings(v, fn)])) as T;
  }
  return value;
}

/** Everything a page needs in one language: interface texts (`t`) and content. */
export function getDictionary(locale: Locale) {
  const content = localize({ projects, services, process, profile, school, schoolFacts, schoolYears, experiences }, locale);
  const dictionary = {
    locale,
    t: messages[locale],
    content: {
      ...content,
      // The label goes to the visitor, `emailLabel` to the email I receive (always in French).
      projectTypes: projectTypes.map((p) => ({ value: p.value, label: p.label[locale], emailLabel: p.label.fr })),
    },
  };
  return locale === "fr" ? mapStrings(dictionary, frenchSpacing) : dictionary;
}

export type Dictionary = ReturnType<typeof getDictionary>;
