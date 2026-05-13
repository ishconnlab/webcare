import { Phone, Globe } from "lucide-react";
import { WebCareLogo } from "./WebCareLogo";

const CALL_URL = import.meta.env.VITE_CALL_URL ?? "tel:+250787377750";
const WEBSITE_URL = import.meta.env.VITE_SITE_URL ?? "https://www.ishconnect.rw/";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/#portfolio" },
  { label: "Why Us", href: "/#why" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
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
