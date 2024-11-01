import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PieChartTitle } from "@/Constant";
import { PieChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";


export const PieChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={PieChartTitle} />
        <CardBody className="apex-chart">
          <div id="piechart">
            <ReactApexChart options={PieChartData} series={PieChartData.series} type="pie" width={380} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
