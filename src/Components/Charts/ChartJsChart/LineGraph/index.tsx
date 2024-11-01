import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LineGraphTitle } from "@/Constant";
import { LineGraphData, LineGraphOptions } from "@/Data/Charts/ChartJsChart";
import { Line } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";

export const LineGraph = () => {
  return (
    <Col md="12" xl="6" className="box-col-12">
      <Card>
        <CommonCardHeader title={LineGraphTitle} />
        <CardBody className="chart-block">
          <Line data={LineGraphData} options={LineGraphOptions} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};
