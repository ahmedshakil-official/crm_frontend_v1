import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BarChartTitle } from "@/Constant";
import { BarChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

export const BarChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={BarChartTitle} />
        <CardBody>
          <div id="basic-bar">
            <ReactApexChart options={BarChartData} series={BarChartData.series} type="bar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
