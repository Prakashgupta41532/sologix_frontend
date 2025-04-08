"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Avatar from "../../../public/Avatar.png";
import Amitranjan from "../../../public/AmitRanjan.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import electroniccar from "../../../public/isolated-vector-illustration-electric-car-260nw-2210905809 1.png";
import handshake from "../../../public/handshake.png";
import site from "../../../public/site-1.png";
import system from "../../../public/system-design.png";
import procurement from "../../../public/Procurement.png";
import installation from "../../../public/installation.png";
import operation from "../../../public/operation.png";
import quete from "../../../public/quete.png";
import { Button, Form, Input } from "antd";
import { Checkbox } from "antd";
import clientImg from "../../../public/chose1 (1).jpg";
import { API } from "@/utils";
import './about.css';

const AboutUs = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const [loading, setLoading] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  const getAllFeedbacks = async () => {
    try {
      setLoading(true);
      const userSession = localStorage.getItem("userSession");
      const parsedSession = userSession ? JSON.parse(userSession) : null;
      const accessToken = parsedSession?.access_token;

      if (!accessToken) {
        throw new Error("Access token not found");
      }

      const response = await API.get("/feedbacks/fetch-All-Feedbacks", {
        headers: {
          "authorization": `token ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setFeedbacks(response.data.data);
      } else {
        console.error("Error fetching feedbacks:", response);
      }
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllFeedbacks();
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pagination: null,
  };


  return (
    <div className="w-full">
      <h1 className="text-[#344DA3] text-5xl font-bold text-center mt-8">
        About Us?
      </h1>

      <div className="mt-5 flex flex-col-reverse md:flex-row gap-5 p-5 justify-center items-center">
        <div className="w-full md:w-2/5">
          <Image
            src={electroniccar}
            alt="About Company"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-[50%] flex justify-center md:justify-start">
          <p className="w-[90%] text-center md:text-left leading-7 font-semibold">
            With the increasing GHG emission and Global Warming threat, our team
            of experts from IIT, NIT, and DTU realized that there is a need to
            counter the adverse impact of climate change and limit the Earth's
            rising temperature. We are on a mission to make this planet a better
            place to live and we are committed to make clean energy available to
            all which is Renewable, Reliable, and Affordable.
          </p>
        </div>
      </div>

      <div className="p-8 md:p-12 bg-gradient-to-r">
        <h1 className="text-center font-bold text-3xl mb-4 text-white">
          How it Works - Process
        </h1>
        <div className="mt-5">
          <ul className="list-disc leading-7 mb-3">
            <li>
              We provide design, engineering, procurement and installation
              services for solar PV systems to residential, institutional,
              industrial, and commercial consumers in both CAPEX and OPEX/RESCO
              models.
            </li>
          </ul>
          <ul className="list-disc leading-7 mb-3">
            <li>
              We not only integrate the system, but also care for it with the
              endeavor to give you the fastest possible break-even on your
              investment.
            </li>
          </ul>
          <ul className="list-disc leading-7 mb-3">
            <li>
              We help large corporate and bulk power consumers to source green
              power (Solar/Wind/Hybrid PPA) through Open Access power
              procurement mechanism.
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <div className="flex items-center flex-col justify-center text-center gap-2">
            <Image
              src={site}
              className="w-8 md:w-20 lg:w-14"
              alt="Site Survey"
            />
            <div className="flex items-center justify-center gap-2">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">01</h1>
              <span className="text-sm md:text-base font-medium">
                Site Survey <br /> and Analysis
              </span>
            </div>
          </div>
          <div className="flex items-center flex-col justify-center text-center gap-2">
            <Image
              src={handshake}
              className="w-14 md:w-20 lg:w-24"
              alt="Proposal and Agreement"
            />
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">02</h1>
              <span className="text-sm md:text-base font-medium">
                Proposal and <br /> Agreement
              </span>
            </div>
          </div>
          <div className="flex items-center flex-col justify-center text-center gap-3 flex-wrap">
            <Image
              src={system}
              className="w-10 md:w-20 lg:w-[85px]"
              alt="System Design and Engineering"
            />
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">03</h1>
              <span className="text-sm md:text-base font-medium">
                System Design <br /> and Engineering
              </span>
            </div>
          </div>
          <div className="flex items-center flex-col justify-center text-center gap-3">
            <Image
              src={procurement}
              className="w-10 md:w-20 lg:w-24"
              alt="Procurement and Construction"
            />
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">04</h1>
              <span className="text-sm md:text-base font-medium">
                Procurement and <br /> Construction
              </span>
            </div>
          </div>
          <div className="flex items-center flex-col justify-center text-center gap-3">
            <Image
              src={installation}
              className="w-14 md:w-20 lg:w-24 "
              alt="Installation and Commissioning"
            />
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">05</h1>
              <span className="text-sm md:text-base font-medium">
                Installation and <br /> Commissioning
              </span>
            </div>
          </div>
          <div className="flex items-center flex-col justify-center text-center gap-3">
            <Image
              src={operation}
              className="w-10 md:w-20 lg:w-[65px]"
              alt="Operations and Maintenance"
            />
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">06</h1>
              <span className="text-sm md:text-base font-medium">
                Operations and <br /> Maintenance
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 flex flex-col-reverse lg:flex-row justify-between w-full mt-8">
        <div className="w-full lg:w-[50%]">
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
                  placeholder="Enter Your Name "
                />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input
                  className="w-full p-1 mb-2 box-border border-0 border-b-2 border-[#8D8D8D]"
                  placeholder="Enter Your Password "
                />
              </Form.Item>
              <Form.Item label="Email ID" name="email">
                <Input
                  className="w-full p-1 mb-2 box-border border-0 border-b-2 border-[#8D8D8D]"
                  placeholder="Enter Your Email ID "
                />
              </Form.Item>
              <Form.Item label="City/Town" name="city">
                <Input
                  className="w-full p-1 mb-2 box-border border-0 border-b-2 border-[#8D8D8D]"
                  placeholder="Enter Your City/Town "
                />
              </Form.Item>
              <Form.Item label="Pin-Code" name="number">
                <Input
                  className="w-full p-1 mb-2 box-border border-0 border-b-2 border-[#8D8D8D]"
                  placeholder="Enter Your Pin-Code "
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
        <div className="w-full lg:w-[50%] flex flex-col items-center justify-center mt-8 lg:mt-0">
          <h1 className="font-bold text-2xl text-[#344DA3]">GET A QUOTE</h1>
          <Image src={quete} />
          <h1 className="font-bold text-2xl text-[#344DA3]">
            Submit a Solar Project Enquiry
          </h1>
          <p className="text-[#344DA3] font-semibold">
            We will contact you for further discussion
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col mt-12">
        <h1 className="text-[#344DA3] font-bold text-3xl mb-8">Our Team</h1>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="w-[70%] max-w-screen-xl mx-auto container">
              <Slider {...settings}>
                {feedbacks?.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 border-4 p-4 md:p-8 w-full slider_top_container"
                  >
                    {/* Image Container */}
                    <div className="flex-shrink-0 mb-4 md:mb-0">
                      <Image src={clientImg} alt="Client Image" className="w-40 h-auto md:w-48 lg:w-56 xl:w-64" />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-center w-full md:w-[60%]">
                      <div className="flex items-center gap-4 mt-4 md:mt-12">
                        <Image
                          src={Avatar}
                          alt="Person Image"
                          className="w-10 h-10 md:w-12 md:h-12 border rounded-full"
                        />
                        <div>
                          <h1 className="text-[#344DA3] font-semibold text-base md:text-lg">
                            {testimonial.clientName}
                          </h1>
                          <h2 className="text-sm md:text-base">{testimonial.designation}</h2>
                        </div>
                      </div>

                      <p className="mt-4 md:mt-8 text-sm md:text-base">
                        {testimonial.comment}
                      </p>

                      {/* Table */}
                      <table className="w-full md:min-w-[60%] mt-5 bg-white border text-[#344DA3] text-xs md:text-sm">
                        <tbody>
                          <tr>
                            <td className="px-3 py-2 border">System Capacity</td>
                            <td className="px-3 py-2 border">{testimonial.systemCapacity}</td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 border">System Type</td>
                            <td className="px-3 py-2 border">{testimonial.systemType}</td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 border">Location</td>
                            <td className="px-3 py-2 border">{testimonial.location}</td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 border">Annual Energy Generation</td>
                            <td className="px-3 py-2 border">{testimonial.annual_energy_generation}</td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 border">Annual Savings</td>
                            <td className="px-3 py-2 border">{testimonial.annual_savings}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          )}


        </div>
      </div>
    </div>
  );
};

export default AboutUs;
