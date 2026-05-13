import { motion } from "framer-motion";
import { MessageCircle, Phone, Globe, CheckCircle } from "lucide-react";
import { Badge } from "./Badge";

const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_URL ?? "https://wa.me/250787377750";
const CALL_URL = import.meta.env.VITE_CALL_URL ?? "tel:+250787377750";
const WEBSITE_URL = import.meta.env.VITE_SITE_URL ?? "https://www.ishconnect.rw/";

export function Hero() {
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
