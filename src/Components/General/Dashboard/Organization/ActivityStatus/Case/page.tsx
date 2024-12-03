import { Container, Row } from "reactstrap";
import AddNewCase from "./components/Case";
import Case from "./components/Case";

const CaseContainer = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Case />
        </Row>
      </Container>
    </>
  );
};

export default CaseContainer;