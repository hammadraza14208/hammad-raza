import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ImageCard } from "@/components/ui/image-card";

export function Showcase() {
  return (
    <AnimatedSection className="section-space pt-0">
      <div className="container-shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <ImageCard
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
          alt="Premium studio workspace"
          priority
        />
        <div className="flex flex-col justify-center rounded-[2rem] border border-white/10 bg-foreground px-8 py-10 text-background shadow-luxe">
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Signature Process
          </span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em]">
            Strategy-first creative that still feels deeply sensorial.
          </h2>
          <p className="mt-5 text-base leading-8 text-background/75">
            Every engagement moves through insight, narrative, visual systems, and
            production. That structure keeps the work sharp while giving the final
            experience its sense of polish.
          </p>
          <div className="mt-8">
            <Button href="/services" variant="inverse">
              View Services
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
