import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GlobalSidebar = () => {
  return (
    <NavbarBs>
      <Container>
        <Nav className="flex-column">
          <FontAwesomeIcon icon="fa-solid fa-table-cells" />
          <Nav.Link to="/dashboard" as={NavLink}>
            Dashboard
          </Nav.Link>
          <Nav.Link to="/finances" as={NavLink}>
            Finances
          </Nav.Link>
          <Nav.Link to="/settings" as={NavLink}>
            Settings
          </Nav.Link>
          <Nav.Link to="/" as={NavLink}>
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
};

export default GlobalSidebar;
