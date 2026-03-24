import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-midnight-navy">
      {/* Geometric Frame */}
      <div className="hero-frame" />

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Center Headline */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="text-white text-5xl md:text-5xl font-normal leading-tight tracking-[-0.01em] max-w-5xl mx-auto font-display italic"
        >
          {t("hero.headline")}
        </motion.h1>

        {/* Gold Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 }}
          className="mt-12 w-32 h-px bg-accent-gold origin-center"
        />
      </div>

      {/* Info Box — Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
        className="absolute bottom-5 right-20 z-20 w-[340px] max-lg:bottom-12 max-lg:right-12 max-md:right-6 max-md:left-6 max-md:bottom-10 max-md:w-auto"
      >
        <div className="relative bg-[#FDFBF7]/90 backdrop-blur-md border border-accent-gold/30 p-10 text-center">
          {/* Ornamental Corners */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-accent-gold" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-accent-gold" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-accent-gold" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-accent-gold" />

          <h3 className="text-midnight-navy text-2xl font-display mb-4 tracking-widest uppercase">
            Avá Lé Privé
          </h3>
          <p className="text-zinc-700 text-sm md:text-base font-body leading-relaxed">
            {t("hero.infoBox")}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
