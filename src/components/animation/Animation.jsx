import { motion } from "framer-motion";

export default function Animation({ content }) {
  return (
    <motion.div
      initial={{ opacity: 0, position: "relative" }}
      animate={{ opacity: 1, position: "relative" }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {content}
    </motion.div>
  );
}
