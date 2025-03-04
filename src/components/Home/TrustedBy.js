import React from "react";
import img from "../../../public/Group.png";
import img2 from "../../../public/unnamed (3) 1.png";
import img3 from "../../../public/Ayana-Renewable-energy 1.png";
import img4 from "../../../public/unnamed (1) 1.png";
import img5 from "../../../public/Germi-Logo 1.png";
import img6 from "../../../public/g3344.png";
import img7 from "../../../public/logo 1.png";
import img8 from "../../../public/sakra 1.png";
import img9 from "../../../public/Group (1).png";
import Image from "next/image";
import { Card } from "@nextui-org/react";

export const TrustedBy = () => {
  return (
    <div className="mb-8 mt-8 p-4">
      <h1 className="text-3xl mb-5 font-bold text-center text-[#00237D]">Trusted By</h1>

      <Card className="w-full p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-6  gap-4">
          <div className="flex items-center justify-center">
            <Image src={img} alt="Trusted by company 1" className="w-full max-w-[126px]" />
          </div>
          <div className="flex items-center justify-center">
            <Image src={img2} alt="Trusted by company 2" className="w-full max-w-[126px]" />
          </div>
          <div className="flex items-center justify-center">
            <Image src={img3} alt="Trusted by company 3" className="w-full max-w-[126px]" />
          </div>
          <div className="flex items-center justify-center">
            <Image src={img6} alt="Trusted by company 6" className="w-full max-w-[125px]" />
          </div>
          <div className="flex items-center justify-center">
            <Image src={img7} alt="Trusted by company 7" className="w-full max-w-[126px]" />
          </div>
          <div className="flex items-center justify-center">
            <Image src={img8} alt="Trusted by company 8" className="w-full max-w-[126px]" />
          </div>
        
        </div>
      </Card>
    </div>
  );
};
