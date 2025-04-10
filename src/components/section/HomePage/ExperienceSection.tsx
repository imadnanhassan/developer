import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ExperienceSection = () => {
  return (
    <section className="bg-[#070707] rounded h-screen  text-white py-20 px-4 md:px-10 lg:px-24">
      <div className="adnan_container mx-auto  flex flex-col lg:flex-row items-start gap-10">
        {/* Left Side Logo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex-shrink-0 mx-auto lg:mx-0"
        >
          <div className="w-80 h-80 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-[#2a2a2a]">
            <img
              src="https://codehaven.io/wp-content/uploads/2024/03/dev-hassan.png"
              alt="Logo"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="flex-1 w-full"
        >
          <motion.p className="text-gray-400 mb-2">My Resume</motion.p>
          <motion.h2 className="text-4xl font-bold mb-10">
            Real <span className="text-lime-400">Problem Solutions</span>{" "}
            Experience
          </motion.h2>
          <ExperienceCard />
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
