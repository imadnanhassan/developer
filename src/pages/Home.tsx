import AnimatedLines from "@/components/ui/AnimatedLines";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import HeroSection from "@/components/ui/HeroSection";
import Section from "@/components/ui/Section";
import { useState } from "react";

export default function Home() {
  const [bgColor, setBgColor] = useState("bg-black");

  return (
    <>
      <div className={`transition-colors duration-700 ${bgColor}`}>
        <AnimatedLines />

        <Section id="home" color="bg-black" onInView={setBgColor}>
          <HeroSection />
        </Section>

        <Section id="about" color="bg-purple-900" onInView={setBgColor}>
          <h1 className="text-white text-5xl">About Us</h1>
        </Section>

        <Section id="services" color="bg-emerald-900" onInView={setBgColor}>
          <h1 className="text-white text-5xl">Our Services</h1>
        </Section>

        <Section id="contact" color="bg-pink-800" onInView={setBgColor}>
          <h1 className="text-white text-5xl">Contact Us</h1>
        </Section>
      </div>
    </>
  );
}
