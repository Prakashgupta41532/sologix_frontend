"use client";
import React from "react";
import businessimage from "../../../public/bimage.png";
import Image from "next/image";
import righticon from "../../../public/rlrr.webp";
import industrial from "../../../public/industrial.png";
import Commercial from "../../../public/commercial.png";
import Institutional from "../../../public/institutional.png";
import solorengineer from "../../../public/solorengineer.jpg";
import solorengineertwo from "../../../public/solorengineertwo.jpg";
import solorengineerthree from "../../../public/solorengineerthree.jpg";
import capexmodel from "../../../public/capexmodel.png";
import commissioning from "../../../public/concept-to-commissioning.jpg";
import commissioningmobile from "../../../public/concept-to-commissioning-mobile.jpg";
import engineerdesign from "../../../public/engineer-design.jpg";
import { Button, Card, Checkbox, Form, Input } from "antd";
import quete from "../../../public/quete.png";
import idealimage from "../../../public/idealimage.png";
import Manufacturing from "../../../public/ManufacturingUnits.png";
import production from "../../../public/Productionicon.png";
import CollegesUniversity from "../../../public/CollegesUniversity (1).png";
import HealthHospital from "../../../public/CollegesUniversity (2).png";
import BusinessParks from "../../../public/CollegesUniversity (3).png";
import officeComplex from "../../../public/CollegesUniversity (4).png";
import mallsHotels from "../../../public/CollegesUniversity (5).png";
import school from "../.././../public/CollegesUniversity (6).png";
import coldStored from "../../../public/ColdStorage.png";
import capex from "../../../public/Capex.png";
import renewable from "../../../public/renewable-farms.png";
import KerlaBhavan from "../../../public/CMSKerlaBhavan.png";
import DayanandPublicSchool from "../../../public/DayanandPublicSchool.png";
import study from "../../../public/study.png";

