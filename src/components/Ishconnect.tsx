import { Building2, GraduationCap, Globe, Award, ExternalLink } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { Badge } from "./Badge";

const WEBSITE_URL = import.meta.env.VITE_SITE_URL ?? "https://www.ishconnect.rw/";

export function Ishconnect() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <FadeIn className="lg:col-span-3">
            <Badge>Parent Company</Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-4 mb-5 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Built by <span className="text-orange-500">ISHConnect</span> — A Rwandan Technology Company
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>ISHConnect</strong> is a Rwandan technology company delivering digital infrastructure and software solutions across East Africa. Beyond web development, ISHConnect builds educational platforms, data systems, and custom software for institutions and businesses.
            </p>
            <p className="text-gray-500 leading-relaxed mb-7">
              WebCare is one of several services offered by ISHConnect — each designed to help organisations establish a strong digital footprint. From school management platforms to business automation tools, ISHConnect provides end-to-end digital solutions.
            </p>
            <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold text-sm rounded-xl transition-colors">
              <ExternalLink className="w-4 h-4" /> Visit ISHConnect
            </a>
          </FadeIn>
          <FadeIn delay={0.12} className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: Building2, title: "Digital Infrastructure", desc: "Modernising institutions with technology platforms built for the African context." },
                { icon: GraduationCap, title: "Educational Platforms", desc: "School management and e-learning systems for Rwandan and East African institutions." },
                { icon: Globe, title: "Web & Mobile Apps", desc: "Custom software development for businesses, NGOs, and government agencies." },
                { icon: Award, title: "Technology Consulting", desc: "Strategic guidance on digital transformation, architecture, and systems integration." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                  <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xs mb-1">{title}</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
