import { motion, useScroll } from "framer-motion";

function ScrollComponent() {
  const { scrollYProgress } = useScroll();

  return <motion.div style={{ scaleX: scrollYProgress }} />;
}

export default ScrollComponent;
