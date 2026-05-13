import { useState, useEffect } from "react";
import { Menu, BookOpen } from "lucide-react";
import { categories, getCourse } from "./courseData";
import { useProgress } from "./useProgress";
import { FolderSidebar } from "./FolderSidebar";
import { CourseViewer } from "./CourseViewer";
import { Badge } from "../Badge";

export function LearningPortal() {
  const { progress, toggleLesson, setLastViewed, isCompleted } = useProgress();
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (progress.lastCourseId && !selectedCourse) {
      const course = getCourse(progress.lastCourseId);
      if (course) setSelectedCourse(progress.lastCourseId);
    }
  }, []);

  const course = selectedCourse ? getCourse(selectedCourse) : null;

  return (
    <div className="min-h-screen bg-white pt-[72px]">
      <div className="h-[calc(100dvh-72px)] flex flex-col">
        {/* Top bar */}
        <div className="border-b border-gray-100 bg-white shrink-0">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between h-10">
            <div className="flex items-center gap-2">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 transition-colors">
                <Menu className="w-4 h-4" />
              </button>
              <BookOpen className="w-4 h-4 text-green-500" />
              <span className="text-xs font-bold text-gray-800">Learning Portal</span>
              {selectedCourse && (
                <>
                  <span className="text-gray-300 text-xs">/</span>
                  <span className="text-xs text-gray-500 truncate max-w-[120px] sm:max-w-[200px]">{course?.title}</span>
                </>
              )}
            </div>
            <div className="flex items-center gap-2">
              {progress.completedLessons.length > 0 && (
                <span className="text-[10px] text-gray-400">
                  {progress.completedLessons.length} lesson{progress.completedLessons.length !== 1 ? "s" : ""} done
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Main area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar overlay for mobile */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-40 bg-black/20 lg:hidden" onClick={() => setSidebarOpen(false)} />
          )}

          {/* Sidebar */}
          <div className={`w-64 lg:w-60 shrink-0 border-r border-gray-100 overflow-hidden bg-white ${sidebarOpen ? "fixed left-0 top-[72px] bottom-0 z-50 shadow-lg" : "hidden lg:block"}`}>
            <FolderSidebar
              categories={categories}
              selectedCourse={selectedCourse}
              onSelectCourse={(id) => { setSelectedCourse(id); setSidebarOpen(false); }}
              onClose={() => setSidebarOpen(false)}
            />
          </div>

          {/* Course viewer or welcome */}
          <div className="flex-1 overflow-hidden">
            {course ? (
              <CourseViewer
                key={course.id}
                course={course}
                completedLessons={progress.completedLessons}
                onToggleLesson={toggleLesson}
                onBack={() => setSelectedCourse(null)}
                onSetLastViewed={(lessonId) => setLastViewed(course.id, lessonId)}
                lastLessonId={progress.lastLessonId}
              />
            ) : (
              <div className="h-full flex items-center justify-center p-8">
                <div className="text-center max-w-md">
                  <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-green-500" />
                  </div>
                  <Badge>Free Learning Portal</Badge>
                  <h2 className="text-xl font-black text-gray-900 mt-4 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Welcome to WebCare Learning
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    Browse courses in the sidebar. Select a category, pick a course, and start learning step-by-step. Your progress is saved automatically.
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-left">
                    {categories.slice(0, 4).map((cat) => (
                      <div key={cat.id} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                        <p className="font-semibold text-gray-900 text-xs">{cat.label}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">{cat.courses.length} courses</p>
                      </div>
                    ))}
                  </div>
                  {progress.lastCourseId && (
                    <button
                      onClick={() => setSelectedCourse(progress.lastCourseId)}
                      className="mt-6 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-colors"
                    >
                      Resume Where You Left Off
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
