import { FetchLeadsProps } from "@/Types/Organization/LeadTypes";
import { Card, Col } from "reactstrap";
import ActivityStatusBody from "./ActivityStatusBody";

const ActivityStatus: React.FC<FetchLeadsProps> = ({
  isFetchedLead,
  setIsFetchedLead,
}) => {
  return (
    <Col>
      <Card className="job-card">
        <ActivityStatusBody
          isFetchedLead={isFetchedLead}
          setIsFetchedLead={setIsFetchedLead}
        />
      </Card>
    </Col>
  );
};

export default ActivityStatus;
