import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { Badge } from "./Badge";
import { MessageCircle, ArrowRight, Calculator, Check, School, Building2, Heart, Globe, Sparkles } from "lucide-react";

const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_URL ?? "https://wa.me/250787377750";

const orgTypes = [
  { value: "school", label: "School / University", icon: School, basePrice: 600 },
  { value: "business", label: "Business / Startup", icon: Building2, basePrice: 500 },
  { value: "ngo", label: "NGO / Institution", icon: Heart, basePrice: 450 },
  { value: "other", label: "Other", icon: Globe, basePrice: 400 },
] as const;

type OrgType = (typeof orgTypes)[number]["value"];

const packages = [
  { value: "basic", label: "Basic", pages: "3-5 pages", desc: "Essential online presence", multiplier: 1 },
  { value: "standard", label: "Standard", pages: "6-10 pages", desc: "Full-featured website", multiplier: 1.5 },
  { value: "premium", label: "Premium", pages: "10+ pages", desc: "Comprehensive solution", multiplier: 2.2 },
] as const;

const features = [
  { value: "cms", label: "Content Management System", price: 200 },
  { value: "booking", label: "Booking / Appointment System", price: 300 },
  { value: "gallery", label: "Photo & Video Gallery", price: 150 },
  { value: "blog", label: "Blog / News Section", price: 200 },
  { value: "ecommerce", label: "E-Commerce / Online Payments", price: 500 },
  { value: "multilingual", label: "Multi-language Support", price: 250 },
  { value: "portal", label: "Student / Client Portal", price: 400 },
  { value: "seo", label: "Advanced SEO Package", price: 200 },
] as const;

const timelines = [
  { value: "urgent", label: "Urgent (1-2 weeks)", multiplier: 1.3 },
  { value: "normal", label: "Normal (3-4 weeks)", multiplier: 1 },
  { value: "flexible", label: "Flexible (5-8 weeks)", multiplier: 0.85 },
] as const;

