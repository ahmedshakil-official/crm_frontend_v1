import TotalGoalCommon from "@/Components/General/Common/TotalGoalCommon/TotalGoalCommon";
import { Card, CardBody, Col } from "reactstrap";

const TotalGoal = () => {
  return (
    <Col xxl="6" xl="4" md="12" className="box-col-12">
      <Card className="radial-card">
        <CardBody>
          <TotalGoalCommon />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalGoal;
