"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";

// Simulated data (more items for pagination testing)
const users = Array.from({ length: 25 }, (_, index) => ({
  id: `${index + 1}`,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  banned: index % 2 === 0, // Alternate banned status
}));

const ITEMS_PER_PAGE = 10;

export default function UserManagement() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the slice of users to display
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedUsers = users.slice(startIndex, endIndex);

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
        {paginatedUsers.map((user) => (
          <Card key={user.id} className="bg-white border-none rounded-lg">
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-deep-navy-blue">
                  {user.name}
                </h3>
                <p className="text-gray-600">{user.email}</p>
              </div>
              <Button
                variant={user.banned ? "default" : "destructive"}
                className="hover:bg-gray-200"
                onClick={() => console.log(`Toggle ban for ${user.name}`)}
              >
                {user.banned ? "Unban" : "Ban"}
              </Button>
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
