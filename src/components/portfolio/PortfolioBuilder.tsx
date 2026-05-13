import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Eye, Code, Sparkles, Download, Home } from "lucide-react";
import { PortfolioProvider, usePortfolio } from "./PortfolioContext";
import { STEP_ORDER, STEP_LABELS, type StepName } from "./types";
import { PersonalInfoStep } from "./steps/PersonalInfo";
import { SkillsServicesStep } from "./steps/SkillsServices";
import { ProjectsStep } from "./steps/Projects";
import { ExperienceEducationStep } from "./steps/ExperienceEducation";
import { ContactSocialStep } from "./steps/ContactSocial";
import { ThemeStyleStep } from "./steps/ThemeStyle";
import { PortfolioPreview } from "./preview/PortfolioPreview";
import { ExportPanel } from "./export/ExportPanel";

const stepComponents: Record<StepName, React.FC> = {
  personal: PersonalInfoStep,
  "skills-services": SkillsServicesStep,
  projects: ProjectsStep,
  "experience-education": ExperienceEducationStep,
  contact: ContactSocialStep,
  theme: ThemeStyleStep,
};

function BuilderContent() {
  const { currentStep, setStep } = usePortfolio();
  const [view, setView] = useState<"form" | "preview" | "export">("form");

  const currentIndex = STEP_ORDER.indexOf(currentStep);
  const StepComponent = stepComponents[currentStep];

  const goNext = () => {
    if (currentIndex < STEP_ORDER.length - 1) setStep(STEP_ORDER[currentIndex + 1]);
  };
  const goPrev = () => {
    if (currentIndex > 0) setStep(STEP_ORDER[currentIndex - 1]);
  };

  return (
    <div className="min-h-screen bg-white pt-[72px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a href="/" className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-[11px] font-semibold transition-colors shrink-0">
              <Home className="w-3 h-3" />
            </a>
            <div className="min-w-0 flex-1">
              <h1 className="text-base sm:text-xl font-black text-gray-900 truncate" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 inline-block text-orange-500 mr-1.5 shrink-0" />
                AI Portfolio Builder
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-1.5 w-full sm:w-auto">
            {(["form", "preview", "export"] as const).map((v) => {
              const icons = { form: null, preview: Eye, export: Download };
              const Icon = icons[v];
              return (
                <button key={v} onClick={() => setView(v)} className={`flex-1 sm:flex-initial flex items-center justify-center gap-1 px-2.5 py-2 rounded-xl text-[11px] font-semibold transition-all capitalize ${view === v ? "bg-orange-500 text-white shadow-sm" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                  {Icon && <Icon className="w-3.5 h-3.5" />} <span className="hidden sm:inline">{v}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" style={{ height: "calc(100dvh - 200px)", minHeight: "500px" }}>
          {/* Step progress - left sidebar */}
          {view === "form" && (
            <div className="lg:col-span-3 space-y-1">
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                {STEP_ORDER.map((step, i) => {
                  const isActive = step === currentStep;
                  const isDone = i < currentIndex;
                  return (
                    <button key={step} onClick={() => setStep(step)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${isActive ? "bg-white shadow-sm border border-orange-100" : "hover:bg-white/50"}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold transition-all ${isActive ? "bg-orange-500 text-white" : isDone ? "bg-green-100 text-green-600" : "bg-gray-200 text-gray-400"}`}>
                        {isDone ? "\u2713" : i + 1}
                      </div>
                      <span className={`text-xs font-medium ${isActive ? "text-orange-600" : "text-gray-500"}`}>{STEP_LABELS[step]}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Main content area */}
          <div className={view === "form" ? "lg:col-span-5" : view === "preview" ? "lg:col-span-12" : "lg:col-span-5"}>
            <AnimatePresence mode="wait">
              {view === "form" && (
                <motion.div key="form" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="bg-white rounded-2xl border border-gray-200 p-6 h-full overflow-auto">
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-sm font-bold text-gray-900">{STEP_LABELS[currentStep]}</h2>
                    <span className="text-[11px] text-gray-400 font-medium bg-gray-100 px-2.5 py-1 rounded-full">Step {currentIndex + 1} of {STEP_ORDER.length}</span>
                  </div>
                  <StepComponent />
                  <div className="flex items-center justify-between mt-8 pt-5 border-t border-gray-100">
                    <button onClick={goPrev} disabled={currentIndex === 0} className="flex items-center gap-1.5 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button onClick={goNext} disabled={currentIndex === STEP_ORDER.length - 1} className="flex items-center gap-1.5 px-5 py-2.5 bg-orange-500 text-white rounded-xl text-sm font-semibold hover:bg-orange-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
                      Next <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {view === "preview" && (
                <motion.div key="preview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="bg-white rounded-2xl border border-gray-200 overflow-hidden h-full">
                  <PortfolioPreview />
                </motion.div>
              )}

              {view === "export" && (
                <motion.div key="export" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="bg-white rounded-2xl border border-gray-200 h-full overflow-hidden">
                  <ExportPanel />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Preview sidebar when in form mode */}
          {view === "form" && (
            <div className="lg:col-span-4 hidden lg:block">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden h-full">
                <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500 flex items-center gap-1.5"><Eye className="w-3.5 h-3.5" /> Live Preview</span>
                  <button onClick={() => setView("preview")} className="text-[11px] text-orange-500 font-medium hover:text-orange-600">Full screen</button>
                </div>
                <div className="h-[calc(100%-37px)] overflow-hidden">
                  <PortfolioPreview />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function PortfolioBuilderPage() {
  return (
    <PortfolioProvider>
      <BuilderContent />
    </PortfolioProvider>
  );
}
