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
        <div className="mx-auto flex h-7 w-[340px] items-center justify-center rounded-lg bg-black/[0.05] text-[12px] text-fg-muted">
          {url}
        </div>
        <div className="w-[52px]" />
      </div>
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  );
}

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative rounded-[52px] bg-[#0d0d0f] p-[11px] shadow-[0_40px_120px_-30px_rgb(0_0_0/0.6),inset_0_0_0_1.5px_rgb(255_255_255/0.14)]"
      style={{ width: PHONE.width, height: PHONE.height }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[42px] bg-white text-fg">
        <div
          aria-hidden
          className="absolute left-1/2 top-[10px] z-10 h-[30px] w-[100px] -translate-x-1/2 rounded-full bg-black"
        />
        {children}
      </div>
    </div>
  );
}
