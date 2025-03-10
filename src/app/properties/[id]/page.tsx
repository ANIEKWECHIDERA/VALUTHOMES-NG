// app/properties/[id]/page.tsx
"use client";

import Navbar from "@/components/home/NavBar";
import Footer from "@/components/home/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from "react-icons/fa";

const property = {
  id: 1,
  title: "Lagos Luxury Villa",
  price: "$500,000",
  beds: 4,
  baths: 3,
  area: "350 sqm",
  location: "Lagos",
  type: "House",
  description:
    "A stunning 4-bedroom villa in the heart of Lagos, featuring modern amenities, a spacious living area, and a private pool. Perfect for families or investors.",
  images: [
    "/placeholder-property-1.jpg",
    "/placeholder-property-2.jpg",
    "/placeholder-property-3.jpg",
  ],
  features: [
    "Private Pool",
    "Modern Kitchen",
    "Spacious Garage",
    "24/7 Security",
  ],
};

export default function PropertyDetails({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-soft-gray">
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-playfair text-deep-navy-blue mb-4">
              {property.title}
            </h1>
            <p className="text-xl font-playfair text-rich-gold mb-4">
              {property.price}
            </p>
            <div className="flex items-center space-x-2 text-sm font-inter text-gray-600 mb-4">
              <FaMapMarkerAlt className="text-rich-gold" />
              <p>{property.location}</p>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="grid grid-cols-2 gap-4">
                {property.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${property.title} ${index + 1}`}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-playfair text-deep-navy-blue mb-4">
                  Description
                </h2>
                <p className="font-inter text-gray-600 mb-4">
                  {property.description}
                </p>
                <h2 className="text-2xl font-playfair text-deep-navy-blue mb-4">
                  Features
                </h2>
                <ul className="list-disc pl-5 font-inter text-gray-600">
                  {property.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <Card className="bg-white/80 backdrop-blur-md border-none shadow-lg rounded-xl">
                <CardContent className="p-4">
                  <h3 className="text-xl font-poppins font-semibold text-deep-navy-blue mb-4">
                    Property Details
                  </h3>
                  <div className="space-y-2 font-inter text-gray-600">
                    <div className="flex items-center space-x-2">
                      <FaBed className="text-rich-gold" />
                      <p>{property.beds} Bedrooms</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaBath className="text-rich-gold" />
                      <p>{property.baths} Bathrooms</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaRulerCombined className="text-rich-gold" />
                      <p>{property.area}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/80 backdrop-blur-md border-none shadow-lg rounded-xl">
              <CardContent className="p-6">
                <h2 className="text-2xl font-playfair text-deep-navy-blue mb-4">
                  Contact Agent
                </h2>
                <form className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="border border-soft-gray focus:ring-2 focus:ring-rich-gold"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="border border-soft-gray focus:ring-2 focus:ring-rich-gold"
                  />
                  <Textarea
                    placeholder="Your Message"
                    className="border border-soft-gray focus:ring-2 focus:ring-rich-gold"
                  />
                  <Button className="w-full bg-emerald-green text-white hover:bg-green-600 transition-colors font-poppins">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
