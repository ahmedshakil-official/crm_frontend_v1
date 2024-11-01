import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ComboChartTitle } from "@/Constant";
import { ComboChartData, ComboChartOption } from "@/Data/Charts/GoogleChart";
import Chart from "react-google-charts";
import { Card, CardBody, Col } from "reactstrap";

export const ComboChart = () => {
  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={ComboChartTitle} />
        <CardBody className="chart-block">
          <div className="chart-overflow">
            <Chart width={"100%"} height={500} chartType={"ComboChart"} loader={<div>{"Loading Chart"}</div>} data={ComboChartData} options={ComboChartOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
