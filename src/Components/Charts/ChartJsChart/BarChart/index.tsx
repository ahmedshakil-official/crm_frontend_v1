import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BarChartTitle } from "@/Constant";
import { BarChartData, BarChartOptions } from "@/Data/Charts/ChartJsChart";
import { Bar } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";

export const BarChart = () => {
  return (
    <Col md="12" xl="6" className="box-col-12">
      <Card>
        <CommonCardHeader title={BarChartTitle} />
        <CardBody className="chart-block">
          <Bar data={BarChartData} options={BarChartOptions} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};
