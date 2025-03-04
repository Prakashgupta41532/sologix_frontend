"use client";
import Image from "next/image";
import React from "react";
import twitter from "../../public/twitter-logo 1.png";
import snapchat from "../../public/snapchat-logo 1.png";
import insta from "../../public/pngwing 2.png";
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around p-8 bg-gray-100">
      <div className="flex-1 mb-6 md:mb-0">
        <h3 className="text-lg font-bold mb-2">About Company</h3>
        <p className="font-light text-[16px] font-[Poppins]">
          We are on a mission to make this planet a better place to live and we
          are committed to make clean energy available to all which is,
          Renewable, Reliable, and Affordable.
        </p>
        <ul className="list-none p-0">
          
          <li className="mb-1">
            <a
              href="/termCondition"
              className="text-blue-500 hover:underline"
            >
              Term & Condition
            </a>
          </li>
          <li className="mb-1">
            <a
              href="/privacy"
              className="text-blue-500 hover:underline"
            >
              Privacy Policy
            </a>
          </li>
          <li className="mb-1">
            <a
              href="/refund"
              className="text-blue-500 hover:underline"
            >
              Return Policy
            </a>
          </li>
         
        </ul>
      </div>
      <div className="flex-1 mb-6 md:mb-0 ml-0 md:ml-8">
        <h3 className="text-lg font-bold mb-2 px-6 py-1">Quick Links</h3>
        <ul className="list-none p-0">
          <li className="mb-1">
            <a
              href="/"
              className="hover:bg-[#465CAF] hover:text-white  px-6 py-1 rounded-md text-black font-light text-[16px] font-[Poppins]"
            >
              Home
            </a>
          </li>
          <li className="mb-1">
            <a
              href="/aboutus"
              className="hover:bg-[#465CAF] hover:text-white px-6 py-1 rounded-md text-black font-light text-[16px] font-[Poppins]"
            >
              About Us
            </a>
          </li>
          <li className="mb-1">
            <a
              href="/forhome"
              className="hover:bg-[#465CAF] hover:text-white px-6 py-1 rounded-md text-black font-light text-[16px] font-[Poppins]"
            >
              For Home
            </a>
          </li>
          <li className="mb-1">
            <a
              href="/solorbusiness"
              className="hover:bg-[#465CAF] hover:text-white px-6 py-1 rounded-md text-black font-light text-[16px] font-[Poppins]"
            >
              For Business
            </a>
          </li>
          <li className="mb-1">
            <a
              href="/becomepartner"
              className="hover:bg-[#465CAF] hover:text-white px-6 py-1 rounded-md text-black font-light text-[16px] font-[Poppins]"
            >
              Become a Partner
            </a>
          </li>
          <li className="mb-1">
            <a
              href="/resource"
              className="hover:bg-[#465CAF] hover:text-white px-6 py-1 rounded-md text-black font-light text-[16px] font-[Poppins]"
            >
              Resource
            </a>
          </li>
          <li className="mb-1">
            <a
              href="/contactus"
              className="hover:bg-[#465CAF] hover:text-white px-6 py-1 rounded-md text-black font-light text-[16px] font-[Poppins]"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 mb-6 md:mb-0">
        <h3 className="text-lg font-bold mb-2">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#">
            <Image src={twitter} alt="Twitter" className="w-8" />
          </a>
          <a href="#">
            <Image src={snapchat} alt="Snapchat" className="w-8" />
          </a>
          <a href="#">
            <Image src={insta} alt="Instagram" className="w-8" />
          </a>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold mb-2">Contact Us</h3>
        <div className="flex  gap-4">
          <EnvironmentOutlined />
          <p className="my-3">
            STPI Building, Plot -8, Namkum Industrial Area, Ranchi, Jharkhand -
            834010
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <MailOutlined className="text-xl text-gray-600" />
          <div className="flex flex-col space-y-2">
            <Link
              href="mailto:info@sologixenergy.in"
              className="text-blue-500 hover:underline"
            >
              info@sologixenergy.in
            </Link>
            <Link
              href="mailto:amit@sologixenergy.in"
              className="text-blue-500 hover:underline"
            >
              amit@sologixenergy.in
            </Link>
            <Link
              href="mailto:anil@sologixenergy.in"
              className="text-blue-500 hover:underline"
            >
              anil@sologixenergy.in
            </Link>
          </div>
        </div>
        <div className="flex gap-4">
        <PhoneOutlined />
          <p className="my-3">+91-8287766474, +91-7838498478</p>
        </div>
      </div>
    </div>
  );
};
