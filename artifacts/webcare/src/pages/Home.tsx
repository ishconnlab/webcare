import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  Shield,
  Wrench,
  CheckCircle,
  Award,
  Zap,
  HeartHandshake,
  GraduationCap,
  Phone,
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  Monitor,
  Layout,
  Users,
  TrendingUp,
  ExternalLink,
  Building2,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/250787377750";
const CALL_URL = "tel:+250787377750";
const WEBSITE_URL = "https://www.ishconnect.rw/";

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return scrolled;
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function WebCareLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-label="WebCare logo">
      <circle cx="18" cy="18" r="17" stroke="#F97316" strokeWidth="2" />
      <ellipse cx="18" cy="18" rx="8" ry="17" stroke="#F97316" strokeWidth="1.5" fill="none" opacity="0.45" />
      <line x1="1" y1="18" x2="35" y2="18" stroke="#F97316" strokeWidth="1.4" opacity="0.45" />
      <path d="M4 11h28M4 25h28" stroke="#F97316" strokeWidth="1.1" opacity="0.3" />
      <path d="M18 8l6 2.5v5c0 3.5-2.5 6.5-6 7.5-3.5-1-6-4-6-7.5v-5L18 8z" fill="white" stroke="#F97316" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M15.5 17l2 2 3-3.5" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 text-orange-600 text-[11px] font-semibold rounded-full uppercase tracking-widest border border-orange-100">
      {children}
    </span>
  );
}

