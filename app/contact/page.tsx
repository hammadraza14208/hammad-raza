import { ContactForm } from "@/components/contact/contact-form";
import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Contact",
  description: "Start a premium website or brand transformation project with Lumina Atelier.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you’re building, launching, or ready to elevate."
        description="We work with founders, growth teams, and established brands looking for a digital presence that feels materially better than the category norm."
      />
      <section className="pb-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="glass-panel rounded-[2rem] p-8 shadow-luxe">
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">Studio Details</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-foreground/70">
              <p>{siteConfig.location}</p>
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.contactEmail}</p>
              <p>Typical engagement: brand systems, launch websites, product storytelling.</p>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
