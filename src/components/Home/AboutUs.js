import React from "react";
import Image from "next/image";
import image from "../../../public/about-lending-page.png";

export const AboutUs = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center text-[#00237D]">
        About Us
      </h2>
      <div className="flex flex-col md:flex-row items-center w-full mx-auto">
        <Image
          src={image}
          alt="Engineer with Solar Panels"
          className="w-[80%] md:w-[40%]"
        />
        <div className="p-6 md:p-10 w-full mx-auto flex flex-col items-center justify-center">
          <p className="text-base md:text-lg font-semibold mb-6 w-[80%] text-center">
            We are a Renewable Energy Company founded by a team of Engineering
            Graduates from IIT, NIT, and DTU with In-depth industry knowledge
            and skills.
          </p>
          <span className="italic text-gray-600 mb-6 w-[85%] text-center text-base md:text-lg">
            “With the increasing GHG emission and Global Warming threat, we
            realized that there is a need to counter the adverse impact of
            climate change and limit the Earth's rising temperature.”
          </span>
          <div className="flex space-x-4">
            <button className="px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg border border-[#357CCA] font-bold">
              Know More!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
