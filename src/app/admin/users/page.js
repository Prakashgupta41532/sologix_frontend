"use client";
import { API } from "@/utils";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Table } from "antd";
import moment from "moment";
const Users = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const columns = [
    // {
    //   title: "Name",
    //   dataIndex: "name",
    //   key: "name",
    // },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      render: (text) => <span>{moment(text).format('DD-MM-YYYY')}</span>,
    },
  ];

  const init = async () => {
    API.get("/admin/users")
      .then((response) => {
        setAllUsers(response.data);
      })
      .catch((error) => {
        toast.error("Failed to fetch users");
      });
  };

  return (
    <div>
      <Table dataSource={allUsers} columns={columns} />;
    </div>
  );
};

export default Users;
