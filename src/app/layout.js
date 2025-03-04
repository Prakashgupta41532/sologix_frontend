"use client";

import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { Toaster } from "sonner";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider store={store}>
          <NextUIProvider>
            <Header />
            {children}
            <Footer />
          </NextUIProvider>
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
