import Breadcrumb from "@/components/section/Common/Breadcrumb";
import ContactSection from "@/components/section/HomePage/ContactSection";
import AnimatedLines from "@/components/ui/AnimatedLines";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div>
      <div className=" text-white bg-[#070707] rounded h-full py-36 flex items-center justify-center ">
        <Breadcrumb />
      </div>
       <AnimatedLines />
      <ContactSection />
    </div>
  );
};

export default Contact;
