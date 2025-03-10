"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for mobile menu
  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <nav className="sticky top-0 z-50 bg-deep-navy-blue text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-rich-gold"
              onClick={() => setIsOpen(false)}
            >
              ValutHomes NG
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex space-x-8">
            <Link href="/" className="hover:text-rich-gold transition-colors">
              Home
            </Link>
            <div className="group relative">
              <span className="hover:text-rich-gold transition-colors cursor-pointer">
                Properties
              </span>
              {/* Dropdown */}
              <div className="absolute hidden group-hover:block bg-deep-navy-blue shadow-lg rounded-md mt-2">
                <Link
                  href="/properties/for-sale"
                  className="block px-4 py-2 hover:bg-soft-gray hover:text-deep-navy-blue"
                >
                  For Sale
                </Link>
                <Link
                  href="/properties/for-rent"
                  className="block px-4 py-2 hover:bg-soft-gray hover:text-deep-navy-blue"
                >
                  For Rent
                </Link>
                <Link
                  href="/properties/luxury"
                  className="block px-4 py-2 hover:bg-soft-gray hover:text-deep-navy-blue"
                >
                  Luxury Listings
                </Link>
                <Link
                  href="/properties/commercial"
                  className="block px-4 py-2 hover:bg-soft-gray hover:text-deep-navy-blue"
                >
                  Commercial Properties
                </Link>
              </div>
            </div>
            <Link
              href="/agents"
              className="hover:text-rich-gold transition-colors"
            >
              Find an Agent
            </Link>
            <Link
              href="/sell"
              className="hover:text-rich-gold transition-colors"
            >
              Sell Your Property
            </Link>
            <Link
              href="/about"
              className="hover:text-rich-gold transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-rich-gold transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* User Actions */}
          <div className="hidden xl:flex space-x-4 flex items-center">
            <Link
              href="/login"
              className="hover:text-rich-gold transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-rich-gold text-deep-navy-blue px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className="xl:hidden overflow-hidden"
        >
          <div className="flex flex-col space-y-4 py-4">
            <Link
              href="/"
              className="hover:text-rich-gold transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </Link>
            <Link
              href="/properties"
              className="hover:text-rich-gold transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              Properties
            </Link>
            <Link
              href="/agents"
              className="hover:text-rich-gold transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              Find an Agent
            </Link>
            <Link
              href="/sell"
              className="hover:text-rich-gold transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              Sell Your Property
            </Link>
            <Link
              href="/about"
              className="hover:text-rich-gold transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-rich-gold transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              Contact Us
            </Link>
            <Link
              href="/login"
              className="hover:text-rich-gold transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-rich-gold text-deep-navy-blue px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors text-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
