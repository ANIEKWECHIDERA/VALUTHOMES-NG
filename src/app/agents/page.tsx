// app/agents/page.tsx
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
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const agents = [
  {
    id: 1,
    name: "John Doe",
    location: "Lagos",
    specialization: "Residential Sales",
    phone: "+234 801 234 5678",
    email: "john.doe@valuthomes.ng",
    image: "/placeholder-agent-1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    location: "Abuja",
    specialization: "Commercial Properties",
    phone: "+234 802 345 6789",
    email: "jane.smith@valuthomes.ng",
    image: "/placeholder-agent-2.jpg",
  },
  {
    id: 3,
    name: "Michael Adebayo",
    location: "Port Harcourt",
    specialization: "Luxury Listings",
    phone: "+234 803 456 7890",
    email: "michael.adebayo@valuthomes.ng",
    image: "/placeholder-agent-3.jpg",
  },
];

export default function FindAnAgent() {
  const [filters, setFilters] = useState({
    location: "all",
    specialization: "all",
  });

  const filteredAgents = agents.filter((agent) => {
    return (
      (filters.location === "all" || agent.location === filters.location) &&
      (filters.specialization === "all" ||
        agent.specialization === filters.specialization)
    );
  });

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
            Find an Agent
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-inter text-center text-gray-600 mb-12"
          >
            Connect with experienced real estate agents across Nigeria to assist
            you with your property needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg p-4 shadow-lg mb-8 flex flex-wrap gap-4"
          >
            <Input
              type="text"
              placeholder="Search by agent name or location..."
              className="flex-1 p-2 rounded-md border border-soft-gray focus:outline-none focus:ring-2 focus:ring-rich-gold font-inter text-deep-navy-blue"
            />
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
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="Lagos">Lagos</SelectItem>
                <SelectItem value="Abuja">Abuja</SelectItem>
                <SelectItem value="Port Harcourt">Port Harcourt</SelectItem>
                <SelectItem value="Ibadan">Ibadan</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={filters.specialization}
              onValueChange={(value) =>
                setFilters({ ...filters, specialization: value })
              }
            >
              <SelectTrigger className="w-full sm:w-[180px] p-2 rounded-md border border-soft-gray bg-white text-deep-navy-blue focus:outline-none focus:ring-2 focus:ring-rich-gold font-inter">
                <SelectValue placeholder="Specialization" />
              </SelectTrigger>
              <SelectContent className="bg-white text-deep-navy-blue">
                <SelectItem value="all">All Specializations</SelectItem>
                <SelectItem value="Residential Sales">
                  Residential Sales
                </SelectItem>
                <SelectItem value="Commercial Properties">
                  Commercial Properties
                </SelectItem>
                <SelectItem value="Luxury Listings">Luxury Listings</SelectItem>
                <SelectItem value="Rentals">Rentals</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-rich-gold text-deep-navy-blue px-6 py-2 rounded-md hover:bg-yellow-400 transition-colors font-poppins w-full sm:w-auto">
              Search
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredAgents.map((agent) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-white/80 backdrop-blur-md border-none shadow-lg rounded-xl hover:shadow-xl transition-shadow">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-32 h-32 object-cover rounded-full mb-4"
                    />
                    <h3 className="text-lg font-poppins font-semibold text-deep-navy-blue mb-2">
                      {agent.name}
                    </h3>
                    <p className="text-sm font-inter text-gray-600 mb-2">
                      <FaMapMarkerAlt className="inline mr-1 text-rich-gold" />{" "}
                      {agent.location}
                    </p>
                    <p className="text-sm font-inter text-gray-600 mb-2">
                      <span className="font-semibold">Specialization:</span>{" "}
                      {agent.specialization}
                    </p>
                    <div className="flex flex-col space-y-2 mt-2">
                      <a
                        href={`tel:${agent.phone}`}
                        className="flex items-center text-sm text-emerald-green hover:text-green-600 transition-colors"
                      >
                        <FaPhone className="mr-1" /> {agent.phone}
                      </a>
                      <a
                        href={`mailto:${agent.email}`}
                        className="flex items-center text-sm text-emerald-green hover:text-green-600 transition-colors"
                      >
                        <FaEnvelope className="mr-1" /> {agent.email}
                      </a>
                    </div>
                    <Button className="mt-4 w-full bg-emerald-green text-white hover:bg-green-600 transition-colors font-poppins">
                      Contact Agent
                    </Button>
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
