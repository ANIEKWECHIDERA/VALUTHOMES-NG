"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

type FormData = yup.InferType<typeof schema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Login submitted:", data);
    alert("Login submitted! Check console for details.");
    // Handle login logic (e.g., API call)
  };

  return (
    <main className="bg-soft-gray min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-deep-navy-blue">Login</h1>
          <p className="text-gray-600 mt-2">
            Access your account to manage your properties.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link
              href="/reset-password"
              className="text-sm text-rich-gold hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full bg-emerald-green text-white px-6 py-2 rounded hover:bg-green-600 font-poppins"
          >
            Login
          </Button>
        </form>

        {/* Social Logins */}
        <div className="text-center text-sm text-gray-600 mt-4">
          Or sign in with
        </div>
        <div className="flex justify-center space-x-4 mt-2">
          <Button
            variant="outline"
            className="border border-soft-gray hover:bg-soft-gray text-deep-navy-blue"
          >
            <FaGoogle className="mr-2" /> Google
          </Button>
          <Button
            variant="outline"
            className="border border-soft-gray hover:bg-soft-gray text-deep-navy-blue"
          >
            <FaFacebook className="mr-2" /> Facebook
          </Button>
        </div>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link href="/register" className="text-rich-gold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </main>
  );
}
