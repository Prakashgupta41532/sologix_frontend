"use client"
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);

    const specifications = [
        { label: "Roof Area Required", value: "20 Sqm" },
        { label: "Annual Energy Generation", value: "3,700 Units" },
        { label: "Cost to Consumer", value: "54,000 Rs." },
        { label: "Annual Saving", value: "7,000 Rs." },
        { label: "System Life", value: "25 Years" },
        { label: "Payback Period", value: "4 Years" }
    ];

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Image
                        src="/product-one.png"
                        alt="On-Grid Solar System"
                        width={400}
                        height={400}
                        className="object-contain w-full"
                    />
                </div>

                {/* Product Details */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h1 className="text-2xl font-bold text-[#00237D] mb-4">
                        On-Grid Solar System
                    </h1>
                    <p className="text-gray-600 mb-6">
                        2KW suitable for small homes (2-3 Rooms)
                    </p>

                    <div className="border rounded-lg overflow-hidden mb-6">
                        {specifications.map((spec, index) => (
                            <div key={index} className={`flex ${index !== specifications.length - 1 ? 'border-b' : ''}`}>
                                <div className="flex-1 p-3 bg-gray-50 border-r text-sm">
                                    {spec.label}
                                </div>
                                <div className="flex-1 p-3 text-sm text-right">
                                    {spec.value}
                                </div>
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
                    >
                        Proceed to Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;