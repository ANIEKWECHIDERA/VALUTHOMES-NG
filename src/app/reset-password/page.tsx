// app/reset-password/page.tsx
"use client";

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

export default function ResetPassword() {
  return (
    <div className="flex flex-col min-h-screen">
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
                Reset Password
              </CardTitle>
              <CardDescription className="text-sm font-inter text-gray-600">
                Enter your email to reset your password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Email */}
              <Input
                type="email"
                placeholder="Email"
                className="border border-soft-gray focus:ring-2 focus:ring-rich-gold"
              />
              {/* Reset Button */}
              <Button className="w-full bg-emerald-green text-white hover:bg-green-600 transition-colors font-poppins">
                Send Reset Link
              </Button>
              {/* Back to Login */}
              <p className="text-center text-sm font-inter text-gray-600">
                Remember your password?{" "}
                <a href="/login" className="text-rich-gold hover:underline">
                  Sign In
                </a>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
