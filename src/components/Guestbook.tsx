import React from "react";
import { motion } from "framer-motion";
type Props = {};

function Guestbook({}: Props) {
  return (
    <motion.section
      key="guestbook"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      Guestbook
    </motion.section>
  );
}

export default Guestbook;
