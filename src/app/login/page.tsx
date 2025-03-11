// app/login/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // ShadCN UI Card components
import { Input } from "@/components/ui/input"; // ShadCN UI Input
import { Button } from "@/components/ui/button"; // ShadCN UI Button
import { FaGoogle, FaFacebook } from "react-icons/fa"; // react-icons for social logins

export default function Login() {
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
                Welcome Back
              </CardTitle>
              <CardDescription className="text-sm font-inter text-gray-600">
                Sign in to explore properties
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
              {/* Forgot Password */}
              <div className="text-right">
                <a
                  href="/reset-password"
                  className="text-sm font-inter text-rich-gold hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              {/* Login Button */}
              <Button className="w-full bg-emerald-green text-white hover:bg-green-600 transition-colors font-poppins">
                Sign In
              </Button>
              {/* Social Logins */}
              <div className="text-center text-sm font-inter text-gray-600">
                Or sign in with
              </div>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  className="border border-soft-gray hover:bg-soft-gray"
                >
                  <FaGoogle className="mr-2" /> Google
                </Button>
                <Button
                  variant="outline"
                  className="border border-soft-gray hover:bg-soft-gray"
                >
                  <FaFacebook className="mr-2" /> Facebook
                </Button>
              </div>
              {/* Register Link */}
              <p className="text-center text-sm font-inter text-gray-600">
                Don’t have an account?{" "}
                <a href="/register" className="text-rich-gold hover:underline">
                  Sign Up
                </a>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
