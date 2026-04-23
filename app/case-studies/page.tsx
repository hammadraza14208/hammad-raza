import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { ImageCard } from "@/components/ui/image-card";
import { caseStudies } from "@/content/data";

export const metadata = {
  title: "Case Studies",
  description: "A selection of premium digital transformations and launch stories.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Proof that premium design can be both evocative and commercially sharp."
        description="A curated look at how we reposition brands, clarify product value, and elevate digital perception across high-consideration categories."
      />
      <section className="pb-20">
        <div className="container-shell grid gap-8">
          {caseStudies.map((study) => (
            <Link
              href={`/case-studies/${study.slug}`}
              key={study.slug}
              className="grid gap-6 rounded-[2rem] lg:grid-cols-[0.95fr_1.05fr]"
            >
              <ImageCard src={study.image} alt={study.title} />
              <article className="glass-panel rounded-[2rem] p-8 shadow-luxe">
                <span className="eyebrow">{study.category}</span>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em]">{study.title}</h2>
                <p className="mt-5 body-lg text-base">{study.overview}</p>
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-sm text-foreground/68">
                  <span>Read the full transformation</span>
                  <span aria-hidden="true">→</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
