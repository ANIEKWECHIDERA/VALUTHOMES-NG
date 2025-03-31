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
import { useEffect } from "react";
import Link from "next/link";
import { useGlobalData } from "@/app/context/GlobalDataContext";
import Pagination from "@/components/properties/Pagination";
import { useFilters } from "@/hooks/useFilters";
import { useSorting } from "@/hooks/useSorting";
import { usePagination } from "@/hooks/usePagination";
import { LazyLoadComponent } from "@/components/listings/LazyLoadComponent";

// Reusable render function for property cards
const renderPropertyCard = (property: any, currency: { symbol: string }) => (
  <Card className="bg-white border-none rounded-lg overflow-hidden">
    <CardContent className="p-0">
      <img
        src={property.images[0]}
        alt={property.name}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-deep-navy-blue mb-2">
          {property.name.slice(0, 25)}
          {property.name.length > 25 ? "..." : ""}
        </h3>
        <p className="text-xl font-bold text-rich-gold mb-2">
          {property.listingType === "rent"
            ? `${currency.symbol}${new Intl.NumberFormat("en-NG").format(
                Number(property.rentRate)
              )} ${property.type === "short-let" ? "/day" : "/year"}`
            : `${currency.symbol}${new Intl.NumberFormat("en-NG").format(
                Number(property.price)
              )}`}
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
);

