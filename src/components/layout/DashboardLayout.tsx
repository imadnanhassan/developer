import React from "react";
import { Outlet } from "react-router-dom";
import AdminSideBar from "../ui/AdminSideBar";
import AdminHeader from "../section/Common/AdminHeader";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex max-h-screen overflow-hidden">
      <AdminSideBar />
      <main className="min-h-[calc(100vh-140px)] w-full overflow-y-auto bg-[#F2F6F9] p-4 lg:p-8">
        {/* Header component */}
        <AdminHeader />
        <Outlet />
        {/* Footer */}
        AdminFooter
      </main>
    </div>
  );
};

export default DashboardLayout;
