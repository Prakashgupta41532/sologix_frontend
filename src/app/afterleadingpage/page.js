"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { API } from "@/utils";
import Rectangle1 from "../../../public/Rectangle 1.png";
import Rectangle2 from "../../../public/Rectangle 2.png";
import Rectangle3 from "../../../public/Rectangle 3.png";
import ServiceImage from "../../../public/service-image.png";
import { message, notification } from "antd";
import { ProductCardFirst } from "@/components/product-card/ProductCardFirst";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const AfterLeadingPage = () => {
  const session = useSelector((state) => state.session);
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

  const handleAddToCart = async (item) => {
    const url = `https://sologix-web.onrender.com/v1/cart/Add-to-cart?productId=${item._id}`;
    try {
      setLoading(true);
      const userSession = localStorage.getItem("userSession");
      const parsedSession = userSession ? JSON.parse(userSession) : null;
      const accessToken = parsedSession?.access_token;

      const response = await API.get(url, {
        headers: {
          "authorization": `token ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success("Product added to cart successfully!");
        router.push('/cart');
      } else {
        console.error("Error adding product to cart:", response);
        toast.error(response?.data?.error || "Failed to add product to cart.");
      }
    } catch (error) {
      console.error("API Error:", error);
      toast.error("An error occurred while adding product to cart.");
    } finally {
      setLoading(false);
    }
  };

  const handlePressCard = (item) => {
    router.push(`/product-details/${item._id}`);
  }

  const handelPurchase = async (card) => {
    const perInstallments = Math.ceil(card.totalAmount / 4);
    const response = await API.post("/user/purchase", {
      user: session.userSession.id,
      productData: card,
      instamentOne: {
        amount: perInstallments,
        status: "pending",
      },
      instamentTwo: {
        amount: perInstallments,
        status: "pending",
      },
      instamentThree: {
        amount: perInstallments,
        status: "pending",
      },
      instamentFour: {
        amount: perInstallments,
        status: "pending",
      },
      instamentFive: {
        amount: perInstallments,
        status: "pending",
      },
    });
    if (response.status == 200) {
      notification.success({
        message: "Purchase Successful",
        description: "You have successfully made a purchase",
        type: "success",
      });
    } else {
      message.error(response?.data?.error);
    }
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center p-10 w-full bg-white min-h-screen">
        <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-3xl justify-center">
          <h1 className="text-2xl md:text-5xl font-bold mb-4 flex flex-col text-center">
            <span>
              Invest in <span className="text-[#2F4AA0]">Clean and</span>
            </span>
            <span>
              <span className="text-[#2F4AA0]">Environment</span> Friendly{" "}
              <span className="text-[#2F4AA0]"> Energy</span>
            </span>{" "}
            <span className="text-[#2F4AA0]">Generation</span>
          </h1>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-center font-medium max-w-lg mx-auto">
            “We believe we can make a difference to this world, to this very
            earth on which we live.”
          </p>
          <div className="flex items-center justify-center mx-auto">
            <Button className="px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg border border-[#357CCA] font-bold bg-white">
              Get a Quote
            </Button>
          </div>
        </div>
        <div className="flex gap-2 mt-10 md:mt-0 md:ml-10">
          <div>
            <Image src={Rectangle1} className="w-44" />
          </div>
          <div className="mt-14">
            <Image src={Rectangle2} className="w-44" />
          </div>
          <div>
            <Image src={Rectangle3} className="w-44" />
          </div>
        </div>
      </div>
      <div className="bg-blue-900 text-white p-6 md:p-10 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">
          My Projects - See Progress
        </h2>
        <div className="relative flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-4">
          <div className="absolute inset-x-0 top-1/2 h-0.5 bg-white md:block hidden"></div>
          <div className="relative bg-blue-700 p-4 md:p-5 rounded-lg text-center w-full md:w-40">
            <div className="mb-2">2nd April 2024</div>
            <div className="mb-2">Project Initiation</div>
            <div className="bg-green-600 rounded-lg py-1">Paid</div>
          </div>
          <div className="relative bg-blue-700 p-4 md:p-5 rounded-lg text-center w-full md:w-40">
            <div className="mb-2">15th April 2024</div>
            <div className="mb-2">Installation of Solar Panels Complete</div>
            <div className="bg-red-600 rounded-lg py-1">Due</div>
          </div>
          <div className="relative bg-blue-700 p-4 md:p-5 rounded-lg text-center w-full md:w-40">
            <div className="mb-2">23rd April 2024</div>
            <div className="mb-2">Installation of Power Supply and Setup</div>
            <div className="bg-red-600 rounded-lg py-1">Due</div>
          </div>
          <div className="relative bg-blue-700 p-4 md:p-5 rounded-lg text-center w-full md:w-40">
            <div className="mb-2">30th April 2024</div>
            <div className="mb-2">Installation of Power Supply Complete</div>
            <div className="bg-red-600 rounded-lg py-1">Due</div>
          </div>
        </div>
        <div className="flex justify-center mt-6 md:mt-10">
          <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">
            Make Payment
          </button>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-4 md:p-8">
        {cards.slice(0, showAll ? cards.length : 5).map((card) => (
          <Card key={card.id}   className="flex flex-col items-center p-5 mt-4 text-[#03257F]">
            <h3 className="text-center text-xl font-semibold text-[#00237D] mb-4">
              {card.title}
            </h3>
            <Image
              src={gridsolor}
              alt={card.title}
              className="rounded-lg w-16 text-center"
            />
            <p className="text-center mt-4 mb-5">{card.option}</p>
            <p className="text-center mt-4 mb-5">₹ {card.totalAmount}</p>
            <Button onClick={() => handelPurchase(card)} className="bg-[#00237D] text-white py-[2px] px-12 rounded-full">Purchase</Button>
          </Card>
        ))}
      </div> */}

      {/* <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 p-4 md:p-8 justify-items-center">
          {produtList?.map((card) => (
            <ProductCardFirst 
              key={card.id}
              title={card.system}
              imageSrc={card.imageSrc}
              description={card.product_description}
              productDetails={card.product_details}
              onBuyNow={() => handelPurchase(card)}
              onAddToCart={() => handleAddToCart(card)}
              productId={card.id}
            />
          ))}
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto">
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
                  onBuyNow={() => handelPurchase(card)}
                  onAddToCart={() => handleAddToCart(card)}
                  productId={card._id}
                  handleAddToCart={() => handleAddToCart(card)}
                  handlePressCard={() => handlePressCard(card)}
                />
              ))}
            </div>
          </div>

        )}
      </div>


      <div className="bg-gray-100 text-black p-6 md:p-10 mt-10 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">
          Need Service? - Schedule a Visit today
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-4">
          <div className="flex justify-center mt-6 md:mt-10">
            <Image
              src={ServiceImage}
              alt="Service Image"
              className="rounded-lg"
            />
          </div>
          <div className="relative bg-white p-6 md:p-10 rounded-lg text-center w-full md:w-1/3">
            <div className="mb-4">Select Date</div>
            <input
              type="date"
              className="border border-gray-300 rounded-lg py-2 px-4 w-full"
            />
            <div className="flex justify-center mt-6 md:mt-10">
              <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">
                Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AfterLeadingPage;
