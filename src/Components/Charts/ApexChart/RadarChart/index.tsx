import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { RadarChartTitle } from "@/Constant";
import { RadarChartsData } from "@/Data/Charts/ApexChart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

export const RadarChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={RadarChartTitle} />
        <CardBody>
          <div id="radarchart">
            <ReactApexChart options={RadarChartsData} series={RadarChartsData.series} type="radar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
