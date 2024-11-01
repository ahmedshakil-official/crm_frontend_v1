import UpcomingClassesCommon from "@/Components/General/Common/UpcomingClassesCommon/UpcomingClassesCommon";
import { Card, Col } from "reactstrap";

const UpcomingClasses = () => {
  return (
    <Col xxl="3" sm="6" className="box-col-6">
      <Card>
        <UpcomingClassesCommon />
      </Card>
    </Col>
  );
};

export default UpcomingClasses;
