import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Dev Tools",
  description:
    "The best tools for developers building AI-powered apps — APIs, SDKs, databases, and infrastructure.",
};

type Tool = {
  name: string;
  description: string;
  tags: string[];
  url: string;
  badge?: string;
};

const tools: Record<string, Tool[]> = {
  "LLM APIs": [
    {
      name: "OpenAI",
      description:
        "The most widely used LLM API. GPT-4o and GPT-4o mini cover most use cases. Best-in-class function calling and JSON mode.",
      tags: ["LLM", "API"],
      url: "https://platform.openai.com",
      badge: "Most Popular",
    },
    {
      name: "Anthropic",
      description:
        "Claude models excel at long documents, coding, and instruction following. 200k context window is the largest available.",
      tags: ["LLM", "API"],
      url: "https://anthropic.com",
      badge: "Best for Coding",
    },
    {
      name: "Replicate",
      description:
        "Run open-source models (Llama, Mistral, Stable Diffusion) via API without managing infrastructure. Pay per second.",
      tags: ["LLM", "Open Source", "API"],
      url: "https://replicate.com",
    },
    {
      name: "Groq",
      description:
        "Blazing fast inference for open-source models. If latency matters, Groq runs Llama and Mixtral at speeds nothing else matches.",
      tags: ["LLM", "Fast Inference"],
      url: "https://groq.com",
      badge: "Fastest Inference",
    },
  ],
  "SDKs & Frameworks": [
    {
      name: "Vercel AI SDK",
      description:
        "The easiest way to add streaming AI to a Next.js app. Provider-agnostic — works with OpenAI, Anthropic, and more out of the box.",
      tags: ["SDK", "Next.js", "Streaming"],
      url: "https://sdk.vercel.ai",
      badge: "Recommended",
    },
    {
      name: "LangChain",
      description:
        "The most popular framework for building LLM pipelines. Great for RAG, agents, and chaining complex workflows.",
      tags: ["Framework", "RAG", "Agents"],
      url: "https://langchain.com",
    },
    {
      name: "LlamaIndex",
      description:
        'Purpose-built for RAG and document Q&A. If your use case is "chat with your data", LlamaIndex handles it more cleanly than LangChain.',
      tags: ["Framework", "RAG"],
      url: "https://llamaindex.ai",
    },
  ],
  "Vector Databases": [
    {
      name: "Pinecone",
      description:
        "The gold standard for vector search. Fully managed, scales to billions of vectors, and has a generous free tier to get started.",
      tags: ["Vector DB", "Managed"],
      url: "https://pinecone.io",
      badge: "Most Popular",
    },
    {
      name: "Supabase (pgvector)",
      description:
        "If you're already using Supabase, pgvector gives you vector search without adding another service. Good enough for most apps.",
      tags: ["Vector DB", "Postgres"],
      url: "https://supabase.com",
    },
    {
      name: "Qdrant",
      description:
        "Open-source vector database you can self-host or use managed. Great performance and a clean API.",
      tags: ["Vector DB", "Open Source"],
      url: "https://qdrant.tech",
    },
  ],
  "Infrastructure & Deployment": [
    {
      name: "Vercel",
      description:
        "The easiest way to deploy Next.js. Free tier is generous, edge functions are fast, and the DX is unmatched.",
      tags: ["Hosting", "Next.js"],
      url: "https://vercel.com",
      badge: "Recommended",
    },
    {
      name: "Railway",
      description:
        "Deploy backends, databases, and workers with almost no config. Great for when you need more than serverless functions.",
      tags: ["Hosting", "Backend"],
      url: "https://railway.app",
    },
    {
      name: "Supabase",
      description:
        "Postgres database, auth, storage, and edge functions in one. The fastest way to add a backend to an AI app.",
      tags: ["Database", "Auth", "Backend"],
      url: "https://supabase.com",
    },
  ],
  "Observability & Evals": [
    {
      name: "LangSmith",
      description:
        "Trace, debug, and evaluate LLM calls in production. Essential once you have real users hitting your AI features.",
      tags: ["Observability", "Evals"],
      url: "https://smith.langchain.com",
    },
    {
      name: "Helicone",
      description:
        "Lightweight proxy that logs all your LLM API calls. Easy to drop in and gives you cost tracking and latency metrics immediately.",
      tags: ["Observability", "Cost Tracking"],
      url: "https://helicone.ai",
      badge: "Easy Setup",
    },
  ],
};

export default function ToolsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-3">
          AI Dev Tools
        </h1>
        <p className="text-ink-muted text-lg">
          The tools worth knowing about when building AI-powered apps — curated
          and opinionated.
        </p>
      </div>

      <div className="space-y-14">
        {Object.entries(tools).map(([category, items]) => (
          <section key={category}>
            <h2 className="font-display text-xl font-semibold text-ink mb-4 pb-2 border-b border-ink/10">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group flex flex-col gap-3 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display font-semibold text-ink group-hover:text-brand-700 transition-colors">
                      {tool.name}
                    </h3>
                    {tool.badge && (
                      <span className="tag shrink-0">{tool.badge}</span>
                    )}
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed flex-1">
                    {tool.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-xs text-ink-muted bg-cream-dark px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="card mt-14 text-center py-10">
        <p className="text-2xl mb-3">🔧</p>
        <h3 className="font-display font-semibold text-ink mb-2">
          Missing a tool?
        </h3>
        <p className="text-sm text-ink-muted mb-4">
          Know something that belongs here? I'm always looking for tools worth
          recommending.
        </p>
        <Link href="/newsletter" className="btn-primary text-sm">
          Suggest a tool →
        </Link>
      </div>
    </div>
  );
}
