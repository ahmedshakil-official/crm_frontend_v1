import { Container, Row } from "reactstrap";
import SingleCaseBody from "./components/SingleCaseBody";

const CaseContainer = () => {
  return (
    <>
      <Container fluid>
        <Row className="row">
          <SingleCaseBody />
        </Row>
      </Container>
    </>
  );
};

export default CaseContainer;
