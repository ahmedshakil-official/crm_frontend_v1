import { Container, Row } from "reactstrap";
import CaseCategory from "./components/CaseCategory";

const CaseContainer = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <CaseCategory />
        </Row>
      </Container>
    </>
  );
};

export default CaseContainer;
