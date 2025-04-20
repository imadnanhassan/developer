import React from "react";
import { Outlet } from "react-router-dom";
import AdminSideBar from "../ui/AdminSideBar";
import AdminHeader from "../section/Common/AdminHeader";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSideBar />

      <main className="flex flex-col w-full bg-[#F2F6F9]">
        <AdminHeader />

        {/* Content area with grow */}
        <div className="flex-grow overflow-y-auto">
          <Outlet />
        </div>

        {/* Sticky Footer at Bottom */}
        <footer className="h-16 flex justify-center items-center bg-gray-200 text-gray-700 text-sm font-semibold">
          &copy; {new Date().getFullYear()} Adnan Hassan. All rights
          reserved.
        </footer>
      </main>
    </div>
  );
};

export default DashboardLayout;
