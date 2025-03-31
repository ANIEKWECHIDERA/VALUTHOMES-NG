"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaTag,
  FaTools,
} from "react-icons/fa";
import Link from "next/link";
import Carousel from "../../../components/properties/Carousel";
import { useGlobalData } from "@/app/context/GlobalDataContext";
import { use } from "react"; // Assuming you have a use hook for fetching data

// Define the interface for PageProps with asynchronous params
interface PageProps {
  params: { id: string };
  searchParams?: Record<string, string | string[] | undefined>;
}

export default function PropertyDetails({ params }: PageProps) {
  function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const { id }: any = use(params);
  const { properties, currency } = useGlobalData();
  const property = properties.find((property) => property.id === id);

  if (!property) {
    return (
      <main className="bg-soft-gray py-12 px-4 sm:px-6 lg:px-8">
        <section className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-deep-navy-blue mb-4">
            Property Not Found
          </h1>
          <p className="text-lg text-gray-600">
            The property you're looking for does not exist.
          </p>
          <Button
            onClick={() => window.history.back()}
            className="mt-4 bg-rich-gold text-deep-navy-blue px-6 py-2 rounded hover:bg-yellow-400 font-poppins"
          >
            Back to Properties
          </Button>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-soft-gray py-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto">
        {/* Property Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-deep-navy-blue mb-2">
            {property.name}
          </h1>
          <div className="flex items-center text-lg text-gray-600">
            <FaMapMarkerAlt className="text-rich-gold mr-2" />
            <span>{property.location}</span>
          </div>
          <p className="text-2xl font-bold text-rich-gold mt-2">
            {property.listingType === "rent"
              ? `${currency.symbol}${new Intl.NumberFormat("en-NG").format(
                  Number(property.rentRate)
                )}/mo`
              : `${currency.symbol}${new Intl.NumberFormat("en-NG").format(
                  Number(property.price)
                )}`}
          </p>
        </div>

        {/* Image Carousel */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-deep-navy-blue mb-4">
            Gallery
          </h2>
          <Carousel images={property.images} />
        </div>

        {/* Property Details */}
        <Card className="bg-white border-none rounded-lg p-6 mb-8">
          <CardContent>
            <h2 className="text-2xl font-semibold text-deep-navy-blue mb-4">
              Property Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
              <div className="flex items-center">
                <FaBed className="text-rich-gold mr-2" />
                <span>
                  {property.beds} Bed{property.beds === 1 ? "" : "s"}
                </span>
              </div>
              <div className="flex items-center">
                <FaBath className="text-rich-gold mr-2" />
                <span>
                  {property.baths} Bath{property.baths === 1 ? "" : "s"}
                </span>
              </div>
              <div className="flex items-center">
                <FaRulerCombined className="text-rich-gold mr-2" />
                <span>{property.size} sqm</span>
              </div>
              <div className="flex items-center">
                <FaTag className="text-rich-gold mr-2" />
                {/* <span>Status: {property.status}</span> */}

                <span>Type: {capitalize(property.type)}</span>
              </div>
              <div className="flex items-center">
                <FaTools className="text-rich-gold mr-2" />
                <span>Condition: {capitalize(property.condition)}</span>
              </div>
              {/* {property.preferredClosingDate && (
                <div className="flex items-center">
                  <span>
                    Preferred Closing: {property.preferredClosingDate}
                  </span>
                </div>
              )} */}
              {property.dateCreated && (
                <div className="flex items-center">
                  <span>
                    Available From:{" "}
                    {new Date(property.dateCreated).toLocaleDateString()}
                  </span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Description */}
        <Card className="bg-white border-none rounded-lg p-6 mb-8">
          <CardContent>
            <h2 className="text-2xl font-semibold text-deep-navy-blue mb-4">
              Description
            </h2>
            <p className="text-gray-600">{property.description}</p>
          </CardContent>
        </Card>

        {/* Contact Agent */}
        <div className="text-center">
          <Link href="/find-an-agent">
            <Button className="bg-emerald-green text-white px-6 py-2 rounded hover:bg-green-600 font-poppins">
              Contact Agent
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
