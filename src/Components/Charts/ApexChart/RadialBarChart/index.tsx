import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { RadialBarChartTitle } from "@/Constant";
import { RadialBarChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

export const RadialBarChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={RadialBarChartTitle} />
        <CardBody>
          <div id="circlechart">
            <ReactApexChart options={RadialBarChartData} series={RadialBarChartData.series} type="radialBar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
