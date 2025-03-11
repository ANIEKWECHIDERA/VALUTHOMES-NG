// app/sell/page.tsx
"use client";

import Navbar from "@/components/home/NavBar";
import Footer from "@/components/home/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Sell() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "",
    price: "",
    beds: "",
    baths: "",
    area: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Property submitted for review!"); // Replace with API call
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-soft-gray">
        <section className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-playfair text-deep-navy-blue text-center mb-8"
          >
            Sell Your Property
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/80 backdrop-blur-md border-none shadow-lg rounded-xl">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    name="title"
                    placeholder="Property Title"
                    value={formData.title}
                    onChange={handleChange}
                    className="border border-soft-gray focus:ring-2 focus:ring-rich-gold"
                  />
                  <Select
                    value={formData.location}
                    onValueChange={(value) =>
                      setFormData({ ...formData, location: value })
                    }
                  >
                    <SelectTrigger className="border border-soft-gray bg-white text-deep-navy-blue focus:ring-2 focus:ring-rich-gold font-inter">
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-deep-navy-blue">
                      <SelectItem value="Lagos">Lagos</SelectItem>
                      <SelectItem value="Abuja">Abuja</SelectItem>
                      <SelectItem value="Port Harcourt">
                        Port Harcourt
                      </SelectItem>
                      <SelectItem value="Ibadan">Ibadan</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    value={formData.type}
                    onValueChange={(value) =>
                      setFormData({ ...formData, type: value })
                    }
                  >
                    <SelectTrigger className="border border-soft-gray bg-white text-deep-navy-blue focus:ring-2 focus:ring-rich-gold font-inter">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-deep-navy-blue">
                      <SelectItem value="House">House</SelectItem>
                      <SelectItem value="Apartment">Apartment</SelectItem>
                      <SelectItem value="Commercial">Commercial</SelectItem>
                      <SelectItem value="Land">Land</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    type="text"
                    name="price"
                    placeholder="Price (e.g., $500,000)"
                    value={formData.price}
                    onChange={handleChange}
                    className="border border-soft-gray focus:ring-2 focus:ring-rich-gold"
                  />
                  <Input
                    type="number"
                    name="beds"
                    placeholder="Bedrooms"
                    value={formData.beds}
                    onChange={handleChange}
                    className="border border-soft-gray focus:ring-2 focus:ring-rich-gold"
                  />
                  <Input
                    type="number"
                    name="baths"
                    placeholder="Bathrooms"
                    value={formData.baths}
                    onChange={handleChange}
                    className="border border-soft-gray focus:ring-2 focus:ring-rich-gold"
                  />
                  <Input
                    type="text"
                    name="area"
                    placeholder="Area (e.g., 350 sqm)"
                    value={formData.area}
                    onChange={handleChange}
                    className="border border-soft-gray focus:ring-2 focus:ring-rich-gold"
                  />
                  <Textarea
                    name="description"
                    placeholder="Property Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="border border-soft-gray focus:ring-2 focus:ring-rich-gold"
                  />
                  <Input
                    type="file"
                    multiple
                    className="border border-soft-gray focus:ring-2 focus:ring-rich-gold"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-emerald-green text-white hover:bg-green-600 transition-colors font-poppins"
                  >
                    Submit Property
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
