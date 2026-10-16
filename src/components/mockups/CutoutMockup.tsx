"use client";

import {
  CaretLeftIcon,
  CaretRightIcon,
  DownloadSimpleIcon,
  ImagesIcon,
  ScissorsIcon,
  TShirtIcon,
} from "@phosphor-icons/react";
import { animate, motion, useMotionValue, useMotionValueEvent, useTransform } from "motion/react";
import { useEffect, useId, useRef, useState, type PointerEvent } from "react";
import { springMomentum } from "@/lib/motion";
import { useActive, type MockupProps } from "./shared";

const VIOLET = "#7b5cf0";
const AREA_W = 274;
const AREA_H = 330;

// Progressive resistance past the edges (apple-design §9).
function rubberband(overshoot: number, dimension: number, c = 0.55) {
  return (overshoot * dimension * c) / (dimension + c * Math.abs(overshoot));
}

function Garment({ shadow }: { shadow?: boolean }) {
  const gradient = useId();
  return (
    <svg viewBox="0 0 200 200" className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2">
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9b86ff" />
          <stop offset="1" stopColor="#5b3fd6" />
        </linearGradient>
      </defs>
      {shadow && <ellipse cx="100" cy="186" rx="52" ry="6" fill="rgb(0 0 0 / 0.14)" />}
      <path
        d="M70 22 L48 30 L18 52 L33 84 L52 76 L52 178 L148 178 L148 76 L167 84 L182 52 L152 30 L130 22 C126 36 114 44 100 44 C86 44 74 36 70 22 Z"
        fill={`url(#${gradient})`}
      />
      <path
        d="M78 92 C88 104 84 130 76 150 M122 96 C116 112 120 136 128 160 M100 44 C100 48 100 50 100 52"
        stroke="rgb(255 255 255 / 0.18)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CutoutMockup({ live = true }: MockupProps) {
  const root = useRef<HTMLDivElement>(null);
  const area = useRef<HTMLDivElement>(null);
  const { autoplay } = useActive(root, live);
  const pos = useMotionValue(0.5);
  const dragging = useRef(false);
  const introDone = useRef(false);
  const [percent, setPercent] = useState(50);
  useMotionValueEvent(pos, "change", (p) => {
    const next = Math.round(Math.min(1, Math.max(0, p)) * 10) * 10;
    if (next !== percent) setPercent(next);
  });

  const clip = useTransform(pos, (p) => `inset(0 ${(1 - Math.min(1, Math.max(0, p))) * 100}% 0 0)`);
  const handleX = useTransform(pos, (p) => p * AREA_W);

  useEffect(() => {
    if (!autoplay || introDone.current) return;
    introDone.current = true;
    const controls = animate(pos, [0.5, 0.18, 0.82, 0.5], {
      duration: 2.6,
      ease: [0.77, 0, 0.175, 1],
      delay: 0.4,
    });
    return () => controls.stop();
  }, [autoplay, pos]);

  const fractionAt = (clientX: number) => {
    const rect = area.current!.getBoundingClientRect();
    const raw = (clientX - rect.left) / rect.width;
    if (raw < 0) return rubberband(raw * AREA_W, AREA_W) / AREA_W;
    if (raw > 1) return 1 + rubberband((raw - 1) * AREA_W, AREA_W) / AREA_W;
    return raw;
  };

  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) return; // ignore a second finger
    dragging.current = true;
    introDone.current = true;
    pos.stop();
    e.currentTarget.setPointerCapture(e.pointerId);
    pos.set(fractionAt(e.clientX));
  };
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) pos.set(fractionAt(e.clientX));
  };
  const onUp = () => {
    if (!dragging.current) return;
    dragging.current = false;
    const p = pos.get();
    if (p < 0 || p > 1) animate(pos, Math.min(1, Math.max(0, p)), springMomentum);
  };

  return (
    <div ref={root} className="flex h-full flex-col bg-[#f6f5fb]" inert={!live}>
      <div className="flex h-12 shrink-0 items-end justify-between px-7 pb-1 text-[13px] font-semibold">
        <span>9:41</span>
      </div>
      <div className="flex items-center justify-between px-5 pt-2">
        <div>
          <p className="text-[22px] font-semibold tracking-[-0.03em]">Pli</p>
          <p className="text-[11.5px] text-fg-muted">Glissez pour comparer</p>
        </div>
        <span className="rounded-full px-3 py-1 text-[11px] font-semibold text-white" style={{ background: VIOLET }}>
          Détouré
        </span>
      </div>

      <div
        ref={area}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        className="relative mx-auto mt-3 cursor-ew-resize touch-none overflow-hidden rounded-[22px]"
        style={{ width: AREA_W, height: AREA_H }}
        role="slider"
        aria-label="Comparer la photo originale et le détourage"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") animate(pos, Math.max(0, pos.get() - 0.1), springMomentum);
          if (e.key === "ArrowRight") animate(pos, Math.min(1, pos.get() + 0.1), springMomentum);
        }}
      >
        {/* After: transparent background */}
        <div className="checkerboard absolute inset-0">
          <Garment shadow />
        </div>

        {/* Before: the original photo */}
        <motion.div className="absolute inset-0" style={{ clipPath: clip }}>
          <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_30%_10%,#f3dcc4_0%,#c9a98d_55%,#8d6c55_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[repeating-linear-gradient(90deg,#7a5a44_0px,#7a5a44_22px,#6e503c_22px,#6e503c_24px)]" />
          <div className="absolute -left-6 top-10 size-28 rounded-full bg-[#4f7a4a] opacity-80 blur-[10px]" />
          <div className="absolute right-4 top-6 h-24 w-16 rounded-[6px] bg-[#fff4e2] opacity-70 blur-[3px]" />
          <div className="absolute bottom-6 right-2 size-20 rounded-full bg-[#2c2a33] opacity-50 blur-[12px]" />
          <Garment />
        </motion.div>

        {/* Handle */}
        <motion.div className="pointer-events-none absolute inset-y-0 left-0 w-0" style={{ x: handleX }}>
          <div className="absolute inset-y-0 -left-px w-0.5 bg-white shadow-[0_0_8px_rgb(0_0_0/0.35)]" />
          <div className="absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgb(0_0_0/0.3)]">
            <CaretLeftIcon size={11} weight="bold" />
            <CaretRightIcon size={11} weight="bold" />
          </div>
        </motion.div>
      </div>

      <div className="mt-4 flex gap-2 px-5 text-[11.5px] font-medium">
        {["T-shirt", "Coton", "Violet"].map((tag) => (
          <span key={tag} className="rounded-full bg-white px-3 py-1.5 shadow-[0_1px_2px_rgb(0_0_0/0.06)]">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 px-5">
        <button
          type="button"
          className="pressable flex h-11 items-center justify-center gap-1.5 rounded-full text-[13px] font-semibold text-white"
          style={{ background: VIOLET }}
        >
          <DownloadSimpleIcon size={15} weight="bold" /> PNG
        </button>
        <button type="button" className="pressable h-11 rounded-full bg-white text-[13px] font-semibold shadow-[0_1px_2px_rgb(0_0_0/0.08)]">
          Fond uni
        </button>
      </div>

      <div className="mt-auto flex h-16 items-start justify-around border-t border-black/[0.06] bg-white/80 pt-2.5 text-fg-muted">
        <ImagesIcon size={22} />
        <ScissorsIcon size={22} weight="fill" color={VIOLET} />
        <TShirtIcon size={22} />
      </div>
    </div>
  );
}
