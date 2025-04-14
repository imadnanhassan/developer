import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/moving-border";
import TooltipWord from "@/components/ui/TooltipWord";
import StatsSection from "@/components/ui/StatsSection";
import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import { images } from "../../../assets/images/images";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const HeroSection: React.FC = () => {
  return (
    <>
      <BackgroundBeamsWithCollision className="bg-transparent w-full h-full overflow-hidden relative lg:pt-20">
        <div className="bg-transparent adnan_container mx-auto  ">
          <div className="flex flex-col items-center gap-5 lg:flex-row !py-20 ">
            <motion.div
              className="text-center lg:text-left flex-1 flex-wrap justify-center lg:justify-start gap-6 mt-10 lg:mt-0 w-full space-y-6"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
            >
              <div className="text-center lg:text-left flex-1 flex-wrap justify-center lg:justify-start gap-6 mt-10 lg:mt-0 w-full space-y-6 ">
                <div className="text-center lg:text-left space-y-0 leading-tight">
                  <p>
                    <TextReveal
                      text="Hello, I'm"
                      className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-500"
                    />
                  </p>
                  <p>
                    <TextReveal
                      text="Adnan Hassan"
                      className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#C4F000]"
                    />
                  </p>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-2xl font-semibold text-white flex flex-wrap gap-1">
                  <TooltipWord word="SEO" tooltip="SEO Expert" />
                  |
                  <TooltipWord word="MERN" tooltip="MERN Developer" />
                  |
                  <TooltipWord
                    word="WordPress"
                    tooltip="WordPress Specialist"
                  />
                </h2>

                <p>
                  <TextReveal
                    text="I am a skilled developer with expertise in SEO, the MERN stack (MongoDB, Express.js, React, Node.js), and WordPress. I optimize websites for top search engine rankings, create dynamic web applications, and develop custom WordPress themes and plugins to deliver exceptional digital experiences tailored to your business needs."
                    className="text-gray-400 max-w-md mx-auto lg:mx-0"
                  />
                </p>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <button className="bg-[#C4F000] text-black font-semibold py-3 px-6 rounded-full hover:bg-[#a3c900] transition">
                    Hire Me
                  </button>

                  <Button
                    borderRadius="1.75rem"
                    className="relative border bg-transparent border-[#C4F000] text-[#C4F000] font-semibold  rounded-full hover:bg-[#C4F000] hover:text-black transition overflow-hidden group"
                  >
                    Download Resume
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="flex-1 flex-wrap justify-center lg:justify-end gap-6 w-full max-w-3xl order-2 bg-transparent"
            >
              <div className="relative hidden sm:block w-[200px] md:w-[300px] lg:w-[400px] 2xl:w-[500px] h-[250px] md:h-[400px] lg:h-[500px] 2xl:h-[650px] rounded-b-[200px] overflow-hidden">
                <img
                  src={images.heroImage}
                  alt="Adnan Hassan"
                  className="w-full h-full object-cover grayscale bg-transparent"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="flex-1 w-full flex justify-center lg:justify-end order-3 mt-8 lg:mt-0"
            >
              <StatsSection />
            </motion.div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
};

export default HeroSection;
