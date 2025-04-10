import AnimatedLines from "@/components/ui/AnimatedLines";
import HeroSection from "@/components/section/HomePage/HeroSection";
import Section from "@/components/ui/Section";
import { useState } from "react";
import AboutSection from "@/components/section/HomePage/AboutSection";
import { PortfolioSection } from "@/components/section/HomePage/PortfolioSection";
import ExperienceSection from "@/components/section/HomePage/ExperienceSection";

const Home: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>("bg-black");

  return (
    <>
      <div className={`transition-colors duration-700 ${bgColor}`}>
        <AnimatedLines />

        <Section id="home" color="bg-black" onInView={setBgColor}>
          <HeroSection />
        </Section>

        <Section id="about" color="bg-black" onInView={setBgColor}>
          <AboutSection />
        </Section>
        <Section id="portfolio" color="bg-black" onInView={setBgColor}>
          <PortfolioSection />
        </Section>
        <Section id="experience" color="bg-black" onInView={setBgColor}>
          <ExperienceSection />
        </Section>

        <Section id="services" color="bg-emerald-900" onInView={setBgColor}>
          <h1 className="text-white text-5xl">Services</h1>
        </Section>

        <Section id="pricing" color="bg-black" onInView={setBgColor}>
          <h1 className="text-white text-5xl">Pricing</h1>
        </Section>

        <Section id="testimonials" color="bg-black" onInView={setBgColor}>
          <h1 className="text-white text-5xl">Testimonials</h1>
        </Section>
        <Section id="blog" color="bg-black" onInView={setBgColor}>
          <h1 className="text-white text-5xl">Blog</h1>
        </Section>

        <Section id="contact" color="bg-pink-800" onInView={setBgColor}>
          <h1 className="text-white text-5xl">Contact Us</h1>
        </Section>
      </div>
    </>
  );
};

export default Home;
