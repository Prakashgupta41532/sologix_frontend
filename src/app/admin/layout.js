"use client";
import { loadSessionFromLocal } from "@/redux/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/router";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const { isLoading, userSession } = useSelector((state) => state.session);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(
  //     loadSessionFromLocal(
  //       localStorage.getItem("userSession")
  //         ? JSON.parse(localStorage.getItem("userSession"))
  //         : ""
  //     )
  //   );

  //   if (!userSession) {
  //     router.replace("/");
  //   }
  // }, []);

  const isActive = (path) => false;

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className=" border-r w-full md:w-64 min-h-screen p-4">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <ul className="flex flex-col gap-6 items-center justify-center">
          <li className={`mb-4 ${isActive("/users") ? "text-gray-400" : ""}`}>
            <Link
              href="/admin/users"
              className="border py-2 px-20 hover:bg-[#2D479C] hover:text-white rounded-md"
            >
              <span className="">Users</span>
            </Link>
          </li>
          <li
            className={`mb-4 ${isActive("/settings") ? "text-gray-400" : ""}`}
          >
            <Link
              href="/admin/adduser"
              className="border py-2 px-[66px] hover:bg-[#2D479C] hover:text-white rounded-md"
            >
              <span>Add User</span>
            </Link>
          </li>
          <li
            className={`mb-4 ${isActive("/settings") ? "text-gray-400" : ""}`}
          >
            <Link
              href="/admin/manageproject"
              className="border py-2 px-[66px] hover:bg-[#2D479C] hover:text-white rounded-md"
            >
              <span>Projects</span>
            </Link>
          </li>
          <li
            className={`mb-4 ${isActive("/settings") ? "text-gray-400" : ""}`}
          >
            <Link
              href="/admin/become-partner"
              className="border py-2 px-11 hover:bg-[#2D479C] hover:text-white rounded-md"
            >
              <span>Partner Request</span>
            </Link>
          </li>
          <li
            className={`mb-4 ${isActive("/settings") ? "text-gray-400" : ""}`}
          >
            <Link
              href="/admin/report"
              className="border py-2 px-[75px] hover:bg-[#2D479C] hover:text-white rounded-md"
            >
              <span>Report</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        {/*  <div className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
         {router.pathname === "/"
              ? "Dashboard"
              : router.pathname.substring(1).charAt(0).toUpperCase() +
                router.pathname.substring(1)}
          </h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div> */}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
