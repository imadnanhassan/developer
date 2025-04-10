import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Experience {
  title: string;
  company: string;
  duration: string;
  link: string;
  logo?: string;
  themeColor?: string;
}

const experiences: Experience[] = [
  {
    duration: "2024 - PRESENT",
    title: "FULL STACK DEVELOPER",
    company: "Palmwebmiami LLC",
    link: "https://palmwebmiami.com",
    logo: "https://palmwebmiami.com/wp-content/uploads/2024/06/logo-light.png",
    themeColor: "#C9F31C",
  },
  {
    title: "FRONTEND DEVELOPER",
    company: "Classic IT",
    duration: "2024 (JAN–MAY)",
    logo: "https://palmwebmiami.com/wp-content/uploads/2024/06/logo-light.png",
    link: "#",
    themeColor: "#00D1FF",
  },
  {
    title: "SEO EXPERT AND WEB DEVELOPER",
    company: "Packnshift",
    duration: "2023 (FEB–DEC)",
    logo: "https://palmwebmiami.com/wp-content/uploads/2024/06/logo-light.png",
    link: "#",
    themeColor: "#C9F31C",
  },
  {
    title: "SEARCH ENGINE OPTIMIZER",
    company: "HealthinfoBD",
    duration: "2021 - 2022",
    logo: "https://palmwebmiami.com/wp-content/uploads/2024/06/logo-light.png",
    link: "#",
    themeColor: "#00D1FF",
  },
];

export function ExperienceCard() {
  return (
    <>
      <div className="inter-var grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {experiences.map((experience, index) => (
          <CardContainer key={index} className="md:w-[350px] sm:w[300px]  lg:w-full">
            <CardBody
              className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border"
              style={{
                background: `${experience.themeColor}10`,
                borderColor: experience.themeColor,
              }}
            >
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                📅 {experience.duration}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-sm max-w-sm mt-2 text-neutral-300"
              >
                {experience.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-sm max-w-sm mt-2 text-neutral-300"
              >
                {experience.company}
              </CardItem>

              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as={Link}
                  to={experience.link}
                  target="__blank"
                  className="px-2 py-2 rounded-full text-xs font-normal text-white bg-black hover:bg-[#C9F31C] hover:text-black transition-colors duration-200 ease-in-out"
                >
                  <ArrowUpRight />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}
