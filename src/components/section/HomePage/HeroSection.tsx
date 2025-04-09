import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CounterProps {
  target: number;
}

const Counter = ({ target }: CounterProps) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < target) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return target;
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, [target]);

  return <motion.span>{count}</motion.span>;
};

const HeroSection: React.FC = () => {
  return (
    <>
      <BackgroundBeamsWithCollision className="bg-transparent h-full adnan_container px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-16">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full gap-10">
          {/* Left Section */}
          <div className="flex-1 text-center lg:text-left space-y-6 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Hello, I'm <br />
              <span className="text-[#C4F000]">Adnan Hassan</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
              SEO | MERN | WordPress{" "}
              <span className="text-[#C4F000]">Developer</span>
            </h2>
            <p className="text-gray-400 max-w-md mx-auto lg:mx-0">
              I am a skilled developer with expertise in SEO, the MERN stack
              (MongoDB, Express.js, React, Node.js), and WordPress. I optimize
              websites for top search engine rankings, create dynamic web
              applications, and develop custom WordPress themes and plugins to
              deliver exceptional digital experiences tailored to your business
              needs.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <button className="bg-[#C4F000] text-black font-semibold py-3 px-6 rounded-full hover:bg-[#a3c900] transition">
                Hire Me
              </button>
              <button className="relative border border-[#C4F000] text-[#C4F000] font-semibold py-3 px-6 rounded-full hover:bg-[#C4F000] hover:text-black transition overflow-hidden group">
                <span className="relative z-10">Download Resume</span>
                <span className="absolute inset-0 border-2 border-transparent rounded-full group-hover:border-[#C4F000] animate-border-glow"></span>
              </button>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex-1 flex justify-center order-1 lg:order-2 relative bg-transparent">
            <div className="relative hidden sm:block w-[200px] md:w-[300px] lg:w-[400px] 2xl:w-[500px] h-[250px] md:h-[400px] lg:h-[500px] 2xl:h-[650px] rounded-b-[200px] overflow-hidden">
              <div className="absolute overflow-hidden">
                <img
                  src="https://codehaven.io/wp-content/uploads/2024/03/adnan-hassan.jpg"
                  alt="Adnan Hassan"
                  className="w-full h-full object-cover grayscale bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="flex-1 w-full flex justify-center lg:justify-end order-3 mt-8 lg:mt-0">
            <div className="mt-10 bg-neutral-900/80 text-center p-8 sm:p-12 md:p-14 lg:p-16 rounded-3xl space-y-8 text-lime-400 shadow-xl shadow-lime-400/20 hover:shadow-lime-400/30 transition-all duration-300">
              {/* Experience */}
              <div className="transform hover:scale-105 transition-transform duration-300">
                <p className="text-4xl font-bold">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    <Counter target={4} />+
                  </motion.div>
                </p>
                <p className="text-sm text-neutral-300 mt-2">
                  Years Of Experience
                </p>
              </div>

              {/* Projects */}
              <div className="transform hover:scale-105 transition-transform duration-300">
                <p className="text-4xl font-bold">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    <Counter target={40} />+
                  </motion.div>
                </p>
                <p className="text-sm text-neutral-300 mt-2">
                  Projects Completed
                </p>
              </div>

              {/* Client Satisfaction */}
              <div className="transform hover:scale-105 transition-transform duration-300">
                <p className="text-4xl font-bold">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    <Counter target={98} />%
                  </motion.div>
                </p>
                <p className="text-sm text-neutral-300 mt-2">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
};

export default HeroSection;
