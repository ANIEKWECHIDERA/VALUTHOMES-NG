// app/find-an-agent/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaStar, FaMapMarkerAlt, FaPhone, FaCheckCircle } from "react-icons/fa";
import { useGlobalData } from "../context/GlobalDataContext";
import { usePagination } from "@/hooks/usePagination";
import Pagination from "@/components/properties/Pagination"; // Assuming this is your Pagination component
import Link from "next/link";

export default function FindAnAgent() {
  const { agents } = useGlobalData();
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [filteredAgents, setFilteredAgents] = useState(agents);

  // Filter agents based on search term and location
  useEffect(() => {
    const filtered = agents.filter((agent) => {
      const matchesSearch =
        agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation =
        locationFilter === "all" || agent.location.includes(locationFilter);
      return matchesSearch && matchesLocation;
    });
    setFilteredAgents(filtered);
  }, [searchTerm, locationFilter, agents]);

  // Use pagination hook with 7 agents per page
  const {
    currentPage,
    totalPages,
    paginatedData: paginatedAgents,
    handlePageChange,
  } = usePagination(filteredAgents, 7);

  return (
    <main className="bg-soft-gray py-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-deep-navy-blue mb-4">
            Find an Agent
          </h1>
          <p className="text-lg text-gray-600">
            Connect with trusted real estate professionals across Nigeria.
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-lg p-4 mb-8 flex flex-col sm:flex-row sm:items-end gap-4">
          <Input
            type="text"
            placeholder="Search by name or location..."
            className="flex-1 p-2 rounded border border-soft-gray focus:ring-2 focus:ring-rich-gold text-deep-navy-blue"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <label htmlFor="locationFilter" className="sr-only">
            Filter by location
          </label>
          <select
            id="locationFilter"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="w-full sm:w-[180px] p-2 rounded border border-soft-gray bg-white text-deep-navy-blue focus:ring-2 focus:ring-rich-gold"
          >
            <option value="all">All Locations</option>
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
            <option value="Port Harcourt">Port Harcourt</option>
            <option value="Ibadan">Ibadan</option>
          </select>
        </div>

        {/* Agent Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedAgents.map((agent) => (
            <Card
              key={agent.id}
              className="bg-white border-none rounded-lg overflow-hidden"
            >
              <CardContent className="p-0">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <div className="flex items-center mb-2 ">
                    <Link href={`/agents/${agent.id}`}>
                      <h3 className="text-lg font-semibold text-deep-navy-blue hover:underline">
                        {agent.name}
                      </h3>
                    </Link>
                    {agent.isVerified && (
                      <FaCheckCircle
                        className="ml-2 text-emerald-green"
                        title="Verified Agent"
                      />
                    )}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <FaMapMarkerAlt className="text-rich-gold mr-1" />
                    <span>{agent.location}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="flex items-center text-yellow-500 mr-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < Math.floor(agent.rating)
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </span>
                    <span className="text-sm text-gray-600">
                      ({agent.reviewCount} reviews)
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Specialties: {agent.specialties.join(", ")}
                  </p>
                  <Link href={`/agents/${agent.id}`}>
                    <Button className="w-full bg-emerald-green text-white hover:bg-green-600 font-poppins flex items-center justify-center">
                      <FaPhone className="mr-2" /> Contact
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        )}
      </section>
    </main>
  );
}
