"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPropertiesDropdownOpen, setIsPropertiesDropdownOpen] =
    useState(false); // Renamed for clarity
  const [isListPropertyDropdownOpen, setIsListPropertyDropdownOpen] =
    useState(false); // New state for List Your Property dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listPropertyDropdownRef = useRef<HTMLDivElement>(null); // New ref for the new dropdown
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdowns and mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        listPropertyDropdownRef.current &&
        !listPropertyDropdownRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
        setIsPropertiesDropdownOpen(false);
        setIsListPropertyDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Animation variants for mobile menu
  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  // Animation variants for dropdown
  const dropdownVariants = {
    closed: { opacity: 0, y: -10, height: 0 },
    open: {
      opacity: 1,
      y: 0,
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
              className="text-2xl font-playfair font-bold text-rich-gold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ValutHomes NG
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex space-x-8 font-poppins">
            <Link href="/" className="hover:text-rich-gold transition-colors">
              Home
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() =>
                  setIsPropertiesDropdownOpen(!isPropertiesDropdownOpen)
                }
                className="flex items-center hover:text-rich-gold transition-colors focus:outline-none"
              >
                Properties
                <FaChevronDown
                  size={14}
                  className={`ml-1 transform transition-transform duration-300 ${
                    isPropertiesDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <motion.div
                variants={dropdownVariants}
                initial="closed"
                animate={isPropertiesDropdownOpen ? "open" : "closed"}
                className="absolute left-0 mt-2 w-48 bg-deep-navy-blue shadow-lg rounded-md overflow-hidden"
              >
                <Link
                  href="/properties"
                  onClick={() => setIsPropertiesDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-soft-gray hover:text-deep-navy-blue transition-colors"
                >
                  All Properties
                </Link>
                <Link
                  href="/properties/for-sale"
                  onClick={() => setIsPropertiesDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-soft-gray hover:text-deep-navy-blue transition-colors"
                >
                  For Sale
                </Link>
                <Link
                  href="/properties/for-rent"
                  onClick={() => setIsPropertiesDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-soft-gray hover:text-deep-navy-blue transition-colors"
                >
                  For Rent
                </Link>
                <Link
                  href="/properties/luxury"
                  onClick={() => setIsPropertiesDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-soft-gray hover:text-deep-navy-blue transition-colors"
                >
                  Luxury Listings
                </Link>
                <Link
                  href="/properties/commercial"
                  onClick={() => setIsPropertiesDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-soft-gray hover:text-deep-navy-blue transition-colors"
                >
                  Commercial Properties
                </Link>
              </motion.div>
            </div>
            <Link
              href="/agents"
              className="hover:text-rich-gold transition-colors"
            >
              Find an Agent
            </Link>
            {/* New "List Your Property" Dropdown */}
            <div className="relative" ref={listPropertyDropdownRef}>
              <button
                onClick={() =>
                  setIsListPropertyDropdownOpen(!isListPropertyDropdownOpen)
                }
                className="flex items-center hover:text-rich-gold transition-colors focus:outline-none"
              >
                List Your Property
                <FaChevronDown
                  size={14}
                  className={`ml-1 transform transition-transform duration-300 ${
                    isListPropertyDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <motion.div
                variants={dropdownVariants}
                initial="closed"
                animate={isListPropertyDropdownOpen ? "open" : "closed"}
                className="absolute left-0 mt-2 w-48 bg-deep-navy-blue shadow-lg rounded-md overflow-hidden"
              >
                <Link
                  href="/sell"
                  onClick={() => setIsListPropertyDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-soft-gray hover:text-deep-navy-blue transition-colors"
                >
                  Sell Your Property
                </Link>
                <Link
                  href="/rent-property"
                  onClick={() => setIsListPropertyDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-soft-gray hover:text-deep-navy-blue transition-colors"
                >
                  Rent Your Property
                </Link>
              </motion.div>
            </div>
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
          <div className="hidden xl:flex items-center space-x-4 font-poppins">
            <Link
              href="/login"
              className="hover:text-rich-gold transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-emerald-green text-white px-4 py-2 rounded-md hover:bg-green-500 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={menuVariants}
          className="xl:hidden overflow-hidden"
          ref={mobileMenuRef}
        >
          <div className="flex flex-col space-y-4 py-4">
            <Link
              href="/"
              className="hover:text-rich-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div>
              <button
                onClick={() =>
                  setIsPropertiesDropdownOpen(!isPropertiesDropdownOpen)
                }
                className="flex items-center hover:text-rich-gold transition-colors"
              >
                Properties
                <FaChevronDown
                  size={14}
                  className={`ml-1 transform transition-transform duration-300 ${
                    isPropertiesDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <motion.div
                variants={dropdownVariants}
                initial="closed"
                animate={isPropertiesDropdownOpen ? "open" : "closed"}
                className="pl-4 mt-2 space-y-2"
              >
                <Link
                  href="/properties"
                  onClick={() => {
                    setIsPropertiesDropdownOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block hover:text-rich-gold transition-colors"
                >
                  All Properties
                </Link>
                <Link
                  href="/properties/for-sale"
                  onClick={() => {
                    setIsPropertiesDropdownOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block hover:text-rich-gold transition-colors"
                >
                  For Sale
                </Link>
                <Link
                  href="/properties/for-rent"
                  onClick={() => {
                    setIsPropertiesDropdownOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block hover:text-rich-gold transition-colors"
                >
                  For Rent
                </Link>
                <Link
                  href="/properties/luxury"
                  onClick={() => {
                    setIsPropertiesDropdownOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block hover:text-rich-gold transition-colors"
                >
                  Luxury Listings
                </Link>
                <Link
                  href="/properties/commercial"
                  onClick={() => {
                    setIsPropertiesDropdownOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block hover:text-rich-gold transition-colors"
                >
                  Commercial Properties
                </Link>
              </motion.div>
            </div>
            <Link
              href="/agents"
              className="hover:text-rich-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Find an Agent
            </Link>
            {/* New "List Your Property" Dropdown in Mobile Menu */}
            <div>
              <button
                onClick={() =>
                  setIsListPropertyDropdownOpen(!isListPropertyDropdownOpen)
                }
                className="flex items-center hover:text-rich-gold transition-colors"
              >
                List Your Property
                <FaChevronDown
                  size={14}
                  className={`ml-1 transform transition-transform duration-300 ${
                    isListPropertyDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <motion.div
                variants={dropdownVariants}
                initial="closed"
                animate={isListPropertyDropdownOpen ? "open" : "closed"}
                className="pl-4 mt-2 space-y-2"
              >
                <Link
                  href="/sell"
                  onClick={() => {
                    setIsListPropertyDropdownOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block hover:text-rich-gold transition-colors"
                >
                  Sell Your Property
                </Link>
                <Link
                  href="/rent-property"
                  onClick={() => {
                    setIsListPropertyDropdownOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block hover:text-rich-gold transition-colors"
                >
                  Rent Your Property
                </Link>
              </motion.div>
            </div>
            <Link
              href="/about"
              className="hover:text-rich-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-rich-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/login"
              className="hover:text-rich-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-emerald-green text-white px-4 py-2 rounded-md hover:bg-green-500 transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
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
