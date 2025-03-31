// app/properties/commercial/page.tsx
"use client";

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
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { useGlobalData } from "@/app/context/GlobalDataContext";

export default function CommercialProperties() {
  const { properties, currency } = useGlobalData();
  const [filters, setFilters] = useState({
    location: "all",
    type: "all",
    price: "all",
    beds: "all",
    baths: "all",
  });

  const filteredProperties = properties.filter((property) => {
    const priceValue = parseFloat(
      (property.price ?? "").toString().replace(/[^0-9.-]+/g, "")
    );
    return (
      property.status === "available" &&
      property.category === "commercial" && // Ensure the property is commercial
      (filters.location === "all" || property.location === filters.location) &&
      (filters.type === "all" || property.type === filters.type) &&
      (filters.price === "all" ||
        (filters.price === "0-200k" &&
          priceValue >= 0 &&
          priceValue <= 200000) ||
        (filters.price === "200k-500k" &&
          priceValue >= 200000 &&
          priceValue <= 500000) ||
        (filters.price === "500k+" && priceValue >= 500000)) &&
      (filters.beds === "all" || property.beds >= parseInt(filters.beds)) &&
      (filters.baths === "all" || property.baths >= parseInt(filters.baths))
    );
  });

  return (
    <main className="bg-soft-gray">
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-deep-navy-blue mb-4">
            Commercial Properties
          </h1>
          <p className="text-lg text-gray-600">
            Explore commercial spaces across Nigeria.
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 mb-8 flex flex-wrap gap-4">
          <Input
            type="text"
            placeholder="Search by location, property type..."
            className="flex-1 p-2 rounded border border-soft-gray focus:ring-2 focus:ring-rich-gold text-deep-navy-blue"
          />
          <Select
            value={filters.location}
            onValueChange={(value) =>
              setFilters({ ...filters, location: value })
            }
          >
            <SelectTrigger className="w-full sm:w-[180px] p-2 rounded border border-soft-gray bg-white text-deep-navy-blue focus:ring-2 focus:ring-rich-gold">
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
            value={filters.type}
            onValueChange={(value) => setFilters({ ...filters, type: value })}
          >
            <SelectTrigger className="w-full sm:w-[180px] p-2 rounded border border-soft-gray bg-white text-deep-navy-blue focus:ring-2 focus:ring-rich-gold">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent className="bg-white text-deep-navy-blue">
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="House">House</SelectItem>
              <SelectItem value="Apartment">Apartment</SelectItem>
              <SelectItem value="Commercial">Commercial</SelectItem>
              <SelectItem value="Land">Land</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={filters.price}
            onValueChange={(value) => setFilters({ ...filters, price: value })}
          >
            <SelectTrigger className="w-full sm:w-[180px] p-2 rounded border border-soft-gray bg-white text-deep-navy-blue focus:ring-2 focus:ring-rich-gold">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent className="bg-white text-deep-navy-blue">
              <SelectItem value="all">All Prices</SelectItem>
              <SelectItem value="0-200k">$0 - $200K</SelectItem>
              <SelectItem value="200k-500k">$200K - $500K</SelectItem>
              <SelectItem value="500k+">$500K+</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={filters.beds}
            onValueChange={(value) => setFilters({ ...filters, beds: value })}
          >
            <SelectTrigger className="w-full sm:w-[120px] p-2 rounded border border-soft-gray bg-white text-deep-navy-blue focus:ring-2 focus:ring-rich-gold">
              <SelectValue placeholder="Beds" />
            </SelectTrigger>
            <SelectContent className="bg-white text-deep-navy-blue">
              <SelectItem value="all">All Beds</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={filters.baths}
            onValueChange={(value) => setFilters({ ...filters, baths: value })}
          >
            <SelectTrigger className="w-full sm:w-[120px] p-2 rounded border border-soft-gray bg-white text-deep-navy-blue focus:ring-2 focus:ring-rich-gold">
              <SelectValue placeholder="Baths" />
            </SelectTrigger>
            <SelectContent className="bg-white text-deep-navy-blue">
              <SelectItem value="all">All Baths</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-rich-gold text-deep-navy-blue px-6 py-2 rounded hover:bg-yellow-400 font-poppins w-full sm:w-auto">
            Search
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <Card
              key={property.id}
              className="bg-white border-none rounded-lg overflow-hidden"
            >
              <CardContent className="p-0">
                <img
                  src={property.images[0]}
                  alt={property.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-deep-navy-blue mb-2">
                    {property.name}
                  </h3>
                  <p className="text-xl font-bold text-rich-gold mb-2">
                    {property.category === "rent"
                      ? `${currency.symbol}${new Intl.NumberFormat(
                          "en-NG"
                        ).format(Number(property.rentRate))}/mo`
                      : `${currency.symbol}${new Intl.NumberFormat(
                          "en-NG"
                        ).format(Number(property.price))}`}
                  </p>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <FaMapMarkerAlt className="text-rich-gold mr-1" />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <FaBed className="text-rich-gold mr-1" />
                      <span>
                        {property.beds} Bed{property.beds === 1 ? "" : "s"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaBath className="text-rich-gold mr-1" />
                      <span>
                        {property.baths} Bath{property.baths === 1 ? "" : "s"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaRulerCombined className="text-rich-gold mr-1" />
                      <span>{property.size} sqm</span>
                    </div>
                  </div>
                  <Link href={`/properties/${property.id}`}>
                    <Button className="mt-4 w-full bg-emerald-green text-white hover:bg-green-600 font-poppins">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
