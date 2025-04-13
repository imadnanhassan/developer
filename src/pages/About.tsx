import Breadcrumb from "@/components/section/Common/Breadcrumb";
import ExperienceSection from "@/components/section/HomePage/ExperienceSection";
import { SkillSection } from "@/components/section/HomePage/SkillSection";
import ServiceHero from "@/components/section/ServicePage/ServiceHero";
import AnimatedLines from "@/components/ui/AnimatedLines";

const About: React.FC = () => {
  return (
    <>
      <div>
        <div className=" text-white bg-[#070707] rounded h-full py-36 flex items-center justify-center ">
          <Breadcrumb />
        </div>
        <AnimatedLines />
        <div >
          <ServiceHero />
          <ExperienceSection />
           <SkillSection />
        </div>
      </div>
    </>
  );
};

export default About;
