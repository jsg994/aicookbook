import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI Cookbook — Practical AI for Developers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
      <div style={{ fontSize: 80, marginBottom: 24 }}>🍳</div>
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          color: "#1a1612",
          lineHeight: 1.1,
          marginBottom: 24,
        }}
      >
        AI Cookbook
      </div>
      <div style={{ fontSize: 32, color: "#7a6f66", maxWidth: 700 }}>
        Practical AI tutorials for developers building real apps.
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 80,
          right: 80,
          fontSize: 24,
          color: "#db8428",
          fontWeight: 600,
        }}
      >
        aicookbook.dev
      </div>
    </div>,
    size,
  );
}
