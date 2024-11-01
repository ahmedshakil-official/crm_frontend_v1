import { WidgetWithChart } from "@/Data/General/Widgets/Chart/ChartsData";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";
import { SmallWidget } from "./SmallWidget";

const WidgetCharts = () => {
  return (
    <Col xxl="6" xl="7" className="box-col-12">
      <Row className="g-sm-3 height-equal-2 widget-charts">
        <SmallWidget />
        {WidgetWithChart.map((item) => (
          <Col sm="6" key={item.id}>
            <Card className="widget-1 widget-with-chart mb-xl-0">
              <CardBody>
                <div>
                  <h4 className="mb-1">
                    {item.rate}
                    {"k"}
                  </h4>
                  <span className="f-light">{item.text}</span>
                </div>
                <div className={`${item.chartClass}-chart`}>
                  <div id={`${item.chartClass}chart1`}>
                    <ReactApexChart type={item.chart.type} options={item.chart} series={item.chart.series} height={item.chart.height} width={item.chart.width} />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
export default WidgetCharts;
