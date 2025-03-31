"use client";
import { createContext, useContext, useState } from "react";

//Define the data types

type User = {
  id: number;
  name: string;
  email: string;
  description: string;
  role: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  image: string;
  isVerified: boolean;
  banned: boolean;
  properties: number;
  propertiesListed: number;
  propertiesSold: number;
  propertiesRented: number;
};

type Property = {
  id: number;
  title: string;
  price: string;
  decsription: string;
  beds: number;
  baths: number;
  area: string;
  location: string;
  type: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  listedBy: string;
};

type Report = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  listing: string;
};

type DataContextType = {
  Users: User[];
  setUsers: (users: User[]) => void;
  Properties: Property[];
  setProperties: (properties: Property[]) => void;
  Reports: Report[];
  setReports: (reports: Report[]) => void;
};
// Create the context
const DataContext = createContext<DataContextType | undefined>(undefined);

//Dummy data
