import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export type Post = {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  readingTime: string
  content: string
  draft?: boolean
}

export type PostMeta = Omit<Post, 'content'>

function estimateReadingTime(content: string): string {
  const wpm = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wpm)
  return `${minutes} min read`
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return []

  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter((fn) => fn.endsWith('.mdx') || fn.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(mdx|md)$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title ?? 'Untitled',
        description: data.description ?? '',
        date: data.date ?? '',
        tags: data.tags ?? [],
        readingTime: estimateReadingTime(content),
        draft: data.draft ?? false,
      } as PostMeta
    })
    .filter((post) => !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))

  return allPosts
}

export function getPostBySlug(slug: string): Post | null {
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`)
  const mdPath = path.join(postsDirectory, `${slug}.md`)
  const fullPath = fs.existsSync(mdxPath) ? mdxPath : mdPath

  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title ?? 'Untitled',
    description: data.description ?? '',
    date: data.date ?? '',
    tags: data.tags ?? [],
    readingTime: estimateReadingTime(content),
    content,
    draft: data.draft ?? false,
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set(posts.flatMap((p) => p.tags))
  return Array.from(tags).sort()
}
