import { useState } from "react";
import { usePortfolio } from "../PortfolioContext";

export function SkillsServicesStep() {
  const { data, dispatch } = usePortfolio();
  const [skillName, setSkillName] = useState("");
  const [skillLevel, setSkillLevel] = useState(80);
  const [serviceTitle, setServiceTitle] = useState("");
  const [serviceDesc, setServiceDesc] = useState("");

  const addSkill = () => {
    if (!skillName.trim()) return;
    dispatch({ type: "ADD_ITEM", section: "skills", item: { id: crypto.randomUUID(), name: skillName.trim(), level: skillLevel } });
    setSkillName("");
  };

  const addService = () => {
    if (!serviceTitle.trim() || !serviceDesc.trim()) return;
    dispatch({ type: "ADD_ITEM", section: "services", item: { id: crypto.randomUUID(), title: serviceTitle.trim(), description: serviceDesc.trim() } });
    setServiceTitle("");
    setServiceDesc("");
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-bold text-gray-900 text-sm mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {data.skills.map((s) => (
            <span key={s.id} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 text-orange-700 text-xs font-medium rounded-lg">
              {s.name} ({s.level}%)
              <button onClick={() => dispatch({ type: "REMOVE_ITEM", section: "skills", id: s.id })} className="text-orange-400 hover:text-orange-600">&times;</button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input type="text" value={skillName} onChange={(e) => setSkillName(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addSkill()} placeholder="Skill name..." className="flex-1 px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all" />
          <input type="range" min={10} max={100} step={10} value={skillLevel} onChange={(e) => setSkillLevel(Number(e.target.value))} className="w-20 accent-orange-500" />
          <span className="text-xs text-gray-500 w-8 text-right pt-2.5">{skillLevel}%</span>
          <button onClick={addSkill} className="px-4 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-xl hover:bg-orange-600 transition-colors">Add</button>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-6">
        <h3 className="font-bold text-gray-900 text-sm mb-3">Services</h3>
        <div className="space-y-3 mb-3">
          {data.services.map((s) => (
            <div key={s.id} className="flex items-start justify-between bg-gray-50 rounded-xl p-3">
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">{s.title}</p>
                <p className="text-gray-500 text-xs mt-0.5">{s.description}</p>
              </div>
              <button onClick={() => dispatch({ type: "REMOVE_ITEM", section: "services", id: s.id })} className="text-gray-400 hover:text-red-500 text-sm ml-2">&times;</button>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <input type="text" value={serviceTitle} onChange={(e) => setServiceTitle(e.target.value)} placeholder="Service title..." className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all" />
          <div className="flex gap-2">
            <input type="text" value={serviceDesc} onChange={(e) => setServiceDesc(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addService()} placeholder="Service description..." className="flex-1 px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all" />
            <button onClick={addService} className="px-4 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-xl hover:bg-orange-600 transition-colors shrink-0">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}
