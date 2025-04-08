import {
  PuzzleIcon,
  CrownIcon,
  MenuIcon,
  CreditCardIcon,
  SmileIcon,
} from "lucide-react";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/service" },
  { name: "Case Study", href: "/case-study" },
];

export const mobileNavLinks = [
  { name: "Work", href: "/work", icon: <CreditCardIcon className="w-6 h-6" /> },
  {
    name: "Services",
    href: "/services",
    icon: <PuzzleIcon className="w-6 h-6" />,
  },
  { name: "Home", href: "/", icon: <SmileIcon className="w-8 h-8" /> },
  { name: "About", href: "/about", icon: <CrownIcon className="w-6 h-6" /> },
  { name: "Contact", href: "/contact", icon: <MenuIcon className="w-6 h-6" /> },
];
