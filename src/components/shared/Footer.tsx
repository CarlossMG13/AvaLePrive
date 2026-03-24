import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 border-t border-accent-gold/20">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center">
        {/* Logo */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-xl font-normal tracking-[0.15em] uppercase mb-6"
        >
          Avá Lé Privé
        </motion.span>

        {/* Social/Contact Icons */}
        <div className="flex gap-6 mb-8">
          <a
            href="mailto:contacto@avaleprive.com"
            className="text-white/60 hover:text-accent-gold transition-colors"
            aria-label="Correo"
          >
            <Mail className="size-5" />
          </a>
          <a
            href="tel:+17875550000"
            className="text-white/60 hover:text-accent-gold transition-colors"
            aria-label="Teléfono"
          >
            <Phone className="size-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="font-body text-xs font-light text-white/40 uppercase tracking-[2px]">
          © 2026 Avá Lé Privé. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
