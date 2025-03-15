import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Settings() {
  return (
    <div className="space-y-4">
      <Card className="bg-white border-none rounded-lg">
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold text-deep-navy-blue mb-2">
            Profile
          </h3>
          <p className="text-gray-600">Edit your name, email, and photo.</p>
          <Button className="mt-2 bg-emerald-green text-white hover:bg-green-600">
            Edit Profile
          </Button>
        </CardContent>
      </Card>
      <Card className="bg-white border-none rounded-lg">
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold text-deep-navy-blue mb-2">
            Change Password
          </h3>
          <p className="text-gray-600">Update your password securely.</p>
          <Button className="mt-2 bg-emerald-green text-white hover:bg-green-600">
            Change Password
          </Button>
        </CardContent>
      </Card>
      <Card className="bg-white border-none rounded-lg">
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold text-deep-navy-blue mb-2">
            Preferences
          </h3>
          <p className="text-gray-600">Update notification settings.</p>
          <Button className="mt-2 bg-emerald-green text-white hover:bg-green-600">
            Update Preferences
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
