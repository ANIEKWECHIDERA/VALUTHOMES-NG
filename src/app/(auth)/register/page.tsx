"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
  termsAgreed: yup
    .boolean()
    .oneOf([true], "You must agree to the Terms & Conditions"),
});

type FormData = yup.InferType<typeof schema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAgreed: false,
    },
  });

  const [termsAgreed, setTermsAgreed] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log("Registration submitted:", data);
    alert("Registration submitted! Check console for details.");
    // Handle registration logic (e.g., API call)
  };

  return (
    <main className="bg-soft-gray min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-deep-navy-blue">
            Join ValutHomes NG
          </h1>
          <p className="text-gray-600 mt-2">
            Create an account to start listing or exploring properties.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-deep-navy-blue mb-1">
              Full Name
            </label>
            <Input
              {...register("fullName")}
              className="w-full p-2 rounded border border-soft-gray focus:ring-2 focus:ring-rich-gold text-deep-navy-blue"
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-deep-navy-blue mb-1">
              Email
            </label>
            <Input
              {...register("email")}
              type="email"
              className="w-full p-2 rounded border border-soft-gray focus:ring-2 focus:ring-rich-gold text-deep-navy-blue"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-deep-navy-blue mb-1">
              Password
            </label>
            <Input
              {...register("password")}
              type="password"
              className="w-full p-2 rounded border border-soft-gray focus:ring-2 focus:ring-rich-gold text-deep-navy-blue"
              placeholder="Create a password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-deep-navy-blue mb-1">
              Confirm Password
            </label>
            <Input
              {...register("confirmPassword")}
              type="password"
              className="w-full p-2 rounded border border-soft-gray focus:ring-2 focus:ring-rich-gold text-deep-navy-blue"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Terms Agreement */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={termsAgreed}
              onCheckedChange={(checked) => setTermsAgreed(checked as boolean)}
              {...register("termsAgreed")}
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the{" "}
              <Link href="/terms" className="text-rich-gold hover:underline">
                Terms & Conditions
              </Link>
            </label>
          </div>
          {errors.termsAgreed && (
            <p className="text-red-500 text-sm mt-1">
              {errors.termsAgreed.message}
            </p>
          )}

          <Button
            type="submit"
            disabled={!termsAgreed}
            className="w-full bg-emerald-green text-white px-6 py-2 rounded hover:bg-green-600 font-poppins"
          >
            Register
          </Button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-rich-gold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </main>
  );
}
