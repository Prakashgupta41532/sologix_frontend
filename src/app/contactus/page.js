"use client";
import React, { useState } from "react";
import Image from "next/image";
import contactus from "../../../public/contactus.png";
import { Button, Form, Input } from "antd";
import { Checkbox } from "antd";
import quete from "../../../public/quete.png";
import phoneicon from "../../../public/phone-icon.png";
import mailicon from "../../../public/pngwing 4.png";
import locationicon from "../../../public/pngwing 3.png";

const ContactUs = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   state: "",
  //   city: "",
  //   subject: "",
  //   message: "",
  //   interest: [],
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSelectChange = (value) => {
  //   setFormData({
  //     ...formData,
  //     state: value,
  //   });
  // };

  // const handleCheckboxChange = (e) => {
  //   const { value, checked } = e.target;
  //   setFormData((prevFormData) => {
  //     const updatedInterests = checked
  //       ? [...prevFormData.interest, value]
  //       : prevFormData.interest.filter((interest) => interest !== value);
  //     return { ...prevFormData, interest: updatedInterests };
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Submitting form data:", formData);
  //   API.post("/auth/contact-us", {
  //     name: formData.name,
  //     email: formData.email,
  //     phone: formData.phone,
  //     state: formData.state,
  //     city: formData.city,
  //     subject: formData.subject,
  //     message: formData.message,
  //     interest: formData.interest,
  //   })
  //     .then((response) => {
  //       // console.log("API response:", response);
  //       if (response.status === 200) {
  //         toast.success("Successfully submitted");
  //         setFormData({
  //           name: "",
  //           email: "",
  //           phone: "",
  //           state: "",
  //           city: "",
  //           subject: "",
  //           message: "",
  //           interest: [],
  //         });
  //       } else {
  //         toast.error(response?.data?.error);
  //       }
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error("API error:", error);
  //       toast.error("Data submission failed");
  //     });
  // };

  // const clients = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   adaptiveHeight: true,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };

  return (
    <div>
      <div>
        <Image src={contactus} />
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
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
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
            <div className="flex justify-end items-end">
              <Button type="primary">Send Message</Button>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex flex-col items-center justify-center mt-8 lg:mt-0">
            <Image src={quete} />
          </div>
        </div>
      </div>

      <div className="mt-14 p-8">
        <div className="flex flex-wrap items-center justify-center gap-5">
          <div className="bg-[#1d304f] text-white mb-8 w-full sm:w-[45%] md:w-[30%] lg:w-[27%] h-72 p-6 rounded-md">
            <span className="shadow-icon">
              <Image src={phoneicon} className="text-white" />
            </span>
            <a className="mb-6 inline-block" href="#">
              <i className="fas fa-envelope-open"></i>
            </a>
            <p className="mb-4">Phone Number</p>
            <h5 className="font-medium leading-10">+91 8287766474</h5>
            <h5 className="font-medium">+91 7838498478</h5>
          </div>
          <div className="bg-[#0a78bf] text-white mb-8 w-full sm:w-[45%] md:w-[30%] lg:w-[27%] h-72 p-6 rounded-md">
            <span className="shadow-icon">
              <Image src={mailicon} className="text-white" />
            </span>
            <a className="mb-6 inline-block" href="#">
              <i className="fas fa-envelope-open"></i>
            </a>
            <p className="mb-4">Email Address</p>
            <h5 className="font-medium leading-10">info@sologixenergy.in</h5>
            <h5 className="font-medium">amit@sologixenergy.in</h5>
            <h5 className="font-medium">anil@sologixenergy.in</h5>
          </div>
          <div className="bg-[#23bae4] text-white mb-8 w-full sm:w-[45%] md:w-[30%] lg:w-[27%] h-72 p-6 rounded-md">
            <span className="shadow-icon">
              <Image src={locationicon} className="" />
            </span>
            <a className="mb-6 inline-block" href="#">
              <i className="fas fa-envelope-open"></i>
            </a>
            <p className="mb-4">Office Adress</p>
            <p className="font-medium">
              STPI Building, Plot -8, Namkum Industrial Area, Ranchi, Jharkhand
              - 834010
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
