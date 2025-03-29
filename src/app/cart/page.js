"use client";
import { API } from "@/utils";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import Image from "next/image";

const CartPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [cartList, setCartList] = useState(null);

  const getCartListing = async () => {
    try {
      setLoading(true);
      const userSession = localStorage.getItem("userSession");
      const parsedSession = userSession ? JSON.parse(userSession) : null;
      const accessToken = parsedSession?.access_token;
      if (!accessToken) throw new Error("Access token not found");

      const response = await API.get("/cart/Get-user-cart", {
        headers: {
          authorization: `token ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setCartList(response.data.cart);
      } else {
        toast.error(response?.data?.error || "Failed to fetch products.");
      }
    } catch (error) {
      toast.error("An error occurred while fetching products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCartListing();
  }, []);

  const removeItem = async (productId) => {
    try {
      setLoading(true);
      const userSession = localStorage.getItem("userSession");
      const parsedSession = userSession ? JSON.parse(userSession) : null;
      const accessToken = parsedSession?.access_token;
      if (!accessToken) throw new Error("Access token not found");

      const response = await API.delete(
        `/cart/Remove-from-cart?productId=${productId}`,
        {
          headers: {
            authorization: `token ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Item removed from cart successfully.");
        getCartListing();
        if (cartList?.length === 0) {
          toast.info("Your cart is empty.");
          router.replace("/afterleadingpage");
        }
      } else {
        toast.error(response?.data?.error || "Failed to remove product.");
      }
    } catch (error) {
      toast.error("An error occurred while removing the product.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (item) => {
    router.push(`/product-details/${item._id}`);
  };

  const totalCost = cartList?.reduce(
    (acc, item) => acc + item.product_details.Cost_to_consumer,
    0
  ) || 0;

  const handleBooking = () => {
    toast.success("Booking successful with an amount of ₹2000!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">
        Your Cart
      </h1>
      <div className="max-w-2xl mx-auto bg-white p-4 md:p-6 rounded-lg shadow-lg">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : cartList?.length > 0 ? (
          cartList.map((item) => (
            <div
              key={item._id}
              className="relative flex flex-col md:flex-row border-b py-4 md:py-6 px-3 md:px-4 rounded-lg hover:bg-gray-100"
              onClick={() => handleAddToCart(item)}
            >
              {/* Delete Button in Top-Right */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeItem(item._id);
                }}
                className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 text-sm md:text-base rounded-md hover:bg-red-700"
              >
                X
              </button>

              {/* Product Image */}
              <Image
                src={
                  item.system == "On-Grid Solar System"
                    ? "/product-one.png"
                    : "/product-three.png"
                }
                alt={item.system}
                width={64}
                height={64}
                className="w-16 h-16 md:w-20 md:h-20 rounded-lg mb-2 md:mb-0 md:mr-6"
              />

              <div className="flex-1 text-left">
                <h2 className="text-base md:text-lg font-semibold">
                  {item.system}
                </h2>
                <p className="text-sm text-gray-500">
                  {item.product_description}
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  Roof Area: {item.product_details.Roof_area_required} sqm
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  Annual Generation:{" "}
                  {item.product_details.Annual_energy_generation} kWh
                </p>
                <p className="text-green-600 font-bold text-base md:text-lg">
                  Cost: ₹{item.product_details.Cost_to_consumer}
                </p>
                <p className="text-blue-600 text-sm md:text-base">
                  Annual Savings: ₹{item.product_details.Annual_saving}
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  System Life: {item.product_details.System_life} years
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  Payback Period: {item.product_details.Payback_period} years
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center p-6">
            <Image
              src="/shopping.png"
              alt="Empty Cart"
              width={100}
              height={100}
              className="mb-4"
            />
            <p className="text-xl md:text-2xl font-bold text-gray-600 text-center">
              Your Cart is Empty
            </p>
          </div>
        )}
        {cartList?.length > 0 && (
          <p className="text-lg md:text-2xl font-semibold mt-4 text-right">
          Total Cost:{" "}
          <span className="text-green-600">₹{totalCost}</span>
        </p>
        )}

        {cartList?.length > 0 && (
          <button
            onClick={handleBooking}
            className="w-full bg-[#00237D] text-white font-bold py-2 px-4 rounded-lg mt-4 hover:bg-[#001F6B] transition"
          >
            Book Now (₹2000)
          </button>
        )}
      </div>
    </div>
  );
};

export default CartPage;
