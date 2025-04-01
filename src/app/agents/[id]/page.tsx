// app/agents/[id]/page.tsx
"use client";

import { useState, useEffect, use } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaStar, FaCheckCircle, FaHeart, FaComment } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { useGlobalData } from "@/app/context/GlobalDataContext";
import Link from "next/link";
import Breadcrumb from "@/components/properties/Breadcrumb";
import AgentLoadingSkeleton from "@/components/agents/LoadingSkeleton";
import { FaHome } from "react-icons/fa";

interface AgentDetailsProps {
  params: Promise<{ id: string }>;
}

export default function AgentDetails({ params }: AgentDetailsProps) {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;
  const { agents } = useGlobalData();
  const [agent, setAgent] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const foundAgent = agents.find((a) => a.id === id);
    setTimeout(() => {
      setAgent(foundAgent || null);
      setLoading(false);
    }, 1000); // Remove this in production; simulate async fetch
  }, [id, agents]);

  if (loading) return <AgentLoadingSkeleton />;

  if (!agent) {
    return (
      <main className="bg-white py-8 px-4">
        <section className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-deep-navy-blue mb-4">
            Agent Not Found
          </h1>
          <p className="text-base text-gray-600">
            The agent you're looking for does not exist.
          </p>
          <Button
            asChild
            className="mt-4 bg-rich-gold text-deep-navy-blue hover:bg-yellow-400 font-poppins"
          >
            <Link href="/agents">Back to Agents</Link>
          </Button>
        </section>
      </main>
    );
  }

  const featuredListings = agent.properties
    .filter((p: any) => p.status === "available")
    .slice(0, 4);

  return (
    <main className="bg-soft-gray pb-3 md:pb-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-4xl mx-auto">
        <div className="mb-8 sticky top-16 z-20 ">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Agents", href: "/agents" },
              { label: agent.name },
            ]}
          />
        </div>

        {/* Agent Header */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 border-b border-gray-200 pb-6 mb-6">
          {/* Photo and Details */}
          <div className="flex flex-col items-center lg:flex-row lg:items-start gap-6 w-full lg:w-2/3">
            <div className="relative">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover"
                loading="lazy"
              />
              <p className="text-gray-600 mt-2 flex items-center justify-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    agent.isOnline ? "bg-emerald-green" : "bg-red-500"
                  }`}
                ></span>
                {agent.isOnline ? "Online" : "Offline"}
              </p>
            </div>
            <div className="text-center lg:text-left flex-1">
              <h1 className="text-2xl font-bold text-deep-navy-blue flex items-center xl:justify-start justify-center gap-2 mb-2">
                {agent.name}
                {agent.isVerified && (
                  <FaCheckCircle
                    className="text-emerald-green"
                    aria-label="Verified Agent"
                  />
                )}
              </h1>
              <p className="text-base text-gray-500 mb-4">{agent.about}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  className="bg-emerald-green text-white hover:bg-green-600 font-poppins flex items-center"
                >
                  <Link href={`/agents/${agent.id}#chat`}>
                    <FaComment className="mr-2" /> Chat
                  </Link>
                </Button>
                <Button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`py-4 ${
                    isFavorite ? "bg-red-500" : "bg-gray-500"
                  } text-white hover:bg-opacity-80 font-poppins`}
                  aria-label={
                    isFavorite ? "Remove from Favorites" : "Save as Favorite"
                  }
                >
                  <FaHeart className="mr-2" />
                  {isFavorite ? "Remove" : "Save"}
                </Button>
              </div>
            </div>
          </div>

          {/* Social Media and Stats */}
          <div className="mt- lg:mt-0 lg:w-1/3 flex flex-col items-center lg:items-end gap-4">
            <div className="flex gap-4">
              {/* <h1 className="text-deep-navy-blue">{`Social Media:`}</h1> */}
              {agent.socialMedia.map((link: any, index: number) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-deep-navy-blue hover:text-rich-gold text-xl"
                  aria-label={`${link.platform} profile`}
                >
                  {link.platform === "Twitter" && <FaXTwitter />}
                  {link.platform === "Facebook" && <SlSocialFacebook />}
                  {link.platform === "Instagram" && <FaInstagram />}
                </a>
              ))}
            </div>
            <div className="text-center h-full lg:text-right w-full text-gray-500 align-middle items-center space-y-5">
              <div className="flex justify-center xl:justify-start text-2xl gap-7">
                <p>
                  <strong>{agent.propertiesListed}</strong>{" "}
                  <p className="text-xs">Properties Listed</p>
                </p>
                <p>
                  <strong>{agent.propertiesSold}</strong> {/*Properties Sold */}
                  <p className="text-xs">Properties Sold</p>
                </p>
                <p>
                  <strong>{agent.propertiesRented}</strong>{" "}
                  <p className="text-xs">Properties Rented</p>
                  {/*Properties Rented*/}
                </p>
              </div>
              <p>
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < Math.floor(agent.rating)
                        ? "text-yellow-500 inline"
                        : "text-gray-300 inline"
                    }
                    aria-hidden="true"
                  />
                ))}{" "}
                ({agent.reviewCount} reviews)
              </p>
            </div>
          </div>
        </div>

        {/* Featured Listings */}
        <div className="mt-12 text-center xl:text-left border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-bold text-black mb-4">
            Current Listings
          </h2>
          {featuredListings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredListings.map((property: any) => (
                <Card
                  key={property.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm"
                >
                  <CardContent className="p-0">
                    <img
                      src={property.images[0]}
                      alt={property.name}
                      className="w-full h-32 object-cover rounded-t-lg"
                      loading="lazy"
                    />
                    <div className="p-3">
                      <p className="text-sm font-semibold text-black">
                        {property.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {property.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">
              No Listed Properties
            </p>
          )}
        </div>

        {/* Testimonials */}
        {agent.testimonials.length > 0 && (
          <div className="mt-12 text-center xl:text-left">
            <h2 className="text-2xl font-bold text-black mb-4">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agent.testimonials
                .slice(0, 3)
                .map((testimonial: any, index: number) => (
                  <Card
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm"
                  >
                    <CardContent className="p-4">
                      <p className="text-gray-500 italic">
                        "{testimonial.text}"
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        - {testimonial.clientName}
                      </p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
