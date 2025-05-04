import { images } from "@/assets/images/images";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function PortfolioSection() {
  return <HeroParallax products={products} />;
}
// eslint-disable-next-line react-refresh/only-export-components
export const products = [
  {
    title: "Popular Car Wash Detailing",
    link: "https://popularcarwashdetailing.com/",
    thumbnail: images.popularCarWash,
  },
  {
    title: "Beat Retreat",
    link: "https://beatretreatdr.com/",
    thumbnail: images.beatRetreat,
  },
  {
    title: "Hustle Hopper",
    link: "https://hustlehopper.com/",
    thumbnail: images.hustleHopper,
  },
  {
    title: "Iwt Canada",
    link: "https://iwtcanada.com/",
    thumbnail: images.iwtCanada,
  },
  {
    title: "Popular Car Wash Detailing",
    link: "https://popularcarwashdetailing.com/",
    thumbnail: images.popularCarWash,
  },
  {
    title: "Trust and fast Consultancy",
    link: "https://tfcedubd.com/",
    thumbnail: images.tfceduBD,
  },
  {
    title: "Moving Company.com.bd",
    link: "https://movingcompany.com.bd/",
    thumbnail: images.movingcompany,
  },
  {
    title: "Beauty Adore",
    link: "https://beautyadore.xyz/",
    thumbnail: images.beautyadore,

  },
  {
    title: "Umamas",
    link: "https://umamas.com/",
    thumbnail: images.umamas,
  },
];
