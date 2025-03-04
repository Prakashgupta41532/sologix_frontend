"use client";
import { API } from "@/utils";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
export const Registration = () => {
  const schema = z.object({
    email: z.string().email("Invalid email address").min(5),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await schema.parseAsync(data);

      console.log("data", data);
      API.post("/auth/register", {
        name: data.name,
        phone: data.phone,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      })
        .then((response) => {
          if (response.status === 200) {
            toast.success("Registration successful!");
            // Reset form inputs
            reset({
              email: "",
              phone: "",
              password: "",
              confirmPassword: "",
            });
          } else {
            toast.error(response?.data?.error);
          }
          console.log(response);
        })
        .catch((error) => {
          toast.error("Registration failed!");
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="mt-4">
      <div className="text-center mb-5 leading-10">
        <h2 className="text-2xl font-bold text-gray-900">Register Page</h2>
        <p className="font-bold text-gray-500">
          Welcome to SologixEnergy, Your Solar Partner! Please Sign up to
          Continue.
        </p>
      </div>
      <div className="mb-5 flex items-center justify-center">
        <div className="w-full max-w-md">
          <form
            className="bg-[#2D479C] p-8 rounded-lg shadow-2xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-4">
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                className="w-full p-2 border border-white rounded mt-1"
                placeholder="Enter Your Email-ID"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-white">
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                {...register("phone", { required: true })}
                className="w-full p-2 border border-white rounded mt-1"
                placeholder="Enter Phone Number"
              />
              {errors.phone && (
                <span className="text-red-500">Phone number is required</span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-white">
                Enter Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter Password"
              />
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-white">
                Re-Enter Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", { required: true })}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Re-Enter Password"
              />
              {errors.confirmPassword && (
                <span className="text-red-500">
                  Please confirm your password
                </span>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 bg-[#0C2D86] text-white rounded-full hover:bg-[#0C4D86] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mb-4 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
          <div className="flex flex-col items-center justify-center mt-4">
            <p className="text-center text-gray-700 flex flex-col font-medium">
              Have an account?{" "}
              <a
                href="/login"
                className="text-[#07038D] hover:underline font-extrabold"
              >
                Login Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
