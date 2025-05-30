import { Container, Row } from "reactstrap";
import CaseTable from "../../Organization/CaseStatus/AllCase/components/CasesTable";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";

const NetworkCaseContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs />
      <Container fluid>
        <Row>
          <CaseTable />
        </Row>
      </Container>
    </>
  );
};

export default NetworkCaseContainer;
