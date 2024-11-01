import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import Chart from "react-google-charts";
import { Card, CardBody, Col } from "reactstrap";

export interface CommonChartProps {
  title: string;
  bodyClass?: string;
  data: any;
  colClass?: string;
  divClass?: string;
}
export const CommonChart: React.FC<CommonChartProps> = ({ title, bodyClass, colClass, data, divClass }) => {
  return (
    <Col sm="12" className={colClass ? colClass : "col-xl-6 box-col-6 overflow-hidden"}>
      <Card>
        <CommonCardHeader title={title} />
        <CardBody className={`chart-block ${bodyClass ? bodyClass : ""}`}>
          <div className={divClass}>
            <Chart width={data?.width} height={data?.height} chartType={data?.chartType} loader={<div>{"Loading Chart"}</div>} data={data?.data} options={data?.option} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
