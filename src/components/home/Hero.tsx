"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // ShadCN UI Select component
import styles from "./Hero.module.css";

const Hero = () => {
  // States for search input and filtered options
  const [locationSearch, setLocationSearch] = useState("");
  const [propertySearch, setPropertySearch] = useState("");
  const [isLoaded, setIsLoaded] = useState(false); // Correct state for lazy loading

  const locations = ["Lagos", "Abuja", "Port Harcourt", "Ibadan"];
  const propertyTypes = ["House", "Apartment", "Commercial", "Land"];

  // Filtered options for location and property types based on search input
  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(locationSearch.toLowerCase())
  );

  const filteredPropertyTypes = propertyTypes.filter((propertyType) =>
    propertyType.toLowerCase().includes(propertySearch.toLowerCase())
  );

  // Refs for managing focus on the input fields
  const locationInputRef = useRef<HTMLInputElement>(null);
  const propertyInputRef = useRef<HTMLInputElement>(null);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect(); // Stop observing once the element is in view
        }
      },
      { threshold: 0.5 } // Trigger when the section is at least 50% in view
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

  return (
    <section
      ref={heroSectionRef}
      className={`${styles.heroSection} relative h-[80vh] ${
        isLoaded ? "loaded" : ""
      }`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-deep-navy-blue opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center text-white">
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

        {/* Search Bar with Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg p-4 shadow-lg w-full max-w-2xl sm:space-x-4 flex items-center flex-wrap"
        >
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by location, property type..."
            className="flex-1 p-2 rounded-md border border-soft-gray focus:outline-none focus:ring-2 focus:ring-rich-gold font-inter text-deep-navy-blue"
          />

          {/* Filter: Location */}
          <Select>
            <SelectTrigger className="w-full sm:w-[180px] mt-4 sm:mt-0 p-2 rounded-md border border-soft-gray bg-white text-deep-navy-blue focus:outline-none focus:ring-2 focus:ring-rich-gold font-inter">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent className="bg-white text-deep-navy-blue">
              <input
                ref={locationInputRef}
                type="text"
                placeholder="Search Location"
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
                className="p-2 mb-2 w-full rounded-md border border-soft-gray"
              />
              {filteredLocations.map((location, index) => (
                <SelectItem key={index} value={location.toLowerCase()}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Filter: Property Type */}
          <Select>
            <SelectTrigger className="w-full sm:w-[180px] mt-4 sm:mt-0 p-2 rounded-md border border-soft-gray bg-white text-deep-navy-blue focus:outline-none focus:ring-2 focus:ring-rich-gold font-inter">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent className="bg-white text-deep-navy-blue">
              <input
                ref={propertyInputRef}
                type="text"
                placeholder="Search Property Type"
                value={propertySearch}
                onChange={(e) => setPropertySearch(e.target.value)}
                className="p-2 mb-2 w-full rounded-md border border-soft-gray"
              />
              {filteredPropertyTypes.map((property, index) => (
                <SelectItem key={index} value={property.toLowerCase()}>
                  {property}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Filter: Price Range */}
          <Select>
            <SelectTrigger className="w-full sm:w-[180px] mt-4 sm:mt-0 p-2 rounded-md border border-soft-gray bg-white text-deep-navy-blue focus:outline-none focus:ring-2 focus:ring-rich-gold font-inter">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent className="bg-white text-deep-navy-blue">
              <SelectItem value="0-200k">$0 - $200K</SelectItem>
              <SelectItem value="200k-500k">$200K - $500K</SelectItem>
              <SelectItem value="500k+">$500K+</SelectItem>
            </SelectContent>
          </Select>

          {/* Filter: Bedrooms */}
          <Select>
            <SelectTrigger className="w-full sm:w-[120px] mt-4 sm:mt-0 p-2 rounded-md border border-soft-gray bg-white text-deep-navy-blue focus:outline-none focus:ring-2 focus:ring-rich-gold font-inter">
              <SelectValue placeholder="Beds" />
            </SelectTrigger>
            <SelectContent className="bg-white text-deep-navy-blue">
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>

          {/* Filter: Bathrooms */}
          <Select>
            <SelectTrigger className="w-full sm:w-[120px] mt-4 sm:mt-0 p-2 rounded-md border border-soft-gray bg-white text-deep-navy-blue focus:outline-none focus:ring-2 focus:ring-rich-gold font-inter">
              <SelectValue placeholder="Baths" />
            </SelectTrigger>
            <SelectContent className="bg-white text-deep-navy-blue">
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
            </SelectContent>
          </Select>

          {/* Search Button */}
          <button className="bg-rich-gold text-deep-navy-blue px-6 py-2 rounded-md hover:bg-yellow-400 transition-colors font-poppins w-full sm:w-auto mt-4 sm:mt-0">
            Search
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
