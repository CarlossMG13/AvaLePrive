import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLangChange = (lang: "es" | "en") => {
    if (lang === currentLang) return;
    i18n.changeLanguage(lang).then(() => window.location.reload());
  };

  const navLinks = [
    { label: t("nav.home"), href: "#" },
    { label: t("nav.gastronomy"), href: "#gastronomy" },
    { label: t("nav.experiences"), href: "#experiences" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
      }`}
      style={{ fontFamily: '"Noto Serif", "Noto Sans", sans-serif' }}
    >
      <div className="px-10 lg:px-20 py-6">
        <header className="flex items-center justify-between">
          {/* Left: Nav Links */}
          <nav className="flex-1 flex items-center gap-8 max-md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white text-[11px] font-medium leading-normal hover:text-accent-gold transition-colors tracking-[0.2em] uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Center: Logo */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 mb-1">
              <svg
                className="size-5 text-accent-gold"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-white text-xl font-bold leading-none tracking-[0.15em] uppercase font-display">
              Avá Lé Privé
            </h2>
          </div>

          {/* Right: Language + CTA */}
          <div className="flex-1 flex items-center justify-end gap-6 lg:gap-10">
            <div className="flex items-center gap-4 text-white text-[11px] tracking-[0.1em] font-medium max-sm:hidden">
              <button
                onClick={() => handleLangChange("es")}
                className={`transition-colors cursor-pointer ${
                  currentLang === "es"
                    ? "text-accent-gold"
                    : "text-white/50 hover:text-accent-gold"
                }`}
              >
                ES
              </button>
              <span className="text-white/30 text-[10px]">|</span>
              <button
                onClick={() => handleLangChange("en")}
                className={`transition-colors cursor-pointer ${
                  currentLang === "en"
                    ? "text-accent-gold"
                    : "text-white/50 hover:text-accent-gold"
                }`}
              >
                EN
              </button>
            </div>
            <button className="flex min-w-[140px] cursor-pointer items-center justify-center h-10 px-6 bg-transparent text-white border border-white hover:border-accent-gold hover:text-accent-gold transition-colors text-[11px] tracking-[0.15em]">
              <span className="truncate">{t("nav.cta")}</span>
            </button>
          </div>
        </header>
      </div>
    </motion.div>
  );
}
