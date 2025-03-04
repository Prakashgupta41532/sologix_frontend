import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Rectangle1 from "../../../public/Rectangle 1.png";
import Rectangle2 from "../../../public/Rectangle 2.png";
import Rectangle3 from "../../../public/Rectangle 3.png";

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-10 w-full bg-white min-h-screen">
      <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-3xl justify-center">
        <h1 className="text-2xl md:text-5xl font-bold mb-4  flex flex-col text-center">
          <span>
            Invest in <span className="text-[#2F4AA0]">Clean and</span>
          </span>
          <span>
            
            <span className="text-[#2F4AA0]">Environment</span> Friendly <span className="text-[#2F4AA0]"> Energy</span>
          </span>{" "}
          <span className="text-[#2F4AA0]">Generation</span>
        </h1>
        <p className="mb-6 text-lg md:text-xl leading-relaxed text-center font-medium max-w-lg mx-auto">
          “We believe we can make a difference to this world, to this very earth
          on which we live.”
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
  );
};
