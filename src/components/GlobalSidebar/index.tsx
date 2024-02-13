import { NavLink } from "react-router-dom";
import {
  Dashboard,
  AccountBalance,
  Settings,
  Logout,
} from "@mui/icons-material";
import GlobalSidebarItems from "../GlobalSidebarItems";

const GlobalSidebar = () => {
  const navItems = [
    {
      title: "Dashboard",
      link: "/home/dashboard",
      icon: <Dashboard />,
    },
    {
      title: "Finances",
      link: "/home/finances",
      icon: <AccountBalance />,
    },
    {
      title: "Settings",
      link: "/home/settings",
      icon: <Settings />,
    },
  ];

  return (
    <div className="fixed flex flex-col items-center w-64 h-screen bg-emerald-900 ">
      <div className="flex flex-col items-start h-screen py-10">
        {navItems.map((curr) => (
          <GlobalSidebarItems {...curr} />
        ))}
        <div className="mb-10 mt-auto flex gap-5">
          <Logout />
          <NavLink to="/">Logout</NavLink>
        </div>
      </div>
    </div>
  );
};

export default GlobalSidebar;
