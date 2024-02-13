import { NavLink } from "react-router-dom";
import {
  Dashboard,
  AccountBalance,
  Settings,
  Logout,
} from "@mui/icons-material";

const GlobalSidebar = () => {
  return (
    <div className="fixed flex flex-col items-center w-1/5 h-screen bg-emerald-900 ">
      <div className="flex flex-col items-start h-screen py-10">
        <div className="mb-10 flex gap-5">
          <Dashboard />
          <NavLink to="/home/dashboard">Dashboard</NavLink>
        </div>

        <div className="mb-10 flex gap-5">
          <AccountBalance />
          <NavLink to="/home/finances">Finances</NavLink>
        </div>

        <div className="mb-10 flex gap-5">
          <Settings />
          <NavLink to="/home/settings">Settings</NavLink>
        </div>

        <div className="mb-10 mt-auto flex gap-5">
          <Logout />
          <NavLink to="/">Logout</NavLink>
        </div>
      </div>
    </div>
  );
};

export default GlobalSidebar;
