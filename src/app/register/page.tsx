// app/register/page.tsx
"use client";

import Navbar from "@/components/home/NavBar";
import Footer from "@/components/home/Footer";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"; // ShadCN UI Checkbox
import { useState } from "react";

export default function Register() {
  // State to track if terms are agreed
  const [termsAgreed, setTermsAgreed] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-soft-gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto py-12 px-4 sm:px-6 lg:px-8"
        >
          <Card className="bg-white/80 backdrop-blur-md border-none shadow-lg rounded-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl font-playfair text-deep-navy-blue">
                Create Account
              </CardTitle>
              <CardDescription className="text-sm font-inter text-gray-600">
                Join ValutHomes NG today
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Full Name */}
              <Input
                type="text"
                placeholder="Full Name"
                className="border border-soft-gray focus:ring-2 focus:ring-rich-gold"
              />
              {/* Email */}
              <Input
                type="email"
                placeholder="Email"
                className="border border-soft-gray focus:ring-2 focus:ring-rich-gold"
              />
              {/* Password */}
              <Input
                type="password"
                placeholder="Password"
                className="border border-soft-gray focus:ring-2 focus:ring-rich-gold"
              />
              {/* Confirm Password */}
              <Input
                type="password"
                placeholder="Confirm Password"
                className="border border-soft-gray focus:ring-2 focus:ring-rich-gold"
              />
              {/* Terms Agreement */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={termsAgreed}
                  onCheckedChange={(checked) =>
                    setTermsAgreed(checked as boolean)
                  }
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-inter text-gray-600"
                >
                  I agree to the{" "}
                  <a href="/terms" className="text-rich-gold hover:underline">
                    Terms & Conditions
                  </a>
                </label>
              </div>
              {/* Register Button */}
              <Button
                disabled={!termsAgreed}
                className={`w-full font-poppins transition-colors ${
                  termsAgreed
                    ? "bg-emerald-green text-white hover:bg-green-600"
                    : "bg-gray-400 text-gray-700 cursor-not-allowed"
                }`}
              >
                Sign Up
              </Button>
              {/* Login Link */}
              <p className="text-center text-sm font-inter text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="text-rich-gold hover:underline">
                  Sign In
                </a>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
