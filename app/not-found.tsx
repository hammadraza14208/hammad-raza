import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="container-shell text-center">
        <span className="eyebrow">404</span>
        <h1 className="mt-6 text-5xl font-semibold tracking-[-0.04em]">
          This page stepped out of frame.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl body-lg">
          The content you were looking for is unavailable or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
