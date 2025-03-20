"use client";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";
import { API } from "@/utils";
import { toast } from "sonner";
import { ProductCardFirst } from "../product-card/ProductCardFirst";

export const ExploreProducts = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState(null);

  const getProductsList = async () => {
    try {
      setLoading(true);
      const response = await API.get("/products/Get-products");

      if (response.status === 200) {
        setProductList(response.data.data);
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
    getProductsList();
  }, []);

  const handleBuyNow = () => {
    router.push("/login");
  };
  return (
    <div className="mt-14">
      <h1 className="font-bold text-[#03257F] text-4xl text-center">Explore our Products</h1>
      <div className="max-w-7xl mx-auto">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-4 md:p-8"> */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 p-4 md:p-8 justify-items-center"> */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="overflow-x-auto whitespace-nowrap p-4 md:p-8">
            <div className="flex space-x-5">
              {productList?.map((card) => (
                <ProductCardFirst
                  key={card._id}
                  title={card.system}
                  imageSrc={card.system == "On-Grid Solar System" ? "/product-one.png" : "/product-three.png"}
                  description={card.product_description}
                  productDetails={card.product_details}
                  onBuyNow={handleBuyNow}
                  onAddToCart={() => handleAddToCart(card)}
                  productId={card._id}
                  handleAddToCart={() => { }}
                  handlePressCard={() => { }}
                  showAddToCart={false}
                />
              ))}
            </div>
          </div>

        )}
      </div>
    </div>
  );
};
