"use client";
import React from "react";
import { API } from "@/utils"; // Make sure this utility function is properly set up
import { Button, Form, Input, Select, message } from "antd";
import axios from "axios";
import { toast } from "sonner";

const AddUser = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      console.log("Form Values:", values); // Log form values to verify data

      const { name, email, phone, password, role } = values;

      const response = await API.post("/admin/users", {
        name,
        email,
        phone,
        password,
        role,
      });
      if (response.status == 200) {
        toast.success("User added successfully!");
      } else {
        toast.error(response?.data?.error);
      }

      form.resetFields();
    } catch (error) {
      console.error("API Error:", error.response || error.message); // Log error details
      message.error("Failed to add user. Please try again.");
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <Form
        form={form}
        name="addUser"
        layout="vertical"
        autoComplete="off"
        className="w-2/4 border p-5 rounded-md px-10"
        onFinish={handleSubmit} // Handle form submission
      >
        <div>
          <h1 className="text-center font-bold text-2xl my-5">
            Add Admin /Team
          </h1>
          <Form.Item
            name="name"
            label="UserName"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
            className="font-bold"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "Please enter a valid email address!",
              },
            ]}
            className="font-bold"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
            className="font-bold"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Create Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            className="font-bold"
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role"
            rules={[
              {
                required: true,
                message: "Please select a role!",
              },
            ]}
            className="font-bold"
          >
            <Select
              style={{
                width: 120,
              }}
              options={[
                {
                  value: "Customer",
                  label: "Customer",
                },
                {
                  value: "Admin",
                  label: "Admin",
                },
              ]}
            />
          </Form.Item>
          <Form.Item className="flex items-center justify-center">
            <Button
              htmlType="submit"
              className="px-8 py-1 bg-blue-600 text-white"
            >
              Add
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default AddUser;
