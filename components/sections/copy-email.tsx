"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/components/ui/toast";
import { spring } from "@/lib/motion";

async function writeToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  // Fallback for non-secure contexts (e.g. LAN IP during development).
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const ok = document.execCommand("copy");
  textarea.remove();
  if (!ok) throw new Error("Copy failed");
}

export function CopyEmail({ email }: { email: string }) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const handleCopy = async () => {
    try {
      await writeToClipboard(email);
      setCopied(true);
      toast("Email copied to clipboard");
      window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast("Couldn't copy — try selecting the address", "error");
    }
  };

  return (
    <div className="glass inline-flex max-w-full items-center gap-2 rounded-full p-1.5 pl-5 shadow-card">
      <a
        href={`mailto:${email}`}
        className="min-w-0 truncate text-base font-medium tracking-tight hover:text-accent sm:text-lg"
      >
        {email}
      </a>
      <motion.button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Email address copied" : "Copy email address"}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
        transition={spring}
        className="inline-flex h-10 w-[6.5rem] shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent text-sm font-medium text-white hover:bg-accent-hover"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={copied ? "copied" : "copy"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={spring}
            className="flex items-center gap-1.5"
          >
            {copied ? <Check aria-hidden className="size-4" /> : <Copy aria-hidden className="size-4" />}
            {copied ? "Copied" : "Copy"}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
