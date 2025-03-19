"use client";
import { API } from "@/utils";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const productsData = [
  { id: "1", name: "Product 1", price: "$20", image: "https://via.placeholder.com/100" },
  { id: "2", name: "Product 2", price: "$30", image: "https://via.placeholder.com/100" },
  { id: "3", name: "Product 3", price: "$25", image: "https://via.placeholder.com/100" },
];

const CartPage = () => {
  const [products, setProducts] = useState(productsData);
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
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 200) {
        setCartList(response.data);
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

  console.log('================', cartList);

  
  const removeItem = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  const handleAddToCart = () => {
    router.push('/product-details');
  };


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="max-w-lg mx-auto bg-white p-4 rounded-lg shadow-md" onClick={handleAddToCart}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="flex items-center border-b py-4">
              <img src={product.image} alt={product.name} className="w-16 h-16 rounded-lg mr-4" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.price}</p>
              </div>
              <button
                onClick={() => removeItem(product.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
