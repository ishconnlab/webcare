import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { WebCareLogo } from "./WebCareLogo";

const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_URL ?? "https://wa.me/250787377750";
const CALL_URL = import.meta.env.VITE_CALL_URL ?? "tel:+250787377750";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Free Tools", href: "/free-tools" },
  { label: "Our Work", href: "/#portfolio" },
  { label: "Why Us", href: "/#why" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
      window.history.replaceState(null, "", href);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-white"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-[72px]">
        <a href="/" className="flex items-center gap-2.5">
          <WebCareLogo size={36} />
          <div>
            <span className="font-black text-gray-900 text-base leading-none block" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>WebCare</span>
            <span className="text-[11px] text-gray-400 leading-none font-medium">by ISHConnect</span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => handleNavClick(e, l.href)} className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors">{l.label}</a>
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
                <a key={l.href} href={l.href} onClick={(e) => { handleNavClick(e, l.href); setOpen(false); }} className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">{l.label}</a>
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