const SolorBusiness = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const caseStudies = [
    {
      id: 1,
      title: "Solar Mini Grid Chatra",
      image: study, 
    },
    {
      id: 2,
      title: "Solar Mini Grid Bihar",
      image: study,
    },
    {
      id: 3,
      title: "Solar Mini Grid Ranchi",
      image: study, 
    },
    {
      id: 4,
      title: "Solar Mini Grid Kolkata",
      image: study, 
    },
    {
      id: 4,
      title: "Solar Mini Grid Kolkata",
      image: study, 
    },
    {
      id: 4,
      title: "Solar Mini Grid Kolkata",
      image: study, 
    },
    {
      id: 4,
      title: "Solar Mini Grid Kolkata",
      image: study, 
    },
    {
      id: 4,
      title: "Solar Mini Grid Kolkata",
      image: study, 
    },
  ];
  return (
    <div>
      <div className="mt-8">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-center text-[#344DA3] mb-5">
          For Business
        </h1>
        <div className="flex justify-center">
          <Image src={businessimage} className="w-full h-auto" />
        </div>
      </div>

      <div className="p-8 flex flex-col-reverse lg:flex-row justify-between w-full mt-8">
        <div className="w-full lg:w-1/2">
          <Form
            name="dependencies"
            autoComplete="off"
            style={{
              maxWidth: 600,
            }}
            layout="vertical"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Form.Item label="Name" name="Name">
                <Input
                  className="w-full p-1 mb-2 box-border border-0 border-b-2 border-[#8D8D8D]"
                  placeholder="Enter Your Name"
                />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input
                  className="w-full p-1 mb-2 box-border border-0 border-b-2 border-[#8D8D8D]"
                  placeholder="Enter Your Password"
                />
              </Form.Item>
              <Form.Item label="Email ID" name="email">
                <Input
                  className="w-full p-1 mb-2 box-border border-0 border-b-2 border-[#8D8D8D]"
                  placeholder="Enter Your Email ID"
                />
              </Form.Item>
              <Form.Item label="City/Town" name="city">
                <Input
                  className="w-full p-1 mb-2 box-border border-0 border-b-2 border-[#8D8D8D]"
                  placeholder="Enter Your City/Town"
                />
              </Form.Item>
              <Form.Item label="Pin-Code" name="number">
                <Input
                  className="w-full p-1 mb-2 box-border border-0 border-b-2 border-[#8D8D8D]"
                  placeholder="Enter Your Pin-Code"
                />
              </Form.Item>
            </div>
            <div>
              <h1 className="font-bold text-xl mb-5">Select Query?</h1>
              <div className="flex flex-wrap items-center justify-between">
                <Checkbox onChange={onChange}>Home</Checkbox>
                <Checkbox onChange={onChange}>Commercial</Checkbox>
                <Checkbox onChange={onChange}>Business</Checkbox>
                <Checkbox onChange={onChange}>Institution</Checkbox>
              </div>
            </div>
            <Form.Item name="message" label="Message" className="mt-8">
              <Input.TextArea
                className="w-full p-1 mb-2 box-border border-0 border-b-2 border-[#8D8D8D]"
                placeholder="Write Your Message"
              />
            </Form.Item>
          </Form>
          <div className="flex justify-end items-end mt-4">
            <Button type="primary">Send Message</Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center mt-8 lg:mt-0">
          <h1 className="font-bold text-2xl text-[#344DA3]">GET A QUOTE</h1>
          <Image src={quete} className="w-full h-auto" />
          <h1 className="font-bold text-2xl text-[#344DA3]">
            Submit a Solar Project Enquiry
          </h1>
          <p className="text-[#344DA3] font-semibold">
            We will contact you for further discussion
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full p-8">
        <div className="w-full md:w-1/2 p-4">
          <Image src={idealimage} alt="leading" />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="mb-8 font-bold text-xl md:text-2xl lg:text-3xl">
            Your Ideal Solar Partner!
          </h1>
          <ul className="list-disc leading-7 mb-3">
            <li>
              We install solar PV systems on the roofs of Industries,
              Schools/Colleges/Universities, Hospitals/IT/ Business Parks/Mall
              /Shopping Complexes and Cold Storage.
            </li>
          </ul>
          <ul className="list-disc leading-7 mb-3">
            <li>
              We design for You! - By partnering with us, you'll get the
              smartest solar energy solution, customized to your specific needs.
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-8 lg:p-12 gap-4 md:gap-8 drop-shadow-2xl">
        <Card>
          <h1 className="underline font-bold text-center text-xl md:text-2xl text-[#344DA3]">
            Industrial
          </h1>
          <div className="flex items-center gap-5 md:gap-14 mb-4">
            <Image src={Manufacturing} className="w-24 h-16" />
            <p>Manufacturing Units</p>
          </div>
          <div className="flex items-center gap-5 md:gap-14 mb-4">
            <Image src={production} className="w-24 h-16" />
            <p>Production Units</p>
          </div>
          <div className="flex items-center gap-5 md:gap-14">
            <Image src={coldStored} className="w-24 h-16" />
            <p>Production Units</p>
          </div>
        </Card>
        <Card>
          <h1 className="underline font-bold text-center text-xl md:text-2xl text-[#344DA3]">
            Commercial
          </h1>
          <div className="flex items-center gap-5 md:gap-14">
            <Image src={BusinessParks} className="w-24 h-16" />
            <p>IT/Business Parks</p>
          </div>
          <div className="flex items-center gap-5 md:gap-14">
            <Image src={officeComplex} className="w-24 h-16" />
            <p>Office Complexes</p>
          </div>
          <div className="flex items-center gap-5 md:gap-14">
            <Image src={mallsHotels} className="w-24 h-16" />
            <p>Malls/Hotels</p>
          </div>
        </Card>
        <Card>
          <h1 className="underline font-bold text-center text-xl md:text-2xl text-[#344DA3]">
            Institutional
          </h1>
          <div className="flex items-center gap-5 md:gap-14">
            <Image src={school} className="w-24 h-16" />
            <p>Schools</p>
          </div>
          <div className="flex items-center gap-5 md:gap-14">
            <Image src={CollegesUniversity} className="w-24 h-16" />
            <p>Colleges / University</p>
          </div>
          <div className="flex items-center gap-5 md:gap-14">
            <Image src={HealthHospital} className="w-24 h-16" />
            <p>Health Centers/ Hospital</p>
          </div>
        </Card>
      </div>

      <div className="px-8 flex flex-col">
        <h1 className="text-xl md:text-2xl lg:text-3xl">Capex Model</h1>
        <div className="flex flex-col-reverse mt-12 lg:flex-row  justify-between">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <p className="mb-8">
              In this model, the entire investment comes from the consumer.
              Consumers hire a solar EPC company who provide turnkey
              installation of entire solar power system and hand over assets to
              consumers.
            </p>
            <p className="mb-8">
              CAPEX: More Investment and More Saving Upfront capital investment
              made by consumer. Sologix provides EPC service to install the
              Solar plant.
            </p>
            <p>
              Consumer generates savings on monthly electricity bill under
              net-metering arrangement. Consumer can claim accelerated
              depreciation (AD) on the investment made in the Solar plant.
              Payback period can vary between 3-5 years depending on utility
              tariff and AD benefit is utilized.
            </p>
          </div>
          <div className="w-full lg:w-[40%] mb-5">
            <Image src={capex} className="w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="p-8 flex flex-col items-center">
        <Image
          src={renewable}
          className="w-full sm:w-11/12 md:w-10/12  h-auto"
        />
        <div>
          <h1 className="font-bold mb-8">Opex Model</h1>
          <p className="mb-12">
            In this model, an investor invests the capital and consumer pays for
            the energy supplied to it by solar power project. Both consumer and
            developer sign a long-term power purchase agreement (PPA) for an
            agreed tenure & tariff.
          </p>
          <h1 className="font-medium">
            OPEX: Less Investments and Less Saving
          </h1>
          <ul className="list-disc leading-7 mb-3">
            <li>Investor provides upfront capital to set up the Solar plant</li>
            <li>
              Investor and the consumer enter into a power purchase agreement
              (PPA)
            </li>
            <li>
              The consumer pays for the units which it consumed from the Solar
              the Solar plant.
            </li>
            <li>
              The consumer saveson the monthly electricity bill as the tariff
              offered by is lower than the utility tariff.
            </li>
            <li>
              The consumer need not worry about the O&M of the system as
              Investor will take care of it.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen ">
        <div className=" p-8  w-full  flex flex-col md:flex-row">
          <div className="w-full  md:pr-8 mb-8 md:mb-0">
            <h6 className="text-[#23bae4] text-base font-semibold uppercase">
              GET A QUOTE
            </h6>
            <div className="w-28 h-0.5 bg-[#23bae4] mb-8"></div>
            <p className="mb-6 text-4xl font-bold w-[80%]">
              Submit a Solar Project Enquiry
            </p>
            <p>We will contact you for further discussion.</p>
          </div>
          <div className="w-full  md:pl-8">
            <form>
              <div className="mb-4 flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-3 py-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Contact Number (10 digits)"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4 flex flex-col md:flex-row gap-4">
                <select className="w-full px-3 py-2 border rounded">
                  <option value="">Select State</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Jharkhand">Jharkhand</option>
                  {/* Add more state options here */}
                </select>
                <input
                  type="text"
                  placeholder="Town/City"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4 flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Pin Code (6 digits)"
                  className="w-full px-3 py-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Avg. Monthly Electricity Bill"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Solar For</label>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center">
                    <input type="checkbox" id="home" className="mr-2" />
                    <label htmlFor="home">Home</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="commercial" className="mr-2" />
                    <label htmlFor="commercial">Commercial</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="business" className="mr-2" />
                    <label htmlFor="business">Business</label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="px-4  bg-[#23bae4] text-white py-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f8f8]">
        <div className="w-[90%] mx-auto p-8">
          <div className="w-full md:pr-8 mb-8 md:mb-0">
            <h6 className="text-[#23bae4] text-base font-semibold uppercase">
              SOLAR FOR BUSINESS
            </h6>
            <div className="w-[160px] h-0.5 bg-[#23bae4] mb-8"></div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <p className="mb-6 text-4xl font-bold w-[80%]">
                Your Ideal Solar Partner!
              </p>
              <div className="flex items-center mb-4">
                <Image
                  src={righticon}
                  className="w-5 h-5 hover:bg-[#23bae4] rounded-full mr-2"
                />
                <p>
                  We install solar PV systems on the roofs of Industries,
                  Schools/Colleges/Universities, Hospitals/IT/ Business
                  Parks/Mall /Shopping Complexes and Cold Storages.
                </p>
              </div>
              <div className="flex items-center mb-4">
                <Image
                  src={righticon}
                  className="w-5 h-5 hover:bg-[#23bae4] border rounded-full mr-2"
                />
                <p>
                  We install solar PV systems on the roofs of Industries,
                  Schools/Colleges/Universities, Hospitals/IT/ Business
                  Parks/Mall /Shopping Complexes and Cold Storages.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex gap-5">
                  <Image src={industrial} className="w-14 h-14" />
                  <div className="flex flex-col">
                    <h1>Industrial</h1>
                    <div className="flex items-center mb-2">
                      <Image src={righticon} className="w-5 h-5 mr-2" />
                      <p>Manufacturing Units</p>
                    </div>
                    <div className="flex items-center mb-2">
                      <Image src={righticon} className="w-5 h-5 mr-2" />
                      <p>Production Units</p>
                    </div>
                    <div className="flex items-center mb-2">
                      <Image src={righticon} className="w-5 h-5 mr-2" />
                      <p>Go downs/Cold Storages</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-5">
                  <Image src={Commercial} className="w-14 h-14" />
                  <div className="flex flex-col">
                    <h1>Commercial</h1>
                    <div className="flex items-center mb-2">
                      <Image src={righticon} className="w-5 h-5 mr-2" />
                      <p>IT/Business Parks</p>
                    </div>
                    <div className="flex items-center mb-2">
                      <Image src={righticon} className="w-5 h-5 mr-2" />
                      <p>Office Complexes</p>
                    </div>
                    <div className="flex items-center mb-2">
                      <Image src={righticon} className="w-5 h-5 mr-2" />
                      <p>Malls/Hotels</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-5">
                  <Image src={Institutional} className="w-14 h-14" />
                  <div className="flex flex-col">
                    <h1>Institutional</h1>
                    <div className="flex items-center mb-2">
                      <Image src={righticon} className="w-5 h-5 mr-2" />
                      <p>Schools</p>
                    </div>
                    <div className="flex items-center mb-2">
                      <Image src={righticon} className="w-5 h-5 mr-2" />
                      <p>Colleges / University</p>
                    </div>
                    <div className="flex items-center mb-2">
                      <Image src={righticon} className="w-5 h-5 mr-2" />
                      <p>Health Centres/ Hospital</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
              <Image src={solorengineer} className="w-full md:w-1/2" />
              <div className="flex flex-col gap-5 items-center w-full md:w-1/2">
                <Image src={solorengineertwo} className="w-full" />
                <Image src={solorengineerthree} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f8f8]">
        <div className="flex flex-col-reverse md:flex-row w-[90%] mx-auto p-8 gap-8">
          <div className="flex flex-col md:flex-row gap-5 items-center justify-center w-full md:w-1/2">
            <Image src={capexmodel} className=" max-w-full h-fit" />
          </div>
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="w-full md:pr-8 mb-8 md:mb-0">
              <h6 className="text-[#23bae4] text-base font-semibold uppercase">
                BUSINESS MODEL
              </h6>
              <div className="w-[130px] h-0.5 bg-[#23bae4] mb-8"></div>
            </div>
            <h2 className="mb-6 text-4xl font-bold w-full md:w-[80%]">
              Capex Model
            </h2>
            <p className="mb-3">
              In this model, the entire investment comes from the consumer.
              Consumers hire a solar EPC company who provide turnkey
              installation of entire solar power system and hand over assets to
              consumers.
            </p>
            <div className="w-full md:pr-8 mb-4">
              <h6 className="text-[#23bae4] text-base font-semibold uppercase">
                CAPEX: MORE INVESTMENT AND MORE SAVING
              </h6>
              <div className="w-[350px] h-0.5 bg-[#23bae4] mb-2"></div>
            </div>

            <div className="flex items-start mb-4">
              <Image
                src={righticon}
                className="w-5 h-5 hover:bg-[#23bae4] rounded-full mr-2"
              />
              <p>Upfront capital investment made by consumer.</p>
            </div>
            <div className="flex items-start mb-4">
              <Image
                src={righticon}
                className="w-5 h-5 hover:bg-[#23bae4] border rounded-full mr-2"
              />
              <p>Sologix provides EPC service to install the Solar plant.</p>
            </div>
            <div className="flex items-start mb-4">
              <Image
                src={righticon}
                className="w-5 h-5 hover:bg-[#23bae4] border rounded-full mr-2"
              />
              <p>
                Consumer generates savings on monthly electricity bill under
                net-metering arrangement
              </p>
            </div>
            <div className="flex items-start mb-4">
              <Image
                src={righticon}
                className="w-5 h-5 hover:bg-[#23bae4] border rounded-full mr-2"
              />
              <p>
                Consumer can claim accelerated depreciation (AD) on the
                investment made in the Solar plant..
              </p>
            </div>
            <div className="flex items-start mb-4">
              <Image
                src={righticon}
                className="w-5 h-5 hover:bg-[#23bae4] border rounded-full mr-2"
              />
              <p>
                Payback period can vary between 3-5 years depending on utility
                tariff and AD benefit is utilized.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f8f8]">
        <div className="flex flex-col md:flex-row w-[90%] mx-auto p-8 gap-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="w-full md:pr-8 mb-8 md:mb-0">
              <h6 className="text-[#23bae4] text-base font-semibold uppercase">
                BUSINESS MODEL
              </h6>
              <div className="w-[130px] h-0.5 bg-[#23bae4] mb-8"></div>
            </div>
            <h2 className="mb-6 text-4xl font-bold w-full md:w-[80%]">
              Opex Model
            </h2>
            <p className="mb-3">
              In this model, an investor invests the capital and consumer pays
              for the energy supplied to it by solar power project. Both
              consumer and developer sign a long-term power purchase agreement
              (PPA) for an agreed tenure & tariff.
            </p>
            <div className="w-full md:pr-8 mb-4">
              <h6 className="text-[#23bae4] text-base font-semibold uppercase">
                OPEX: LESS INVESTMENTS AND LESS SAVING
              </h6>
              <div className="w-[330px] h-0.5 bg-[#23bae4] mb-2"></div>
            </div>

            <div className="flex items-start mb-4">
              <Image
                src={righticon}
                className="w-5 h-5 hover:bg-[#23bae4] rounded-full mr-2"
              />
              <p>Investor provides upfront capital to set up the Solar plant</p>
            </div>
            <div className="flex items-start mb-4">
              <Image
                src={righticon}
                className="w-5 h-5 hover:bg-[#23bae4] border rounded-full mr-2"
              />
              <p>
                Investor and the consumer enter into a power purchase agreement
                (PPA)
              </p>
            </div>
            <div className="flex items-start mb-4">
              <Image
                src={righticon}
                className="w-5 h-5 hover:bg-[#23bae4] border rounded-full mr-2"
              />
              <p>
                The consumer pays for the units which it consumed from the Solar
                the Solar plant.
              </p>
            </div>
            <div className="flex items-start mb-4">
              <Image
                src={righticon}
                className="w-5 h-5 hover:bg-[#23bae4] border rounded-full mr-2"
              />
              <p>
                The consumer saveson the monthly electricity bill as the tariff
                offered by is lower than the utility tariff.
              </p>
            </div>
            <div className="flex items-start mb-4">
              <Image
                src={righticon}
                className="w-5 h-5 hover:bg-[#23bae4] border rounded-full mr-2"
              />
              <p>
                The consumer need not worry about the O&M of the system as
                Investor will take care of it.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 items-center justify-center w-full md:w-1/2">
            <Image src={capexmodel} className=" max-w-full h-fit" />
          </div>
        </div>
      </div>

      <div className="mx-auto p-8">
        <div className="w-full  mb-8 md:mb-0 flex flex-col items-center justify-center">
          <h6 className="text-[#23bae4] text-base font-semibold uppercase">
            SOLOGIX ADVANTAGE
          </h6>
          <div className="w-[160px] h-0.5 bg-[#23bae4] mb-8"></div>
          <h1 className="text-3xl font-bold text-center md:text-3xl">
            From Concept to Commissioning
          </h1>
        </div>
        <div className="mt-12 mx-auto  items-center justify-center hidden md:block">
          <Image
            src={commissioning}
            alt="Commissioning"
            className="w-[90%] md:w-auto"
          />
        </div>
        <div className="mt-12 mx-auto flex items-center justify-center md:hidden">
          <Image
            src={commissioningmobile}
            alt="Commissioning Mobile"
            className="w-[90%] md:w-auto"
          />
        </div>
      </div>

      <div className="p-8 bg-[#f8f8f8]">
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <div className="w-full mb-8 md:mb-0 md:w-1/2">
            <h6 className="text-[#23bae4] text-base font-semibold uppercase">
              DESIGN BY SOLOGIX
            </h6>
            <div className="w-[160px] h-0.5 bg-[#23bae4] mb-8"></div>
            <h1 className="text-3xl font-bold">
              Design and Delivered by Engineers from IIT & NIT
            </h1>
            <div className="mt-4 space-y-2">
              <div className="flex items-start">
                <Image
                  src={righticon}
                  className="w-5 h-5 hover:bg-[#23bae4] rounded-full mr-2"
                  alt="Icon"
                />
                <p>Latest technology and quality equipment</p>
              </div>
              <div className="flex items-start">
                <Image
                  src={righticon}
                  className="w-5 h-5 hover:bg-[#23bae4] rounded-full mr-2"
                  alt="Icon"
                />
                <p>Competitive costing /tariff</p>
              </div>
              <div className="flex items-start">
                <Image
                  src={righticon}
                  className="w-5 h-5 hover:bg-[#23bae4] rounded-full mr-2"
                  alt="Icon"
                />
                <p>Easy financing scheme</p>
              </div>
              <div className="flex items-start">
                <Image
                  src={righticon}
                  className="w-5 h-5 hover:bg-[#23bae4] rounded-full mr-2"
                  alt="Icon"
                />
                <p>Faster Net-meter approval</p>
              </div>
              <div className="flex items-start">
                <Image
                  src={righticon}
                  className="w-5 h-5 hover:bg-[#23bae4] rounded-full mr-2"
                  alt="Icon"
                />
                <p>Complete Operation & Maintenance</p>
              </div>
              <div className="flex items-start">
                <Image
                  src={righticon}
                  className="w-5 h-5 hover:bg-[#23bae4] rounded-full mr-2"
                  alt="Icon"
                />
                <p>24* 7 Customer support</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image src={engineerdesign} alt="Engineer Design" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-center font-bold text-4xl mb-8 text-[#2D479E]">Case Study</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="drop-shadow-2xl">
              <Card>
                <Image src={study.image} className="shadow-2xl" />
                <div className="mt-3">
                  <h1 className="text-center text-base font-medium">
                    {study.title}
                  </h1>
                </div>
                <div className="flex justify-end mt-2">
                  <Button className="bg-[#324CA2] border text-white">
                    Show More
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolorBusiness;
