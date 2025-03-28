"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

// Validation schema
const schema = yup.object().shape({
  propertyAddress: yup.string().required("Property address is required"),
  askingPrice: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .required("Asking price is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(
      /^\+?[1-9]\d{9,14}$/,
      "Invalid phone number format (e.g., +2348012345678)"
    )
    .required("Phone number is required"),
  propertyCondition: yup.string().required("Property condition is required"),
  preferredClosingDate: yup
    .date()
    .required("Preferred closing date is required")
    .min(new Date(), "Date must be in the future"),
  propertyType: yup.string().required("Property type is required"),
  images: yup
    .mixed()
    .test(
      "fileCount",
      "Maximum 10 images allowed",
      (value) => !value || (value && (value as File[]).length <= 10)
    )
    .test(
      "fileSize",
      "Each image must be less than 5MB",
      (value) =>
        !value ||
        (value &&
          Array.isArray(value) &&
          value.every((file: File) => file.size <= 5 * 1024 * 1024))
    )
    .test(
      "fileType",
      "Only JPG, PNG, or JPEG files are allowed",
      (value) =>
        !value ||
        (Array.isArray(value) &&
          value.every((file: File) => /image\/(jpg|jpeg|png)/.test(file.type)))
    ),
});

type FormData = yup.InferType<typeof schema>;

export default function SellProperty() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      propertyAddress: "",
      askingPrice: undefined,
      email: "",
      phone: "",
      propertyCondition: "",
      preferredClosingDate: undefined,
      propertyType: "",
      images: undefined,
    },
  });

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const images = watch("images");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files);
      const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
      setImagePreviews((prev) => [...prev, ...newPreviews].slice(0, 10));
      setValue("images", files);
    }
  };

  const removeImage = (index: number) => {
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    const newFiles = Array.isArray(images)
      ? images.filter((_, i) => i !== index)
      : [];
    setImagePreviews(newPreviews);
    setValue("images", newFiles.length > 0 ? newFiles : undefined);
  };

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    alert("Property submitted successfully! Check console for details.");
    // Clean up image previews
    imagePreviews.forEach((url) => URL.revokeObjectURL(url));
    setImagePreviews([]);
  };

  return (
    <main className="bg-soft-gray py-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-deep-navy-blue mb-4">
            Sell Your Property
          </h1>
          <p className="text-lg text-gray-600">
            Choose the best way to sell your home with ValutHomes NG.
          </p>
        </div>

        {/* Sell Options Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white border-none rounded-lg p-6">
            <CardContent>
              <h3 className="text-xl font-semibold text-deep-navy-blue mb-2">
                Sell with an Agent
              </h3>
              <p className="text-gray-600 mb-4">
                Partner with a local expert to maximize your sale price.
              </p>
              <img
                src="/placeholder-sell-agent.jpg"
                alt="Sell with Agent"
                className="w-full h-32 object-cover rounded-lg mb-2"
                loading="lazy"
              />
            </CardContent>
          </Card>
          <Card className="bg-white border-none rounded-lg p-6">
            <CardContent>
              <h3 className="text-xl font-semibold text-deep-navy-blue mb-2">
                Cash Offer
              </h3>
              <p className="text-gray-600 mb-4">
                Get a fast, hassle-free cash offer for your property.
              </p>
              <img
                src="/placeholder-cash-offer.jpg"
                alt="Cash Offer"
                className="w-full h-32 object-cover rounded-lg mb-2"
                loading="lazy"
              />
            </CardContent>
          </Card>
          <Card className="bg-white border-none rounded-lg p-6">
            <CardContent>
              <h3 className="text-xl font-semibold text-deep-navy-blue mb-2">
                Sell on Your Own
              </h3>
              <p className="text-gray-600 mb-4">
                List your property yourself with our tools and support.
              </p>
              <img
                src="/placeholder-sell-own.jpg"
                alt="Sell on Your Own"
                className="w-full h-32 object-cover rounded-lg mb-2"
                loading="lazy"
              />
            </CardContent>
          </Card>
        </div>

        {/* Sell Property Form */}
        <Card className="bg-white border-none rounded-lg p-6">
          <CardContent>
            <h2 className="text-2xl font-bold text-deep-navy-blue mb-6">
              Submit Your Property for Sale
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Property Address */}
              <div>
                <label className="block text-sm font-medium text-deep-navy-blue mb-1">
                  Property Address
                </label>
                <Input
                  {...register("propertyAddress")}
                  className="w-full p-2 rounded border border-soft-gray focus:ring-2 focus:ring-rich-gold text-deep-navy-blue"
                  placeholder="Enter full address"
                />
                {errors.propertyAddress && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.propertyAddress.message}
                  </p>
                )}
              </div>

              {/* Asking Price */}
              <div>
                <label className="block text-sm font-medium text-deep-navy-blue mb-1">
                  Asking Price ($)
                </label>
                <Input
                  {...register("askingPrice")}
                  type="number"
                  className="w-full p-2 rounded border border-soft-gray focus:ring-2 focus:ring-rich-gold text-deep-navy-blue"
                  placeholder="Enter asking price"
                />
                {errors.askingPrice && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.askingPrice.message}
                  </p>
                )}
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium text-deep-navy-blue mb-1">
                  Property Type
                </label>
                <select
                  {...register("propertyType")}
                  className="w-full p-2 rounded border border-soft-gray focus:ring-2 focus:ring-rich-gold text-deep-navy-blue"
                >
                  <option value="">Select property type</option>
                  <option value="Residential">Residential</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Commercial">Commercial</option>
                </select>
                {errors.propertyType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.propertyType.message}
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

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-deep-navy-blue mb-1">
                  Phone Number
                </label>
                <Input
                  {...register("phone")}
                  className="w-full p-2 rounded border border-soft-gray focus:ring-2 focus:ring-rich-gold text-deep-navy-blue"
                  placeholder="Enter phone (e.g., +2348012345678)"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Property Condition */}
              <div>
                <label className="block text-sm font-medium text-deep-navy-blue mb-1">
                  Property Condition
                </label>
                <select
                  {...register("propertyCondition")}
                  className="w-full p-2 rounded border border-soft-gray focus:ring-2 focus:ring-rich-gold text-deep-navy-blue"
                >
                  <option value="">Select condition</option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Poor">Poor</option>
                </select>
                {errors.propertyCondition && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.propertyCondition.message}
                  </p>
                )}
              </div>

              {/* Preferred Closing Date */}
              <div>
                <label className="block text-sm font-medium text-deep-navy-blue mb-1">
                  Preferred Closing Date
                </label>
                <Input
                  {...register("preferredClosingDate")}
                  type="date"
                  className="w-full p-2 rounded border border-soft-gray focus:ring-2 focus:ring-rich-gold text-deep-navy-blue"
                />
                {errors.preferredClosingDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.preferredClosingDate.message}
                  </p>
                )}
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-deep-navy-blue mb-1">
                  Upload Property Images (Max 10)
                </label>
                <input
                  type="file"
                  {...register("images")}
                  accept="image/jpeg,image/png,image/jpg"
                  multiple
                  className="w-full p-2 rounded border border-soft-gray text-deep-navy-blue"
                  onChange={handleImageChange}
                />
                {errors.images && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.images.message}
                  </p>
                )}
                {imagePreviews.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                    {imagePreviews.map((preview, index) => (
                      <div key={index} className="relative">
                        <img
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg"
                          loading="lazy"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full"
                          title="Remove image"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-rich-gold text-deep-navy-blue px-6 py-2 rounded hover:bg-yellow-400 font-poppins"
              >
                Submit Property
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
