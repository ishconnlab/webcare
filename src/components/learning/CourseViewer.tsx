import { useState } from "react";
import { ChevronRight, ChevronDown, CheckCircle, Circle, ArrowLeft, BookOpen } from "lucide-react";
import type { Course } from "./types";
import { LessonView } from "./LessonView";

interface Props {
  course: Course;
  completedLessons: string[];
  onToggleLesson: (id: string) => void;
  onBack: () => void;
  onSetLastViewed: (lessonId: string) => void;
  lastLessonId: string | null;
}

export function CourseViewer({ course, completedLessons, onToggleLesson, onBack, onSetLastViewed, lastLessonId }: Props) {
  const allLessonIds = course.levels.flatMap((l) => l.lessons.map((ls) => ls.id));
  const completedCount = allLessonIds.filter((id) => completedLessons.includes(id)).length;
  const progressPct = allLessonIds.length > 0 ? Math.round((completedCount / allLessonIds.length) * 100) : 0;

  const [expandedLevels, setExpandedLevels] = useState<string[]>(() => {
    if (lastLessonId) {
      for (const level of course.levels) {
        if (level.lessons.some((l) => l.id === lastLessonId)) return [level.id];
      }
    }
    return [course.levels[0]?.id].filter(Boolean);
  });

  const [selectedLesson, setSelectedLesson] = useState<string | null>(() => {
    if (lastLessonId && allLessonIds.includes(lastLessonId)) return lastLessonId;
    return course.levels[0]?.lessons[0]?.id || null;
  });

  const toggleLevel = (id: string) => {
    setExpandedLevels((prev) => prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]);
  };

  const selectLesson = (id: string) => {
    setSelectedLesson(id);
    onSetLastViewed(id);
  };

  const currentLesson = selectedLesson
    ? course.levels.flatMap((l) => l.lessons).find((l) => l.id === selectedLesson)
    : null;

  const levelLessonCount = (levelId: string) => {
    const level = course.levels.find((l) => l.id === levelId);
    if (!level) return { total: 0, done: 0 };
    const ids = level.lessons.map((l) => l.id);
    return { total: ids.length, done: ids.filter((id) => completedLessons.includes(id)).length };
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Course header */}
      <div className="border-b border-gray-100 bg-white">
        <div className="flex items-center gap-2 p-3">
          <button onClick={onBack} className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </button>
        </div>
        <div className="px-3 pb-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">{course.icon}</span>
            <h2 className="text-sm font-bold text-gray-900">{course.title}</h2>
          </div>
          <p className="text-[11px] text-gray-500 mb-2">{course.description}</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full bg-green-500 transition-all" style={{ width: `${progressPct}%` }} />
            </div>
            <span className="text-[10px] text-gray-500 font-medium">{completedCount}/{allLessonIds.length}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Level/Lesson list */}
        <div className="w-56 shrink-0 border-r border-gray-100 overflow-y-auto bg-gray-50/50 hidden sm:block">
          <div className="p-2 space-y-1">
            {course.levels.map((level) => {
              const open = expandedLevels.includes(level.id);
              const { total, done } = levelLessonCount(level.id);
              return (
                <div key={level.id}>
                  <button onClick={() => toggleLevel(level.id)} className="w-full flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-left hover:bg-white transition-colors">
                    {open ? <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" /> : <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />}
                    <span className="text-[11px] font-semibold text-gray-700 flex-1 truncate">{level.label}</span>
                    <span className="text-[10px] text-gray-400">{done}/{total}</span>
                  </button>
                  {open && (
                    <div className="ml-2 space-y-0.5">
                      {level.lessons.map((ls) => {
                        const done = completedLessons.includes(ls.id);
                        return (
                          <button key={ls.id} onClick={() => selectLesson(ls.id)} className={`w-full flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-left transition-colors ${selectedLesson === ls.id ? "bg-white border border-gray-200 shadow-sm" : "hover:bg-white/50"}`}>
                            {done ? <CheckCircle className="w-3 h-3 text-green-500 shrink-0" /> : <Circle className="w-3 h-3 text-gray-300 shrink-0" />}
                            <span className={`text-[11px] truncate ${selectedLesson === ls.id ? "font-medium text-gray-900" : "text-gray-600"}`}>{ls.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Lesson content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {currentLesson ? (
            <LessonView
              lesson={currentLesson}
              isCompleted={completedLessons.includes(currentLesson.id)}
              onToggle={() => onToggleLesson(currentLesson.id)}
            />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400 text-sm">
              <div className="text-center">
                <BookOpen className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p>Select a lesson to begin</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile lesson selector */}
      <div className="sm:hidden border-t border-gray-100 p-2 flex gap-1 overflow-x-auto">
        {course.levels.flatMap((l) => l.lessons).map((ls) => {
          const active = selectedLesson === ls.id;
          const done = completedLessons.includes(ls.id);
          return (
            <button key={ls.id} onClick={() => selectLesson(ls.id)} className={`shrink-0 px-2.5 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${active ? "bg-green-500 text-white" : done ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-600"}`}>
              {ls.title.length > 15 ? ls.title.slice(0, 15) + "..." : ls.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