export default function CommercialProperties() {
  const { properties, currency } = useGlobalData();

  // Filter the properties to only include commercial ones for suggestions
  const commercialProperties = properties.filter(
    (property) => property.category === "commercial"
  );

  // Use useFilters with pre-filtered commercial properties for suggestions
  // TO REUSE: Replace 'commercialProperties' with your filtered data (e.g., properties.filter(p => p.category === "your_category"))
  const {
    filters,
    setFilters,
    searchTerm,
    suggestions,
    handleSearchChange,
    handleSuggestionClick,
    resetFilters,
  } = useFilters(commercialProperties, ["name", "location", "type"]);

  // Apply query params on mount to set initial search term
  // TO REUSE: Keep this useEffect to sync with URL query params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const search = params.get("search") || "";
    setFilters((prevFilters) => ({ ...prevFilters, searchTerm: search }));
  }, [setFilters]);

  // Custom filter logic for commercial properties
  // TO REUSE: Adapt this logic to your specific category and fields (e.g., price/rentRate, category check)
  const filteredProperties = properties.filter((property) => {
    const priceValue =
      property.listingType === "rent"
        ? parseFloat(
            (property.rentRate ?? "").toString().replace(/[^0-9.-]+/g, "")
          )
        : parseFloat(
            (property.price ?? "").toString().replace(/[^0-9.-]+/g, "")
          );
    const matchesSearch =
      searchTerm.trim() === "" ||
      property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.type.toLowerCase().includes(searchTerm.toLowerCase());

    return (
      property.status === "available" &&
      property.category === "commercial" &&
      matchesSearch &&
      (filters.location === "all" || property.location === filters.location) &&
      (filters.type === "all" || property.type === filters.type) &&
      (filters.price === "all" ||
        (property.listingType === "sale" &&
          ((filters.price === "0-50m" &&
            priceValue >= 0 &&
            priceValue <= 50000000) ||
            (filters.price === "50m-100m" &&
              priceValue > 50000000 &&
              priceValue <= 100000000) ||
            (filters.price === "100m+" && priceValue > 100000000))) ||
        (property.listingType === "rent" &&
          (property.type === "short-let"
            ? (filters.price === "0-50k" &&
                priceValue >= 0 &&
                priceValue <= 50000) ||
              (filters.price === "50k-100k" &&
                priceValue > 50000 &&
                priceValue <= 100000) ||
              (filters.price === "100k+" && priceValue > 100000)
            : (filters.price === "0-2m" &&
                priceValue >= 0 &&
                priceValue <= 2000000) ||
              (filters.price === "2m-5m" &&
                priceValue > 2000000 &&
                priceValue <= 5000000) ||
              (filters.price === "5m+" && priceValue > 5000000)))) &&
      (filters.beds === "all" || property.beds >= parseInt(filters.beds)) &&
      (filters.baths === "all" || property.baths >= parseInt(filters.baths))
    );
  });

  // Sorting logic based on price or rentRate
  // TO REUSE: Adjust the valueExtractor to match your pricing field (price, rentRate, etc.)
  const {
    sortOrder,
    setSortOrder,
    sortedData: sortedProperties,
  } = useSorting(filteredProperties, (property) =>
    property.listingType === "rent"
      ? parseFloat(
          (property.rentRate ?? "").toString().replace(/[^0-9.-]+/g, "")
        )
      : parseFloat((property.price ?? "").toString().replace(/[^0-9.-]+/g, ""))
  );

  // Pagination logic with 10 items per page
  // TO REUSE: Adjust items per page as needed (e.g., 5, 20)
  const {
    currentPage,
    totalPages,
    paginatedData: paginatedProperties,
    handlePageChange,
    setCurrentPage,
  } = usePagination(sortedProperties, 10);

  // Reset handler for filters, sorting, and pagination
  // TO REUSE: Include this to reset all states consistently
  const handleReset = () => {
    resetFilters();
    setSortOrder("none");
    setCurrentPage(1);
  };

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
        <div className="bg-white rounded-lg p-4 mb-8 flex flex-wrap gap-4 md:sticky top-16 relative">
          {/* Search input with suggestions limited to commercial properties */}
          <div className="flex-grow-0 w-full relative">
            <Input
              type="text"
              placeholder="Search by location, property type..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full p-2 rounded border border-soft-gray focus:ring-2 focus:ring-rich-gold text-deep-navy-blue"
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
          {/* Filter controls */}
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
          {/* TO REUSE: Update property types to match your category */}
          <Select
            value={filters.type}
            onValueChange={(value) => setFilters({ ...filters, type: value })}
          >
            <SelectTrigger className="w-full sm:w-[180px] p-2 rounded border border-soft-gray bg-white text-deep-navy-blue focus:ring-2 focus:ring-rich-gold">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent className="bg-white text-deep-navy-blue">
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="office-space">Office Space</SelectItem>
              <SelectItem value="shop">Shop</SelectItem>
              <SelectItem value="warehouse">Warehouse</SelectItem>
              <SelectItem value="commercial">Commercial Building</SelectItem>
              <SelectItem value="land">Land</SelectItem>
            </SelectContent>
          </Select>
          {/* TO REUSE: Adjust price ranges based on your category's pricing */}
          <Select
            value={filters.price}
            onValueChange={(value) => setFilters({ ...filters, price: value })}
          >
            <SelectTrigger className="w-full sm:w-[180px] p-2 rounded border border-soft-gray bg-white text-deep-navy-blue focus:ring-2 focus:ring-rich-gold">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent className="bg-white text-deep-navy-blue">
              <SelectItem value="all">All Prices</SelectItem>
              {filters.type === "short-let" ? (
                <>
                  <SelectItem value="0-50k">₦0 - ₦50K/day</SelectItem>
                  <SelectItem value="50k-100k">₦50K - ₦100K/day</SelectItem>
                  <SelectItem value="100k+">₦100K+/day</SelectItem>
                </>
              ) : filters.listingType === "rent" ? (
                <>
                  <SelectItem value="0-2m">₦0 - ₦2M/year</SelectItem>
                  <SelectItem value="2m-5m">₦2M - ₦5M/year</SelectItem>
                  <SelectItem value="5m+">₦5M+/year</SelectItem>
                </>
              ) : (
                <>
                  <SelectItem value="0-50m">₦0 - ₦50M</SelectItem>
                  <SelectItem value="50m-100m">₦50M - ₦100M</SelectItem>
                  <SelectItem value="100m+">₦100M+</SelectItem>
                </>
              )}
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
          {/* TO REUSE: Include sorting dropdown for price */}
          <Select
            value={sortOrder}
            onValueChange={(value) =>
              setSortOrder(value as "none" | "asc" | "desc")
            }
          >
            <SelectTrigger className="w-full sm:w-[180px] p-2 rounded border border-soft-gray bg-white text-deep-navy-blue focus:ring-2 focus:ring-rich-gold">
              <SelectValue placeholder="Sort by Price" />
            </SelectTrigger>
            <SelectContent className="bg-white text-deep-navy-blue">
              <SelectItem value="none">No Sorting</SelectItem>
              <SelectItem value="asc">Price: Low to High</SelectItem>
              <SelectItem value="desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
          <Button
            onClick={handleReset}
            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 font-poppins w-full sm:w-auto"
          >
            Reset Filters
          </Button>
          <Button className="bg-rich-gold text-deep-navy-blue px-6 py-2 rounded hover:bg-yellow-400 font-poppins w-full sm:w-auto">
            Search
          </Button>
        </div>
        {/* TO REUSE: Use LazyLoadComponent with paginated data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProperties.map((property) => (
            <LazyLoadComponent
              key={property.id}
              item={property}
              renderItem={(item) => renderPropertyCard(item, currency)}
            />
          ))}
        </div>
        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        )}
      </section>
    </main>
  );
}
