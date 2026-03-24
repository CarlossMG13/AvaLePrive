import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin } from "lucide-react";
import contactImg from "@/assets/img/contact.jpg";

const INPUT_BASE =
  "w-full bg-transparent border-0 border-b pb-3 pt-1 text-white/90 placeholder:text-white/30 text-[13px] tracking-wider focus:outline-none transition-colors duration-300";

const NAVY = "oklch(0.22 0.07 252)";
const NAVY_LIGHT = "oklch(0.27 0.07 252)";
const GOLD = "oklch(0.78 0.12 84)";

function FormInput({
  id,
  name,
  type = "text",
  placeholder,
  required,
  min,
  max,
}: {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  min?: number;
  max?: number;
}) {
  return (
    <div>
      <label className="sr-only" htmlFor={id}>
        {placeholder}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        className={INPUT_BASE}
        style={{ borderBottomColor: "oklch(1 0 0 / 20%)" }}
        onFocus={(e) => (e.currentTarget.style.borderBottomColor = GOLD)}
        onBlur={(e) =>
          (e.currentTarget.style.borderBottomColor = "oklch(1 0 0 / 20%)")
        }
      />
    </div>
  );
}

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen flex items-center justify-center py-32 md:py-40 px-4 sm:px-8 bg-stone-50">
      <div className="w-full max-w-[1000px] flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* ── Columna izquierda (40%) ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-2/5 flex flex-col justify-between"
        >
          {/* Encabezado */}
          <div className="mb-12">
            <h1
              className="text-midnight-navy text-4xl md:text-5xl lg:text-[56px] leading-[1.1] mb-6"
              style={{ fontFamily: '"Noto Serif", serif', fontWeight: 400 }}
            >
              Solicite su{" "}
              <span className="italic font-light">
                <br />
                Experiencia
              </span>
            </h1>
            <div className="w-16 h-px bg-accent-gold mb-7" />
            <p
              className="text-stone-500 text-sm leading-[1.9] max-w-xs"
              style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 300 }}
            >
              Permítanos diseñar un menú a medida para su próximo evento privado
              en Puerto Rico. Complete los detalles y nuestro equipo le
              contactará para una consulta personalizada.
            </p>
          </div>

          {/* Imagen con marco offset */}
          <div className="hidden lg:block relative w-4/5 ml-3 mb-10">
            <div className="absolute inset-0 -translate-x-3 -translate-y-3 border border-accent-gold/50 pointer-events-none z-10" />
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-200">
              <img
                src={contactImg}
                alt="Experiencia gastronómica privada"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
              />
            </div>
          </div>

          {/* Información de contacto */}
          <div className="flex flex-col gap-5">
            <span
              className="text-stone-400 text-[10px] tracking-[0.32em] uppercase mb-1"
              style={{ fontFamily: '"Noto Sans", sans-serif' }}
            >
              Contacto Directo
            </span>

            <a
              href="tel:+17875550100"
              className="group flex items-center gap-4"
            >
              <Phone
                size={15}
                strokeWidth={1.5}
                className="text-accent-gold shrink-0"
              />
              <span
                className="text-stone-600 group-hover:text-accent-gold text-[12px] tracking-[0.15em] transition-colors duration-300"
                style={{ fontFamily: '"Noto Sans", sans-serif' }}
              >
                +1 (787) 555-0100
              </span>
            </a>

            <a
              href="mailto:concierge@avaleprive.com"
              className="group flex items-center gap-4"
            >
              <Mail
                size={15}
                strokeWidth={1.5}
                className="text-accent-gold shrink-0"
              />
              <span
                className="text-stone-600 group-hover:text-accent-gold text-[12px] tracking-[0.15em] transition-colors duration-300"
                style={{ fontFamily: '"Noto Sans", sans-serif' }}
              >
                concierge@avaleprive.com
              </span>
            </a>

            <div className="flex items-start gap-4">
              <MapPin
                size={15}
                strokeWidth={1.5}
                className="text-accent-gold shrink-0 mt-0.5"
              />
              <span
                className="text-stone-600 text-[12px] tracking-[0.15em] leading-[1.9]"
                style={{ fontFamily: '"Noto Sans", sans-serif' }}
              >
                San Juan, Puerto Rico
                <br />
                Servicio en toda la isla
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Columna derecha — Formulario (60%) ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="w-full lg:w-3/5"
        >
          <div
            className="p-8 sm:p-12 lg:p-16 h-full"
            style={{
              backgroundColor: "oklch(0.22 0.07 252)",
              backdropFilter: "blur(8px)",
            }}
          >
            {/* Header del formulario */}
            <h2
              className="text-[11px] uppercase tracking-[0.28em] text-white/40 mb-8 pb-4 border-b border-white/10"
              style={{ fontFamily: '"Noto Sans", sans-serif' }}
            >
              Detalles de la Reserva
            </h2>

            <form
              id="contact-form"
              className="flex flex-col gap-8"
              onSubmit={(e) => e.preventDefault()}
              /* TODO: reemplazar onSubmit con el handler de WhatsApp */
            >
              {/* Nombre + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FormInput
                  id="fullName"
                  name="fullName"
                  placeholder="Nombre Completo"
                  required
                />
                <FormInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Correo Electrónico"
                  required
                />
              </div>

              {/* Teléfono + Tipo de servicio */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FormInput
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Teléfono"
                />
                <div>
                  <label className="sr-only" htmlFor="serviceType">
                    Tipo de Servicio
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    className={`${INPUT_BASE} cursor-pointer`}
                    style={{
                      borderBottomColor: "oklch(1 0 0 / 20%)",
                      backgroundColor: "transparent",
                      color: "oklch(1 0 0 / 30%)",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderBottomColor = GOLD)
                    }
                    onBlur={(e) => {
                      e.currentTarget.style.borderBottomColor =
                        "oklch(1 0 0 / 20%)";
                      e.currentTarget.style.color = e.currentTarget.value
                        ? "oklch(0.9 0 0 / 90%)"
                        : "oklch(1 0 0 / 30%)";
                    }}
                    onChange={(e) => {
                      e.currentTarget.style.color = "oklch(0.9 0 0 / 90%)";
                    }}
                  >
                    <option
                      value=""
                      disabled
                      hidden
                      style={{ backgroundColor: NAVY_LIGHT }}
                    >
                      Tipo de Servicio
                    </option>
                    <option
                      value="private_chef"
                      style={{ backgroundColor: NAVY_LIGHT, color: "white" }}
                    >
                      Chef Privado en Residencia
                    </option>
                    <option
                      value="yacht"
                      style={{ backgroundColor: NAVY_LIGHT, color: "white" }}
                    >
                      Catering para Yates
                    </option>
                    <option
                      value="wedding"
                      style={{ backgroundColor: NAVY_LIGHT, color: "white" }}
                    >
                      Bodas Íntimas
                    </option>
                    <option
                      value="corporate"
                      style={{ backgroundColor: NAVY_LIGHT, color: "white" }}
                    >
                      Evento Corporativo Elite
                    </option>
                    <option
                      value="other"
                      style={{ backgroundColor: NAVY_LIGHT, color: "white" }}
                    >
                      Otro (Especificar en detalles)
                    </option>
                  </select>
                </div>
              </div>

              {/* Invitados + Fecha */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FormInput
                  id="guests"
                  name="guests"
                  type="number"
                  placeholder="Número de Invitados"
                  min={2}
                  max={500}
                />
                <FormInput
                  id="eventDate"
                  name="eventDate"
                  placeholder="Fecha del Evento (DD/MM/AAAA)"
                />
              </div>

              {/* Detalles adicionales */}
              <div>
                <label className="sr-only" htmlFor="details">
                  Detalles Adicionales
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={3}
                  placeholder="Detalles adicionales (preferencias dietéticas, ubicación, alergias...)"
                  className={`${INPUT_BASE} resize-none`}
                  style={{ borderBottomColor: "oklch(1 0 0 / 20%)" }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderBottomColor = GOLD)
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderBottomColor =
                      "oklch(1 0 0 / 20%)")
                  }
                />
              </div>

              {/* Submit */}
              <div className="pt-4 border-t border-white/10">
                <button
                  type="submit"
                  className="w-full py-4 text-[11px] uppercase tracking-[0.25em] transition-all duration-300 cursor-pointer"
                  style={{
                    fontFamily: '"Noto Sans", sans-serif',
                    backgroundColor: GOLD,
                    color: NAVY,
                    border: `1px solid ${GOLD}`,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.backgroundColor = "transparent";
                    el.style.borderColor = "white";
                    el.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.backgroundColor = GOLD;
                    el.style.borderColor = GOLD;
                    el.style.color = NAVY;
                  }}
                >
                  {t("cta.button")}
                </button>
                <p
                  className="text-center text-[10px] text-white/30 mt-4 tracking-widest"
                  style={{ fontFamily: '"Noto Sans", sans-serif' }}
                >
                  Nos pondremos en contacto en un plazo de 24 horas.
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
