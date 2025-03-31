// components/LazyLoadComponent.tsx
import { useState, useEffect, useRef, useCallback } from "react";
import React from "react";

interface LazyLoadComponentProps<T> {
  item: T;
  renderItem: (item: T) => JSX.Element;
  placeholder?: JSX.Element;
}

export const LazyLoadComponent = <T,>({
  item,
  renderItem,
  placeholder = <div className="bg-gray-200 h-64 rounded-lg animate-pulse" />,
}: LazyLoadComponentProps<T>) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (ref.current && observerRef.current) {
          observerRef.current.disconnect();
        }
      }
    },
    []
  );

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "100px",
      threshold: 0,
    });

    if (ref.current) {
      observerRef.current.observe(ref.current);
    }

    return () => {
      if (ref.current && observerRef.current) {
        observerRef.current.unobserve(ref.current);
      }
    };
  }, [observerCallback]);

  return <div ref={ref}>{isVisible ? renderItem(item) : placeholder}</div>;
};
