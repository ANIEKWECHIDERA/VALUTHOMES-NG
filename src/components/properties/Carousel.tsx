// components/Carousel.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState<boolean[]>(
    new Array(images.length).fill(false)
  );
  const mainImageRef = useRef<HTMLDivElement>(null);

  // Lazy loading with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setIsVisible((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "100px" }
    );

    const elements = document.querySelectorAll(".carousel-image");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [images]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div
      role="status"
      className="flex items-center justify-center h-56 max-w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
    >
      <svg
        className="w-10 h-10 text-gray-200 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 20"
      >
        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-4 p-4">
      {/* Main Preview Area */}
      <div
        className="relative w-full md:w-3/4 h-96 overflow-hidden rounded-lg"
        ref={mainImageRef}
      >
        {isVisible[currentImageIndex] ? (
          <img
            src={images[currentImageIndex]}
            alt={`Property Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        ) : (
          <LoadingSkeleton />
        )}
        {images.length > 1 && (
          <>
            <Button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-deep-navy-blue hover:bg-soft-gray rounded-full p-2"
              aria-label="Previous image"
            >
              <FaArrowLeft />
            </Button>
            <Button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-deep-navy-blue hover:bg-soft-gray rounded-full p-2"
              aria-label="Next image"
            >
              <FaArrowRight />
            </Button>
          </>
        )}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-2 py-1 rounded text-sm">
          {currentImageIndex + 1} of {images.length}
        </div>
      </div>

      {/* Vertical Thumbnail List */}
      <div className="w-full md:w-1/4 flex flex-col gap-2 max-h-96 overflow-y-auto">
        {images.map((image, index) => (
          <div
            key={index}
            data-index={index}
            className={`carousel-image cursor-pointer rounded-lg overflow-hidden border-2 ${
              currentImageIndex === index
                ? "border-rich-gold"
                : "border-transparent"
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            {isVisible[index] ? (
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-24 object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-24 bg-gray-300 animate-pulse rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
