// app/properties/[id]/page.tsx
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
import Carousel from "@/components/properties/Carousel";
import { useGlobalData } from "@/app/context/GlobalDataContext";
import Breadcrumb from "@/components/properties/Breadcrumb";
import { useEffect, useState } from "react";
import { use } from "react";

// For Next.js 15, params must be Promise<any>
interface PageProps {
  params: Promise<{ id: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default function PropertyDetails({ params, searchParams }: PageProps) {
  // Unwrap params and searchParams
  const unwrappedParams = use(params);
  const unwrappedSearchParams = searchParams ? use(searchParams) : {};

  const { id } = unwrappedParams;
  const { properties, currency } = useGlobalData();
  const property = properties.find((property) => property.id === id);
  const [breadcrumbItems, setBreadcrumbItems] = useState<
    { label: string; href?: string }[]
  >([]);

  // Capitalize utility function
  function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  // Truncate property name if too long
  function truncateName(name: string, maxLength: number = 20): string {
    return name.length > maxLength
      ? `${name.slice(0, maxLength - 3)}...`
      : name;
  }

  // Determine breadcrumb based on searchParams
  useEffect(() => {
    const from = unwrappedSearchParams?.from as string | undefined;
    const baseItems = [
      { label: "Home", href: "/" },
      { label: "Properties", href: "/properties" },
    ];
    let dynamicItems: { label: string; href?: string }[] = [];

    if (!property) return;

    const propertyName = truncateName(property.name);

    // Map 'from' parameter to breadcrumb paths
    switch (from) {
      case "for-sale":
        dynamicItems = [
          ...baseItems,
          { label: "For Sale", href: "/properties/for-sale" },
          { label: propertyName },
        ];
        break;
      case "for-rent":
        dynamicItems = [
          ...baseItems,
          { label: "For Rent", href: "/properties/for-rent" },
          { label: propertyName },
        ];
        break;
      case "luxury":
        dynamicItems = [
          ...baseItems,
          { label: "Luxury", href: "/properties/luxury" },
          { label: propertyName },
        ];
        break;
      case "commercial":
        dynamicItems = [
          ...baseItems,
          { label: "Commercial", href: "/properties/commercial" },
          { label: propertyName },
        ];
        break;
      default:
        // Default case (e.g., from home or no 'from' param)
        dynamicItems = [...baseItems, { label: propertyName }];
        break;
    }

    setBreadcrumbItems(dynamicItems);
  }, [property, unwrappedSearchParams]);

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
        <div className="mb-6 h-auto sticky top-16 z-20">
          <Breadcrumb items={breadcrumbItems} />
        </div>
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
                )} ${property.type === "short-let" ? "/day" : "/year"}`
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
                <span>Type: {capitalize(property.type)}</span>
              </div>
              <div className="flex items-center">
                <FaTools className="text-rich-gold mr-2" />
                <span>Condition: {capitalize(property.condition)}</span>
              </div>
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
