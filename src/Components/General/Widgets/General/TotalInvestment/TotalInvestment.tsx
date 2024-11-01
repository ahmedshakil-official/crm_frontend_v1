import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { TotalInvestmentHeading } from "@/Constant";
import { Investment } from "@/Data/General/Dashboard/Default/DefaultChartData";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const TotalInvestment = () => {
  return (
    <Col xl="3" sm="4" className="box-col-6">
      <Card>
        <DashboardCommonHeader title={TotalInvestmentHeading} />
        <CardBody className="investment-card">
          <ReactApexChart options={Investment} series={Investment.series} height={300} type={"radialBar"} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalInvestment;
