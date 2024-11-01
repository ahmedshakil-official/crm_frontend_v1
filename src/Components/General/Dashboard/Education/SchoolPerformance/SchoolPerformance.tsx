import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { SchoolPerformanceHeading } from "@/Constant";
import { GroupChartOption } from "@/Data/General/Dashboard/Education/EducationChartData";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const SchoolPerformance = () => {
  return (
    <Col xl="6" lg="12" className="order-xxl-0 order-xl-4 box-col-7">
      <Card className="performance-card">
        <DashboardCommonHeader title={SchoolPerformanceHeading} dropDownFalse={true} tablist={true} />
        <CardBody className="pb-0">
          <ReactApexChart options={GroupChartOption} series={GroupChartOption.series} height={325} type="bar" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SchoolPerformance;
