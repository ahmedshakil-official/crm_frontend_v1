import { FetchLeadsProps } from "@/Types/Organization/LeadTypes";
import { Card, Col } from "reactstrap";
import CaseStatusBody from "./CaseStatusBody";

const CaseStatus: React.FC<FetchLeadsProps> = ({
  isFetchedLead,
  setIsFetchedLead,
}) => {
  return (
    <Col>
      <Card className="job-card">
        <CaseStatusBody
          isFetchedLead={isFetchedLead}
          setIsFetchedLead={setIsFetchedLead}
        />
      </Card>
    </Col>
  );
};

export default CaseStatus;