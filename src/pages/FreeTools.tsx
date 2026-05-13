import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Sparkles, ClipboardCheck, ArrowRight } from "lucide-react";
import { Badge } from "@/components/Badge";
import { FadeIn } from "@/components/FadeIn";
import { WebsiteNeedsAssessment } from "@/components/WebsiteNeedsAssessment";

function FreeToolsLanding() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <Badge>Free Tools</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-gray-900 mt-4 mb-4 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Free Tools for Schools &amp; Businesses
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Powerful tools to help you build, plan, and improve your online presence — no cost, no signup.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <FadeIn delay={0.05}>
            <a href="/portfolio-builder" className="block group bg-white rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all p-6 sm:p-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center mb-4 transition-colors">
                <Sparkles className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-lg font-black text-gray-900 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>AI Portfolio Builder</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Generate a professional portfolio website in minutes. Choose from 8 themes, customize colors, and export as standalone HTML.
              </p>
              <div className="flex items-center gap-2 text-orange-500 font-bold text-sm group-hover:gap-3 transition-all">
                Try it now <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="block group bg-white rounded-2xl border border-orange-200 hover:border-orange-300 hover:shadow-md transition-all p-6 sm:p-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center mb-4 transition-colors">
                <ClipboardCheck className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-lg font-black text-gray-900 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Website Needs Assessment</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Answer 7 quick questions and get a personalized assessment of what your school or business website needs.
              </p>
              <div className="flex items-center gap-2 text-orange-500 font-bold text-sm">
                <ClipboardCheck className="w-4 h-4" /> Scroll down to try
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default function FreeTools() {
  return (
    <div className="min-h-screen bg-white pt-[72px]">
      <Navbar />
      <main>
        <FreeToolsLanding />
        <WebsiteNeedsAssessment />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
