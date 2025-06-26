import { Container } from "reactstrap";
import OrganisationAdviserBreadcrumbs from "../Breadcrumbs/Breadcrumbs";

const OrganisationAdviserTasksAndRemindersContainer: React.FC = () => {
  return (
    <>
     <OrganisationAdviserBreadcrumbs 
     mainTitle="Tasks and Reminders"
     title="Manage Tasks and Reminders"
     activePage="Tasks and Reminders"
     />
     <Container fluid>
        <h1 className="text-danger text-center">Under Development</h1>
      </Container>
    </>
  );
};

export default OrganisationAdviserTasksAndRemindersContainer;