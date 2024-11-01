import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { MixedChartTitle } from "@/Constant";
import { MixedChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

export const MixedChart = () => {
  return (
    <Col sm="12" xl="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={MixedChartTitle} />
        <CardBody>
          <div id="mixedchart">
            <ReactApexChart options={MixedChartData} series={MixedChartData.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