function SectionHeading({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string }) {
  return (
    <FadeIn className="text-center mb-14">
      <Badge>{badge}</Badge>
      <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-gray-900 mt-4 mb-4 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {title}
      </h2>
      {subtitle && <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </FadeIn>
  );
}

/* ── Nav ── */
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#portfolio" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-white"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-[72px]">
        <a href="#" className="flex items-center gap-2.5">
          <WebCareLogo size={36} />
          <div>
            <span className="font-black text-gray-900 text-base leading-none block" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>WebCare</span>
            <span className="text-[11px] text-gray-400 leading-none font-medium">by ISHConnect</span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href={CALL_URL} className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors px-3 py-2">
            <Phone className="w-4 h-4" /> +250 787 377 750
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-xl transition-colors">
            <MessageCircle className="w-4 h-4" /> WhatsApp Us
          </a>
        </div>

        <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="lg:hidden bg-white border-b border-gray-100 overflow-hidden">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">{l.label}</a>
              ))}
              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                <a href={CALL_URL} className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg"><Phone className="w-4 h-4 text-orange-500" /> +250 787 377 750</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-3 py-2.5 bg-orange-500 text-white text-sm font-bold rounded-xl"><MessageCircle className="w-4 h-4" /> WhatsApp Us Now</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #F97316 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/3 opacity-70" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-50 rounded-full translate-y-1/3 -translate-x-1/4 opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Badge>Web Development — Rwanda &amp; Beyond</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-[3.75rem] font-black text-gray-900 leading-[1.06] tracking-tight mt-6 mb-5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Build a Strong <span className="text-orange-500">Digital Presence</span> with WebCare
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }} className="text-gray-500 text-xl leading-relaxed mb-10 max-w-2xl">
            ISHConnect's web development service — building high-performance websites for schools and businesses across Rwanda and beyond.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col sm:flex-row gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors shadow-sm">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us Now
            </a>
            <a href={CALL_URL} className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl transition-colors">
              <Phone className="w-5 h-5" /> Call Directly
            </a>
            <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border-2 border-gray-200 hover:border-orange-300 hover:text-orange-600 text-gray-700 font-bold rounded-xl transition-colors">
              <Globe className="w-5 h-5" /> www.ishconnect.rw
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.65 }} className="flex flex-wrap items-center gap-6 mt-12 pt-10 border-t border-gray-100">
            {["Professional results", "Fast delivery", "1-year support included", "Mobile-first design"].map((l) => (
              <div key={l} className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" strokeWidth={2.5} /> {l}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── About ── */
function About() {
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
              ].map(({ icon: Icon, title, desc }, i) => (
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

/* ── Services ── */
const services = [
  { icon: Layout, title: "Website Design & Development", desc: "Fully custom websites, designed and developed from the ground up. Clean code, fast load times, and a design that reflects your brand." },
  { icon: GraduationCap, title: "School & Business Website Systems", desc: "Purpose-built for educational institutions and businesses — with the right structure, pages, and features for your sector." },
  { icon: Smartphone, title: "Responsive Mobile Design", desc: "Every website we deliver works flawlessly across all devices — from smartphones to large desktop screens." },
  { icon: Palette, title: "UI/UX Design", desc: "Clean, professional interfaces designed to make a strong first impression and guide users toward the actions that matter." },
  { icon: Shield, title: "Security & Performance", desc: "SSL certificate setup, speed optimisation, uptime monitoring, and hardened security — protecting your site and your reputation." },
  { icon: Wrench, title: "Maintenance & Support — 12 Months", desc: "Ongoing technical support, content updates, and bug fixes for 12 months after launch. You are never left unsupported." },
];

function Services() {
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

/* ── Trusted Partners / Clients ── */
const trustedClients = [
  { name: "EdTech Solutions", type: "EdTech Partner", country: "Rwanda" },
  { name: "ISHVexa", type: "Technology Partner", country: "Rwanda" },
  { name: "Rwanda Coding Academy", type: "Education", country: "Kigali, Rwanda" },
  { name: "Greenhills Academy", type: "International School", country: "Kigali, Rwanda" },
  { name: "Kiyumba TVET", type: "Vocational College", country: "Rwanda" },
  { name: "Ntare-Louis Enlund School", type: "Secondary School", country: "Uganda" },
  { name: "Université du Rwanda", type: "University", country: "Kigali, Rwanda" },
  { name: "AUCA", type: "University", country: "Kigali, Rwanda" },
  { name: "St. Mary's College", type: "Secondary School", country: "Uganda" },
  { name: "INES Ruhengeri", type: "Institute", country: "Musanze, Rwanda" },
  { name: "Kaiserslautern School", type: "International School", country: "Tanzania" },
  { name: "Hillcrest Secondary", type: "Secondary School", country: "Nairobi, Kenya" },
];

function TrustedBy() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Trusted by schools, institutions &amp; technology partners</p>
          <p className="text-gray-500 text-sm">across Rwanda and East Africa</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {trustedClients.map((client, i) => (
              <div key={client.name} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/40 transition-all">
                <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-500 font-black text-xs">{client.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}</span>
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900 text-xs leading-tight truncate">{client.name}</div>
                  <div className="text-gray-400 text-[10px] truncate">{client.country}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Portfolio: School Website Examples ── */
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
      {/* Browser chrome */}
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
      {/* Site nav */}
      <div className={`${school.accentBg} px-3 py-2 flex items-center gap-3`}>
        <div className="w-5 h-5 bg-white/30 rounded flex-shrink-0" />
        <span className="text-white font-bold text-[10px] flex-1 truncate">{school.name}</span>
        <div className="hidden sm:flex gap-2.5">
          {school.navItems.slice(0, 3).map((n) => (
            <span key={n} className="text-white/75 text-[9px]">{n}</span>
          ))}
        </div>
      </div>
      {/* Hero */}
      <div className="bg-gray-50 border-b border-gray-100 px-4 py-4">
        <span className={`text-[9px] font-semibold ${school.accentText} uppercase tracking-widest`}>{school.tag} — {school.location}</span>
        <h3 className="text-gray-900 font-black text-sm mt-1 mb-2 leading-snug">{school.headline}</h3>
        <div className="flex gap-1.5">
          <div className={`px-2.5 py-1 ${school.accentBg} rounded text-[9px] text-white font-semibold`}>Apply Now</div>
          <div className="px-2.5 py-1 bg-gray-200 rounded text-[9px] text-gray-600 font-semibold">Learn More</div>
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
        {school.stats.map(({ label, value }) => (
          <div key={label} className="py-2.5 px-2 text-center">
            <div className={`font-black text-xs ${school.accentText}`}>{value}</div>
            <div className="text-[9px] text-gray-400 mt-0.5">{label}</div>
          </div>
        ))}
      </div>
      {/* Content preview */}
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

function Portfolio() {
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

/* ── Why Us ── */
const benefits = [
  { icon: Award, title: "Professional Identity", desc: "A website that positions your school or business as credible and authoritative — built to make the right impression from the first click." },
  { icon: TrendingUp, title: "Increased Trust & Reputation", desc: "Clients, students, and partners judge your credibility online before they ever contact you. We make sure that judgement works in your favour." },
  { icon: Users, title: "Clear Communication", desc: "Well-structured content that answers the questions your audience is asking — presented cleanly, without confusion." },
  { icon: Globe, title: "Wider Reach", desc: "A professionally indexed, SEO-structured website ensures your organisation is discoverable locally and internationally." },
  { icon: Zap, title: "Speed & Performance", desc: "Fast-loading websites that score highly on Google's performance metrics — reducing bounce rate and improving search rankings." },
  { icon: HeartHandshake, title: "12-Month Support", desc: "Dedicated technical support for a full year post-launch. Content updates, fixes, and improvements — handled promptly." },
];

function WhyUs() {
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

/* ── Vision ── */
function Vision() {
  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-6">
            <Monitor className="w-7 h-7 text-orange-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Digital Transformation for Rwanda's Schools and Businesses
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto text-lg mb-6">
            WebCare is not just a web development service — it is part of ISHConnect's broader mission to modernise institutions across Rwanda through accessible, high-quality digital infrastructure.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
            When a school has a strong online presence, it reaches more families, communicates better, and earns trust faster. When a business has a professional website, it closes more clients. That is the outcome every WebCare project is built to deliver.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── ISHConnect ── */
function Ishconnect() {
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

/* ── Contact ── */
function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <Badge>Contact</Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Get in Touch
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Reach us directly via WhatsApp or phone. We respond promptly and can start discussing your project right away.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base rounded-2xl transition-colors">
              <MessageCircle className="w-5 h-5" /> WhatsApp Now
            </motion.a>
            <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              href={CALL_URL}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-base rounded-2xl transition-all">
              <Phone className="w-5 h-5" /> Call Now
            </motion.a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 border-t border-white/10 pt-8">
            <a href={CALL_URL} className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <Phone className="w-4 h-4 text-orange-500" /> +250 787 377 750
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <MessageCircle className="w-4 h-4 text-orange-500" /> wa.me/250787377750
            </a>
            <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <Globe className="w-4 h-4 text-orange-500" /> www.ishconnect.rw
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="bg-gray-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-6">
          <div className="flex items-center gap-2.5">
            <WebCareLogo size={30} />
            <div>
              <span className="font-bold text-white text-sm leading-none block" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>WebCare</span>
              <span className="text-[11px] text-gray-500 leading-none">by ISHConnect</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-500">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/5">
          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} ISHConnect. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <a href={CALL_URL} className="flex items-center gap-1.5 hover:text-white transition-colors"><Phone className="w-3.5 h-3.5 text-orange-500" /> +250 787 377 750</a>
            <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors"><Globe className="w-3.5 h-3.5 text-orange-500" /> www.ishconnect.rw</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Floating WhatsApp ── */
function WhatsAppFab() {
  return (
    <motion.a
      href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 22 }}
      whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 pl-4 pr-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-full shadow-lg shadow-orange-500/25 transition-colors"
      aria-label="WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-20" />
      <MessageCircle className="w-5 h-5 relative" strokeWidth={2} /> <span className="relative">WhatsApp Us</span>
    </motion.a>
  );
}

/* ── Page ── */
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <Portfolio />
        <WhyUs />
        <Vision />
        <Ishconnect />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
