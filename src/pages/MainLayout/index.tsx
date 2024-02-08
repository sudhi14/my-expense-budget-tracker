import { Box, Container, Grid } from "@mui/material";
import GlobalSidebar from "../../components/GlobalSidebar/index";
import { getRoutes } from "../../routes/routes";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <Box>
      <Grid
        container
        gap={2}
        sx={{ marginTop: "25px", marginBottom: "25px"}}
      >
        <Grid xs={2}>
          <GlobalSidebar />
        </Grid>
        <Grid xs={8}>{getRoutes()}</Grid>
      </Grid>
    </Box>
  );
};

export default MainLayout;
