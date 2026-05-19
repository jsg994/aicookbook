import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight, rehypeSlug],
  },
};

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/posts"
          className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-ink mb-8 transition-colors"
        >
          ← All tutorials
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`} className="tag">
                {tag}
              </Link>
            ))}
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-ink-muted text-lg mb-4">{post.description}</p>
          <div className="flex items-center gap-4 text-sm text-ink-muted">
            <span>{formattedDate}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <style>{`
          .hljs { background: #1a1612; color: #f5ede0; border-radius: 0.75rem; padding: 1.25rem 1.5rem; overflow-x: auto; }
          .hljs-keyword { color: #e39e48; }
          .hljs-string { color: #87c78a; }
          .hljs-comment { color: #7a6f66; font-style: italic; }
          .hljs-number { color: #db8428; }
          .hljs-function, .hljs-title { color: #7ec8e3; }
          .hljs-params, .hljs-variable { color: #f5ede0; }
          .hljs-built_in, .hljs-attr { color: #e39e48; }
          .hljs-literal, .hljs-type { color: #db8428; }
          pre { margin: 1.5rem 0 !important; }
          pre code.hljs { font-family: var(--font-mono); font-size: 0.875rem; line-height: 1.7; }
          :not(pre) > code { font-family: var(--font-mono); background: #f5ede0; color: #a9531a; padding: 0.125rem 0.375rem; border-radius: 0.25rem; font-size: 0.875em; }
        `}</style>

        <div
          className="prose prose-lg max-w-none
          prose-headings:font-display prose-headings:text-ink
          prose-p:text-ink-muted prose-p:leading-relaxed
          prose-li:text-ink-muted
          prose-strong:text-ink
          prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-4 prose-blockquote:border-brand-400 prose-blockquote:bg-cream-dark prose-blockquote:rounded-r-lg
          prose-th:text-ink prose-th:font-semibold
          prose-td:text-ink-muted"
        >
          <MDXRemote source={post.content} options={mdxOptions} />
        </div>

        <div className="border-t border-ink/10 mt-16 pt-8">
          <Link href="/posts" className="btn-secondary">
            ← Browse more tutorials
          </Link>
        </div>
      </div>
    </div>
  );
}
