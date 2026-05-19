# AI Cookbook — aicookbook.dev

Practical AI tutorials for developers. Built with Next.js, Tailwind, and MDX.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Writing a New Post

Create a `.mdx` file in `content/posts/`:

```mdx
---
title: "Your Post Title"
description: "A short description for SEO and card previews."
date: "2024-05-15"
tags: ["nextjs", "openai", "rag"]
---

Your content here...
```

That's it. The post will automatically appear on the homepage and posts listing.

### Frontmatter Fields

| Field | Required | Description |
|---|---|---|
| `title` | ✅ | Post title |
| `description` | ✅ | Used in SEO meta and post cards |
| `date` | ✅ | ISO format: `YYYY-MM-DD` |
| `tags` | ✅ | Array of lowercase strings |
| `draft` | ❌ | Set to `true` to hide from listings |

## Deployment

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add your domain `aicookbook.dev` in Vercel's domain settings
4. Done — every `git push` auto-deploys

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Content**: MDX files in `content/posts/`
- **Hosting**: Vercel (free tier)
- **Fonts**: Lora (display) + DM Sans (body) + DM Mono (code)

## Monetization

- Add Ezoic once you hit 10k monthly visits
- Affiliate links go in `app/tools/page.tsx`
- Newsletter signup in `app/newsletter/page.tsx`
