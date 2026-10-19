import type { ReactNode } from "react";

export const BROWSER = { width: 880, height: 600 };
export const PHONE = { width: 320, height: 660 };

// Window chrome drawn at design size; wrap in <FitBox> to scale.
export function BrowserFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div
      className="flex h-full w-full flex-col overflow-hidden rounded-[18px] bg-white text-fg shadow-[0_40px_120px_-30px_rgb(0_0_0/0.55),0_0_0_1px_rgb(0_0_0/0.08)]"
      style={{ width: BROWSER.width, height: BROWSER.height }}
    >
      <div className="flex h-11 shrink-0 items-center gap-4 border-b border-black/[0.06] bg-[#f6f6f8] px-4">
        <div className="flex gap-2" aria-hidden>
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex h-7 w-[340px] items-center justify-center rounded-lg bg-black/[0.05] px-3 text-[12px] text-fg-muted">
          <span className="truncate">{url}</span>
        </div>
        <div className="w-[52px]" />
      </div>
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  );
}

// Mobile screenshots start with a plain band where this bar and the Dynamic Island sit.
function StatusBar({ tone }: { tone: "dark" | "light" }) {
  return (
    <div
      aria-hidden
      className={`absolute inset-x-0 top-0 z-10 flex h-[50px] items-center justify-between px-[30px] pt-[1px] ${tone === "light" ? "text-white" : "text-black"}`}
    >
      <span className="w-[54px] text-center text-[14px] font-semibold tracking-[-0.01em]">9:41</span>
      <span className="flex w-[54px] items-center justify-center gap-[5px]">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
          <rect x="0" y="7" width="3" height="4" rx="0.8" />
          <rect x="4.5" y="5" width="3" height="6" rx="0.8" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="0.8" />
          <rect x="13.5" y="0" width="3" height="11" rx="0.8" />
        </svg>
        <svg width="24" height="11" viewBox="0 0 24 11" fill="none">
          <rect x="0.5" y="0.5" width="20" height="10" rx="3" stroke="currentColor" opacity="0.4" />
          <rect x="2" y="2" width="15" height="7" rx="1.6" fill="currentColor" />
          <path d="M22 3.8v3.4c.7-.3 1.2-1 1.2-1.7s-.5-1.4-1.2-1.7Z" fill="currentColor" opacity="0.45" />
        </svg>
      </span>
    </div>
  );
}

export function PhoneFrame({ children, statusBar = "dark" }: { children: ReactNode; statusBar?: "dark" | "light" }) {
  return (
    <div
      className="relative rounded-[52px] bg-[#0d0d0f] p-[11px] shadow-[0_40px_120px_-30px_rgb(0_0_0/0.6),inset_0_0_0_1.5px_rgb(255_255_255/0.14)]"
      style={{ width: PHONE.width, height: PHONE.height }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[42px] bg-white text-fg">
        <div
          aria-hidden
          className="absolute left-1/2 top-[10px] z-20 h-[30px] w-[100px] -translate-x-1/2 rounded-full bg-black"
        />
        <StatusBar tone={statusBar} />
        {children}
      </div>
    </div>
  );
}
