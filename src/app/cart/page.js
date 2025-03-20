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
      const accessToken = parsedSession?.access_token; // Extract the access_token
      if (!accessToken) {
        throw new Error("Access token not found");
      }
      const response = await API.get("/cart/Get-user-cart", {
        headers: {
          "authorization": `token ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setCartList(response.data.cart);
      } else {
        console.error("Error fetching products:", response);
        toast.error(response?.data?.error || "Failed to fetch products.");
        return [];
      }
    } catch (error) {
      console.error("API Error:", error);
      toast.error("An error occurred while fetching products.");
      return [];
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCartListing();
  }, []);


  const removeItem = (id) => {
    // setProducts(products.filter((product) => product.id !== id));
  };

  const handleAddToCart = (item) => {
    router.push(`/product-details/${item._id}`);
  }


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="max-w-lg mx-auto bg-white p-4 rounded-lg shadow-md" >
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : cartList?.length > 0 ? (
          cartList.map((item) => (
            <div key={item._id} className="flex items-center border-b py-4 cursor-pointer" onClick={() => handleAddToCart(item)}>
              <Image
                src={item.system == "On-Grid Solar System" ? "/product-one.png" : "/product-three.png"}
                alt={item.system}
                width={16}
                height={16} 
                className="w-16 h-16 rounded-lg mr-9"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.system}</h2>
                <p className="text-gray-600">Cost: ₹{item.product_details.Cost_to_consumer}</p>
                <p className="text-gray-600">Annual Savings: ₹{item.product_details.Annual_saving}</p>
              </div>
              <button
                onClick={() => removeItem(item._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md"
              >
                X
              </button>
            </div>
          ))
        ) : (
          // <p className="text-center text-gray-600">Your cart is empty.</p>
          <div className="flex flex-col items-center justify-center p-8">
            <Image src="/shopping.png" alt="Empty Cart" className=" mb-4" width={100} height={100} />
            <p className="text-2xl md:text-3xl font-bold text-gray-600 text-center">
              Your Cart is Empty
            </p>
          </div>
        )}
        

      </div>
    </div>
  );
};

export default CartPage;