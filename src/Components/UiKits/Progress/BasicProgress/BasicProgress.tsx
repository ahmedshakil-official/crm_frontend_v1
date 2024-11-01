import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicProgressTitle } from "@/Constant";
import { BasicProgressData, BasicProgressSubTitle } from "@/Data/Uikits/Progress";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

export const BasicProgress = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={BasicProgressTitle} span={BasicProgressSubTitle} />
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              {BasicProgressData &&
                BasicProgressData.map((item, index) => (
                  <Progress key={index} color={item.class} value={item.value}>
                    {item.value}
                    {"%"}
                  </Progress>
                ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
