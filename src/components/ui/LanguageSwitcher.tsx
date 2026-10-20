import { localeNames, localePath, locales, type Locale } from "@/i18n/config";

/**
 * FR / EN / DE links. Plain anchors: switching language reloads the page in the new language,
 * and `hash` keeps the visitor on the section they were reading.
 */
export function LanguageSwitcher({
  locale,
  label,
  hash,
  className = "",
  itemClassName = "",
  activeClassName = "",
}: {
  locale: Locale;
  label: string;
  hash?: string;
  className?: string;
  itemClassName?: string;
  activeClassName?: string;
}) {
  return (
    <nav aria-label={label} className={className}>
      <ul className="flex items-center gap-0.5">
        {locales.map((l) => (
          <li key={l}>
            <a
              href={`${localePath(l)}${hash ? `#${hash}` : ""}`}
              hrefLang={l}
              lang={l}
              aria-current={l === locale ? "true" : undefined}
              title={localeNames[l]}
              className={`${itemClassName} ${l === locale ? activeClassName : ""}`}
            >
              {l.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
