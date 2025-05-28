import { Col, Row } from "reactstrap";
import LendersChart from "./LendersChart/LendersChart";
import NewVsReturningChart from "./NewVsReturningChart/NewVsReturningChart";
import ProductsChart from "./ProductsChart/ProductsChart";

const Charts: React.FC = () => {
  return (
    <Row>
      <Col sm="12" xl="4" className="box-col-4">
        <ProductsChart />
      </Col>
      <Col sm="12" xl="4" className="box-col-4">
        <LendersChart />
      </Col>
      <Col sm="12" xl="4" className="box-col-4">
        <NewVsReturningChart />
      </Col>
    </Row>
  );
};

export default Charts;
