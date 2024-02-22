import { useLocation } from "react-router-dom";
import GlobalSidebarItems from "./GlobalSidebarItems";
import {
  MdSpaceDashboard,
  MdSettings,
  MdLogout,
  MdDarkMode,
} from "react-icons/md";
import { FaSearchDollar } from "react-icons/fa";

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
    <div className="inset-0 flex flex-col w-64 h-full shadow-lg  bg-customBgAccentss">
      {/* <header className="flex flex-row gap gap-5 items-center py-1 px-1 mb-10 mt-5 ml-3">
        <GlobalSidebarHeader />
      </header> */}

      <section className="flex flex-col gap-3 h-screen m-4">
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
