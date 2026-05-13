import { FadeIn } from "./FadeIn";
import { Badge } from "./Badge";
import { ArrowRight, Sparkles, Palette, Download, Eye, Layout, Zap } from "lucide-react";

const steps = [
  { icon: Sparkles, title: "Fill Your Details", desc: "Enter your name, skills, projects, experience and more in a simple step-by-step form." },
  { icon: Palette, title: "Choose a Theme", desc: "Pick from 8 professional themes, custom colors, and smart font pairings." },
  { icon: Eye, title: "Live Preview", desc: "See your portfolio come to life with real-time preview on desktop, tablet, and mobile." },
  { icon: Download, title: "Export HTML", desc: "Download a standalone HTML file or ZIP package — fully responsive and works offline." },
];

const sampleData = {
  name: "Patrick Muhire",
  role: "Full-Stack Developer",
  bio: "Building modern web applications with React, TypeScript, and Node.js. Passionate about clean code and great user experiences.",
  skills: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TailwindCSS", level: 88 },
  ],
};

export function PortfolioShowcase() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <Badge>New Tool</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-gray-900 mt-4 mb-4 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            AI Portfolio Builder
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Generate a professional, production-ready portfolio website in minutes — no coding required. Built into WebCare.
          </p>
        </FadeIn>

        {/* Example output preview */}
        <FadeIn delay={0.1} className="mb-16">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-gray-100 border-b border-gray-200 px-3 sm:px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
              </div>
              <span className="text-[10px] text-gray-400 font-mono ml-2">portfolio-preview.html</span>
            </div>
            <div className="p-4 sm:p-6">
              {/* Hero mockup */}
              <div className="rounded-xl overflow-hidden mb-4" style={{ background: "linear-gradient(135deg, #2563eb, #1e40af)" }}>
                <div className="p-4 sm:p-6 text-white">
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 flex items-center justify-center text-white font-black text-xl shrink-0">PM</div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-black">{sampleData.name}</h3>
                      <p className="text-white/80 text-sm sm:text-base">{sampleData.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-white/80 text-xs sm:text-sm leading-relaxed max-w-xl">{sampleData.bio}</p>
                </div>
              </div>
              {/* Content mockup */}
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Skills</h4>
                  <div className="space-y-3">
                    {sampleData.skills.map((s) => (
                      <div key={s.name}>
                        <div className="flex justify-between text-xs mb-1"><span className="font-medium text-gray-800">{s.name}</span><span className="text-gray-400">{s.level}%</span></div>
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden"><div className="h-full rounded-full bg-blue-600" style={{ width: `${s.level}%` }} /></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Projects</h4>
                  <div className="space-y-3">
                    {["E-Commerce Platform", "Task Manager App", "School Portal"].map((t) => (
                      <div key={t} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-600 text-[10px] font-bold">&gt;</div>
                        <span className="text-xs text-gray-700 font-medium">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                <span className="text-[10px] sm:text-xs text-gray-400 font-medium">&#9993; patrick@example.com</span>
                <span className="text-[10px] sm:text-xs text-gray-300 hidden sm:inline">|</span>
                <span className="text-[10px] sm:text-xs text-gray-400 font-medium">&#9742; +250 787 000 000</span>
                <span className="text-[10px] sm:text-xs text-gray-300 hidden sm:inline">|</span>
                <span className="text-[10px] sm:text-xs text-gray-400 font-medium">github.com/patrick</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* How it works */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 0.07}>
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 hover:border-orange-200 hover:shadow-sm transition-all h-full">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Features grid */}
        <FadeIn delay={0.15}>
          <div className="bg-white rounded-2xl border border-orange-100 p-5 sm:p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: Layout, label: "8 Themes", desc: "Modern, Minimal, Corporate, Developer & more" },
                { icon: Palette, label: "Custom Colors", desc: "Pick colors or extract from your logo" },
                { icon: Eye, label: "Live Preview", desc: "Desktop, tablet & mobile views" },
                { icon: Zap, label: "Export HTML", desc: "Standalone file, works offline" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-gray-100 text-center">
              <a href="/portfolio-builder" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl transition-colors">
                Try AI Portfolio Builder <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
