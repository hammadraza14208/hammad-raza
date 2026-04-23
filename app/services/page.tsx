import { PageHero } from "@/components/shared/page-hero";
import { services } from "@/content/data";

export const metadata = {
  title: "Services",
  description: "Luxury web design, brand systems, product storytelling, and launch support.",
};

const process = [
  "Discovery and positioning alignment",
  "Narrative architecture and content direction",
  "Visual design system and prototyping",
  "Creative development, QA, and launch support",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Creative systems for brands ready to look and perform at a higher level."
        description="We design premium websites, launch campaigns, and narrative ecosystems that give ambitious companies a sharper digital presence."
      />
      <section className="pb-16">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.title} className="glass-panel rounded-[2rem] p-8 shadow-luxe">
              <span className="text-sm font-semibold uppercase tracking-[0.26em] text-accent">
                0{index + 1}
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">{service.title}</h2>
              <p className="mt-4 body-lg text-base">{service.description}</p>
              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/5 p-5 dark:bg-white/5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/55">
                  Ideal For
                </h3>
                <p className="mt-3 text-sm leading-7 text-foreground/70">
                  Founders, internal marketing teams, or established brands preparing for a
                  new market, funding milestone, or category-defining launch.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section-space pt-8">
        <div className="container-shell glass-panel rounded-[2rem] p-8 shadow-luxe">
          <span className="eyebrow">Process</span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em]">
            A structured path to a highly polished launch.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {process.map((step) => (
              <div key={step} className="rounded-[1.5rem] border border-white/10 bg-black/5 p-5 text-sm leading-7 dark:bg-white/5">
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
