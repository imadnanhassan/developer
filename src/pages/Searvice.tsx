import Breadcrumb from "@/components/section/Common/Breadcrumb";
import AnimatedLines from "@/components/ui/AnimatedLines";
import React from "react";

const Searvice:React.FC = () => {
  return (
    <div>
      <div className=" text-white bg-[#070707] rounded h-full py-36 flex items-center justify-center ">
        <Breadcrumb />
      </div>
      <AnimatedLines />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-white">Searvice</h1>
      </div>
    </div>
  );
};

export default Searvice;
