"use client"
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import SuccessModal from "@/components/Modals/SuccessModal";
import { API } from "@/utils";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { message } from "antd";
import FailureModal from "@/components/Modals/FailureModal";

const ProductDetails = () => {
    const { id } = useParams();
    const session = useSelector((state) => state.session);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

    const [loading, setLoading] = useState(false);
    const [getProduct, setGetProduct] = useState(null);

    const getSingleProduct = async () => {
        if (!id) return;
        try {
            setLoading(true);
            const response = await API.get(`/products/Get-single-product?id=${id}`);

            if (response.status === 200) {
                setGetProduct(response.data.data);
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
        if (id) getSingleProduct();
    }, [id]);


    const labels = {
        Roof_area_required: "Roof Area Required",
        Annual_energy_generation: "Annual Energy Generation",
        // Cost_to_consumer: "Cost to Consumer",
        Annual_saving: "Annual Saving",
        System_life: "System Life",
        Payback_period: "Payback Period",
    };
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
        setIsModalOpen(true);
        } else {
            setIsErrorModalOpen(true);
          message.error(response?.data?.error);
        }
      };
    if (loading)
        return (
          <div className="flex items-center justify-center h-40">
            <p className="text-lg font-medium text-gray-500 animate-pulse">Loading...</p>
          </div>
        );
      
      if (!getProduct)
        return (
          <div className="flex items-center justify-center h-40">
            <p className="text-lg font-medium text-red-500">No product found.</p>
          </div>
        );
    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Image
                        src={getProduct.system == "On-Grid Solar System" ? "/product-one.png" : "/product-three.png"}
                        alt="On-Grid Solar System"
                        width={400}
                        height={400}
                        className="object-contain w-full"
                    />
                </div>

                {/* Product Details */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h1 className="text-3xl font-bold text-[#00237D] mb-4">
                        {getProduct.system}
                    </h1>
                    <p className="text-gray-600 mb-6 text-md">
                        {getProduct.product_description}
                    </p>

                    <div className="border rounded-lg overflow-hidden mb-6">
                        {Object.entries(labels).map(([key, label], index) => (
                            <div key={key} className={`flex ${index !== Object.keys(labels).length - 1 ? "border-b" : ""}`}>
                                <div className="flex-1 p-2 bg-gray-50 border-r text-md">{label}</div>
                                <div className="flex-1 p-2 text-md text-right font-bold">{getProduct.product_details[key]}</div>
                            </div>
                        ))}
                    </div>

                    {/* Quantity Counter */}
                    {/* <div className="flex items-center gap-4 mb-6">
                        <span className="text-gray-700">Quantity:</span>
                        <div className="flex items-center border rounded-lg">
                            <button
                                onClick={handleDecrement}
                                className="px-4 py-2 text-[#00237D] hover:bg-gray-100"
                            >
                                -
                            </button>
                            <span className="px-4 py-2 border-x">
                                {quantity}
                            </span>
                            <button
                                onClick={handleIncrement}
                                className="px-4 py-2 text-[#00237D] hover:bg-gray-100"
                            >
                                +
                            </button>
                        </div>
                    </div> */}
                    <p className="text-2xl font-semibold mt-4 text-right">Total Cost: <span className="text-green-600"> ₹{getProduct.product_details.Cost_to_consumer}</span></p>

                    <Button
                        className="w-full bg-[#00237D] text-white rounded-full mt-5"
                        size="lg"
                        onClick={() => handelPurchase(getProduct)}
                    >
                        Proceed to Checkout (₹{getProduct.product_details.Cost_to_consumer})
                    </Button>
                </div>
            </div>
            <FailureModal
                isOpen={isErrorModalOpen}
                onClose={() => setIsErrorModalOpen(false)}
            />
            <SuccessModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default ProductDetails;