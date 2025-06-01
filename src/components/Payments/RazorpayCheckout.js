"use client";
import { useState, useEffect } from 'react';
import { Button } from "@nextui-org/react";
import { API } from '@/utils';
import { toast } from 'sonner';
import { useSelector } from 'react-redux';

const RazorpayCheckout = ({ 
  amount, 
  productData, 
  userId, 
  onPaymentSuccess, 
  onPaymentError,
  buttonText = "Pay Now",
  userDetails = {}
}) => {
  const [loading, setLoading] = useState(false);
  const session = useSelector((state) => state.session);
  const accessToken = session?.userSession?.token || '';

  // Load Razorpay script
  useEffect(() => {
    const loadRazorpayScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    loadRazorpayScript();
  }, []);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const userSession = localStorage.getItem("userSession");
      const parsedSession = userSession ? JSON.parse(userSession) : null;
      const accessToken = parsedSession?.access_token;
      // Create order
      const orderResponse  = await API.post("/payments/create-order", {
        amount: Math.ceil(amount) * 100, // Convert to paise
        currency: "INR",
      }, {
        headers: {
          "authorization": `token ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!orderResponse.data.success) {
        toast.error("Could not create order. Please try again.");
        setLoading(false);
        return;
      }

      // Configure Razorpay options
      const options = {
        key: "rzp_live_SkcgnoWr8UUe2U", // Razorpay Key ID
        amount: Math.ceil(amount) * 100,
        currency: "INR",
        name: "Sologix",
        description: "Solar Product Purchase",
        image: "", // Your logo URL
        order_id: orderResponse.data.orderId,
        handler: async function (response) {
          try {
            // Verify payment
            const verificationResponse = await API.post(
              "/payments/verify-payment",
              {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              }
            );

            if (verificationResponse.data.success) {
              // Payment successful
              toast.success("Payment successful!");
              
              // Create purchase record
              const purchaseData = {
                user: userId,
                productData: productData,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
                amount: amount
              };
              
              // You can add additional API call here to save the purchase
              // const purchaseResponse = await axios.post("https://sologix-web.onrender.com/v1/user/purchase", purchaseData);
              
              if (onPaymentSuccess) {
                onPaymentSuccess({
                  ...verificationResponse.data,
                  paymentDetails: response
                });
              }
            } else {
              throw new Error(verificationResponse.data.message || 'Payment verification failed');
            }
          } catch (error) {
            console.error("Payment verification error:", error);
            toast.error(error.message || "Payment verification failed. Please contact support.");
            if (onPaymentError) {
              onPaymentError(error);
            }
          }
        },
        prefill: {
          name: userDetails.name || "",
          email: userDetails.email || "",
          contact: userDetails.phone || "",
        },
        notes: {
          productId: productData.id || "",
          userId: userId || ""
        },
        theme: {
          color: "#00237D",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment initialization error:", error);
      toast.error("Failed to initialize payment. Please try again.");
      if (onPaymentError) {
        onPaymentError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      className="w-full bg-[#00237D] text-white rounded-full mt-5"
      size="lg"
      onClick={handlePayment}
      isLoading={loading}
      disabled={loading}
    >
      {loading ? "Processing..." : buttonText}
    </Button>
  );
};

export default RazorpayCheckout;
