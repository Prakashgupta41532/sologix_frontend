"use client";
import React, { useState } from "react";
import Image from "next/image";
import contactus from "../../../public/contactus.png";
import { Button, Form, Input, Checkbox } from "antd";
import quete from "../../../public/quete.png";
import phoneicon from "../../../public/phone-icon.png";
import mailicon from "../../../public/pngwing 4.png";
import locationicon from "../../../public/pngwing 3.png";
import { toast } from "sonner";
import { API } from "@/utils";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    city: "",
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
    console.log("Submitting form data:", formData);
    API.post("/auth/contact-us", formData)
      .then((response) => {
        if (response.status === 200) {
          toast("Successfully submitted");
          setFormData({
            name: "",
            email: "",
            phone: "",
            state: "",
            city: "",
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
      <div>
        <Image src={contactus} alt="Contact Banner" />
      </div>

      <div className="p-8">
        <h1 className="font-bold text-2xl text-[#344DA3]">
          Don’t Hesitate To Send Us Message
        </h1>

        <div className="flex flex-col-reverse lg:flex-row justify-between w-full mt-8">
          <div className="w-full lg:w-[50%]">
            <Form
              layout="vertical"
              onFinish={handleSubmit}
              initialValues={formData}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full p-1 box-border border-0 border-b-2 border-[#8D8D8D]"
                    placeholder="Enter Your Name"
                  />
                </Form.Item>

                <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full p-1 box-border border-0 border-b-2 border-[#8D8D8D]"
                    placeholder="Enter Your Phone"
                  />
                </Form.Item>

                <Form.Item label="Email" name="email" rules={[{ required: true }]}>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full p-1 box-border border-0 border-b-2 border-[#8D8D8D]"
                    placeholder="Enter Your Email"
                  />
                </Form.Item>

                <Form.Item label="City/Town" name="city">
                  <Input
                    name="city"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full p-1 box-border border-0 border-b-2 border-[#8D8D8D]"
                    placeholder="Enter Your City"
                  />
                </Form.Item>

                <Form.Item label="State" name="state">
                  <Input
                    name="state"
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                    className="w-full p-1 box-border border-0 border-b-2 border-[#8D8D8D]"
                    placeholder="Enter Your State"
                  />
                </Form.Item>

                <Form.Item label="City" name="city">
                  <Input
                    name="city"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full p-1 box-border border-0 border-b-2 border-[#8D8D8D]"
                    placeholder="City"
                  />
                </Form.Item>
                <Form.Item label="Pin-Code" name="pincode">
                  <Input
                    name="pincode"
                    value={formData.pincode}
                    onChange={(e) =>
                      setFormData({ ...formData, pincode: e.target.value })
                    }
                    className="w-full p-1 box-border border-0 border-b-2 border-[#8D8D8D]"
                    placeholder="Enter Your Pin-Code"
                  />
                </Form.Item>

              </div>

              <div className="mt-8">
                <h1 className="font-bold text-xl mb-3">Select Query?</h1>
                <Form.Item name="interest">
                  <Checkbox.Group
                    value={formData.interest}
                    onChange={handleCheckboxChange}
                  >
                    <div className="flex flex-col md:flex-row gap-3">
                      <Checkbox value="Home">Home</Checkbox>
                      <Checkbox value="Commercial">Commercial</Checkbox>
                      <Checkbox value="Business">Business</Checkbox>
                      <Checkbox value="Institution">Institution</Checkbox>
                    </div>
                  </Checkbox.Group>
                </Form.Item>

              </div>


              <Form.Item name="message" label="Message">
                <Input.TextArea
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full p-1 box-border border-0 border-b-2 border-[#8D8D8D]"
                  placeholder="Write Your Message"
                />
              </Form.Item>

              <div className="flex justify-end">
                <Button type="primary" htmlType="submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </div>

          <div className="w-full lg:w-[50%] flex flex-col items-center justify-center mt-8 lg:mt-0">
            <Image src={quete} alt="Quote Image" />
          </div>
        </div>
      </div>

      <div className="mt-14 p-8">
        <div className="flex flex-wrap items-center justify-center gap-5">
          {/* Phone Box */}
          <div className="bg-[#1d304f] text-white w-full sm:w-[45%] md:w-[30%] lg:w-[27%] h-72 p-6 rounded-md">
            <Image src={phoneicon} alt="Phone Icon" />
            <p className="mb-4 mt-4">Phone Number</p>
            <h5 className="font-medium leading-10">+91 8287766474</h5>
            <h5 className="font-medium">+91 7838498478</h5>
          </div>
          {/* Email Box */}
          <div className="bg-[#0a78bf] text-white w-full sm:w-[45%] md:w-[30%] lg:w-[27%] h-72 p-6 rounded-md">
            <Image src={mailicon} alt="Mail Icon" />
            <p className="mb-4 mt-4">Email Address</p>
            <h5 className="font-medium leading-10">info@sologixenergy.in</h5>
            <h5 className="font-medium">amit@sologixenergy.in</h5>
            <h5 className="font-medium">anil@sologixenergy.in</h5>
          </div>
          {/* Address Box */}
          <div className="bg-[#23bae4] text-white w-full sm:w-[45%] md:w-[30%] lg:w-[27%] h-72 p-6 rounded-md">
            <Image src={locationicon} alt="Location Icon" />
            <p className="mb-4 mt-4">Office Address</p>
            <p className="font-medium">
              STPI Building, Plot -8, Namkum Industrial Area, Ranchi, Jharkhand - 834010
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
