import React from "react";
import { motion } from "framer-motion";
type Props = {};

function Footer({}: Props) {
  return (
    <motion.section
      key="stack"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-4 text-center text-[12px] text-white"
    >
      {`HM@${new Date().getFullYear()}`}
    </motion.section>
  );
}

export default Footer;
