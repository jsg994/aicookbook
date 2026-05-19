import CopyButton from "./CopyButton";
import React from "react";

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (!node) return "";
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (typeof node === "object" && "props" in (node as React.ReactElement)) {
    return extractText((node as React.ReactElement).props.children);
  }
  return "";
}

export const mdxComponents = {
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    const codeString = extractText(children).trim();

    return (
      <div className="relative group">
        <CopyButton code={codeString} />
        <pre {...props}>{children}</pre>
      </div>
    );
  },
};
