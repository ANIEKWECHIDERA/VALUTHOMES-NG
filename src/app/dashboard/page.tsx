"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyProperties from "./components/MyProperties";
import SavedListings from "./components/SavedListings";
import Messages from "./components/Messages";
import Notifications from "./components/Notifications";
import Settings from "./components/Settings";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { useState } from "react";

// Breadcrumb component with dynamic active tab
const Breadcrumbs = ({ activeTab }: { activeTab: string }) => {
  const tabNames: { [key: string]: string } = {
    "my-properties": "My Properties",
    "saved-listings": "Saved Listings",
    messages: "Messages",
    notifications: "Notifications",
    settings: "Settings",
  };

  return (
    <nav className="mb-6 text-sm text-gray-600 flex items-center space-x-2">
      <Link href="/" className="flex items-center hover:text-rich-gold">
        <FaHome className="mr-1" /> Home
      </Link>
      <span>/</span>
      <Link href="/dashboard" className="hover:text-rich-gold">
        Dashboard
      </Link>
      <span>/</span>
      <span className="text-deep-navy-blue font-semibold">
        {tabNames[activeTab] || "My Properties"}
      </span>
    </nav>
  );
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("my-properties");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <main className="bg-soft-gray min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto">
        {/* Breadcrumbs with dynamic active tab */}
        <Breadcrumbs activeTab={activeTab} />

        <h1 className="text-4xl font-bold text-deep-navy-blue mb-8">
          User Dashboard
        </h1>
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
                    value="my-properties"
                    className="mr-2 data-[state=active]:bg-rich-gold data-[state=active]:text-deep-navy-blue"
                  >
                    My Properties
                  </TabsTrigger>
                  <TabsTrigger
                    value="saved-listings"
                    className="mr-2 data-[state=active]:bg-rich-gold data-[state=active]:text-deep-navy-blue"
                  >
                    Saved Listings
                  </TabsTrigger>
                  <TabsTrigger
                    value="messages"
                    className="mr-2 data-[state=active]:bg-rich-gold data-[state=active]:text-deep-navy-blue"
                  >
                    Messages
                  </TabsTrigger>
                  <TabsTrigger
                    value="notifications"
                    className="mr-2 data-[state=active]:bg-rich-gold data-[state=active]:text-deep-navy-blue"
                  >
                    Notifications
                  </TabsTrigger>
                  <TabsTrigger
                    value="settings"
                    className="mr-2 data-[state=active]:bg-rich-gold data-[state=active]:text-deep-navy-blue"
                  >
                    Settings
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Dropdown for Mobile */}
              <div className="sm:hidden mb-4">
                <label htmlFor="mobile-tabs" className="sr-only">
                  Select Tab
                </label>
                <select
                  id="mobile-tabs"
                  value={activeTab}
                  onChange={(e) => handleTabChange(e.target.value)}
                  className="w-full p-2 rounded border border-soft-gray text-deep-navy-blue focus:ring-2 focus:ring-rich-gold"
                >
                  <option value="my-properties">My Properties</option>
                  <option value="saved-listings">Saved Listings</option>
                  <option value="messages">Messages</option>
                  <option value="notifications">Notifications</option>
                  <option value="settings">Settings</option>
                </select>
              </div>

              <TabsContent value="my-properties">
                <MyProperties />
              </TabsContent>
              <TabsContent value="saved-listings">
                <SavedListings />
              </TabsContent>
              <TabsContent value="messages">
                <Messages />
              </TabsContent>
              <TabsContent value="notifications">
                <Notifications />
              </TabsContent>
              <TabsContent value="settings">
                <Settings />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
