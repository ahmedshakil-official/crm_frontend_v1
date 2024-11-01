import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ColumnChartTitle } from "@/Constant";
import { ColumnChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

export const ColumnChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={ColumnChartTitle} />
        <CardBody>
          <div id="column-chart">
            <ReactApexChart options={ColumnChartData} series={ColumnChartData.series} type="bar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
