"use client";
import { API } from "@/utils";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Table } from "antd";
import moment from "moment";
const BecomePartner = () => {
  const [partner, setPartner] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
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
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Adhar",
      dataIndex: "adhar",
      key: "adhar",
    },
    {
      title: "Pan",
      dataIndex: "pan",
      key: "pan",
    },
    {
      title: "Intrested In",
      dataIndex: "intrestedIn",
      key: "intrestedIn",
    },
    {
      title: "Date",
      dataIndex: "created_at",
      render: (text) => <span>{moment(text).format("DD-MM-YYYY")}</span>,
    },
  ];

  const init = async () => {
    API.get("/admin/partnership-requests")
      .then((response) => {
        setPartner(response.data);
      })
      .catch((error) => {
        toast.error("Failed to fetch users");
      });
  };

  return (
    <div>
      <Table dataSource={partner} columns={columns} />;
    </div>
  );
};

export default BecomePartner;
