import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DoughnutChartTitle } from "@/Constant";
import { DoughnutData, DoughnutOption } from "@/Data/Charts/ChartJsChart";
import { Doughnut } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";

export const DoughnutChart = () => {
  return (
    <Col md="12" xl="6" className="box-col-12">
      <Card>
        <CommonCardHeader title={DoughnutChartTitle} />
        <CardBody className="chart-block chart-vertical-center">
          <Doughnut data={DoughnutData} options={DoughnutOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};
