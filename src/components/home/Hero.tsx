// app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center"
      //   style={{ backgroundImage: "url('/path-to-hero-image.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-deep-navy-blue opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center text-white">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-playfair font-bold mb-4"
        >
          Find Your Dream Home with Ease
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl font-inter mb-8"
        >
          Explore the best properties in Nigeria with ValutHomes NG
        </motion.p>

        {/* Search Bar (Placeholder) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg p-4 shadow-lg w-full max-w-2xl flex items-center space-x-4"
        >
          <input
            type="text"
            placeholder="Search by location, property type..."
            className="flex-1 p-2 rounded-md border border-soft-gray focus:outline-none focus:ring-2 focus:ring-rich-gold font-inter text-deep-navy-blue"
          />
          <button className="bg-rich-gold text-deep-navy-blue px-6 py-2 rounded-md hover:bg-yellow-400 transition-colors font-poppins">
            Search
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
