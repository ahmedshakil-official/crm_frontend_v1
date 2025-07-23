import { Container } from "reactstrap";
import OrganisationAdviserBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import TasksAndCalendarTabs from "./TasksAndCalendarTabs/TasksAndCalendarTabs";
import TasksAndRemindersOverview from "./TasksAndRemindersOverview/TasksAndRemindersOverview";

const OrganisationAdviserTasksAndRemindersContainer: React.FC = () => {
  return (
    <>
      <OrganisationAdviserBreadcrumbs
        mainTitle="Tasks & Reminders"
        title="Manage Tasks and Reminders"
        parent="Users"
        activePage="Tasks & Reminders"
      />
      <Container fluid>
        <TasksAndRemindersOverview />
        <TasksAndCalendarTabs />
      </Container>
    </>
  );
};

export default OrganisationAdviserTasksAndRemindersContainer;
