"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import forhome from "../../../public/ForHome.png";
import anillustration from "../../../public/Anillustration.png";
import gridsolor from "../../../public/Group (2).png";
import hybridsolar from "../../../public/Ahybridsolarsystem.png";
import Image from "next/image";
import { Button, Card } from "antd";
import { Select } from "antd";

const ForHome = () => {
  const clients = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    pagination: null,
  };
  return (
    <div className="mb-2">
      <h1 className="text-3xl font-bold text-[#344DA3] text-center mt-4 mb-2">
        For Home
      </h1>
      <Image src={forhome} alt="About Us" className="" />

      <div className="flex justify-center items-center min-h-screen ">
        <div className=" p-8  w-full  flex items-center flex-col md:flex-row">
          <div className="w-full mb-8 md:mb-0">
            <h1 className="text-[#00237D]  text-center mb-8 font-bold uppercase text-3xl">
              On-Grid Solar System
            </h1>
            <p className="leading-8">
              This type of Solar PV system interacts with the power grid. It is
              the simplest and most cost-effective PV system suitable for places
              with a continuous power supply. It works best under a net-metering
              arrangement and saves your energy bill. This system can also push
              excess electricity produced to the electric utility grid if the
              load is low or zero. This system does not provide backup power
              during a grid outage, even if the sun is shining.
            </p>
          </div>
          <div className="w-full  md:pl-8">
            <Image src={anillustration} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-8 md:p-8">
        <Card className="drop-shadow-lg ">
          <div className="flex items-center flex-col mx-auto">
            <h1 className="text-xl font-semibold text-[#00237D] mb-4">
              Hybrid Solar System
            </h1>
            <Image src={gridsolor} className="w-16" />
            <p className="text-center mt-4 mb-5">
              2kW Suitable for Small Home (2-3 Rooms)
            </p>
            <Select
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
                { value: "20 Sqm", label: "Roof Area Required" },
                { value: "3,700 Units", label: "Annual Energy Generation" },
                { value: "54,000 Rs.", label: "Cost to Consumer" },
                { value: "7,000 Rs.", label: "Annual Saving" },
                { value: "	25 Years", label: "System Life" },
                { value: "	4 Years", label: "Payback Period" },
              ]}
            />
            <Button className="mt-5 bg-[#00237D] text-white">Buy Now!</Button>
          </div>
        </Card>
        <Card className="drop-shadow-lg">
          <div className="flex items-center flex-col mx-auto">
            <h1 className="text-xl font-semibold text-[#00237D] mb-4">
              Hybrid Solar System
            </h1>
            <Image src={gridsolor} className="w-16" />
            <p className="text-center mt-4 mb-5">
              3kW Suitable for Medium Home (4-5 Rooms)
            </p>
            <Select
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
                { value: "30 Sqm", label: "Roof Area Required" },
                { value: "4,000 Units", label: "Annual Energy Generation" },
                { value: "81,000 Rs.", label: "Cost to Consumer" },
                { value: "20,000 Rs.", label: "Annual Saving" },
                { value: "25 Years", label: "System Life" },
                { value: "4 Years", label: "Payback Period" },
              ]}
            />
            <Button className="mt-5 bg-[#00237D] text-white">Buy Now!</Button>
          </div>
        </Card>
        <Card className="drop-shadow-lg">
          <div className="flex items-center flex-col mx-auto">
            <h1 className="text-xl font-semibold text-[#00237D] mb-4">
              Hybrid Solar System
            </h1>
            <Image src={gridsolor} className="w-16" />
            <p className="text-center mt-4 mb-5">
              5kW Suitable for Medium Home (5-6 Rooms)
            </p>
            <Select
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
                { value: "50 Sqm", label: "Roof Area Required" },
                { value: "6,500 Units", label: "Annual Energy Generation" },
                { value: "1,42,800 Rs.", label: "Cost to Consumer" },
                { value: "32,500 Rs.", label: "Annual Saving" },
                { value: "25 Years", label: "System Life" },
                { value: "4 Years", label: "Payback Period" },
              ]}
            />
            <Button className="mt-5 bg-[#00237D] text-white">Buy Now!</Button>
          </div>
        </Card>
        <Card className="drop-shadow-lg">
          <div className="flex items-center flex-col mx-auto">
            <h1 className="text-xl font-semibold text-[#00237D] mb-4">
              Hybrid Solar System
            </h1>
            <Image src={gridsolor} className="w-16" />
            <p className="text-center mt-4 mb-5">
              7kW Suitable for Large Home (7-8 Rooms)
            </p>
            <Select
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
                { value: "70 Sqm", label: "Roof Area Required" },
                { value: "	8,000 Units", label: "Annual Energy Generation" },
                { value: "2,10,000 Rs.", label: "Cost to Consumer" },
                { value: "40,000 Rs.", label: "Annual Saving" },
                { value: "25 Years", label: "System Life" },
                { value: "4 Years", label: "Payback Period" },
              ]}
            />
            <Button className="mt-5 bg-[#00237D] text-white">Buy Now!</Button>
          </div>
        </Card>
        <Card className="drop-shadow-lg">
          <div className="flex items-center flex-col mx-auto">
            <h1 className="text-xl font-semibold text-[#00237D] mb-4">
              Hybrid Solar System
            </h1>
            <Image src={gridsolor} className="w-16" />
            <p className="text-center mt-4 mb-5">
              10kW Suitable for Large Home (8-9 Rooms)
            </p>
            <Select
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
                { value: "	100 Sqm", label: "Roof Area Required" },
                { value: "	13,500 Units", label: "Annual Energy Generation" },
                { value: "	3,10,800 Rs.", label: "Cost to Consumer" },
                { value: "	67,500 Rs.", label: "Annual Saving" },
                { value: "25 Years", label: "System Life" },
                { value: "4 Years", label: "Payback Period" },
              ]}
            />
            <Button className="mt-5 bg-[#00237D] text-white">Buy Now!</Button>
          </div>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-5 p-8 ">
        <div className="w-full md:w-1/2 md:pl-8">
          <Image src={hybridsolar} alt="Hybrid Solar System" />
        </div>
        <div className="w-full md:w-1/2 p-8 flex items-center flex-col md:flex-row">
          <div className="w-full mb-8 md:mb-0">
            <h1 className="text-[#00237D] text-center md:text-left mb-8 font-bold uppercase text-3xl">
              Hybrid Solar System
            </h1>
            <p className="leading-8 text-center md:text-left">
              This type of Solar PV system interacts with the power grid. It is
              the simplest and most cost-effective PV system suitable for places
              with a continuous power supply. It works best under a net-metering
              arrangement and saves your energy bill. This system can also push
              excess electricity produced to the electric utility grid if the
              load is low or zero. This system does not provide backup power
              during a grid outage, even if the sun is shining.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-8 md:p-8">
        <Card className="drop-shadow-lg ">
          <div className="flex items-center flex-col mx-auto">
            <h1 className="text-xl font-semibold text-[#00237D] mb-4">
              Hybrid Solar System
            </h1>
            <Image src={gridsolor} className="w-16" />
            <p className="text-center mt-4 mb-5">
              2kW Suitable for Small Home (2-3 Rooms)
            </p>
            <Select
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
                { value: "20 Sqm", label: "Roof Area Required" },
                { value: "3,700 Units", label: "Annual Energy Generation" },
                { value: "54,000 Rs.", label: "Cost to Consumer" },
                { value: "7,000 Rs.", label: "Annual Saving" },
                { value: "	25 Years", label: "System Life" },
                { value: "	4 Years", label: "Payback Period" },
              ]}
            />
            <Button className="mt-5 bg-[#00237D] text-white">Buy Now!</Button>
          </div>
        </Card>
        <Card className="drop-shadow-lg">
          <div className="flex items-center flex-col mx-auto">
            <h1 className="text-xl font-semibold text-[#00237D] mb-4">
              Hybrid Solar System
            </h1>
            <Image src={gridsolor} className="w-16" />
            <p className="text-center mt-4 mb-5">
              3kW Suitable for Medium Home (4-5 Rooms)
            </p>
            <Select
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
                { value: "30 Sqm", label: "Roof Area Required" },
                { value: "4,000 Units", label: "Annual Energy Generation" },
                { value: "81,000 Rs.", label: "Cost to Consumer" },
                { value: "20,000 Rs.", label: "Annual Saving" },
                { value: "25 Years", label: "System Life" },
                { value: "4 Years", label: "Payback Period" },
              ]}
            />
            <Button className="mt-5 bg-[#00237D] text-white">Buy Now!</Button>
          </div>
        </Card>
        <Card className="drop-shadow-lg">
          <div className="flex items-center flex-col mx-auto">
            <h1 className="text-xl font-semibold text-[#00237D] mb-4">
              Hybrid Solar System
            </h1>
            <Image src={gridsolor} className="w-16" />
            <p className="text-center mt-4 mb-5">
              5kW Suitable for Medium Home (5-6 Rooms)
            </p>
            <Select
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
                { value: "50 Sqm", label: "Roof Area Required" },
                { value: "6,500 Units", label: "Annual Energy Generation" },
                { value: "1,42,800 Rs.", label: "Cost to Consumer" },
                { value: "32,500 Rs.", label: "Annual Saving" },
                { value: "25 Years", label: "System Life" },
                { value: "4 Years", label: "Payback Period" },
              ]}
            />
            <Button className="mt-5 bg-[#00237D] text-white">Buy Now!</Button>
          </div>
        </Card>
        <Card className="drop-shadow-lg">
          <div className="flex items-center flex-col mx-auto">
            <h1 className="text-xl font-semibold text-[#00237D] mb-4">
              Hybrid Solar System
            </h1>
            <Image src={gridsolor} className="w-16" />
            <p className="text-center mt-4 mb-5">
              7kW Suitable for Large Home (7-8 Rooms)
            </p>
            <Select
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
                { value: "70 Sqm", label: "Roof Area Required" },
                { value: "	8,000 Units", label: "Annual Energy Generation" },
                { value: "2,10,000 Rs.", label: "Cost to Consumer" },
                { value: "40,000 Rs.", label: "Annual Saving" },
                { value: "25 Years", label: "System Life" },
                { value: "4 Years", label: "Payback Period" },
              ]}
            />
            <Button className="mt-5 bg-[#00237D] text-white">Buy Now!</Button>
          </div>
        </Card>
        <Card className="drop-shadow-lg">
          <div className="flex items-center flex-col mx-auto">
            <h1 className="text-xl font-semibold text-[#00237D] mb-4">
              Hybrid Solar System
            </h1>
            <Image src={gridsolor} className="w-16" />
            <p className="text-center mt-4 mb-5">
              10kW Suitable for Large Home (8-9 Rooms)
            </p>
            <Select
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
                { value: "	100 Sqm", label: "Roof Area Required" },
                { value: "	13,500 Units", label: "Annual Energy Generation" },
                { value: "	3,10,800 Rs.", label: "Cost to Consumer" },
                { value: "	67,500 Rs.", label: "Annual Saving" },
                { value: "25 Years", label: "System Life" },
                { value: "4 Years", label: "Payback Period" },
              ]}
            />
            <Button className="mt-5 bg-[#00237D] text-white">Buy Now!</Button>
          </div>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-5 p-8">
        <div className="w-full md:w-1/2 md:pl-8">
          <Image src={hybridsolar} alt="Hybrid Solar System" />
        </div>
        <div className="w-full md:w-1/2 p-8 flex items-center flex-col md:flex-row">
          <div className="w-full mb-8 md:mb-0">
            <h1 className="text-[#00237D] text-center md:text-left mb-8 font-bold uppercase text-3xl">
              Hybrid Solar System
            </h1>
            <p className="leading-8 text-center md:text-left">
              This type of Solar PV system interacts with the power grid. It is
              the simplest and most cost-effective PV system suitable for places
              with a continuous power supply. It works best under a net-metering
              arrangement and saves your energy bill. This system can also push
              excess electricity produced to the electric utility grid if the
              load is low or zero. This system does not provide backup power
              during a grid outage, even if the sun is shining.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-8 md:p-8">
        <Card className="drop-shadow-lg ">
          <div className="flex items-center flex-col mx-auto">
            <h1 className="text-xl font-semibold text-[#00237D] mb-4">
              Hybrid Solar System
            </h1>
            <Image src={gridsolor} className="w-16" />
            <p className="text-center mt-4 mb-5">
              2kW Suitable for Small Home (2-3 Rooms)
            </p>
            <Select
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
                { value: "20 Sqm", label: "Roof Area Required" },
                { value: "3,700 Units", label: "Annual Energy Generation" },
                { value: "54,000 Rs.", label: "Cost to Consumer" },
                { value: "7,000 Rs.", label: "Annual Saving" },
                { value: "	25 Years", label: "System Life" },
                { value: "	4 Years", label: "Payback Period" },
              ]}
            />
            <Button className="mt-5 bg-[#00237D] text-white">Buy Now!</Button>
          </div>
        </Card>
        <Card className="drop-shadow-lg">
          <div className="flex items-center flex-col mx-auto">
            <h1 className="text-xl font-semibold text-[#00237D] mb-4">
              Hybrid Solar System
            </h1>
            <Image src={gridsolor} className="w-16" />
            <p className="text-center mt-4 mb-5">
              3kW Suitable for Medium Home (4-5 Rooms)
            </p>
            <Select
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
                { value: "30 Sqm", label: "Roof Area Required" },
                { value: "4,000 Units", label: "Annual Energy Generation" },
                { value: "81,000 Rs.", label: "Cost to Consumer" },
                { value: "20,000 Rs.", label: "Annual Saving" },
                { value: "25 Years", label: "System Life" },
                { value: "4 Years", label: "Payback Period" },
              ]}
            />
            <Button className="mt-5 bg-[#00237D] text-white">Buy Now!</Button>
          </div>
        </Card>
        <Card className="drop-shadow-lg">
          <div className="flex items-center flex-col mx-auto">
            <h1 className="text-xl font-semibold text-[#00237D] mb-4">
              Hybrid Solar System
            </h1>
            <Image src={gridsolor} className="w-16" />
            <p className="text-center mt-4 mb-5">
              5kW Suitable for Medium Home (5-6 Rooms)
            </p>
            <Select
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
                { value: "50 Sqm", label: "Roof Area Required" },
                { value: "6,500 Units", label: "Annual Energy Generation" },
                { value: "1,42,800 Rs.", label: "Cost to Consumer" },
                { value: "32,500 Rs.", label: "Annual Saving" },
                { value: "25 Years", label: "System Life" },
                { value: "4 Years", label: "Payback Period" },
              ]}
            />
            <Button className="mt-5 bg-[#00237D] text-white">Buy Now!</Button>
          </div>
        </Card>
        <Card className="drop-shadow-lg">
          <div className="flex items-center flex-col mx-auto">
            <h1 className="text-xl font-semibold text-[#00237D] mb-4">
              Hybrid Solar System
            </h1>
            <Image src={gridsolor} className="w-16" />
            <p className="text-center mt-4 mb-5">
              7kW Suitable for Large Home (7-8 Rooms)
            </p>
            <Select
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
                { value: "70 Sqm", label: "Roof Area Required" },
                { value: "	8,000 Units", label: "Annual Energy Generation" },
                { value: "2,10,000 Rs.", label: "Cost to Consumer" },
                { value: "40,000 Rs.", label: "Annual Saving" },
                { value: "25 Years", label: "System Life" },
                { value: "4 Years", label: "Payback Period" },
              ]}
            />
            <Button className="mt-5 bg-[#00237D] text-white">Buy Now!</Button>
          </div>
        </Card>
        <Card className="drop-shadow-lg">
          <div className="flex items-center flex-col mx-auto">
            <h1 className="text-xl font-semibold text-[#00237D] mb-4">
              Hybrid Solar System
            </h1>
            <Image src={gridsolor} className="w-16" />
            <p className="text-center mt-4 mb-5">
              10kW Suitable for Large Home (8-9 Rooms)
            </p>
            <Select
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
                { value: "	100 Sqm", label: "Roof Area Required" },
                { value: "	13,500 Units", label: "Annual Energy Generation" },
                { value: "	3,10,800 Rs.", label: "Cost to Consumer" },
                { value: "	67,500 Rs.", label: "Annual Saving" },
                { value: "25 Years", label: "System Life" },
                { value: "4 Years", label: "Payback Period" },
              ]}
            />
            <Button className="mt-5 bg-[#00237D] text-white">Buy Now!</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ForHome;
