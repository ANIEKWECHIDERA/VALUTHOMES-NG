"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});

type FormData = yup.InferType<typeof schema>;

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Reset password request submitted:", data);
    alert("Reset password request submitted! Check console for details.");
    // Handle reset password logic (e.g., API call to send reset email)
  };

  return (
    <main className="bg-soft-gray min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-deep-navy-blue">
            Reset Your Password
          </h1>
          <p className="text-gray-600 mt-2">
            Enter your email to receive a password reset link.
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

          <Button
            type="submit"
            className="w-full bg-emerald-green text-white px-6 py-2 rounded hover:bg-green-600 font-poppins"
          >
            Send Reset Link
          </Button>
        </form>

        {/* Back to Login Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Remember your password?{" "}
          <Link href="/login" className="text-rich-gold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </main>
  );
}
