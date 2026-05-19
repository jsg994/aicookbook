import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter — Coming Soon",
  description: "The AI Cookbook newsletter is coming soon.",
};

export default function NewsletterPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-32 text-center">
      <p className="text-5xl mb-6">🍳</p>
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
        Newsletter coming soon
      </h1>
      <p className="text-ink-muted text-lg leading-relaxed">
        We're putting the finishing touches on a weekly newsletter for AI
        developers. Check back soon.
      </p>
    </div>
  );
}
