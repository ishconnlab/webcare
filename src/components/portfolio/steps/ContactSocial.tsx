import { useState } from "react";
import { usePortfolio } from "../PortfolioContext";

const platforms = [
  { value: "github", label: "GitHub" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "twitter", label: "Twitter / X" },
  { value: "dribbble", label: "Dribbble" },
  { value: "behance", label: "Behance" },
  { value: "youtube", label: "YouTube" },
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
  { value: "medium", label: "Medium" },
  { value: "devto", label: "Dev.to" },
  { value: "website", label: "Personal Website" },
  { value: "other", label: "Other" },
];

export function ContactSocialStep() {
  const { data, dispatch } = usePortfolio();
  const [platform, setPlatform] = useState("github");
  const [url, setUrl] = useState("");

  const addSocial = () => {
    if (!url.trim()) return;
    dispatch({ type: "ADD_SOCIAL", item: { id: crypto.randomUUID(), platform, url: url.trim() } });
    setUrl("");
  };

  const handleContact = (field: string, value: string) => {
    dispatch({ type: "SET_CONTACT", field, value });
  };

  const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input {...props} className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all" />
  );

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-bold text-gray-900 text-sm mb-3">Contact Information</h3>
        <div className="grid sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email</label>
            <Input type="email" value={data.contact.email} onChange={(e) => handleContact("email", e.target.value)} placeholder="hello@example.com" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone</label>
            <Input type="tel" value={data.contact.phone} onChange={(e) => handleContact("phone", e.target.value)} placeholder="+1 234 567 890" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Location</label>
            <Input type="text" value={data.contact.location} onChange={(e) => handleContact("location", e.target.value)} placeholder="Kigali, Rwanda" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-6">
        <h3 className="font-bold text-gray-900 text-sm mb-3">Social Links</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {data.socialLinks.map((s) => (
            <span key={s.id} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg">
              {s.platform}
              <button onClick={() => dispatch({ type: "REMOVE_SOCIAL", id: s.id })} className="text-gray-400 hover:text-red-500">&times;</button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <select value={platform} onChange={(e) => setPlatform(e.target.value)} className="px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all bg-white">
            {platforms.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
          </select>
          <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addSocial()} placeholder="https://..." className="flex-1 px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all" />
          <button onClick={addSocial} className="px-4 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-xl hover:bg-orange-600 transition-colors shrink-0">Add</button>
        </div>
      </div>
    </div>
  );
}
