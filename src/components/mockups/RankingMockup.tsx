"use client";

import {
  BellIcon,
  CaretDownIcon,
  CaretUpIcon,
  ChartBarIcon,
  ExportIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { spring } from "@/lib/motion";
import { useActive, type MockupProps } from "./shared";

const PINK = "#e2386f";

type Game = { id: string; name: string; studio: string; genre: string; colors: [string, string]; history: number[] };

// Données fictives de démonstration.
const games: Record<string, Game> = {
  tours: { id: "tours", name: "Royaume des Tours", studio: "Brume Games", genre: "Stratégie", colors: ["#ff9a62", "#e2386f"], history: [9, 7, 8, 5, 4, 3, 1] },
  drift: { id: "drift", name: "Neon Drift", studio: "Kilowatt", genre: "Course", colors: ["#57c7ff", "#3b4bdb"], history: [3, 2, 2, 3, 2, 1, 2] },
  potager: { id: "potager", name: "Petit Potager", studio: "Studio Radis", genre: "Simulation", colors: ["#9be27a", "#2f9e62"], history: [12, 10, 9, 6, 5, 4, 3] },
  merge: { id: "merge", name: "Sky Merge", studio: "Altitude", genre: "Puzzle", colors: ["#c6a7ff", "#6c4ce0"], history: [1, 1, 3, 2, 3, 3, 4] },
  bulle: { id: "bulle", name: "Bulle & Co", studio: "Pop Factory", genre: "Arcade", colors: ["#ffd45e", "#f08a24"], history: [5, 6, 4, 4, 6, 6, 5] },
  cartes: { id: "cartes", name: "Cartes en Folie", studio: "Atout", genre: "Cartes", colors: ["#7ee0d8", "#178b8f"], history: [6, 5, 6, 8, 7, 7, 6] },
  orbite: { id: "orbite", name: "Orbite", studio: "Kilowatt", genre: "Action", colors: ["#9aa4ff", "#2b2f8f"], history: [14, 11, 10, 9, 8, 8, 7] },
};

const boards = {
  Gratuits: ["tours", "drift", "potager", "merge", "bulle", "cartes"],
  Payants: ["merge", "cartes", "orbite", "tours", "potager", "bulle"],
  Revenus: ["drift", "tours", "merge", "orbite", "bulle", "potager"],
} as const;
type Board = keyof typeof boards;

const initialDelta: Record<string, number> = { tours: 2, drift: -1, potager: 1, merge: -1, bulle: 1, cartes: -1, orbite: 1 };
const SWAPS = [3, 1, 4, 0, 2];

function Sparkline({ history, color }: { history: number[]; color: string }) {
  const max = Math.max(...history);
  const min = Math.min(...history);
  const points = history
    .map((rank, i) => {
      const x = (i / (history.length - 1)) * 60 + 2;
      const y = max === min ? 11 : 2 + ((rank - min) / (max - min)) * 18;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg viewBox="0 0 64 22" className="h-[22px] w-16" aria-hidden>
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RankingMockup({ live = true }: MockupProps) {
  const root = useRef<HTMLDivElement>(null);
  const { autoplay } = useActive(root, live);
  const [board, setBoard] = useState<Board>("Gratuits");
  const [order, setOrder] = useState<string[]>([...boards.Gratuits]);
  const [delta, setDelta] = useState(initialDelta);
  const tick = useRef(0);
  const orderRef = useRef(order);

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      const i = SWAPS[tick.current++ % SWAPS.length];
      const next = [...orderRef.current];
      const [up, down] = [next[i + 1], next[i]];
      next[i] = up;
      next[i + 1] = down;
      orderRef.current = next;
      setOrder(next);
      setDelta((d) => ({ ...d, [up]: d[up] + 1, [down]: d[down] - 1 }));
    }, 2600);
    return () => clearInterval(id);
  }, [autoplay]);

  const selectBoard = (b: Board) => {
    setBoard(b);
    orderRef.current = [...boards[b]];
    setOrder(orderRef.current);
  };

  return (
    <div ref={root} className="flex h-full bg-[#f7f7f9]" inert={!live}>
      <aside className="flex w-[176px] shrink-0 flex-col bg-[#121216] px-4 py-5 text-[12.5px] text-white/60">
        <div className="flex items-center gap-2 px-2 text-white">
          <div className="grid size-6 place-items-center rounded-[7px] text-[12px] font-bold" style={{ background: PINK }}>
            P
          </div>
          <span className="text-[14px] font-semibold">Palmarès</span>
        </div>
        <nav className="mt-6 space-y-1">
          {[
            { label: "Classements", Icon: ChartBarIcon, active: true },
            { label: "Concurrents", Icon: UsersIcon },
            { label: "Alertes", Icon: BellIcon },
            { label: "Exports", Icon: ExportIcon },
          ].map(({ label, Icon, active }) => (
            <div
              key={label}
              className={`flex items-center gap-2.5 rounded-[9px] px-2 py-2 ${active ? "bg-white/10 text-white" : ""}`}
            >
              <Icon size={15} weight={active ? "fill" : "regular"} />
              {label}
            </div>
          ))}
        </nav>
      </aside>

      <main className="min-w-0 flex-1 px-6 py-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[19px] font-semibold tracking-[-0.025em]">Classement {board.toLowerCase()}</p>
            <p className="text-[12px] text-fg-muted">App Store, France, iPhone</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-medium shadow-[0_1px_2px_rgb(0_0_0/0.06)]">
            <span className="relative flex size-1.5">
              {autoplay && (
                <span className="absolute inline-flex size-full animate-ping rounded-full opacity-60" style={{ background: PINK }} />
              )}
              <span className="relative inline-flex size-1.5 rounded-full" style={{ background: PINK }} />
            </span>
            En direct
          </span>
        </div>

        <div className="mt-4 inline-grid grid-cols-3 rounded-full bg-black/[0.05] p-1 text-[12px] font-medium">
          {(Object.keys(boards) as Board[]).map((b) => (
            <button key={b} type="button" onClick={() => selectBoard(b)} className="relative h-7 rounded-full px-4">
              {board === b && (
                <motion.span layoutId="rank-tab" transition={spring} className="absolute inset-0 rounded-full bg-white shadow-sm" />
              )}
              <span className={`relative ${board === b ? "text-fg" : "text-fg-muted"}`}>{b}</span>
            </button>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: "Jeux suivis", value: "248" },
            { label: "Mouvements aujourd'hui", value: "37" },
            { label: "Alertes actives", value: "4" },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-[12px] bg-white px-4 py-3 shadow-[0_1px_2px_rgb(0_0_0/0.05)]">
              <p className="text-[11px] text-fg-muted">{kpi.label}</p>
              <p className="mt-0.5 text-[20px] font-semibold tracking-[-0.03em] tabular-nums">{kpi.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 overflow-hidden rounded-[14px] bg-white shadow-[0_1px_2px_rgb(0_0_0/0.05)]">
          <div className="grid grid-cols-[44px_44px_1fr_90px_72px] items-center px-4 py-2 text-[10.5px] font-medium text-fg-muted">
            <span>Rang</span>
            <span>24 h</span>
            <span>Jeu</span>
            <span>Genre</span>
            <span className="text-right">7 jours</span>
          </div>
          <ul>
            {order.map((id, index) => {
              const g = games[id];
              const d = delta[id];
              return (
                <motion.li
                  key={id}
                  layout="position"
                  transition={spring}
                  className="grid h-[44px] grid-cols-[44px_44px_1fr_90px_72px] items-center border-t border-black/[0.05] px-4 text-[12.5px]"
                >
                  <span className="font-semibold tabular-nums">{index + 1}</span>
                  <span
                    className={`inline-flex items-center gap-0.5 text-[11px] font-semibold tabular-nums ${
                      d > 0 ? "text-[#13804b]" : d < 0 ? "text-[#c4291c]" : "text-fg-muted"
                    }`}
                  >
                    {d > 0 && <CaretUpIcon size={10} weight="fill" />}
                    {d < 0 && <CaretDownIcon size={10} weight="fill" />}
                    {d === 0 ? "=" : Math.abs(d)}
                  </span>
                  <span className="flex min-w-0 items-center gap-2.5">
                    <span
                      className="grid size-7 shrink-0 place-items-center rounded-[8px] text-[11px] font-bold text-white"
                      style={{ background: `linear-gradient(135deg, ${g.colors[0]}, ${g.colors[1]})` }}
                    >
                      {g.name[0]}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-medium">{g.name}</span>
                      <span className="block truncate text-[10.5px] text-fg-muted">{g.studio}</span>
                    </span>
                  </span>
                  <span className="text-fg-muted">{g.genre}</span>
                  <span className="flex justify-end">
                    <Sparkline history={g.history} color={d >= 0 ? "#13804b" : "#c4291c"} />
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
