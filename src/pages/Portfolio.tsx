import ProjectShowcase from "@/components/section/CaseStudies/ProjectShowcase";
import Breadcrumb from "@/components/section/Common/Breadcrumb";
import AnimatedLines from "@/components/ui/AnimatedLines";
import React from "react";

const Portfolio: React.FC = () => {
  return (
    <div>
      <div className=" text-white bg-[#070707] rounded h-full py-36 flex items-center justify-center ">
        <Breadcrumb />
      </div>
      <AnimatedLines />
      <div className="flex items-center justify-center ">
        <ProjectShowcase />
      </div>
    </div>
  );
};

export default Portfolio;
