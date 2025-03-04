"use client";
import React from "react";
import becomepartner from "../../../public/becomepatner.png";
import intalltion from "../../../public/pngwing.png";
import handshake from "../../../public/handshake.png";
import procerment from "../../../public/Procurement.png";
import system from "../../../public/system-design.png";
import Image from "next/image";
import { Card } from "antd";
import { Button, Form, Input } from "antd";
import { Checkbox } from "antd";
import quete from "../../../public/quete.png";

const BecomePartner = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div>
      <div className="mt-8">
        <h1 className="font-bold text-3xl text-center text-[#344DA3] mb-5">
          Become a Partner
        </h1>
        <Image src={becomepartner} />
      </div>

      <div className="p-8 mt-6">
        <h1 className="font-bold text-4xl text-[#344EA3] text-center mb-12">
          Wonderful Opportunity to Earn and Grow
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
          <Card className="bg-[#324CA2]">
            <div className="flex items-center justify-center flex-col">
              <Image src={intalltion} className="w-28 h-28" />
              <p className="mt-8 text-white">
                With more than 100 satisfied customers, Sologix is a leading
                rooftop solar company in Northern and Eastern region of India.
              </p>
            </div>
          </Card>
          <Card className=" bg-[#324CA2]">
            <div className="flex items-center justify-center flex-col ">
              <Image src={handshake} alt="loading" className="w-28 h-28" />
              <p className="mt-8 text-white">
                We believe in collaborative approach and engage with partners
                across the India. Our partners can create lead and generate
                on-line quotations instantly.
              </p>
            </div>
          </Card>
          <Card className=" bg-[#324CA2]">
            <div className="flex items-center justify-center flex-col">
              <Image src={procerment} className="w-28 h-28" />
              <p className="mt-8 text-white">
                We train our channel partners and ensure that any individuals
                having a good marketing skill and business net-working can
                partner with us and start earning immediately.
              </p>
            </div>
          </Card>
          <Card className=" bg-[#324CA2]">
            <div className="flex items-center justify-center flex-col">
              <Image src={system} className="w-28 h-28" />
              <p className="mt-8 text-white ">
                Even a non-technical and non-solar background person can become
                our channel partner and start earning immediately. We provide
                efficient end-to-end support to our solar channel partners.
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div className="p-8">
        <h1 className="font-bold text-2xl text-[#344DA3]">
          Don’t Hesitate To Send Us Message
        </h1>
        <div className="flex flex-col-reverse lg:flex-row justify-between w-full mt-8">
          <div className="w-full lg:w-[50%]">
            <Form
              name="dependencies"
              autoComplete="off"
              style={{
                maxWidth: 600,
              }}
              layout="vertical"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    placeholder="Enter Your City/Town"
                  />
                </Form.Item>
              </div>
              <div>
                <h1 className="font-bold text-xl mb-5">Select Query?</h1>
                <div className="grid grid-cols-3 md:grid-cols-4">
                  <Checkbox onChange={onChange}>Home</Checkbox>
                  <Checkbox onChange={onChange}>Commercial</Checkbox>
                  <Checkbox onChange={onChange}>Business</Checkbox>
                  <Checkbox onChange={onChange}>Institution</Checkbox>
                </div>
              </div>

              <Form.Item name="message" label="Message" className="mt-8">
                <Input.TextArea
                  className="w-full p-1 mb-2 box-border border-0 border-b-2 border-[#8D8D8D]"
                  placeholder="Write Your Name"
                />
              </Form.Item>
            </Form>
            <div className="flex justify-end items-end">
              <Button type="primary">Send Message</Button>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex flex-col  items-center justify-center mt-8 lg:mt-0">
            <Image src={quete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomePartner;
