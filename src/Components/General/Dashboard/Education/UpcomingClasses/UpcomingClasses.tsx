import UpcomingClassesCommon from "@/Components/General/Common/UpcomingClassesCommon/UpcomingClassesCommon";
import { Card, Col } from "reactstrap";

const UpcomingClasses = () => {
  return (
    <Col xxl="3" xl="4" sm="6" className="order-sm-1 order-xl-0 box-col-5">
      <Card className="upcoming-card">
        <UpcomingClassesCommon />
      </Card>
    </Col>
  );
};

export default UpcomingClasses;
