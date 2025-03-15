import { Card, CardContent } from "@/components/ui/card";

// Simulated data
const notifications = [
  { id: "1", message: "New inquiry on your Lagos Villa" },
  { id: "2", message: "Property saved by a user" },
];

export default function Notifications() {
  return (
    <div className="space-y-4">
      {notifications.map((notif) => (
        <Card key={notif.id} className="bg-white border-none rounded-lg">
          <CardContent className="p-4">
            <p className="text-gray-600">{notif.message}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
