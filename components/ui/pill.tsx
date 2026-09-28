import { cn } from "@/lib/cn";

const tones = {
  muted: "text-ink-muted",
  strong: "text-ink",
  accent: "text-accent",
} as const;

interface PillProps {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  size?: "sm" | "md";
}

export function Pill({ children, tone = "muted", size = "sm" }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-black/5 bg-black/3 font-medium dark:border-white/10 dark:bg-white/6",
        size === "sm" ? "px-3 py-1 text-xs" : "px-3.5 py-1.5 text-[13px]",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}
