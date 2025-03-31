import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MdNavigateNext } from "react-icons/md";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  handlePageChange,
}) => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    window.innerWidth >= 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxPagesToShow = isLargeScreen ? 10 : 4;

  const getPageRange = () => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    if (totalPages <= maxPagesToShow) return pages;

    const rangeStart = currentPage <= 2 ? 1 : currentPage - 1;
    const rangeEnd =
      currentPage >= totalPages - 1 ? totalPages : currentPage + 1;
    let pageRange: number[] = [];

    if (rangeStart > 2) {
      pageRange.push(1);
      pageRange.push(-1); // Ellipsis
    }

    pageRange = [
      ...pageRange,
      ...Array.from(
        { length: rangeEnd - rangeStart + 1 },
        (_, i) => rangeStart + i
      ),
    ];

    if (rangeEnd < totalPages - 1) {
      pageRange.push(-1); // Ellipsis
      pageRange.push(totalPages);
    }

    return pageRange;
  };

  const pageRange = getPageRange();

  return (
    <div className="flex justify-center items-center mt-8 space-x-2">
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-rich-gold text-deep-navy-blue px-4 py-2 rounded hover:bg-yellow-400 disabled:bg-gray-300"
      >
        <MdNavigateNext className="rotate-180" />
      </Button>

      {pageRange.map((page, index) => (
        <React.Fragment key={index}>
          {page === -1 ? (
            <Button
              disabled
              className="px-4 py-2 rounded bg-white text-deep-navy-blue border border-soft-gray"
            >
              ...
            </Button>
          ) : (
            <Button
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded ${
                currentPage === page
                  ? "bg-rich-gold text-deep-navy-blue"
                  : "bg-white text-deep-navy-blue border border-soft-gray hover:bg-yellow-100"
              }`}
            >
              {page}
            </Button>
          )}
        </React.Fragment>
      ))}

      <Button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-rich-gold text-deep-navy-blue px-4 py-2 rounded hover:bg-yellow-400 disabled:bg-gray-300"
      >
        <MdNavigateNext />
      </Button>
    </div>
  );
};

export default Pagination;
