import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import editorialImg1 from "@/assets/img/editorial-1.jpg";
import editorialImg2 from "@/assets/img/editorial-2.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

interface EditorialBlockProps {
  eyebrow: string;
  heading: string;
  body: string;
  cta: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

function EditorialBlock({
  eyebrow,
  heading,
  body,
  cta,
  imageSrc,
  imageAlt,
  reversed = false,
}: EditorialBlockProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const imageBlock = (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full lg:w-1/2 relative group overflow-visible"
    >
      {/* Decorative gold border offset */}
      <div
        className={`absolute inset-0 border border-accent-gold pointer-events-none z-10 hidden lg:block ${
          reversed
            ? "translate-x-4 translate-y-4"
            : "-translate-x-4 -translate-y-4"
        }`}
      />
      <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] w-full overflow-hidden bg-stone-100">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>
    </motion.div>
  );

  const textBlock = (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`w-full lg:w-1/2 flex flex-col justify-center text-center ${
        reversed ? "lg:text-right" : "lg:text-left"
      }`}
    >
      <span className="text-accent-gold text-[10px] tracking-[0.35em] uppercase mb-4 block font-body">
        {eyebrow}
      </span>
      <h3 className="text-4xl md:text-5xl font-display text-midnight-navy mb-8 leading-tight">
        {heading}
      </h3>
      <p
        className={`text-stone-600 font-body text-base leading-relaxed mb-10 max-w-lg mx-auto ${
          reversed ? "lg:ml-auto lg:mr-0" : "lg:mx-0"
        }`}
      >
        {body}
      </p>
      <div
        className={`flex ${reversed ? "lg:justify-end" : "lg:justify-start"} justify-center`}
      >
        <Link
          to="/contacto"
          className="inline-flex h-12 w-[200px] items-center justify-center bg-midnight-navy text-white text-[11px] tracking-[0.18em] uppercase hover:bg-midnight-navy/85 transition-colors font-body"
        >
          {cta}
        </Link>
      </div>
    </motion.div>
  );

  return (
    <div
      ref={ref}
      className={`flex flex-col ${reversed ? "flex-col-reverse" : ""} lg:flex-row items-center gap-12 lg:gap-24`}
    >
      {reversed ? (
        <>
          {textBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {textBlock}
        </>
      )}
    </div>
  );
}

export default function EditorialSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-32 bg-stone-50 w-full">
      <div className="px-6 sm:px-12 lg:px-20 xl:px-28 max-w-[1680px] mx-auto">
        <div className="mb-20 lg:mb-28">
          <EditorialBlock
            eyebrow={t("editorial.block1.eyebrow")}
            heading={t("editorial.block1.heading")}
            body={t("editorial.block1.body")}
            cta={t("editorial.block1.cta")}
            imageSrc={editorialImg1}
            imageAlt="Plato de alta cocina"
          />
        </div>

        <EditorialBlock
          eyebrow={t("editorial.block2.eyebrow")}
          heading={t("editorial.block2.heading")}
          body={t("editorial.block2.body")}
          cta={t("editorial.block2.cta")}
          imageSrc={editorialImg2}
          imageAlt="Mesa de cena privada"
          reversed
        />
      </div>
    </section>
  );
}
