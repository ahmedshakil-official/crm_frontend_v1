import { Button, Container, Row } from "reactstrap";
import OrganisationStaffBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import CaseUpdatesFilterBar from "./CaseUpdatesFilterBar/CaseUpdatesFilterBar";
import CaseTimeline from "./CaseTimeline/CaseTimeline";

const CaseupdatesContainer: React.FC = () => {
  return (
    <>
      <OrganisationStaffBreadcrumbs
        mainTitle="Case Updates"
        title="Timeline view of all client case actions and status updates"
        activePage="Case Updates"
      />
      <Container fluid>
        <div className=" d-flex justify-content-end">
          <Button className="border-0">
            <small>View All Cases</small>
          </Button>
        </div>
        <Row>
          <CaseUpdatesFilterBar />
        </Row>
        <Row>
          <CaseTimeline />
        </Row>
      </Container>
    </>
  );
};

export default CaseupdatesContainer;