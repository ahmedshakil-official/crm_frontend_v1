import { Col, Row } from "reactstrap";
import LendersChart from "./LendersChart/LendersChart";
import MortgagesChart from "./MortgagesChart/MortgagesChart";

const Charts: React.FC = () => {
  return (
    <Row>
      <Col sm="12" xl="6" className="box-col-6">
        <MortgagesChart />
      </Col>
      <Col sm="12" xl="6" className="box-col-6">
        <LendersChart />
      </Col>
    </Row>
  );
};

export default Charts;
