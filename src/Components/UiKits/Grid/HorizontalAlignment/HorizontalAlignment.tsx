import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HorizontalAlignmentTitle } from "@/Constant";
import { HorizontalAlignSubTitle, VerticalAlignmentData } from "@/Data/Uikits/Grid";
import { Card, CardBody, Col, Row } from "reactstrap";
import GridFooter from "../Common/GridFooter";

export const HorizontalAlignment = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={HorizontalAlignmentTitle} span={HorizontalAlignSubTitle} />
        <CardBody className="grid-showcase grid-align horizontal-align">
          {VerticalAlignmentData.map((item) => (
            <Row className={`justify-content-${item.align} bg-light m-0 mb-3`} key={item.id}>
              {item.data.map((list) => (
                <Col xs="5" key={list.id}>
                  <span className="text-dark">{list.text}</span>
                </Col>
              ))}
            </Row>
          ))}
        </CardBody>
        <GridFooter code={".justify-content-*"} value={"start / center / end / around / between"} />
      </Card>
    </Col>
  );
};
