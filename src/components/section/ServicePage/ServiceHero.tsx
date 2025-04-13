import React from "react";
import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";

const ServiceHero: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-[#131313] text-white px-6 md:px-20 flex flex-col justify-center py-40">
      <div className="adnan_container mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#C9F31C] font-semibold"
          >
            <TextReveal text="* INTRODUCTION OF MYSELF" />
          </motion.p>
          <div className="text-md md:text-3xl font-bold leading-tight inline-block">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="leading-tight inline-block"
            >
              <TextReveal text="i’m a" className="leading-tight inline-block " />
              <TextReveal
                text="web developer"
                className="leading-tight inline-block text-[#C9F31C]"
              />
              <TextReveal text="and" className="leading-tight inline-block " />
              <TextReveal
                text="digital products"
                className="leading-tight inline-block text-[#C9F31C] "
              />{" "}
              <br />
              <TextReveal
                text="problem solutions"
                className="leading-tight inline-block "
              />
              <TextReveal
                text="to people through"
                className="leading-tight inline-block "
              />
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-400 max-w-xl"
          >
            <TextReveal text="I am a passionate SEO expert and MERN stack developer with a strong focus on delivering high-quality solutions. My expertise in WordPress development allows me to create dynamic and user-friendly websites that meet the needs of my clients. I am dedicated to staying up-to-date with the latest industry trends and technologies to provide the best possible service." />
          </motion.p>

          <div className="grid grid-cols-3 gap-4 mt-6 text-sm">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#C9F31C] font-semibold"
              >
                BORN IN
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                BANGLADESH
              </motion.p>
            </div>
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#C9F31C] font-semibold"
              >
                EXPERIENCE
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                26+ YEARS
              </motion.p>
            </div>
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#C9F31C] font-semibold"
              >
                DATE OF BIRTH
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                28 AUG 1998
              </motion.p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10] cursor-pointer">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="w-[130px] h-[130px] rounded-full bg-[#C9F31C] text-black flex items-center justify-center text-xs font-semibold border border-black"
            >
              <div className="w-[100px] h-[100px] relative flex items-center justify-center text-center font-medium">
                <span className="absolute text-[10px] uppercase tracking-[2px] w-[100px] h-[100px] text-black">
                  <svg viewBox="0 0 100 100">
                    <path
                      id="circlePath"
                      d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      fill="none"
                    />
                    <text fontSize="7" fill="#000">
                      <textPath href="#circlePath">
                        Branding and Development Code •
                      </textPath>
                    </text>
                  </svg>
                </span>
                <span className="text-sm z-10">PLAY</span>
              </div>
            </motion.div>
          </div>

          {/* Top two cards */}
          <div className="flex justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="lg:w-[200px] w-[150px] h-[280px]  rounded-[95px] border border-neutral-800 bg-black/20 flex flex-col justify-center items-center text-center">
                <p className="text-3xl font-semibold text-white">4+</p>
                <p className="text-sm text-white mt-2 leading-tight">
                  Years Of <br /> Experience
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="lg:w-[200px]  w-[150px] h-[280px] rounded-[95px] border border-neutral-800 bg-black/20 flex flex-col justify-center items-center text-center">
                <p className="text-3xl font-semibold text-white">40+</p>
                <p className="text-sm text-white mt-2 leading-tight">
                  Project <br /> Completed
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom card */}
          <div className="flex justify-center mt-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="lg:w-[200px]  w-[150px] h-[280px] rounded-[95px] border border-neutral-800 bg-black/20 flex flex-col justify-center items-center text-center">
                <p className="text-3xl font-semibold text-white">99%</p>
                <p className="text-sm text-white mt-2 leading-tight">
                  Client <br /> Satisfactions
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
