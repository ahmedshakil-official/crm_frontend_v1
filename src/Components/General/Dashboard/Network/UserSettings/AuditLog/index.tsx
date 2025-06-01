import { Col, Container, Row } from "reactstrap";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";

const AuditLogContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs />
      <Container fluid>
        <Row>
          <Col>
            <h1>Audit Log</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AuditLogContainer;
