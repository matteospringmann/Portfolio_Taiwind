"use client";

import {
  ArrowRightIcon,
  CopyIcon,
  FileArrowDownIcon,
  GithubLogoIcon,
  GlobeHemisphereWestIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react";
import { useLenis } from "lenis/react";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { navSections, site } from "@/content/site";
import { localeNames, localePath, locales } from "@/i18n/config";
import { useI18n } from "@/i18n/I18nProvider";
import { layers } from "@/lib/layers";
import { useScrollTo } from "@/lib/use-scroll-to";

type Item = { id: string; label: string; group: string; icon: ReactNode; run: () => void | Promise<void> };

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

// Opened from the keyboard many times a session: no open/close animation on purpose.
export function CommandMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t, locale } = useI18n();
  const scrollTo = useScrollTo();
  const lenis = useLenis();
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const restore = useRef<HTMLElement | null>(null);

  const items = useMemo<Item[]>(
    () => [
      ...[
        { id: "accueil", label: t.nav.home },
        ...navSections.map((id) => ({ id, label: t.nav.links[id] })),
        { id: "contact", label: t.nav.contact },
      ].map((l) => ({
        id: l.id,
        label: l.label,
        group: t.command.goTo,
        icon: <ArrowRightIcon size={16} />,
        run: () => scrollTo(l.id),
      })),
      {
        id: "cv",
        label: t.command.cv,
        group: t.command.actions,
        icon: <FileArrowDownIcon size={16} />,
        run: () => {
          const a = document.createElement("a");
          a.href = site.cv;
          a.download = site.cvFileName;
          a.click();
        },
      },
      {
        id: "email",
        label: t.command.copyEmail,
        group: t.command.actions,
        icon: <CopyIcon size={16} />,
        run: async () => {
          await navigator.clipboard.writeText(site.email);
          setCopied(true);
        },
      },
      {
        id: "github",
        label: t.command.github,
        group: t.command.actions,
        icon: <GithubLogoIcon size={16} />,
        run: () => {
          window.open(site.github, "_blank", "noopener,noreferrer");
        },
      },
      ...locales
        .filter((l) => l !== locale)
        .map((l) => ({
          id: `lang-${l}`,
          label: localeNames[l],
          group: t.command.language,
          icon: <GlobeHemisphereWestIcon size={16} />,
          run: () => {
            // Full page load on purpose, like the FR / EN / DE links: <html lang> and every text change at once.
            window.location.assign(new URL(`${localePath(l)}${window.location.hash}`, window.location.origin));
          },
        })),
    ],
    [scrollTo, t, locale],
  );

  const results = items.filter((i) => normalize(i.label).includes(normalize(query.trim())));

  useEffect(() => {
    if (!open) return;
    restore.current = document.activeElement as HTMLElement | null;
    lenis?.stop();
    input.current?.focus();
    return () => {
      lenis?.start();
      restore.current?.focus();
      setQuery("");
      setIndex(0);
      setCopied(false);
    };
  }, [open, lenis]);

  if (!open) return null;

  const execute = async (item: Item) => {
    await item.run();
    if (item.id !== "email") onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-start justify-center bg-black/40 px-4 pt-[14vh]"
      style={{ zIndex: layers.command }}
      onPointerDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.command.label}
        className="w-full max-w-[520px] overflow-hidden rounded-[20px] bg-white text-fg shadow-[0_40px_100px_-20px_rgb(0_0_0/0.5),0_0_0_1px_rgb(0_0_0/0.06)]"
        onKeyDown={(e) => {
          if (e.key === "Escape") onClose();
          if (e.key === "Tab") e.preventDefault(); // focus stays in the input, arrows drive the list
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setIndex((i) => Math.min(results.length - 1, i + 1));
          }
          if (e.key === "ArrowUp") {
            e.preventDefault();
            setIndex((i) => Math.max(0, i - 1));
          }
          if (e.key === "Enter" && results[index]) {
            e.preventDefault();
            execute(results[index]);
          }
        }}
      >
        <div className="flex items-center gap-3 border-b border-black/[0.06] px-5">
          <MagnifyingGlassIcon size={18} className="text-fg-muted" />
          <input
            ref={input}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIndex(0);
            }}
            placeholder={t.command.placeholder}
            aria-label={t.command.search}
            aria-controls="command-results"
            aria-activedescendant={results[index] ? `cmd-${results[index].id}` : undefined}
            className="h-14 flex-1 bg-transparent text-[16px] outline-none placeholder:text-fg-muted"
          />
          <kbd className="rounded-md bg-black/[0.05] px-1.5 py-0.5 font-mono text-[11px] text-fg-muted">{t.command.escape}</kbd>
        </div>
        <ul id="command-results" role="listbox" className="max-h-[340px] overflow-y-auto p-2" data-lenis-prevent>
          {results.length === 0 && <li className="px-3 py-6 text-center text-[14px] text-fg-muted">{t.command.empty}</li>}
          {results.map((item, i) => (
            <li key={item.id}>
              {(i === 0 || results[i - 1].group !== item.group) && (
                <p className="px-3 pb-1 pt-3 text-[11.5px] font-medium text-fg-muted">{item.group}</p>
              )}
              <button
                id={`cmd-${item.id}`}
                role="option"
                aria-selected={i === index}
                type="button"
                onMouseMove={() => setIndex(i)}
                onClick={() => execute(item)}
                className={`flex h-11 w-full items-center gap-3 rounded-[12px] px-3 text-left text-[14.5px] ${
                  i === index ? "bg-accent text-white" : "text-fg"
                }`}
              >
                <span className={i === index ? "text-white" : "text-fg-muted"}>{item.icon}</span>
                <span className="flex-1">{item.id === "email" && copied ? t.command.copied : item.label}</span>
                {item.id === "email" && copied && <span className="text-[12px] opacity-80">{site.email}</span>}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
