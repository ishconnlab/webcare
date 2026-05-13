import { ArrowRight, CheckCircle, GraduationCap, Award, HeartHandshake, Globe } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { Badge } from "./Badge";

const WEBSITE_URL = import.meta.env.VITE_SITE_URL ?? "https://www.ishconnect.rw/";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <Badge>About WebCare</Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-4 mb-5 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Professional Websites for Schools &amp; Businesses
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              WebCare is the web development service of <strong>ISHConnect</strong> — a Rwandan technology company specialising in digital solutions for educational institutions and businesses. We design, build, and maintain websites that establish credibility and drive real results.
            </p>
            <p className="text-gray-500 leading-relaxed mb-7">
              Every project is handled with precision: from architecture and design to content structure, performance, and post-launch support. We do not use templates. Every site is built specifically for the client.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Custom websites built from scratch — no templates",
                "Focused on Rwandan schools, universities, and businesses",
                "12 months of post-launch maintenance included",
                "Fully responsive — optimised for mobile and desktop",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-gray-700 text-sm">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} /> {p}
                </li>
              ))}
            </ul>
            <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-bold text-sm transition-colors">
              Visit ISHConnect — www.ishconnect.rw <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, title: "Schools & Universities", desc: "Enrolment-focused websites that build institutional trust and communicate academic excellence." },
                { icon: Award, title: "Businesses & Startups", desc: "Corporate websites that present your services clearly and convert visitors into clients." },
                { icon: HeartHandshake, title: "NGOs & Institutions", desc: "Mission-driven sites that communicate your impact with clarity and professionalism." },
                { icon: Globe, title: "Rwanda & Beyond", desc: "Headquartered in Rwanda, serving clients across East Africa with global quality standards." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1.5">{title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
