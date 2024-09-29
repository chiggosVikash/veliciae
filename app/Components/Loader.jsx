import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="rounded-full h-16 w-16 border-t-4 border-b-4 border-accent"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default Loader;
