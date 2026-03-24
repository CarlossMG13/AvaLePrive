import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function CTASection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-28 md:py-40 overflow-hidden w-full"
      style={{ backgroundColor: "oklch(0.22 0.07 252)" }}
    >
      {/* Círculos decorativos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-[250px] -right-[250px] w-[500px] h-[500px] rounded-full"
          style={{ border: "1px solid oklch(0.78 0.12 84 / 12%)" }}
        />
        <div
          className="absolute -bottom-[250px] -left-[250px] w-[500px] h-[500px] rounded-full"
          style={{ border: "1px solid oklch(0.78 0.12 84 / 12%)" }}
        />
        {/* Círculo interior sutil */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{ border: "1px solid oklch(0.78 0.12 84 / 5%)" }}
        />
      </div>

      {/* Contenido */}
      <div ref={ref} className="relative z-10 max-w-[900px] mx-auto px-6 md:px-12 text-center">

        {/* Divisor superior */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-14 h-px bg-accent-gold mx-auto mb-10 origin-center"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <span
            className="text-accent-gold text-[10px] tracking-[0.38em] uppercase mb-6 block"
            style={{ fontFamily: '"Noto Sans", sans-serif' }}
          >
            {t("cta.eyebrow")}
          </span>

          <h2
            className="text-white text-5xl md:text-6xl lg:text-7xl font-display italic leading-tight mb-10"
            style={{ fontFamily: '"Noto Serif", serif', fontWeight: 400 }}
          >
            {t("cta.heading")}
          </h2>

          <p
            className="text-white/65 text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto"
            style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 300 }}
          >
            {t("cta.body")}
          </p>

          <Link
            to="/contacto"
            className="inline-flex items-center justify-center h-14 min-w-[220px] px-10 border text-[11px] tracking-[0.25em] uppercase transition-all duration-300 font-medium"
            style={{
              fontFamily: '"Noto Sans", sans-serif',
              backgroundColor: "oklch(0.78 0.12 84)",
              borderColor: "oklch(0.78 0.12 84)",
              color: "oklch(0.22 0.07 252)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "transparent";
              el.style.borderColor = "white";
              el.style.color = "white";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "oklch(0.78 0.12 84)";
              el.style.borderColor = "oklch(0.78 0.12 84)";
              el.style.color = "oklch(0.22 0.07 252)";
            }}
          >
            {t("cta.button")}
          </Link>
        </motion.div>

        {/* Divisor inferior */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="w-14 h-px bg-accent-gold mx-auto mt-14 origin-center"
        />

      </div>
    </section>
  );
}
