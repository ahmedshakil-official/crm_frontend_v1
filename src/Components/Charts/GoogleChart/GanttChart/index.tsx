import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { GanttChartTitle } from "@/Constant";
import { GanttChartData, GanttChartOptions } from "@/Data/Charts/GoogleChart";
import Chart from "react-google-charts";
import { Card, CardBody, Col } from "reactstrap";

export const GanttChart = () => {
  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={GanttChartTitle} />
        <CardBody className="chart-block">
          <div className="chart-overflow">
            <Chart chartType={"Gantt"} width="100%" height={300} loader={<div>{"Loading Chart"}</div>} data={GanttChartData} options={GanttChartOptions} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
