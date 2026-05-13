import { FadeIn } from "./FadeIn";
import { Badge } from "./Badge";
import { Sparkles, ClipboardCheck, BookOpen, ArrowRight } from "lucide-react";

export function FreeToolsSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <Badge>Free Tools</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-gray-900 mt-4 mb-4 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Tools to Build, Learn &amp; Grow
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Try our free tools — no signup, no cost. Built for schools and businesses in Rwanda.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <FadeIn delay={0.05}>
            <a href="/portfolio-builder" className="block group bg-white rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all p-6 sm:p-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center mb-4 transition-colors">
                <Sparkles className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>AI Portfolio Builder</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Generate a professional portfolio website in minutes. Choose from 8 themes, customize colors, and export as standalone HTML.
              </p>
              <div className="flex items-center gap-2 text-orange-500 font-bold text-sm group-hover:gap-3 transition-all">
                Try it now <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </FadeIn>

          <FadeIn delay={0.1}>
            <a href="/free-tools" className="block group bg-white rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all p-6 sm:p-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center mb-4 transition-colors">
                <ClipboardCheck className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Website Needs Assessment</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Answer 7 quick questions and get a personalized assessment of what your school or business website needs.
              </p>
              <div className="flex items-center gap-2 text-orange-500 font-bold text-sm group-hover:gap-3 transition-all">
                Try it now <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </FadeIn>

          <FadeIn delay={0.15}>
            <a href="/learning-portal" className="block group bg-white rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all p-6 sm:p-8">
              <div className="w-12 h-12 rounded-2xl bg-green-50 group-hover:bg-green-100 flex items-center justify-center mb-4 transition-colors">
                <BookOpen className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Learning Portal</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                20+ courses across Programming, Web Dev, Data Science, AI, Cybersecurity, and more. Step-by-step with progress tracking.
              </p>
              <div className="flex items-center gap-2 text-green-500 font-bold text-sm group-hover:gap-3 transition-all">
                Start learning <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
