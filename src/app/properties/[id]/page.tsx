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
import { notFound } from "next/navigation";

// Define the Property type
type Property = {
  id: string;
  title: string;
  price?: string;
  monthlyRent?: string;
  beds: number;
  baths: number;
  area: string;
  location: string;
  type: string;
  condition: string;
  status: string;
  images: string[];
  description: string;
  preferredClosingDate?: string;
  availableFrom?: string;
};

// Simulated API fetch (replace with real API call)
async function fetchProperty(id: string): Promise<Property | null> {
  const properties: Property[] = [
    {
      id: "1",
      title: "Lagos Luxury Villa",
      price: "$500,000",
      monthlyRent: undefined,
      beds: 4,
      baths: 3,
      area: "350 sqm",
      location: "Lagos",
      type: "Luxury",
      condition: "Excellent",
      status: "for-sale",
      images: [
        "/placeholder-property-1.jpg",
        "/placeholder-property-2.jpg",
        "/placeholder-property-3.jpg",
      ],
      description:
        "This stunning luxury villa in the heart of Lagos offers unparalleled views and modern amenities. Perfect for families or investors looking for a high-end property.",
      preferredClosingDate: "2025-04-15",
    },
    {
      id: "2",
      title: "Abuja Modern Apartment",
      price: undefined,
      monthlyRent: "$1,500/month",
      beds: 3,
      baths: 2,
      area: "250 sqm",
      location: "Abuja",
      type: "Residential",
      condition: "Good",
      status: "for-rent",
      images: ["/placeholder-property-2.jpg", "/placeholder-property-1.jpg"],
      description:
        "A modern apartment in Abuja, ideal for professionals or small families. Available for rent with flexible lease terms.",
      availableFrom: "2025-03-20",
    },
  ];

  return properties.find((p) => p.id === id) || null;
}

// Use Next.js's built-in types for dynamic route params
import { GetServerSidePropsContext } from "next";

// Define the params type explicitly
type Params = {
  id: string;
};

// Extend PageProps with our specific params type
type PropertyDetailsProps = GetServerSidePropsContext & {
  params: Params;
};

// Use the correct type for the Server Component
export default async function PropertyDetails({
  params,
}: PropertyDetailsProps) {
  const property = await fetchProperty(params.id);

  if (!property) {
    notFound(); // Use Next.js's notFound() to handle 404
  }

  return (
    <main className="bg-soft-gray py-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto">
        {/* Property Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-deep-navy-blue mb-2">
            {property.title}
          </h1>
          <div className="flex items-center text-lg text-gray-600">
            <FaMapMarkerAlt className="text-rich-gold mr-2" />
            <span>{property.location}</span>
          </div>
          <p className="text-2xl font-bold text-rich-gold mt-2">
            {property.price || property.monthlyRent}
          </p>
        </div>

        {/* Image Carousel (Delegated to Client Component) */}
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
                <span>{property.beds} Beds</span>
              </div>
              <div className="flex items-center">
                <FaBath className="text-rich-gold mr-2" />
                <span>{property.baths} Baths</span>
              </div>
              <div className="flex items-center">
                <FaRulerCombined className="text-rich-gold mr-2" />
                <span>{property.area}</span>
              </div>
              <div className="flex items-center">
                <FaTag className="text-rich-gold mr-2" />
                <span>Type: {property.type}</span>
              </div>
              <div className="flex items-center">
                <FaTools className="text-rich-gold mr-2" />
                <span>Condition: {property.condition}</span>
              </div>
              {property.preferredClosingDate && (
                <div className="flex items-center">
                  <span>
                    Preferred Closing: {property.preferredClosingDate}
                  </span>
                </div>
              )}
              {property.availableFrom && (
                <div className="flex items-center">
                  <span>Available From: {property.availableFrom}</span>
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
              Contact an Agent
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
