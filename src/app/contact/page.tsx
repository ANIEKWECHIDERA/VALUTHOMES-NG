// app/contact/page.tsx
"use client";

import Navbar from "@/components/home/NavBar";
import Footer from "@/components/home/Footer";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Validation state
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  // Validate individual field
  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!emailRegex.test(value)) error = "Please enter a valid email";
        break;
      case "subject":
        if (!value.trim()) error = "Subject is required";
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Validate entire form
  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      emailRegex.test(formData.email) &&
      formData.subject.trim() &&
      formData.message.trim() &&
      !Object.values(errors).some((error) => error)
    );
  };

  // Handle form submission (placeholder)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      alert("Form submitted successfully!"); // Replace with actual submission logic
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-soft-gray">
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-playfair text-deep-navy-blue text-center mb-8"
          >
            Contact Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-playfair text-deep-navy-blue mb-4">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-soft-gray focus:ring-2 focus:ring-rich-gold"
                  />
                  {errors.name && (
                    <p className="text-sm text-muted-red mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-soft-gray focus:ring-2 focus:ring-rich-gold"
                  />
                  {errors.email && (
                    <p className="text-sm text-muted-red mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="border border-soft-gray focus:ring-2 focus:ring-rich-gold"
                  />
                  {errors.subject && (
                    <p className="text-sm text-muted-red mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="border border-soft-gray focus:ring-2 focus:ring-rich-gold"
                  />
                  {errors.message && (
                    <p className="text-sm text-muted-red mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={!isFormValid()}
                  className={`w-full font-poppins transition-colors ${
                    isFormValid()
                      ? "bg-emerald-green text-white hover:bg-green-600"
                      : "bg-gray-400 text-gray-700 cursor-not-allowed"
                  }`}
                >
                  Send Message
                </Button>
              </form>
            </div>
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-playfair text-deep-navy-blue mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4 font-inter text-gray-600">
                  <div className="flex items-center space-x-2">
                    <FaPhone className="text-rich-gold" />
                    <p>+234 800 123 4567</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaEnvelope className="text-rich-gold" />
                    <p>support@valuthomesng.com</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-rich-gold" />
                    <p>Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
              {/* Map Placeholder */}
              <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                <p className="text-gray-600 font-inter">
                  [Map Placeholder - Embed Google Maps Here]
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
