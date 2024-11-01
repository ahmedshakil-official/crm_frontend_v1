import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CandlestickChartTitle } from "@/Constant";
import { CandleStickChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

export const CandlestickChart = () => {
  return (
    <Col sm="6" xl="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={CandlestickChartTitle} />
        <CardBody>
          <div id="candlestick">
            <ReactApexChart options={CandleStickChartData} series={CandleStickChartData.series} type="candlestick" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
