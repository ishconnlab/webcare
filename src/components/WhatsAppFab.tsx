import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_URL ?? "https://wa.me/250787377750";

export function WhatsAppFab() {
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
