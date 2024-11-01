import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ColumnChartTitle } from "@/Constant";
import { LineWithAnnotationChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

export const LineChart = () => {
  return (
    <Col sm="6" xl="12" className="box-col-6">
      <Card>
        <CommonCardHeader title={ColumnChartTitle} />
        <CardBody>
          <div id="annotationchart">
            <ReactApexChart options={LineWithAnnotationChartData} series={LineWithAnnotationChartData.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
