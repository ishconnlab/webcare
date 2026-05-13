import { CheckCircle, Circle } from "lucide-react";
import type { Lesson } from "./types";
import { CodeBlock } from "./CodeBlock";

interface Props {
  lesson: Lesson;
  isCompleted: boolean;
  onToggle: () => void;
}

export function LessonView({ lesson, isCompleted, onToggle }: Props) {
  return (
    <div className="space-y-4">
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

      <p className="text-xs text-gray-600 leading-relaxed">{lesson.explanation}</p>

      {lesson.code && <CodeBlock code={lesson.code} language={lesson.codeLang} />}

      {lesson.example && !lesson.code && (
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-3">
          <p className="text-[11px] font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Example</p>
          <p className="text-sm text-gray-700">{lesson.example}</p>
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
