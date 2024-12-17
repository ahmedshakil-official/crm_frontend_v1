import { FetchLeadsProps } from "@/Types/Organization/LeadTypes";
import { Card, Col } from "reactstrap";
import LeadListBody from "./LeadListBody";

const LeadList: React.FC<FetchLeadsProps> = ({ setIsFetchedLead }) => {
  return (
    <Col>
      <Card className="job-card">
        <LeadListBody setIsFetchedLead={setIsFetchedLead} />
      </Card>
    </Col>
  );
};

export default LeadList;
