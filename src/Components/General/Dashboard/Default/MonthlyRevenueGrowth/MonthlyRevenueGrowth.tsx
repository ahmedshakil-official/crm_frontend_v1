import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { MonthlyRevenueGrowthHeading } from "@/Constant";
import { GrowthChart } from "@/Data/General/Dashboard/Default/DefaultChartData";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const MonthlyRevenueGrowth = () => {
  return (
    <Col lg="6" className="proorder-xxl-6 box-col-12">
      <Card className="growthcard">
        <DashboardCommonHeader title={MonthlyRevenueGrowthHeading} dropDownFalse={true} tablist={true}/>
        <CardBody className="pb-0">
          <ReactApexChart options={GrowthChart} series={GrowthChart.series} height={350} type={"area"} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MonthlyRevenueGrowth;
