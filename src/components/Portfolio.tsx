import { ExternalLink, MessageCircle } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

interface SchoolSite {
  name: string;
  fullUrl: string;
  displayUrl: string;
  location: string;
  accentBg: string;
  accentText: string;
  navItems: string[];
  headline: string;
  tag: string;
  stats: { label: string; value: string }[];
}

const schoolExamples: SchoolSite[] = [
  {
    name: "Rwanda Coding Academy",
    fullUrl: "https://rca.ac.rw/",
    displayUrl: "rca.ac.rw",
    location: "Nyabihu, Rwanda",
    accentBg: "bg-blue-700",
    accentText: "text-blue-700",
    navItems: ["Home", "About", "Programmes", "Admissions", "Contact"],
    headline: "Rwanda's Premier Coding & Technology School",
    tag: "Technology Academy",
    stats: [{ label: "Students", value: "600+" }, { label: "Programmes", value: "8" }, { label: "Partners", value: "20+" }],
  },
  {
    name: "Greenhills Academy",
    fullUrl: "https://greenhillsacademy.rw/",
    displayUrl: "greenhillsacademy.rw",
    location: "Kigali, Rwanda",
    accentBg: "bg-emerald-700",
    accentText: "text-emerald-700",
    navItems: ["Home", "About", "Curriculum", "Admissions", "Contact"],
    headline: "International Education in the Heart of Kigali",
    tag: "International School",
    stats: [{ label: "Students", value: "900+" }, { label: "Nationalities", value: "30+" }, { label: "Years", value: "15+" }],
  },
  {
    name: "Kiyumba TVET College",
    fullUrl: "https://kiyumbatvet.vercel.app/",
    displayUrl: "kiyumbatvet.vercel.app",
    location: "Rwanda",
    accentBg: "bg-orange-500",
    accentText: "text-orange-500",
    navItems: ["Home", "About", "Courses", "Apply", "Contact"],
    headline: "Practical Skills for Rwanda's Growing Economy",
    tag: "TVET College",
    stats: [{ label: "Students", value: "400+" }, { label: "Trades", value: "10" }, { label: "Graduates", value: "1,200+" }],
  },
  {
    name: "Ntare-Louis Enlund School",
    fullUrl: "https://ntare-louisenlund.org/",
    displayUrl: "ntare-louisenlund.org",
    location: "Mbarara, Uganda",
    accentBg: "bg-indigo-700",
    accentText: "text-indigo-700",
    navItems: ["Home", "About", "Academics", "Community", "Contact"],
    headline: "Excellence Rooted in Values and Academic Rigour",
    tag: "Secondary School",
    stats: [{ label: "Students", value: "1,100+" }, { label: "Staff", value: "90" }, { label: "Years", value: "50+" }],
  },
];

function SchoolMockup({ school }: { school: SchoolSite }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white">
      <div className="bg-gray-100 border-b border-gray-200 px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-2 bg-white rounded border border-gray-200 h-5 flex items-center px-2 gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
          <span className="text-[9px] text-gray-500 font-mono truncate">{school.displayUrl}</span>
        </div>
        <ExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0" />
      </div>
      <div className={`${school.accentBg} px-3 py-2 flex items-center gap-3`}>
        <div className="w-5 h-5 bg-white/30 rounded flex-shrink-0" />
        <span className="text-white font-bold text-[10px] flex-1 truncate">{school.name}</span>
        <div className="hidden sm:flex gap-2.5">
          {school.navItems.slice(0, 3).map((n) => (
            <span key={n} className="text-white/75 text-[9px]">{n}</span>
          ))}
        </div>
      </div>
      <div className="bg-gray-50 border-b border-gray-100 px-4 py-4">
        <span className={`text-[9px] font-semibold ${school.accentText} uppercase tracking-widest`}>{school.tag} — {school.location}</span>
        <h3 className="text-gray-900 font-black text-sm mt-1 mb-2 leading-snug">{school.headline}</h3>
        <div className="flex gap-1.5">
          <div className={`px-2.5 py-1 ${school.accentBg} rounded text-[9px] text-white font-semibold`}>Apply Now</div>
          <div className="px-2.5 py-1 bg-gray-200 rounded text-[9px] text-gray-600 font-semibold">Learn More</div>
        </div>
      </div>
      <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
        {school.stats.map(({ label, value }) => (
          <div key={label} className="py-2.5 px-2 text-center">
            <div className={`font-black text-xs ${school.accentText}`}>{value}</div>
            <div className="text-[9px] text-gray-400 mt-0.5">{label}</div>
          </div>
        ))}
      </div>
      <div className="p-3 grid grid-cols-3 gap-2">
        {["News", "Events", "Calendar"].map((block) => (
          <div key={block} className="bg-gray-50 rounded p-2 border border-gray-100">
            <div className={`w-4 h-4 rounded ${school.accentBg} mb-1.5 opacity-70`} />
            <div className="text-[9px] font-semibold text-gray-600 mb-1">{block}</div>
            <div className="space-y-0.5">
              <div className="h-1 bg-gray-200 rounded w-full" />
              <div className="h-1 bg-gray-200 rounded w-4/5" />
              <div className="h-1 bg-gray-200 rounded w-3/5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_URL ?? "https://wa.me/250787377750";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Work"
          title="Real School Websites We've Built"
          subtitle="These are live websites — click 'View Website' to see each one. This is the level of quality and professionalism we deliver for every client."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {schoolExamples.map((school, i) => (
            <FadeIn key={school.name} delay={i * 0.07}>
              <div className="flex flex-col h-full">
                <SchoolMockup school={school} />
                <div className="mt-3 px-0.5 flex items-start justify-between gap-2">
                  <div>
                    <div className="font-bold text-gray-900 text-sm leading-tight">{school.name}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{school.location}</div>
                  </div>
                  <a
                    href={school.fullUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-1 px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-[11px] font-bold rounded-lg transition-colors mt-0.5"
                  >
                    <ExternalLink className="w-3 h-3" /> View Site
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <div className="bg-white rounded-2xl border border-orange-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-bold text-gray-900 mb-1">Want a website like these for your school or business?</div>
              <p className="text-gray-500 text-sm">Contact us via WhatsApp — we'll respond promptly and walk you through the process.</p>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl transition-colors">
              <MessageCircle className="w-4 h-4" /> Start Your Project
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
