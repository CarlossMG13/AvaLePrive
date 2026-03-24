import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

interface Testimonial {
  quote: string;
  name: string;
  context: string;
}

function TestimonialCard({ item, index }: { item: Testimonial; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
      className="flex flex-col items-center text-center"
    >
      {/* Comilla decorativa */}
      <span
        className="text-accent-gold leading-none mb-6 select-none"
        style={{
          fontFamily: '"Noto Serif", serif',
          fontSize: "5rem",
          lineHeight: 1,
          opacity: 0.85,
        }}
        aria-hidden
      >
        &ldquo;
      </span>

      <p
        className="text-stone-700 font-display italic text-lg leading-relaxed mb-8 max-w-sm"
        style={{ fontFamily: '"Noto Serif", serif' }}
      >
        {item.quote}
      </p>

      {/* Divisor dorado */}
      <div className="w-10 h-px bg-accent-gold mb-5" />

      <h4
        className="text-midnight-navy font-display text-[11px] tracking-[0.22em] uppercase mb-1"
        style={{ fontFamily: '"Noto Serif", serif' }}
      >
        {item.name}
      </h4>
      <p
        className="text-[10px] tracking-[0.18em] uppercase text-stone-400"
        style={{ fontFamily: '"Noto Sans", sans-serif' }}
      >
        {item.context}
      </p>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const items = t("testimonials.items", { returnObjects: true }) as Testimonial[];

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="w-full bg-white border-t border-stone-200">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-24 md:py-32">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <span
            className="text-accent-gold text-[10px] tracking-[0.35em] uppercase mb-4 block"
            style={{ fontFamily: '"Noto Sans", sans-serif' }}
          >
            {t("testimonials.eyebrow")}
          </span>
          <h2
            className="text-4xl md:text-5xl font-display text-midnight-navy leading-tight"
            style={{ fontFamily: '"Noto Serif", serif' }}
          >
            {t("testimonials.heading")}
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {items.map((item, i) => (
            <TestimonialCard key={i} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
