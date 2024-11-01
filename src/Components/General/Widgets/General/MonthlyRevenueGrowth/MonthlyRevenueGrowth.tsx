import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { MonthlyRevenueGrowthHeading } from "@/Constant";
import { GrowthChart } from "@/Data/General/Dashboard/Default/DefaultChartData";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const MonthlyRevenueGrowth = () => {
  return (
    <Col xl="6" className="box-col-6 growth-card">
      <Card >
        <DashboardCommonHeader title={MonthlyRevenueGrowthHeading} dropDownFalse={true} tablist={true}/>
        <CardBody className="pb-0">
          <ReactApexChart options={GrowthChart} series={GrowthChart.series} height={330} type={"area"} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MonthlyRevenueGrowth;
