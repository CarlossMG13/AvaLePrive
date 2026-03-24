import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SECTION_KEY: Record<string, "gastronomia" | "experiencias"> = {
  "/gastronomia": "gastronomia",
  "/experiencias": "experiencias",
};

export default function PlaceholderPage() {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const key = SECTION_KEY[pathname] ?? "gastronomia";

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Círculos decorativos sutiles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full"
          style={{ border: "1px solid oklch(0.22 0.07 252 / 6%)" }}
        />
        <div
          className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full"
          style={{ border: "1px solid oklch(0.22 0.07 252 / 6%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{ border: "1px solid oklch(0.22 0.07 252 / 3%)" }}
        />
      </div>

      <div className="relative z-10 max-w-[680px] mx-auto px-6 md:px-10 py-32 text-center">
        {/* Divisor superior dorado */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-12 h-px bg-accent-gold mx-auto mb-10 origin-center"
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {/* Eyebrow — color azul navy */}
          <span
            className="text-midnight-navy text-[10px] tracking-[0.38em] uppercase mb-6 block"
            style={{ fontFamily: '"Noto Sans", sans-serif' }}
          >
            {t(`placeholder.${key}.eyebrow`)}
          </span>

          <h1
            className="text-midnight-navy text-4xl md:text-5xl lg:text-6xl font-display italic leading-tight mb-8"
            style={{ fontFamily: '"Noto Serif", serif', fontWeight: 400 }}
          >
            {t(`placeholder.${key}.heading`)}
          </h1>

          <p
            className="text-stone-500 text-base md:text-lg leading-relaxed mb-14 max-w-lg mx-auto"
            style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 300 }}
          >
            {t(`placeholder.${key}.body`)}
          </p>

          {/* Botón CTA dorado */}
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center min-w-[220px] px-10 py-4 border text-[11px] tracking-[0.25em] uppercase transition-all duration-300"
            style={{
              fontFamily: '"Noto Sans", sans-serif',
              backgroundColor: "oklch(0.78 0.12 84)",
              borderColor: "oklch(0.78 0.12 84)",
              color: "oklch(0.22 0.07 252)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "transparent";
              el.style.borderColor = "oklch(0.22 0.07 252)";
              el.style.color = "oklch(0.22 0.07 252)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "oklch(0.78 0.12 84)";
              el.style.borderColor = "oklch(0.78 0.12 84)";
              el.style.color = "oklch(0.22 0.07 252)";
            }}
          >
            {t("nav.cta")}
          </Link>
        </motion.div>

        {/* Divisor inferior dorado */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="w-12 h-px bg-accent-gold mx-auto mt-14 origin-center"
        />
      </div>
    </main>
  );
}
