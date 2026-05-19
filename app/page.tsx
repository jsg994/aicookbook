import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default function HomePage() {
  const posts = getAllPosts().slice(0, 6)

  const topics = [
    { emoji: '🤖', label: 'LLM APIs', href: '/tags/llm' },
    { emoji: '⚡', label: 'Streaming', href: '/tags/streaming' },
    { emoji: '🧠', label: 'RAG', href: '/tags/rag' },
    { emoji: '🔧', label: 'Tooling', href: '/tags/tooling' },
    { emoji: '💸', label: 'Cost Optimization', href: '/tags/cost' },
    { emoji: '🚀', label: 'Deployment', href: '/tags/deployment' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-cream-dark border-b border-ink/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 tag mb-6 text-sm">
              <span>🍳</span>
              <span>Practical AI for developers</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink leading-tight mb-6">
              AI recipes that actually work in production
            </h1>
            <p className="text-ink-muted text-lg leading-relaxed mb-8">
              No hype, no fluff. Real code examples for building AI-powered apps —
              from streaming LLM responses to production-ready RAG pipelines.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/posts" className="btn-primary">
                Browse tutorials →
              </Link>
              <Link href="/newsletter" className="btn-secondary">
                Get weekly recipes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="font-display text-2xl font-semibold text-ink mb-6">Browse by topic</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {topics.map((topic) => (
            <Link
              key={topic.label}
              href={topic.href}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-ink/10
                         hover:border-brand-300 hover:bg-cream transition-all duration-150"
            >
              <span className="text-2xl">{topic.emoji}</span>
              <span className="font-medium text-ink text-sm">{topic.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent posts */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl font-semibold text-ink">Latest recipes</h2>
          <Link href="/posts" className="text-sm text-brand-600 hover:text-brand-700 font-medium">
            View all →
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="card text-center py-16 text-ink-muted">
            <p className="text-4xl mb-4">👨‍🍳</p>
            <p className="font-display text-xl text-ink mb-2">Recipes coming soon</p>
            <p className="text-sm">Subscribe to get notified when the first tutorials drop.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
