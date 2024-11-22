import { Card, Col } from "reactstrap";
import ListOfEmployeeBody from "./ListOfEmployeeBody";
import ListOfEmployeeHeader from "./ListOfEmployeeHeader";

// export default JobToday;

const ListOfEmployee = () => {
  return (
    <Col>
      <Card className="job-card">
        <ListOfEmployeeHeader />
        <ListOfEmployeeBody />
      </Card>
    </Col>
  );
};

export default ListOfEmployee;
