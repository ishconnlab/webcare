import { Award, TrendingUp, Users, Globe, Zap, HeartHandshake } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

const benefits = [
  { icon: Award, title: "Professional Identity", desc: "A website that positions your school or business as credible and authoritative — built to make the right impression from the first click." },
  { icon: TrendingUp, title: "Increased Trust & Reputation", desc: "Clients, students, and partners judge your credibility online before they ever contact you. We make sure that judgement works in your favour." },
  { icon: Users, title: "Clear Communication", desc: "Well-structured content that answers the questions your audience is asking — presented cleanly, without confusion." },
  { icon: Globe, title: "Wider Reach", desc: "A professionally indexed, SEO-structured website ensures your organisation is discoverable locally and internationally." },
  { icon: Zap, title: "Speed & Performance", desc: "Fast-loading websites that score highly on Google's performance metrics — reducing bounce rate and improving search rankings." },
  { icon: HeartHandshake, title: "12-Month Support", desc: "Dedicated technical support for a full year post-launch. Content updates, fixes, and improvements — handled promptly." },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Why WebCare" title="What Sets Us Apart" subtitle="We focus on quality, detail, and long-term value — not volume. Every project receives the same level of professional attention." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 0.06}>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 leading-snug">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
