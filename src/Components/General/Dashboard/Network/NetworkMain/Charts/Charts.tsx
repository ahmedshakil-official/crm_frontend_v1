import { CommonDashboardProps } from "@/Types/CommonComponents/CommonDashboard/CommonDashboardType";
import { Col, Row } from "reactstrap";
import LendersChart from "./LendersChart/LendersChart";
import MortgagesChart from "./MortgagesChart/MortgagesChart";

const Charts: React.FC<CommonDashboardProps> = ({
  isLoading,
  CommonDashboardData,
}) => {
  return (
    <Row>
      <Col sm="12" xl="6" className="box-col-6">
        <MortgagesChart
          isLoading={isLoading}
          CommonDashboardData={CommonDashboardData}
        />
      </Col>
      <Col sm="12" xl="6" className="box-col-6">
        <LendersChart
          isLoading={isLoading}
          CommonDashboardData={CommonDashboardData}
        />
      </Col>
    </Row>
  );
};

export default Charts;
