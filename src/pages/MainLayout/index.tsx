import { Row, Col } from "react-bootstrap";
import GlobalSidebar from "../../components/GlobalSidebar/index";
import { getRoutes } from "../../routes/routes";

const MainLayout = () => {
  return (
    <Row >
      <Col xs={2}>
        <GlobalSidebar />
      </Col>
      <Col xs={10}>{getRoutes()}</Col>
    </Row>
  );
};

export default MainLayout;
