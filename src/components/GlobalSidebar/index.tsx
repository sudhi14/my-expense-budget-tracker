import { NavLink } from "react-router-dom";
import GlobalSidebarItems from "../GlobalSidebarItems";
import {
  MdSpaceDashboard,
  MdSettings,
  MdLogout,
  MdSearch,
} from "react-icons/md";
import { FaSearchDollar } from "react-icons/fa";

const GlobalSidebar = () => {
  const navItems = [
    {
      title: "Dashboard",
      link: "/home/dashboard",
      icon: <MdSpaceDashboard size={25} />,
    },
    {
      title: "Finances",
      link: "/home/finances",
      icon: <FaSearchDollar size={25} />,
    },
    {
      title: "Settings",
      link: "/home/settings",
      icon: <MdSettings size={25} />,
    },
    {
      title: "Logout",
      link: "/",
      icon: <MdLogout size={25} />,
    },
  ];

  return (
    <div className="fixed inset-0 flex flex-col w-72 h-full shadow-lg bg-white rounded-xl">
      <header></header>

      <section className="flex flex-col gap-5 h-screen m-5">
        <div className="relative text-gray-500 block">
          <MdSearch
            className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-2"
            size="25"
          />

          <input
            placeholder="Search"
            className="form-input py-3 px-4 w-full block pl-14 focus:outline-none bg-gray-100 rounded-2xl placeholder-gray-500"
          />
        </div>

        {navItems.map((curr) => (
          <GlobalSidebarItems {...curr} />
        ))}
      </section>
    </div>
  );
};

export default GlobalSidebar;
