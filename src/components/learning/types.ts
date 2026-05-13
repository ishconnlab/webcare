export interface Lesson {
  id: string;
  title: string;
  explanation: string;
  example?: string;
  exampleLang?: string;
  exercise?: string;
  code?: string;
  codeLang?: string;
}

export interface Level {
  id: string;
  label: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  icon: string;
  description: string;
  isProgramming: boolean;
  levels: Level[];
}

export interface Category {
  id: string;
  label: string;
  icon: string;
  courses: Course[];
}

export interface Progress {
  completedLessons: string[];
  lastCourseId: string | null;
  lastLessonId: string | null;
}
