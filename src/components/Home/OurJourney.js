import React from "react";
import Image from "next/image";
import solarImg from "../../../public/Vector (3).png";
import greenEnergyImg from "../../../public/Vector (4).png";
import co2Img from "../../../public/Group (4).png";
import treesPlantedImg from "../../../public/Group (5).png";

export const OurJourney = () => {
  const projectData = [
    { image: solarImg, title: "Projects Completed", count: "50+" },
    { image: greenEnergyImg, title: "Green Energy Initiatives", count: "30+" },
    { image: co2Img, title: "CO2 Reduction", count: "20%" },
    { image: treesPlantedImg, title: "Trees Planted", count: "500+" },
  ];

  return (
    <div className="mt-14 mb-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-[#00237D]">
        Our Journey
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {projectData.map((project, index) => (
          <div key={index} className="flex flex-col items-center p-4">
            <Image
              src={project.image}
              alt={project.title}
              width={100}
              height={100}
            />
            <p className="text-[#00237D] font-semibold text-base mt-2">
              {project.title}
            </p>
            <h1 className="text-3xl font-bold text-[#00237D] mt-1">
              {project.count}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};
