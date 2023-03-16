import React from 'react';
import { motion } from "framer-motion";

export const DeleteUser = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1.5 }}
    >
        <div className='DeleteContainer'>
            <p>P tag</p>
        </div>
    </motion.div>
    
  );
}