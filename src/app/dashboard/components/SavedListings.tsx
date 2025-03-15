import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

// Simulated data
const savedListings = [
  { id: "1", title: "Lagos Villa", location: "Lagos", price: "$500,000" },
  { id: "2", title: "Abuja Apartment", location: "Abuja", price: "$1,500/mo" },
];

export default function SavedListings() {
  return (
    <div className="space-y-4">
      {savedListings.map((listing) => (
        <Card key={listing.id} className="bg-white border-none rounded-lg">
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-deep-navy-blue">
                {listing.title}
              </h3>
              <div className="flex items-center text-gray-600">
                <span>{listing.location}</span>
                <span className="ml-2 text-rich-gold">{listing.price}</span>
              </div>
            </div>
            <Button
              variant="outline"
              className="text-deep-navy-blue hover:bg-soft-gray"
            >
              <FaHeart className="mr-2" /> Unsave
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
