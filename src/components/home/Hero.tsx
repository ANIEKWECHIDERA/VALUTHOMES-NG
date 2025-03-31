"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useGlobalData } from "../../app/context/GlobalDataContext"; // Assuming this provides properties
import { useRouter } from "next/navigation"; // For redirection
import styles from "./Hero.module.css";
import { IoSearchCircleSharp } from "react-icons/io5";

const Hero = () => {
  const { properties } = useGlobalData(); // Access properties data
  const router = useRouter(); // For navigation

  // States for search
  const [searchTerm, setSearchTerm] = useState(""); // Main search input
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Refs
  const heroSectionRef = useRef(null);

  // Lazy loading effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => {
      if (heroSectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    type Property = {
      id: string;
      name: string;
      price?: string;
      rentRate?: string;
      description: string;
      beds: number;
      size: number;
      baths: number;
      images: string[];
      condition: "new" | "used";
      status: "available" | "sold" | "rented";
      location: string;
      category: "sale" | "rent" | "luxury" | "commercial";
      type:
        | "short-let"
        | "apartment"
        | "self-contain"
        | "bungalow"
        | "duplex"
        | "land"
        | "office-space"
        | "shop"
        | "warehouse";
      dateCreated: string;
      dateUpdated: string;
      listingType: "sale" | "rent";
    };

    // Generate suggestions from properties data
    const uniqueSuggestions = new Set<string>();
    properties.forEach((property: Property) => {
      if (property.name.toLowerCase().includes(value.toLowerCase())) {
        uniqueSuggestions.add(property.name);
      }
      if (property.location.toLowerCase().includes(value.toLowerCase())) {
        uniqueSuggestions.add(property.location);
      }
      if (property.type.toLowerCase().includes(value.toLowerCase())) {
        uniqueSuggestions.add(property.type);
      }
    });

    setSuggestions(Array.from(uniqueSuggestions).slice(0, 5));
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  // Handle search submission
  const handleSearchSubmit = () => {
    const query = new URLSearchParams({ search: searchTerm }).toString();
    router.push(`/properties?${query}`);
  };

  return (
    <section
      ref={heroSectionRef}
      className={`${styles.heroSection} relative h-[80vh] ${
        isLoaded ? "loaded" : ""
      }`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-deep-navy-blue opacity-60" />

      <div className="relative max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center text-white">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-playfair font-bold mb-4"
        >
          Find Your Dream Home with Ease
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl font-inter mb-8"
        >
          Explore the best properties in Nigeria with ValutHomes NG
        </motion.p>

        {/* Search Bar and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="sm:px-2 py-2 shadow-lg w-full max-w-2xl flex flex-col items-center space-y-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between w-full space-x-0 sm:space-x-4 sm:space-y-0 px-4 space-y-4">
            {/* Search Input */}
            <div className="relative w-full">
              <input
                // to make sure the search input has a valid value
                // and is not empty before submitting the search
                required
                type="text"
                placeholder="Search by location, property type..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full p-2 rounded-md border border-soft-gray focus:outline-none focus:ring-2 focus:ring-rich-gold font-inter text-deep-navy-blue bg-slate-100"
              />
              {suggestions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-soft-gray rounded shadow-lg mt-1 max-h-40 overflow-y-auto">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="p-2 text-deep-navy-blue hover:bg-yellow-100 cursor-pointer"
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Search Button */}
            <button
              type="submit"
              disabled={searchTerm.trim() === ""}
              onClick={handleSearchSubmit}
              title="Search"
              className={`text-deep-navy-blue rounded-md font-poppins sm:w-auto ${
                searchTerm.trim() === "" ? "cursor-not-allowed" : ""
              }`}
            >
              <IoSearchCircleSharp
                className={`  w-full text-center hover:text-yellow-400 transition-colors ${
                  searchTerm.trim() === "" ? "text-gray-300" : "text-rich-gold"
                }`}
                size={50}
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
