import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicAreaChartTitle } from "@/Constant";
import { BasicAreaChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

export const BasicAreaChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={BasicAreaChartTitle} />
        <CardBody>
          <div id="basic-apex">
            <ReactApexChart options={BasicAreaChartData} series={BasicAreaChartData.series} type="area" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
