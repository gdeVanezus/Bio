import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

export default Card;
