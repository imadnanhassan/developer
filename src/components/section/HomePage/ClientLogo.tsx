import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useGetClientLogosQuery } from "@/redux/features/ClientLogo";
import React from "react";

const ClientLogo: React.FC = () => {
  const { data: clientLogo } = useGetClientLogosQuery(undefined);
  console.log(clientLogo, "clientLogo");
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
          <HoverEffect items={clientLogo || []} />
        </div>
      </div>
    </div>
  );
};

export default ClientLogo;
