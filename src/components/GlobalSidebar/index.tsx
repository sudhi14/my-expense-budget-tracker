import { Container, Nav, Navbar as NavbarBs, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Dashboard, AccountBalance, Settings, Logout } from "@mui/icons-material";
import "./index.scss"

const GlobalSidebar = () => {
  return (
    <NavbarBs className="bg-white shadow-sm rounded-top rounded-bottom test">
      <Container>
        <Nav className="flex-column">
          <Stack direction="horizontal">
            <Dashboard />
            <Nav.Link to="/dashboard" as={NavLink}>
              Dashboard
            </Nav.Link>
          </Stack>
          
          <Stack direction="horizontal">
            <AccountBalance />
            <Nav.Link to="/finances" as={NavLink}>
              Finances
            </Nav.Link>
          </Stack>

          <Stack direction="horizontal">
            <Settings />
            <Nav.Link to="/settings" as={NavLink}>
              Settings
            </Nav.Link>
          </Stack>

          <Stack direction="horizontal">
            <Logout />
            <Nav.Link to="/logout" as={NavLink}>
              Logout
            </Nav.Link>
          </Stack>
        </Nav>
      </Container>
    </NavbarBs>
  );
};

export default GlobalSidebar;
