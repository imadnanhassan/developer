import Breadcrumb from "@/components/section/Common/Breadcrumb";
import AnimatedLines from "@/components/ui/AnimatedLines";

const About: React.FC = () => {
  return (
    <>
      <div>
        <div className=" text-white bg-[#070707] rounded h-full py-36 flex items-center justify-center ">
          <Breadcrumb />
        </div>
        <AnimatedLines />
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
        </div>
      </div>
    </>
  );
};

export default About;
