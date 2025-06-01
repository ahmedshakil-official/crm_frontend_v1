import { Col, Container, Row } from "reactstrap";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";

const SecurityPolicyContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs />
      <Container fluid>
        <Row>
          <Col>
            <h1>Security Policy</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SecurityPolicyContainer;
