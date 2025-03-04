"use client";
import { API } from "@/utils";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Table } from "antd";
import moment from "moment";

const ManageProject = () => {
  const [manageproject, setManageproject] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const columns = [
    {
      title: "Full Name",
      dataIndex: "name",
      render: (text, record) => {
        return record?.user?.name;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text, record) => {
        return record?.user?.email;
      },
    },
    {
      title: "Project Info",
      dataIndex: "Project",
      key: "Project",
      render: (text, record) => {
        return record?.productData?.title;
      },
    },
    {
      title: "Mobile NO",
      dataIndex: "phone",
      key: "phone",
      render: (text, record) => {
        return record?.user?.phone;
      },
    },
    // {
    //   title: "Project Complete",
    //   dataIndex: "role",
    //   key: "role",
    // },
    {
      title: "Payment Status",
      key: "paymentStatus",
      render: (text, record) => {
        const installments = [
          record.instamentOne,
          record.instamentTwo,
          record.instamentThree,
          record.instamentFour,
        ];
        const totalInstallments = installments.length;
        const paidInstallments = installments.filter(inst => inst.status === 'paid').length;
        const paymentPercentage = (paidInstallments / totalInstallments) * 100;
  
        return paymentPercentage === 100
          ? "Completed"
          : `${paymentPercentage}% Paid`;
      },
    },
  ];

  const init = async () => {
    API.get("/admin/purchases")
      .then((response) => {
        console.log(response);
        setManageproject(response?.data);
      })
      .catch((error) => {
        toast.error("Failed to fetch users");
      });
  };

  return (
    <div>
      <Table dataSource={manageproject} columns={columns} />
    </div>
  );
};

export default ManageProject;
