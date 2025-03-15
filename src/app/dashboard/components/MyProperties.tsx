import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";

// Simulated data
const properties = [
  { id: "1", title: "Lagos Villa", location: "Lagos", price: "$500,000" },
  { id: "2", title: "Abuja Apartment", location: "Abuja", price: "$1,500/mo" },
];

export default function MyProperties() {
  return (
    <div className="space-y-4">
      {properties.map((property) => (
        <Card key={property.id} className="bg-white border-none rounded-lg">
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-deep-navy-blue">
                {property.title}
              </h3>
              <div className="flex items-center text-gray-600">
                <span>{property.location}</span>
                <span className="ml-2 text-rich-gold">{property.price}</span>
              </div>
            </div>
            <div className="space-x-2">
              <Link href={`/edit-property/${property.id}`}>
                <Button
                  variant="outline"
                  className="text-deep-navy-blue hover:bg-soft-gray"
                >
                  <FaEdit className="mr-2" /> Edit
                </Button>
              </Link>
              <Button variant="destructive" className="hover:bg-red-600">
                <FaTrash className="mr-2" /> Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
      <Link href="/list-property">
        <Button className="mt-4 bg-emerald-green text-white hover:bg-green-600 font-poppins">
          List New Property
        </Button>
      </Link>
    </div>
  );
}
