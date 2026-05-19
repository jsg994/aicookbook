import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: { tag: string };
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  const tags = new Set(posts.flatMap((p) => p.tags));
  return Array.from(tags).map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `#${params.tag}`,
    description: `All AI Cookbook tutorials tagged with "${params.tag}".`,
  };
}

export default function TagPage({ params }: Props) {
  const allPosts = getAllPosts();
  const posts = allPosts.filter((p) => p.tags.includes(params.tag));

  if (posts.length === 0) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <Link
          href="/tags"
          className="text-sm text-ink-muted hover:text-ink transition-colors mb-4 inline-block"
        >
          ← All topics
        </Link>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-2">
          #{params.tag}
        </h1>
        <p className="text-ink-muted">
          {posts.length} tutorial{posts.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
