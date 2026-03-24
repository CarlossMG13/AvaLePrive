import { motion } from "framer-motion";
import type { ReactNode } from "react";

const variants = {
  initial: { x: "4%", opacity: 0 },
  enter:   { x: 0,    opacity: 1 },
  exit:    { x: "-4%", opacity: 0 },
};

const transition = {
  duration: 0.45,
  ease: [0.76, 0, 0.24, 1],
};

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={transition}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
