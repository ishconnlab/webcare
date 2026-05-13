import { useRef } from "react";
import { usePortfolio } from "../PortfolioContext";

export function PersonalInfoStep() {
  const { data, dispatch } = usePortfolio();
  const fileRef = useRef<HTMLInputElement>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => dispatch({ type: "SET_IMAGE", field: "profileImage", value: reader.result as string });
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-2 border-gray-200">
            {data.personalInfo.profileImage ? (
              <img src={data.personalInfo.profileImage} alt="" className="w-full h-full object-cover" />
            ) : (
              <span className="text-2xl font-bold text-gray-300">?</span>
            )}
          </div>
          <button onClick={() => fileRef.current?.click()} className="absolute -bottom-1 -right-1 w-7 h-7 bg-orange-500 text-white rounded-full text-xs font-bold shadow-sm hover:bg-orange-600 transition-colors flex items-center justify-center">+</button>
          <input ref={fileRef} type="file" accept="image/*" onChange={handleImage} className="hidden" />
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{data.personalInfo.name || "Your Name"}</p>
          <p className="text-xs text-gray-400">Upload a profile photo</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name</label>
          <input type="text" value={data.personalInfo.name} onChange={(e) => dispatch({ type: "SET_PERSONAL", field: "name", value: e.target.value })} placeholder="John Doe" className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Role / Profession</label>
          <input type="text" value={data.personalInfo.role} onChange={(e) => dispatch({ type: "SET_PERSONAL", field: "role", value: e.target.value })} placeholder="Software Engineer" className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all" />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Bio / About</label>
        <textarea value={data.personalInfo.bio} onChange={(e) => dispatch({ type: "SET_PERSONAL", field: "bio", value: e.target.value })} placeholder="Tell us about yourself, your experience, and what you do..." rows={4} className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all resize-none" />
      </div>
    </div>
  );
}
