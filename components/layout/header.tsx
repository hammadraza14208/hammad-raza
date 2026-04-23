"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-xl">
      <div className="container-shell flex min-h-20 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navigation.map((item) => {
            const isActive =
              item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-link relative pb-1",
                  isActive && "text-foreground",
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform",
                    isActive && "scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background hover:-translate-y-0.5 sm:inline-flex"
          >
            Start a Project
          </Link>
          <ThemeToggle />
        </div>
      </div>
      <div className="container-shell flex gap-3 overflow-x-auto pb-4 md:hidden" aria-label="Mobile navigation">
        {navigation.map((item) => {
          const isActive =
            item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-medium",
                isActive
                  ? "border-accent/40 bg-accent/10 text-foreground"
                  : "border-white/10 text-foreground/68",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
