import { NavLink } from "react-router-dom";
import {
  Dashboard,
  AccountBalance,
  Settings,
  Logout,
} from "@mui/icons-material";

const GlobalSidebar = () => {
  return (
    <div>
      <Dashboard />
      <NavLink to="/dashboard">Dashboard</NavLink>

      <AccountBalance />
      <NavLink to="/finances">Finances</NavLink>

      <Settings />
      <NavLink to="/settings">Settings</NavLink>

      <Logout />
      <NavLink to="/logout">Logout</NavLink>
    </div>
  );
};

export default GlobalSidebar;
