import { Button } from "@nextui-org/react";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const ProductCardFirst = ({
    key,
    title = "On-Grid Solar System",
    imageSrc,
    description = "2KW suitable for small homes (2-3 Rooms)",
    productDetails = {},
    onBuyNow,
    productId,
    
}) => {
    const router = useRouter();

    const handleAddToCart = () => {
        router.push('/product-details');
        toast.success("Added to cart!");
    };
    const labels = {
        Roof_area_required: "Roof Area Required",
        Annual_energy_generation: "Annual Energy Generation",
        Cost_to_consumer: "Cost to Consumer",
        Annual_saving: "Annual Saving",
        System_life: "System Life",
        Payback_period: "Payback Period",
    };

    return (
        <div className="w-[320px] bg-white rounded-xl shadow-lg p-6" key={productId}>
            <h2 className="text-xl font-bold text-[#00237D] text-center mb-4">
                {title}
            </h2>

            <div className="relative w-full flex flex-col items-center mb-4">
                {imageSrc && (
                    <Image
                        src={imageSrc}
                        alt={`solar system ${productId}`}
                        width={80}
                        height={80}
                        className="object-cover mb-2"
                    />
                )}
                <p className="text-center text-sm font-medium">
                    {description}
                </p>
            </div>

            <div className="border rounded-lg overflow-hidden mb-4">
                {Object.entries(labels).map(([key, label], index) => (
                    <div key={key} className={`flex ${index !== Object.keys(labels).length - 1 ? "border-b" : ""}`}>
                        <div className="flex-1 p-2 bg-gray-50 border-r text-sm">{label}</div>
                        <div className="flex-1 p-2 text-sm text-right">{productDetails[key]}</div>
                    </div>
                ))}
            </div>

            <div className="flex gap-2">
                <Button
                    className="flex-1 bg-[#00237D] text-white rounded-full"
                    onPress={onBuyNow}
                >
                    Buy Now!
                </Button>
                <Button
                    className="flex-1 border-[#00237D] text-[#00237D]"
                    variant="bordered"
                    radius="full"
                    onPress={handleAddToCart}
                >
                    Add to Cart
                </Button>
            </div>
        </div>
    );
};
