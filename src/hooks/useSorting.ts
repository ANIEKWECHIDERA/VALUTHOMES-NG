// hooks/useSorting.ts
import { useState } from "react";

export const useSorting = <T>(
  data: T[],
  valueExtractor: (item: T) => number
) => {
  const [sortOrder, setSortOrder] = useState<"none" | "asc" | "desc">("none");

  const sortedData = [...data].sort((a, b) => {
    if (sortOrder === "none") return 0;
    const aValue = valueExtractor(a);
    const bValue = valueExtractor(b);
    return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
  });

  return { sortOrder, setSortOrder, sortedData };
};
