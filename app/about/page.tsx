import { ImageCard } from "@/components/ui/image-card";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { team } from "@/content/data";

export const metadata = {
  title: "About",
  description: "Meet the team behind Lumina Atelier and the values shaping every engagement.",
};

const values = [
  "Restraint over noise",
  "Performance as polish",
  "Story before decoration",
  "Craft at every breakpoint",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A boutique team shaping premium launches for brands in motion."
        description="We built Lumina Atelier for founders and marketing leaders who need the web to signal taste, confidence, and scale without sacrificing performance."
      />
      <section className="pb-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <ImageCard
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80"
            alt="Elegant studio interior"
            priority
          />
          <div className="glass-panel rounded-[2rem] p-8 shadow-luxe">
            <SectionHeading
              eyebrow="Our Story"
              title="Small by design, exacting by default."
              description="Our team blends agency-level creative direction with startup-grade speed. That means fewer handoffs, sharper ideas, and a final result that feels considered all the way through."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="rounded-[1.5rem] border border-white/10 bg-black/5 p-5 text-sm font-medium dark:bg-white/5">
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-space pt-8">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Team"
            title="A focused collective of strategists, designers, and builders."
            description="Each engagement is led by senior talent with deep experience across luxury, fintech, wellness, and culture-led digital launches."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="glass-panel overflow-hidden rounded-[1.75rem] shadow-luxe">
                <ImageCard src={member.image} alt={member.name} />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold tracking-[-0.03em]">{member.name}</h2>
                  <p className="mt-1 text-sm uppercase tracking-[0.24em] text-accent">{member.role}</p>
                  <p className="mt-4 text-sm leading-7 text-foreground/70">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
