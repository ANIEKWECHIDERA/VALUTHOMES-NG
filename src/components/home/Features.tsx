// app/components/Features.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"; // ShadCN UI Card component
import Link from "next/link";

import { useGlobalData } from "../../app/context/GlobalDataContext";

// Property Showcase Data

const Features = () => {
  const { properties, successStories, insights, stats, highlights, currency } =
    useGlobalData();
  const featuredProperties = properties
    .filter((property) => property.category === "luxury")
    .slice(0, 6);
  return (
    <section className="py-16 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-3xl md:text-4xl font-playfair text-deep-navy-blue text-center mb-16"
        >
          ValutHomes NG at a Glance
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.2 }}
              className={`relative ${index % 2 === 0 ? "lg:-mt-6" : "lg:mt-6"}`}
            >
              <Card className="bg-white/80 backdrop-blur-md border-none -lg rounded-xl hover:-xl transition-">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">{stat.icon}</div>
                  <h3 className="text-xl font-poppins font-semibold text-deep-navy-blue mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-3xl font-playfair text-rich-gold mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm font-inter text-gray-600">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-2xl md:text-3xl font-playfair text-deep-navy-blue text-center mb-8"
        >
          Featured Properties
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.2 }}
            >
              <Card className="bg-white/80 backdrop-blur-md border-none rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={property.images[0]}
                    alt={property.name}
                    className="w-full h-56 object-cover "
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-poppins font-semibold text-deep-navy-blue mb-2">
                      {property.name}
                    </h4>
                    <p className="text-xl font-playfair text-rich-gold mb-2">
                      {property.category === "rent"
                        ? `${currency.symbol}${new Intl.NumberFormat(
                            "en-NG"
                          ).format(Number(property.rentRate))}/mo`
                        : `${currency.symbol}${new Intl.NumberFormat(
                            "en-NG"
                          ).format(Number(property.price))}`}
                    </p>
                    <p className="text-sm font-inter text-gray-600">
                      {property.beds} Bed{property.beds === 1 ? "" : "s"} •{" "}
                      {property.baths} Bath{property.baths === 1 ? "" : "s"} •{" "}
                      {property.size} sqm
                    </p>
                    <Link href={`/properties/${property.id}`}>
                      <button className="mt-4 w-full bg-emerald-green text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors font-poppins">
                        Explore Property
                      </button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Platform Highlights */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-2xl md:text-3xl font-playfair text-deep-navy-blue text-center mb-10"
        >
          Platform Advantages
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: index * 0.2 }}
            >
              <Card className="bg-white/80 backdrop-blur-md border-none rounded-xl">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div>{highlight.icon}</div>
                  <div>
                    <h4 className="text-lg font-poppins font-semibold text-deep-navy-blue mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm font-inter text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Market Insights */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-2xl md:text-3xl font-playfair text-deep-navy-blue text-center mb-10"
        >
          Market Insights
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.2 }}
            >
              <Card className="bg-white/80 backdrop-blur-md border-none rounded-xl overflow-hidden">
                <CardContent className="p-4">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-40 object-cover rounded-t-xl mb-4"
                  />
                  <h4 className="text-lg font-poppins font-semibold text-deep-navy-blue mb-2">
                    {insight.title}
                  </h4>
                  <p className="text-xl font-playfair text-rich-gold mb-2">
                    {insight.value}
                  </p>
                  <p className="text-sm font-inter text-gray-600">
                    {insight.description}
                  </p>
                  <button className="mt-4 w-full bg-emerald-green text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors font-poppins">
                    Learn More
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Success Stories */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-2xl md:text-3xl font-playfair text-deep-navy-blue text-center mb-10"
        >
          Success Stories
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: index * 0.2 }}
            >
              <Card className="bg-white/80 backdrop-blur-md border-none rounded-xl overflow-hidden">
                <CardContent className="p-4">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-48 object-cover rounded-t-xl mb-4"
                  />
                  <h4 className="text-lg font-poppins font-semibold text-deep-navy-blue mb-2">
                    {story.title}
                  </h4>
                  <p className="text-sm font-inter text-gray-600">
                    {story.description}
                  </p>
                  <button className="mt-4 w-full bg-emerald-green text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors font-poppins">
                    Read Story
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Property Showcase with Grid */}
      </div>
    </section>
  );
};

export default Features;
