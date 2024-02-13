import { NavLink } from "react-router-dom";
import GlobalSidebarItems from "../GlobalSidebarItems";
import {
  MdOutlineSpaceDashboard,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { FaSearchDollar } from "react-icons/fa";

const GlobalSidebar = () => {
  const navItems = [
    {
      title: "Dashboard",
      link: "/home/dashboard",
      icon: <MdOutlineSpaceDashboard size={25} />,
    },
    {
      title: "Finances",
      link: "/home/finances",
      icon: <FaSearchDollar size={25}  />,
    },
    {
      title: "Settings",
      link: "/home/settings",
      icon: <MdOutlineSettings size={25} />,
    },
  ];

  return (
    <div className="fixed flex flex-col items-center w-64 h-screen shadow-lg">
      <div className="flex flex-col justify-center items-center h-screen w-full py-10">
        {navItems.map((curr) => (
          <GlobalSidebarItems {...curr} />
        ))}
        <div className="mb-10 mt-auto flex gap-5">
          <MdOutlineLogout size={25} className="text-emerald-800" />
          <NavLink to="/" className="text-emerald-800 w-20">
            Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default GlobalSidebar;
