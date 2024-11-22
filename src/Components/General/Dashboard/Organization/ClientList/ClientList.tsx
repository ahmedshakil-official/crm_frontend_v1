import { Card, Col } from "reactstrap";
import ClientListBody from "./ClientListBody";
import ClientListHeader from "./ClientListHeader";

const ClientList = () => {
  return (
    <Col>
      <Card className="job-card">
        <ClientListHeader />
        <ClientListBody /> 
      </Card>
    </Col>
  );
};

export default ClientList;
