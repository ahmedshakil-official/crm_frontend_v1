import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { Investment } from "@/Data/General/Dashboard/Default/DefaultChartData";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const SuccessFulCase = () => {
  return (
    <Col xxl="3" xl="4" md="6" className="proorder-xxl-3 box-col-6">
      <Card>
        <DashboardCommonHeader title="Successful Cases" />
        <CardBody className="investment-card">
          <ReactApexChart
            options={Investment}
            series={Investment.series}
            height={380}
            type={"radialBar"}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SuccessFulCase;
