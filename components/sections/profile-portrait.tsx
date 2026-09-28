import Image from "next/image";
import { site } from "@/data/site";

/**
 * Profile photo in a squircle frame. Set `site.avatar` (e.g. "/profile.jpg"
 * placed in /public) to show your photo; otherwise an initials monogram renders.
 */
export function ProfilePortrait() {
  return (
    <figure className="relative">
      {/* Offset accent frame behind the photo */}
      <div
        aria-hidden
        className="squircle absolute inset-0 translate-x-3 translate-y-3 rounded-[2.5rem] bg-linear-to-br from-accent/30 via-[#5e5ce6]/20 to-[#bf5af2]/25 sm:translate-x-4 sm:translate-y-4"
      />

      <div className="squircle relative aspect-1/1 overflow-hidden rounded-[2.5rem] border border-black/5 bg-white shadow-float dark:border-white/10 dark:bg-neutral-900">
        {site.avatar ? (
          <Image
            src={site.avatar}
            alt={`Portrait of ${site.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 380px, 320px"
            className="object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={`${site.name} monogram`}
            className="grid size-full place-items-center bg-linear-to-br from-[#e8f1fc] to-[#f3eefd] dark:from-[#0b1a2e] dark:to-[#1c1030]"
          >
            <span className="bg-linear-to-br from-accent to-[#bf5af2] bg-clip-text text-6xl font-semibold sm:text-8xl tracking-tight text-transparent">
              {site.initials}
            </span>
          </div>
        )}
      </div>

      {/* Floating code chip — a small developer signature */}
      {/* <figcaption className="glass absolute hidden sm:block -bottom-5 -left-4 rounded-2xl px-4 py-3 font-mono text-[12px] leading-relaxed shadow-float sm:-left-8">
        <span className="text-[#af52de]">const</span> focus <span className="text-ink-muted">=</span>{" "}
        <span className="text-[#248a3d] dark:text-[#30d158]">&quot;simple UI&quot;</span>
        <br />
        <span className="text-ink-muted">{"// for complex systems"}</span>
      </figcaption> */}
    </figure>
  );
}
