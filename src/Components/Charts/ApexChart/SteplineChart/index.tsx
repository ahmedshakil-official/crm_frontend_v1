import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SteplineChartTitle } from "@/Constant";
import { StepLineChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

export const SteplineChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={SteplineChartTitle} />
        <CardBody>
          <div id="stepline">
            <ReactApexChart options={StepLineChartData} series={StepLineChartData.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
