import { Container, Grid } from "@mui/material";
import GlobalSidebar from "../../components/GlobalSidebar/index";
import { getRoutes } from "../../routes/routes";
import styled from "styled-components";

const MainContent = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const MainLayout = () => {
  return (
    <MainContent>
      <Grid container columnGap={4}>
        <Grid xs={2}>
          <GlobalSidebar />
        </Grid>
        <Grid xs={8}>{getRoutes()}</Grid>
      </Grid>
    </MainContent>
  );
};

export default MainLayout;
