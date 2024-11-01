import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Dashboard, Education, EducationTitle } from "@/Constant";
import { Container, Row } from "reactstrap";
import Assignments from "./Assignments/Assignments";
import GraphicDesign from "./GraphicDesign/GraphicDesign";
import NewCourses from "./NewCourses/NewCourses";
import NoticeBoard from "./NoticeBoard/NoticeBoard";
import SchoolPerformance from "./SchoolPerformance/SchoolPerformance";
import StudentDetails from "./StudentDetails/StudentDetails";
import TimeSpent from "./TimeSpent/TimeSpent";
import ToDoList from "./ToDoList/ToDoList";
import UpcomingClasses from "./UpcomingClasses/UpcomingClasses";
import Schedule from "./Schedule/Schedule";

const EducationContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Education} parent={Dashboard} title={EducationTitle} />
      <Container fluid className="dashboard-3">
        <Row>
          <GraphicDesign />
          <UpcomingClasses />
          <SchoolPerformance />
          <NoticeBoard />
          <StudentDetails />
          <NewCourses />
          <TimeSpent />
          <ToDoList />
          <Assignments />
          <Schedule />
        </Row>
      </Container>
    </>
  );
};

export default EducationContainer;
