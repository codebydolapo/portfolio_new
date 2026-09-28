import { ArrowUpRight } from "lucide-react";
import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { blogs } from "@/data/blogs";
import { site } from "@/data/site";

// Pinned locale + UTC so the rendered date never depends on the server's region.
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export function Blogs() {
  const posts = [...blogs].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <Section
      id="writing"
      eyebrow="Writing"
      title="My craft, peformance and thoughts written down."
      description="Long-form articles on my ideas, from Medium and around the web."
      action={
        <a
          href={site.socials.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 text-[15px] font-medium text-accent hover:underline"
        >
          All articles on Medium
          <ArrowUpRight aria-hidden className="size-4" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      }
    >
      {/* Swipeable row on phones (saves ~1,300px of scrolling), grid from tablet up */}
      <ul className="no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pt-1 pb-6 sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:p-0 lg:grid-cols-3">
        {posts.map((post, i) => (
          <li key={post.id} className="w-[82%] shrink-0 snap-start sm:w-[60%] md:w-auto">
            <Reveal delay={Math.min(i * 0.05, 0.2)} className="h-full">
              <a
                href={post.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="surface group flex h-full flex-col p-6 transition duration-500 ease-apple hover:-translate-y-1 hover:shadow-float sm:p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <Pill tone="accent">{post.tag}</Pill>
                  <span className="text-xs font-medium text-ink-muted">{post.platform}</span>
                </div>

                <h3 className="mt-5 text-xl leading-snug font-semibold tracking-tight text-balance">
                  {post.title}
                  <span className="sr-only"> — read on {post.platform} (opens in a new tab)</span>
                </h3>
                <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-ink-muted">{post.excerpt}</p>

                <div className="mt-auto flex items-center justify-between pt-6 text-sm text-ink-muted">
                  <p>
                    <time dateTime={post.publishedAt}>{dateFormatter.format(new Date(post.publishedAt))}</time>
                    <span aria-hidden> · </span>
                    {post.readTime} min read
                  </p>
                  <span
                    aria-hidden
                    className="grid size-8 place-items-center rounded-full bg-black/5 transition duration-300 group-hover:bg-accent group-hover:text-white dark:bg-white/10"
                  >
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-px group-hover:-translate-y-px" />
                  </span>
                </div>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
