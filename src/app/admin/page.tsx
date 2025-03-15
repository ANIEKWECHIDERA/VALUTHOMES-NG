"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserManagement from "./components/UserManagement";
import PropertyModeration from "./components/PropertyModeration";
import Reports from "./components/Reports";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { useState } from "react";

// Breadcrumbs component
const Breadcrumbs = ({ activeTab }: { activeTab: string }) => {
  const tabNames: { [key: string]: string } = {
    "user-management": "User Management",
    "property-moderation": "Property Moderation",
    reports: "Reports",
  };

  return (
    <nav className="mb-6 text-sm text-gray-600 flex items-center space-x-2">
      <Link href="/" className="flex items-center hover:text-rich-gold">
        <FaHome className="mr-1" /> Home
      </Link>
      <span>/</span>
      <Link href="/admin" className="hover:text-rich-gold">
        Admin Panel
      </Link>
      <span>/</span>
      <span className="text-deep-navy-blue font-semibold">
        {tabNames[activeTab] || "User Management"}
      </span>
    </nav>
  );
};

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("user-management");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <main className="bg-soft-gray min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto">
        {/* Breadcrumbs inside the page */}
        <Breadcrumbs activeTab={activeTab} />

        <Card className="bg-white border-none rounded-lg">
          <CardContent className="p-6">
            <Tabs
              value={activeTab}
              onValueChange={handleTabChange}
              className="w-full"
            >
              {/* Tabs for Desktop */}
              <div className="hidden sm:block">
                <TabsList className="w-full bg-deep-navy-blue text-white pb-2 mb-4">
                  <TabsTrigger
                    value="user-management"
                    className="mr-2 data-[state=active]:bg-rich-gold data-[state=active]:text-deep-navy-blue"
                  >
                    User Management
                  </TabsTrigger>
                  <TabsTrigger
                    value="property-moderation"
                    className="mr-2 data-[state=active]:bg-rich-gold data-[state=active]:text-deep-navy-blue"
                  >
                    Property Moderation
                  </TabsTrigger>
                  <TabsTrigger
                    value="reports"
                    className="mr-2 data-[state=active]:bg-rich-gold data-[state=active]:text-deep-navy-blue"
                  >
                    Reports
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Dropdown for Mobile */}
              <div className="sm:hidden mb-4">
                <label htmlFor="admin-tabs" className="sr-only">
                  Select Tab
                </label>
                <select
                  id="admin-tabs"
                  value={activeTab}
                  onChange={(e) => handleTabChange(e.target.value)}
                  className="w-full p-2 rounded border border-soft-gray text-deep-navy-blue focus:ring-2 focus:ring-rich-gold"
                >
                  <option value="user-management">User Management</option>
                  <option value="property-moderation">
                    Property Moderation
                  </option>
                  <option value="reports">Reports</option>
                </select>
              </div>

              <TabsContent value="user-management">
                <UserManagement />
              </TabsContent>
              <TabsContent value="property-moderation">
                <PropertyModeration />
              </TabsContent>
              <TabsContent value="reports">
                <Reports />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Back to Home Link */}
        <div className="mt-6 text-center">
          <Link href="/">
            <Button className="bg-rich-gold text-deep-navy-blue hover:bg-yellow-400 font-poppins">
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
