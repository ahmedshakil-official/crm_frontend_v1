import { Container, Row } from "reactstrap";
import CaseTable from "../../Organization/CaseStatus/AllCase/components/CasesTable";
import NetworkBreadcrumbs from "../Breadcrumbs/Breadcrumbs";

const NetworkCaseContainer: React.FC = () => {
  return (
    <>
      <NetworkBreadcrumbs
        mainTitle="Network Cases Status"
        title="Hello there!"
        parent="Network"
        activePage="Cases"
      />
      <Container fluid>
        <Row>
          <CaseTable />
        </Row>
      </Container>
    </>
  );
};

export default NetworkCaseContainer;
