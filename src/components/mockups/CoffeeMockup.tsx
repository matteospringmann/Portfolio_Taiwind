"use client";

import { CheckIcon, ShoppingBagIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import { useRef, useState } from "react";
import { spring } from "@/lib/motion";
import type { MockupProps } from "./shared";

const FOREST = "#17352b";
const ORANGE = "#e2631f";

const grinds = ["Grains", "Filtre", "Espresso"] as const;
type Grind = (typeof grinds)[number];

const coffees = [
  { name: "Éthiopie Guji", notes: "Agrumes, jasmin, miel", price: "13,50 €", bag: "#d9e4dc", band: "#2f6b4f" },
  { name: "Colombie Huila", notes: "Cacao, cerise noire", price: "12,90 €", bag: "#f1d9c9", band: ORANGE },
  { name: "Brésil Cerrado", notes: "Noisette, caramel", price: "11,40 €", bag: "#dfe0ea", band: "#3a4a8c" },
];

export function CoffeeMockup({ live = true }: MockupProps) {
  const [grind, setGrind] = useState<Grind[]>(["Filtre", "Espresso", "Grains"]);
  const [count, setCount] = useState(2);
  const [added, setAdded] = useState<number | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [badge, animateBadge] = useAnimate();
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const add = (i: number) => {
    setCount((c) => c + 1);
    setAdded(i);
    setToast(`${coffees[i].name}, mouture ${grind[i].toLowerCase()}`);
    animateBadge(badge.current, { scale: [1, 1.35, 1] }, { duration: 0.45, ease: [0.23, 1, 0.32, 1] });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setAdded(null);
      setToast(null);
    }, 1800);
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f4f6f3]" inert={!live}>
      <header className="flex h-14 items-center justify-between px-8" style={{ color: FOREST }}>
        <span className="text-[17px] font-semibold tracking-[-0.03em]">Atelier Moka</span>
        <nav className="flex gap-7 text-[13px] font-medium opacity-80">
          <span>Cafés</span>
          <span>Abonnement</span>
          <span>Le lieu</span>
        </nav>
        <div className="relative">
          <ShoppingBagIcon size={22} />
          <span
            ref={badge}
            className="absolute -right-2 -top-1.5 grid size-[18px] place-items-center rounded-full text-[10px] font-bold text-white tabular-nums"
            style={{ background: ORANGE }}
          >
            {count}
          </span>
        </div>
      </header>

      <div className="mx-8 flex items-end justify-between rounded-[18px] px-8 py-7" style={{ background: FOREST }}>
        <div>
          <p className="text-[12px] font-medium text-[#f6b48c]">Nouvelle récolte</p>
          <p className="type-title mt-2 max-w-[380px] text-[30px] text-white">
            Torréfié le mardi, dans votre tasse le jeudi.
          </p>
        </div>
        <span className="rounded-full bg-white/10 px-4 py-2 text-[12px] font-medium text-white">
          Livraison offerte dès 30 €
        </span>
      </div>

      <div className="mx-8 mt-5 grid grid-cols-3 gap-4">
        {coffees.map((c, i) => (
          <div key={c.name} className="rounded-[18px] bg-white p-4 shadow-[0_1px_2px_rgb(23_53_43/0.06)]">
            <div className="grid h-[118px] place-items-center rounded-[12px]" style={{ background: c.bag }}>
              <div className="relative h-[96px] w-[66px] rounded-[8px] bg-white shadow-[0_8px_18px_-6px_rgb(0_0_0/0.25)]">
                <div className="h-4 rounded-t-[8px]" style={{ background: c.band }} />
                <p className="mt-3 px-1 text-center text-[7px] font-bold leading-tight" style={{ color: FOREST }}>
                  {c.name.toUpperCase()}
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-baseline justify-between">
              <p className="text-[14px] font-semibold" style={{ color: FOREST }}>
                {c.name}
              </p>
              <p className="text-[13px] font-medium tabular-nums">{c.price}</p>
            </div>
            <p className="text-[12px] text-fg-muted">{c.notes}</p>

            <div className="mt-3 grid grid-cols-3 rounded-full bg-[#eef1ed] p-0.5 text-[10.5px] font-medium">
              {grinds.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGrind((all) => all.map((v, j) => (j === i ? g : v)))}
                  className="relative h-6 rounded-full"
                  aria-pressed={grind[i] === g}
                >
                  {grind[i] === g && (
                    <motion.span
                      layoutId={`grind-${i}`}
                      transition={spring}
                      className="absolute inset-0 rounded-full bg-white shadow-sm"
                    />
                  )}
                  <span className="relative" style={{ color: grind[i] === g ? FOREST : "#6b7570" }}>
                    {g}
                  </span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => add(i)}
              className="pressable mt-3 flex h-9 w-full items-center justify-center gap-1.5 overflow-hidden rounded-full text-[12.5px] font-semibold text-white"
              style={{ background: added === i ? "#2f6b4f" : FOREST, transition: "background-color 200ms" }}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={added === i ? "ok" : "add"}
                  initial={{ y: 14, opacity: 0, filter: "blur(2px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -14, opacity: 0, filter: "blur(2px)" }}
                  transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                  className="inline-flex items-center gap-1.5"
                >
                  {added === i ? (
                    <>
                      <CheckIcon size={13} weight="bold" /> Ajouté
                    </>
                  ) : (
                    "Ajouter au panier"
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="absolute right-6 top-14 rounded-[12px] bg-white px-4 py-3 text-[12px] shadow-[0_12px_30px_-8px_rgb(23_53_43/0.3)]"
          >
            <p className="font-semibold" style={{ color: FOREST }}>
              Ajouté au panier
            </p>
            <p className="text-fg-muted">{toast}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
