import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { OrderTitle } from "@/Constant";
import { GridOrderBodyData, OrderSubTitle } from "@/Data/Uikits/Grid";
import { Card, CardBody, Col, Row } from "reactstrap";
import GridFooter from "../Common/GridFooter";

export const Order = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={OrderTitle} span={OrderSubTitle} />
        <CardBody className="grid-showcase">
          <Row className="g-2">
            {GridOrderBodyData &&
              GridOrderBodyData.map((item, index) => (
                <Col xs={item.xs} className={item.class} key={index}>
                  <span>{item.text}</span>
                </Col>
              ))}
          </Row>
        </CardBody>
        <GridFooter code={".order-*"} value={"first / 2 / 3 / 4 / 5 / last"} />
      </Card>
    </Col>
  );
};
