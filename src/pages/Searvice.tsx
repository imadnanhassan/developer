import Breadcrumb from "@/components/section/Common/Breadcrumb";
import ServiceHero from "@/components/section/ServicePage/ServiceHero";
import SServices from "@/components/section/ServicePage/SServices";
import AnimatedLines from "@/components/ui/AnimatedLines";
import React from "react";

const Searvice: React.FC = () => {
  return (
    <div>
      <div className=" text-white bg-[#070707] rounded h-full py-36 flex items-center justify-center ">
        <Breadcrumb />
      </div>
      <AnimatedLines />
      <ServiceHero />
      <SServices />
    </div>
  );
};

export default Searvice;
