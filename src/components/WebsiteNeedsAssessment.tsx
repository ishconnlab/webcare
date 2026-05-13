import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { Badge } from "./Badge";
import { MessageCircle, ArrowRight, Check, Sparkles, FileText, Smartphone, Target, Users, Clock, DollarSign, Zap } from "lucide-react";

const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_URL ?? "https://wa.me/250787377750";

type Answer = string | null;

const questions = [
  {
    key: "type",
    question: "What type of organization do you run?",
    icon: Target,
    options: [
      { value: "school", label: "School / University", emoji: "\uD83C\uDFEB" },
      { value: "business", label: "Business / Startup", emoji: "\uD83C\uDFED" },
      { value: "ngo", label: "NGO / Non-profit", emoji: "\uD83E\uDD1D" },
      { value: "other", label: "Other", emoji: "\uD83C\uDF10" },
    ],
  },
  {
    key: "goal",
    question: "What is your main goal for the website?",
    icon: Target,
    options: [
      { value: "attract", label: "Attract more students / clients", emoji: "\uD83D\uDC4B" },
      { value: "credibility", label: "Build credibility & showcase work", emoji: "\uD83C\uDF1F" },
      { value: "info", label: "Share information & updates", emoji: "\uD83D\uDCDD" },
      { value: "sell", label: "Sell products or services online", emoji: "\uD83D\uDED2" },
    ],
  },
  {
    key: "audience",
    question: "Who is your primary audience?",
    icon: Users,
    options: [
      { value: "parents", label: "Parents / Students", emoji: "\uD83D\uDC68\u200D\uD83C\uDFEB" },
      { value: "local", label: "Local customers / Community", emoji: "\uD83C\uDFE0" },
      { value: "global", label: "International audience", emoji: "\uD83C\uDF0D" },
      { value: "multiple", label: "Multiple audience groups", emoji: "\uD83D\uDC65" },
    ],
  },
  {
    key: "current",
    question: "Do you currently have a website?",
    icon: Smartphone,
    options: [
      { value: "none", label: "No, I don't have one", emoji: "\u274C" },
      { value: "outdated", label: "Yes, but it's outdated", emoji: "\uD83D\uDDC2\uFE0F" },
      { value: "basic", label: "Yes, but needs improvement", emoji: "\uD83D\uDD27" },
      { value: "happy", label: "Yes, and I'm happy with it", emoji: "\u2705" },
    ],
  },
  {
    key: "features",
    question: "What matters most to you?",
    icon: Zap,
    options: [
      { value: "design", label: "Professional design", emoji: "\uD83C\uDFA8" },
      { value: "mobile", label: "Mobile-friendly experience", emoji: "\uD83D\uDCF1" },
      { value: "speed", label: "Fast loading speed", emoji: "\u26A1" },
      { value: "cms", label: "Easy to update myself", emoji: "\uD83D\uDD04" },
    ],
  },
  {
    key: "timeline",
    question: "When are you looking to launch?",
    icon: Clock,
    options: [
      { value: "asap", label: "ASAP (1-2 weeks)", emoji: "\uD83D\uDD25" },
      { value: "soon", label: "Soon (1-3 months)", emoji: "\uD83D\uDCC5" },
      { value: "planning", label: "Just planning (3-6 months)", emoji: "\uD83D\uDCDD" },
      { value: "exploring", label: "Just exploring ideas", emoji: "\uD83D\uDD0D" },
    ],
  },
  {
    key: "budget",
    question: "What is your budget range?",
    icon: DollarSign,
    options: [
      { value: "small", label: "Under $500", emoji: "\uD83D\uDCB5" },
      { value: "medium", label: "$500 - $1,500", emoji: "\uD83D\uDCB0" },
      { value: "large", label: "$1,500 - $5,000", emoji: "\uD83D\uDCB8" },
      { value: "premium", label: "$5,000+", emoji: "\uD83D\uDC51" },
    ],
  },
];

function getAssessment(answers: Record<string, string>) {
  const scores: Record<string, number> = {
    design: 20,
    mobile: 15,
    content: 15,
    seo: 15,
    speed: 10,
    support: 10,
    features: 15,
  };

  let pages = "5-8 pages";
  let investment = "$500 - $1,500";
  let timeline = "3-4 weeks";
  let priority: string[] = [];

  if (answers.type === "school") {
    scores.design = 25;
    scores.content = 20;
    pages = "8-12 pages";
    investment = "$800 - $2,500";
    priority = ["Professional design", "Student/parent portal", "Events calendar", "News & blog"];
  } else if (answers.type === "business") {
    scores.mobile = 20;
    scores.seo = 20;
    pages = "5-8 pages";
    investment = "$600 - $2,000";
    priority = ["Mobile-first design", "SEO optimization", "Service pages", "Contact forms"];
  } else if (answers.type === "ngo") {
    scores.content = 20;
    scores.features = 18;
    pages = "6-10 pages";
    investment = "$500 - $1,800";
    priority = ["Mission & impact story", "Donation integration", "Blog/news", "Gallery"];
  }

  if (answers.goal === "attract") { scores.seo += 5; priority.unshift("SEO-optimized content"); }
  if (answers.goal === "sell") { scores.features += 5; priority.push("E-commerce or payment system"); }
  if (answers.goal === "credibility") { scores.design += 5; }

  if (answers.audience === "multiple" || answers.audience === "global") { scores.content += 5; priority.push("Multi-language support"); }
  if (answers.current === "none") { scores.support += 5; priority.push("Complete setup guidance"); }
  if (answers.current === "outdated") { scores.design += 5; priority.push("Modern redesign"); }

  if (answers.features === "mobile") { scores.mobile += 10; }
  if (answers.features === "speed") { scores.speed += 10; }
  if (answers.features === "cms") { scores.features += 5; priority.push("Easy-to-use CMS"); }

  if (answers.timeline === "asap") { timeline = "1-2 weeks (rush)"; }
  if (answers.timeline === "soon") { timeline = "3-4 weeks"; }
  if (answers.timeline === "planning") { timeline = "Flexible"; }

  if (answers.budget === "small") { investment = "Under $500"; }
  if (answers.budget === "medium") { investment = "$500 - $1,500"; }
  if (answers.budget === "large") { investment = "$1,500 - $5,000"; }
  if (answers.budget === "premium") { investment = "$5,000+"; }

  const totalScore = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / 1.5);
  const readiness = Math.min(totalScore, 98);

  return {
    readiness,
    pages,
    investment,
    timeline,
    priority: priority.slice(0, 5),
    scores,
  };
}

