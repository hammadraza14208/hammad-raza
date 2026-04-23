import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { ImageCard } from "@/components/ui/image-card";
import { blogPosts } from "@/content/data";
import { formatLongDate } from "@/lib/utils";

export const metadata = {
  title: "Blog",
  description: "Thoughts on digital luxury, motion, storytelling, and high-performance brand experiences.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Observations on luxury design, digital perception, and launch craft."
        description="Notes from our studio on what makes premium websites feel sharper, faster, and more emotionally resonant."
      />
      <section className="pb-20">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="overflow-hidden rounded-[2rem]">
                <ImageCard src={post.image} alt={post.title} />
                <div className="glass-panel mt-4 rounded-[2rem] p-8 shadow-luxe">
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                    {post.author} • {formatLongDate(post.date)}
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-foreground/70">{post.summary}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
