import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Topics",
  description: "Browse AI Cookbook tutorials by topic.",
};

export default function TagsPage() {
  const posts = getAllPosts();

  const tagMap = posts.reduce<Record<string, number>>((acc, post) => {
    post.tags.forEach((tag) => {
      acc[tag] = (acc[tag] ?? 0) + 1;
    });
    return acc;
  }, {});

  const tags = Object.entries(tagMap).sort((a, b) => b[1] - a[1]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-3">
          Topics
        </h1>
        <p className="text-ink-muted">
          Browse tutorials by topic. More added every week.
        </p>
      </div>

      {tags.length === 0 ? (
        <div className="card text-center py-16 text-ink-muted">
          <p className="text-4xl mb-4">🏷️</p>
          <p className="font-display text-xl text-ink mb-2">No topics yet</p>
          <p className="text-sm">
            Tags will appear here as tutorials are published.
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          {tags.map(([tag, count]) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-ink/10 rounded-full
                         hover:border-brand-300 hover:bg-cream transition-all duration-150 group"
            >
              <span className="font-medium text-ink group-hover:text-brand-700 transition-colors">
                {tag}
              </span>
              <span className="text-xs text-ink-muted bg-cream-dark px-1.5 py-0.5 rounded-full">
                {count}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
