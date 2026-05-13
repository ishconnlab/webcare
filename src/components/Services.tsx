import { Layout, GraduationCap, Smartphone, Palette, Shield, Wrench } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

const services = [
  { icon: Layout, title: "Website Design & Development", desc: "Fully custom websites, designed and developed from the ground up. Clean code, fast load times, and a design that reflects your brand." },
  { icon: GraduationCap, title: "School & Business Website Systems", desc: "Purpose-built for educational institutions and businesses — with the right structure, pages, and features for your sector." },
  { icon: Smartphone, title: "Responsive Mobile Design", desc: "Every website we deliver works flawlessly across all devices — from smartphones to large desktop screens." },
  { icon: Palette, title: "UI/UX Design", desc: "Clean, professional interfaces designed to make a strong first impression and guide users toward the actions that matter." },
  { icon: Shield, title: "Security & Performance", desc: "SSL certificate setup, speed optimisation, uptime monitoring, and hardened security — protecting your site and your reputation." },
  { icon: Wrench, title: "Maintenance & Support — 12 Months", desc: "Ongoing technical support, content updates, and bug fixes for 12 months after launch. You are never left unsupported." },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Services" title="What We Deliver" subtitle="Every service is included end-to-end. We handle the full project — design, development, launch, and support." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 0.06}>
              <div className="group p-7 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-md bg-white transition-all duration-200 h-full">
                <div className="w-11 h-11 rounded-xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2.5 leading-snug">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
