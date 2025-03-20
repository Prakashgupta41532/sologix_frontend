"use client"
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import SuccessModal from "@/components/Modals/SuccessModal";
// import FailureModal from "@/components/Modals/FailureModal";
import { API } from "@/utils";
import { toast } from "sonner";
import { useParams } from "next/navigation";

const ProductDetails = () => {
    const { id } = useParams();

    const [quantity, setQuantity] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
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


    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };
    const labels = {
        Roof_area_required: "Roof Area Required",
        Annual_energy_generation: "Annual Energy Generation",
        Cost_to_consumer: "Cost to Consumer",
        Annual_saving: "Annual Saving",
        System_life: "System Life",
        Payback_period: "Payback Period",
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
                    <h1 className="text-2xl font-bold text-[#00237D] mb-4">
                        {getProduct.system}
                    </h1>
                    <p className="text-gray-600 mb-6">
                        {getProduct.product_description}
                    </p>

                    <div className="border rounded-lg overflow-hidden mb-6">
                        {Object.entries(labels).map(([key, label], index) => (
                            <div key={key} className={`flex ${index !== Object.keys(labels).length - 1 ? "border-b" : ""}`}>
                                <div className="flex-1 p-2 bg-gray-50 border-r text-sm">{label}</div>
                                <div className="flex-1 p-2 text-sm text-right">{getProduct.product_details[key]}</div>
                            </div>
                        ))}
                    </div>

                    {/* Quantity Counter */}
                    <div className="flex items-center gap-4 mb-6">
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
                    </div>

                    <Button
                        className="w-full bg-[#00237D] text-white rounded-full"
                        size="lg"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Proceed to Checkout
                    </Button>
                </div>
            </div>
            {/* <FailureModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            /> */}
            <SuccessModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default ProductDetails;