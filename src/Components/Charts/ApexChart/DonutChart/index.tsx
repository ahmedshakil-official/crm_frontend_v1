import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DonutChartTitle } from "@/Constant";
import { DonutChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

export const DonutChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={DonutChartTitle} />
        <CardBody className="apex-chart">
          <div id="donutchart">
            <ReactApexChart options={DonutChartData} series={DonutChartData.series} type="donut" width={380} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
