import { motion } from "framer-motion";
import { MessageCircle, Phone, Globe } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { Badge } from "./Badge";

const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_URL ?? "https://wa.me/250787377750";
const CALL_URL = import.meta.env.VITE_CALL_URL ?? "tel:+250787377750";
const WEBSITE_URL = import.meta.env.VITE_SITE_URL ?? "https://www.ishconnect.rw/";

export function Contact() {
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
