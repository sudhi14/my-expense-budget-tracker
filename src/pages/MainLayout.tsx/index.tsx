import { Row, Col } from "react-bootstrap";
import GlobalNavigation from "../../components/GlobalNavigation/index";

const MainLayout = () => {
  return (
    <Row>
      <Col xs={4}>
        <GlobalNavigation />
      </Col>
      <Col xs={8}>
        <div>test</div>
      </Col>
    </Row>
  );
};

export default MainLayout;
