import { Card, Col } from "reactstrap";
import { JobTodayBody } from "./JobTodayBody";
import { JobTodayHeader } from "./JobTodayHeader";

const JobToday = () => {
  return (
    <Col lg="5" sm="12" className="proorder-xxl-7 box-col-12">
      <Card className="job-card">
        <JobTodayHeader />
        <JobTodayBody />
      </Card>
    </Col>
  );
};

export default JobToday;
