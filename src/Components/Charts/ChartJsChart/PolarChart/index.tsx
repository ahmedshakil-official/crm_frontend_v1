import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PolarChartTitle } from "@/Constant";
import { PolarData, PolarOption } from "@/Data/Charts/ChartJsChart";
import { PolarArea } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";

export const PolarChart = () => {
  return (
    <Col md="12" xl="6" className="box-col-12">
      <Card>
        <CommonCardHeader title={PolarChartTitle} />
        <CardBody className="chart-block chart-vertical-center">
          <PolarArea data={PolarData} options={PolarOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};
