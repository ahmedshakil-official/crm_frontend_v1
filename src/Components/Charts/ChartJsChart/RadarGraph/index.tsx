import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { RadarGraphTitle } from "@/Constant";
import { RadarGraphData, RadarOptions } from "@/Data/Charts/ChartJsChart";
import { Radar } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";

export const RadarGraph = () => {
  return (
    <Col md="12" xl="6" className="box-col-12">
      <Card>
        <CommonCardHeader title={RadarGraphTitle} />
        <CardBody className="chart-block">
          <Radar data={RadarGraphData} options={RadarOptions} width={724} height={362} />
        </CardBody>
      </Card>
    </Col>
  );
};
