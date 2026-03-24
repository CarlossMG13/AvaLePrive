import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const ROMAN = ["I", "II", "III", "IV", "V"];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isLightPage = pathname !== "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLangChange = (lang: "es" | "en") => {
    if (lang === currentLang) return;
    i18n.changeLanguage(lang).then(() => window.location.reload());
  };

  const navLinks = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.gastronomy"), to: "/gastronomia" },
    { label: t("nav.experiences"), to: "/experiencias" },
  ];

  const handleCTA = () => {
    setMenuOpen(false);
    navigate("/contacto");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{ fontFamily: '"Noto Serif", "Noto Sans", sans-serif' }}
      >
        {/* Background: siempre visible en páginas claras, fade en home */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 backdrop-blur-md ${
            isLightPage || scrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundColor: "oklch(0.22 0.07 252 / 88%)" }}
        />
        <div className="relative px-6 sm:px-10 lg:px-20 py-6">
          <header className="flex items-center justify-between">

            {/* Left: Hamburger (mobile) | Nav Links (desktop) */}
            <div className="flex-1 flex items-center">
              <button
                className="lg:hidden text-white p-1 cursor-pointer"
                onClick={() => setMenuOpen(true)}
                aria-label="Abrir menú"
              >
                <Menu size={22} strokeWidth={1.5} />
              </button>

              <nav className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="text-white text-[11px] font-medium leading-normal hover:text-accent-gold transition-colors tracking-[0.2em] uppercase"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Center: Logo */}
            <Link to="/" className="flex flex-col items-center justify-center">
              <h2 className="text-white text-xl font-bold leading-none tracking-[0.15em] uppercase font-display">
                Avá Lé Privé
              </h2>
            </Link>

            {/* Right: Language + CTA */}
            <div className="flex-1 flex items-center justify-end gap-4 lg:gap-10">
              <div className="flex items-center gap-4 text-white text-[11px] tracking-[0.1em] font-medium">
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

              <button
                onClick={handleCTA}
                className="hidden lg:flex min-w-[140px] cursor-pointer items-center justify-center h-10 px-6 bg-transparent text-white border border-white hover:border-accent-gold hover:text-accent-gold transition-colors text-[11px] tracking-[0.15em]"
              >
                <span className="truncate">{t("nav.cta")}</span>
              </button>
            </div>

          </header>
        </div>
      </motion.div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide panel */}
            <motion.div
              key="panel"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.38, ease: [0.76, 0, 0.24, 1] }}
              className="fixed top-0 left-0 bottom-0 z-50 w-[78vw] max-w-[320px] flex flex-col"
              style={{ backgroundColor: "oklch(0.22 0.07 252)" }}
            >
              {/* Header del slide */}
              <div className="flex items-center justify-between px-7 pt-7 pb-6">
                <span
                  className="text-xs tracking-[0.3em] uppercase text-white/40"
                  style={{ fontFamily: '"Noto Sans", sans-serif' }}
                >
                  Menú
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white/60 hover:text-white transition-colors cursor-pointer"
                  aria-label="Cerrar menú"
                >
                  <X size={18} strokeWidth={1.2} />
                </button>
              </div>

              {/* Separador decorativo */}
              <div className="mx-7 flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-white/15" />
                <span className="text-accent-gold text-[8px] tracking-[0.4em]">✦</span>
                <div className="h-px flex-1 bg-white/15" />
              </div>

              {/* Nav links estilo carta de restaurante */}
              <nav className="flex-1 flex flex-col px-7 gap-1">
                {navLinks.map((link, i) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-start gap-4 py-4 border-b border-white/8 last:border-none"
                  >
                    <span
                      className="text-accent-gold text-[9px] tracking-[0.2em] mt-[3px] min-w-[18px]"
                      style={{ fontFamily: '"Noto Serif", serif' }}
                    >
                      {ROMAN[i]}
                    </span>
                    <span
                      className="text-white/85 group-hover:text-white text-[13px] tracking-[0.18em] uppercase transition-colors"
                      style={{ fontFamily: '"Noto Serif", serif', fontWeight: 400 }}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* CTA al fondo */}
              <div className="px-7 pb-10 pt-6">
                <div className="h-px bg-white/10 mb-6" />
                <button
                  onClick={handleCTA}
                  className="w-full h-11 border border-accent-gold text-accent-gold text-[10px] tracking-[0.22em] uppercase hover:bg-accent-gold/10 transition-colors cursor-pointer"
                  style={{ fontFamily: '"Noto Sans", sans-serif' }}
                >
                  {t("nav.cta")}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
