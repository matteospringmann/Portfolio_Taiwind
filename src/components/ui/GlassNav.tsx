"use client";

import { CommandIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import { useLenis } from "lenis/react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { navLinks, site, type SectionId } from "@/content/site";
import { layers } from "@/lib/layers";
import { easeOut } from "@/lib/motion";
import { useScrollTo } from "@/lib/use-scroll-to";
import { CommandMenu } from "./CommandMenu";

function useSectionWatcher() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [active, setActive] = useState<SectionId>("accueil");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[data-theme]"));
    // Thin band under the nav: whichever section sits there sets the nav material.
    const themeObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setTheme(e.target.getAttribute("data-theme") as "light" | "dark");
        }
      },
      { rootMargin: "-24px 0px -96% 0px" },
    );
    // Middle band: the section being read highlights its nav link.
    const activeObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id as SectionId);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => {
      themeObserver.observe(s);
      activeObserver.observe(s);
    });
    return () => {
      themeObserver.disconnect();
      activeObserver.disconnect();
    };
  }, []);

  return { theme, active };
}

export function GlassNav() {
  const { theme, active } = useSectionWatcher();
  const scrollTo = useScrollTo();
  const lenis = useLenis();
  const reduce = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 300, damping: 40, restDelta: 0.001 });
  const dark = theme === "dark" && !menuOpen;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    lenis?.stop();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen, lenis]);

  const go = (id: SectionId) => {
    setMenuOpen(false);
    scrollTo(id);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 border-b transition-[background-color,border-color,color] duration-300 ${
          dark ? "glass-dark border-white/[0.08] text-fg-inverse" : "glass-light border-black/[0.06] text-fg"
        }`}
        style={{ zIndex: layers.nav }}
      >
        <nav aria-label="Navigation principale" className="mx-auto flex h-[52px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <a
            href="#accueil"
            onClick={(e) => {
              e.preventDefault();
              go("accueil");
            }}
            className="text-[15px] font-semibold tracking-[-0.02em]"
          >
            {site.name}
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(link.id);
                  }}
                  aria-current={active === link.id ? "true" : undefined}
                  className={`relative rounded-full px-3 py-1.5 text-[13px] transition-opacity duration-200 ${
                    active === link.id ? "opacity-100" : "opacity-65 hover:opacity-100"
                  }`}
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", bounce: 0, duration: 0.35 }}
                      className={`absolute inset-0 rounded-full ${dark ? "bg-white/10" : "bg-black/[0.05]"}`}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCommandOpen(true)}
              className={`pressable hidden h-8 items-center gap-1.5 rounded-full px-3 text-[12px] lg:inline-flex ${
                dark ? "bg-white/10 text-fg-inverse/80" : "bg-black/[0.05] text-fg/70"
              }`}
              aria-label="Ouvrir la palette de commandes"
            >
              <CommandIcon size={13} weight="bold" />K
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                go("contact");
              }}
              className="pressable hidden h-8 items-center rounded-full bg-accent px-4 text-[13px] font-medium text-white md:inline-flex"
            >
              Me contacter
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="pressable grid size-10 place-items-center rounded-full md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {menuOpen ? <XIcon size={22} /> : <ListIcon size={22} />}
            </button>
          </div>
        </nav>
        <motion.div
          aria-hidden
          className={`absolute inset-x-0 bottom-[-1px] h-[2px] origin-left ${dark ? "bg-accent-bright" : "bg-accent"}`}
          style={{ scaleX: progress }}
        />
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.18 } }}
            transition={{ duration: 0.25 }}
            className="glass-light fixed inset-0 flex flex-col px-6 pb-10 pt-[84px] text-fg md:hidden"
            style={{ zIndex: layers.nav - 1 }}
          >
            <ul className="flex flex-col gap-1">
              {[...navLinks, { id: "contact" as const, label: "Contact" }].map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: easeOut, delay: 0.04 + i * 0.045 }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(link.id);
                    }}
                    className="block py-2 text-[34px] font-semibold tracking-[-0.035em]"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <p className="mt-auto text-[15px] text-fg-muted">{site.email}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <CommandMenu open={commandOpen} onClose={() => setCommandOpen(false)} />
    </>
  );
}
