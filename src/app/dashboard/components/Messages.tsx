import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Simulated data
const messages = [
  { id: "1", from: "Agent John", message: "Interested in your property?" },
  { id: "2", from: "User Jane", message: "Can we schedule a tour?" },
];

export default function Messages() {
  return (
    <div className="space-y-4">
      {messages.map((msg) => (
        <Card key={msg.id} className="bg-white border-none rounded-lg">
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold text-deep-navy-blue">
              {msg.from}
            </h3>
            <p className="text-gray-600">{msg.message}</p>
            <Button className="mt-2 bg-emerald-green text-white hover:bg-green-600">
              Reply
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
