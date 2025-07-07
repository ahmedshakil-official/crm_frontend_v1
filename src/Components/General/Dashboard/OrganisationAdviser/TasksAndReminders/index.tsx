import { Container } from "reactstrap";
import OrganisationAdviserBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import TasksAndRemindersOverview from "./TasksAndRemindersOverview/TasksAndRemindersOverview";

const OrganisationAdviserTasksAndRemindersContainer: React.FC = () => {
  return (
    <>
      <OrganisationAdviserBreadcrumbs
        mainTitle="Tasks and Reminders"
        title="Manage Tasks and Reminders"
        activePage="Tasks and Reminders"
      />
      <Container fluid>
        <TasksAndRemindersOverview />
      </Container>
    </>
  );
};

export default OrganisationAdviserTasksAndRemindersContainer;
