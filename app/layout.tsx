import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "AI Cookbook — Practical AI for Developers",
    template: "%s | AI Cookbook",
  },
  description:
    "Real, working code examples for developers building AI-powered apps. Tutorials, comparisons, and guides for LLMs, APIs, and modern AI tooling.",
  metadataBase: new URL("https://aicookbook.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aicookbook.dev",
    siteName: "AI Cookbook",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "dSApdkujfl-jSJHLFejyR-y6XAXVhikIAu5-X8c9PxE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
