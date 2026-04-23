import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Lumina Atelier home">
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-sm font-semibold text-accent">
        LA
      </span>
      <span className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground/88">
        Lumina Atelier
      </span>
    </Link>
  );
}
