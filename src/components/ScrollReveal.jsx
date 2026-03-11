import { motion } from "framer-motion";

function ScrollReveal({ children, className = "", delay = 0, yOffset = 40 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 80,
        delay,
        duration: 0.8,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
