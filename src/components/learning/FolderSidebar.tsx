import { useState } from "react";
import { ChevronRight, ChevronDown, FileText, Folder, FolderOpen, Search, X } from "lucide-react";
import type { Category } from "./types";
import { searchCourses } from "./courseData";

interface Props {
  categories: Category[];
  selectedCourse: string | null;
  onSelectCourse: (id: string) => void;
  onClose?: () => void;
}

export function FolderSidebar({ categories, selectedCourse, onSelectCourse, onClose }: Props) {
  const [expanded, setExpanded] = useState<string[]>(["programming"]);
  const [search, setSearch] = useState("");

  const toggle = (id: string) => {
    setExpanded((prev) => prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]);
  };

  const searchResults = search.trim() ? searchCourses(search.trim()) : null;

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="p-3 border-b border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-bold text-gray-800 uppercase tracking-wider">Courses</h2>
          {onClose && (
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 lg:hidden">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="w-full pl-7 pr-2 py-1.5 text-[11px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400 transition-all"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
        {searchResults !== null ? (
          searchResults.length > 0 ? (
            <div className="space-y-0.5">
              <p className="text-[10px] text-gray-400 px-2 py-1.5">{searchResults.length} result(s)</p>
              {searchResults.map((r) => (
                <button key={r.courseId} onClick={() => { onSelectCourse(r.courseId); setSearch(""); }} className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left transition-colors text-xs ${selectedCourse === r.courseId ? "bg-green-50 text-green-700 font-medium" : "text-gray-700 hover:bg-gray-50"}`}>
                  <FileText className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                  <div className="min-w-0 flex-1">
                    <span className="block truncate">{r.courseTitle}</span>
                    <span className="block text-[10px] text-gray-400 truncate">{r.categoryLabel}</span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-[11px] text-gray-400 text-center py-4">No courses found</p>
          )
        ) : (
          categories.map((cat) => {
            const open = expanded.includes(cat.id);
            return (
              <div key={cat.id}>
                <button onClick={() => toggle(cat.id)} className="w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left hover:bg-gray-50 transition-colors group">
                  {open ? <ChevronDown className="w-3.5 h-3.5 text-gray-400 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />}
                  {open ? <FolderOpen className="w-4 h-4 text-green-500 shrink-0" /> : <Folder className="w-4 h-4 text-gray-400 shrink-0" />}
                  <span className="text-xs font-semibold text-gray-800 flex-1 truncate">{cat.label}</span>
                  <span className="text-[10px] text-gray-400">{cat.courses.length}</span>
                </button>
                {open && (
                  <div className="ml-3 pl-2 border-l border-gray-100 space-y-0.5">
                    {cat.courses.map((course) => (
                      <button key={course.id} onClick={() => onSelectCourse(course.id)} className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-colors ${selectedCourse === course.id ? "bg-green-50 text-green-700 font-medium" : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"}`}>
                        <FileText className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                        <span className="text-[11px] truncate">{course.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      <div className="p-3 border-t border-gray-100">
        <div className="flex items-center gap-2 text-[10px] text-gray-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          {categories.reduce((sum, c) => sum + c.courses.length, 0)} courses
        </div>
      </div>
    </div>
  );
}
