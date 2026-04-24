import { Button } from "@/components/ui/button";
import { stats } from "@/content/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden section-space">
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:44px_44px] opacity-30" />
      <div className="container-shell grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-4xl space-y-8">
          <span className="eyebrow">Luxury Digital Atelier</span>
          <h1 className="headline-xl">
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga aliquid quae esse facere sit nulla modi in, corporis sequi non debitis odit!
          </h1>
          <p className="max-w-2xl body-lg">
            Lumina Atelier partners with ambitious brands to build refined websites,
            launch narratives, and product stories that move with precision and
            perform with intent.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact">Book a Strategy Call</Button>
            <Button href="/case-studies" variant="secondary">
              Explore Case Studies
            </Button>
          </div>
        </div>
        <div className="glass-panel rounded-[2rem] p-6 shadow-luxe">
          <div className="grid gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-black/5 p-5 dark:bg-white/5">
                <div className="text-3xl font-semibold tracking-[-0.04em]">{stat.value}</div>
                <p className="mt-2 text-sm text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
