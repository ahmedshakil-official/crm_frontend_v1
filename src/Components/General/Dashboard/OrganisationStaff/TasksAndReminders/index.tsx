import { Container } from "reactstrap";
import OrganisationStaffBreadcrumbs from "../Breadcrumbs/Breadcrumbs";

const OrgStaffTasksAndRemindersContainer: React.FC = () => {
  return (
    <>
      <OrganisationStaffBreadcrumbs
        mainTitle="Organisation Staff Dashboard"
        title="Hello! there"
        activePage="Tasks & Reminders"
      />
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center h-100">
          <h1 className="text-danger">This page is Under Development</h1>
        </div>
      </Container>
    </>
  );
};

export default OrgStaffTasksAndRemindersContainer;
