export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="section-space pb-14">
      <div className="container-shell">
        <div className="max-w-4xl space-y-6">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="headline-xl">{title}</h1>
          <p className="max-w-2xl body-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}
