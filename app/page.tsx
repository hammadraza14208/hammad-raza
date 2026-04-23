import dynamic from "next/dynamic";
import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { Showcase } from "@/components/home/showcase";
import { CtaBand } from "@/components/home/cta-band";

const Testimonials = dynamic(
  () => import("@/components/home/testimonials").then((mod) => mod.Testimonials),
);
const SocialFeed = dynamic(
  () => import("@/components/home/social-feed").then((mod) => mod.SocialFeed),
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Showcase />
      <Testimonials />
      <SocialFeed />
      <CtaBand />
    </>
  );
}
