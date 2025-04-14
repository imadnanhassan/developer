import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <ul className="flex flex-col gap-2 ">
      {/* Overview */}
      <li id="sidebar">
        <Link
          to="/admin"
          className="flex items-center gap-3 mt-8 px-4 py-2 group relative border-l-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#c9f31c] hover:rounded-t-lg hover:rounded-b-lg"
        >
          <LayoutDashboardIcon className="transition-colors duration-300 group-hover:text-[#c9f31c]" />
          <span className="text-sm font-medium text-uxSecoundryBg2 dark:text-white transition-colors duration-300 group-hover:text-uxBgPurpole">
            Overview
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default AdminMenu;
