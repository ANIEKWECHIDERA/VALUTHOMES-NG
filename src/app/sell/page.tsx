"use client";

import Navbar from "@/components/home/NavBar";
import Footer from "@/components/home/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from "react-icons/fa";

const properties = [
  {
    id: 1,
    title: "Lagos Luxury Villa",
    price: "$500,000",
    beds: 4,
    baths: 3,
    area: "350 sqm",
    location: "Lagos",
    type: "House",
    image: "/placeholder-property-1.jpg",
  },
  {
    id: 2,
    title: "Abuja Modern Apartment",
    price: "$300,000",
    beds: 3,
    baths: 2,
    area: "250 sqm",
    location: "Abuja",
    type: "Apartment",
    image: "/placeholder-property-2.jpg",
  },
  {
    id: 3,
    title: "Port Harcourt Commercial Space",
    price: "$400,000",
    beds: 0,
    baths: 2,
    area: "280 sqm",
    location: "Port Harcourt",
    type: "Commercial",
    image: "/placeholder-property-3.jpg",
  },
  {
    id: 4,
    title: "Ibadan Family Estate",
    price: "$350,000",
    beds: 5,
    baths: 4,
    area: "400 sqm",
    location: "Ibadan",
    type: "House",
    image: "/placeholder-property-4.jpg",
  },
];

export default function AllProperties() {
  const [filters, setFilters] = useState({
    location: "all",
    type: "all",
    price: "all",
    beds: "all",
    baths: "all",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [typeSearch, setTypeSearch] = useState("");

  const filteredProperties = properties.filter((property) => {
    return (
      (filters.location === "all" || property.location === filters.location) &&
      (filters.type === "all" || property.type === filters.type) &&
      (filters.price === "all" ||
        property.price.includes(filters.price.split("-")[0])) &&
      (filters.beds === "all" || property.beds >= parseInt(filters.beds)) &&
      (filters.baths === "all" || property.baths >= parseInt(filters.baths)) &&
      // Search query filter: check if search query is in title, location, or type
      (searchQuery === "" ||
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.type.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const filteredLocationOptions = [
    "Lagos",
    "Abuja",
    "Port Harcourt",
    "Ibadan",
  ].filter((location) =>
    location.toLowerCase().includes(locationSearch.toLowerCase())
  );
  const filteredTypeOptions = [
    "House",
    "Apartment",
    "Commercial",
    "Land",
  ].filter((type) => type.toLowerCase().includes(typeSearch.toLowerCase()));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-soft-gray">
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-playfair text-deep-navy-blue text-center mb-8"
          >
            All Properties
          </motion.h1>

          {/* Search Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg p-4 shadow-lg mb-8 flex flex-wrap gap-4"
          >
            {/* Search Input */}
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by location, property type..."
              className="flex-1 p-2 rounded-md border border-soft-gray focus:outline-none focus:ring-2 focus:ring-rich-gold font-inter text-deep-navy-blue"
            />

            {/* Location Filter with Search */}
            <Select
              value={filters.location}
              onValueChange={(value) =>
                setFilters({ ...filters, location: value })
              }
            >
              <SelectTrigger className="w-full sm:w-[180px] p-2 rounded-md border border-soft-gray bg-white text-deep-navy-blue focus:outline-none focus:ring-2 focus:ring-rich-gold font-inter">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent className="bg-white text-deep-navy-blue">
                <Input
                  value={locationSearch}
                  onChange={(e) => setLocationSearch(e.target.value)}
                  placeholder="Search Location..."
                  className="p-2 mb-2 rounded-md border border-soft-gray focus:outline-none focus:ring-2 focus:ring-rich-gold font-inter"
                />
                {filteredLocationOptions.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Property Type Filter with Search */}
            <Select
              value={filters.type}
              onValueChange={(value) => setFilters({ ...filters, type: value })}
            >
              <SelectTrigger className="w-full sm:w-[180px] p-2 rounded-md border border-soft-gray bg-white text-deep-navy-blue focus:outline-none focus:ring-2 focus:ring-rich-gold font-inter">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent className="bg-white text-deep-navy-blue">
                <Input
                  value={typeSearch}
                  onChange={(e) => setTypeSearch(e.target.value)}
                  placeholder="Search Type..."
                  className="p-2 mb-2 rounded-md border border-soft-gray focus:outline-none focus:ring-2 focus:ring-rich-gold font-inter"
                />
                {filteredTypeOptions.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price and Other Filters */}
            <Select
              value={filters.price}
              onValueChange={(value) =>
                setFilters({ ...filters, price: value })
              }
            >
              <SelectTrigger className="w-full sm:w-[180px] p-2 rounded-md border border-soft-gray bg-white text-deep-navy-blue focus:outline-none focus:ring-2 focus:ring-rich-gold font-inter">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent className="bg-white text-deep-navy-blue">
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="$0-$200K">$0 - $200K</SelectItem>
                <SelectItem value="$200K-$500K">$200K - $500K</SelectItem>
                <SelectItem value="$500K+">$500K+</SelectItem>
              </SelectContent>
            </Select>

            {/* Other Filters for Beds and Baths */}
            <Select
              value={filters.beds}
              onValueChange={(value) => setFilters({ ...filters, beds: value })}
            >
              <SelectTrigger className="w-full sm:w-[120px] p-2 rounded-md border border-soft-gray bg-white text-deep-navy-blue focus:outline-none focus:ring-2 focus:ring-rich-gold font-inter">
                <SelectValue placeholder="Beds" />
              </SelectTrigger>
              <SelectContent className="bg-white text-deep-navy-blue">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={filters.baths}
              onValueChange={(value) =>
                setFilters({ ...filters, baths: value })
              }
            >
              <SelectTrigger className="w-full sm:w-[120px] p-2 rounded-md border border-soft-gray bg-white text-deep-navy-blue focus:outline-none focus:ring-2 focus:ring-rich-gold font-inter">
                <SelectValue placeholder="Baths" />
              </SelectTrigger>
              <SelectContent className="bg-white text-deep-navy-blue">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
              </SelectContent>
            </Select>

            <Button className="bg-rich-gold text-deep-navy-blue px-6 py-2 rounded-md hover:bg-yellow-400 transition-colors font-poppins w-full sm:w-auto">
              Search
            </Button>
          </motion.div>

          {/* Display filtered properties */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-white/80 backdrop-blur-md border-none shadow-lg rounded-xl hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-poppins font-semibold text-deep-navy-blue mb-2">
                        {property.title}
                      </h3>
                      <p className="text-xl font-playfair text-rich-gold mb-2">
                        {property.price}
                      </p>
                      <div className="flex items-center space-x-2 text-sm font-inter text-gray-600 mb-2">
                        <FaMapMarkerAlt className="text-rich-gold" />
                        <p>{property.location}</p>
                      </div>
                      <div className="flex items-center space-x-4 text-sm font-inter text-gray-600">
                        <div className="flex items-center space-x-1">
                          <FaBed className="text-rich-gold" />
                          <p>{property.beds} Beds</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaBath className="text-rich-gold" />
                          <p>{property.baths} Baths</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaRulerCombined className="text-rich-gold" />
                          <p>{property.area}</p>
                        </div>
                      </div>
                      <Button className="mt-4 w-full bg-emerald-green text-white hover:bg-green-600 transition-colors font-poppins">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
