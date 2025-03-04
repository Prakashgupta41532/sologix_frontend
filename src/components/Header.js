"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import img from "../../public/header_logo.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { loadSessionFromLocal, logout } from "@/redux/action";

import React, { useEffect, useState } from "react";
import { Dropdown, Space } from "antd";

const Header = () => {
  const { isLoading, userSession } = useSelector((state) => state.session);
  const dispatch = useDispatch();

  useEffect(() => {
    // Load local storage data into redux on page reload.
    dispatch(
      loadSessionFromLocal(
        localStorage.getItem("userSession")
          ? JSON.parse(localStorage.getItem("userSession"))
          : ""
      )
    );
  }, [dispatch]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/aboutus" },
    { name: "For Home", route: "/forhome" },
    { name: "For Business", route: "/solorbusiness" },
    { name: "Become a Partner", route: "/becomepartner" },
    { name: "Resource", route: "/resource" },
    { name: "Contact Us", route: "/contactus" },
    { name: "Login", route: "/login" },
  ];

  const dropdownItems =
    userSession?.role === "Customer"
      ? [
          {
            key: "1",
            label: <a href="/">Home</a>,
          },
          {
            key: "2",
            label: <button onClick={() => dispatch(logout())}>Logout</button>,
          },
        ]
      : [
          {
            key: "1",
            label: <a href="/admin">Admin</a>,
          },
          {
            key: "2",
            label: <button onClick={() => dispatch(logout())}>Logout</button>,
          },
        ];

  return (
    <div className="flex justify-between sticky top-0 z-50">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth={"full"}
      >
        <NavbarContent>
          <NavbarContent className="pr-3" justify="center">
            <NavbarBrand>
              <Link href="/" className="cursor-pointer">
                <Image
                  src={img}
                  alt="Logo"
                  className="h-auto"
                  style={{ maxWidth: "100px" }}
                />
              </Link>
            </NavbarBrand>
          </NavbarContent>
        </NavbarContent>

        <NavbarContent className="hidden xl:flex" justify="center">
          {menuItems.slice(0, -1).map((item) => (
            <NavbarItem key={item.route}>
              <Link
                href={item.route}
                className="hover:bg-[#00237D] px-6 py-1 rounded-md hover:text-white text-black font-medium"
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {!userSession ? (
          <NavbarContent className="hidden xl:flex" justify="end">
            <NavbarItem>
              <Button
                as={Link}
                href="/login"
                className="px-10 py-1 rounded-full bg-[#00237D] text-white font-semibold"
              >
                Login
              </Button>
            </NavbarItem>
          </NavbarContent>
        ) : (
          <Dropdown
            menu={{ items: dropdownItems }}
            className="cursor-pointer bg-[#00237D] rounded-full text-white font-semibold py-[6px] px-4"
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>Profile</Space>
            </a>
          </Dropdown>
        )}
        {userSession && (
          <div className="flex items-center cursor-pointer relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#00237D]"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </div>
          </div>
        )}
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={item.route}>
              <Link
                className="w-full"
                color={
                  index === 0
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={item.route}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        <NavbarContent className="lg:hidden right-4" justify="right">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default Header;
