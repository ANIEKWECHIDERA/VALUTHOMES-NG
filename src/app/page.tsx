import Features from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/NavBar";
import Testimonials from "@/components/home/Testimonial";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
