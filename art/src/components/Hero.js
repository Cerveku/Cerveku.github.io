// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white h-screen flex flex-col justify-center items-center">
      <motion.h1
        className="text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Awesome App
      </motion.h1>
      <motion.p
        className="text-2xl mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        A place where innovation meets creativity
      </motion.p>
      <motion.button
        className="bg-white text-indigo-500 px-6 py-3 rounded-full text-xl font-semibold hover:bg-indigo-500 hover:text-white transition duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Get Started
      </motion.button>
    </div>
  );
}

export default Hero;
