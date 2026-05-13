import { useState } from "react";
import { usePortfolio } from "../PortfolioContext";
import { Monitor, Tablet, Smartphone } from "lucide-react";

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  return `${parseInt(h.slice(0, 2), 16)} ${parseInt(h.slice(2, 4), 16)} ${parseInt(h.slice(4, 6), 16)}`;
}

export function PortfolioPreview() {
  const { data } = usePortfolio();
  const [mode, setMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const p = data.personalInfo;

  const widthMap = { desktop: "100%", tablet: "768px", mobile: "320px" };
  const cssVars = {
    "--p-primary": data.theme.primary,
    "--p-secondary": data.theme.secondary,
    "--p-accent": data.theme.accent,
    "--p-font": data.theme.font,
    "--p-heading": data.theme.headingFont,
    "--p-primary-rgb": hexToRgb(data.theme.primary),
  } as React.CSSProperties;

  const hasData = p.name || p.role || data.skills.length > 0 || data.projects.length > 0;

  if (!hasData) {
    return (
      <div className="h-full flex items-center justify-center text-gray-400 text-sm p-8 text-center">
        <div>
          <p className="text-4xl mb-3">&#9998;</p>
          <p>Fill in your details to see a live preview</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-center gap-2 p-3 border-b border-gray-100 bg-white">
        {(["desktop", "tablet", "mobile"] as const).map((m) => {
          const icons = { desktop: Monitor, tablet: Tablet, mobile: Smartphone };
          const Icon = icons[m];
          return (
            <button key={m} onClick={() => setMode(m)} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${mode === m ? "bg-orange-100 text-orange-700" : "text-gray-500 hover:bg-gray-100"}`}>
              <Icon className="w-3.5 h-3.5" /> {m}
            </button>
          );
        })}
      </div>
      <div className="flex-1 overflow-auto bg-gray-100 p-4">
        <div className="mx-auto transition-all duration-300" style={{ maxWidth: widthMap[mode] }}>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden" style={cssVars}>
            <style>{`
              .p-preview { font-family: var(--p-font); }
              .p-preview h1, .p-preview h2, .p-preview h3 { font-family: var(--p-heading); }
            `}</style>
            <div className="p-preview">
              {data.sections.about && (
                <section className="px-4 sm:px-10 py-10 sm:py-16" style={{ background: `linear-gradient(135deg, ${data.theme.primary} 0%, ${data.theme.secondary} 100%)`, color: "#fff" }}>
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    {p.profileImage && <img src={p.profileImage} alt="" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-3 border-white/30 object-cover" />}
                    <div className="text-center sm:text-left">
                      {p.name && <h1 className="text-2xl sm:text-3xl font-black mb-1">{p.name}</h1>}
                      {p.role && <p className="text-white/80 text-base sm:text-lg">{p.role}</p>}
                    </div>
                  </div>
                  {p.bio && <p className="mt-6 text-white/85 leading-relaxed text-sm max-w-2xl">{p.bio}</p>}
                </section>
              )}

              {data.sections.skills && data.skills.length > 0 && (
                <section className="px-4 sm:px-10 py-8 sm:py-10 border-b border-gray-100">
                  <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: data.theme.primary }}>Skills</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {data.skills.map((s) => (
                      <div key={s.id}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-gray-800">{s.name}</span>
                          <span className="text-gray-400">{s.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full rounded-full transition-all" style={{ width: `${s.level}%`, backgroundColor: data.theme.primary }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {data.sections.projects && data.projects.length > 0 && (
                <section className="px-4 sm:px-10 py-8 sm:py-10 border-b border-gray-100">
                  <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: data.theme.primary }}>Projects</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {data.projects.map((pr) => (
                      <div key={pr.id} className="p-4 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
                        <h3 className="font-bold text-gray-900 text-sm">{pr.title}</h3>
                        <p className="text-gray-500 text-xs mt-1">{pr.description}</p>
                        {pr.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {pr.tags.map((t) => <span key={t} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded">{t}</span>)}
                          </div>
                        )}
                        <div className="flex gap-3 mt-3">
                          {pr.liveUrl && <a href={pr.liveUrl} className="text-xs font-medium" style={{ color: data.theme.primary }}>Live &rarr;</a>}
                          {pr.githubUrl && <a href={pr.githubUrl} className="text-xs font-medium text-gray-400">GitHub &rarr;</a>}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {data.sections.experience && data.experience.length > 0 && (
                <section className="px-4 sm:px-10 py-8 sm:py-10 border-b border-gray-100">
                  <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: data.theme.primary }}>Experience</h2>
                  <div className="space-y-4">
                    {data.experience.map((e) => (
                      <div key={e.id} className="relative pl-5 border-l-2" style={{ borderColor: data.theme.primary }}>
                        <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full" style={{ backgroundColor: data.theme.primary }} />
                        <p className="font-bold text-gray-900 text-sm">{e.role}</p>
                        <p className="text-gray-500 text-xs">{e.company} &middot; {e.startDate} - {e.current ? "Present" : e.endDate}</p>
                        {e.description && <p className="text-gray-500 text-xs mt-1">{e.description}</p>}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {data.sections.education && data.education.length > 0 && (
                <section className="px-6 sm:px-10 py-10 border-b border-gray-100">
                  <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: data.theme.primary }}>Education</h2>
                  <div className="space-y-4">
                    {data.education.map((e) => (
                      <div key={e.id}>
                        <p className="font-bold text-gray-900 text-sm">{e.degree} in {e.field}</p>
                        <p className="text-gray-500 text-xs">{e.institution} &middot; {e.startDate} - {e.endDate}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {data.sections.services && data.services.length > 0 && (
                <section className="px-6 sm:px-10 py-10 border-b border-gray-100">
                  <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: data.theme.primary }}>Services</h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {data.services.map((s) => (
                      <div key={s.id} className="p-4 rounded-xl border border-gray-100 text-center">
                        <p className="font-bold text-gray-900 text-sm">{s.title}</p>
                        <p className="text-gray-500 text-xs mt-1">{s.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {data.sections.contact && (
                <section className="px-6 sm:px-10 py-10 text-center" style={{ background: `linear-gradient(135deg, ${data.theme.primary} 0%, ${data.theme.secondary} 100%)`, color: "#fff" }}>
                  <h2 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-80">Get In Touch</h2>
                  <div className="space-y-2 text-sm">
                    {data.contact.email && <p>{data.contact.email}</p>}
                    {data.contact.phone && <p>{data.contact.phone}</p>}
                    {data.contact.location && <p className="opacity-70">{data.contact.location}</p>}
                  </div>
                  {data.socialLinks.length > 0 && (
                    <div className="flex items-center justify-center gap-4 mt-5">
                      {data.socialLinks.map((s) => (
                        <a key={s.id} href={s.url} className="text-white/80 hover:text-white text-xs capitalize transition-colors" target="_blank" rel="noopener noreferrer">{s.platform}</a>
                      ))}
                    </div>
                  )}
                </section>
              )}

              <footer className="px-6 sm:px-10 py-5 text-center text-xs text-gray-400 border-t border-gray-100">
                &copy; {new Date().getFullYear()} {p.name || "Portfolio"}. All rights reserved.
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
