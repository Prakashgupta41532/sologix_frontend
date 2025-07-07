"use client";
import React, { useState } from "react";
import Image from "next/image";
import becomepartner from "../../../public/becomepatner.png";
import intalltion from "../../../public/pngwing.png";
import handshake from "../../../public/handshake.png";
import procerment from "../../../public/Procurement.png";
import system from "../../../public/system-design.png";
import quete from "../../../public/quete.png";
import { Card, Form, Input, Checkbox, Button } from "antd";
import { toast } from "sonner";
import { API } from "@/utils";

const BecomePartner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    pincode: "",
    message: "",
    interest: [],
  });

  const handleCheckboxChange = (checkedValues) => {
    setFormData((prev) => ({
      ...prev,
      interest: checkedValues,
    }));
  };

  const handleSubmit = () => {
    API.post("/auth/contact-us", formData)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Successfully submitted");
          setFormData({
            name: "",
            email: "",
            phone: "",
            state: "",
            city: "",
            pincode: "",
            message: "",
            interest: [],
          });
        } else {
          toast.error(response?.data?.error || "Submission failed");
        }
      })
      .catch((error) => {
        console.error("API error:", error);
        toast.error("Data submission failed");
      });
  };

  return (
    <div>
      <div className="mt-8">
        <h1 className="font-bold text-3xl text-center text-[#344DA3] mb-5">
          Become a Partner
        </h1>
        <Image src={becomepartner} alt="Become a Partner" />
      </div>

      <div className="p-8 mt-6">
        <h1 className="font-bold text-4xl text-[#344EA3] text-center mb-12">
          Wonderful Opportunity to Earn and Grow
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[intalltion, handshake, procerment, system].map((img, i) => (
            <Card key={i} className="bg-[#324CA2]">
              <div className="flex items-center justify-center flex-col">
                <Image src={img} className="w-28 h-28" alt="Info card" />
                <p className="mt-8 text-white text-center">
                  {
                    [
                      "With more than 100 satisfied customers, Sologix is a leading rooftop solar company in Northern and Eastern region of India.",
                      "We believe in collaborative approach and engage with partners across the India. Our partners can create lead and generate on-line quotations instantly.",
                      "We train our channel partners and ensure that any individuals having a good marketing skill and business net-working can partner with us and start earning immediately.",
                      "Even a non-technical and non-solar background person can become our channel partner and start earning immediately. We provide efficient end-to-end support to our solar channel partners.",
                    ][i]
                  }
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="p-8">
        <h1 className="font-bold text-2xl text-[#344DA3]">
          Don’t Hesitate To Send Us Message
        </h1>

        <div className="flex flex-col-reverse lg:flex-row justify-between w-full mt-8">
          <div className="w-full lg:w-[50%]">
            <Form layout="vertical" onFinish={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter Your Name"
                    className="w-full p-1 border-0 border-b-2 border-[#8D8D8D]"
                  />
                </Form.Item>

                <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="Enter Your Phone"
                    className="w-full p-1 border-0 border-b-2 border-[#8D8D8D]"
                  />
                </Form.Item>

                <Form.Item label="Email" name="email" rules={[{ required: true }]}>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Enter Your Email"
                    className="w-full p-1 border-0 border-b-2 border-[#8D8D8D]"
                  />
                </Form.Item>

                <Form.Item label="City" name="city">
                  <Input
                    name="city"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    placeholder="Enter Your City"
                    className="w-full p-1 border-0 border-b-2 border-[#8D8D8D]"
                  />
                </Form.Item>

                <Form.Item label="State" name="state">
                  <Input
                    name="state"
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                    placeholder="Enter Your State"
                    className="w-full p-1 border-0 border-b-2 border-[#8D8D8D]"
                  />
                </Form.Item>

                <Form.Item label="Pin-Code" name="pincode">
                  <Input
                    name="pincode"
                    value={formData.pincode}
                    onChange={(e) =>
                      setFormData({ ...formData, pincode: e.target.value })
                    }
                    placeholder="Enter Your Pin-Code"
                    className="w-full p-1 border-0 border-b-2 border-[#8D8D8D]"
                  />
                </Form.Item>
              </div>

              <div className="mt-5">
                <h1 className="font-bold text-xl mb-3">Select Query?</h1>
                <Form.Item name="interest">
                  <Checkbox.Group
                    value={formData.interest}
                    onChange={handleCheckboxChange}
                  >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <Checkbox value="Home">Home</Checkbox>
                      <Checkbox value="Commercial">Commercial</Checkbox>
                      <Checkbox value="Business">Business</Checkbox>
                      <Checkbox value="Institution">Institution</Checkbox>
                    </div>
                  </Checkbox.Group>
                </Form.Item>
              </div>

              <Form.Item name="message" label="Message" className="mt-5">
                <Input.TextArea
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Write Your Message"
                  className="w-full p-1 border-0 border-b-2 border-[#8D8D8D]"
                />
              </Form.Item>

              <div className="flex justify-end">
                <Button type="primary" htmlType="submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </div>

          <div className="w-full lg:w-[50%] flex items-center justify-center mt-8 lg:mt-0">
            <Image src={quete} alt="Quote" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomePartner;
