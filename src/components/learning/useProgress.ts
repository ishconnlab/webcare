import { useState, useCallback } from "react";
import type { Progress } from "./types";

const STORAGE_KEY = "webcare-learning-progress";

function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { completedLessons: [], lastCourseId: null, lastLessonId: null };
}

function saveProgress(p: Progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(loadProgress);

  const toggleLesson = useCallback((lessonId: string) => {
    setProgress((prev) => {
      const completed = prev.completedLessons.includes(lessonId)
        ? prev.completedLessons.filter((id) => id !== lessonId)
        : [...prev.completedLessons, lessonId];
      const next = { ...prev, completedLessons: completed };
      saveProgress(next);
      return next;
    });
  }, []);

  const setLastViewed = useCallback((courseId: string, lessonId: string) => {
    setProgress((prev) => {
      const next = { ...prev, lastCourseId: courseId, lastLessonId: lessonId };
      saveProgress(next);
      return next;
    });
  }, []);

  const isCompleted = useCallback(
    (lessonId: string) => progress.completedLessons.includes(lessonId),
    [progress]
  );

  const progressPercent = useCallback(
    (total: number) => (total > 0 ? Math.round((progress.completedLessons.length / total) * 100) : 0),
    [progress]
  );

  const courseProgress = useCallback(
    (lessonIds: string[]) => {
      const done = lessonIds.filter((id) => progress.completedLessons.includes(id)).length;
      return lessonIds.length > 0 ? Math.round((done / lessonIds.length) * 100) : 0;
    },
    [progress]
  );

  return { progress, toggleLesson, setLastViewed, isCompleted, progressPercent, courseProgress };
}
