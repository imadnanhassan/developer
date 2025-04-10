import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

const skills = [
  {
    name: "MongoDB",
    icon: "https://codehaven.io/wp-content/uploads/2024/03/mongodb.png",
    percent: 90,
  },
  {
    name: "React JS",
    icon: "https://codehaven.io/wp-content/uploads/2024/03/React-icon.svg_.png",
    percent: 90,
  },
  {
    name: "Next JS",
    icon: "https://codehaven.io/wp-content/uploads/2024/03/1684410508-image-7.png",
    percent: 85,
  },
  {
    name: "TypeScript",
    icon: "https://codehaven.io/wp-content/uploads/2024/03/1684410508-image-7.png",
    percent: 88,
  },
  {
    name: "SEO",
    icon: "https://codehaven.io/wp-content/uploads/2024/03/5.png",
    percent: 95,
  },
  {
    name: "WordPress",
    icon: "https://codehaven.io/wp-content/uploads/2023/11/skill4.png",
    percent: 95,
  },
  {
    name: "Semrush",
    icon: "https://codehaven.io/wp-content/uploads/2024/03/4.png",
    percent: 62,
  },
  {
    name: "Local SEO",
    icon: "https://codehaven.io/wp-content/uploads/2024/03/7.png",
    percent: 94,
  },
];

export const SkillSection = () => {
  return (
    <>
      <AuroraBackground className="w-full">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
          <section className="bg-[#070707] rounded h-full  text-white py-40 px-4  ">
            <div className=" absolute inset-0 bg-gradient-radial from-[#c9f31c22] via-[#00000088] to-[#000000] opacity-20 pointer-events-none" />
            <div className="adnan_container mx-auto  flex flex-col lg:flex-row items-center gap-10">
              {/* Left Side Logo */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-left max-w-3xl mx-auto mb-16 z-10 relative"
              >
                <p className="text-sm text-neutral-400 uppercase font-semibold">
                  My Skills
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
                  Let’s Explore Popular <br />
                  <span className="text-[#C9F31C]">Skills & Experience</span>
                </h2>
                <p className="text-neutral-400 mt-4 text-base">
                  Clean code, creative ideas, and scalable solutions? That’s my
                  jam.
                </p>
                <button className="mt-6 bg-[#C9F31C] text-black px-6 py-3 font-medium rounded-md hover:scale-105 transition-all">
                  Learn More →
                </button>
              </motion.div>
              {/* Right Side Content */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl w-full mx-auto z-10 relative">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#1a1a1a] hover:shadow-lg hover:shadow-[#C9F31C]/20 rounded-xl py-6 px-8 flex flex-col items-center text-center transition-all"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-12 w-12 mb-4"
                    />
                    <h4 className="text-white font-semibold">{skill.name}</h4>
                    <p className="mt-2 text-[#C9F31C] font-bold text-lg">
                      {skill.percent}%
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </AuroraBackground>
    </>
  );
};
