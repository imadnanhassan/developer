import {
  LayoutDashboardIcon,
  BookOpenText,
  UserCheck,
  Image,
  MessageSquareQuote,
  Star,
  Info,
  NotebookPen,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    name: "Overview",
    path: "/admin",
    icon: LayoutDashboardIcon,
  },
  {
    name: "Case Studies",
    path: "/admin/case-studies",
    icon: BookOpenText,
  },
  {
    name: "Clients",
    path: "/admin/clients",
    icon: UserCheck,
  },
  {
    name: "Logos",
    path: "/admin/logos",
    icon: Image,
  },
  {
    name: "Testimonials",
    path: "/admin/testimonials",
    icon: MessageSquareQuote,
  },
  {
    name: "Skills",
    path: "/admin/skills",
    icon: Star,
  },
  {
    name: "About",
    path: "/admin/about",
    icon: Info,
  },
  {
    name: "Blog",
    path: "/admin/blog",
    icon: NotebookPen,
  },
];

const AdminMenu = () => {
  const location = useLocation();

  return (
    <ul className="flex flex-col gap-2">
      {menuItems.map((item, index) => {
        const isActive = location.pathname === item.path;

        return (
          <li key={index} id="sidebar">
            <Link
              to={item.path}
              className={`flex items-center gap-3 mt-1 px-4 py-2 group relative border-l-4 transition-all duration-300 ease-in-out hover:border-[#c9f31c] hover:rounded-t-lg hover:rounded-b-lg 
              ${
                isActive
                  ? "border-[#c9f31c] bg-[#1a1a1a] rounded-t-lg rounded-b-lg"
                  : "border-transparent"
              }`}
            >
              <item.icon
                className={`transition-colors duration-300 ${
                  isActive ? "text-[#c9f31c]" : "group-hover:text-[#c9f31c]"
                }`}
              />
              <span
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#c9f31c]"
                    : "text-uxSecoundryBg2 dark:text-white group-hover:text-uxBgPurpole"
                }`}
              >
                {item.name}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default AdminMenu;
