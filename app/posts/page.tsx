import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Tutorials',
  description: 'Browse all AI development tutorials and guides on AI Cookbook.',
}

export default function PostsPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-3">
          All Recipes
        </h1>
        <p className="text-ink-muted">
          {posts.length} tutorial{posts.length !== 1 ? 's' : ''} and counting.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="card text-center py-20 text-ink-muted">
          <p className="text-5xl mb-4">👨‍🍳</p>
          <p className="font-display text-xl text-ink mb-2">Nothing here yet</p>
          <p className="text-sm">Drop your first .mdx file in content/posts/ to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