export function WebsiteQuoteTool() {
  const [step, setStep] = useState(0);
  const [orgType, setOrgType] = useState<OrgType | null>(null);
  const [pkg, setPkg] = useState<(typeof packages)[number]["value"] | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<(typeof timelines)[number]["value"] | null>(null);
  const [showResult, setShowResult] = useState(false);

  const toggleFeature = (v: string) => {
    setSelectedFeatures((prev) => prev.includes(v) ? prev.filter((f) => f !== v) : [...prev, v]);
  };

  const reset = () => {
    setStep(0);
    setOrgType(null);
    setPkg(null);
    setSelectedFeatures([]);
    setTimeline(null);
    setShowResult(false);
  };

  const calcPrice = () => {
    const org = orgTypes.find((o) => o.value === orgType);
    const pack = packages.find((p) => p.value === pkg);
    const tl = timelines.find((t) => t.value === timeline);
    if (!org || !pack || !tl) return 0;
    const featureCost = features.filter((f) => selectedFeatures.includes(f.value)).reduce((sum, f) => sum + f.price, 0);
    return Math.round((org.basePrice * pack.multiplier + featureCost) * tl.multiplier);
  };

  const steps = [
    // Step 0: Organization type
    <div key="org" className="space-y-4">
      <p className="text-sm text-gray-500 mb-4">What type of organization are you building a website for?</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {orgTypes.map(({ value, label, icon: Icon }) => (
          <button key={value} onClick={() => { setOrgType(value); setStep(1); }} className={`flex flex-col items-center gap-2.5 p-5 rounded-xl border-2 transition-all ${orgType === value ? "border-orange-500 bg-orange-50" : "border-gray-100 hover:border-gray-200 bg-white hover:shadow-sm"}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${orgType === value ? "bg-orange-500 text-white" : "bg-orange-50 text-orange-500"}`}>
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-gray-900 text-center">{label}</span>
          </button>
        ))}
      </div>
    </div>,

    // Step 1: Package
    <div key="pkg" className="space-y-4">
      <p className="text-sm text-gray-500 mb-4">Select a package that fits your needs</p>
      <div className="grid sm:grid-cols-3 gap-3">
        {packages.map((p) => (
          <button key={p.value} onClick={() => { setPkg(p.value); setStep(2); }} className={`text-left p-5 rounded-xl border-2 transition-all ${pkg === p.value ? "border-orange-500 bg-orange-50" : "border-gray-100 hover:border-gray-200 bg-white hover:shadow-sm"}`}>
            <p className="font-bold text-gray-900 text-sm">{p.label}</p>
            <p className="text-gray-400 text-xs mt-1">{p.pages}</p>
            <p className="text-gray-500 text-[11px] mt-0.5">{p.desc}</p>
          </button>
        ))}
      </div>
    </div>,

    // Step 2: Features
    <div key="features" className="space-y-4">
      <p className="text-sm text-gray-500 mb-4">Select any additional features you need</p>
      <div className="grid sm:grid-cols-2 gap-2">
        {features.map((f) => {
          const selected = selectedFeatures.includes(f.value);
          return (
            <button key={f.value} onClick={() => toggleFeature(f.value)} className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all ${selected ? "border-orange-300 bg-orange-50" : "border-gray-100 hover:border-gray-200 bg-white"}`}>
              <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${selected ? "bg-orange-500 border-orange-500" : "border-gray-300"}`}>
                {selected && <Check className="w-3 h-3 text-white" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-900">{f.label}</p>
                <p className="text-[11px] text-gray-400">+${f.price.toLocaleString()}</p>
              </div>
            </button>
          );
        })}
      </div>
      <button onClick={() => setStep(3)} className="w-full py-3 bg-orange-500 text-white text-sm font-semibold rounded-xl hover:bg-orange-600 transition-colors">Continue</button>
    </div>,

    // Step 3: Timeline
    <div key="tl" className="space-y-4">
      <p className="text-sm text-gray-500 mb-4">What is your preferred timeline?</p>
      <div className="grid sm:grid-cols-3 gap-3">
        {timelines.map((t) => (
          <button key={t.value} onClick={() => { setTimeline(t.value); setShowResult(true); }} className={`text-center p-5 rounded-xl border-2 transition-all ${timeline === t.value ? "border-orange-500 bg-orange-50" : "border-gray-100 hover:border-gray-200 bg-white hover:shadow-sm"}`}>
            <p className="font-bold text-gray-900 text-sm">{t.label}</p>
            <p className="text-gray-400 text-xs mt-1">{t.multiplier > 1 ? "Priority" : t.multiplier < 1 ? "Discounted" : "Standard"} pricing</p>
          </button>
        ))}
      </div>
    </div>,
  ];

  const price = calcPrice();

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <Badge>Free Tool</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-gray-900 mt-4 mb-4 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Website Cost Calculator
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Get an instant estimate for your custom website. Select your needs below and see your price.
          </p>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5 sm:p-8">
              {/* Step indicator */}
              {!showResult && (
                <div className="flex items-center justify-center gap-2 mb-6">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className={`flex items-center gap-2 ${i > 0 ? "ml-0" : ""}`}>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-all ${step === i ? "bg-orange-500 text-white" : step > i ? "bg-green-100 text-green-600" : "bg-gray-200 text-gray-400"}`}>
                        {step > i ? "\u2713" : i + 1}
                      </div>
                      {i < 3 && <div className={`w-6 sm:w-10 h-0.5 ${step > i ? "bg-green-200" : "bg-gray-200"}`} />}
                    </div>
                  ))}
                </div>
              )}

              {!showResult ? (
                <div>{steps[step]}</div>
              ) : (
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Estimated Investment</h3>
                  <p className="text-gray-400 text-sm mb-4">Based on your selections</p>

                  <div className="text-4xl sm:text-5xl font-black text-orange-500 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    ${price.toLocaleString()}
                  </div>
                  <p className="text-xs text-gray-400 mb-6">+ 12 months free support & maintenance</p>

                  <div className="bg-white rounded-xl border border-gray-100 p-4 mb-6 text-left text-xs space-y-2">
                    <div className="flex justify-between"><span className="text-gray-500">Organization type:</span><span className="font-semibold text-gray-900">{orgTypes.find((o) => o.value === orgType)?.label}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Package:</span><span className="font-semibold text-gray-900">{packages.find((p) => p.value === pkg)?.label}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Features:</span><span className="font-semibold text-gray-900">{selectedFeatures.length > 0 ? selectedFeatures.length + " selected" : "None"}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Timeline:</span><span className="font-semibold text-gray-900">{timelines.find((t) => t.value === timeline)?.label}</span></div>
                    <div className="border-t border-gray-100 pt-2 flex justify-between"><span className="text-gray-700 font-semibold">Estimated total:</span><span className="font-black text-orange-500">${price.toLocaleString()}</span></div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl transition-colors shadow-sm">
                      <MessageCircle className="w-4 h-4" /> Get Detailed Quote on WhatsApp
                    </a>
                    <button onClick={reset} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-gray-200 hover:border-orange-300 text-gray-700 font-semibold text-sm rounded-xl transition-colors">
                      Start Over
                    </button>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Custom Built", desc: "No templates" },
                { label: "Mobile First", desc: "All devices" },
                { label: "12mo Support", desc: "Included" },
                { label: "SEO Ready", desc: "Optimized" },
              ].map(({ label, desc }) => (
                <div key={label} className="text-center p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="font-semibold text-gray-900 text-xs">{label}</p>
                  <p className="text-gray-400 text-[10px]">{desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
