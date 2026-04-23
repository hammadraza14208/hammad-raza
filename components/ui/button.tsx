import Link from "next/link";
import { cn } from "@/lib/utils";

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60";

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "inverse";
}) {
  return (
    <Link
      href={href}
      className={cn(
        baseClasses,
        variant === "primary"
          ? "bg-foreground text-background shadow-glow hover:-translate-y-0.5"
          : variant === "inverse"
            ? "bg-background text-foreground hover:-translate-y-0.5"
            : "glass-panel text-foreground hover:-translate-y-0.5",
      )}
    >
      {children}
    </Link>
  );
}
