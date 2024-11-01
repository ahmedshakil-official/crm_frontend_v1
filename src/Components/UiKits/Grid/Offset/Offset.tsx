import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { OffsetTitle } from "@/Constant";
import { OffsetBodyData, OffsetSubTitle } from "@/Data/Uikits/Grid";
import { Card, CardBody, Col, Row } from "reactstrap";
import GridFooter from "../Common/GridFooter";

export const Offset = () => {
  return (
    <Col sm="12" className="mb-xl-4">
      <Card>
        <CommonCardHeader title={OffsetTitle} span={OffsetSubTitle} />
        <CardBody className="grid-showcase">
          <Row className="g-2">
            {OffsetBodyData &&
              OffsetBodyData.map((item, index) => (
                <Col sm={item.sm} xs={item.xs} className={item.class} key={index}>
                  <span>{item.text}</span>
                </Col>
              ))}
          </Row>
        </CardBody>
        <GridFooter code={".offset-*"} value={"1 / 2 / ... / 11 / 12"} />
      </Card>
    </Col>
  );
};
