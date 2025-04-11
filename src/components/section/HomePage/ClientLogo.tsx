import { HoverEffect } from "@/components/ui/card-hover-effect";
import React from "react";

const projects = [
  {
    image:
      "https://codehaven.io/wp-content/uploads/2025/04/DESIGN-SQUAD-SOURCING-LOGO-WHITE-300x173.png",
    link: "https://stripe.com",
   
  },
  {
    image: "https://codehaven.io/wp-content/uploads/2024/05/pcwd-300x98.webp",
    link: "https://netflix.com",
  },
  {
    image: "https://codehaven.io/wp-content/uploads/2024/03/healthinfobd-1.png",
    link: "https://google.com",
  },
  {
    image: "https://codehaven.io/wp-content/uploads/2024/03/sam-300x83.png",
    link: "https://meta.com",
  },
  {
    image: "https://codehaven.io/wp-content/uploads/2024/03/sam-300x83.png",
    link: "https://amazon.com",
  },
  {
    image:
      "https://codehaven.io/wp-content/uploads/2025/04/logo-08-300x103.png",
    link: "https://microsoft.com",
  },
];
const ClientLogo: React.FC = () => {
  return (
    <div className="bg-[#0d0d0d]">
      <div className="adnan_container mx-auto  flex flex-col items-center justify-center gap-10 !py-40">
        <div className="max-w-6xl mx-auto text-center ">
          <p className="text-sm uppercase tracking-widest text-neutral-400">
            Clients Testimonials
          </p>
          <h2 className="text-3xl text-white md:text-5xl font-bold mt-2">
            I’ve 350+ Clients <br />
            <span className="text-[#C9F31C]">Feedback</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  );
};

export default ClientLogo;
