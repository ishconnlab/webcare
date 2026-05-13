import { useState } from "react";
import { usePortfolio } from "../PortfolioContext";
import type { Experience, Education } from "../types";

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className = "", ...rest } = props;
  return (
    <input {...rest} className={`w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all ${className}`} />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const { className = "", ...rest } = props;
  return (
    <textarea {...rest} className={`w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all resize-none ${className}`} />
  );
}

const emptyExp: Experience = { id: "", company: "", role: "", startDate: "", endDate: "", description: "", current: false };
const emptyEdu: Education = { id: "", institution: "", degree: "", field: "", startDate: "", endDate: "" };

export function ExperienceEducationStep() {
  const { data, dispatch } = usePortfolio();
  const [expForm, setExpForm] = useState<Experience>(emptyExp);
  const [editingExp, setEditingExp] = useState<string | null>(null);
  const [eduForm, setEduForm] = useState<Education>(emptyEdu);
  const [editingEdu, setEditingEdu] = useState<string | null>(null);

  const saveExp = () => {
    if (!expForm.company.trim() || !expForm.role.trim()) return;
    if (editingExp) {
      dispatch({ type: "UPDATE_ITEM", section: "experience", id: editingExp, item: { ...expForm, id: editingExp } });
    } else {
      dispatch({ type: "ADD_ITEM", section: "experience", item: { ...expForm, id: crypto.randomUUID() } });
    }
    setExpForm(emptyExp);
    setEditingExp(null);
  };

  const saveEdu = () => {
    if (!eduForm.institution.trim() || !eduForm.degree.trim()) return;
    if (editingEdu) {
      dispatch({ type: "UPDATE_ITEM", section: "education", id: editingEdu, item: { ...eduForm, id: editingEdu } });
    } else {
      dispatch({ type: "ADD_ITEM", section: "education", item: { ...eduForm, id: crypto.randomUUID() } });
    }
    setEduForm(emptyEdu);
    setEditingEdu(null);
  };

  const startEditExp = (e: Experience) => { setExpForm(e); setEditingExp(e.id); };
  const cancelEditExp = () => { setExpForm(emptyExp); setEditingExp(null); };
  const startEditEdu = (e: Education) => { setEduForm(e); setEditingEdu(e.id); };
  const cancelEditEdu = () => { setEduForm(emptyEdu); setEditingEdu(null); };

  return (
    <div className="space-y-8">
      {/* Experience */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-sm">Experience</h3>
          <span className="text-[11px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{data.experience.length} entries</span>
        </div>

        <div className="space-y-2 mb-4">
          {data.experience.map((e) => (
            <div key={e.id} className="flex items-start justify-between bg-gray-50 rounded-xl p-3 border border-gray-100 hover:border-gray-200 transition-all group">
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">{e.role} <span className="text-gray-400 font-normal">at {e.company}</span></p>
                <p className="text-gray-400 text-xs mt-0.5">{e.startDate} - {e.current ? "Present" : e.endDate}</p>
                {e.description && <p className="text-gray-500 text-xs mt-1 line-clamp-1">{e.description}</p>}
              </div>
              <div className="flex gap-1 ml-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => startEditExp(e)} className="text-[11px] text-gray-400 hover:text-orange-500 px-1.5 py-1">Edit</button>
                <button onClick={() => dispatch({ type: "REMOVE_ITEM", section: "experience", id: e.id })} className="text-[11px] text-gray-400 hover:text-red-500 px-1.5 py-1">&times;</button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-3">
          <p className="font-semibold text-gray-700 text-xs">{editingExp ? "Edit Experience" : "Add Experience"}</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-semibold text-gray-500 mb-1 uppercase tracking-wider">Company</label>
              <Input value={expForm.company} onChange={(e) => setExpForm({ ...expForm, company: e.target.value })} placeholder="Company name" />
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-gray-500 mb-1 uppercase tracking-wider">Role</label>
              <Input value={expForm.role} onChange={(e) => setExpForm({ ...expForm, role: e.target.value })} placeholder="Job title" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-semibold text-gray-500 mb-1 uppercase tracking-wider">Start Date</label>
              <Input type="month" value={expForm.startDate} onChange={(e) => setExpForm({ ...expForm, startDate: e.target.value })} />
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-gray-500 mb-1 uppercase tracking-wider">End Date</label>
              <div className="flex items-center gap-2">
                <Input type="month" value={expForm.endDate} onChange={(e) => setExpForm({ ...expForm, endDate: e.target.value })} disabled={expForm.current} />
                <label className="flex items-center gap-1.5 text-xs text-gray-600 whitespace-nowrap shrink-0">
                  <input type="checkbox" checked={expForm.current} onChange={(e) => setExpForm({ ...expForm, current: e.target.checked })} className="accent-orange-500 w-3.5 h-3.5" /> Current
                </label>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-semibold text-gray-500 mb-1 uppercase tracking-wider">Description</label>
            <Textarea value={expForm.description} onChange={(e) => setExpForm({ ...expForm, description: e.target.value })} placeholder="Describe your responsibilities and achievements..." rows={2} />
          </div>
          <div className="flex gap-2">
            <button onClick={saveExp} className="px-5 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-xl hover:bg-orange-600 transition-colors">
              {editingExp ? "Update" : "Add Experience"}
            </button>
            {editingExp && (
              <button onClick={cancelEditExp} className="px-4 py-2.5 border border-gray-200 text-gray-600 text-sm font-semibold rounded-xl hover:bg-gray-100 transition-colors">Cancel</button>
            )}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="border-t border-gray-100 pt-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-sm">Education</h3>
          <span className="text-[11px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{data.education.length} entries</span>
        </div>

        <div className="space-y-2 mb-4">
          {data.education.map((e) => (
            <div key={e.id} className="flex items-start justify-between bg-gray-50 rounded-xl p-3 border border-gray-100 hover:border-gray-200 transition-all group">
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">{e.degree} in {e.field}</p>
                <p className="text-gray-400 text-xs mt-0.5">{e.institution} &middot; {e.startDate} - {e.endDate}</p>
              </div>
              <div className="flex gap-1 ml-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => startEditEdu(e)} className="text-[11px] text-gray-400 hover:text-orange-500 px-1.5 py-1">Edit</button>
                <button onClick={() => dispatch({ type: "REMOVE_ITEM", section: "education", id: e.id })} className="text-[11px] text-gray-400 hover:text-red-500 px-1.5 py-1">&times;</button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-3">
          <p className="font-semibold text-gray-700 text-xs">{editingEdu ? "Edit Education" : "Add Education"}</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-semibold text-gray-500 mb-1 uppercase tracking-wider">Institution</label>
              <Input value={eduForm.institution} onChange={(e) => setEduForm({ ...eduForm, institution: e.target.value })} placeholder="University / School" />
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-gray-500 mb-1 uppercase tracking-wider">Degree</label>
              <Input value={eduForm.degree} onChange={(e) => setEduForm({ ...eduForm, degree: e.target.value })} placeholder="Bachelor's, Master's..." />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-semibold text-gray-500 mb-1 uppercase tracking-wider">Field of Study</label>
            <Input value={eduForm.field} onChange={(e) => setEduForm({ ...eduForm, field: e.target.value })} placeholder="Computer Science, Business..." />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-semibold text-gray-500 mb-1 uppercase tracking-wider">Start Date</label>
              <Input type="month" value={eduForm.startDate} onChange={(e) => setEduForm({ ...eduForm, startDate: e.target.value })} />
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-gray-500 mb-1 uppercase tracking-wider">End Date</label>
              <Input type="month" value={eduForm.endDate} onChange={(e) => setEduForm({ ...eduForm, endDate: e.target.value })} />
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={saveEdu} className="px-5 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-xl hover:bg-orange-600 transition-colors">
              {editingEdu ? "Update" : "Add Education"}
            </button>
            {editingEdu && (
              <button onClick={cancelEditEdu} className="px-4 py-2.5 border border-gray-200 text-gray-600 text-sm font-semibold rounded-xl hover:bg-gray-100 transition-colors">Cancel</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
