import { useState, useRef } from "react";
import { Play, Copy, Check, Terminal, ExternalLink, Trash2 } from "lucide-react";

const langLabels: Record<string, string> = {
  python: "Python",
  javascript: "JavaScript",
  jsx: "JSX (React)",
  html: "HTML",
  css: "CSS",
  java: "Java",
  c: "C",
  cpp: "C++",
  yaml: "YAML",
  text: "Text",
};

const vscodeLinks: Record<string, string> = {
  python: "https://code.visualstudio.com/docs/languages/python",
  javascript: "https://code.visualstudio.com/docs/languages/javascript",
  jsx: "https://code.visualstudio.com/docs/languages/javascript",
  html: "https://code.visualstudio.com/docs/languages/html",
  css: "https://code.visualstudio.com/docs/languages/css",
  java: "https://code.visualstudio.com/docs/languages/java",
  c: "https://code.visualstudio.com/docs/languages/cpp",
  cpp: "https://code.visualstudio.com/docs/languages/cpp",
  yaml: "https://code.visualstudio.com/docs/languages/yaml",
};

const runnableLangs = ["javascript", "html"];

export function CodeEditor({ code, language }: { code: string; language?: string }) {
  const lang = language || "text";
  const [userCode, setUserCode] = useState(code);
  const [output, setOutput] = useState<string[]>([]);
  const [ran, setRan] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const canRun = runnableLangs.includes(lang);

  const runCode = () => {
    setOutput([]);
    setRan(true);
    setShowOutput(true);

    if (lang === "javascript") {
      const logs: string[] = [];
      const mockConsole = {
        log: (...args: unknown[]) => logs.push(args.map((a) => String(a)).join(" ")),
        error: (...args: unknown[]) => logs.push("Error: " + args.map((a) => String(a)).join(" ")),
        warn: (...args: unknown[]) => logs.push("Warning: " + args.map((a) => String(a)).join(" ")),
      };

      try {
        const fn = new Function("console", userCode);
        fn(mockConsole);
      } catch (e: unknown) {
        logs.push("Runtime Error: " + (e instanceof Error ? e.message : String(e)));
      }

      setOutput(logs.length > 0 ? logs : ["(no output)"]);
    } else if (lang === "html") {
      setOutput(["Rendered HTML output below:"]);
    }
  };

  const clearOutput = () => {
    setOutput([]);
    setRan(false);
    setShowOutput(false);
  };

  const copyForVSCode = async () => {
    const ext = lang === "python" ? "py" : lang === "javascript" || lang === "jsx" ? "js" : lang === "html" ? "html" : lang === "css" ? "css" : lang === "java" ? "java" : lang === "c" ? "c" : lang === "cpp" ? "cpp" : lang === "yaml" ? "yml" : "txt";
    const instructions = `// File: index.${ext}\n// Open this file in VSCode and install the ${langLabels[lang] || lang} extension.\n// ${vscodeLinks[lang] ? `Get the extension: ${vscodeLinks[lang]}` : "Use the appropriate extension from the marketplace."}\n\n`;
    await navigator.clipboard.writeText(instructions + userCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-3 rounded-lg border border-gray-200 overflow-hidden bg-white">
      <div className="flex items-center justify-between px-3 py-1.5 bg-gray-50 border-b border-gray-200">
        <span className="text-[11px] font-medium text-gray-500 flex items-center gap-1.5">
          <Terminal className="w-3 h-3" />
          Interactive {langLabels[lang] || lang}
        </span>
        <div className="flex items-center gap-1">
          {canRun && (
            <button onClick={runCode} className="flex items-center gap-1 text-[11px] text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 px-2 py-1 rounded-md transition-colors">
              <Play className="w-3 h-3" /> Run
            </button>
          )}
          <button onClick={copyForVSCode} className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-gray-600 transition-colors px-1.5 py-1">
            {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
            {copied ? "Copied!" : "Copy for VSCode"}
          </button>
          <a href={vscodeLinks[lang]} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[11px] text-blue-500 hover:text-blue-600 transition-colors px-1.5 py-1" title="VSCode extension guide">
            <ExternalLink className="w-3 h-3" /> VSCode
          </a>
        </div>
      </div>

      <textarea
        value={userCode}
        onChange={(e) => setUserCode(e.target.value)}
        className="w-full text-[13px] leading-relaxed p-3 font-mono text-gray-800 bg-white border-0 resize-y min-h-[100px] focus:outline-none focus:ring-0"
        spellCheck={false}
      />

      {lang === "html" && showOutput && (
        <div className="border-t border-gray-200">
          <div className="flex items-center justify-between px-3 py-1 bg-gray-50 border-b border-gray-200">
            <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Preview</span>
            <button onClick={clearOutput} className="text-[10px] text-gray-400 hover:text-gray-600 flex items-center gap-1">
              <Trash2 className="w-3 h-3" /> Clear
            </button>
          </div>
          <iframe
            ref={iframeRef}
            srcDoc={userCode}
            className="w-full h-48 bg-white"
            title="HTML Preview"
            sandbox="allow-scripts"
          />
        </div>
      )}

      {lang === "javascript" && showOutput && (
        <div className="border-t border-gray-200">
          <div className="flex items-center justify-between px-3 py-1 bg-gray-50 border-b border-gray-200">
            <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Console Output</span>
            <button onClick={clearOutput} className="text-[10px] text-gray-400 hover:text-gray-600 flex items-center gap-1">
              <Trash2 className="w-3 h-3" /> Clear
            </button>
          </div>
          <pre className="text-[13px] leading-relaxed p-3 font-mono text-gray-800 bg-gray-50 max-h-32 overflow-y-auto whitespace-pre-wrap">
            {output.map((line, i) => (
              <div key={i} className={line.startsWith("Error") ? "text-red-500" : line.startsWith("Warning") ? "text-yellow-600" : ""}>
                {line}
              </div>
            ))}
          </pre>
        </div>
      )}

      {!canRun && (
        <div className="px-3 py-2 bg-amber-50 border-t border-amber-100 text-[11px] text-amber-700 flex items-center gap-2">
          <Terminal className="w-3 h-3 shrink-0" />
          {lang === "python" ? "Python can't run in the browser. Copy the code and run it in VSCode or an online Python compiler." :
           lang === "java" ? "Java requires compilation. Copy the code, save as a .java file, and run `javac` and `java` in your terminal." :
           lang === "c" || lang === "cpp" ? "C/C++ requires compilation. Copy the code and run it in VSCode with a C++ compiler (gcc/g++)." :
           "Copy this code and open it in your preferred editor or IDE."}
        </div>
      )}
    </div>
  );
}
