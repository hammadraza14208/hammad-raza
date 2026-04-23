import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/content/data";

export function Features() {
  return (
    <AnimatedSection className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Capabilities"
          title="Built for brands that need elegance and clarity in the same frame."
          description="We combine strategy, identity, motion, and engineering to create launches that feel art-directed from the first scroll to the final CTA."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="glass-panel rounded-[1.75rem] p-6 shadow-luxe"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-foreground/70">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
