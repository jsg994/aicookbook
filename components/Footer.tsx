import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream-dark mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-bold text-ink mb-3">
              <span>🍳</span>
              <span>AI Cookbook</span>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed">
              Practical AI tutorials and guides for developers building real apps.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-ink text-sm mb-3 uppercase tracking-wide">Content</h4>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li><Link href="/posts" className="hover:text-ink transition-colors">All Tutorials</Link></li>
              <li><Link href="/tags" className="hover:text-ink transition-colors">Browse Topics</Link></li>
              <li><Link href="/tools" className="hover:text-ink transition-colors">AI Tools</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-ink text-sm mb-3 uppercase tracking-wide">Stay Updated</h4>
            <p className="text-sm text-ink-muted mb-3">New tutorials every week.</p>
            <Link href="/newsletter" className="btn-primary text-sm py-2">
              Get the newsletter →
            </Link>
          </div>
        </div>

        <div className="border-t border-ink/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} AI Cookbook. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-ink transition-colors">Privacy</Link>
            <Link href="/about" className="hover:text-ink transition-colors">About</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
