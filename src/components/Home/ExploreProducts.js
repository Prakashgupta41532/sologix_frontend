"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gridsolor from "../../../public/Group (2).png";
import Image from "next/image";
import { Button, Card } from "antd";
import { Select } from "antd";
import { Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const ExploreProducts = () => {
  const router = useRouter();

  const handleBuyNow = () => {
    router.push("/login");
  };
  return (
    <div className="mt-14">
      <h1 className="font-bold text-[#03257F] text-4xl text-center">Explore our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-4 md:p-8">
        <Card className="drop-shadow-lg">
          <div className="flex items-center flex-col mx-auto">
            <h1 className="text-xl font-semibold text-[#00237D] mb-4">
              Hybrid Solar System
            </h1>
            <Image src={gridsolor} className="w-16" />
            <p className="text-center mt-4 mb-5">
              2KW suitable for small homes (2-3 Rooms)
            </p>
            {/* <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              { value: "1", label: "Not Identified" },
              { value: "2", label: "Closed" },
              { value: "3", label: "Communicated" },
              { value: "4", label: "Identified" },
              { value: "5", label: "Resolved" },
              { value: "6", label: "Cancelled" },
            ]}
          /> */}

            <Button
              className="mt-5 bg-[#00237D] text-white"
              onClick={handleBuyNow}
            >
              Buy Now!
            </Button>
          </div>
        </Card>
        <Card className="drop-shadow-lg">
          <div className="flex items-center flex-col mx-auto">
            <h1 className="text-xl font-semibold text-[#00237D] mb-4">
              Hybrid Solar System
            </h1>
            <Image src={gridsolor} className="w-16" />
            <p className="text-center mt-4 mb-5">
              2KW suitable for small homes (2-3 Rooms)
            </p>
            {/* <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              { value: "1", label: "Not Identified" },
              { value: "2", label: "Closed" },
              { value: "3", label: "Communicated" },
              { value: "4", label: "Identified" },
              { value: "5", label: "Resolved" },
              { value: "6", label: "Cancelled" },
            ]}
          /> */}
            <Button
              className="mt-5 bg-[#00237D] text-white"
              onClick={handleBuyNow}
            >
              Buy Now!
            </Button>
          </div>
        </Card>
        <Card className="drop-shadow-lg">
          <div className="flex items-center flex-col mx-auto">
            <h1 className="text-xl font-semibold text-[#00237D] mb-4">
              Hybrid Solar System
            </h1>
            <Image src={gridsolor} className="w-16" />
            <p className="text-center mt-4 mb-5">
              2KW suitable for small homes (2-3 Rooms)
            </p>
            {/* <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              { value: "1", label: "Not Identified" },
              { value: "2", label: "Closed" },
              { value: "3", label: "Communicated" },
              { value: "4", label: "Identified" },
              { value: "5", label: "Resolved" },
              { value: "6", label: "Cancelled" },
            ]}
          /> */}
            <Button
              className="mt-5 bg-[#00237D] text-white"
              onClick={handleBuyNow}
            >
              Buy Now!
            </Button>
          </div>
        </Card>
        <Card className="drop-shadow-lg">
          <div className="flex items-center flex-col mx-auto">
            <h1 className="text-xl font-semibold text-[#00237D] mb-4">
              Hybrid Solar System
            </h1>
            <Image src={gridsolor} className="w-16" />
            <p className="text-center mt-4 mb-5">
              2KW suitable for small homes (2-3 Rooms)
            </p>
            {/* <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              { value: "1", label: "Not Identified" },
              { value: "2", label: "Closed" },
              { value: "3", label: "Communicated" },
              { value: "4", label: "Identified" },
              { value: "5", label: "Resolved" },
              { value: "6", label: "Cancelled" },
            ]}
          /> */}
            <Button
              className="mt-5 bg-[#00237D] text-white"
              onClick={handleBuyNow}
            >
              Buy Now!
            </Button>
          </div>
        </Card>
        <Card className="drop-shadow-lg">
          <div className="flex items-center flex-col mx-auto">
            <h1 className="text-xl font-semibold text-[#00237D] mb-4">
              Hybrid Solar System
            </h1>
            <Image src={gridsolor} className="w-16" />
            <p className="text-center mt-4 mb-5">
              2KW suitable for small homes (2-3 Rooms)
            </p>
            {/* <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              { value: "1", label: "Not Identified" },
              { value: "2", label: "Closed" },
              { value: "3", label: "Communicated" },
              { value: "4", label: "Identified" },
              { value: "5", label: "Resolved" },
              { value: "6", label: "Cancelled" },
            ]}
          /> */}
            <Button
              className="mt-5 bg-[#00237D] text-white"
              onClick={handleBuyNow}
            >
              Buy Now!
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
