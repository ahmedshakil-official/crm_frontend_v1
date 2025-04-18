import { Card, Col } from "reactstrap";
import ClientListBody from "./ClientListBody";

const ClientList = () => {
  return (
    <Col>
      <Card className="job-card">
        <ClientListBody />
      </Card>
    </Col>
  );
};

export default ClientList;
