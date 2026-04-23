export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-5">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="headline-lg">{title}</h2>
      <p className="body-lg">{description}</p>
    </div>
  );
}
