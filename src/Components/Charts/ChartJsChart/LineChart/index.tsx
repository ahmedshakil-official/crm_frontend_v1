import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LineChartTitle } from "@/Constant";
import { LineChartData, LineChartOption } from "@/Data/Charts/ChartJsChart";
import { Line } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";

export const LineChart = () => {
  return (
    <Col md="12" xl="6" className="box-col-12">
      <Card>
        <CommonCardHeader title={LineChartTitle} />
        <CardBody className="chart-block">
          <Line data={LineChartData} options={LineChartOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};