export function WebsiteNeedsAssessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const current = questions[step];
  const Icon = current?.icon;

  const answer = (value: string) => {
    const newAnswers = { ...answers, [current.key]: value };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setAnswers(newAnswers);
      setDone(true);
    }
  };

  const assessment = done ? getAssessment(answers) : null;

  const reset = () => {
    setStep(0);
    setAnswers({});
    setDone(false);
  };

  if (done && assessment) {
    const grade = assessment.readiness >= 80 ? "High" : assessment.readiness >= 50 ? "Medium" : "Low";
    const gradeColor = assessment.readiness >= 80 ? "text-green-600" : assessment.readiness >= 50 ? "text-orange-500" : "text-gray-500";

    return (
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
                <div className="text-center mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Your Website Needs Assessment</h3>
                  <p className="text-gray-400 text-sm">Personalized report based on your answers</p>
                </div>

                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="text-center">
                    <div className={`text-3xl font-black ${gradeColor}`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{assessment.readiness}%</div>
                    <p className="text-xs text-gray-400 mt-1">Readiness Score</p>
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div className="text-center">
                    <div className="text-3xl font-black text-orange-500" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{grade}</div>
                    <p className="text-xs text-gray-400 mt-1">Priority Level</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Recommended Pages", value: assessment.pages, icon: FileText },
                    { label: "Estimated Investment", value: assessment.investment, icon: DollarSign },
                    { label: "Typical Timeline", value: assessment.timeline, icon: Clock },
                  ].map(({ label, value, icon: I }) => (
                    <div key={label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                      <I className="w-4 h-4 text-orange-500 mx-auto mb-2" />
                      <p className="font-bold text-gray-900 text-xs">{value}</p>
                      <p className="text-gray-400 text-[10px] mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-orange-50 rounded-xl border border-orange-100 p-4 mb-6">
                  <h4 className="font-bold text-gray-900 text-xs mb-3 flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-orange-500" /> Recommended For You</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {assessment.priority.map((p) => (
                      <div key={p} className="flex items-center gap-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-orange-500 shrink-0" /> {p}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl transition-colors shadow-sm">
                    <MessageCircle className="w-4 h-4" /> Discuss Your Website on WhatsApp
                  </a>
                  <button onClick={reset} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-gray-200 hover:border-orange-300 text-gray-700 font-semibold text-sm rounded-xl transition-colors">
                    Take the Quiz Again
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <Badge>Free Tool</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-gray-900 mt-4 mb-4 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Website Needs Assessment
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Answer 7 quick questions and get a personalized assessment of what your website needs.
          </p>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5 sm:p-8">
              <div className="flex items-center justify-center gap-2 mb-8">
                {questions.map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-all ${step === i ? "bg-orange-500 text-white" : step > i ? "bg-green-100 text-green-600" : "bg-gray-200 text-gray-400"}`}>
                      {step > i ? "\u2713" : i + 1}
                    </div>
                    {i < questions.length - 1 && <div className={`w-5 sm:w-8 h-0.5 ${step > i ? "bg-green-200" : "bg-gray-200"}`} />}
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-1">
                  {Icon && <Icon className="w-4 h-4 text-orange-500" />}
                  <span className="text-[11px] text-gray-400 font-medium">Question {step + 1} of {questions.length}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mt-2 mb-6">{current.question}</h3>
                <div className="grid gap-2.5">
                  {current.options.map((opt) => (
                    <button key={opt.value} onClick={() => answer(opt.value)} className="flex items-center gap-3 w-full text-left p-3.5 rounded-xl border-2 border-gray-100 bg-white hover:border-orange-300 hover:bg-orange-50/50 transition-all group">
                      <span className="text-lg">{opt.emoji}</span>
                      <span className="text-sm font-semibold text-gray-800 group-hover:text-orange-600 transition-colors flex-1">{opt.label}</span>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-orange-500 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400">
                <button onClick={() => step > 0 && setStep(step - 1)} className={`${step === 0 ? "opacity-0" : "hover:text-gray-600"} transition-colors`}>Back</button>
                <span>{Math.round(((step + 1) / questions.length) * 100)}% complete</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
