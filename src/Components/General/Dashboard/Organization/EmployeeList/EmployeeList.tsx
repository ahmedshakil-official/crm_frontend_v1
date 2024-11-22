import { Card, Col } from "reactstrap";
import EmployeeListHeader from "./EmployeeListHeader";
import EmployeeListBody from "./EmployeeListBody";

const EmployeeList = () => {
  return (
    <Col>
      <Card className="job-card">
        <EmployeeListHeader/>
        <EmployeeListBody/>
      </Card>
    </Col>
  );
};

export default EmployeeList;
