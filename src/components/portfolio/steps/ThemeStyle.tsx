import { useRef, useState } from "react";
import { usePortfolio } from "../PortfolioContext";
import { themes, fontPairings, extractColorsFromImage } from "../themes";

function isValidHex(c: string) {
  return /^#[0-9a-fA-F]{6}$/.test(c);
}

export function ThemeStyleStep() {
  const { data, dispatch } = usePortfolio();
  const logoRef = useRef<HTMLInputElement>(null);
  const [colorInput, setColorInput] = useState({ primary: data.theme.primary, secondary: data.theme.secondary, accent: data.theme.accent });

  const applyTheme = (t: (typeof themes)[0]) => {
    const vals = { primary: t.primary, secondary: t.secondary, accent: t.accent };
    dispatch({ type: "SET_THEME", field: "primary", value: t.primary });
    dispatch({ type: "SET_THEME", field: "secondary", value: t.secondary });
    dispatch({ type: "SET_THEME", field: "accent", value: t.accent });
    dispatch({ type: "SET_THEME", field: "font", value: t.font });
    dispatch({ type: "SET_THEME", field: "headingFont", value: t.headingFont });
    dispatch({ type: "SET_THEME", field: "style", value: t.name });
    setColorInput(vals);
  };

  const updateColor = (field: "primary" | "secondary" | "accent", value: string) => {
    setColorInput((prev) => ({ ...prev, [field]: value }));
    if (isValidHex(value)) {
      dispatch({ type: "SET_THEME", field, value });
    }
  };

  const handleLogoExtract = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const colors = await extractColorsFromImage(file);
    if (colors.length >= 3) {
      updateColor("primary", colors[0]);
      updateColor("secondary", colors[1]);
      updateColor("accent", colors[2]);
    } else if (colors.length >= 1) {
      updateColor("primary", colors[0]);
    }
  };

  const colorFields = [
    { key: "primary" as const, label: "Primary" },
    { key: "secondary" as const, label: "Secondary" },
    { key: "accent" as const, label: "Accent" },
  ];

  return (
    <div className="space-y-8">
      {/* Prebuilt Themes */}
      <div>
        <h3 className="font-bold text-gray-900 text-sm mb-4">Prebuilt Themes</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {themes.map((t) => {
            const active = data.theme.style === t.name;
            return (
              <button key={t.name} onClick={() => applyTheme(t)} className={`relative p-4 rounded-xl border-2 transition-all text-left ${active ? "border-orange-500 bg-orange-50 shadow-sm ring-1 ring-orange-500/20" : "border-gray-100 hover:border-gray-300 bg-white hover:shadow-sm"}`}>
                <div className="flex gap-1.5 mb-3">
                  <div className="w-5 h-5 rounded-full ring-1 ring-black/5" style={{ backgroundColor: t.primary }} />
                  <div className="w-5 h-5 rounded-full ring-1 ring-black/5" style={{ backgroundColor: t.secondary }} />
                  <div className="w-5 h-5 rounded-full ring-1 ring-black/5" style={{ backgroundColor: t.accent }} />
                </div>
                <p className="font-semibold text-gray-900 text-xs">{t.label}</p>
                <p className="text-gray-400 text-[10px] mt-0.5 capitalize">{t.name}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom Colors */}
      <div className="border-t border-gray-100 pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900 text-sm">Custom Colors</h3>
          <button onClick={() => logoRef.current?.click()} className="text-[11px] text-orange-500 font-medium hover:text-orange-600 transition-colors">
            Extract from image
          </button>
          <input ref={logoRef} type="file" accept="image/*" onChange={handleLogoExtract} className="hidden" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {colorFields.map(({ key, label }) => (
            <div key={key}>
              <label className="block text-[10px] font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">{label}</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={isValidHex(data.theme[key]) ? data.theme[key] : "#000000"}
                  onChange={(e) => { dispatch({ type: "SET_THEME", field: key, value: e.target.value }); setColorInput((p) => ({ ...p, [key]: e.target.value })); }}
                  className="w-10 h-10 rounded-lg border border-gray-200 cursor-pointer shrink-0"
                />
                <input
                  type="text"
                  value={colorInput[key]}
                  onChange={(e) => updateColor(key, e.target.value)}
                  onBlur={() => { if (!isValidHex(colorInput[key])) setColorInput((p) => ({ ...p, [key]: data.theme[key] })); }}
                  placeholder="#000000"
                  className={`flex-1 px-3 py-2 border rounded-xl text-xs font-mono focus:outline-none focus:ring-2 focus:ring-orange-400/50 transition-all ${isValidHex(colorInput[key]) ? "border-gray-200" : "border-red-300 bg-red-50"}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Font Pairing */}
      <div className="border-t border-gray-100 pt-6">
        <h3 className="font-bold text-gray-900 text-sm mb-4">Font Pairing</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {fontPairings.map((f) => (
            <button
              key={f.label}
              onClick={() => { dispatch({ type: "SET_THEME", field: "headingFont", value: f.heading }); dispatch({ type: "SET_THEME", field: "font", value: f.body }); }}
              className={`text-left px-4 py-3 rounded-xl border-2 transition-all ${data.theme.headingFont === f.heading ? "border-orange-500 bg-orange-50" : "border-gray-100 hover:border-gray-200 bg-white"}`}
            >
              <p className="font-semibold text-gray-900 text-sm" style={{ fontFamily: f.heading }}>{f.label}</p>
              <p className="text-gray-400 text-xs mt-1" style={{ fontFamily: f.body }}>The quick brown fox jumps over the lazy dog</p>
            </button>
          ))}
        </div>
      </div>

      {/* Section Visibility */}
      <div className="border-t border-gray-100 pt-6">
        <h3 className="font-bold text-gray-900 text-sm mb-4">Section Visibility</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Object.entries(data.sections).map(([key, val]) => (
            <label key={key} className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border cursor-pointer transition-all ${val ? "border-orange-200 bg-orange-50/50" : "border-gray-100 hover:border-gray-200 bg-white"}`}>
              <input type="checkbox" checked={val} onChange={(e) => dispatch({ type: "SET_SECTION", field: key, value: e.target.checked })} className="accent-orange-500 w-4 h-4" />
              <span className="text-sm text-gray-700 capitalize font-medium">{key}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
