// app/about/page.tsx
"use client";

import Navbar from "@/components/home/NavBar";
import Footer from "@/components/home/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"; // ShadCN UI Card
import { Button } from "@/components/ui/button"; // ShadCN UI Button
import { FaUsers } from "react-icons/fa"; // react-icons

const teamMembers = [
  {
    name: "Aisha Bello",
    role: "CEO & Founder",
    image: "/placeholder-team-1.jpg",
  },
  {
    name: "Chinedu Okonkwo",
    role: "Head of Sales",
    image: "/placeholder-team-2.jpg",
  },
  {
    name: "Fatima Yusuf",
    role: "Lead Developer",
    image: "/placeholder-team-3.jpg",
  },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-cover bg-center">
          <div className="absolute inset-0 bg-deep-navy-blue opacity-60"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-playfair font-bold mb-4"
            >
              About ValutHomes NG
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl font-inter"
            >
              Connecting you to your dream property in Nigeria
            </motion.p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-soft-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-playfair text-deep-navy-blue mb-6">
                Our Mission
              </h2>
              <p className="text-lg font-inter text-gray-600 max-w-3xl mx-auto">
                At ValutHomes NG, we aim to simplify the real estate process by
                connecting buyers, sellers, and agents through cutting-edge
                technology. Our platform offers verified listings, secure
                transactions, and AI-driven recommendations to ensure a seamless
                experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-playfair text-deep-navy-blue text-center mb-12"
            >
              Meet Our Team
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="bg-white/80 backdrop-blur-md border-none shadow-lg rounded-xl hover:shadow-xl transition-shadow">
                    <CardContent className="p-4 text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="text-xl font-poppins font-semibold text-deep-navy-blue">
                        {member.name}
                      </h3>
                      <p className="text-sm font-inter text-gray-600">
                        {member.role}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-soft-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-playfair text-deep-navy-blue mb-6"
            >
              Ready to Find Your Dream Home?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg font-inter text-gray-600 mb-8"
            >
              Start exploring properties with ValutHomes NG today.
            </motion.p>
            <Button className="bg-emerald-green text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors font-poppins">
              Explore Properties
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
