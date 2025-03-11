// app/components/Testimonials.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"; // ShadCN UI Card component
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // react-icons

const testimonials = [
  {
    name: "Aisha Bello",
    review:
      "The AI recommendations helped me find my perfect home in Lagos in just a week! The team was incredibly supportive.",
    rating: 5,
    image: "/placeholder-avatar-1.jpg", // Replace with actual image path
  },
  {
    name: "Chinedu Okonkwo",
    review:
      "Secure transactions and verified agents made selling my property a breeze. Highly recommend ValutHomes NG!",
    rating: 4.5,
    image: "/placeholder-avatar-2.jpg",
  },
  {
    name: "Fatima Yusuf",
    review:
      "The virtual tours were a game-changer. I explored multiple properties without leaving my home!",
    rating: 4.8,
    image: "/placeholder-avatar-3.jpg",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 50, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.9,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder-testimonial-bg.jpg')" }} // Replace with actual image path
      >
        <div className="absolute inset-0 bg-deep-navy-blue opacity-50"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-3xl md:text-4xl font-playfair text-white text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Card className="bg-white/80 backdrop-blur-md border-none shadow-lg rounded-xl w-full max-w-3xl mx-auto">
                <CardContent className="p-6 text-center">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <p className="text-lg font-inter italic text-gray-700 mb-4">
                    &quot;{testimonials[currentIndex].review}&quot;
                  </p>
                  <h3 className="text-xl font-poppins font-semibold text-deep-navy-blue mb-2">
                    {testimonials[currentIndex].name}
                  </h3>
                  <div className="flex justify-center text-rich-gold">
                    {"★".repeat(Math.round(testimonials[currentIndex].rating))}
                    {"☆".repeat(
                      5 - Math.round(testimonials[currentIndex].rating)
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-rich-gold text-deep-navy-blue p-3 rounded-full hover:bg-yellow-400 transition-colors"
            title="Previous Testimonial"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-rich-gold text-deep-navy-blue p-3 rounded-full hover:bg-yellow-400 transition-colors"
            title="Next Testimonial"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-lg font-inter text-white mt-6"
        >
          More than 1,000+ Client Reviews
        </motion.p>
      </div>
    </section>
  );
};

export default Testimonials;
