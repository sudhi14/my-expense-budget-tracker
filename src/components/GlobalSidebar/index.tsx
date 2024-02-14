import { NavLink } from "react-router-dom";
import GlobalSidebarItems from "../GlobalSidebarItems";
import {
  MdOutlineSpaceDashboard,
  MdSpaceDashboard,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { FaSearchDollar } from "react-icons/fa";
import ExpenseTrackerLogo from "../../assets/images/login/expense-tracker-logo.png";

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
      icon: <MdOutlineSettings size={25} />,
    },
  ];

  return (
    <div className="fixed flex flex-col w-64 h-screen shadow-lg bg-white">
      <section className="flex flex-col justify-center items-center h-screen w-full py-10">
        {navItems.map((curr) => (
          <GlobalSidebarItems {...curr} />
        ))}
        <div className="mb-10 mt-auto flex gap-5">
          <MdOutlineLogout size={25} className="text-emerald-800" />
          <NavLink to="/" className="text-emerald-800 w-20">
            Logout
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default GlobalSidebar;
