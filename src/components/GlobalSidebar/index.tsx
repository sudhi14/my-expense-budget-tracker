import { NavLink } from "react-router-dom";
import {
  Dashboard,
  AccountBalance,
  Settings,
  Logout,
} from "@mui/icons-material";

const GlobalSidebar = () => {
  return (
    <div className="flex flex-col w-1/5 bg-emerald-800 text-white">
      <Dashboard />
      <NavLink to="/home/dashboard">Dashboard</NavLink>

      <AccountBalance />
      <NavLink to="/home/finances">Finances</NavLink>

      <Settings />
      <NavLink to="/home/settings">Settings</NavLink>

      <Logout />
      <NavLink to="/">Logout</NavLink>
    </div>
  );
};

export default GlobalSidebar;
