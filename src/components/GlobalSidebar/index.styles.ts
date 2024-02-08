import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Box } from "@mui/material";

export const SidebarContainer = styled(Box)`
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 30px;
  height: 95dvh; // Still have to figure out the height of the div
`;

export const SidebarNavLink = styled(NavLink)``;
