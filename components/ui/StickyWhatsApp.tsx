"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function StickyWhatsApp() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: "spring" }}
      className="fixed bottom-6 right-5 z-40 sm:hidden"
    >
      <Link
        href={siteConfig.WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join WhatsApp community"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform"
      >
        <MessageCircle size={26} />
      </Link>
    </motion.div>
  );
}
