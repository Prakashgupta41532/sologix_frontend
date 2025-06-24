"use client";
import { API } from "@/utils";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { format } from "date-fns";
import { Spinner } from "@nextui-org/react";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        setLoading(true);
        // Get access token from localStorage
        const userSession = localStorage.getItem("userSession");
        const parsedSession = userSession ? JSON.parse(userSession) : null;
        const accessToken = parsedSession?.access_token;
        
        if (!accessToken) {
          toast.error("Please login to view payment history");
          return;
        }

        const response = await API.get("/payments/get-user-payments", {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.status === 200) {
          setPayments(response.data.payments || []);
        } else {
          toast.error("Failed to fetch payment history");
        }
      } catch (error) {
        console.error("Error fetching payment history:", error);
        toast.error("An error occurred while fetching payment history");
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentHistory();
  }, []);

  // Format date function
  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), "PPP");
    } catch (error) {
      return "Invalid date";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#00237D]">
          Payment History
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spinner size="lg" color="primary" />
          </div>
        ) : payments.length > 0 ? (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#00237D] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Payment ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Products
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {payments.map((payment, index) => (
                    <tr key={payment._id || index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatDate(payment.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {payment.razorpay_payment_id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {payment.razorpay_order_id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ₹{payment.amount_paid.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <ul className="list-disc list-inside">
                          {payment.productNames.map((product, idx) => (
                            <li key={idx}>{product}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">No Payment History</h2>
            <p className="text-gray-500">You haven't made any payments yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
