// app/components/Features.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"; // ShadCN UI Card component
import {
  FaCheckCircle,
  FaChartLine,
  FaLock,
  FaVideo,
  FaUsers,
  FaHome,
} from "react-icons/fa"; // react-icons

// Stats Data
const stats = [
  {
    title: "Properties Listed",
    value: "5,000+",
    description: "Explore verified listings.",
    icon: <FaHome className="text-emerald-green" size={28} />,
  },
  {
    title: "Satisfied Clients",
    value: "10,000+",
    description: "Happy homeowners.",
    icon: <FaUsers className="text-rich-gold" size={28} />,
  },
  {
    title: "Secure Deals",
    value: "2,500+",
    description: "Top-tier security.",
    icon: <FaLock className="text-emerald-green" size={28} />,
  },
  {
    title: "Virtual Tours",
    value: "1,200+",
    description: "Immersive experiences.",
    icon: <FaVideo className="text-rich-gold" size={28} />,
  },
  {
    title: "Verified Agents",
    value: "800+",
    description: "Trusted professionals.",
    icon: <FaCheckCircle className="text-emerald-green" size={28} />,
  },
];

// Platform Highlights Data
const highlights = [
  {
    title: "Smart Recommendations",
    description: "AI-driven property suggestions.",
    icon: <FaChartLine className="text-rich-gold" size={24} />,
  },
  {
    title: "Secure Escrow",
    description: "Fraud-free transactions.",
    icon: <FaLock className="text-emerald-green" size={24} />,
  },
  {
    title: "AR Virtual Tours",
    description: "360° property walkthroughs.",
    icon: <FaVideo className="text-rich-gold" size={24} />,
  },
];

// Market Insights Data
const insights = [
  {
    title: "Lagos Market",
    value: "Up 8% YOY",
    description: "Rising demand for luxury homes.",
    image: "/placeholder-insight-1.jpg",
  },
  {
    title: "Abuja Trends",
    value: "Stable Growth",
    description: "Ideal for family residences.",
    image: "/placeholder-insight-2.jpg",
  },
];

// Success Stories Data
const successStories = [
  {
    title: "Aisha’s Journey",
    description: "Found her dream home in 7 days.",
    image: "/placeholder-story-1.jpg",
  },
  {
    title: "Chinedu’s Sale",
    description: "Sold property with 10% profit.",
    image: "/placeholder-story-2.jpg",
  },
];

// Property Showcase Data
const properties = [
  {
    title: "Lagos Luxury Villa",
    price: "$500,000",
    beds: 4,
    baths: 3,
    area: "350 sqm",
    image: "/17925.jpg",
  },
  {
    title: "Abuja Modern Home",
    price: "$300,000",
    beds: 3,
    baths: 2,
    area: "250 sqm",
    image:
      "https://i.pinimg.com/1200x/5a/25/68/5a25687445c3fa5909abea8c36a69f0c.jpg",
  },
  {
    title: "Port Harcourt Residence",
    price: "$400,000",
    beds: 3,
    baths: 2.5,
    area: "280 sqm",
    image:
      "https://www.silvacreate.com/wp-content/uploads/2020/05/places-to-live-port-harcourt-1024x683.jpg",
  },
  {
    title: "Ibadan Family Estate",
    price: "$350,000",
    beds: 5,
    baths: 4,
    area: "400 sqm",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/633213826.jpg?k=c455d7317014b6c016d54c80990416efa34a51c89de6555a18e87885b4f497d6&o=",
  },
  {
    title: "Enugu Townhouse",
    price: "$250,000",
    beds: 2,
    baths: 2,
    area: "200 sqm",
    image:
      "https://solidagoconstruction.com/wp-content/uploads/2017/01/mks.jpg",
  },
  {
    title: "Shortlet In Owerri",
    price: "$250,00",
    beds: 2,
    baths: 2,
    area: "200 sqm",
    image:
      "https://mccapitalproperties.com/wp-content/uploads/2023/12/Fully-Furnished-Serviced-1-Bedroom-Apartments-Flats-for-Holiday-Homes-in-Owerri-Short-let-in-Owerri-Imo-State-by-Mc-Capital-Properties-6-jpg.webp",
  },
];

const Features = () => {
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
              <Card className="bg-white/80 backdrop-blur-md border-none shadow-lg rounded-xl hover:shadow-xl transition-shadow">
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
          {properties.map((property, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.2 }}
            >
              <Card className="bg-white/80 backdrop-blur-md border-none shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-56 object-cover "
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-poppins font-semibold text-deep-navy-blue mb-2">
                      {property.title}
                    </h4>
                    <p className="text-xl font-playfair text-rich-gold mb-2">
                      {property.price}
                    </p>
                    <p className="text-sm font-inter text-gray-600">
                      {property.beds} Beds • {property.baths} Baths •{" "}
                      {property.area}
                    </p>
                    <button className="mt-4 w-full bg-emerald-green text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors font-poppins">
                      Explore Property
                    </button>
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
              <Card className="bg-white/80 backdrop-blur-md border-none shadow-lg rounded-xl hover:shadow-xl transition-shadow">
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
              <Card className="bg-white/80 backdrop-blur-md border-none shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
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
              <Card className="bg-white/80 backdrop-blur-md border-none shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
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
