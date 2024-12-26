import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Header = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = '/hero_image_1.webp';
    img.onload = () => setImageLoaded(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.5 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <header
      className="min-h-screen flex items-center w-full overflow-hidden relative"
      id="Header"
      role="banner"
    >
      <Navbar />

      {/* Skeleton Loader */}
      <div
        className={`
          absolute inset-0 bg-gray-200 
          transition-opacity duration-500 ease-in-out
          ${imageLoaded ? 'opacity-0' : 'opacity-100'}
        `}
        aria-hidden="true"
      />

      {/* Background Image with Overlay */}
      <div
        className={`
          absolute inset-0 bg-cover bg-center
          transition-opacity duration-500 ease-in-out
          after:content-[''] after:absolute after:inset-0 
          after:bg-black/40 after:z-0
          ${imageLoaded ? 'opacity-100' : 'opacity-0'}
        `}
        style={{ backgroundImage: "url('/hero_image_1.webp')" }}
        role="img"
        aria-label="Office background image"
      />

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="container mx-auto py-4 px-6 md:px-20 lg:px-32 text-white relative"
      >
        <motion.h1
          variants={fadeInUp}
          className="
            text-5xl sm:text-6xl md:text-7xl lg:text-[82px]
            font-semibold max-w-3xl mx-auto
            leading-tight tracking-tight
            pt-20
          "
        >
          Empowering Growth, Delivering Talent
        </motion.h1>

        <motion.h2
          variants={fadeInUp}
          className="
            text-2xl sm:text-3xl md:text-4xl
            font-medium max-w-3xl mx-auto
            leading-relaxed
            mt-6
          "
        >
          TTISR your trusted partner for manpower solutions and professional training.
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="mt-12"
        >
          <div className="text-center">
            <a
              href="#Contact"
              className="
      bg-blue-600 hover:bg-blue-700
      px-8 py-3 rounded
      inline-block
      font-medium
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      transform hover:scale-105 active:scale-95
      transition-all duration-200
    "
            >
              Reach Out to Us Today
            </a>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;