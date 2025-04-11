"use client";

import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import AnimatedLines from "@/components/ui/AnimatedLines";
import Section from "@/components/ui/Section";
import HeroSection from "@/components/section/HomePage/HeroSection";
import AboutSection from "@/components/section/HomePage/AboutSection";
import { PortfolioSection } from "@/components/section/HomePage/PortfolioSection";
import ExperienceSection from "@/components/section/HomePage/ExperienceSection";
import { ServicesSection } from "@/components/section/HomePage/ServiceSection";
import { SkillSection } from "@/components/section/HomePage/SkillSection";
import PricingSection from "@/components/section/HomePage/PricingSection";
import Testimonials from "@/components/section/HomePage/Testimonials";
import ClientLogo from "@/components/section/HomePage/ClientLogo";
import ContactSection from "@/components/section/HomePage/ContactSection";

const Home: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>("bg-black");

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5, 
      easing: (t) => t, 
      touchMultiplier: 1.5,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
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
        <ServicesSection />
      </Section>

      <Section id="skill" color="bg-black" onInView={setBgColor}>
        <SkillSection />
      </Section>

      <Section id="pricing" color="bg-black" onInView={setBgColor}>
        <PricingSection />
      </Section>

      <Section id="testimonials" color="bg-black" onInView={setBgColor}>
        <Testimonials />
      </Section>

      <Section id="blog" color="bg-black" onInView={setBgColor}>
        <ClientLogo />
      </Section>

      <Section id="contact" color="bg-pink-800" onInView={setBgColor}>
        <ContactSection />
      </Section>
    </div>
  );
};

export default Home;
