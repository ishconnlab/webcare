import { CheckCircle, Circle, Lightbulb, Zap, Monitor, Smartphone, Tablet } from "lucide-react";
import type { Lesson } from "./types";
import { CodeEditor } from "./CodeEditor";

interface Props {
  lesson: Lesson;
  isCompleted: boolean;
  onToggle: () => void;
  cheatSheet?: string[];
}

export function LessonView({ lesson, isCompleted, onToggle, cheatSheet }: Props) {
  const hasCode = lesson.code || lesson.editorCode;
  const displayCode = lesson.editorCode || lesson.code || "";
  const displayLang = lesson.editorLang || lesson.codeLang;

  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-bold text-gray-900 leading-snug">{lesson.title}</h3>
        <button
          onClick={onToggle}
          className={`shrink-0 mt-0.5 transition-colors ${isCompleted ? "text-green-500" : "text-gray-300 hover:text-green-400"}`}
          title={isCompleted ? "Mark as incomplete" : "Mark as completed"}
        >
          {isCompleted ? <CheckCircle className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
        </button>
      </div>

      {lesson.explanation && (
        <p className="text-xs text-gray-600 leading-relaxed">{lesson.explanation}</p>
      )}

      {lesson.bullets && lesson.bullets.length > 0 && (
        <div className="bg-blue-50/60 rounded-lg border border-blue-100 p-3">
          <div className="flex items-center gap-1.5 mb-2">
            <Lightbulb className="w-3.5 h-3.5 text-blue-500" />
            <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider">Key Points</span>
          </div>
          <ul className="space-y-1.5">
            {lesson.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-[12px] text-gray-700 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      )}

      {lesson.mockup && (
        <div className="rounded-lg border border-gray-200 overflow-hidden bg-white">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border-b border-gray-200">
            <Monitor className="w-3 h-3 text-gray-400" />
            <Tablet className="w-3 h-3 text-gray-400" />
            <Smartphone className="w-3 h-3 text-gray-400" />
            <span className="text-[10px] font-medium text-gray-500 ml-1 uppercase tracking-wider">Mockup Preview</span>
          </div>
          <div className="p-4 flex justify-center bg-gray-50/50">
            <div className="max-w-full overflow-x-auto" dangerouslySetInnerHTML={{ __html: lesson.mockup }} />
          </div>
        </div>
      )}

      {lesson.example && !hasCode && (
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-3">
          <p className="text-[11px] font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Example</p>
          <p className="text-sm text-gray-700">{lesson.example}</p>
        </div>
      )}

      {hasCode && (
        <CodeEditor code={displayCode} language={displayLang} />
      )}

      {cheatSheet && cheatSheet.length > 0 && (
        <div className="bg-purple-50/60 rounded-lg border border-purple-100 p-3">
          <div className="flex items-center gap-1.5 mb-2">
            <Zap className="w-3.5 h-3.5 text-purple-500" />
            <span className="text-[11px] font-semibold text-purple-700 uppercase tracking-wider">Level Cheat Sheet</span>
          </div>
          <ul className="space-y-1">
            {cheatSheet.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-[12px] text-gray-700 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                <code className="text-[11px] bg-purple-100 px-1 rounded text-purple-700 shrink-0 font-mono">{s.split("—")[0]?.trim()}</code>
                <span>{s.includes("—") ? s.split("—").slice(1).join("—").trim() : ""}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {lesson.exercise && (
        <div className="bg-green-50 rounded-lg border border-green-100 p-3">
          <p className="text-[11px] font-semibold text-green-600 mb-1 uppercase tracking-wider">Try it yourself</p>
          <p className="text-xs text-green-800">{lesson.exercise}</p>
        </div>
      )}
    </div>
  );
}
