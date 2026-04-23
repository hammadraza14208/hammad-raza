import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="section-space pt-0">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-foreground px-8 py-12 text-background shadow-luxe sm:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                Ready to Elevate
              </span>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Build a brand presence that feels rarer the longer someone stays.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-base leading-8 text-background/74">
                From rebrands to launch sites, we create premium digital systems that
                make confidence visible across every touchpoint.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="inverse">
                Lets Build
                </Button>
                <Button href="/about" variant="secondary">
                  Meet the Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
