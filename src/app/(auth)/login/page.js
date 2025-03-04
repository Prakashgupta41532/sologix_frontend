"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { API } from "@/utils";
import { useDispatch } from "react-redux";
import { login } from "@/redux/action";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      console.log("data", data);
      API.post("/auth/login", {
        email: data.loginId,
        password: data.password,
      })
        .then((response) => {
          if (response.status === 200) {
            dispatch(login(response?.data));
            toast.success("Login successful!");
            router.replace("/afterleadingpage");
          } else {
            toast.error(response?.data?.error);
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Registration failed!");
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);

      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="p-5 mb-5">
      <h2 className="text-3xl font-bold mb-4 text-center">Login Page</h2>
      <p className="text-center mb-6">
        Welcome to SologixEnergy, Your Solar Partner! Please Sign in to
        Continue.
      </p>
      <div className="flex items-center justify-center bg-cover bg-center">
        <div className="max-w-md w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#0C2D86] bg-opacity-90 p-8 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="login-id"
                className="block text-sm font-medium text-white"
              >
                Login ID
              </label>
              <input
                type="text"
                id="login-id"
                {...register("loginId")}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.loginId ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                placeholder="Enter your Email-ID/Mobile Number"
              />
              {errors.loginId && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.loginId.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password")}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                placeholder="Enter Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                disabled={loading}
                className={`bg-[#0C2D86] text-white py-2 rounded-full hover:bg-blue-700 px-12 shadow-2xl ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
            <div className="text-center my-4">
              <p className="text-sm flex flex-col text-white">
                Don't have an account?{" "}
                <a
                  href="/register"
                  className="text-white hover:underline font-bold"
                >
                  Create Account
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
