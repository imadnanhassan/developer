import { images } from "@/assets/images/images";
import React from "react";
import { Link } from "react-router-dom";
import AdminMenu from "../section/Common/AdminMenu";

const AdminSideBar: React.FC = () => {
  return (
    <div className="bg-[#0d0d0d] h-screen lg:block hidden bg-uxBgMain text-white w-[300px]">
      <div className="py-4 flex items-center justify-center">
        <Link to={"/admin"}>
          <img src={images.logo} alt="Othoba Logo" className="h-full w-[150px]" />
        </Link>
      </div>
      <div>
        <AdminMenu />
      </div>
    </div>
  );
};

export default AdminSideBar;
