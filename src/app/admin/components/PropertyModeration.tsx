"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";

// Simulated data (more items for pagination testing)
const properties = Array.from({ length: 15 }, (_, index) => ({
  id: `${index + 1}`,
  title: `Property ${index + 1}`,
  status: "pending",
}));

const ITEMS_PER_PAGE = 10;

export default function PropertyModeration() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the slice of properties to display
  const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProperties = properties.slice(startIndex, endIndex);

  // Pagination controls
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="space-y-4">
        {paginatedProperties.map((property) => (
          <Card key={property.id} className="bg-white border-none rounded-lg">
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-deep-navy-blue">
                  {property.title}
                </h3>
                <p className="text-gray-600">Status: {property.status}</p>
              </div>
              <div className="space-x-2">
                <Button
                  className="bg-emerald-green text-white hover:bg-green-600"
                  onClick={() => console.log(`Approve ${property.title}`)}
                >
                  Approve
                </Button>
                <Button
                  variant="destructive"
                  className="hover:bg-red-600"
                  onClick={() => console.log(`Reject ${property.title}`)}
                >
                  Reject
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-between items-center">
        <Button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="bg-deep-navy-blue text-white hover:bg-blue-800 disabled:bg-gray-300 rotate-180"
        >
          <MdNavigateNext />
        </Button>
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="bg-deep-navy-blue text-white hover:bg-blue-800 disabled:bg-gray-300"
        >
          <MdNavigateNext />
        </Button>
      </div>
    </div>
  );
}
