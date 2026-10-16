import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary-light" | "secondary-dark" | "inverse";

const base =
  "pressable inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-[15px] font-medium tracking-[-0.01em] transition-[background-color,color,transform] duration-200 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-[#1d4ad8]",
  "secondary-light": "bg-fg/[0.06] text-fg hover:bg-fg/[0.1]",
  "secondary-dark": "bg-white/10 text-fg-inverse hover:bg-white/[0.16]",
  inverse: "bg-fg-inverse text-fg hover:bg-white",
};

type Common = { variant?: Variant; children: ReactNode; className?: string };

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: Common & ComponentPropsWithoutRef<"a">) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: Common & ComponentPropsWithoutRef<"button">) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
