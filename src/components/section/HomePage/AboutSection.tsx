import TextReveal from "@/components/ui/TextReveal";
import { Check, Mail, Phone } from "lucide-react";
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <div className=" text-white bg-[#070707] rounded h-full lg:py-40 py-32 flex items-center justify-center ">
      <div className="flex flex-col gap-5 md:flex-row items-center justify-between adnan_container mx-auto px-4 py-10">
        <div className="sm:w-[600px] md:w-[600px] lg:w-[750px] xl:w-[1400px] w-full">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
            About me
          </p>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight inline-block">
            <TextReveal
              text="Professional Problem"
              className="leading-tight inline-block"
            />
            <span className="inline-block text-[#C9F31C]">
              <TextReveal text="Solutions" className="inline-block" />
            </span>
            <TextReveal text="For Digital Products" className="inline-block" />
          </h1>

          <p>
            <TextReveal
              text="I am a passionate SEO expert and MERN stack developer with a strong focus on delivering high-quality solutions. My expertise in WordPress development allows me to create dynamic and user-friendly websites that meet the needs of my clients. I am dedicated to staying up-to-date with the latest industry trends and technologies to provide the best possible service."
              className="py-4 text-md text-gray-400 "
            />
          </p>

          {/* Contact Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Check className="text-[#C9F31C]" size={20} />
              <span>Search Engine optimizer</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-[#C9F31C]" size={20} />
              <span>WordPress Developer</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-[#C9F31C]" size={20} />
              <span>MERN Stack</span>
            </div>
          </div>

          <div className="bg-[#1F1F1F] rounded-2xl py-5 px-4 flex flex-col md:flex-row justify-between items-center gap-4 border border-[#C9F31C] max-w-150 ">
            <div className="flex items-center gap-2 w-full">
              <Mail
                className="bg-[#C9F31C] text-[#1F1F1F] rounded-full p-[10px]"
                size={40}
              />
              <div>
                <p className="text-sm text-gray-400">Email Us</p>
                <p className="text-white">dev.adnanhassan@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full">
              <Phone
                className="bg-[#C9F31C] text-[#1F1F1F] rounded-full p-[10px]"
                size={40}
              />
              <div>
                <p className="text-sm text-gray-400">Make A Call</p>
                <p className="text-white">+880 160 2121 038</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <div className=" bg-gray-800 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
            <img
              src="https://codehaven.io/wp-content/uploads/2024/03/adnan-seo-expert.jpg"
              alt=""
              className="w-full max-w-screen-md sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto object-cover rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
