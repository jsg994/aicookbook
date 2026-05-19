import { ImageResponse } from "next/og";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export const alt = "AI Cookbook";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default function OGImage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  const title = post?.title ?? "AI Cookbook";
  const tags = post?.tags ?? [];

  return new ImageResponse(
    <div
      style={{
        background: "#fdf8f0",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 32,
        }}
      >
        <span style={{ fontSize: 36 }}>🍳</span>
        <span style={{ fontSize: 28, color: "#db8428", fontWeight: 600 }}>
          AI Cookbook
        </span>
      </div>

      <div
        style={{
          fontSize: title.length > 50 ? 48 : 56,
          fontWeight: 700,
          color: "#1a1612",
          lineHeight: 1.15,
          marginBottom: 32,
          maxWidth: 900,
        }}
      >
        {title}
      </div>

      {tags.length > 0 && (
        <div style={{ display: "flex", gap: 12 }}>
          {tags.slice(0, 4).map((tag) => (
            <div
              key={tag}
              style={{
                background: "#faefd9",
                color: "#a9531a",
                padding: "6px 16px",
                borderRadius: 999,
                fontSize: 22,
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      )}

      <div
        style={{
          position: "absolute",
          bottom: 80,
          right: 80,
          fontSize: 24,
          color: "#7a6f66",
        }}
      >
        aicookbook.dev
      </div>
    </div>,
    size,
  );
}
