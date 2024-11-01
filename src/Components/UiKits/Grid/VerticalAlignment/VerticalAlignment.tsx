import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { VerticalAlignmentTitle } from "@/Constant";
import { VerticalAlignSubTitle, VerticalAlignmentData } from "@/Data/Uikits/Grid";
import { Card, CardBody, Col, Row } from "reactstrap";
import GridFooter from "../Common/GridFooter";

export const VerticalAlignment = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={VerticalAlignmentTitle} span={VerticalAlignSubTitle} />
        <CardBody className="grid-showcase mb-0">
          <Row>
            {VerticalAlignmentData.map((item) => (
              <Col lg="4" key={item.id}>
                <Row className={`grid-vertical align-items-${item.align} m-1 g-2 bg-light`}>
                  {item.data.map((list) => (
                    <Col xs="6" key={list.id}>
                      <span className="bg-white text-dark">{list.text}</span>
                    </Col>
                  ))}
                </Row>
              </Col>
            ))}
          </Row>
        </CardBody>
        <GridFooter code={".align-items-*"} value={"start / center / end / baseline / stretch"} />
      </Card>
    </Col>
  );
};
