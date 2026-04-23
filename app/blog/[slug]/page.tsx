import { notFound } from "next/navigation";
import { blogPosts } from "@/content/data";
import { formatLongDate } from "@/lib/utils";
import { ImageCard } from "@/components/ui/image-card";

type PageProps = {
  params?: Promise<{ slug?: string | string[] }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

async function getSlug(params: PageProps["params"]) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  return Array.isArray(slug) ? slug[0] : slug;
}

export async function generateMetadata({ params }: PageProps) {
  const slug = await getSlug(params);
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const slug = await getSlug(params);
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const currentPost = post;

  return (
    <article className="section-space">
      <div className="container-shell max-w-5xl space-y-8">
        <div className="space-y-5">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {currentPost.author} • {formatLongDate(currentPost.date)}
          </div>
          <h1 className="headline-xl">{currentPost.title}</h1>
          <p className="body-lg max-w-3xl">{currentPost.summary}</p>
        </div>
        <ImageCard src={currentPost.image} alt={currentPost.title} priority />
        <div className="glass-panel rounded-[2rem] p-8 shadow-luxe">
          <div className="space-y-6 text-base leading-8 text-foreground/80">
            {currentPost.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
