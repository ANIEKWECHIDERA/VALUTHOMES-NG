"use client";

import React, { createContext, useContext, useState } from "react";
import {
  FaCheckCircle,
  FaChartLine,
  FaLock,
  FaVideo,
  FaUsers,
  FaHome,
} from "react-icons/fa"; // react-icons
import mockProperties from "../../lib/mockProperties"; // Import your mock data
import mockAgents from "../../lib/mockAgents"; // Import your mock data

// Define types for the data
type Property = {
  id: string;
  name: string;
  price?: string;
  rentRate?: string;
  description: string;
  beds: number;
  size: number;
  baths: number;
  images: string[];
  condition: "new" | "used";
  status: "available" | "sold" | "rented";
  location: string;
  category: "sale" | "rent" | "luxury" | "commercial";
  type:
    | "short-let"
    | "apartment"
    | "self-contain"
    | "bungalow"
    | "duplex"
    | "land"
    | "office-space"
    | "shop"
    | "warehouse";
  dateCreated: string;
  dateUpdated: string;
};

type Agent = {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  specialties: string[];
  properties: Property[];
  address?: string;
  image: string;
  phone?: string; // Optional phone number
};

type successStories = {
  id: string;
  title: string;
  description: string;
  image: string;
};

type insights = {
  id: string;
  title: string;
  value: string;
  description: string;
  image: string;
};

type stats = {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: React.JSX.Element;
};

type highlights = {
  id: string;
  title: string;
  description: string;
  icon: React.JSX.Element;
};

type GlobalDataContextType = {
  properties: Property[];
  setProperties: (properties: Property[]) => void;
  agents: Agent[];
  setAgents: (agents: Agent[]) => void;
  successStories: successStories[];
  insights: insights[];
  stats: stats[];
  highlights: highlights[];
  currency: currency; // Added currencies to the context type
};

type currency = {
  code: string;
  symbol: string;
};

//create the context
const GlobalDataContext = createContext<GlobalDataContextType | undefined>(
  undefined
);

//dummy data for properties

// Success Stories Data
const successStories = [
  {
    id: "1",
    title: "Aisha’s Journey",
    description: "Found her dream home in 7 days.",
    image:
      "https://images.pexels.com/photos/12599059/pexels-photo-12599059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    title: "Chinedu’s Sale",
    description: "Sold property with 10% profit.",
    image:
      "https://images.pexels.com/photos/12529233/pexels-photo-12529233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

// Market Insights Data
const insights = [
  {
    id: "1",
    title: "Lagos Market",
    value: "Up 8% YOY",
    description: "Rising demand for luxury homes.",
    image:
      "https://images.pexels.com/photos/28738504/pexels-photo-28738504/free-photo-of-colorful-model-houses-on-financial-charts.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    title: "Abuja Trends",
    value: "Stable Growth",
    description: "Ideal for family residences.",
    image:
      "https://images.pexels.com/photos/28053222/pexels-photo-28053222/free-photo-of-real-estate-finance-house-model-table-money-banknotes-door-key.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const stats = [
  {
    id: "1",
    title: "Properties Listed",
    value: "5,000+",
    description: "Explore verified listings.",
    icon: <FaHome className="text-emerald-green" size={28} />,
  },
  {
    id: "2",
    title: "Satisfied Clients",
    value: "10,000+",
    description: "Happy homeowners.",
    icon: <FaUsers className="text-rich-gold" size={28} />,
  },
  {
    id: "3",
    title: "Secure Deals",
    value: "2,500+",
    description: "Top-tier security.",
    icon: <FaLock className="text-emerald-green" size={28} />,
  },
  {
    id: "4",
    title: "Virtual Tours",
    value: "1,200+",
    description: "Immersive experiences.",
    icon: <FaVideo className="text-rich-gold" size={28} />,
  },
  {
    id: "5",
    title: "Verified Agents",
    value: "800+",
    description: "Trusted professionals.",
    icon: <FaCheckCircle className="text-emerald-green" size={28} />,
  },
];

const highlights = [
  {
    id: "1",
    title: "Smart Recommendations",
    description: "AI-driven property suggestions.",
    icon: <FaChartLine className="text-rich-gold" size={24} />,
  },
  {
    id: "2",
    title: "Secure Escrow",
    description: "Fraud-free transactions.",
    icon: <FaLock className="text-emerald-green" size={24} />,
  },
  {
    id: "3",
    title: "AR Virtual Tours",
    description: "360° property walkthroughs.",
    icon: <FaVideo className="text-rich-gold" size={24} />,
  },
];

// Currency data
const currency: currency = { code: "NGN", symbol: "₦" };

// Data provider component
export const GlobalDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [properties, setProperties] = useState<Property[]>(mockProperties);
  const [agents, setAgents] = useState<Agent[]>(mockAgents);

  return (
    <GlobalDataContext.Provider
      value={{
        properties,
        setProperties,
        agents,
        setAgents,
        successStories,
        insights,
        stats,
        highlights,
        currency, // Add more context data as needed for your application
        // Add more context data as needed for your application
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
};

// Custom hook to use the context
export const useGlobalData = () => {
  const context = useContext(GlobalDataContext);
  if (!context) {
    throw new Error("useGlobalData must be used within a GlobalDataProvider");
  }
  return context;
};
