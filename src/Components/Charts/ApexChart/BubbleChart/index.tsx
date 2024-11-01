import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BubbleChartTitle } from "@/Constant";
import { BubbleChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

export const BubbleChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-12">
      <Card>
        <CommonCardHeader title={BubbleChartTitle} />
        <CardBody>
          <div id="chart-bubble">
            <ReactApexChart options={BubbleChartData} series={BubbleChartData.series} type="bubble" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
