import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { siteConfig } from "@/content/site";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-md text-sm leading-7 text-foreground/70">
            Luxury brand, product, and digital launch experiences for companies ready
            to look as exceptional as they perform.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground/55">
            Explore
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-foreground/70 hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground/55">
            Contact
          </h2>
          <div className="mt-4 space-y-3 text-sm text-foreground/70">
            <p>{siteConfig.location}</p>
            <a href={`mailto:${siteConfig.contactEmail}`} className="block hover:text-foreground">
              {siteConfig.contactEmail}
            </a>
            <a href={`tel:${siteConfig.phone}`} className="block hover:text-foreground">
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
