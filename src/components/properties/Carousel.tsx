"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      <img
        src={images[currentImageIndex]}
        alt={`Property Image ${currentImageIndex + 1}`}
        className="w-full h-full object-cover rounded-lg"
        loading="lazy"
      />
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
      <div className="text-center mt-2 text-sm text-gray-600">
        {currentImageIndex + 1} of {images.length}
      </div>
    </div>
  );
}
