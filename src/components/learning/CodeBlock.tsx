import { useState } from "react";
import { Copy, Check } from "lucide-react";

const langColors: Record<string, string> = {
  python: "#3572A5",
  javascript: "#F7DF1E",
  jsx: "#61DAFB",
  html: "#E34F26",
  css: "#1572B6",
  java: "#B07219",
  c: "#555555",
  cpp: "#F34B7D",
  yaml: "#CB171E",
  text: "#6B7280",
};

export function CodeBlock({ code, language }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  const lang = language || "text";
  const color = langColors[lang] || "#6B7280";

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-3 rounded-lg border border-gray-200 overflow-hidden bg-white">
      <div className="flex items-center justify-between px-3 py-1.5 bg-gray-50 border-b border-gray-200">
        <span className="text-[11px] font-medium text-gray-500 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
          {lang}
        </span>
        <button onClick={copy} className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-gray-600 transition-colors">
          {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="text-[13px] leading-relaxed p-3 overflow-x-auto font-mono text-gray-800 bg-white">{code}</pre>
    </div>
  );
}
