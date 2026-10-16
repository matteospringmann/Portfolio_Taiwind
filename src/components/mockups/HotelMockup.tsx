"use client";

import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { MockupProps } from "./shared";

const BLUE = "#3d7fa8";
const NIGHT = "#0f2433";
// February 2027 starts on a Monday and has 28 days: a clean 4-row grid.
const DAYS = Array.from({ length: 28 }, (_, i) => i + 1);
const WEEK = ["L", "M", "M", "J", "V", "S", "D"];
const PRICE = 189;

export function HotelMockup({ live = true }: MockupProps) {
  const [range, setRange] = useState<[number, number | null]>([12, 14]);
  const [guests, setGuests] = useState(2);
  const [checked, setChecked] = useState(false);

  const [start, end] = range;
  const nights = end ? end - start : 0;

  const pick = (day: number) => {
    setChecked(false);
    if (end !== null || day <= start) setRange([day, null]);
    else setRange([start, day]);
  };

  return (
    <div className="relative h-full w-full overflow-hidden" inert={!live} style={{ background: NIGHT }}>
      {/* Landscape built from layered gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#9fc3dc_0%,#d6e3ea_48%,#eef1ef_62%)]" />
        <div className="absolute right-[18%] top-[16%] size-16 rounded-full bg-[#fff6e6] opacity-80 blur-[2px]" />
        <div
          className="absolute inset-x-0 bottom-[30%] h-[46%] bg-[#6f93ad]"
          style={{ clipPath: "polygon(0 70%,12% 38%,22% 55%,36% 18%,48% 46%,60% 28%,74% 52%,86% 22%,100% 48%,100% 100%,0 100%)" }}
        />
        <div
          className="absolute inset-x-0 bottom-[22%] h-[40%] bg-[#3f6a86]"
          style={{ clipPath: "polygon(0 52%,10% 66%,24% 34%,38% 60%,52% 30%,66% 58%,80% 40%,92% 62%,100% 46%,100% 100%,0 100%)" }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[36%] bg-[#1d3b4f]"
          style={{ clipPath: "polygon(0 34%,6% 20%,9% 34%,14% 8%,19% 32%,26% 24%,31% 40%,40% 26%,47% 44%,58% 30%,64% 12%,69% 34%,78% 28%,86% 42%,93% 18%,100% 30%,100% 100%,0 100%)" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent,rgb(15_36_51/0.65))]" />
      </div>

      <header className="relative flex h-14 items-center justify-between px-8 text-white">
        <span className="text-[16px] font-semibold tracking-[0.18em]">SAPIN BLANC</span>
        <nav className="flex gap-7 text-[13px] font-medium text-white/85">
          <span>Chambres</span>
          <span>Spa</span>
          <span>Table</span>
          <span>Séminaires</span>
        </nav>
      </header>

      <div className="absolute bottom-10 left-10 max-w-[360px] text-white">
        <p className="text-[12px] font-medium text-white/75">Hôtel et spa, Vosges du Nord</p>
        <p className="type-title mt-2 text-[38px]">Le calme de la forêt, le spa en plus.</p>
      </div>

      {/* Booking card */}
      <div className="absolute bottom-6 right-6 top-[72px] w-[318px] rounded-[20px] bg-white/[0.94] p-5 shadow-[0_30px_70px_-20px_rgb(0_0_0/0.5)] backdrop-blur-xl">
        <div className="flex items-baseline justify-between">
          <p className="text-[15px] font-semibold" style={{ color: NIGHT }}>
            Février 2027
          </p>
          <p className="text-[12px] text-fg-muted">
            {end ? `${nights} nuit${nights > 1 ? "s" : ""}` : "Choisissez le départ"}
          </p>
        </div>

        <div className="mt-3 grid grid-cols-7 text-center text-[10.5px] font-medium text-fg-muted">
          {WEEK.map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
        <div className="mt-1 grid grid-cols-7 gap-y-1">
          {DAYS.map((day) => {
            const isEdge = day === start || day === end;
            const inRange = end !== null && day > start && day < end;
            return (
              <button
                key={day}
                type="button"
                onClick={() => pick(day)}
                className={`relative h-8 text-[12px] tabular-nums ${inRange ? "bg-[#e3eef5]" : ""} ${
                  day === start && end ? "rounded-l-full bg-[#e3eef5]" : ""
                } ${day === end ? "rounded-r-full bg-[#e3eef5]" : ""}`}
              >
                <span
                  className={`relative z-[1] mx-auto grid size-8 place-items-center rounded-full transition-colors duration-150 ${
                    isEdge ? "font-semibold text-white" : "hover:bg-black/5"
                  }`}
                  style={isEdge ? { background: BLUE } : undefined}
                >
                  {day}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-[12px] bg-black/[0.04] px-3 py-2">
          <span className="text-[12.5px] font-medium">
            {guests} adulte{guests > 1 ? "s" : ""}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Retirer une personne"
              onClick={() => setGuests((g) => Math.max(1, g - 1))}
              className="pressable grid size-7 place-items-center rounded-full bg-white shadow-sm"
            >
              <MinusIcon size={12} weight="bold" />
            </button>
            <button
              type="button"
              aria-label="Ajouter une personne"
              onClick={() => setGuests((g) => Math.min(4, g + 1))}
              className="pressable grid size-7 place-items-center rounded-full bg-white shadow-sm"
            >
              <PlusIcon size={12} weight="bold" />
            </button>
          </div>
        </div>

        <button
          type="button"
          disabled={!end}
          onClick={() => setChecked(true)}
          className="pressable mt-3 h-10 w-full rounded-full text-[13px] font-semibold text-white disabled:opacity-50"
          style={{ background: BLUE }}
        >
          Vérifier les disponibilités
        </button>

        <div className="mt-3 h-10 text-center text-[12px]">
          <AnimatePresence mode="wait" initial={false}>
            {checked && end ? (
              <motion.p
                key="ok"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <span className="font-semibold" style={{ color: BLUE }}>
                  3 chambres disponibles
                </span>
                <br />
                <span className="text-fg-muted">
                  À partir de {PRICE * nights} € pour {nights} nuit{nights > 1 ? "s" : ""}
                </span>
              </motion.p>
            ) : (
              <motion.p key="hint" className="text-fg-muted" exit={{ opacity: 0 }}>
                Réservation directe, sans frais de plateforme.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
