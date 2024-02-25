import { useLocation } from "react-router-dom";
import GlobalSidebarItems from "./GlobalSidebarItems";
import {
  MdSpaceDashboard,
  MdSettings,
  MdLogout,
  MdDarkMode,
  MdAccountBalanceWallet
} from "react-icons/md";
import { FaSearchDollar } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";


const GlobalSidebar = () => {
  const navMainItems = [
    {
      title: "Dashboard",
      link: "/home/dashboard",
      icon: <MdSpaceDashboard size={22} />,
    },
    {
      title: "Finances",
      link: "/home/finances",
      icon: <FaSearchDollar size={22} />,
    },
    {
      title: "Budget",
      link: "/home/settings",
      icon: <MdAccountBalanceWallet size={22} />,
    },
    {
      title: "Reports",
      link: "/home/settings",
      icon: <BiSolidReport size={22} />,
    },
    {
      title: "Settings",
      link: "/home/settings",
      icon: <MdSettings size={22} />,
    },
  ];

  const navSecItems = [
    {
      title: "Logout",
      link: "/",
      icon: <MdLogout size={20} />,
    },
    // {
    //   title: "Dark mode",
    //   link: "/",
    //   icon: <MdDarkMode size={25} />,
    // },
  ];
  const location = useLocation();
  console.log(location);

  return (
    <div className="inset-0 flex flex-col h-[85%] shadow-2xl bg-white rounded-r-xl">
      <section className="flex flex-col gap-5 h-screen m-3">
        {navMainItems.map((curr) => (
          <GlobalSidebarItems key={curr.link} {...curr} location={location} />
        ))}

        <div className="mt-auto w-full flex flex-col gap-3">
          <hr className="h-px bg-gray-200 rounded-xl" />
          {navSecItems.map((curr) => (
            <GlobalSidebarItems key={curr.link} {...curr} location={location} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default GlobalSidebar;
