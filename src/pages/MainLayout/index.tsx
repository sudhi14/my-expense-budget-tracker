import { Row, Col } from "react-bootstrap";
import GlobalSidebar from "../../components/GlobalSidebar/index";
import { getRoutes } from "../../routes/routes";

const MainLayout = () => {
  return (
    <Row>
      <Col xs={3}>
        <GlobalSidebar />
      </Col>
      <Col xs={9}>{getRoutes()}</Col>
    </Row>
  );
};

export default MainLayout;
