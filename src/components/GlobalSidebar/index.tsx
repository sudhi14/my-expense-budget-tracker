import { NavLink } from "react-router-dom";
import {
  Dashboard,
  AccountBalance,
  Settings,
  Logout,
} from "@mui/icons-material";
import { Stack } from "@mui/material";
import * as Styles from "./index.styles";

const GlobalSidebar = () => {
  return (
    <Styles.SidebarContainer>
      <Stack alignItems="center">
        <Stack direction="column" spacing={2} gap={2}>
          <Stack direction="row" spacing={2}>
            <Dashboard />
            <Styles.SidebarNavLink to="/dashboard">
              Dashboard
            </Styles.SidebarNavLink>
          </Stack>

          <Stack direction="row" spacing={2}>
            <AccountBalance />
            <NavLink to="/finances">Finances</NavLink>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Settings />
            <NavLink to="/settings">Settings</NavLink>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Logout />
            <NavLink to="/logout">Logout</NavLink>
          </Stack>
        </Stack>
      </Stack>
    </Styles.SidebarContainer>
  );
};

export default GlobalSidebar;
