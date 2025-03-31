// hooks/useFilters.ts
import { useState, useCallback } from "react";

interface FilterState {
  location: string;
  type: string;
  listingType: string;
  price: string;
  beds: string;
  baths: string;
}

export const useFilters = <T>(data: T[], filterKeys: (keyof T)[]) => {
  const [filters, setFilters] = useState<FilterState>({
    location: "all",
    type: "all",
    listingType: "all",
    price: "all",
    beds: "all",
    baths: "all",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Handle search input change
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchTerm(value);

      if (value.trim() === "") {
        setSuggestions([]);
        return;
      }

      const uniqueSuggestions = new Set<string>();
      data.forEach((item) => {
        filterKeys.forEach((key) => {
          const fieldValue = String(item[key]).toLowerCase();
          if (fieldValue.includes(value.toLowerCase())) {
            uniqueSuggestions.add(fieldValue);
          }
        });
      });

      setSuggestions(Array.from(uniqueSuggestions).slice(0, 5));
    },
    [data, filterKeys]
  );

  // Handle suggestion click
  const handleSuggestionClick = useCallback((suggestion: string) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  }, []);

  // Reset filters
  const resetFilters = useCallback(() => {
    setFilters({
      location: "all",
      type: "all",
      listingType: "all",
      price: "all",
      beds: "all",
      baths: "all",
    });
    setSearchTerm("");
    setSuggestions([]);
  }, []);

  return {
    filters,
    setFilters,
    searchTerm,
    setSearchTerm,
    suggestions,
    handleSearchChange,
    handleSuggestionClick,
    resetFilters,
  };
};
