import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { TimeSpentHeading } from "@/Constant";
import { RevenueChartData } from "@/Data/General/Dashboard/Education/EducationChartData";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const TimeSpent = () => {
  return (
    <Col xxl="3" xl="5" lg="6" md="5" sm="6" className="order-xxl-0 order-xl-2 box-col-6">
      <Card className="pie-card">
        <DashboardCommonHeader title={TimeSpentHeading} />
        <CardBody className="revenue-category">
        <ReactApexChart id="chart" options={RevenueChartData} series={RevenueChartData.series} type="donut" height={350} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TimeSpent;
