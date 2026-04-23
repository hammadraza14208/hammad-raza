import { socialFeed } from "@/content/data";

export function SocialFeed() {
  return (
    <section className="section-space pt-0">
      <div className="container-shell">
        <div className="glass-panel rounded-[2rem] p-8 shadow-luxe">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Social Pulse</span>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Inside the studio, between launches.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-foreground/70">
              A curated feed of ideas, visual fragments, and performance-minded brand
              thinking across social channels.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {socialFeed.map((post) => (
              <article
                key={`${post.platform}-${post.caption}`}
                className="rounded-[1.5rem] border border-white/10 bg-black/5 p-5 dark:bg-white/5"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  {post.platform}
                </div>
                <div className="mt-2 text-sm text-foreground/58">{post.handle}</div>
                <p className="mt-4 text-sm leading-7 text-foreground/78">{post.caption}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
