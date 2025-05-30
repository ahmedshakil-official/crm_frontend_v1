import { Col, Container, Row } from "reactstrap";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";

const SystemReportsContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs />
      <Container fluid>
        <Row>
          <Col>
            <h1>System Reports</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SystemReportsContainer;
