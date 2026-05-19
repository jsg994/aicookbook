'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-ink/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold text-ink">
          <span className="text-2xl">🍳</span>
          <span>AI Cookbook</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-ink-muted">
          <Link href="/posts" className="hover:text-ink transition-colors">Tutorials</Link>
          <Link href="/tools" className="hover:text-ink transition-colors">Tools</Link>
          <Link href="/tags" className="hover:text-ink transition-colors">Topics</Link>
          <Link href="/newsletter" className="btn-primary text-sm py-2 px-4">
            Subscribe
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="sm:hidden p-2 rounded-lg hover:bg-cream-dark transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-ink mb-1 transition-transform" style={{ transform: open ? 'rotate(45deg) translate(2px, 6px)' : '' }} />
          <div className="w-5 h-0.5 bg-ink mb-1 transition-opacity" style={{ opacity: open ? 0 : 1 }} />
          <div className="w-5 h-0.5 bg-ink transition-transform" style={{ transform: open ? 'rotate(-45deg) translate(2px, -6px)' : '' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-ink/10 bg-cream px-4 py-4 flex flex-col gap-3 text-sm font-medium">
          <Link href="/posts" onClick={() => setOpen(false)} className="text-ink-muted hover:text-ink">Tutorials</Link>
          <Link href="/tools" onClick={() => setOpen(false)} className="text-ink-muted hover:text-ink">Tools</Link>
          <Link href="/tags" onClick={() => setOpen(false)} className="text-ink-muted hover:text-ink">Topics</Link>
          <Link href="/newsletter" onClick={() => setOpen(false)} className="btn-primary text-sm py-2 px-4 w-fit">Subscribe</Link>
        </div>
      )}
    </header>
  )
}
