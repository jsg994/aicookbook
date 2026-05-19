import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

export default function PostCard({ post }: { post: PostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="card group">
      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.slice(0, 3).map((tag) => (
          <Link key={tag} href={`/tags/${tag}`} className="tag hover:bg-brand-200 transition-colors">
            {tag}
          </Link>
        ))}
      </div>

      <h2 className="font-display text-xl font-semibold text-ink mb-2 group-hover:text-brand-700 transition-colors">
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>

      <p className="text-ink-muted text-sm leading-relaxed mb-4 line-clamp-2">
        {post.description}
      </p>

      <div className="flex items-center justify-between text-xs text-ink-muted">
        <span>{formattedDate}</span>
        <span>{post.readingTime}</span>
      </div>
    </article>
  )
}
