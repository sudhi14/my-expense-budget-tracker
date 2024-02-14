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
    <div className="fixed flex flex-col w-64 h-screen shadow-lg">
      <header className="flex flex-row gap-5 w-full items-end justify-center mt-5">
        <img src={ExpenseTrackerLogo} alt="Expense Logo" className="h-12" />
        <div className="font-bold text-xl text-gray-500">My expense</div>
      </header>

      {/* <hr className="border-b-2 border-solid border-[#f8b326] mt-5" /> */}
      <hr className="border-b border-solid border-gray-200 mt-5 ml-2 mr-2 rounded-lg" />

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
