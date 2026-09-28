import { cn } from "@/lib/cn";

/**
 * Decorative "app window" used to fill featured bento tiles. Swap for a real
 * screenshot (next/image) when you have one.
 */
const bars = [38, 52, 44, 68, 57, 76, 64, 88, 72, 94, 81, 100];

export function ProjectVisual({ accent, className }: { accent: string; className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "squircle relative flex-1 overflow-hidden rounded-2xl border border-black/5 dark:border-white/10",
        className,
      )}
      style={{ background: `linear-gradient(160deg, ${accent}24, ${accent}05 60%)` }}
    >
      <div className="flex items-center gap-1.5 border-b border-black/5 px-4 py-3 dark:border-white/10">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 h-2 w-24 rounded-full bg-black/10 dark:bg-white/10" />
      </div>
      <div className="grid grid-cols-3 gap-3 p-4 sm:p-5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-xl bg-white/70 p-3 dark:bg-white/5">
            <div className="h-1.5 w-10 rounded-full bg-black/10 dark:bg-white/15" />
            <div className="mt-2 h-3 w-14 rounded-full" style={{ backgroundColor: `${accent}${i === 0 ? "cc" : "66"}` }} />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-4 bottom-4 flex h-[45%] items-end gap-1.5 sm:inset-x-5 sm:gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md"
            style={{ height: `${h}%`, background: `linear-gradient(to top, ${accent}55, ${accent})`, opacity: 0.35 + (i / bars.length) * 0.65 }}
          />
        ))}
      </div>
    </div>
  );
}
