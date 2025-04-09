import AnimatedLines from "@/components/ui/AnimatedLines";
import HeroSection from "@/components/section/HomePage/HeroSection";
import Section from "@/components/ui/Section";
import { useState } from "react";
import AboutSection from "@/components/section/HomePage/AboutSection";
import { HeroParallaxDemo } from "@/components/section/HomePage/HeroParallaxDemo";

const Home: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>("bg-black");

  return (
    <>
      <div className={`transition-colors duration-700 ${bgColor}`}>
        <AnimatedLines />

        <Section id="home" color="bg-black" onInView={setBgColor}>
          <HeroSection />
        </Section>

        <Section id="about" color="bg-purple-900" onInView={setBgColor}>
          <AboutSection />
        </Section>

        <Section id="services" color="bg-black" onInView={setBgColor}>
        <HeroParallaxDemo />
        </Section>

        <Section id="contact" color="bg-pink-800" onInView={setBgColor}>
          <h1 className="text-white text-5xl">Contact Us</h1>
        </Section>
      </div>
    </>
  );
};

export default Home;
