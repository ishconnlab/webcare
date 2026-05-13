import { useState } from "react";
import { usePortfolio } from "../PortfolioContext";
import type { Project } from "../types";

export function ProjectsStep() {
  const { data, dispatch } = usePortfolio();
  const [editing, setEditing] = useState<Project | null>(null);

  const empty: Project = { id: "", title: "", description: "", image: "", tags: [], liveUrl: "", githubUrl: "" };
  const [form, setForm] = useState<Project>(empty);

  const save = () => {
    if (!form.title.trim()) return;
    if (editing) {
      dispatch({ type: "UPDATE_ITEM", section: "projects", id: editing.id, item: { ...form, id: editing.id } });
    } else {
      dispatch({ type: "ADD_ITEM", section: "projects", item: { ...form, id: crypto.randomUUID() } });
    }
    setForm(empty);
    setEditing(null);
  };

  const edit = (p: Project) => { setForm(p); setEditing(p); };
  const cancel = () => { setForm(empty); setEditing(null); };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {data.projects.map((p) => (
          <div key={p.id} className="flex items-start justify-between bg-gray-50 rounded-xl p-3 border border-gray-100">
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 text-sm">{p.title}</p>
              <p className="text-gray-500 text-xs mt-0.5 line-clamp-1">{p.description}</p>
              {p.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {p.tags.map((t) => <span key={t} className="px-2 py-0.5 bg-gray-200 text-gray-600 text-[10px] rounded">{t}</span>)}
                </div>
              )}
            </div>
            <div className="flex gap-1.5 ml-3">
              <button onClick={() => edit(p)} className="text-xs text-gray-400 hover:text-orange-500 px-2 py-1">Edit</button>
              <button onClick={() => dispatch({ type: "REMOVE_ITEM", section: "projects", id: p.id })} className="text-xs text-gray-400 hover:text-red-500 px-2 py-1">&times;</button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
        <p className="font-semibold text-gray-900 text-sm mb-3">{editing ? "Edit Project" : "Add Project"}</p>
        <div className="space-y-3">
          <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Project title" className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all" />
          <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Description..." rows={2} className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all resize-none" />
          <input type="text" value={form.tags.join(", ")} onChange={(e) => setForm({ ...form, tags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean) })} placeholder="Tags (comma separated)" className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all" />
          <div className="grid sm:grid-cols-2 gap-3">
            <input type="url" value={form.liveUrl} onChange={(e) => setForm({ ...form, liveUrl: e.target.value })} placeholder="Live URL (optional)" className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all" />
            <input type="url" value={form.githubUrl} onChange={(e) => setForm({ ...form, githubUrl: e.target.value })} placeholder="GitHub URL (optional)" className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all" />
          </div>
          <div className="flex gap-2">
            <button onClick={save} className="px-5 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-xl hover:bg-orange-600 transition-colors">{editing ? "Update" : "Add Project"}</button>
            {editing && <button onClick={cancel} className="px-4 py-2.5 border border-gray-200 text-gray-600 text-sm font-semibold rounded-xl hover:bg-gray-100 transition-colors">Cancel</button>}
          </div>
        </div>
      </div>
    </div>
  );
}
