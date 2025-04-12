import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "MERN DEVELOPMENT",
    description:
      "I develop dynamic, scalable web applications using MongoDB, Express.js, React, and Node.js. With clean architecture, reusable components, and strong backend logic, I create powerful systems that handle real-world data and user flows like a champ.",
    skills: ["React Js", "Next Js", "Node, Express Js"],
  },
  {
    title: "WORDPRESS DEVELOPMENT",
    description:
      "I build custom WordPress websites tailored to specific business needs — optimized for speed, mobile responsiveness, and SEO. From theme customization to plugin configuration and performance tuning, I deliver solutions that empower clients to manage their content with confidence and clarity.",
    skills: ["Theme Customize", "Development", "UI & UX Design"],
  },
  {
    title: "SEARCH ENGINE OPTIMIZATION",
    description:
      "I optimize Wix and Webflow sites for search engines, tackling meta structure, speed improvements, heading hierarchy, and on-page strategies. Even with visual builders, I apply solid SEO foundations that improve visibility without compromising design.",
    skills: ["Technical SEO", "On-Page", "Link Building"],
  },
];
const SServices = () => {
  return (
    <section className="w-full bg-[#0D0D0D] text-white py-16 px-4">
      <div className="adnan_container mx-auto">
        <h3 className="text-[#C9F31C] font-semibold text-sm mb-2">
          * MY EXPERIENCE RESUME
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          MY SERVICES AREA
        </h1>

        <div className="space-y-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col md:flex-row justify-between items-start border-t border-gray-700 pt-8"
            >
              {/* Icon + Title */}
              <div className="flex-1 flex items-center mb-4 md:mb-0">
                <div className="text-lg flex items-center font-bold tracking-wide mb-2">
                  <span className=" flex items-center w-20 h-20  rounded-full mr-2">
                    <img
                      src="https://codehaven.io/wp-content/uploads/2023/11/service-icon-1.png"
                      alt=""
                    />
                  </span>
                  <h4>{service.title}</h4>
                </div>
              </div>

              {/* Description */}
              <div className="flex-1 items-center border-l border-[#C9F31C] pl-6 text-gray-300">
                {service.description}
              </div>

              {/* Skills + Icon */}
              <div className="flex flex-col items-start gap-3 mt-6 md:mt-0">
                {service.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[#C9F31C] text-sm flex items-center gap-2"
                  >
                    <span className="text-xl leading-none">✳</span> {skill}
                  </span>
                ))}
                <div
                  className="mt-4 p-2 bg-white text-black hover:rotate-45 transition-transform duration-300 cursor-pointer"
                  title="View Project"
                >
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SServices;
