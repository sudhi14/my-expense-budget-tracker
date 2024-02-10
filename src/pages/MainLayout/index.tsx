// import { Box, Container, Grid } from "@mui/material";
import GlobalSidebar from "../../components/GlobalSidebar/index";
import { getRoutes } from "../../routes/routes";
// import styled from "styled-components";

const MainLayout = () => {
  return (
    <>
      <GlobalSidebar />
      {getRoutes()}
    </>
  );
};

export default MainLayout;
