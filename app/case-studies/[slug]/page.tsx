import { notFound } from "next/navigation";
import { ImageCard } from "@/components/ui/image-card";
import { caseStudies } from "@/content/data";

type PageProps = {
  params?: Promise<{ slug?: string | string[] }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

async function getSlug(params: PageProps["params"]) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  return Array.isArray(slug) ? slug[0] : slug;
}

export async function generateMetadata({ params }: PageProps) {
  const slug = await getSlug(params);
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return {};
  }

  return {
    title: study.title,
    description: study.overview,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const slug = await getSlug(params);
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  const currentStudy = study;

  return (
    <section className="section-space">
      <div className="container-shell grid gap-10">
        <div className="max-w-4xl space-y-6">
          <span className="eyebrow">{currentStudy.category}</span>
          <h1 className="headline-xl">{currentStudy.title}</h1>
          <p className="body-lg max-w-2xl">{currentStudy.overview}</p>
        </div>
        <ImageCard src={currentStudy.image} alt={currentStudy.title} priority />
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="glass-panel rounded-[2rem] p-8 shadow-luxe lg:col-span-1">
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Problem</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75">{currentStudy.problem}</p>
          </article>
          <article className="glass-panel rounded-[2rem] p-8 shadow-luxe lg:col-span-1">
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Solution</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75">{currentStudy.solution}</p>
          </article>
          <article className="glass-panel rounded-[2rem] p-8 shadow-luxe lg:col-span-1">
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Results</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-foreground/75">
              {currentStudy.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
