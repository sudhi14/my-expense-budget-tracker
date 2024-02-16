import { useLocation } from "react-router-dom";
import GlobalSidebarItems from "../GlobalSidebarItems";
import {
  MdSpaceDashboard,
  MdSettings,
  MdLogout,
  MdSearch,
  MdLightMode,
  MdDarkMode,
} from "react-icons/md";
import { FaSearchDollar } from "react-icons/fa";
import { IoLogoBitcoin } from "react-icons/io";

const GlobalSidebar = () => {
  const navMainItems = [
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
  ];

  const navSecItems = [
    {
      title: "Logout",
      link: "/",
      icon: <MdLogout size={25} />,
    },
    {
      title: "Dark mode",
      link: "/",
      icon: <MdDarkMode size={25} />,
    },
  ];
  const location = useLocation();
  console.log(location);

  return (
    <div className="fixed inset-0 flex flex-col w-72 h-full shadow-lg bg-white rounded-xl">
      <header className="flex flex-row gap gap-5 items-center py-1 px-1 mb-7 mt-5 ml-3">
        <div className="p-2 rounded-xl bg-emerald-800">
          <IoLogoBitcoin size={40} className="text-white" />
        </div>
        <p className="text-xl text-gray-600">My Expense Tracker</p>
      </header>

      <section className="flex flex-col gap-3 h-screen m-4">
        <div className="relative text-gray-500 block">
          <MdSearch
            className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-2"
            size="25"
          />

          <input
            placeholder="Search"
            className="form-input py-3 px-2 w-full block pl-14 focus:outline-none bg-customGrayHighlight rounded-xl placeholder-customGrayFont"
          />
        </div>

        {navMainItems.map((curr) => (
          <GlobalSidebarItems key={curr.link} {...curr} location={location} />
        ))}

        <div className="mt-auto w-full flex flex-col gap-3">
          <hr className="h-px my-8 bg-gray-200 border-3 bg-customGrayHighlight rounded-xl translate-y-10" />
          {navSecItems.map((curr) => (
            <GlobalSidebarItems key={curr.link} {...curr} location={location} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default GlobalSidebar;
