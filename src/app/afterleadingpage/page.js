"use client";
import React, { useState } from "react";
import { Button, Card } from "@nextui-org/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { API } from "@/utils";
import Rectangle1 from "../../../public/Rectangle 1.png";
import Rectangle2 from "../../../public/Rectangle 2.png";
import Rectangle3 from "../../../public/Rectangle 3.png";
import ServiceImage from "../../../public/service-image.png";
import logo4 from "../../../public/Group.png";
import gridsolor from "../../../public/Group (2).png";
// import { toast } from "sonner";
import { message, notification } from "antd";

export const AfterLeadingPage = () => {
  const session = useSelector((state) => state.session);

  const [showAll, setShowAll] = useState(false);

  const cards = [
    {
      id: 1,
      title: "On-Grid Solar System",
      logo: logo4,
      option: "2 KW for homes (2- 3) Rooms ",
      totalAmount: "5000",
    },
    {
      id: 2,
      title: "On-Grid Solar System",
      logo: logo4,
      totalAmount: "6000",
      option: "2 KW for homes (2- 3) Rooms ",
    },
    {
      id: 3,
      title: "On-Grid Solar System",
      logo: logo4,
      totalAmount: "7000",
      option: "2 KW for homes (2- 3) Rooms ",
    },
    {
      id: 4,
      title: "On-Grid Solar System",
      logo: logo4,
      totalAmount: "8000",
      option: "2 KW for homes (2- 3) Rooms ",
    },
    {
      id: 5,
      title: "On-Grid Solar System",
      logo: logo4,
      totalAmount: "15000",
      option: "2 KW for homes (2- 3) Rooms ",
    },
    
  ];

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-4 md:p-8">
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
