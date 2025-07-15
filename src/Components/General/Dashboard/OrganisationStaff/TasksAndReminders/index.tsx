import { Button, Container } from "reactstrap";
import OrganisationStaffBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import TaskAndReminderFilterBar from "./TaskAndReminderFilterBar/TaskAndReminderFilterBar";
import RemindersLists from "./RemindersLists/RemindersLists";
import { TbPlus } from "react-icons/tb";

const OrgStaffTasksAndRemindersContainer: React.FC = () => {
  return (
    <>
      <OrganisationStaffBreadcrumbs
        mainTitle="Tasks & Reminders"
        title="Set and manage reminders for advisers and admin users"
        activePage="Tasks & Reminders"
      />
      <Container fluid>
        <div className=" d-flex justify-content-end">
          <Button className="border-0">
            <TbPlus size={16} />
            <small className=" ms-2">Create Reminder</small>
          </Button>
        </div>
        <TaskAndReminderFilterBar />
        <RemindersLists />
      </Container>
    </>
  );
};

export default OrgStaffTasksAndRemindersContainer;
