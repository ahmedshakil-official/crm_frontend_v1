import { OurSaleValueCommonData } from "@/Data/General/Dashboard/Ecommerce/EcommerceData";
import ReactApexChart from "react-apexcharts";
import { Badge, Card, CardBody, Col, Row } from "reactstrap";

const OurSaleValueCommon = () => {
  return (
    <>
      {OurSaleValueCommonData.map((data, index) => (
        <Col sm="6" md="12" key={index}>
          <Card className="value-chart">
            <CardBody>
              <Row>
                <Col xs="6">
                  <ReactApexChart options={data.chart} series={data.chart.series} height={110} type={"bar"} className={`${data.class}-chart`} id={`${data.class}-chart`} />
                </Col>
                <Col xs="6">
                  <div className="valuechart-detail">
                    <div className="text-center">
                      <Badge color={data.color}>{data.badge}</Badge>
                      <h2>{data.price}</h2>
                      <p>{data.text}</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default OurSaleValueCommon;
