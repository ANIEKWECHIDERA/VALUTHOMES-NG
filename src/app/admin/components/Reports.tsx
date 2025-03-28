"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";

// Simulated data (more items for pagination testing)
const reports = Array.from({ length: 12 }, (_, index) => ({
  id: `${index + 1}`,
  listing: `Listing ${index + 1}`,
  reason: index % 2 === 0 ? "Inappropriate content" : "Spam",
}));

const ITEMS_PER_PAGE = 10;

export default function Reports() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the slice of reports to display
  const totalPages = Math.ceil(reports.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedReports = reports.slice(startIndex, endIndex);

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
        {paginatedReports.map((report) => (
          <Card key={report.id} className="bg-white border-none rounded-lg">
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-deep-navy-blue">
                  {report.listing}
                </h3>
                <p className="text-gray-600">Reason: {report.reason}</p>
              </div>
              <Button
                className="bg-emerald-green text-white hover:bg-green-600"
                onClick={() => console.log(`Take action on ${report.listing}`)}
              >
                Take Action
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center items-center space-x-6">
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
